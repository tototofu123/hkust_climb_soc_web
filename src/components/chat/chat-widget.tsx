"use client";

import { CircleHelp, Send, X } from "lucide-react";
import { FormEvent, useState } from "react";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const SUGGESTIONS = [
  "When is training?",
  "Where is the climbing wall?",
  "How do I join?",
  "How can I contact the society?",
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello. I can help with training, the wall, joining, equipment, events, and society contacts.",
    },
  ]);

  async function askQuestion(question: string) {
    const trimmedQuestion = question.trim();
    if (!trimmedQuestion || isLoading) return;

    setMessages((current) => [...current, { role: "user", content: trimmedQuestion }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmedQuestion }),
      });

      if (!response.ok) throw new Error("FAQ request failed");
      const data: { answer?: string } = await response.json();
      const answer = data.answer ?? "I could not find that in the society FAQ. Please contact Roma or Toto for help.";
      setMessages((current) => [...current, { role: "assistant", content: answer }]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: "I could not load the FAQ right now. Please contact Roma at +852 8060 0793 or Toto at +852 6618 6981.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void askQuestion(input);
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          id="society-help-panel"
          role="dialog"
          aria-label="HKUST Climbing Society help"
          className="absolute bottom-16 right-0 flex w-[min(24rem,calc(100vw-1.5rem))] max-h-[min(34rem,calc(100dvh-6rem))] flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl sm:bottom-20"
        >
          <header className="flex items-start justify-between gap-3 border-b border-[var(--border)] px-4 py-3">
            <div>
              <p className="text-sm font-bold text-[var(--text-primary)]">Society Help</p>
              <p className="text-xs text-[var(--text-secondary)]">Quick answers from the society FAQ</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--text-primary)]"
              aria-label="Close society help"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={message.role === "user" ? "ml-8 rounded-2xl bg-[var(--accent)] px-3 py-2 text-sm text-white" : "mr-4 rounded-2xl bg-[var(--surface)] px-3 py-2 text-sm leading-6 text-[var(--text-primary)]"}
              >
                {message.content}
              </div>
            ))}
            {isLoading && <div className="mr-4 rounded-2xl bg-[var(--surface)] px-3 py-2 text-sm text-[var(--text-secondary)]">Looking that up…</div>}
          </div>

          <div className="border-t border-[var(--border)] p-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => void askQuestion(suggestion)}
                  disabled={isLoading}
                  className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {suggestion}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <label htmlFor="society-help-question" className="sr-only">Ask a society question</label>
              <input
                id="society-help-question"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask a society question"
                className="min-w-0 flex-1 rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-secondary)] focus:border-[var(--accent)]"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="rounded-xl bg-[var(--accent)] px-3 text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Send question"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="society-help-panel"
        className="flex min-h-12 items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
      >
        <CircleHelp className="h-5 w-5" />
        Help
      </button>
    </div>
  );
}
