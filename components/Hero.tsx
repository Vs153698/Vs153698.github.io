"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-bg absolute inset-0" aria-hidden />

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center px-5 pt-28 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-[13px] text-fog shadow-sm"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Accepting new projects — websites, apps & AI agents
        </motion.div>

        <h1 className="mt-8 max-w-4xl text-[44px] leading-[1.08] font-bold tracking-tight text-ink sm:text-6xl lg:text-[72px]">
          {["Your website is your", "first salesperson.", "We make it convert."].map(
            (line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className={`block ${i === 1 ? "text-accent" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.75, delay: 0.1 + i * 0.1, ease }}
                >
                  {line}
                </motion.span>
              </span>
            )
          )}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.55, ease }}
          className="mt-6 max-w-xl text-base leading-relaxed text-fog sm:text-lg"
        >
          CodeNiti designs and builds websites, platforms and AI agents for
          businesses — live and running across India and Australia since 2021.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.7, ease }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-deep"
          >
            Start a project
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#work"
            className="rounded-full border border-line bg-white px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-line-bright"
          >
            See the work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
