export const company = {
  name: "CodeNiti",
  domain: "codeniti.in",
  url: "https://codeniti.in",
  tagline: "We build digital systems & AI agents that run businesses.",
  location: "Kota, Rajasthan, India",
  email: "hello@codeniti.in", // PLACEHOLDER — confirm/replace
  github: "https://github.com/Vs153698",
  x: "https://x.com/vs153698",
  telegramBot: "https://t.me/Kimiv_bot",
  since: 2021,
  // pinned at build time — static export can't read the clock at prerender
  year: 2026,
};

export type Project = {
  name: string; // display name
  host: string; // domain shown
  desc: string;
  stack: string;
  url: string; // live site
  tag: string; // sector
};

export const projects: Project[] = [
  {
    name: "National Book of Records",
    host: "nationalbookofrecords.org",
    desc: "India's official record authority — applications, payments, certified records.",
    stack: "NEXT.JS · TS · PAYMENTS",
    url: "https://nationalbookofrecords.org/",
    tag: "PORTAL",
  },
  {
    name: "NBR CRM",
    host: "crm.codeniti.in",
    desc: "Internal operations CRM — workflows, integrations, document vault.",
    stack: "NESTJS · TS · POSTGRESQL",
    url: "https://crm.codeniti.in/login",
    tag: "CRM",
  },
  {
    name: "ProSportsData.ai",
    host: "prosportsdata.ai",
    desc: "Multi-sport AI intelligence platform — early access live.",
    stack: "AI · LLM · DATA PIPELINES",
    url: "https://prosportsdata.ai/",
    tag: "AI PRODUCT",
  },
  {
    name: "Willsmeet",
    host: "willsmeet.com",
    desc: "B2B procurement — 3000+ products, data-driven logistics, 24/7 delivery.",
    stack: "NEXT.JS · COMMERCE",
    url: "https://willsmeet.com/",
    tag: "PLATFORM",
  },
  {
    name: "Chennai Bulls Rugby",
    host: "chennaibullsrugby.com",
    desc: "Official club site — men's & women's premier league teams.",
    stack: "WEB · CMS",
    url: "https://chennaibullsrugby.com/",
    tag: "SPORTS",
  },
  {
    name: "HommCorp Australia",
    host: "hommcorp.com.au",
    desc: "Melbourne service booking — moving, cleaning, gardening, junk removal.",
    stack: "BOOKING · TS · PAYMENTS",
    url: "https://hommcorp.com.au/",
    tag: "BOOKING",
  },
];

export const services = [
  {
    title: "AI Agents & Products",
    desc: "Autonomous agents and AI platforms — from sports intelligence to WhatsApp/Telegram bots that close tickets and chase documents.",
    tags: ["LLM", "AGENTS", "AUTOMATION"],
    big: true,
  },
  {
    title: "Web Platforms & Portals",
    desc: "Public-facing platforms with applications, payments and certificates — built to carry real institutional load.",
    tags: ["NEXT.JS", "PAYMENTS"],
  },
  {
    title: "CRM & Internal Systems",
    desc: "The operations backbone: pipelines, document vaults, role-based workflows your team actually uses.",
    tags: ["NESTJS", "POSTGRESQL"],
  },
  {
    title: "Booking & Service Platforms",
    desc: "Instant estimates, GST-aware invoicing, crew dispatch — service businesses end to end.",
    tags: ["BOOKING", "DISPATCH"],
  },
  {
    title: "Commerce & Procurement",
    desc: "Catalogs, ordering flows and logistics views for B2B trade.",
    tags: ["B2B", "LOGISTICS"],
  },
  {
    title: "Website Rescue & Redesign",
    desc: "Legacy sites rebuilt into fast, mobile-first systems that turn visitors into enquiries.",
    tags: ["MIGRATION", "SEO-SAFE"],
  },
];

export const stats = [
  { value: 6, suffix: "+", label: "PRODUCTION SYSTEMS" },
  { value: 5, suffix: "", label: "INDUSTRY SECTORS" },
  { value: 2, suffix: "", label: "COUNTRIES — IN · AU" },
  { value: 5, suffix: "+", label: "YEARS OPERATION" },
];

export const log = [
  {
    t: "2021.06",
    tag: "BOOT",
    text: "CodeNiti founded in Kota. Python automation and tooling.",
  },
  {
    t: "2023",
    tag: "EXPAND",
    text: "Full-stack practice: TypeScript, Next.js, production client platforms.",
  },
  {
    t: "2025",
    tag: "DEPLOY",
    text: "National Book of Records portal + CRM, Willsmeet, Chennai Bulls, HommCorp AU live.",
  },
  {
    t: "2026",
    tag: "AGENTS",
    text: "AI product line: ProSportsData.ai in early access. Agent-driven support ops.",
  },
];
