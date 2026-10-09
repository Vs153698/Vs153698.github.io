import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-28">
      <Reveal>
        <p className="text-sm font-semibold text-violet-300">Selected work</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
          Shipped & <span className="text-gradient">running.</span>
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-fog">
          Not mockups — every system below is live in production. Click any card
          to open the real site.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 0.08}>
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="glass card-hover group block overflow-hidden rounded-3xl"
            >
              {/* live screenshot */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-panel">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={`${p.name} screenshot`}
                  className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute top-3 left-3 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-white backdrop-blur">
                  {p.tag.toUpperCase()}
                </span>
                <span className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold tracking-tight group-hover:text-violet-200">
                    {p.name}
                  </h3>
                  <span
                    className="size-2.5 rounded-full"
                    style={{ background: p.tile }}
                  />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-fog">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-fog">
                  <span>{p.stack}</span>
                  <span className="opacity-70">{p.host}</span>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
