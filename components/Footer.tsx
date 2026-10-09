import { company } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-yellow px-5 py-7">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm font-medium sm:flex-row">
        <span className="font-bold">© {company.year} WEBKRAFT</span>
        <div className="flex items-center gap-6">
          <a
            href={company.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-red"
          >
            GitHub
          </a>
          <a
            href={company.x}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-red"
          >
            X
          </a>
          <a
            href={`mailto:${company.email}`}
            className="transition hover:text-red"
          >
            Email
          </a>
        </div>
        <span className="font-bold">{company.email.toUpperCase()}</span>
      </div>
    </footer>
  );
}
