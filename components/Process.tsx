import { MessageSquare, PenTool, Rocket, Search } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    icon: MessageSquare,
    num: "01",
    title: "Tell us your goal",
    desc: "A 20-minute call or a message. What should the website or app achieve for your business?",
  },
  {
    icon: PenTool,
    num: "02",
    title: "Design & fixed quote",
    desc: "You get a design direction and a fixed price within 48 hours. No hourly billing, no surprises.",
  },
  {
    icon: Rocket,
    num: "03",
    title: "Build in stages",
    desc: "Weekly progress you can actually open and click. Feedback rounds built into every stage.",
  },
  {
    icon: Search,
    num: "04",
    title: "Launch & support",
    desc: "Deployed, monitored, SEO-safe — with support after go-live. We stay on the systems we ship.",
  },
];

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <p className="text-sm font-semibold text-accent">How it works</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-[44px] sm:leading-[1.15]">
          From first message to launch.
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.06}>
            <div className="card-l h-full p-7">
              <div className="flex items-center justify-between">
                <div className="chip">
                  <s.icon className="size-5" />
                </div>
                <span className="font-mono text-sm font-bold text-zinc-300">
                  {s.num}
                </span>
              </div>
              <h3 className="mt-5 text-[16px] font-bold tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fog">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
