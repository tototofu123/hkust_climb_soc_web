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
  
  if (qWords.length === 0) return [];
  
  // Score each FAQ by keyword overlap
  const scored = faqs.map(faq => {
    const fQuestion = faq.question.toLowerCase();
    const fAnswer = faq.answer.toLowerCase();
    let score = 0;
    
    // Check each query word
    for (const word of qWords) {
      // Skip common words
      const skipWords = ['when', 'where', 'how', 'what', 'who', 'can', 'does', 'do', 'is', 'are', 'the', 'a', 'an', 'i', 'you', 'we', 'they', 'my', 'your', 'our'];
      if (skipWords.includes(word)) continue;
      
      // Exact match in question (highest weight)
      if (fQuestion.includes(word)) {
        score += 10;
      }
      // Match in answer
      if (fAnswer.includes(word)) {
        score += 5;
      }
      // Partial match in question
      if (fQuestion.split(/\s+/).some(w => w.includes(word) || word.includes(w))) {
        score += 3;
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
      score: Math.min(s.score / 20, 1) // Normalize to 0-1
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
