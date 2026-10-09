import { company } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line-dim bg-panel/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-[10px] tracking-[0.2em] text-fog sm:flex-row">
        <span>© {company.year} {company.name.toUpperCase()} — ALL SYSTEMS RESERVED</span>
        <span>
          KOTA, IN — 25.2138°N 75.8640°E · BUILD {company.year}.10.09
        </span>
        <span className="text-phos">
          EXIT CODE 0 <span className="blink">▊</span>
        </span>
      </div>
    </footer>
  );
}
