import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Section, Chip } from "@/components/section";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Mukundan Saravanan" },
      { name: "description", content: "Engineering, electronics and software projects by Mukundan Saravanan." },
      { property: "og:title", content: "Projects — Mukundan Saravanan" },
      { property: "og:description", content: "Case studies across software, electrical and embedded systems work." },
    ],
  }),
  component: ProjectsLayout,
});

const projects = [
  {
    slug: "space-traders",
    title: "Space Traders API Client",
    kind: "Software",
    year: "2026",
    blurb: "Python + Tkinter client for the Space Traders REST API — fleet, contracts and persistence.",
    stack: ["Python", "Tkinter", "REST", "JSON"],
  },
  {
    slug: "workshop",
    title: "Workshop Conversion Project",
    kind: "Electrical",
    year: "2024",
    blurb: "End-to-end outbuilding conversion — planning, insulation, first-fix electrics, consumer unit.",
    stack: ["Planning", "Insulation", "Electrical", "Procurement"],
  },
  {
    slug: "future",
    title: "Future Electronics Builds",
    kind: "Embedded",
    year: "2026+",
    blurb: "Upcoming PCB, microcontroller and AI-hardware experiments.",
    stack: ["MCU", "PCB", "FPGA"],
  },
];

const filters = ["All", "Software", "Electrical", "Embedded"] as const;

function ProjectsLayout() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  if (path !== "/projects") return <Outlet />;

  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = projects.filter((p) => filter === "All" || p.kind === filter);

  return (
    <Section eyebrow="Projects" title="Case studies across software, electrical and embedded work.">
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`mono text-xs px-3 py-1.5 rounded-full border transition ${
              filter === f
                ? "border-primary bg-primary/15 text-primary"
                : "border-border text-muted-foreground hover:border-primary/50"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((p) => (
          <Link
            key={p.slug}
            to="/projects/$slug"
            params={{ slug: p.slug }}
            className="card-surface card-surface-hover p-6 flex flex-col group"
          >
            <div className="flex items-center justify-between">
              <span className="chip">{p.kind}</span>
              <span className="mono text-xs text-muted-foreground">{p.year}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground flex-1 leading-relaxed">{p.blurb}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => <Chip key={s}>{s}</Chip>)}
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
