import { NextRequest, NextResponse } from "next/server";
import { searchFAQ, extractName } from "@/lib/retriever";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    const userId = body.user_id || "anonymous";
    const message = body.message?.trim();
    
    if (!message) {
      return NextResponse.json(
        { error: "Empty message" },
        { status: 400 }
      );
    }

    // Search the FAQ
    const hits = await searchFAQ(message, 4);
    const bestScore = hits.length > 0 ? hits[0].score : 0;
    const SIMILARITY_THRESHOLD = 0.15;

    let answer: string;
    let usedFallback = false;
    let usedHits = hits;

    if (!hits || bestScore < SIMILARITY_THRESHOLD) {
      answer = "I can help with HKUST Climbing Society basics like training time, location, membership, permissions, and contacts. Please ask one of these, or contact su_climb@connect.ust.hk / @climbing_hkustsu for details.";
      usedFallback = true;
      usedHits = [];
    } else {
      answer = hits[0].answer;
      usedFallback = false;
    }

    // Extract name and personalize
    const name = extractName(message);
    if (name && !answer.toLowerCase().startsWith(`hi ${name.toLowerCase()}`)) {
      answer = `Hi ${name}, ${answer}`;
    }

    const sources = usedHits.map(h => ({
      id: h.id,
      source: h.source,
      score: Math.round(h.score * 10000) / 10000,
    }));

    return NextResponse.json({
      answer,
      used_fallback: usedFallback,
      sources,
      llm_remaining: 0, // LLM disabled on Vercel for now
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process chat request" },
      { status: 500 }
    );
  }
}
