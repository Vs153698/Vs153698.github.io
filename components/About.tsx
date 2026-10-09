import { MapPin, TerminalSquare } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "./Reveal";

const facts = [
  { k: "Based in", v: "Kota, Rajasthan, IN" },
  { k: "Markets", v: "India & Australia" },
  { k: "Shipping since", v: "2021" },
  { k: "Focus", v: "Web platforms · AI agents" },
];

export function About() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-white/[0.02]">
      <div className="aurora opacity-25" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 py-28 lg:grid-cols-[1.15fr_1fr]">
        <Reveal>
          <span className="glass inline-block rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-amber-300">
            About
          </span>
          <h2 className="font-display mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Developer first.
            <br />
            <span className="text-gradient-warm">Business minded.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300/85">
            I started as a Python developer and went deep into the web — today I
            build production platforms end-to-end: the frontend your customers
            touch, the systems your team works in, and the AI agents that keep
            both running after hours.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-zinc-400">
            CRMs, booking platforms, WhatsApp and Telegram agents — I care about
            one thing: software that quietly pays for itself.
          </p>
          <p className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300">
            <MapPin className="size-4 text-rose-400" />
            {profile.location} — working with clients everywhere
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          {/* terminal card */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a12]/90 shadow-[0_30px_80px_-30px_rgba(124,108,255,0.4)]">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
              <span className="size-3 rounded-full bg-rose-500/80" />
              <span className="size-3 rounded-full bg-amber-400/80" />
              <span className="size-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 inline-flex items-center gap-1.5 font-mono text-xs text-zinc-500">
                <TerminalSquare className="size-3.5" />
                vaibhav — zsh
              </span>
            </div>
            <div className="space-y-2.5 px-5 py-6 font-mono text-[13px] leading-relaxed">
              <p className="text-zinc-500"># whoami</p>
              <p className="text-zinc-200">
                full-stack dev · AI agent builder · <span className="text-sky-300">since 2021</span>
              </p>
              <p className="text-zinc-500"># cat facts.json</p>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                {facts.map((f) => (
                  <p key={f.k} className="flex justify-between gap-6">
                    <span className="text-zinc-500">"{f.k}"</span>
                    <span className="text-emerald-300">"{f.v}"</span>
                  </p>
                ))}
              </div>
              <p className="pt-1">
                <span className="text-fuchsia-300">➜</span>{" "}
                <span className="text-zinc-200">status</span>
                <span className="ml-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-xs text-emerald-300">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  open_to_work --remote
                </span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
