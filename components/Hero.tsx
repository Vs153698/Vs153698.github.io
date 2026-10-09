import { Reveal } from "./Reveal";
import { ArrowDoodle, StampBadge, Starburst } from "./Doodles";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-20 pb-16 sm:pt-28 sm:pb-20">
      {/* graffiti — starbursts */}
      <Starburst className="absolute top-14 right-[6%] hidden w-10 rotate-12 text-red md:block" />
      <Starburst className="absolute bottom-24 left-[3%] hidden w-7 -rotate-12 text-purple md:block" />

      {/* rotating stamp badge */}
      <div className="absolute top-16 right-[10%] hidden lg:block">
        <div className="animate-[spin_16s_linear_infinite]">
          <StampBadge className="w-40 drop-shadow-[5px_5px_0_var(--color-ink)]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <h1 className="text-[52px] leading-[0.95] font-bold tracking-tight uppercase sm:text-8xl lg:text-[110px]">
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
    </section>
  );
}
