import { company } from "@/lib/data";

const links = [
  { href: "#work", label: "SYSTEMS" },
  { href: "#services", label: "MODULES" },
  { href: "#about", label: "LOG" },
  { href: "#contact", label: "UPLINK" },
];

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-line-dim bg-ink/85 backdrop-blur-sm">
      <nav className="mx-auto flex h-11 max-w-6xl items-center justify-between px-5 text-xs">
        <a href="#top" className="flex items-center gap-2 text-phos glow">
          <span className="border border-phos/40 px-1.5 py-0.5 text-[10px] font-bold tracking-widest text-phos-bright">
            CN
          </span>
          <span className="text-phos-bright">{company.name.toLowerCase()}@prod</span>
          <span className="text-fog">:~/clients$</span>
          <span className="blink text-phos">▊</span>
        </a>

        <div className="hidden items-center gap-5 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-fog transition-colors hover:text-phos-bright"
            >
              [{l.label}]
            </a>
          ))}
        </div>

        <a
          href={`mailto:${company.email}`}
          className="inv-btn flex items-center gap-2 border border-line px-3 py-1.5 text-fog"
        >
          <span className="hidden sm:inline">$ contact</span>
          <span className="text-phos">↗</span>
        </a>
      </nav>
    </header>
  );
}
