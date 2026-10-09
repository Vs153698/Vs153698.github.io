"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { stats } from "@/lib/data";
import { Reveal } from "./Reveal";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function Stats() {
  return (
    <section className="border-y border-line bg-white/[0.02]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-5 py-16 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center">
            <div className="text-gradient font-display text-5xl font-bold tracking-tight sm:text-6xl">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 text-sm text-zinc-400">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
