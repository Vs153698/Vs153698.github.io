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
      duration: 1.5,
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
    <section className="border-y border-line bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-line lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className="bg-white px-6 py-10">
            <Reveal delay={i * 0.05}>
              <div className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-fog">{s.label}</div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
