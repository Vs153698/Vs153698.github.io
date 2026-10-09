import { company } from "@/lib/data";
import { Reveal } from "./Reveal";

const timeline = [
  {
    year: "2021",
    title: "Founded in Kota",
    desc: "Python automation and tooling for early clients.",
  },
  {
    year: "2023",
    title: "Full-stack practice",
    desc: "TypeScript, Next.js, Node — first production platforms shipped.",
  },
  {
    year: "2025",
    title: "Systems at scale",
    desc: "Record-authority portal + CRM, B2B procurement, sports and Australian service booking — all live.",
  },
  {
    year: "2026",
    title: "AI product line",
    desc: "Sports-intelligence platform in early access; agents now part of every build.",
  },
];

export function About() {
  return (
    <section id="about" className="border-t border-line bg-mist py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-sm font-semibold text-accent">The team</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-[44px] sm:leading-[1.15]">
            Small team. Serious systems.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-fog">
            {company.name} is a compact software lab. We keep the team small on
            purpose — the people you talk to are the people who build. Systems
            we ship, we stay responsible for.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.05}>
              <div className="card-l h-full p-6">
                <span className="font-mono text-sm font-bold text-accent">
                  {t.year}
                </span>
                <h3 className="mt-3 text-[15px] font-bold tracking-tight text-ink">
                  {t.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-fog">
                  {t.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
