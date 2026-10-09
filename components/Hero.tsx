"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { company } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* aurora background */}
      <div className="absolute inset-0" aria-hidden>
        <div
          className="orb orb-1 left-[-10%] top-[-20%] h-[34rem] w-[34rem]"
          style={{ background: "rgba(139,92,246,0.32)" }}
        />
        <div
          className="orb orb-2 right-[-15%] top-[5%] h-[30rem] w-[30rem]"
          style={{ background: "rgba(56,189,248,0.24)" }}
        />
        <div
          className="orb orb-3 bottom-[-35%] left-[25%] h-[36rem] w-[36rem]"
          style={{ background: "rgba(236,72,153,0.18)" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_65%_60%_at_50%_35%,black,transparent)]" />
      </div>

      <div className="relative mx-auto flex min-h-[94vh] max-w-6xl flex-col items-center justify-center px-5 pt-28 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="glass flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-fog"
        >
          <Sparkles className="size-3.5 text-violet-300" />
          Software lab — {company.location.split(",")[0]}, India · since {company.since}
        </motion.div>

        <h1 className="mt-8 max-w-4xl text-5xl leading-[1.08] font-semibold tracking-tight sm:text-7xl">
          {["We build", "digital systems", "that think &", "run the business."].map(
            (line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className={`block ${
                    i === 1 || i === 3 ? "text-gradient" : "text-white"
                  }`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease }}
                >
                  {line}
                </motion.span>
              </span>
            )
          )}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease }}
          className="mt-7 max-w-xl text-base leading-relaxed text-fog sm:text-lg"
        >
          {company.name} designs and ships portals, CRMs, booking platforms and
          AI products — live in production across India and Australia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#work"
            className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-85"
          >
            See the work
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="glass rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25"
          >
            Start a project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
