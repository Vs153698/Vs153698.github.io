"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles, Zap } from "lucide-react";
import { profile } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

const chips = [
  { label: "Next.js", tile: "tile-cyan" },
  { label: "AI Agents", tile: "tile-violet" },
  { label: "TypeScript", tile: "tile-blue" },
  { label: "Python", tile: "tile-green" },
  { label: "Automation", tile: "tile-pink" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="aurora" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_30%,#07070c_100%)]"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[96vh] max-w-6xl flex-col items-center justify-center px-5 pt-28 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease }}
          className="mb-8"
        >
          <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs text-zinc-200">
            <span className="relative flex size-2">
              <span className="animate-ping-dot absolute inline-flex size-full rounded-full bg-emerald-400" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Available for projects — {profile.location}
          </span>
        </motion.div>

        <h1 className="font-display max-w-4xl text-5xl leading-[1.04] font-bold tracking-[-0.03em] sm:text-7xl lg:text-[84px]">
          {["I build web products"].map((line) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden">
            <motion.span
              className="text-gradient block pb-2"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.22, ease }}
            >
              & AI agents
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.34, ease }}
            >
              that do the work.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="mt-7 max-w-xl text-lg text-zinc-300/80"
        >
          {profile.shortName} — full-stack developer shipping platforms, business
          systems and autonomous agents for founders in India & Australia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-sky-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-12px_rgba(124,108,255,0.7)] transition-transform hover:scale-[1.04] active:scale-95"
          >
            <Zap className="size-4" />
            Start a project
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#work"
            className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm text-zinc-200 transition-colors hover:bg-white/10"
          >
            <ArrowDown className="size-4" />
            See the work
          </a>
        </motion.div>

        {/* floating tech chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
        >
          {chips.map((c, i) => (
            <span
              key={c.label}
              className={`animate-float glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-zinc-200 ${
                i % 2 === 0 ? "" : "[animation-delay:-3.5s]"
              }`}
            >
              <span className={`tile ${c.tile} size-2 rounded-full`} />
              {c.label}
            </span>
          ))}
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          href={profile.telegramBot}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-xs text-zinc-400 transition-colors hover:text-fuchsia-300"
        >
          <Sparkles className="size-3.5" />
          Psst — you can talk to my AI agent right now
        </motion.a>
      </div>
    </section>
  );
}
