import { stackGroups } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-5 py-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-acid">
          Stack
        </p>
        <h2 className="font-display mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          Boring where it should be, sharp where it counts.
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stackGroups.map((g, i) => (
          <Reveal key={g.label} delay={i * 0.06}>
            <div className="card-lift h-full rounded-2xl border border-line bg-panel p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fog">
                {g.label}
              </h3>
              <ul className="mt-5 flex flex-col gap-2.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-zinc-200"
                  >
                    <span className="size-1.5 rounded-full bg-acid/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
