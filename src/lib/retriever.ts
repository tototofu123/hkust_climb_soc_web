export interface RetrievalHit {
  id: string;
  question: string;
  answer: string;
  source: string;
  score: number;
}

interface Doc {
  id: string;
  question: string;
  answer: string;
  source: string;
}

interface IndexPayload {
  idf: Record<string, number>;
  doc_vectors: Record<string, number>[];
  docs: Doc[];
}

const TOKEN_RE = /[a-z0-9_@./:+-]+/g;

function tokenize(text: string): string[] {
  return text.toLowerCase().match(TOKEN_RE) || [];
}

function dot(a: Record<string, number>, b: Record<string, number>): number {
  const keys = Object.keys(a).length > Object.keys(b).length ? Object.keys(b) : Object.keys(a);
  return keys.reduce((sum, k) => sum + (a[k] || 0) * (b[k] || 0), 0);
}

function norm(vec: Record<string, number>): number {
  return Math.sqrt(Object.values(vec).reduce((sum, v) => sum + v * v, 0));
}

class Retriever {
  private idf: Record<string, number>;
  private docVectors: Record<string, number>[];
  private docs: Doc[];
  private docNorms: number[];

  constructor(payload: IndexPayload) {
    this.idf = payload.idf;
    this.docVectors = payload.doc_vectors;
    this.docs = payload.docs;
    this.docNorms = this.docVectors.map(v => norm(v));
  }

  search(query: string, topK: number = 4): RetrievalHit[] {
    const qTokens = tokenize(query);
    const qTf: Record<string, number> = {};
    for (const tok of qTokens) {
      qTf[tok] = (qTf[tok] || 0) + 1;
    }
    const qLen = Math.max(1, qTokens.length);
    const qVec: Record<string, number> = {};
    for (const [tok, count] of Object.entries(qTf)) {
      if (tok in this.idf) {
        qVec[tok] = (count / qLen) * this.idf[tok];
      }
    }
    const qNormVal = norm(qVec);

    const sims: number[] = [];
    for (let i = 0; i < this.docVectors.length; i++) {
      const dVec = this.docVectors[i];
      const dNorm = this.docNorms[i];
      if (qNormVal === 0 || dNorm === 0) {
        sims.push(0);
      } else {
        sims.push(dot(qVec, dVec) / (qNormVal * dNorm));
      }
    }

    const topIdx = sims
      .map((score, idx) => ({ score, idx }))
      .sort((a, b) => b.score - a.score)
      .slice(0, topK)
      .map(x => x.idx);

    return topIdx.map(idx => ({
      id: this.docs[idx].id,
      question: this.docs[idx].question,
      answer: this.docs[idx].answer,
      source: this.docs[idx].source,
      score: sims[idx],
    }));
  }
}

let _retriever: Retriever | null = null;

export async function getRetriever(): Promise<Retriever> {
  if (!_retriever) {
    const res = await fetch('/index.json');
    const payload = await res.json() as IndexPayload;
    _retriever = new Retriever(payload);
  }
  return _retriever;
}

export async function searchFAQ(query: string, topK: number = 4): Promise<RetrievalHit[]> {
  const retriever = await getRetriever();
  return retriever.search(query, topK);
}

export function extractName(message: string): string | null {
  const patterns = [
    /my name is (\w+)/i,
    /i am (\w+)/i,
    /i'm (\w+)/i,
    /this is (\w+)/i,
    /call me (\w+)/i,
  ];
  for (const pattern of patterns) {
    const match = message.match(pattern);
    if (match) return match[1];
  }
  return null;
}
