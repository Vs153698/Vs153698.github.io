import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-xs text-fog sm:flex-row">
        <p>
          © {profile.year} {profile.name}
        </p>
        <p className="font-mono">
          Built with Next.js · deployed on GitHub Pages
        </p>
      </div>
    </footer>
  );
}
