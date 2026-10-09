"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { profile } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* backdrop */}
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-acid/10 blur-[140px]"
        aria-hidden
      />
      <div
        className="absolute top-24 right-[-120px] h-[300px] w-[300px] rounded-full bg-white/5 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-5 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-8 flex"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel px-4 py-1.5 text-xs text-fog">
            <span className="relative flex size-2">
              <span className="animate-ping-slow absolute inline-flex size-full rounded-full bg-acid" />
              <span className="relative inline-flex size-2 rounded-full bg-acid" />
            </span>
            Available for projects — {profile.location}
          </span>
        </motion.div>

        <h1 className="font-display text-[13vw] leading-[0.92] font-bold tracking-[-0.04em] sm:text-7xl lg:text-[92px]">
          {["Full-stack", "developer", "building AI"].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.09, ease }}
              >
                {i === 2 ? (
                  <>
                    building <span className="text-acid">AI</span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden">
            <motion.span
              className="text-outline block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.37, ease }}
            >
              that works.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease }}
          className="mt-8 max-w-xl text-lg text-fog"
        >
          I&apos;m {profile.shortName} — I design and ship web platforms, business
          systems and autonomous agents for founders who want software that earns
          its keep.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-acid px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-95"
          >
            Start a project
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-fog transition-colors hover:border-white/30 hover:text-white"
          >
            <ArrowDown className="size-4" />
            See the work
          </a>
          <a
            href={profile.telegramBot}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-2 py-3 text-sm text-fog transition-colors hover:text-acid"
          >
            <Sparkles className="size-4" />
            Talk to my AI agent
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 grid grid-cols-3 max-w-lg gap-6 border-t border-line pt-6"
        >
          {[
            { k: `${profile.publicRepos}+`, v: "public repos" },
            { k: `${profile.year - profile.since}+`, v: "years shipping" },
            { k: "IN · AU", v: "clients & markets" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-2xl font-bold tracking-tight text-white">
                {s.k}
              </div>
              <div className="mt-1 text-xs text-fog">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
