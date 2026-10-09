// ── WebKraft site agent ─────────────────────────────────────────────
// Lead-capture chatbot, fully client-side:
//  • answers visitor questions: local KB first, then a free tiny LLM relay
//  • runs a lead-capture flow (need → name → business → budget → contact)
//  • saves transcripts to localStorage and opens a pre-filled email
//
// Optional upgrades when you want them (lib/agent.ts consts below):
//  • SUPABASE_URL + SUPABASE_ANON_KEY → transcripts also land in Postgres
//    (run supabase/schema.sql first)
//  • LLM_ENDPOINT → your own OpenAI-compatible endpoint ({history}->{reply})
//    for private, key-backed answers instead of the free relay.

export const AGENT_EMAIL_TO = "hello@webkraft.in"; // where transcripts go

export const SUPABASE_URL = ""; // e.g. https://xyz.supabase.co
export const SUPABASE_ANON_KEY = ""; // public anon key (RLS insert-only)
export const SUPABASE_TABLE = "lead_chats";

export const LLM_ENDPOINT = ""; // optional custom endpoint

const FREE_LLM_URL = "https://text.pollinations.ai/"; // free, keyless tiny-model relay
const LLM_SYSTEM = [
  "You are the WebKraft site agent, a chat widget on webkraft.in.",
  "WebKraft is a small software lab (India & Australia, since 2021) that builds websites, platforms, booking engines, CRMs, B2B commerce and AI agents for WhatsApp/Telegram.",
  "Pricing is fixed-scope after a free consultation, quote within 48 hours — never invent numbers.",
  "Redesigns take 1-2 weeks, platforms 4-8 weeks.",
  "Rules: under 55 words, plain confident English, no emojis, no lists; end by nudging the visitor to share their email or WhatsApp for a quote.",
  "If asked something unrelated to WebKraft's services, answer briefly then steer back to their project.",
].join(" ");

export type Stage = "need" | "name" | "business" | "budget" | "contact" | "done";

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
    keys: ["price", "cost", "charge", "quote", "fees", "kitna", "how much", "expensive", "cheap"],
    answer:
      "Every project is fixed-scope — after a short free consultation you get one clear price within 48 hours. No hourly billing, no mid-build surprises. Simple sites start small; platforms are quoted by module. Want me to start your quote? Just answer my questions.",
  },
  {
    keys: ["long", "time", "fast", "duration", "deliver", "when", "days", "weeks", "deadline"],
    answer:
      "A website redesign ships in 1–2 weeks. Custom platforms, booking engines or CRMs run 4–8 weeks by module. You see clickable progress every week — no big-reveal-at-the-end nonsense.",
  },
  {
    keys: ["service", "what can", "offer", "apps", "mobile", "app", "pwa"],
    answer:
      "We build websites, web platforms, booking engines, CRMs, B2B commerce — plus AI agents that answer customers on your site, WhatsApp or Telegram. Native mobile via React Native when a project truly needs it. Everything you saw in 'Pick your weapon'.",
  },
  {
    keys: ["ai agent", "agent", "chatbot", "automation", "bot"],
    answer:
      "An AI agent is software that works for you 24/7 — answering customer chats, qualifying leads, chasing documents. We build them into websites, WhatsApp and Telegram. You're literally talking to one right now.",
  },
  {
    keys: ["who", "about", "team", "where", "located", "kota", "india", "australia", "company"],
    answer:
      "WebKraft is a compact software lab — small on purpose, so the people you talk to are the people who build. Working with businesses in India & Australia since 2021.",
  },
  {
    keys: ["tech", "stack", "framework", "react", "next", "language", "hosting", "host", "domain"],
    answer:
      "TypeScript, Next.js, Node, Postgres and Supabase for platforms — and LLM-backed agents where they earn their keep. Boring tech, exciting results: fast and maintainable for years. Hosting and domain setup are part of every project.",
  },
  {
    keys: ["seo", "google", "ranking", "redesign", "old website", "migration", "existing"],
    answer:
      "Yes — rescue & redesign is a core service. We keep your URLs and content structure, redirect properly, and modernise everything visitors see without losing Google rankings.",
  },
  {
    keys: ["maintain", "support", "after", "update", "bug", "warranty"],
    answer:
      "We stay on the systems we ship. Post-launch support covers fixes, small updates and monitoring — you won't be left alone with something you can't touch.",
  },
  {
    keys: ["human", "call", "phone", "whatsapp", "talk to", "person", "email", "contact", "owner"],
    answer:
      "Want a human? Drop your email or phone in the flow and the team replies within 24 hours. You can also mail hello@webkraft.in directly.",
  },
  {
    keys: ["hello", "hi", "hey", "namaste", "yo"],
    answer:
      "Hey! I'm the WebKraft agent. I can answer questions about services, pricing and timelines — and I'll grab a few details so the team can send you a fixed quote.",
  },
];

// word-boundary match — "vaibhav" must NOT match the key "ai"
const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const keyRes = new Map(
  kb.flatMap((e) => e.keys.map((k) => [k, new RegExp(`\\b${escapeRe(k)}\\b`, "i")] as const))
);

const GREETING_RE = /\b(hello|hi+|hey|namaste|yo|hola|good\s(morning|afternoon|evening))\b/i;
const QUESTION_RE = /\b(what|how|which|why|who|when|where|can|could|do|does|did|is|are|am|tell|show|explain|wanna|want to)\b/i;

export function kbAnswer(text: string): string | null {
  let best: { score: number; answer: string } | null = null;
  for (const e of kb) {
    let score = 0;
    for (const k of e.keys) if (keyRes.get(k)?.test(text)) score += k.length;
    if (score > 0 && (!best || score > best.score)) best = { score, answer: e.answer };
  }
  return best?.answer ?? null;
}

// Route to answering only when it really is a question — short answers like
// "vaibhav" or "ai agent for my shop" belong to the lead flow.
export function isQuestion(text: string): boolean {
  if (text.includes("?")) return true;
  if (GREETING_RE.test(text)) return true;
  return QUESTION_RE.test(text) && kbAnswer(text) !== null;
}

export const GREETING =
  "Hey, I'm the WebKraft agent. Ask me anything — or let's get you a fixed quote in 48h. First: what do you need built or fixed? (website, redesign, app, AI agent…)";

export const STAGE_QUESTION: Record<Exclude<Stage, "done">, string> = {
  need: "What do you need built or fixed? (website, redesign, app, AI agent…)",
  name: "Nice. What's your name?",
  business: "Got it — what's the business or project called?",
  budget: "Rough budget range? (a ballpark is fine: under ₹50k, ₹50k–2L, 2L+ …)",
  contact: "Last one — where should the team send the quote? (email or WhatsApp number)",
};

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

type OaiMsg = { role: "system" | "user" | "assistant"; content: string };

// Free tiny-model relay (no key). Fails soft → caller falls back to KB answer.
export async function askLlm(history: Msg[]): Promise<string | null> {
  const messages: OaiMsg[] = [
    { role: "system", content: LLM_SYSTEM },
    ...history.map((m) => ({ role: m.role === "agent" ? ("assistant" as const) : ("user" as const), content: m.text })),
  ];

  try {
    let url = FREE_LLM_URL;
    let headers: Record<string, string> = { "Content-Type": "application/json" };
    let body = JSON.stringify({ model: "openai", messages });

    // custom private endpoint overrides the free relay ({history} -> {reply})
    if (LLM_ENDPOINT) {
      url = LLM_ENDPOINT;
      body = JSON.stringify({ history });
      const r = await fetch(url, { method: "POST", headers, body });
      if (!r.ok) return null;
      const j = await r.json().catch(() => null);
      return typeof j?.reply === "string" && j.reply.trim() ? j.reply.trim().slice(0, 500) : null;
    }

    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 9000);
    const r = await fetch(url, { method: "POST", headers, body, signal: ctrl.signal });
    clearTimeout(t);
    if (!r.ok) return null;
    const text = (await r.text()).trim();
    return text ? text.slice(0, 500) : null;
  } catch {
    return null;
  }
}
