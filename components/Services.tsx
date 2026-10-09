import {
  Bot,
  CalendarClock,
  Database,
  Globe,
  Paintbrush,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/data";
import { Reveal } from "./Reveal";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Globe,
  Database,
  CalendarClock,
  ShoppingCart,
  Paintbrush,
};

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <p className="text-sm font-semibold text-accent">What we do</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-[44px] sm:leading-[1.15]">
          Everything your business needs to run online.
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-fog">
          From the website your customers see to the systems and agents
          running behind it — one team, full ownership.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = iconMap[s.icon] ?? Bot;
          return (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className={`card-l h-full p-7 ${s.big ? "md:col-span-2 lg:col-span-1" : ""}`}>
                <div className="chip">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-[17px] font-bold tracking-tight text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 min-h-[72px] text-sm leading-relaxed text-fog">
                  {s.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-mist px-2.5 py-1 text-xs font-medium text-fog"
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
