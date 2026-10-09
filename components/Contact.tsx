import { ArrowUpRight, Bot } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import { profile } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 text-center">
          {/* aurora panel */}
          <div className="aurora" aria-hidden />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_110%,transparent_20%,#07070c_95%)]"
            aria-hidden
          />

          <div className="relative px-6 py-20 sm:px-12 sm:py-28">
            <h2 className="font-display mx-auto max-w-3xl text-5xl font-bold tracking-[-0.03em] sm:text-7xl">
              Have something
              <br />
              worth <span className="text-gradient">building?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-zinc-300/80">
              A website that needs a second life, a process that needs an agent —
              bring it. First conversation is free.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.04] active:scale-95"
              >
                <GithubIcon className="size-4" />
                GitHub — @Vs153698
              </a>
              <a
                href={profile.x}
                target="_blank"
                rel="noreferrer"
                className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm text-zinc-100 transition-colors hover:bg-white/10"
              >
                <ArrowUpRight className="size-4" />
                @vs153698 on X
              </a>
              <a
                href={profile.telegramBot}
                target="_blank"
                rel="noreferrer"
                className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm text-zinc-100 transition-colors hover:bg-white/10"
              >
                <Bot className="size-4 text-fuchsia-300" />
                Try my AI agent
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
