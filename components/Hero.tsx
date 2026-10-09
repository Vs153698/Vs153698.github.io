import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="px-5 pt-20 pb-16 sm:pt-28 sm:pb-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h1 className="text-[52px] leading-[0.95] font-bold tracking-tight uppercase sm:text-8xl lg:text-[110px]">
            We build
            <br />
            <span className="hl hl-red">websites</span> that
            <br />
            sell <span className="hl hl-purple">24/7.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-9 max-w-xl text-lg leading-snug font-medium sm:text-xl">
            CodeNiti is a small software lab shipping websites, platforms and AI
            agents for businesses in India &amp; Australia. Real systems. Real
            clients. No templates.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-4">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
