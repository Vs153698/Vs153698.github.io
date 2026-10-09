import { GithubIcon } from "./GithubIcon";
import { profile } from "@/lib/data";
import { Reveal } from "./Reveal";

const channels = [
  { cmd: "gh contact Vs153698", href: profile.github, icon: "gh" as const },
  { cmd: "x dm vs153698", href: profile.x, icon: "x" as const },
  { cmd: "tg ping Kimiv_bot", href: profile.telegramBot, icon: "tg" as const },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-28">
      <Reveal>
        <div className="flex items-center gap-4 text-[11px] tracking-[0.3em] text-fog">
          <span className="text-phos">[ 05 ]</span> UPLINK
          <span className="h-px flex-1 bg-line-dim" />
          <span className="hidden sm:inline">ESTABLISH CONNECTION</span>
        </div>
      </Reveal>

      <div className="tick-corners mt-12 border border-line bg-panel/60">
        <div className="border-b border-line px-5 py-2.5 text-[10px] tracking-[0.25em] text-fog">
          TRANSMISSION // {profile.year}.10 — ACCEPTING NEW BRIEFS
        </div>

        <div className="px-5 py-14 text-center sm:py-20">
          <Reveal>
            <h2 className="glow text-3xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
              OPEN CHANNEL<span className="text-phos">.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-xs leading-relaxed text-fog">
              {`// a website that needs a second life, a process that needs an agent.
// state your objective. first transmission is free.`}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-2 text-left text-xs sm:text-sm">
              {channels.map((c) => (
                <a
                  key={c.cmd}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="term-row group flex items-center gap-3 border border-line-dim px-4 py-3.5"
                >
                  <span className="text-phos">$</span>
                  <span className="flex-1 font-mono text-zinc-200 group-hover:text-phos-bright">
                    {c.cmd}
                  </span>
                  {c.icon === "gh" && <GithubIcon className="size-4 opacity-50" />}
                  {c.icon === "x" && <span className="text-fog opacity-50">↗</span>}
                  {c.icon === "tg" && <span className="text-fog opacity-50">↗</span>}
                </a>
              ))}
            </div>
            <p className="mt-6 text-[10px] tracking-[0.25em] text-fog">
              LATENCY: USUALLY &lt; 24H · EN/HIN
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
