import { company } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 text-sm text-fog sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex size-7 items-center justify-center rounded-lg bg-accent text-xs font-bold text-white">
            CN
          </span>
          <span className="font-semibold text-ink">{company.name}</span>
          <span>· Kota, India</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={company.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-ink"
          >
            GitHub
          </a>
          <a
            href={company.x}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-ink"
          >
            X
          </a>
          <a
            href={`mailto:${company.email}`}
            className="transition hover:text-ink"
          >
            Email
          </a>
        </div>
        <span>© {company.year} — All rights reserved</span>
      </div>
    </footer>
  );
}
