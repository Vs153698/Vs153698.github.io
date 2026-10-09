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
    <section id="services" className="mx-auto max-w-6xl px-5 py-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-acid">
          Services
        </p>
        <h2 className="font-display mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          Everything a growing business needs to run online.
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <Reveal
              key={s.title}
              delay={i * 0.06}
              className={s.big ? "sm:col-span-2 lg:row-span-2" : ""}
            >
              <div
                className={`card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel p-7 ${
                  s.big ? "lg:p-9" : ""
                }`}
              >
                {s.big && (
                  <div
                    className="absolute -right-16 -top-16 size-56 rounded-full bg-acid/10 blur-3xl transition-opacity duration-500 group-hover:opacity-150"
                    aria-hidden
                  />
                )}
                <div className="mb-5 inline-flex size-11 items-center justify-center rounded-xl border border-line bg-ink text-acid">
                  <Icon className="size-5" />
                </div>
                <h3
                  className={`font-display font-bold tracking-tight ${
                    s.big ? "text-3xl" : "text-xl"
                  }`}
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">{s.desc}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line px-3 py-1 text-[11px] font-mono text-fog"
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
    </section>
  );
}
