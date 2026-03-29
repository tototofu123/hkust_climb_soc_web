import { NextRequest, NextResponse } from "next/server";
import { searchFAQ, extractName, RetrievalHit } from "@/lib/retriever";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Test the search function
    const testQueries = ["training", "time", "equipment", "location"];
    const results: Record<string, any> = {};
    
    for (const q of testQueries) {
      const hits = await searchFAQ(q, 4);
      results[q] = hits.map(h => ({ id: h.id, score: h.score, question: h.question }));
    }
    
    return NextResponse.json({
      status: "ok",
      faqsLoaded: true,
      testResults: results
    });
  } catch (error: any) {
    return NextResponse.json({
      status: "error",
      error: error.message,
      stack: error.stack
    }, { status: 500 });
  }
}
