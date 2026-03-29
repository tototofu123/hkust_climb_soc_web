import os
import json
import re


def handler(req):
    # Lazy import to avoid loading at cold start
    from retriever import Retriever

    # Get environment
    ollama_url = os.environ.get("OLLAMA_URL", "http://13.236.69.26:11434")
    use_ollama = os.environ.get("USE_OLLAMA", "false").lower() == "true"
    similarity_threshold = float(os.environ.get("SIMILARITY_THRESHOLD", "0.15"))
    top_k = int(os.environ.get("TOP_K", "4"))

    # Parse request
    try:
        payload = req.get_json()
    except:
        return {"statusCode": 400, "body": json.dumps({"error": "Invalid JSON"})}

    if not payload:
        return {"statusCode": 400, "body": json.dumps({"error": "Missing body"})}

    user_id = payload.get("user_id", "anonymous")
    message = payload.get("message", "").strip()

    if not message:
        return {"statusCode": 400, "body": json.dumps({"error": "Empty message"})}

    # Initialize retriever
    index_path = os.environ.get("INDEX_PATH", "api/chat/artifacts/index.joblib")
    try:
        retriever = Retriever(index_path)
    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({"error": f"Retriever error: {str(e)}"}),
        }

    # Search
    hits = retriever.search(message, top_k=top_k)
    best_score = hits[0].score if hits else 0.0

    # Determine if LLM should be used
    use_llm = False
    llm_remaining = 0

    # Simple response generation (retrieval-only for now)
    if not hits or best_score < similarity_threshold:
        answer = (
            "I can help with HKUST Climbing Society basics like training time, location, membership, permissions, and contacts. "
            "Please ask one of these, or contact su_climb@connect.ust.hk / @climbing_hkustsu for details."
        )
        used_fallback = True
        used_hits = []
    else:
        answer = hits[0].answer
        used_fallback = False
        used_hits = hits

    # Extract name from message
    name_match = re.search(
        r"(?:my name is|i am|i'm|call me)\s+(\w+)", message, re.IGNORECASE
    )
    if name_match:
        user_name = name_match.group(1)
        if not answer.lower().startswith(f"hi {user_name.lower()}"):
            answer = f"Hi {user_name}, {answer}"

    sources = [
        {"id": h.id, "source": h.source, "score": round(h.score, 4)} for h in used_hits
    ]

    return {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps(
            {
                "answer": answer,
                "used_fallback": used_fallback,
                "sources": sources,
                "llm_remaining": llm_remaining,
            }
        ),
    }
