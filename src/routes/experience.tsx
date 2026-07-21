import { createFileRoute } from "@tanstack/react-router";
import { Section, Chip } from "@/components/section";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Work Experience — Mukundan Saravanan" },
      { name: "description", content: "Engineering placements: Alpha Electrics Ltd, Global Aspire, KCB Electrical Services." },
      { property: "og:title", content: "Work Experience — Mukundan Saravanan" },
      { property: "og:description", content: "Hands-on motor engineering, procurement and electrical installation experience." },
    ],
  }),
  component: Experience,
});

const experiences = [
  {
    company: "Alpha Electrics Ltd",
    role: "Engineering Placement",
    period: "2026",
    focus: "Industrial motor engineering",
    summary:
      "Detailed exposure to industrial electric motor repair, diagnostics and rewinding — working alongside experienced engineers on real customer units.",
    highlights: [
      "AC motor diagnostics and testing",
      "DC motor inspection and refurbishment",
      "Servo motor evaluation",
      "Stator rewinding technique",
      "Resolver troubleshooting",
      "Encoder fault-finding",
      "Bearing removal and replacement",
      "Industrial fault diagnosis workflows",
    ],
    tags: ["Motors", "Diagnostics", "Rewinding", "Industrial"],
  },
  {
    company: "Global Aspire",
    role: "Engineering & Procurement Support",
    period: "2025",
    focus: "Quotations & supply chain",
    summary:
      "Supported engineering quotations and procurement workflows — first-hand look at how technical spec, sourcing and supplier relationships flow into a working supply chain.",
    highlights: [
      "Preparing engineering quotations",
      "Component and material procurement",
      "Supplier communication",
      "Exposure to supply chain operations",
    ],
    tags: ["Procurement", "Quotations", "Supply Chain"],
  },
  {
    company: "KCB Electrical Services",
    role: "Electrical Work Experience",
    period: "2024",
    focus: "Domestic electrical installation",
    summary:
      "Assisted with domestic electrical installation work — the practical grounding in UK electrical systems and safety that everything since has built on.",
    highlights: [
      "Consumer unit installation",
      "Circuit testing and safety checks",
      "Understanding UK electrical regulations",
      "Working safely around live systems",
    ],
    tags: ["Electrical", "Safety", "Installation"],
  },
];

function Experience() {
  return (
    <Section eyebrow="Experience" title="Where I've been learning engineering on the ground.">
      <div className="space-y-6">
        {experiences.map((e) => (
          <article key={e.company} className="card-surface p-6 md:p-8">
            <div className="grid md:grid-cols-[1fr_auto] gap-4 items-start">
              <div>
                <p className="mono text-xs uppercase tracking-widest text-primary">{e.focus}</p>
                <h3 className="mt-1 text-2xl font-semibold">{e.company}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.role} · {e.period}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 md:justify-end">
                {e.tags.map((t) => <Chip key={t}>{t}</Chip>)}
              </div>
            </div>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-3xl">{e.summary}</p>
            <div className="mt-5 grid sm:grid-cols-2 gap-2">
              {e.highlights.map((h) => (
                <div key={h} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
