import { ArrowRight, Bot, Mail } from "lucide-react";
import { company } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 pb-24">
      <Reveal>
        <div className="rounded-[2rem] bg-accent px-6 py-16 text-center sm:px-12 sm:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-[1.12]">
            Your competitors&apos; websites are already working. Yours should too.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-blue-100">
            Tell us what you need — a new website, a redesign, an app, or an
            agent. Fixed quote within 48 hours.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${company.email}`}
              className="group flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-blue-50"
            >
              <Mail className="size-4" />
              {company.email}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={company.telegramBot}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Bot className="size-4" />
              Talk to our AI agent
            </a>
          </div>

          <p className="mt-6 text-xs text-blue-200">
            Usually replies within 24 hours · English / Hindi · Remote, worldwide
          </p>
        </div>
      </Reveal>
    </section>
  );
}
