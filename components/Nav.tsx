import { GithubIcon } from "./GithubIcon";
import { profile } from "@/lib/data";

const links = [
  { href: "#work", label: "WORK" },
  { href: "#services", label: "MODULES" },
  { href: "#stack", label: "TOOLCHAIN" },
  { href: "#contact", label: "UPLINK" },
];

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-line-dim bg-ink/85 backdrop-blur-sm">
      <nav className="mx-auto flex h-11 max-w-6xl items-center justify-between px-5 text-xs">
        <a href="#top" className="flex items-center gap-2 text-phos glow">
          <span className="text-phos-bright">vaibhav@kota</span>
          <span className="text-fog">:~/dev$</span>
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
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inv-btn flex items-center gap-2 border border-line px-3 py-1.5 text-fog"
        >
          <GithubIcon className="size-3.5" />
          <span className="hidden sm:inline">gh:Vs153698</span>
        </a>
      </nav>
    </header>
  );
}
