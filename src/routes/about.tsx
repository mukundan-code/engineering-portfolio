import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mukundan Saravanan" },
      { name: "description", content: "Engineering background, workshop build, and technical timeline." },
    ],
  }),
  component: About,
});

const timelineEvents = [
  {
    year: "2024",
    title: "Electrical Work Experience",
    desc: "Gained practical experience with commercial electrical distribution, cable management, and safety compliance protocols.",
  },
  {
    year: "2025",
    title: "12m² Workshop Conversion",
    desc: "Converted a 12m² outbuilding into a fully insulated electronics workshop featuring a dedicated 32A consumer unit, ring main, ESD-safe bench, and overhead lighting.",
  },
  {
    year: "2026",
    title: "Alpha Electrics",
    desc: "Applied real-world electrical principles to fault diagnosis, system maintenance, and consumer unit setups.",
  },
  {
    year: "2026",
    title: "Embedded Systems & Monitoring Builds",
    desc: "Developing predictive motor maintenance nodes, FFT acceleration on microcontrollers, and wireless sensor telemetry.",
  },
  {
    year: "Future",
    title: "ECE & AI Hardware Focus",
    desc: "Aiming to specialize in computer architecture, FPGA hardware acceleration, and semiconductor digital logic design.",
  },
];

function About() {
  return (
    <div className="space-y-16">
      {/* Intro */}
      <Section eyebrow="About Me" title="From circuits on paper to working hardware.">
        <p className="text-muted-foreground leading-relaxed max-w-2xl -mt-4">
          I am an Electronics & Communication Engineering enthusiast focused on embedded software, power distribution, and hardware acceleration. My work bridges physical electrical engineering with low-level software execution.
        </p>
      </Section>

      {/* Engineering Journey Timeline */}
      <Section eyebrow="Timeline" title="Engineering Journey">
        <div className="space-y-6 border-l-2 border-border pl-6 relative ml-2">
          {timelineEvents.map((item) => (
            <div key={item.title} className="relative group">
              <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary border-4 border-background" />
              <p className="mono text-xs font-semibold text-primary">{item.year}</p>
              <h3 className="text-base font-semibold mt-0.5">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 max-w-xl leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Specificity Focus: Workshop Conversion */}
      <Section eyebrow="Facility" title="The 12m² Electronics Workshop">
        <div className="card-surface p-6 rounded-xl border border-border space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            To support high-voltage testing, PCB design, and mechanical builds, I converted a 12m² outbuilding into an insulated engineering space. The installation includes:
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 text-xs font-mono text-foreground/90 list-disc list-inside pt-2">
            <li>Dedicated 32A Consumer Unit</li>
            <li>Insulated Walls & Thermal Layering</li>
            <li>Ring Main Electrical Distribution</li>
            <li>ESD-Safe Workbench & Task Lighting</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}