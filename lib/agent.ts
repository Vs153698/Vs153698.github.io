// ── WebKraft site agent ─────────────────────────────────────────────
// Lead-capture chatbot. Works fully client-side today:
//  • answers visitor questions from the local knowledge base (KB)
//  • runs a lead-capture flow (name → business → need → budget → contact)
//  • saves transcripts to localStorage and opens a pre-filled email
//
// When credentials arrive, set the two consts below to also push
// transcripts to Supabase (see supabase/schema.sql), and set
// LLM_ENDPOINT to switch free-form answers to a real LLM call.

export const AGENT_EMAIL_TO = "hello@webkraft.in"; // where transcripts go

export const SUPABASE_URL = ""; // e.g. https://xyz.supabase.co
export const SUPABASE_ANON_KEY = ""; // public anon key (RLS insert-only)
export const SUPABASE_TABLE = "lead_chats";

export const LLM_ENDPOINT = ""; // optional: POST {message, history} -> {reply}

export type Stage =
  | "need"
  | "name"
  | "business"
  | "budget"
  | "contact"
  | "done";

export type Msg = { role: "agent" | "user"; text: string };

export type Lead = {
  need: string;
  name: string;
  business: string;
  budget: string;
  contact: string;
};

const kb: { keys: string[]; answer: string }[] = [
  {
    keys: ["price", "cost", "charge", "quote", "fees", "kitna", "how much"],
    answer:
      "Every project is fixed-scope — after a short free consultation you get one clear price within 48 hours. No hourly billing, no mid-build surprises. Simple sites start small; platforms are quoted by module. Want me to start your quote? Just answer my questions.",
  },
  {
    keys: ["long", "time", "fast", "duration", "deliver", "when", "days", "weeks"],
    answer:
      "A website redesign ships in 1–2 weeks. Custom platforms, booking engines or CRMs run 4–8 weeks by module. You see clickable progress every week — no big-reveal-at-the-end nonsense.",
  },
  {
    keys: ["service", "do you do", "what can", "offer", "apps", "mobile", "app "],
    answer:
      "We build websites, web platforms, booking engines, CRMs, B2B commerce — plus AI agents that answer customers on your site, WhatsApp or Telegram. Native mobile via React Native when a project truly needs it. Everything you saw in 'Pick your weapon'.",
  },
  {
    keys: ["ai", "agent", "bot", "chatbot", "automation"],
    answer:
      "An AI agent is software that works for you 24/7 — answering customer chats, qualifying leads, chasing documents. We build them into websites, WhatsApp and Telegram. You're literally talking to one right now.",
  },
  {
    keys: ["who", "about", "team", "where", "located", "kota", "india", "australia"],
    answer:
      "WebKraft is a compact software lab — small on purpose, so the people you talk to are the people who build. Working with businesses in India & Australia since 2021.",
  },
  {
    keys: ["tech", "stack", "framework", "react", "next", "language"],
    answer:
      "TypeScript, Next.js, Node, Postgres and Supabase for platforms — and LLM-backed agents where they earn their keep. Boring tech, exciting results: it stays fast and maintainable for years.",
  },
  {
    keys: ["seo", "google", "ranking", "redesign", "old website", "migration"],
    answer:
      "Yes — rescue & redesign is a core service. We keep your URLs and content structure, redirect properly, and modernise everything visitors see without losing Google rankings.",
  },
  {
    keys: ["human", "call", "phone", "whatsapp", "talk to", "person", "email"],
    answer:
      "Want a human? Drop your email or phone in the flow and Vaibhav's team replies within 24 hours. You can also mail hello@webkraft.in directly.",
  },
  {
    keys: ["hello", "hi", "hey", "namaste"],
    answer:
      "Hey! I'm the WebKraft agent. I can answer questions about services, pricing and timelines — and I'll grab a few details so the team can send you a fixed quote.",
  },
];

export const GREETING =
  "Hey, I'm the WebKraft agent. Ask me anything — or let's get you a fixed quote in 48h. First: what do you need built or fixed? (website, redesign, app, AI agent…)";

export const STAGE_QUESTION: Record<Exclude<Stage, "done">, string> = {
  need: "What do you need built or fixed? (website, redesign, app, AI agent…)",
  name: "Nice. What's your name?",
  business: "Got it — what's the business or project called?",
  budget: "Rough budget range? (a ballpark is fine: under ₹50k, ₹50k–2L, 2L+ …)",
  contact: "Last one — where should the team send the quote? (email or WhatsApp number)",
};

export function kbAnswer(text: string): string | null {
  const t = text.toLowerCase();
  let best: { score: number; answer: string } | null = null;
  for (const e of kb) {
    let score = 0;
    for (const k of e.keys) if (t.includes(k)) score += k.length;
    if (score > 0 && (!best || score > best.score)) best = { score, answer: e.answer };
  }
  return best?.answer ?? null;
}

export function looksLikeQuestion(text: string): boolean {
  return text.includes("?") || kbAnswer(text) !== null;
}

export function nextStage(stage: Stage): Stage {
  const order: Stage[] = ["need", "name", "business", "budget", "contact", "done"];
  return order[Math.min(order.indexOf(stage) + 1, order.length - 1)];
}

export function transcriptEmail(lead: Lead, history: Msg[]): string {
  const lines = [
    `New lead from WebKraft site agent`,
    ``,
    `Name:     ${lead.name}`,
    `Business: ${lead.business}`,
    `Need:     ${lead.need}`,
    `Budget:   ${lead.budget}`,
    `Contact:  ${lead.contact}`,
    ``,
    `--- Conversation ---`,
    ...history.map((m) => `${m.role === "user" ? "Visitor" : "Agent"}: ${m.text}`),
  ];
  const subject = encodeURIComponent(`New lead: ${lead.name} — ${lead.business}`);
  const body = encodeURIComponent(lines.join("\n")).slice(0, 1800);
  return `mailto:${AGENT_EMAIL_TO}?subject=${subject}&body=${body}`;
}

export function storeLocal(lead: Lead, history: Msg[]) {
  try {
    const prev = JSON.parse(localStorage.getItem("wk_leads") ?? "[]");
    prev.push({ at: new Date().toISOString(), lead, history });
    localStorage.setItem("wk_leads", JSON.stringify(prev));
  } catch {
    /* storage unavailable — ignore */
  }
}

export async function storeSupabase(lead: Lead, history: Msg[]) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return;
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ lead, messages: history, source: "site-agent" }),
    });
  } catch {
    /* offline — transcript still kept in localStorage */
  }
}

export async function askLlm(history: Msg[]): Promise<string | null> {
  if (!LLM_ENDPOINT) return null;
  try {
    const r = await fetch(LLM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ history }),
    });
    if (!r.ok) return null;
    const j = await r.json();
    return typeof j?.reply === "string" ? j.reply : null;
  } catch {
    return null;
  }
}
