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
    <header className="fixed top-4 inset-x-0 z-40 flex justify-center px-4">
      <nav className="glass flex h-12 w-full max-w-3xl items-center justify-between rounded-full px-4 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.7)]">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="tile tile-violet size-7 rounded-lg text-[11px] font-bold tracking-tighter">
            VS
          </span>
          <span className="font-mono text-sm text-fog">vaibhav.dev</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-1.5 text-sm text-fog transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-ink transition-transform hover:scale-105 active:scale-95"
        >
          <GithubIcon className="size-4" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </nav>
    </header>
  );
}
