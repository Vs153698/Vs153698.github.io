import { company } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line bg-panel/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-fog sm:flex-row">
        <span>
          © {company.year} {company.name} · Kota, India
        </span>
        <div className="flex items-center gap-5">
          <a
            href={company.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>
          <a
            href={company.x}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            X
          </a>
          <a
            href={`mailto:${company.email}`}
            className="transition hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
