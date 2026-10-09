import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // static export → deployable to GitHub Pages, Vercel, Netlify, any static host
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
