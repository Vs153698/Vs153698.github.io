export const company = {
  name: "CodeNiti",
  email: "hello@codeniti.in", // PLACEHOLDER — confirm/replace
  github: "https://github.com/Vs153698",
  x: "https://x.com/vs153698",
  telegramBot: "https://t.me/Kimiv_bot",
  year: 2026,
};

export type Project = {
  name: string;
  url: string;
  tag: string; // sector · LIVE
};

export const projects: Project[] = [
  { name: "National Book of Records", url: "https://nationalbookofrecords.org/", tag: "Portal · India" },
  { name: "HommCorp Australia", url: "https://hommcorp.com.au/", tag: "Booking · Melbourne" },
  { name: "Willsmeet", url: "https://willsmeet.com/", tag: "B2B Commerce" },
  { name: "ProSportsData.ai", url: "https://prosportsdata.ai/", tag: "AI Product" },
  { name: "Chennai Bulls Rugby", url: "https://chennaibullsrugby.com/", tag: "Sports Club" },
  { name: "NBR CRM", url: "https://crm.codeniti.in/login", tag: "Internal Systems" },
];

export const services = [
  { title: "AI Agents", desc: "Bots that answer customers, qualify leads and chase paperwork — on web, WhatsApp and Telegram. While you sleep." },
  { title: "Websites & Platforms", desc: "Blazing-fast sites built to convert, with payments, portals and certificates." },
  { title: "CRM & Systems", desc: "The boring-but-critical backbone your team lives in every day." },
  { title: "Booking Engines", desc: "Instant estimates, GST-aware invoicing, crew dispatch — service businesses end to end." },
  { title: "B2B Commerce", desc: "Catalogs and ordering flows that make wholesale feel retail-easy." },
  { title: "Site Rescue", desc: "We take your tired old site and rebuild it — rankings intact, conversion up." },
];

export const stats = [
  { v: "6+", k: "production systems" },
  { v: "5", k: "sectors served" },
  { v: "2", k: "countries — IN · AU" },
  { v: "48h", k: "to your fixed quote" },
];

export const ticker = [
  "WEBSITES", "APPS", "AI AGENTS", "REDESIGNS", "PLATFORMS", "BOOKING SYSTEMS", "CRM",
];
