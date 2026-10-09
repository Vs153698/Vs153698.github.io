import { services } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="hl hl-red -rotate-1 text-[13px] font-bold tracking-wide uppercase">
            What we do
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight uppercase sm:text-6xl">
            Pick your weapon
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
