import { createFileRoute } from "@tanstack/react-router";
import { Section, Chip } from "@/components/section";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Engineering Research & Learning — Mukundan Saravanan" },
      { name: "description", content: "Technical articles on CPUs, semiconductors, AI accelerators, FPGAs, ARM vs x86, wireless and embedded systems." },
      { property: "og:title", content: "Engineering Research & Learning" },
      { property: "og:description", content: "Articles on hardware, computer architecture, semiconductors and embedded systems." },
    ],
  }),
  component: Blog,
});

const articles = [
  { title: "How CPUs Execute Instructions", topic: "Architecture", est: "8 min", blurb: "Fetch, decode, execute — pipelines, hazards and where speculation comes in." },
  { title: "Introduction to Semiconductor Manufacturing", topic: "Semiconductors", est: "10 min", blurb: "From sand to wafer — photolithography, doping and the fabs behind modern chips." },
  { title: "Understanding AI Accelerators", topic: "AI Hardware", est: "9 min", blurb: "Why GPUs, TPUs and NPUs exist, and how matrix engines outperform generic CPUs." },
  { title: "ARM vs x86 Architecture", topic: "Architecture", est: "7 min", blurb: "RISC vs CISC, instruction density, power efficiency and why ARM is everywhere." },
  { title: "What is an FPGA?", topic: "Digital Logic", est: "6 min", blurb: "Configurable logic, LUTs, DSP blocks and where FPGAs beat both CPUs and ASICs." },
  { title: "How Wireless Communication Systems Work", topic: "Communications", est: "9 min", blurb: "Modulation, antennas, propagation and the layers of a modern wireless link." },
  { title: "Fundamentals of Embedded Systems", topic: "Embedded", est: "7 min", blurb: "MCUs, peripherals, interrupts, real-time constraints and firmware structure." },
];

function Blog() {
  return (
    <Section eyebrow="Research & Learning" title="Notes on hardware, architecture and engineering.">
      <p className="max-w-2xl text-muted-foreground -mt-4 mb-10">
        Writing is how I lock in what I learn. Articles below are planned and being drafted alongside
        my A-Levels — expect deep dives into computer architecture, semiconductors, communications and
        embedded systems.
      </p>
      <div className="grid md:grid-cols-2 gap-5">
        {articles.map((a) => (
          <article key={a.title} className="card-surface card-surface-hover p-6 flex flex-col">
            <div className="flex items-center justify-between">
              <Chip>{a.topic}</Chip>
              <span className="mono text-xs text-muted-foreground">{a.est}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold">{a.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{a.blurb}</p>
            <p className="mt-5 mono text-xs text-primary/70">Draft in progress →</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
