import { NextRequest, NextResponse } from "next/server";

type Faq = {
  id: string;
  keywords: string[];
  answer: string;
};

const FAQS: Faq[] = [
  {
    id: "training",
    keywords: ["training", "session", "tuesday", "time", "schedule", "630", "9:30"],
    answer: "Training runs on Tuesdays from 6:30 PM to 9:30 PM during the published autumn and spring windows. The Events page calendar shows every active training date and public-holiday cancellation.",
  },
  {
    id: "wall",
    keywords: ["wall", "location", "where", "lg4", "climbing wall", "hangboard"],
    answer: "The climbing wall and hangboard area are at LG4, HKUST. Please follow society and wall rules when using the facilities.",
  },
  {
    id: "join",
    keywords: ["join", "membership", "apply", "member", "signup", "sign up"],
    answer: "You can join through the Apply page. Weekly training is open to society members, and the page explains the current membership and safety requirements.",
  },
  {
    id: "equipment",
    keywords: ["equipment", "gear", "shoe", "shoes", "harness", "rent", "rental", "chalk"],
    answer: "Check the Wall page for available climbing and training equipment. For rentals or equipment questions, contact the society directly.",
  },
  {
    id: "events",
    keywords: ["event", "competition", "outing", "trip", "calendar", "registration"],
    answer: "The Events page has the current training calendar and event updates. Registration links appear there when an event is open.",
  },
  {
    id: "contact",
    keywords: ["contact", "phone", "call", "whatsapp", "email", "roma", "toto", "instagram"],
    answer: "Contact Roma at +852 8060 0793 first, then Toto at +852 6618 6981. You can also email su_climb@connect.ust.hk or message @climbing_hkustsu on Instagram.",
  },
  {
    id: "cost",
    keywords: ["cost", "price", "fee", "money", "pay", "payment"],
    answer: "Please check the Apply, Shop, or Events page for the relevant current fee. If a fee is not listed, contact Roma or Toto for confirmation.",
  },
];

function scoreFaq(question: string, faq: Faq) {
  const normalizedQuestion = question.toLowerCase();
  return faq.keywords.reduce((score, keyword) => {
    return normalizedQuestion.includes(keyword) ? score + keyword.length : score;
  }, 0);
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!message) {
    return NextResponse.json({ answer: "Please enter a question about the society." }, { status: 400 });
  }

  const ranked = FAQS.map((faq) => ({ faq, score: scoreFaq(message, faq) })).sort((left, right) => right.score - left.score);
  const bestMatch = ranked[0];

  if (!bestMatch || bestMatch.score === 0) {
    return NextResponse.json({
      answer: "I can help with training, the wall, joining, equipment, events, and contact details. For another question, please contact Roma at +852 8060 0793 or Toto at +852 6618 6981.",
      used_fallback: true,
    });
  }

  return NextResponse.json({
    answer: bestMatch.faq.answer,
    used_fallback: false,
    topic: bestMatch.faq.id,
  });
}
