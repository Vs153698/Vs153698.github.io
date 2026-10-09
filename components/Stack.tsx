import { stackGroups } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-5 py-28">
      <Reveal className="text-center">
        <span className="glass inline-block rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-emerald-300">
          Stack
        </span>
        <h2 className="font-display mx-auto mt-6 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          Boring where it should be,
          <span className="text-gradient"> sharp where it counts</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stackGroups.map((g, i) => (
          <Reveal key={g.label} delay={i * 0.06}>
            <div className="card-pop glass h-full rounded-3xl p-6">
              <div className="flex items-center gap-3">
                <span className={`tile ${g.tile} size-3 rounded-md`} />
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-300">
                  {g.label}
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-200 transition-colors hover:border-white/25 hover:bg-white/[0.08]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
