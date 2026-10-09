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
    <div className="relative overflow-hidden border-y border-line bg-white/[0.02] py-5">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-sm font-medium tracking-wide text-zinc-400"
          >
            {item}
            <span className="text-gradient-warm font-bold">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
