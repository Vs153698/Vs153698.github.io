"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

function TypeLine({ text }: { text: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (n >= text.length) return;
    const t = setTimeout(() => setN((v) => v + 1), 55 + Math.random() * 60);
    return () => clearTimeout(t);
  }, [n, text]);
  return (
    <span>
      <span className="text-fog">{text.slice(0, n)}</span>
      <span className="blink text-phos">▊</span>
    </span>
  );
}

const readout = [
  { k: "OPERATOR", v: profile.name.toUpperCase() },
  { k: "ROLE", v: "FULL-STACK DEV / AGENT BUILDER" },
  { k: "STACK", v: "TS · PY · NEXT.JS · LLM" },
  { k: "SECTOR", v: "WEB SYSTEMS + AI AUTOMATION" },
  { k: "STATUS", v: "● ONLINE — ACCEPTING BRIEFS", hot: true },
];

export function Hero() {
  return (
    <section id="top" className="dot-grid relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_35%,transparent_20%,#060807_95%)]"
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-[94vh] max-w-6xl flex-col justify-center px-5 pt-24 pb-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-xs text-fog"
        >
          <span className="text-phos">$</span> <TypeLine text={`./init --operator ${profile.shortName.toLowerCase()} --mode production`} />
        </motion.p>

        <h1 className="mt-10 text-4xl leading-[1.15] font-bold tracking-tight sm:text-6xl lg:text-7xl">
          {["SYSTEMS THAT", "THINK.", "SOFTWARE THAT", "PAYS FOR ITSELF."].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className={`block ${
                  i === 1 ? "text-phos glow-strong" : i === 3 ? "text-amber" : "text-zinc-100"
                }`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.12, ease }}
              >
                {line}
                {i === 3 && <span className="blink text-phos"> _</span>}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease }}
          className="mt-8 max-w-xl text-sm leading-relaxed text-fog"
        >
          {`// web platforms, CRMs, booking systems & autonomous agents`}
          <br />
          {`// deployed for founders in India & Australia since ${profile.since}`}
        </motion.p>

        {/* status readout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3, ease }}
          className="tick-corners mt-12 max-w-2xl border border-line bg-panel/80"
        >
          <div className="flex items-center justify-between border-b border-line px-4 py-2 text-[10px] tracking-[0.25em] text-fog">
            <span>SYS.READOUT</span>
            <span>v{profile.year}.10</span>
          </div>
          <dl>
            {readout.map((r) => (
              <div
                key={r.k}
                className="grid grid-cols-[110px_1fr] gap-4 border-b border-line-dim px-4 py-2 text-xs last:border-0 sm:grid-cols-[160px_1fr]"
              >
                <dt className="text-fog">{r.k}</dt>
                <dd className={r.hot ? "text-phos glow" : "text-zinc-200"}>{r.v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="mt-12 flex flex-wrap items-center gap-3 text-xs"
        >
          <a href="#work" className="inv-btn border border-line px-5 py-2.5 text-phos-bright">
            ▼ ./inspect --work
          </a>
          <a href="#contact" className="inv-btn border border-line px-5 py-2.5 text-phos-bright">
            ▶ ./open-channel
          </a>
          <a
            href={profile.telegramBot}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2.5 text-fog transition-colors hover:text-phos-bright"
          >
            $ ./talk-to-agent ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
