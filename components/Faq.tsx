import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "How much will my website cost?",
    a: "Every project is fixed-scope. After a short free consultation you get one clear price within 48 hours — no hourly billing, no surprises mid-build. Simple business sites and redesigns start small; platforms and CRMs are quoted by module.",
  },
  {
    q: "How long does a build take?",
    a: "A website redesign typically ships in 1–2 weeks. Custom platforms, booking engines or CRMs run 4–8 weeks depending on modules. You see clickable progress every week, not a big reveal at the end.",
  },
  {
    q: "Can you redesign our existing website without losing Google rankings?",
    a: "Yes — rescue & redesign is a core service. We preserve your URLs and content structure, redirect properly, and keep SEO equity intact while modernising everything visitors see.",
  },
  {
    q: "Do you build apps too, or only websites?",
    a: "Both. We build web platforms and installable web apps (PWA), and take on native mobile through React Native when a project genuinely needs it. The six systems on this page are all in production.",
  },
  {
    q: "What exactly is an 'AI agent' in your services?",
    a: "Software that works for you around the clock — answering customer chats, qualifying leads, chasing documents, summarising enquiries. We build them into your website, WhatsApp or Telegram. You can talk to one right now via the button below.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-24">
      <Reveal>
        <p className="text-center text-sm font-semibold text-accent">FAQ</p>
        <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-ink sm:text-[44px] sm:leading-[1.15]">
          Before you ask.
        </h2>
      </Reveal>

      <div className="mt-10 space-y-3">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.04}>
            <details className="card-l group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-ink">
                {f.q}
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-mist text-sm text-fog transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-fog">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
