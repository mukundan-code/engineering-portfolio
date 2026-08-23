import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";

function ProjectsComponent() {
  const projectsList = [
    {
      title: "Motor Health & Predictive Maintenance Node",
      badge: "Embedded / Signal Processing",
      status: "Active Build",
      description:
        "Designing and prototyping a real-time monitoring unit for electric motors. The system samples vibration and thermal signatures, calculating FFT frequency spectra directly on-chip to detect bearing micro-wear prior to physical failure.",
      metrics: [
        "Hardware: ESP32 MCU, MPU6050 6-Axis IMU, DS18B20 Digital Sensor",
        "Signal Processing: 1 kHz accelerometer sampling rate over SPI with Fast Fourier Transform (FFT)",
        "Telemetry: Wi-Fi web interface delivering low-latency health diagnostics",
      ],
      githubLink: "https://github.com/mukundan-code",
    },
    {
      title: "12m² Engineering Workshop & Power Distribution",
      badge: "Electrical Engineering",
      status: "Completed",
      description:
        "Converted an outbuilding into a high-safety electronics work space. Designed and executed thermal insulation, main supply integration, sub-board wiring, and dedicated ESD safety zones for PCB assembly.",
      metrics: [
        "Power Infrastructure: Dedicated 32A consumer unit with RCD protection",
        "Layout: Ring main circuit distribution & dual-zone overhead LED task lighting",
        "Environmental: Thermal moisture barrier insulation & ESD-grounded work surfaces",
      ],
      githubLink: "https://github.com/mukundan-code",
    },
    {
      title: "Alpha Electrics Practical Diagnostics",
      badge: "Commercial Electrical Systems",
      status: "Work Experience",
      description:
        "Hands-on industry experience diagnosing electrical faults, performing consumer unit upgrades, and inspecting cable distribution networks under safe working practices.",
      metrics: [
        "Testing: Circuit continuity, insulation resistance testing, & polarity checks",
        "Standards: BS 7671 wiring regulation compliance & safety verification",
      ],
      githubLink: "https://github.com/mukundan-code",
    },
  ];

  return (
    <div className="space-y-16">
      <Section
        eyebrow="Portfolio"
        title="Proof of engineering: Hardware, systems, and low-level builds."
      >
        <p className="text-muted-foreground leading-relaxed max-w-2xl -mt-4">
          A collection of ongoing and completed engineering projects focused on embedded software, electrical infrastructure, and sensor measurement nodes.
        </p>
      </Section>

      <div className="space-y-8">
        {projectsList.map((project) => (
          <div
            key={project.title}
            className="card-surface p-6 sm:p-8 rounded-xl border border-border space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <h3 className="font-semibold text-lg sm:text-xl">{project.title}</h3>
                <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20">
                  {project.badge}
                </span>
              </div>
              <span className="text-xs font-mono text-muted-foreground">{project.status}</span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            <div className="pt-2 border-t border-border/50">
              <p className="text-xs font-mono uppercase tracking-wider text-primary mb-2">
                Technical Highlights & Metrics
              </p>
              <ul className="space-y-1 text-xs font-mono text-foreground/90 list-disc list-inside">
                {project.metrics.map((metric, i) => (
                  <li key={i}>{metric}</li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-primary hover:underline inline-flex items-center gap-1"
              >
                View Repository / Code →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const Route = createFileRoute("/projects")({
  component: ProjectsComponent,
});