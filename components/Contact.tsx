import { company } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="bg-ink px-5 py-24 text-center sm:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="text-4xl leading-[1.05] font-bold tracking-tight text-cream uppercase sm:text-6xl lg:text-7xl">
            Your competitors&apos; sites are{" "}
            <span className="hl hl-yellow">working.</span>
            <br />
            Yours should too.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed font-medium text-cream/70 sm:text-lg">
            Tell us what you need — a new website, a redesign, an app, or an
            agent. Fixed quote within 48 hours, no hourly billing.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${company.email}`}
              className="nb-btn border-yellow bg-yellow px-8 py-4 text-base text-ink"
              style={{ boxShadow: "6px 6px 0 #f4f1ea" }}
            >
              {company.email.toUpperCase()} →
            </a>
            <a
              href={company.telegramBot}
              target="_blank"
              rel="noreferrer"
              className="nb-btn px-8 py-4 text-base text-cream"
              style={{
                borderColor: "#f4f1ea",
                boxShadow: "6px 6px 0 #f4f1ea",
                border: "3px solid #f4f1ea",
              }}
            >
              TALK TO OUR AI AGENT
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <p className="mt-8 text-xs font-medium tracking-wide text-cream/50 uppercase">
            Replies within 24h · English / Hindi · Remote, worldwide
          </p>
        </Reveal>
      </div>
    </section>
  );
}
