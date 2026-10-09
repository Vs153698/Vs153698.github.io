import { services } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-28">
      <Reveal>
        <div className="flex items-center gap-4 text-[11px] tracking-[0.3em] text-fog">
          <span className="text-phos">[ 01 ]</span> MODULES
          <span className="h-px flex-1 bg-line-dim" />
          <span className="hidden sm:inline">SERVICE CAPABILITY INDEX</span>
        </div>
        <h2 className="glow mt-8 max-w-2xl text-3xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          WHAT WE OPERATE<span className="text-phos">.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line-dim md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group bg-ink p-7 transition-colors hover:bg-panel ${
                s.big ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-phos">
                  M-{String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[10px] tracking-[0.2em] text-fog opacity-0 transition-opacity group-hover:opacity-100">
                  [ LOADED ]
                </span>
              </div>
              <h3 className="mt-4 text-base font-bold tracking-tight text-zinc-100 group-hover:text-phos-bright">
                {s.title}
              </h3>
              <p className="mt-3 min-h-[72px] text-xs leading-relaxed text-fog">
                {s.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-line-dim pt-4">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-line px-2 py-0.5 text-[10px] text-phos-bright/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
