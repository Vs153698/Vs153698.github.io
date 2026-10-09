import { MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "./Reveal";

const facts = [
  { k: "Based in", v: "Kota, Rajasthan, IN" },
  { k: "Markets", v: "India & Australia" },
  { k: "Shipping since", v: "2021" },
  { k: "Focus", v: "Web platforms · AI agents" },
];

export function About() {
  return (
    <section className="border-t border-line bg-panel/30">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-28 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-acid">
            About
          </p>
          <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Developer first.
            <br />
            <span className="text-outline">Business minded.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fog">
            I started as a Python developer and went deep into the web — today I
            build production platforms end-to-end: the frontend your customers
            touch, the systems your team works in, and the AI agents that keep
            both running after hours.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-fog">
            From CRM systems and booking platforms to WhatsApp and Telegram
            agents, I care about one thing: software that quietly pays for
            itself.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-fog">
            <MapPin className="size-4 text-acid" />
            {profile.location} — working with clients everywhere.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="overflow-hidden rounded-2xl border border-line bg-panel">
            <div className="border-b border-line px-6 py-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-fog">
                facts.json
              </span>
            </div>
            <dl className="divide-y divide-line">
              {facts.map((f) => (
                <div
                  key={f.k}
                  className="flex items-center justify-between px-6 py-4"
                >
                  <dt className="text-sm text-fog">{f.k}</dt>
                  <dd className="font-mono text-sm text-white">{f.v}</dd>
                </div>
              ))}
            </dl>
            <div className="bg-ink/60 px-6 py-4">
              <code className="font-mono text-xs text-acid">
                {`> status: open_to_work --remote`}
              </code>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
