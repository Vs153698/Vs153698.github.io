import { services } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-28">
      <Reveal>
        <div className="flex items-center gap-4 text-[11px] tracking-[0.3em] text-fog">
          <span className="text-phos">[ 01 ]</span> MODULES
          <span className="h-px flex-1 bg-line-dim" />
          <span className="hidden sm:inline">CAPABILITY INDEX</span>
        </div>
        <h2 className="glow mt-8 max-w-2xl text-3xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          INSTALLED MODULES<span className="text-phos">.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 border border-line bg-panel/60">
          <div className="hidden grid-cols-[90px_1.1fr_2fr_auto] gap-4 border-b border-line px-5 py-2.5 text-[10px] tracking-[0.25em] text-fog md:grid">
            <span>ID</span>
            <span>MODULE</span>
            <span>FUNCTION</span>
            <span className="text-right">TAGS</span>
          </div>
          {services.map((s, i) => (
            <div
              key={s.title}
              className="term-row grid grid-cols-1 gap-2 border-b border-line-dim px-5 py-5 last:border-0 md:grid-cols-[90px_1.1fr_2fr_auto] md:items-center md:gap-4"
            >
              <span className="text-xs text-phos">
                M-{String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-bold tracking-tight text-zinc-100">
                {s.title}
              </span>
              <span className="row-dim text-xs leading-relaxed text-fog">
                {s.desc}
              </span>
              <span className="flex flex-wrap gap-2 md:justify-end">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-line px-2 py-0.5 text-[10px] text-phos-bright/80"
                  >
                    {t}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
