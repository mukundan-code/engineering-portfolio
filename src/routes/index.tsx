import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Chip } from "@/components/section";

export const Route = createFileRoute("/")({
  component: Home,
});

const universities = [
  { name: "Imperial College London", course: "Electrical & Electronic Engineering", tag: "IC" },
  { name: "University of Cambridge", course: "Engineering", tag: "CAM" },
  { name: "University of Oxford", course: "Engineering Science", tag: "OX" },
  { name: "University College London", course: "Electronic & Electrical Engineering", tag: "UCL" },
  { name: "University of Warwick", course: "Electrical & Electronic Engineering", tag: "WAR" },
];

const timeline = [
  { year: "2024", event: "GCSEs completed", tone: "done" },
  { year: "2024", event: "Electrical work experience — KCB Electrical Services", tone: "done" },
  { year: "2024", event: "Workshop conversion project", tone: "done" },
  { year: "2025", event: "Started A-Levels — Maths, Further Maths, Physics, CS", tone: "done" },
  { year: "2026", event: "Alpha Electrics Ltd placement — motor engineering", tone: "current" },
  { year: "2026", event: "Space Traders API client build", tone: "current" },
  { year: "Future", event: "Electronics & Communication Engineering degree", tone: "future" },
  { year: "Future", event: "AI hardware / semiconductor engineering career", tone: "future" },
];

const skills = {
  Programming: ["Python", "REST API Integration", "JSON Handling", "GUI Development (Tkinter)"],
  Engineering: ["Electrical Fault Finding", "Motor Diagnostics", "Technical Problem Solving", "Engineering Project Planning"],
  Software: ["Fusion 360", "Microsoft Office", "GitHub", "Git version control"],
};

const projectPreviews = [
  {
    id: "space-traders",
    to: "/projects/space-traders",
    title: "Space Traders API Client",
    kind: "Software · APIs",
    blurb: "Python + Tkinter client consuming the Space Traders REST API — auth, fleet control, contract handling and JSON persistence.",
    stack: ["Python", "Tkinter", "REST", "JSON"],
  },
  {
    id: "workshop",
    to: "/projects/workshop",
    title: "Workshop Conversion Project",
    kind: "Hands-on · Electrical",
    blurb: "End-to-end conversion of an outbuilding into a working workshop — planning, thermal insulation, first-fix electrics and consumer unit installation.",
    stack: ["Planning", "Insulation", "Electrical", "Procurement"],
  },
  {
    id: "future",
    to: "/projects/future",
    title: "Future Electronics Builds",
    kind: "In development",
    blurb: "Reserved space for upcoming embedded systems, PCB and AI-hardware experiments through the rest of A-Levels.",
    stack: ["MCU", "PCB", "FPGA", "AI-HW"],
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-x-0 -top-40 h-96 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--electric)_25%,transparent),transparent_70%)]" />
        <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-24 md:pt-28 md:pb-32">
          <p className="mono text-xs uppercase tracking-[0.25em] text-primary flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary pulse-dot" />
            Portfolio · 2026 · UK
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] max-w-4xl">
            From <span className="text-gradient">Software</span> to <span className="text-gradient">Silicon</span>
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-muted-foreground max-w-2xl">
            Aspiring Electronics & Communication Engineer
          </p>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            A-Level student studying Mathematics, Further Mathematics, Physics and Computer Science
            with interests in AI hardware, semiconductor systems, embedded computing and intelligent
            engineering systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              View Projects <span aria-hidden>→</span>
            </Link>
            <a
              href="/cv.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold hover:border-primary/60 transition"
            >
              Download CV
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold hover:border-primary/60 transition"
            >
              GitHub
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {[
              { k: "A-Levels", v: "Maths · FM · Physics · CS" },
              { k: "Focus", v: "AI Hardware · Semis" },
              { k: "Placement", v: "Alpha Electrics" },
              { k: "Target", v: "Imperial · Cam · Ox" },
            ].map((s) => (
              <div key={s.k} className="card-surface p-4">
                <p className="mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.k}</p>
                <p className="mt-1 text-sm font-medium">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="01 · About" title="Building intuition for how electronics really work.">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm an A-Level student at <span className="text-foreground">Beauchamp City Sixth Form</span> studying
              Mathematics, Further Mathematics, Physics and Computer Science. My interest sits at the
              intersection of physics and computation — how transistors become logic, how logic becomes
              instruction sets, and how those instruction sets become the AI accelerators shaping the next decade.
            </p>
            <p>
              Outside of academics I spend time in workshops and with electrical engineers, learning
              motor diagnostics, fault-finding and installation work. I believe engineers should be
              able to design a system on paper <em>and</em> wire it up on a bench.
            </p>
            <p>
              My longer-term goal is to work in <span className="text-foreground">AI hardware or
              semiconductor engineering</span> after studying Electronics & Communication Engineering
              at a leading UK university.
            </p>
          </div>
          <ul className="space-y-2 text-sm">
            {[
              "A-Level Student · Beauchamp City Sixth Form",
              "Maths · Further Maths · Physics · Computer Science",
              "Electronics & Communication Engineering",
              "AI Hardware & Semiconductor Engineering",
              "Robotics & Embedded Systems",
              "Practical engineering & problem solving",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 card-surface p-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* PROJECTS PREVIEW */}
      <Section id="projects" eyebrow="02 · Projects" title="Selected engineering work.">
        <div className="grid md:grid-cols-3 gap-5">
          {projectPreviews.map((p) => (
            <Link key={p.id} to={p.to} className="card-surface card-surface-hover p-6 group flex flex-col">
              <p className="mono text-[10px] uppercase tracking-widest text-primary">{p.kind}</p>
              <h3 className="mt-2 text-lg font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => <Chip key={s}>{s}</Chip>)}
              </div>
              <p className="mt-5 mono text-xs text-primary opacity-70 group-hover:opacity-100">
                Read case study →
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/projects" className="mono text-sm text-primary hover:underline">All projects →</Link>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="03 · Skills" title="Toolbox — hardware, software and workshop.">
        <div className="grid md:grid-cols-3 gap-5">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="card-surface p-6">
              <h3 className="text-base font-semibold">{group}</h3>
              <ul className="mt-4 space-y-2">
                {items.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="mono text-primary text-xs">▹</span>{s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" eyebrow="04 · Education" title="Beauchamp City Sixth Form">
        <div className="card-surface p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">A-Levels · 2025 – 2027</h3>
              <p className="mt-1 text-sm text-muted-foreground">Beauchamp City Sixth Form, UK</p>
            </div>
            <span className="chip">In progress</span>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {["Mathematics", "Further Mathematics", "Physics", "Computer Science"].map((s) => (
              <div key={s} className="rounded-md border border-border bg-background/40 p-4">
                <p className="mono text-[10px] uppercase tracking-widest text-primary">A-Level</p>
                <p className="mt-1 font-medium">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* UNIVERSITIES */}
      <Section id="universities" eyebrow="05 · University Goals" title="Target destinations.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {universities.map((u) => (
            <div key={u.name} className="card-surface card-surface-hover p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-md border border-primary/40 bg-primary/10 mono text-xs font-semibold text-primary shrink-0">
                  {u.tag}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold truncate">{u.name}</p>
                  <p className="mono text-xs text-muted-foreground truncate">{u.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* TIMELINE */}
      <Section id="timeline" eyebrow="06 · Timeline" title="Engineering journey.">
        <ol className="relative border-l border-border/70 ml-3 space-y-6">
          {timeline.map((t, i) => (
            <li key={i} className="pl-6 relative">
              <span
                className={`absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 ${
                  t.tone === "current"
                    ? "bg-primary border-primary pulse-dot"
                    : t.tone === "done"
                    ? "bg-primary/70 border-primary"
                    : "bg-background border-border"
                }`}
              />
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="mono text-xs text-primary tracking-widest">{t.year}</span>
                <p className="text-sm md:text-base">{t.event}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* CONTACT CTA */}
      <Section id="contact-cta" className="pt-4">
        <div className="relative overflow-hidden card-surface p-8 md:p-12">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="relative flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="mono text-xs uppercase tracking-widest text-primary">Let's talk engineering</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
                Open to collaborations, work experience and interesting problems.
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
