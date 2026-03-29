"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Loader2, Bot, User } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatResponse {
  answer: string;
  used_fallback: boolean;
  sources: { id: string; source: string; score: number }[];
  llm_remaining: number;
}

function generateUserId(): string {
  if (typeof window === "undefined") return "anonymous";
  let id = localStorage.getItem("hkust_climb_user_id");
  if (!id) {
    id = "user_" + Math.random().toString(36).substring(2, 15);
    localStorage.setItem("hkust_climb_user_id", id);
  }
  return id;
}

function getUserName(): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem("hkust_climb_user_name") || "";
}

function setUserName(name: string) {
  if (typeof window === "undefined") return;
  if (name) {
    localStorage.setItem("hkust_climb_user_name", name);
  }
}

function extractName(message: string): string | null {
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

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! I'm the HKUST Climbing Society bot. Ask me anything about training, membership, equipment, or events!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [llmRemaining, setLlmRemaining] = useState<number>(5);
  const [userName, setUserNameState] = useState<string>("");
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const userIdRef = useRef<string>("");

  const handleResize = useCallback(() => {
    const visualViewport = window.visualViewport;
    if (visualViewport) {
      const keyboardOpen = window.innerHeight - visualViewport.height > 100;
      setKeyboardHeight(keyboardOpen ? window.innerHeight - visualViewport.height : 0);
    }
  }, []);

  useEffect(() => {
    userIdRef.current = generateUserId();
    setUserNameState(getUserName());
    
    if (typeof window !== "undefined" && window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleResize);
      return () => window.visualViewport?.removeEventListener("resize", handleResize);
    }
  }, [handleResize]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    
    // Extract and save name from user message
    const extractedName = extractName(userMessage);
    if (extractedName) {
      setUserName(extractedName);
      setUserNameState(extractedName);
    }
    
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);
      
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userIdRef.current,
          message: userMessage,
        }),
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);

      if (!response.ok) throw new Error("Failed to get response");

      const data: ChatResponse = await response.json();
      
      // Personalize response with user name if detected
      let answer = data.answer;
      if (userName && !answer.toLowerCase().includes(userName.toLowerCase())) {
        answer = `Hi ${userName}, ${answer}`;
      }
      
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: answer },
      ]);
      setLlmRemaining(data.llm_remaining);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error && error.name === "AbortError" 
        ? "Request timed out. Please try again." 
        : "Sorry, I'm having trouble connecting right now. Please try again later.";
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: errorMessage,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${
          isOpen ? "hidden" : "flex items-center justify-center"
        }`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="fixed bottom-0 right-0 left-0 z-50 md:bottom-6 md:right-6 md:left-auto md:w-96 md:max-w-[calc(100vw-3rem)] md:h-[500px] md:max-h-[calc(100vh-6rem)] h-[calc(100vh-4rem)] bg-[var(--card)] border border-[var(--border)] md:rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          style={keyboardHeight > 0 ? { height: `calc(100vh - ${keyboardHeight}px)` } : {}}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="font-semibold">HKUST Climbing Bot</span>
              {userName && (
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                  {userName}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              {llmRemaining < 5 && (
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full" title="AI messages remaining">
                  🤖 {llmRemaining}
                </span>
              )}
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[80%] ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-[var(--surface)] border border-[var(--border)]"
                  }`}
                >
                  {msg.role === "user" ? (
                    <User className="w-4 h-4 mb-1" />
                  ) : (
                    <Bot className="w-4 h-4 mb-1" />
                  )}
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2">
                <div className="bg-[var(--surface)] border border-[var(--border)] p-3 rounded-2xl">
                  <Loader2 className="w-4 h-4 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[var(--border)]">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about climbing..."
                className="flex-1 bg-[var(--surface)] border border-[var(--border)] rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
