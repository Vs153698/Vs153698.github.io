import { company } from "@/lib/data";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-white">
            CN
          </span>
          <span className="text-[15px] font-bold tracking-tight">
            {company.name}
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-fog md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition hover:bg-accent-deep"
        >
          Start a project
        </a>
      </nav>
    </header>
  );
}
