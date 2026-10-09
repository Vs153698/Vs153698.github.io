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
    <section id="services" className="mx-auto max-w-6xl px-5 py-28">
      <Reveal>
        <p className="text-sm font-semibold text-violet-300">What we do</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
          Software that earns its <span className="text-gradient">keep.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon] ?? Bot;
            return (
              <div
                key={s.title}
                className={`glass card-hover rounded-3xl p-7 ${
                  s.big ? "shadow-glow md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="tile" style={{ background: s.tile }}>
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2.5 min-h-[72px] text-sm leading-relaxed text-fog">
                  {s.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line px-2.5 py-0.5 text-xs text-fog"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
