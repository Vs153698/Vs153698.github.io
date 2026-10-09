"use client";

import { useState } from "react";
import { company } from "@/lib/data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-yellow">
      <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-5">
        <a
          href="#top"
          className="text-xl font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          WEBKRAFT<span className="text-red">*</span>
        </a>

        <div className="hidden items-center gap-7 text-[15px] font-medium md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-red">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${company.email}`}
            className="hidden text-sm font-semibold underline decoration-red decoration-2 underline-offset-4 transition hover:text-red lg:block"
          >
            {company.email}
          </a>
          <a
            href="#contact"
            className="nb-btn bg-ink px-5 py-2.5 text-sm text-white"
          >
            START A PROJECT
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="nb-btn bg-white px-3 py-2 text-sm font-bold md:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="border-t-[3px] border-ink bg-yellow px-5 pb-5 md:hidden">
          <div className="flex flex-col gap-1 pt-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b-2 border-ink/10 py-3 text-lg font-bold uppercase tracking-wide transition hover:text-red"
              >
                {l.label} →
              </a>
            ))}
            <a
              href={`mailto:${company.email}`}
              className="pt-4 text-sm font-semibold underline decoration-red decoration-2 underline-offset-4"
            >
              {company.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
