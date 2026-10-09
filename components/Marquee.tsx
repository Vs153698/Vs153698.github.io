const items = [
  "AI AGENTS",
  "NEXT.JS",
  "WEB SYSTEMS",
  "CRM",
  "AUTOMATION",
  "REDESIGN",
  "BOOKING",
  "INTEGRATIONS",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line-dim bg-panel/60 py-3">
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap text-[11px] tracking-[0.3em] text-fog">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8">
            <span className="text-phos">▸</span> {item}
          </span>
        ))}
      </div>
    </div>
  );
}
