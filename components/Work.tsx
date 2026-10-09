import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="relative overflow-hidden">
      <div className="aurora opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 py-28">
        <Reveal className="text-center">
          <span className="glass inline-block rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-sky-300">
            Selected work
          </span>
          <h2 className="font-display mx-auto mt-6 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Shipped, <span className="text-gradient">not shelved</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-zinc-400">
            Real repositories, actively pushed. Click through to the code.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="card-pop glass group flex h-full flex-col overflow-hidden rounded-3xl"
              >
                {/* gradient banner */}
                <div className="relative flex h-28 items-center justify-center overflow-hidden">
                  <div
                    className={`${p.tile} absolute inset-0 opacity-25 transition-opacity duration-500 group-hover:opacity-40`}
                    style={{ filter: "blur(28px)" }}
                    aria-hidden
                  />
                  <span
                    className={`tile ${p.tile} relative size-14 rounded-2xl text-lg font-bold`}
                  >
                    {p.name.slice(0, 1).toUpperCase()}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 pt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-lg text-white">{p.name}</h3>
                    <ArrowUpRight className="size-4 text-zinc-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                    {p.desc}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-xs text-zinc-500">
                    <span className={`tile ${p.tile} size-2 rounded-full`} />
                    {p.lang}
                    <span className="ml-auto rounded-full border border-white/10 px-2.5 py-0.5 font-mono">
                      {p.tag}
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
