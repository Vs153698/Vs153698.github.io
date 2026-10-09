import { stackGroups } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-5 py-28">
      <Reveal>
        <div className="flex items-center gap-4 text-[11px] tracking-[0.3em] text-fog">
          <span className="text-phos">[ 03 ]</span> TOOLCHAIN
          <span className="h-px flex-1 bg-line-dim" />
          <span className="hidden sm:inline">$ which --all</span>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {stackGroups.map((g, i) => (
          <div key={g.label} className="bg-ink p-6">
            <Reveal delay={i * 0.05}>
              <div className="text-[10px] tracking-[0.25em] text-phos">
                $ {g.label.toLowerCase()}
              </div>
              <ul className="mt-4 space-y-1.5 text-xs text-zinc-300">
                {g.items.map((item) => (
                  <li key={item} className="term-row px-1 py-0.5">
                    <span className="text-fog">├─</span> {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
