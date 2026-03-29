import { NextRequest, NextResponse } from "next/server";

const FAQs: { id: string; keywords: string[]; answer: string }[] = [
  { id: "training_time", keywords: ["training", "session", "tuesday", "7pm", "10pm"], answer: "Regular training is every Tuesday from 7:00 PM to 10:00 PM." },
  { id: "training_cost", keywords: ["cost", "free", "price", "money", "payment", "fee"], answer: "Weekly training sessions are free for everyone." },
  { id: "equipment_rental", keywords: ["shoes", "harness", "equipment", "rental", "rent", "own", "gear"], answer: "Climbing shoes and harnesses are provided for free." },
  { id: "experience_needed", keywords: ["beginner", "experience", "new", "never", "first"], answer: "Beginners are welcome! Committee members teach top rope and bouldering safety." },
  { id: "wall_location", keywords: ["location", "where", "address", "place", "lg4", "sports complex"], answer: "Climbing wall location: LG4, Indoor Sports Complex, HKUST." },
  { id: "wall_specs", keywords: ["size", "big", "height", "wide", "meters", "dimension"], answer: "Wall dimensions are 8 meters high by 4 meters wide." },
  { id: "contact_email", keywords: ["email", "mail", "su_climb"], answer: "Email: su_climb@connect.ust.hk" },
  { id: "contact_instagram", keywords: ["instagram", "insta", "social"], answer: "Instagram: @climbing_hkustsu" },
  { id: "membership", keywords: ["member", "membership", "join", "apply", "register"], answer: "Apply through the Society Membership form at https://forms.office.com/r/HYMFaiP8qv" },
  { id: "contact_whatsapp", keywords: ["whatsapp", "phone", "call", "contact"], answer: "Contact: +852 6618 6981 (Toto) or +49 1521 5397558 (Gus)" },
];

function extractName(message: string): string | null {
  const patterns = [/my name is (\w+)/i, /i am (\w+)/i, /i'm (\w+)/i, /this is (\w+)/i, /call me (\w+)/i];
  for (const pattern of patterns) {
    const match = message.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const rawMessage = body.message || "";
    const message = rawMessage.toLowerCase().trim();
    
    if (!message) {
      return NextResponse.json({ error: "Empty message" }, { status: 400 });
    }

    // Find matching FAQ
    let bestMatch: typeof FAQs[0] | null = null;
    let bestScore = 0;
    
    for (const faq of FAQs) {
      let score = 0;
      for (const kw of faq.keywords) {
        if (message.includes(kw.toLowerCase())) {
          score += 1;
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestMatch = faq;
      }
    }

    let answer: string;
    if (bestMatch && bestScore > 0) {
      answer = bestMatch.answer;
    } else {
      answer = "I can help with HKUST Climbing Society basics like training time, location, membership, permissions, and contacts. Please ask one of these, or contact su_climb@connect.ust.hk / @climbing_hkustsu for details.";
    }

    // Personalize
    const name = extractName(rawMessage);
    if (name && !answer.toLowerCase().startsWith(`hi ${name.toLowerCase()}`)) {
      answer = `Hi ${name}, ${answer}`;
    }

    return NextResponse.json({
      answer,
      used_fallback: !bestMatch || bestScore === 0,
      sources: bestMatch ? [{ id: bestMatch.id, source: "faq", score: bestScore }] : [],
      llm_remaining: 0,
    });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { answer: "Sorry, I'm having trouble connecting right now. Please try again later." },
      { status: 200 }
    );
  }
}
