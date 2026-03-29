from dataclasses import dataclass
import math
import re
from collections import Counter
from typing import List
import joblib

TOKEN_RE = re.compile(r"[a-z0-9_@./:+-]+")


def _tokenize(text: str):
    return TOKEN_RE.findall(text.lower())


def _dot(a, b):
    if len(a) > len(b):
        a, b = b, a
    return sum(v * b.get(k, 0.0) for k, v in a.items())


def _norm(a):
    return math.sqrt(sum(v * v for v in a.values()))


@dataclass
class RetrievalHit:
    id: str
    question: str
    answer: str
    source: str
    score: float


class Retriever:
    def __init__(self, index_path: str):
        payload = joblib.load(index_path)
        self.idf = payload["idf"]
        self.doc_vectors = payload["doc_vectors"]
        self.docs = payload["docs"]
        self.doc_norms = [_norm(v) for v in self.doc_vectors]

    def search(self, query: str, top_k: int = 4):
        q_tokens = _tokenize(query)
        q_tf = Counter(q_tokens)
        q_len = max(1, len(q_tokens))
        q_vec = {
            tok: (count / q_len) * self.idf.get(tok, 0.0)
            for tok, count in q_tf.items()
            if tok in self.idf
        }
        q_norm = _norm(q_vec)

        sims = []
        for d_vec, d_norm in zip(self.doc_vectors, self.doc_norms):
            if q_norm == 0.0 or d_norm == 0.0:
                sims.append(0.0)
            else:
                sims.append(_dot(q_vec, d_vec) / (q_norm * d_norm))

        top_idx = sorted(range(len(sims)), key=lambda i: sims[i], reverse=True)[:top_k]
        hits = []
        for idx in top_idx:
            doc = self.docs[idx]
            hits.append(
                RetrievalHit(
                    id=doc["id"],
                    question=doc["question"],
                    answer=doc["answer"],
                    source=doc["source"],
                    score=float(sims[idx]),
                )
            )
        return hits
