# vaibhav.dev — personal site

Personal portfolio of **Vaibhav Singh Bhadouria** — full-stack developer & AI agent builder.

Built with **Next.js 16 (App Router, static export)**, **Tailwind CSS 4**, **Framer Motion** and **Lucide** icons. Design direction: Linear/Vercel-style dark, type-driven UI with an acid-lime accent.

## Sections

Hero · Services bento (incl. AI agents + website redesign) · Selected work (live GitHub repos) · Stack · About · Contact

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # static export → ./out
```

## Deploy

Pushes to `main` auto-deploy to **GitHub Pages** via `.github/workflows/deploy.yml`.
The repo name `Vs153698.github.io` makes it available at:

**https://vs153698.github.io**

Because the build is a plain static export (`output: "export"`), the same `out/` folder
can be dropped on Vercel, Netlify, Cloudflare Pages or any static host.
