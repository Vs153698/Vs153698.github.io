const items = [
  "AI Agents",
  "Next.js",
  "Web Development",
  "CRM Systems",
  "Automation",
  "Website Redesign",
  "Booking Platforms",
  "APIs & Integrations",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative border-y border-line bg-panel/50 py-4 overflow-hidden">
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 font-mono text-xs uppercase tracking-[0.25em] text-fog"
          >
            {item}
            <span className="text-acid">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
