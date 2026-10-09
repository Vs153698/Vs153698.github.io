"use client";

import { Bot, RefreshCw, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  GREETING,
  STAGE_QUESTION,
  askLlm,
  isQuestion,
  kbAnswer,
  nextStage,
  storeLocal,
  storeSupabase,
  transcriptEmail,
  type Lead,
  type Msg,
  type Stage,
} from "@/lib/agent";

const SUGGESTIONS = ["How much does a website cost?", "How long does it take?", "What is an AI agent?"];

export function Agent() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<Msg[]>([]);
  const [stage, setStage] = useState<Stage>("need");
  const [lead, setLead] = useState<Lead>({ need: "", name: "", business: "", budget: "", contact: "" });
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [mailed, setMailed] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const push = (m: Msg) => setHistory((h) => [...h, m]);
  const later = (fn: () => void, ms = 700) => {
    timers.current.push(setTimeout(fn, ms));
  };

  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  useEffect(() => {
    const onOpen = () => openChat();
    window.addEventListener("wk:open-agent", onOpen);
    return () => window.removeEventListener("wk:open-agent", onOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [history, typing, open]);

  function openChat() {
    setOpen(true);
    if (history.length === 0) {
      setTyping(true);
      later(() => {
        setTyping(false);
        push({ role: "agent", text: GREETING });
      }, 900);
    }
  }

  function finish(l: Lead, h: Msg[]) {
    storeLocal(l, h);
    storeSupabase(l, h);
    later(() => {
      window.open(transcriptEmail(l, h), "_self");
      setMailed(true);
    }, 1200);
  }

  async function send(raw?: string) {
    const text = (raw ?? input).trim();
    if (!text) return;
    setInput("");
    push({ role: "user", text });
    setTyping(true);

    // free-form question → KB first (instant), Nemotron as fallback
    if (stage === "done" || isQuestion(text, stage)) {
      const kb = kbAnswer(text);
      const llm = kb ? null : await askLlm([...history, { role: "user", text }]);
      const answer =
        kb ??
        llm ??
        "The team's best answer needs a human eye on it — leave your email or phone in the flow and they'll reply within 24h.";
      const via: "kb" | "llm" | "fallback" = kb ? "kb" : llm ? "llm" : "fallback";
      later(() => {
        setTyping(false);
        push({ role: "agent", text: answer, via });
        if (stage !== "done") {
          later(() => push({ role: "agent", text: STAGE_QUESTION[stage as Exclude<Stage, "done">] }), 400);
        }
      });
      return;
    }

    // lead-capture flow
    const l = { ...lead, [stage]: text };
    setLead(l);
    const ns = nextStage(stage);
    setStage(ns);
    later(() => {
      setTyping(false);
      if (ns === "done") {
        push({
          role: "agent",
          text: `That's everything, ${l.name}. Your brief is packaged — opening your email app to send it to the team. They'll reply within 24 hours.`,
        });
        finish(l, [...history, { role: "user", text }]);
      } else {
        push({ role: "agent", text: STAGE_QUESTION[ns as Exclude<Stage, "done">] });
      }
    });
  }

  function reset() {
    timers.current.forEach(clearTimeout);
    setHistory([]);
    setStage("need");
    setLead({ need: "", name: "", business: "", budget: "", contact: "" });
    setMailed(false);
    setTyping(true);
    later(() => {
      setTyping(false);
      push({ role: "agent", text: GREETING });
    }, 700);
  }

  return (
    <>
      {/* floating button */}
      <button
        onClick={() => (open ? setOpen(false) : openChat())}
        aria-label="Open WebKraft AI agent"
        className="nb-btn fixed right-5 bottom-5 z-50 flex items-center gap-2 bg-yellow px-5 py-3.5 text-sm sm:right-8 sm:bottom-8"
      >
        {open ? <X className="size-5" /> : <Bot className="size-5" />}
        {open ? "CLOSE" : "ASK OUR AI"}
      </button>

      {/* chat panel */}
      {open && (
        <div className="nb-card fixed right-5 bottom-24 z-50 flex h-[540px] w-[calc(100vw-2.5rem)] max-w-[400px] flex-col overflow-hidden rounded-[20px] sm:right-8 sm:bottom-28">
          {/* header */}
          <div className="flex items-center gap-3 border-b-[3px] border-ink bg-ink px-5 py-4 text-cream">
            <span className="flex size-9 items-center justify-center rounded-xl border-2 border-yellow bg-yellow text-ink">
              <Bot className="size-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold tracking-tight">WEBKRAFT AGENT</p>
              <p className="flex items-center gap-1.5 text-[11px] font-medium text-cream/60">
                <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                online — replies instantly
              </p>
            </div>
            <button onClick={reset} aria-label="Restart chat" className="rounded-lg p-1.5 transition hover:bg-white/10">
              <RefreshCw className="size-4" />
            </button>
          </div>

          {/* messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-cream px-4 py-4">
            {history.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={
                    m.role === "user"
                      ? "max-w-[80%] rounded-2xl rounded-br-md border-2 border-ink bg-ink px-4 py-2.5 text-sm font-medium text-cream"
                      : "max-w-[85%] rounded-2xl rounded-bl-md border-2 border-ink bg-white px-4 py-2.5 text-sm leading-snug font-medium shadow-[3px_3px_0_var(--color-ink)]"
                  }
                >
                  {m.text}
              {m.role === "agent" && m.via === "llm" && (
                <span className="ml-1.5 inline-block -translate-y-0.5 border-2 border-ink bg-purple px-1 py-px align-middle text-[8px] font-bold uppercase leading-none text-cream">
                  AI
                </span>
              )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="flex gap-1.5 rounded-2xl rounded-bl-md border-2 border-ink bg-white px-4 py-3 shadow-[3px_3px_0_var(--color-ink)]">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="size-2 animate-bounce rounded-full bg-ink"
                      style={{ animationDelay: `${d * 150}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}
            {mailed && (
              <p className="pt-1 text-center text-[11px] font-medium text-fog">
                Brief saved + sent to the team. They reply within 24h.
              </p>
            )}
            {history.length === 1 && !typing && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-full border-2 border-ink bg-white px-3 py-1.5 text-xs font-semibold shadow-[2px_2px_0_var(--color-ink)] transition hover:bg-yellow"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex items-center gap-2 border-t-[3px] border-ink bg-white px-3 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={stage === "done" ? "Ask anything…" : "Type your answer…"}
              className="min-w-0 flex-1 rounded-xl border-2 border-ink bg-cream px-3.5 py-2.5 text-sm font-medium outline-none placeholder:text-fog/60 focus:bg-white"
            />
            <button
              type="submit"
              aria-label="Send"
              className="nb-border shrink-0 rounded-xl bg-yellow p-2.5 shadow-[3px_3px_0_var(--color-ink)] transition hover:translate-x-px hover:translate-y-px"
            >
              <Send className="size-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
