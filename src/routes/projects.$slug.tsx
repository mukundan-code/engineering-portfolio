import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section, Chip } from "@/components/section";
import type { ReactNode } from "react";

type Project = {
  title: string;
  kind: string;
  year: string;
  summary: string;
  stack: string[];
  sections: { heading: string; body: ReactNode }[];
};

const PROJECTS: Record<string, Project> = {
  "space-traders": {
    title: "Space Traders API Client",
    kind: "Software · APIs",
    year: "2026",
    summary:
      "A Python desktop client for the Space Traders REST API. Handles authentication, fleet management, contract negotiation, market interactions and persistent JSON state — wrapped in a Tkinter GUI.",
    stack: ["Python", "Tkinter", "REST APIs", "JSON", "Requests"],
    sections: [
      {
        heading: "Overview",
        body: (
          <p>
            Space Traders is a headless game exposed entirely as a REST API. I built a client that
            lets you inspect fleets, buy and sell cargo, accept contracts and log actions — all
            through a native desktop UI rather than raw curl calls. The project turned into a
            hands-on tour of HTTP, JSON schema design, error handling and event-driven GUIs.
          </p>
        ),
      },
      {
        heading: "System architecture",
        body: (
          <pre className="mono text-xs overflow-x-auto p-5 rounded-md border border-border bg-background/60">
{`┌────────────┐   HTTP   ┌───────────────┐
│  Tkinter   │ ───────► │  API layer    │
│    UI      │ ◄─────── │  (requests)   │
└─────┬──────┘  JSON    └──────┬────────┘
      │                        │
      ▼                        ▼
┌────────────┐          ┌───────────────┐
│  State     │◄────────►│ Space Traders │
│  (JSON)    │          │  REST API     │
└────────────┘          └───────────────┘`}
          </pre>
        ),
      },
      {
        heading: "Features",
        body: (
          <ul className="grid sm:grid-cols-2 gap-2 text-sm">
            {[
              "Token-based authentication",
              "Fleet listing and ship status",
              "Contract accept / deliver flows",
              "Market inspection and trading",
              "Local JSON caching of state",
              "Structured error surfacing",
              "Log console for API calls",
              "Session persistence between launches",
            ].map((f) => (
              <li key={f} className="flex gap-2"><span className="text-primary mono">▹</span>{f}</li>
            ))}
          </ul>
        ),
      },
      {
        heading: "Screenshots",
        body: (
          <div className="grid sm:grid-cols-2 gap-4">
            {["Fleet dashboard", "Contract view"].map((label) => (
              <div key={label} className="aspect-video rounded-md border border-dashed border-border grid place-items-center bg-background/40">
                <span className="mono text-xs text-muted-foreground">{label} · screenshot</span>
              </div>
            ))}
          </div>
        ),
      },
      {
        heading: "Technical challenges",
        body: (
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>· Modelling the API's nested JSON responses cleanly in Python.</li>
            <li>· Keeping the Tkinter event loop responsive during API calls.</li>
            <li>· Handling rate limits, retries and expired sessions gracefully.</li>
            <li>· Structuring code so the UI, transport and state layers stayed decoupled.</li>
          </ul>
        ),
      },
      {
        heading: "Skills developed",
        body: (
          <div className="flex flex-wrap gap-2">
            {["REST semantics", "Async-safe UI", "JSON modelling", "Error handling", "Software architecture"].map(
              (s) => <Chip key={s}>{s}</Chip>
            )}
          </div>
        ),
      },
    ],
  },
  workshop: {
    title: "Workshop Conversion Project",
    kind: "Electrical · Hands-on",
    year: "2024",
    summary:
      "Converted an unused outbuilding into a fully functional workshop — planning, insulation, electrical first fix, consumer unit installation and material procurement, all managed end-to-end.",
    stack: ["Planning", "Insulation", "Electrical", "Procurement", "Project Mgmt"],
    sections: [
      {
        heading: "Planning",
        body: <p>Load calculations, layout planning for benches and tools, and a bill of materials before any work started.</p>,
      },
      {
        heading: "Thermal insulation",
        body: <p>Insulated walls and ceiling to make the workshop usable year-round and reduce heating requirement.</p>,
      },
      {
        heading: "Electrical installation",
        body: <p>Ran first-fix cabling for sockets, lighting circuits and a dedicated bench supply, respecting UK wiring regulations.</p>,
      },
      {
        heading: "Consumer unit installation",
        body: <p>Installed and populated a consumer unit with appropriately rated MCBs and RCD protection for each circuit.</p>,
      },
      {
        heading: "Procurement",
        body: <p>Sourced cabling, back boxes, sockets, insulation and fixings — comparing suppliers to keep the project on budget.</p>,
      },
      {
        heading: "Project management",
        body: <p>Sequenced work across weekends, coordinated deliveries and kept documentation of each stage.</p>,
      },
      {
        heading: "Before & after",
        body: (
          <div className="grid sm:grid-cols-2 gap-4">
            {["Before", "After"].map((label) => (
              <div key={label} className="aspect-video rounded-md border border-dashed border-border grid place-items-center bg-background/40">
                <span className="mono text-xs text-muted-foreground">{label} · photo</span>
              </div>
            ))}
          </div>
        ),
      },
    ],
  },
  future: {
    title: "Future Electronics Builds",
    kind: "Embedded · Planned",
    year: "2026+",
    summary:
      "A reserved space for upcoming electronics and embedded systems work — PCB design, microcontroller firmware, sensor systems and AI hardware experiments.",
    stack: ["MCU", "PCB", "FPGA", "AI-HW", "C/C++"],
    sections: [
      {
        heading: "Planned work",
        body: (
          <ul className="grid sm:grid-cols-2 gap-2 text-sm">
            {[
              "STM32 / ESP32 firmware project",
              "Custom PCB in KiCad",
              "FPGA intro on a Tang Nano board",
              "Sensor + telemetry logging system",
              "Small AI accelerator study (edge inference)",
              "Robotic control experiment",
            ].map((s) => (
              <li key={s} className="flex gap-2"><span className="text-primary mono">▹</span>{s}</li>
            ))}
          </ul>
        ),
      },
      {
        heading: "Why",
        body: (
          <p>
            My interest in AI hardware and semiconductor engineering needs to grow beyond reading — building
            increasingly complex electronic systems, from breadboard to PCB to FPGA, is the plan for the
            next 18 months alongside A-Levels.
          </p>
        ),
      },
    ],
  },
};

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS[params.slug];
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.project;
    return {
      meta: [
        { title: `${p.title} — Mukundan Saravanan` },
        { name: "description", content: p.summary },
        { property: "og:title", content: `${p.title} — Mukundan Saravanan` },
        { property: "og:description", content: p.summary },
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <Section title="Project not found">
      <p className="text-muted-foreground">That project doesn't exist. <Link to="/projects" className="text-primary hover:underline">Back to projects →</Link></p>
    </Section>
  ),
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  return (
    <Section>
      <Link to="/projects" className="mono text-xs text-primary hover:underline">← All projects</Link>
      <p className="mt-4 mono text-xs uppercase tracking-widest text-primary">{project.kind} · {project.year}</p>
      <h1 className="mt-2 text-4xl md:text-5xl font-bold">{project.title}</h1>
      <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s: string) => <Chip key={s}>{s}</Chip>)}
      </div>
      <div className="mt-12 space-y-10">
        {project.sections.map((s: { heading: string; body: ReactNode }) => (
          <div key={s.heading}>
            <h2 className="text-xl font-semibold border-l-2 border-primary pl-3">{s.heading}</h2>
            <div className="mt-4 text-muted-foreground leading-relaxed">{s.body}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
