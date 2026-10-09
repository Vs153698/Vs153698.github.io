import { ArrowUpRight, Lock } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "./Reveal";

function Shot({ img, host }: { img: string; host: string }) {
  return (
    <div className="overflow-hidden rounded-xl border-[3px] border-ink bg-white">
      <div className="flex h-9 items-center gap-3 border-b-[3px] border-ink bg-cream px-3">
        <div className="flex gap-1.5">
          <span className="size-3 rounded-full border-2 border-ink bg-red" />
          <span className="size-3 rounded-full border-2 border-ink bg-yellow" />
          <span className="size-3 rounded-full border-2 border-ink bg-purple" />
        </div>
        <span className="flex min-w-0 flex-1 justify-center">
          <span className="flex items-center gap-1.5 truncate rounded-lg border-2 border-ink bg-white px-2.5 py-0.5 text-[11px] font-medium">
            <Lock className="size-3 shrink-0 text-emerald-600" />
            <span className="truncate">{host}</span>
          </span>
        </span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
        alt={`${host} live screenshot`}
        className="aspect-[16/10] w-full object-cover object-top"
        loading="lazy"
      />
    </div>
  );
}

export function Work() {
  const [featured, ...rest] = projects;

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
          <p className="mt-8 max-w-lg text-base leading-snug font-medium text-fog sm:text-lg">
            Every project below is live right now. Click any card — it opens
            the real thing.
          </p>
        </Reveal>

        {/* featured */}
        <Reveal delay={0.1}>
          <a
            href={featured.url}
            target="_blank"
            rel="noreferrer"
            className="nb-card group mt-12 block p-4 sm:p-5"
          >
            <Shot img={featured.img} host={featured.host} />
            <div className="flex flex-wrap items-center justify-between gap-3 px-2 pt-5 pb-1">
              <div>
                <h3 className="text-xl font-bold tracking-tight group-hover:text-red sm:text-2xl">
                  {featured.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-fog">{featured.tag}</p>
              </div>
              <span className="flex items-center gap-2 text-sm font-bold">
                VISIT LIVE SITE
                <span className="nb-border rounded-full bg-yellow p-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="size-4" />
                </span>
              </span>
            </div>
          </a>
        </Reveal>

        {/* grid */}
        <div className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.07}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="nb-card group block h-full p-3.5"
              >
                <Shot img={p.img} host={p.host} />
                <div className="flex items-start justify-between gap-3 px-1.5 pt-4 pb-1">
                  <div>
                    <h3 className="text-base font-bold tracking-tight group-hover:text-red sm:text-lg">
                      {p.name}
                    </h3>
                    <p className="mt-0.5 text-xs font-medium text-fog">{p.tag}</p>
                  </div>
                  <ArrowUpRight className="mt-1 size-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
