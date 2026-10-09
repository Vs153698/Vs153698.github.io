# vaibhav.dev — personal site

Personal portfolio of **Vaibhav Singh Bhadouria** — full-stack developer & AI agent builder.

Built with **Next.js 16 (App Router, static export)**, **Tailwind CSS 4**, **Framer Motion** and **Lucide** icons. Design direction: Linear/Vercel-style dark, type-driven UI with an acid-lime accent.

Live at **https://vs153698.github.io**

## Branch model

- **`dev`** — the source code. Edit and push here.
- **`main`** — the built static site (`./out`), auto-published by `.github/workflows/deploy.yml`. Never edit manually; GitHub Pages serves this branch's root.

Every push to `dev` rebuilds and republishes within ~1 minute.

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

Because the build is a plain static export (`output: "export"`), the same `out/`
folder can be dropped on Vercel, Netlify or Cloudflare Pages.
