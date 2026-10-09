import { ArrowUpRight, Lock } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "./Reveal";

function BrowserFrame({
  img,
  url,
  tag,
}: {
  img: string;
  url: string;
  tag: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
      {/* browser chrome */}
      <div className="flex h-9 items-center gap-3 border-b border-line bg-mist px-4">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-zinc-300" />
          <span className="size-2.5 rounded-full bg-zinc-300" />
          <span className="size-2.5 rounded-full bg-zinc-300" />
        </div>
        <div className="flex flex-1 justify-center">
          <span className="flex items-center gap-1.5 rounded-md border border-line bg-white px-3 py-0.5 text-[11px] text-fog">
            <Lock className="size-3 text-emerald-500" />
            {url}
          </span>
        </div>
        <span className="rounded bg-accent-soft px-2 py-0.5 text-[10px] font-semibold text-accent">
          {tag}
        </span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
        alt={`${url} screenshot`}
        className="aspect-[16/10] w-full object-cover object-top"
        loading="lazy"
      />
    </div>
  );
}

export function Work() {
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="border-y border-line bg-mist py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-sm font-semibold text-accent">Selected work</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-[44px] sm:leading-[1.15]">
            Shipped, live, and running businesses.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-fog">
            These aren&apos;t concepts — every project below is in production.
            Open any of them; they&apos;re the real thing.
          </p>
        </Reveal>

        {/* featured project — full width */}
        <Reveal>
          <a
            href={featured.url}
            target="_blank"
            rel="noreferrer"
            className="card-l group mt-12 block overflow-hidden p-3 sm:p-4"
          >
            <BrowserFrame img={featured.img} url={featured.host} tag={featured.tag} />
            <div className="flex flex-wrap items-center justify-between gap-4 px-2 pt-5 pb-2 sm:px-3">
              <div>
                <h3 className="text-lg font-bold tracking-tight text-ink group-hover:text-accent">
                  {featured.name}
                </h3>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-fog">
                  {featured.desc}
                </p>
              </div>
              <span className="flex items-center gap-2 text-sm font-semibold text-accent">
                Visit site
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </a>
        </Reveal>

        {/* rest of the grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.08}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="card-l group block h-full overflow-hidden p-3 sm:p-4"
              >
                <BrowserFrame img={p.img} url={p.host} tag={p.tag} />
                <div className="px-2 pt-5 pb-2 sm:px-3">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-bold tracking-tight text-ink group-hover:text-accent">
                      {p.name}
                    </h3>
                    <ArrowUpRight className="size-4 shrink-0 text-fog transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-fog">
                    {p.desc}
                  </p>
                  <p className="mt-3 text-xs font-medium text-zinc-400">
                    {p.stack}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
