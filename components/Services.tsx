import { services } from "@/lib/data";
import { Reveal } from "./Reveal";
import { Asterisk, Scribble } from "./Doodles";

export function Services() {
  return (
    <section id="services" className="relative px-5 py-20 sm:py-24">
      <Asterisk className="absolute top-16 right-[5%] hidden w-9 rotate-45 text-ink lg:block" />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="hl hl-red -rotate-1 text-[13px] font-bold tracking-wide uppercase">
            What we do
          </span>
          <h2 className="relative mt-6 inline-block text-4xl font-bold tracking-tight uppercase sm:text-6xl">
            Pick your weapon
            <Scribble className="absolute -bottom-4 left-0 w-64 text-purple sm:w-96" />
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.07}>
              <div className="nb-card h-full p-7">
                <span className="text-[13px] font-bold text-red">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[21px] font-bold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-snug text-fog">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
