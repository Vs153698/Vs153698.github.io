import { stats } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Stats() {
  return (
    <section className="border-y-[3px] border-ink bg-white px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="hl hl-purple -rotate-2 text-[13px] font-bold tracking-wide uppercase">
            Numbers
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight uppercase sm:text-6xl">
            By the count
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.k} delay={i * 0.06}>
              <div className="nb-card bg-yellow p-7 text-center sm:p-8">
                <div className="text-5xl font-bold tracking-tight sm:text-6xl">
                  {s.v}
                </div>
                <div className="mt-2 text-sm font-medium">{s.k}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
