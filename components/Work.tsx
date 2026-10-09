import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="border-y-[3px] border-ink bg-white px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="hl hl-purple -rotate-2 text-[13px] font-bold tracking-wide uppercase">
            Selected work
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight uppercase sm:text-6xl">
            Proof, not promises
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="nb-border mt-12 overflow-hidden rounded-[20px] bg-white">
            {projects.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="work-row group flex items-center justify-between gap-4 border-b-[3px] border-ink px-6 py-6 last:border-b-0 sm:px-9 sm:py-7"
              >
                <span className="text-lg font-bold tracking-tight sm:text-2xl">
                  {p.name}
                </span>
                <span className="flex shrink-0 items-center gap-3">
                  <span className="work-tag hidden rounded-full border-2 border-ink bg-cream px-3 py-1 text-xs font-medium sm:inline-block">
                    {p.tag} · LIVE
                  </span>
                  <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:size-6" />
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 text-sm font-medium text-fog">
            Every row opens the live system. These aren&apos;t mockups.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
