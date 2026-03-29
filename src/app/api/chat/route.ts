import { NextRequest, NextResponse } from "next/server";
import { searchFAQ, extractName, RetrievalHit } from "@/lib/retriever";

export const dynamic = 'force-dynamic';

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
    let hits: RetrievalHit[] = [];
    try {
      hits = await searchFAQ(message, 4);
    } catch (e) {
      console.error("Search error:", e);
      hits = [];
    }
    
    const SIMILARITY_THRESHOLD = 0.1;

    let answer: string;
    let usedFallback = false;
    let usedHits = hits;

    if (!hits || hits.length === 0 || (hits[0]?.score || 0) < SIMILARITY_THRESHOLD) {
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

    const sources = usedHits.map((h: any) => ({
      id: h.id,
      source: h.source,
      score: Math.round((h.score || 0) * 10000) / 10000,
    }));

    return NextResponse.json({
      answer,
      used_fallback: usedFallback,
      sources,
      llm_remaining: 0,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { answer: "Sorry, I'm having trouble connecting right now. Please try again later." },
      { status: 200 }
    );
  }
}
