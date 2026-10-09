import { company } from "@/lib/data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-yellow">
      <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-5">
        <a
          href="#top"
          className="text-xl font-bold tracking-tight"
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

        <div className="flex items-center gap-5">
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
        </div>
      </nav>
    </header>
  );
}
