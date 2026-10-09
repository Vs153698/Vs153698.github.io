import { ArrowUpRight, Bot, Mail } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import { profile } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-panel px-6 py-16 text-center sm:px-12 sm:py-24">
          <div
            className="absolute -top-24 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-acid/10 blur-[110px]"
            aria-hidden
          />
          <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />

          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-acid">
              Contact
            </p>
            <h2 className="font-display mx-auto mt-5 max-w-3xl text-5xl font-bold tracking-[-0.03em] sm:text-6xl">
              Have something
              <br />
              worth <span className="text-acid">building?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-fog">
              A website that needs a second life, a process that needs an agent —
              bring it. First conversation is free.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-acid px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-95"
              >
                <GithubIcon className="size-4" />
                GitHub — @Vs153698
              </a>
              <a
                href={profile.x}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-fog transition-colors hover:border-white/30 hover:text-white"
              >
                <ArrowUpRight className="size-4" />
                @vs153698 on X
              </a>
              <a
                href={profile.telegramBot}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-fog transition-colors hover:border-acid/50 hover:text-acid"
              >
                <Bot className="size-4" />
                Try my AI agent
              </a>
            </div>

            <p className="mt-10 inline-flex items-center gap-2 font-mono text-xs text-fog">
              <Mail className="size-3.5" />
              Fastest reply: Telegram or X DM
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
