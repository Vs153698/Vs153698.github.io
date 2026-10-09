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
  tile: string; // gradient tile class
};

export const projects: Project[] = [
  {
    name: "moments",
    desc: "Moments — production monorepo spanning API, mobile and web clients.",
    lang: "TypeScript",
    year: "2026",
    url: "https://github.com/Vs153698/moments",
    tag: "Platform",
    tile: "tile-violet",
  },
  {
    name: "nbr-crm",
    desc: "CRM for National Book of Records — workflows, integrations, document vault.",
    lang: "TypeScript",
    year: "2026",
    url: "https://github.com/Vs153698/nbr-crm",
    tag: "Business system",
    tile: "tile-cyan",
  },
  {
    name: "hommcorp-platform",
    desc: "Multi-service booking platform for Australia — moving, cleaning, junk removal.",
    lang: "TypeScript",
    year: "2026",
    url: "https://github.com/Vs153698/hommcorp-platform",
    tag: "Booking",
    tile: "tile-green",
  },
  {
    name: "Jarvis",
    desc: "Personal AI assistant — automation and agent tooling experiments in Python.",
    lang: "Python",
    year: "2026",
    url: "https://github.com/Vs153698/Jarvis",
    tag: "AI agent",
    tile: "tile-pink",
  },
  {
    name: "trailmesh",
    desc: "TrailMesh — realtime mesh platform for trails, routes and live tracking.",
    lang: "TypeScript",
    year: "2026",
    url: "https://github.com/Vs153698/trailmesh",
    tag: "Realtime",
    tile: "tile-amber",
  },
  {
    name: "nationalbookofrecord",
    desc: "Public application portal with payments, certificates and evidence uploads.",
    lang: "TypeScript",
    year: "2026",
    url: "https://github.com/Vs153698/nationalbookofrecord",
    tag: "Web app",
    tile: "tile-blue",
  },
];

export const services = [
  {
    icon: "Bot",
    title: "AI Agents & Automation",
    desc: "Custom agents that qualify leads, chase documents, answer customers and run your back-office — wired into WhatsApp, Telegram, email and your CRM.",
    tags: ["LLM workflows", "Tool use", "Chatbots"],
    tile: "tile-violet",
    big: true,
  },
  {
    icon: "Globe",
    title: "Web Development",
    desc: "Fast, conversion-focused sites and apps in Next.js and React — green Core Web Vitals out of the box.",
    tags: ["Next.js", "React", "TypeScript"],
    tile: "tile-cyan",
  },
  {
    icon: "RefreshCw",
    title: "Website Redesign",
    desc: "Legacy sites rebuilt into modern, mobile-first experiences that turn visitors into enquiries.",
    tags: ["Migration", "SEO-safe", "Performance"],
    tile: "tile-pink",
  },
  {
    icon: "Database",
    title: "CRM & Business Systems",
    desc: "Internal tools, dashboards, pipelines and record systems tailored to how your team works.",
    tags: ["NestJS", "PostgreSQL", "Dashboards"],
    tile: "tile-amber",
  },
  {
    icon: "CalendarCheck",
    title: "Booking & E-commerce",
    desc: "Reservation flows, payments, dispatch and order management — one page to full platforms.",
    tags: ["Payments", "Booking flows"],
    tile: "tile-green",
  },
  {
    icon: "Terminal",
    title: "APIs & Integrations",
    desc: "Payment gateways, WhatsApp, telephony, shipping — plumbing that makes software effortless.",
    tags: ["REST", "Webhooks", "APIs"],
    tile: "tile-blue",
  },
];

export const stats = [
  { value: 45, suffix: "+", label: "Public repositories" },
  { value: 5, suffix: "+", label: "Years shipping code" },
  { value: 8, suffix: "+", label: "Platforms & products" },
  { value: 2, suffix: "", label: "Markets — India & Australia" },
];

export const stackGroups = [
  { label: "Frontend", tile: "tile-cyan", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vite"] },
  { label: "Backend", tile: "tile-violet", items: ["Node.js", "NestJS", "Fastify", "Python", "PostgreSQL", "Redis"] },
  { label: "AI & Agents", tile: "tile-pink", items: ["LLM APIs", "Agent workflows", "RAG", "Automation", "TG/WhatsApp bots"] },
  { label: "Cloud & Ops", tile: "tile-green", items: ["GitHub Actions", "Docker", "Cloudflare", "AWS", "CI/CD"] },
];
