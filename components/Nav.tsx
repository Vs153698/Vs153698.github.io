import { GithubIcon } from "./GithubIcon";
import { profile } from "@/lib/data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-line bg-ink/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="grid size-7 place-items-center rounded-md bg-acid text-[11px] font-bold tracking-tighter text-ink">
            VS
          </span>
          <span className="font-mono text-sm text-fog group-hover:text-white transition-colors">
            vaibhav.dev
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-fog transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-sm text-fog transition-all hover:border-acid/50 hover:text-white"
        >
          <GithubIcon className="size-4" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </nav>
    </header>
  );
}
