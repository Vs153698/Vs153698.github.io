import { company } from "@/lib/data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4">
      <nav className="glass-strong flex w-full max-w-3xl items-center justify-between rounded-full py-2 pr-2 pl-5 shadow-glow">
        <a href="#top" className="flex items-center gap-2.5">
          <span
            className="flex size-7 items-center justify-center rounded-lg text-xs font-bold text-white"
            style={{ background: "linear-gradient(135deg,#8b5cf6,#06b6d4)" }}
          >
            CN
          </span>
          <span className="text-sm font-semibold tracking-tight">
            {company.name}
          </span>
        </a>

        <div className="hidden items-center gap-6 text-sm text-fog md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-white">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${company.email}`}
          className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-black transition hover:opacity-85"
        >
          Start a project
        </a>
      </nav>
    </header>
  );
}
