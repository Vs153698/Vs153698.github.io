const clients = [
  "National Book of Records",
  "HommCorp · Melbourne",
  "Willsmeet",
  "Chennai Bulls Rugby",
  "ProSportsData",
  "NBR CRM",
];

export function Marquee() {
  const row = [...clients, ...clients];
  return (
    <section className="border-y border-line bg-mist py-8">
      <p className="text-center text-[11px] font-semibold tracking-[0.2em] text-fog uppercase">
        Systems running for teams at
      </p>
      <div className="relative mt-5 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-mist to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-mist to-transparent" />
        <div className="animate-marquee flex w-max items-center gap-14 whitespace-nowrap">
          {row.map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="flex items-center gap-14 text-[15px] font-semibold text-zinc-400"
            >
              {c}
              <span className="size-1 rounded-full bg-zinc-300" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
