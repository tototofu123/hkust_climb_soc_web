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

function tokenize(text: string): string[] {
  return text.toLowerCase().match(/[a-z0-9@./:+-]+/g) || [];
}

function scoreMatch(query: string, faq: FAQItem): number {
  const qTokens = tokenize(query);
  const qText = tokenize(faq.question + " " + faq.answer);
  const textSet = new Set(qText);
  
  let matches = 0;
  for (const tok of qTokens) {
    if (textSet.has(tok)) matches++;
  }
  
  // Also check for partial matches in question
  const qLower = faq.question.toLowerCase();
  for (const tok of qTokens) {
    if (tok.length > 2 && qLower.includes(tok)) {
      matches += 2; // Bonus for question match
    }
  }
  
  return matches / Math.max(qTokens.length, 1);
}

export async function getRetriever(): Promise<FAQItem[]> {
  return loadFAQs();
}

export async function searchFAQ(query: string, topK: number = 4): Promise<RetrievalHit[]> {
  const faqs = await loadFAQs();
  
  if (!query.trim()) return [];
  
  // Score all FAQs
  const scored = faqs.map(faq => ({
    faq,
    score: scoreMatch(query, faq)
  }));
  
  // Sort by score
  scored.sort((a, b) => b.score - a.score);
  
  // Return top matches with score > 0
  const results: RetrievalHit[] = [];
  for (const { faq, score } of scored) {
    if (score > 0 && results.length < topK) {
      results.push({
        id: faq.id,
        question: faq.question,
        answer: faq.answer,
        source: faq.source,
        score: Math.min(score, 1) // Normalize to 0-1
      });
    }
  }
  
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
