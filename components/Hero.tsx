import { Reveal } from "./Reveal";
import { ArrowDoodle, StampBadge, Starburst } from "./Doodles";

const deliverables = [
  "Fixed quote in 48 hours",
  "Weekly live previews",
  "2 revision rounds per stage",
  "30 days free support",
  "You own the code",
  "Deadline missed → 10% off",
];

const stack = [
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "TAILWIND",
  "SUPABASE",
  "NODE.JS",
  "AI AGENTS",
  "WHATSAPP BOTS",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-20 pb-16 sm:pt-28 sm:pb-20">
      {/* graffiti — starbursts */}
      <Starburst className="absolute top-14 right-[6%] hidden w-10 rotate-12 text-red md:block" />
      <Starburst className="absolute bottom-24 left-[3%] hidden w-7 -rotate-12 text-purple md:block" />

      <div className="relative mx-auto max-w-6xl">
        <div className="lg:grid lg:grid-cols-[1fr_340px] lg:items-center lg:gap-12">
          {/* left — the pitch (unchanged) */}
          <div>
            <Reveal>
              <h1 className="text-[52px] leading-[0.95] font-bold tracking-tight uppercase sm:text-8xl lg:text-[100px]">
                We build
                <br />
                <span className="relative inline-block">
                  <span className="hl hl-red">websites</span>
                  <ArrowDoodle className="absolute -right-16 -bottom-12 hidden w-14 rotate-12 text-ink lg:block" />
                </span>{" "}
                that
                <br />
                sell <span className="hl hl-purple">24/7.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-10 max-w-xl text-lg leading-snug font-medium sm:text-xl">
                WebKraft is a small software lab shipping websites, platforms and AI
                agents for businesses in India &amp; Australia. Real systems. Real
                clients. No templates.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="nb-btn bg-red px-7 py-4 text-base text-white sm:px-9"
                >
                  GET A QUOTE →
                </a>
                <a
                  href="#work"
                  className="nb-btn bg-white px-7 py-4 text-base sm:px-9"
                >
                  SEE THE WORK
                </a>
                {/* sticker badges */}
                <span className="nb-border ml-2 hidden -rotate-3 rounded-xl bg-yellow px-4 py-2 text-xs font-bold shadow-[5px_5px_0_var(--color-ink)] md:inline-block">
                  ★ FIXED QUOTES IN 48H
                </span>
              </div>
            </Reveal>
          </div>

          {/* right — stamp + what-you-get card (fills the empty right side) */}
          <div className="mt-14 hidden lg:mt-0 lg:block">
            <div className="mb-6 flex justify-end">
              <div className="animate-[spin_16s_linear_infinite]">
                <StampBadge className="w-36 drop-shadow-[5px_5px_0_var(--color-ink)]" />
              </div>
            </div>
            <Reveal delay={0.25}>
              <div className="nb-border -rotate-1 bg-white p-6 shadow-[7px_7px_0_var(--color-ink)]">
                <p className="text-sm font-bold tracking-widest uppercase">
                  What you <span className="hl hl-yellow">get</span>
                </p>
                <ul className="mt-4 space-y-2.5 text-[15px] font-medium">
                  {deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5">
                      <span className="mt-0.5 text-red">✔</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t-2 border-dashed border-ink/30 pt-3 text-xs font-semibold tracking-wide uppercase">
                  No surprises. All of it in writing.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* stack chips — grounds the whole hero on every screen */}
        <Reveal delay={0.3}>
          <div className="mt-14 flex flex-wrap items-center gap-2.5 border-t-[3px] border-ink pt-6 lg:mt-16">
            <span className="mr-1 text-xs font-bold tracking-widest uppercase">
              Stack we ship with →
            </span>
            {stack.map((s, i) => (
              <span
                key={s}
                className={`nb-border bg-white px-3 py-1.5 text-xs font-bold tracking-wide ${
                  i % 3 === 0
                    ? "-rotate-1 bg-yellow"
                    : i % 3 === 1
                      ? "rotate-1"
                      : "-rotate-[0.5deg]"
                }`}
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
