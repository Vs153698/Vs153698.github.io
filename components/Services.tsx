import {
  Bot,
  CalendarCheck,
  Database,
  Globe,
  RefreshCw,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/data";
import { Reveal } from "./Reveal";

const icons: Record<string, LucideIcon> = {
  Bot,
  Globe,
  RefreshCw,
  Database,
  CalendarCheck,
  Terminal,
};

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-5 py-28">
      <div className="aurora opacity-40" aria-hidden />
      <div className="relative">
        <Reveal className="text-center">
          <span className="glass inline-block rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-violet-300">
            Services
          </span>
          <h2 className="font-display mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Everything a growing business
            <span className="text-gradient"> needs online</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-zinc-400">
            From the website your customers see to the agents working behind it.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal
                key={s.title}
                delay={i * 0.06}
                className={s.big ? "sm:col-span-2 lg:row-span-2" : ""}
              >
                <div
                  className={`card-pop glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 ${
                    s.big ? "lg:p-9" : ""
                  }`}
                >
                  {s.big && (
                    <>
                      <div
                        className="absolute -right-20 -top-20 size-64 rounded-full bg-violet-500/25 blur-3xl transition-opacity duration-500 group-hover:opacity-150"
                        aria-hidden
                      />
                      <div
                        className="absolute -bottom-24 -left-16 size-56 rounded-full bg-sky-500/15 blur-3xl"
                        aria-hidden
                      />
                    </>
                  )}
                  <div className={`tile ${s.tile} relative mb-6 size-12`}>
                    <Icon className="size-5" />
                  </div>
                  <h3
                    className={`font-display relative font-bold tracking-tight ${
                      s.big ? "text-3xl" : "text-xl"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-zinc-400">
                    {s.desc}
                  </p>
                  <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-mono text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
