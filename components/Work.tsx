import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-28">
      <Reveal>
        <div className="flex items-center gap-4 text-[11px] tracking-[0.3em] text-fog">
          <span className="text-phos">[ 02 ]</span> DEPLOYED SYSTEMS
          <span className="h-px flex-1 bg-line-dim" />
          <span className="hidden sm:inline">ALL LIVE IN PRODUCTION</span>
        </div>
        <h2 className="glow mt-8 max-w-2xl text-3xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          SHIPPED & RUNNING<span className="text-phos">.</span>
        </h2>
        <p className="mt-4 max-w-xl text-xs leading-relaxed text-fog">
          {`// not mockups. click any row to open the live system →`}
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 border border-line bg-panel/60">
          <div className="hidden grid-cols-[70px_1.1fr_1.6fr_150px_90px_30px] gap-4 border-b border-line px-5 py-2.5 text-[10px] tracking-[0.25em] text-fog lg:grid">
            <span>REF</span>
            <span>SYSTEM</span>
            <span>FUNCTION</span>
            <span>STACK</span>
            <span>SECTOR</span>
            <span />
          </div>
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="term-row group grid grid-cols-[1fr_auto] items-center gap-2 border-b border-line-dim px-5 py-5 last:border-0 lg:grid-cols-[70px_1.1fr_1.6fr_150px_90px_30px] lg:gap-4"
            >
              <span className="hidden text-xs text-phos lg:block">
                S-{String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-sm font-bold text-zinc-100 group-hover:text-phos-bright">
                {p.name}
                <span className="row-dim mt-0.5 block text-[10px] font-normal text-fog">
                  {p.host}
                </span>
              </span>
              <span className="row-dim col-span-2 text-xs leading-relaxed text-fog lg:col-span-1">
                {p.desc}
              </span>
              <span className="hidden text-[11px] text-fog lg:block">{p.stack}</span>
              <span className="hidden text-[11px] text-phos-bright/70 lg:block">
                [{p.tag}]
              </span>
              <ArrowUpRight className="size-4 justify-self-end text-phos opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
