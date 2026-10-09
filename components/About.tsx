import { company, log } from "@/lib/data";
import { Reveal } from "./Reveal";

const facts = [
  { k: "HQ", v: "KOTA, RJ, IN — 25.2138°N 75.8640°E" },
  { k: "DEPLOYMENTS", v: "IN · AU — PRODUCTION" },
  { k: "OPERATING SINCE", v: String(company.since) },
  { k: "MODE", v: "REMOTE-FIRST · FIXED-SCOPE" },
];

export function About() {
  return (
    <section id="about" className="border-y border-line-dim bg-panel/60">
      <div className="mx-auto max-w-6xl px-5 py-28">
        <Reveal>
          <div className="flex items-center gap-4 text-[11px] tracking-[0.3em] text-fog">
            <span className="text-phos">[ 03 ]</span> OPERATION LOG
            <span className="h-px flex-1 bg-line-dim" />
            <span className="hidden sm:inline">TAIL -F {company.name.toUpperCase()}.LOG</span>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            {log.map((e, i) => (
              <Reveal key={e.t} delay={i * 0.06}>
                <div className="term-row grid grid-cols-[86px_80px_1fr] gap-3 border-b border-line-dim px-2 py-4 text-xs sm:grid-cols-[100px_90px_1fr]">
                  <span className="text-phos">{e.t}</span>
                  <span className="text-amber">[{e.tag}]</span>
                  <span className="row-dim leading-relaxed text-zinc-300">
                    {e.text}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="tick-corners border border-line bg-ink">
              <div className="flex items-center justify-between border-b border-line px-4 py-2 text-[10px] tracking-[0.25em] text-fog">
                <span>{company.name.toUpperCase()}.SPEC</span>
                <span className="text-phos">[ VERIFIED ]</span>
              </div>
              <dl>
                {facts.map((f) => (
                  <div
                    key={f.k}
                    className="grid grid-cols-[120px_1fr] gap-3 border-b border-line-dim px-4 py-3 text-xs last:border-0"
                  >
                    <dt className="text-fog">{f.k}</dt>
                    <dd className="text-zinc-200">{f.v}</dd>
                  </div>
                ))}
              </dl>
              <div className="px-4 py-3 text-xs">
                <span className="text-fog">$ status</span>
                <span className="ml-3 text-phos glow">
                  ● ACCEPTING_NEW_MISSIONS
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-fog">
          {`// ${company.name} is a small software lab. we keep the team tight and the
          // systems boring where they should be — so your business can be
          // sharp exactly where it counts.`}
        </p>
      </div>
    </section>
  );
}
