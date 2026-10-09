import { company } from "@/lib/data";
import { Reveal } from "./Reveal";

const timeline = [
  {
    year: "2021",
    title: "Founded in Kota",
    desc: "Started with Python automation and tooling for early clients.",
  },
  {
    year: "2023",
    title: "Full-stack practice",
    desc: "TypeScript, Next.js, Node — first production client platforms shipped.",
  },
  {
    year: "2025",
    title: "Systems at scale",
    desc: "National Book of Records portal + CRM, Willsmeet, Chennai Bulls and HommCorp Australia all live.",
  },
  {
    year: "2026",
    title: "AI product line",
    desc: "ProSportsData.ai in early access — autonomous agents now part of every build.",
  },
];

const clients = [
  "National Book of Records",
  "HommCorp · Melbourne",
  "Willsmeet",
  "Chennai Bulls Rugby",
  "ProSportsData",
];

export function About() {
  return (
    <section id="about" className="border-y border-line bg-panel/60">
      <div className="mx-auto max-w-6xl px-5 py-28">
        <Reveal>
          <p className="text-sm font-semibold text-violet-300">The lab</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Small team. <span className="text-gradient">Serious systems.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <div className="card-hover flex gap-6 border-b border-line px-2 py-6">
                  <span className="text-gradient w-16 shrink-0 font-mono text-sm font-semibold">
                    {t.year}
                  </span>
                  <div>
                    <h3 className="font-semibold tracking-tight">{t.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-fog">
                      {t.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="glass rounded-3xl p-7">
              <h3 className="text-sm font-semibold tracking-wider text-fog uppercase">
                Running contracts
              </h3>
              <ul className="mt-5 space-y-3">
                {clients.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-3 text-sm text-zinc-200"
                  >
                    <span
                      className="size-1.5 rounded-full"
                      style={{
                        background: "linear-gradient(135deg,#34d399,#22d3ee)",
                      }}
                    />
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-line pt-5 text-sm text-fog">
                {company.location} · remote-first · fixed-scope quotes
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
