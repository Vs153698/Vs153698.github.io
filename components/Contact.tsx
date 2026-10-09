import { ArrowUpRight, Bot, Mail } from "lucide-react";
import { company } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-28">
      <Reveal>
        <div className="glass shadow-glow relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center sm:px-12 sm:py-24">
          <div className="absolute inset-0" aria-hidden>
            <div
              className="orb orb-1 left-[-15%] top-[-40%] h-[26rem] w-[26rem]"
              style={{ background: "rgba(139,92,246,0.3)" }}
            />
            <div
              className="orb orb-2 right-[-15%] bottom-[-50%] h-[26rem] w-[26rem]"
              style={{ background: "rgba(56,189,248,0.22)" }}
            />
          </div>

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
              Have a system to <span className="text-gradient">build?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-fog sm:text-base">
              A portal, a CRM, a booking engine, an agent. Tell us the objective
              — fixed quote within 48 hours.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-85"
              >
                <Mail className="size-4" />
                {company.email}
              </a>
              <a
                href={company.telegramBot}
                target="_blank"
                rel="noreferrer"
                className="glass flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25"
              >
                <Bot className="size-4 text-violet-300" />
                Talk to our AI agent
                <ArrowUpRight className="size-4" />
              </a>
            </div>

            <p className="mt-6 text-xs text-fog">
              Usually replies within 24h · English / Hindi
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
