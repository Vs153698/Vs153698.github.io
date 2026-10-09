const items = [
  "AI AGENTS",
  "WEB PLATFORMS",
  "CRM SYSTEMS",
  "BOOKING ENGINES",
  "PAYMENTS",
  "B2B COMMERCE",
  "REDESIGN & RESCUE",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line bg-panel/60 py-3.5">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap text-sm text-fog">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            <span
              className="size-1.5 rounded-full"
              style={{ background: "linear-gradient(135deg,#8b5cf6,#06b6d4)" }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
