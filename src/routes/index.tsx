import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="space-y-16">
      {/* 1. Core Story Headline */}
      <Section
        eyebrow="Mukundan Saravanan"
        title="Building the bridge between software, electronics and intelligent hardware."
      >
        <p className="text-xl text-muted-foreground max-w-2xl -mt-4 leading-relaxed">
          Exploring how code becomes circuits, circuits become systems, and systems become intelligent machines.
        </p>
      </Section>

      {/* 2. Photo / Workbench Container */}
      <div className="rounded-xl overflow-hidden border border-border card-surface">
        <img
          src="/bench.jpg"
          alt="Engineering bench and hardware setup"
          className="w-full h-64 sm:h-96 object-cover"
          onError={(e) => {
            // Hides cleanly until you add bench.jpg to your public/ folder
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      {/* 5. Now Building (Active Workbench Project) */}
      <Section eyebrow="Active Build" title="What's On My Workbench">
        <div className="card-surface p-6 rounded-xl border border-border space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Motor Health Monitoring System</h3>
            <span className="px-2.5 py-0.5 text-xs font-mono rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
              In Progress
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Real-time predictive maintenance node analyzing vibration spectra and thermal signatures to detect early bearing wear.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono pt-2 border-t border-border/50">
            <div>
              <span className="text-muted-foreground">Stack:</span> ESP32, MPU6050 Accelerometer, DS18B20
            </div>
            <div>
              <span className="text-muted-foreground">Focus:</span> SPI Data Logging & On-Chip FFT Signal Processing
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Technical Focus */}
      <Section eyebrow="Specialization" title="Current Technical Interests">
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "Embedded Systems",
              desc: "Bare-metal C/C++, Microcontrollers (ESP32/STM32), RTOS & Hardware Peripherals.",
            },
            {
              title: "AI Accelerators",
              desc: "Custom MAC hardware units, memory bandwidth solutions, Edge AI processing.",
            },
            {
              title: "Semiconductor Engineering",
              desc: "Silicon fabrication, CMOS digital logic design, microarchitecture.",
            },
            {
              title: "Wireless Communication",
              desc: "Industrial sensor telemetry, RF communication, BLE & LoRa networks.",
            },
          ].map((item) => (
            <div key={item.title} className="card-surface p-5 rounded-lg border border-border">
              <h4 className="font-semibold text-base mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}