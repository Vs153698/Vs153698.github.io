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
  year: 2026,
};

export type Project = {
  name: string;
  host: string;
  desc: string;
  stack: string;
  url: string;
  tag: string;
  img: string; // /work/*.jpg screenshot
  tile: string; // gradient for tag chip
};

export const projects: Project[] = [
  {
    name: "National Book of Records",
    host: "nationalbookofrecords.org",
    desc: "India's official record authority — applications, payments, certified records.",
    stack: "Next.js · TypeScript",
    url: "https://nationalbookofrecords.org/",
    tag: "Portal",
    img: "/work/nbr.jpg",
    tile: "linear-gradient(135deg,#8b5cf6,#ec4899)",
  },
  {
    name: "NBR CRM",
    host: "crm.codeniti.in",
    desc: "Internal operations CRM — workflows, integrations, document vault.",
    stack: "NestJS · PostgreSQL",
    url: "https://crm.codeniti.in/login",
    tag: "CRM",
    img: "/work/nbrcrm.jpg",
    tile: "linear-gradient(135deg,#06b6d4,#3b82f6)",
  },
  {
    name: "ProSportsData.ai",
    host: "prosportsdata.ai",
    desc: "Multi-sport AI intelligence platform — early access live.",
    stack: "AI · LLM Pipelines",
    url: "https://prosportsdata.ai/",
    tag: "AI Product",
    img: "/work/psd.jpg",
    tile: "linear-gradient(135deg,#10b981,#84cc16)",
  },
  {
    name: "Willsmeet",
    host: "willsmeet.com",
    desc: "B2B procurement — 3000+ products, data-driven logistics, 24/7 delivery.",
    stack: "Next.js · Commerce",
    url: "https://willsmeet.com/",
    tag: "Platform",
    img: "/work/willsmeet.jpg",
    tile: "linear-gradient(135deg,#f59e0b,#ef4444)",
  },
  {
    name: "Chennai Bulls Rugby",
    host: "chennaibullsrugby.com",
    desc: "Official club site — men's & women's premier league teams.",
    stack: "Web · CMS",
    url: "https://chennaibullsrugby.com/",
    tag: "Sports",
    img: "/work/bulls.jpg",
    tile: "linear-gradient(135deg,#ec4899,#f43f5e)",
  },
  {
    name: "HommCorp Australia",
    host: "hommcorp.com.au",
    desc: "Melbourne service booking — moving, cleaning, gardening, junk removal.",
    stack: "Booking · Payments",
    url: "https://hommcorp.com.au/",
    tag: "Booking",
    img: "/work/homm.jpg",
    tile: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
  },
];

export const services = [
  {
    title: "AI Agents & Products",
    desc: "Autonomous agents and AI platforms — from sports intelligence to support bots that close tickets and chase documents.",
    tags: ["LLM", "Agents", "Automation"],
    icon: "Bot",
    tile: "linear-gradient(135deg,#8b5cf6,#6366f1)",
    big: true,
  },
  {
    title: "Web Platforms & Portals",
    desc: "Public-facing platforms with applications, payments and certificates — built for real institutional load.",
    tags: ["Next.js", "Payments"],
    icon: "Globe",
    tile: "linear-gradient(135deg,#06b6d4,#3b82f6)",
  },
  {
    title: "CRM & Internal Systems",
    desc: "The operations backbone: pipelines, document vaults, role-based workflows your team actually uses.",
    tags: ["NestJS", "PostgreSQL"],
    icon: "Database",
    tile: "linear-gradient(135deg,#10b981,#14b8a6)",
  },
  {
    title: "Booking & Service Platforms",
    desc: "Instant estimates, GST-aware invoicing, crew dispatch — service businesses end to end.",
    tags: ["Booking", "Dispatch"],
    icon: "CalendarClock",
    tile: "linear-gradient(135deg,#f59e0b,#f97316)",
  },
  {
    title: "Commerce & Procurement",
    desc: "Catalogs, ordering flows and logistics views for B2B trade.",
    tags: ["B2B", "Logistics"],
    icon: "ShoppingCart",
    tile: "linear-gradient(135deg,#ec4899,#f43f5e)",
  },
  {
    title: "Website Rescue & Redesign",
    desc: "Legacy sites rebuilt into fast, mobile-first systems that turn visitors into enquiries.",
    tags: ["Migration", "SEO-safe"],
    icon: "Paintbrush",
    tile: "linear-gradient(135deg,#84cc16,#22c55e)",
  },
];

export const stats = [
  { value: 6, suffix: "+", label: "Production systems" },
  { value: 5, suffix: "", label: "Industry sectors" },
  { value: 2, suffix: "", label: "Countries — IN · AU" },
  { value: 5, suffix: "+", label: "Years operating" },
];
