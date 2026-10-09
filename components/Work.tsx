import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="border-t border-line bg-panel/30">
      <div className="mx-auto max-w-6xl px-5 py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-acid">
                Selected work
              </p>
              <h2 className="font-display mt-4 max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
                Shipped, not shelved.
              </h2>
            </div>
            <a
              href="https://github.com/Vs153698?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm text-fog transition-colors hover:text-acid"
            >
              All {projects.length}+ repos on GitHub
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="card-lift group flex h-full flex-col rounded-2xl border border-line bg-panel p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-acid-soft px-3 py-1 text-[11px] font-medium text-acid">
                    {p.tag}
                  </span>
                  <ArrowUpRight className="size-4 text-fog opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </div>
                <h3 className="font-mono mt-5 text-lg text-white">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-fog">
                  {p.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 border-t border-line pt-4 text-xs text-fog">
                  <span className="size-2 rounded-full bg-acid" />
                  {p.lang}
                  <span className="ml-auto font-mono">{p.year}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
