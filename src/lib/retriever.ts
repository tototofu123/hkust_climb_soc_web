export interface RetrievalHit {
  id: string;
  question: string;
  answer: string;
  source: string;
  score: number;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  source: string;
}

let _faqs: FAQItem[] | null = null;

async function loadFAQs(): Promise<FAQItem[]> {
  if (!_faqs) {
    const res = await fetch('/faq.json');
    _faqs = await res.json() as FAQItem[];
  }
  return _faqs;
}

export async function searchFAQ(query: string, topK: number = 4): Promise<RetrievalHit[]> {
  const faqs = await loadFAQs();
  
  if (!query.trim()) return [];
  
  const qLower = query.toLowerCase();
  const qWords = qLower.split(/\s+/).filter(w => w.length > 1);
  
  // Score each FAQ by keyword overlap
  const scored = faqs.map(faq => {
    const fLower = (faq.question + " " + faq.answer).toLowerCase();
    let score = 0;
    
    // Check each query word
    for (const word of qWords) {
      // Exact match in question (highest weight)
      if (faq.question.toLowerCase().includes(word)) {
        score += 3;
      }
      // Match in answer
      if (faq.answer.toLowerCase().includes(word)) {
        score += 1;
      }
      // Partial match
      if (fLower.includes(word)) {
        score += 1;
      }
    }
    
    return { faq, score };
  });
  
  // Sort by score descending
  scored.sort((a, b) => b.score - a.score);
  
  // Return top results with score > 0
  const results: RetrievalHit[] = scored
    .filter(s => s.score > 0)
    .slice(0, topK)
    .map(s => ({
      id: s.faq.id,
      question: s.faq.question,
      answer: s.faq.answer,
      source: s.faq.source,
      score: Math.min(s.score / 10, 1) // Normalize to 0-1
    }));
  
  return results;
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
