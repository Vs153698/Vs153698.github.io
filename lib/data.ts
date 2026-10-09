export const company = {
  name: "WebKraft",
  email: "hello@webkraft.in", // PLACEHOLDER — confirm/replace
  github: "https://github.com/Vs153698",
  x: "https://x.com/vs153698",
  telegramBot: "https://t.me/Kimiv_bot",
  year: 2026,
};

export type Project = {
  name: string;
  url: string;
  host: string;
  tag: string; // sector · LIVE
  img: string;
};

export const projects: Project[] = [
  { name: "National Book of Records", url: "https://nationalbookofrecords.org/", host: "nationalbookofrecords.org", tag: "Portal · India", img: "/work/nbr.jpg" },
  { name: "HommCorp Australia", url: "https://hommcorp.com.au/", host: "hommcorp.com.au", tag: "Booking · Melbourne", img: "/work/homm.jpg" },
  { name: "Willsmeet", url: "https://willsmeet.com/", host: "willsmeet.com", tag: "B2B Commerce", img: "/work/willsmeet.jpg" },
  { name: "ProSportsData.ai", url: "https://prosportsdata.ai/", host: "prosportsdata.ai", tag: "AI Product", img: "/work/psd.jpg" },
  { name: "Chennai Bulls Rugby", url: "https://chennaibullsrugby.com/", host: "chennaibullsrugby.com", tag: "Sports Club", img: "/work/bulls.jpg" },
  { name: "NBR CRM", url: "https://crm.codeniti.in/login", host: "crm.codeniti.in", tag: "Internal Systems", img: "/work/nbrcrm.jpg" },
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
