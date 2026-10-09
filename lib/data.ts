export const profile = {
  name: "Vaibhav Singh Bhadouria",
  shortName: "Vaibhav",
  role: "Full-Stack Developer & AI Agent Builder",
  location: "Kota, Rajasthan, India",
  github: "https://github.com/Vs153698",
  x: "https://x.com/vs153698",
  telegramBot: "https://t.me/Kimiv_bot",
  avatar: "https://avatars.githubusercontent.com/u/86617405?v=4",
  since: 2021,
  publicRepos: 45,
  // pinned at build time — static export can't read the clock at prerender
  year: 2026,
};

export type Project = {
  name: string;
  desc: string;
  lang: string;
  year: string;
  url: string;
  tag: string;
};

export const projects: Project[] = [
  {
    name: "moments",
    desc: "Moments — production monorepo spanning API, mobile and web clients.",
    lang: "TypeScript",
    year: "2026",
    url: "https://github.com/Vs153698/moments",
    tag: "Platform",
  },
  {
    name: "nbr-crm",
    desc: "CRM system for National Book of Records — workflow engine, integrations, document vault.",
    lang: "TypeScript",
    year: "2026",
    url: "https://github.com/Vs153698/nbr-crm",
    tag: "Business system",
  },
  {
    name: "hommcorp-platform",
    desc: "Multi-service booking platform for Australia — moving, cleaning, gardening, junk removal.",
    lang: "TypeScript",
    year: "2026",
    url: "https://github.com/Vs153698/hommcorp-platform",
    tag: "Booking",
  },
  {
    name: "Jarvis",
    desc: "Personal AI assistant — automation and tooling experiments in Python.",
    lang: "Python",
    year: "2026",
    url: "https://github.com/Vs153698/Jarvis",
    tag: "AI agent",
  },
  {
    name: "trailmesh",
    desc: "TrailMesh — realtime mesh platform for trails, routes and live tracking.",
    lang: "TypeScript",
    year: "2026",
    url: "https://github.com/Vs153698/trailmesh",
    tag: "Realtime",
  },
  {
    name: "nationalbookofrecord",
    desc: "Public application portal with payments, certificates and evidence uploads.",
    lang: "TypeScript",
    year: "2026",
    url: "https://github.com/Vs153698/nationalbookofrecord",
    tag: "Web app",
  },
];

export const services = [
  {
    icon: "Bot",
    title: "AI Agents & Automation",
    desc: "Custom agents that qualify leads, chase documents, answer customers and run your back-office — wired into WhatsApp, Telegram, email and your CRM.",
    tags: ["LLM workflows", "Tool use", "Chatbots"],
    big: true,
  },
  {
    icon: "Globe",
    title: "Web Development",
    desc: "Fast, conversion-focused sites and apps in Next.js and React — built to score green on Core Web Vitals.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    icon: "RefreshCw",
    title: "Website Redesign",
    desc: "Legacy sites rebuilt into modern, mobile-first experiences that turn visitors into enquiries.",
    tags: ["Migration", "SEO-safe", "Performance"],
  },
  {
    icon: "Database",
    title: "CRM & Business Systems",
    desc: "Internal tools, dashboards, pipelines and record systems tailored to how your team actually works.",
    tags: ["NestJS", "PostgreSQL", "Dashboards"],
  },
  {
    icon: "CalendarCheck",
    title: "Booking & E-commerce",
    desc: "Reservation flows, payments, dispatch and order management — from a single booking page to full platforms.",
    tags: ["Payments", "Booking flows", "Multi-service"],
  },
  {
    icon: "Terminal",
    title: "APIs & Integrations",
    desc: "Payment gateways, WhatsApp, telephony, shipping — the plumbing that makes business software feel effortless.",
    tags: ["REST", "Webhooks", "Third-party APIs"],
  },
];

export const stackGroups = [
  { label: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vite"] },
  { label: "Backend", items: ["Node.js", "NestJS", "Fastify", "Python", "PostgreSQL", "Redis"] },
  { label: "AI & Agents", items: ["LLM APIs", "Agent workflows", "RAG", "Automation", "Telegram/WhatsApp bots"] },
  { label: "Cloud & Ops", items: ["GitHub Actions", "Docker", "Cloudflare", "AWS", "CI/CD"] },
];
