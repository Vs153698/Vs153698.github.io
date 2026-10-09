import { profile } from "@/lib/data";
import { Reveal } from "./Reveal";

const log = [
  {
    t: "2021.06",
    tag: "BOOT",
    text: "First commit. Python developer — scripts, bots, automation.",
  },
  {
    t: "2023",
    tag: "EXPAND",
    text: "Full-stack turn: TypeScript, React, Node. Started shipping client work.",
  },
  {
    t: "2025",
    tag: "SYSTEMS",
    text: "CRM & booking platforms in production — India and Australia.",
  },
  {
    t: "2026",
    tag: "AGENTS",
    text: "AI agents enter the stack: WhatsApp/Telegram bots that do real work.",
  },
];

const facts = [
  { k: "LOCATION", v: "KOTA, RJ, IN — 25.2138°N 75.8640°E" },
  { k: "MARKETS", v: "INDIA · AUSTRALIA" },
  { k: "SINCE", v: "2021" },
  { k: "MODE", v: "REMOTE-FIRST" },
];

export function About() {
  return (
    <section className="border-y border-line-dim bg-panel/60">
      <div className="mx-auto max-w-6xl px-5 py-28">
        <Reveal>
          <div className="flex items-center gap-4 text-[11px] tracking-[0.3em] text-fog">
            <span className="text-phos">[ 04 ]</span> MISSION LOG
            <span className="h-px flex-1 bg-line-dim" />
            <span className="hidden sm:inline">TAIL -F OPERATOR.LOG</span>
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
                <span>OPERATOR.SPEC</span>
                <span className="text-phos">[ VERIFIED ]</span>
              </div>
              <dl>
                {facts.map((f) => (
                  <div
                    key={f.k}
                    className="grid grid-cols-[90px_1fr] gap-3 border-b border-line-dim px-4 py-3 text-xs last:border-0"
                  >
                    <dt className="text-fog">{f.k}</dt>
                    <dd className="text-zinc-200">{f.v}</dd>
                  </div>
                ))}
              </dl>
              <div className="px-4 py-3 text-xs">
                <span className="text-fog">$ status</span>
                <span className="ml-3 text-phos glow">
                  ● OPEN_TO_WORK --remote
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-fog">
          {`// ${profile.shortName} — the short version: I build the frontend your customers
          // touch, the systems your team works in, and the agents that keep
          // both running after hours.`}
        </p>
      </div>
    </section>
  );
}
