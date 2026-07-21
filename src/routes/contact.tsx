import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mukundan Saravanan" },
      { name: "description", content: "Get in touch with Mukundan Saravanan — email, GitHub and LinkedIn." },
      { property: "og:title", content: "Contact — Mukundan Saravanan" },
      { property: "og:description", content: "Reach out for engineering collaborations, work experience or interesting problems." },
    ],
  }),
  component: Contact,
});

const links = [
  { label: "Email", value: "mukundan.saravanan@example.com", href: "mailto:mukundan.saravanan@example.com" },
  { label: "GitHub", value: "github.com/mukundan-saravanan", href: "https://github.com/" },
  { label: "LinkedIn", value: "linkedin.com/in/mukundan-saravanan", href: "https://linkedin.com/" },
  { label: "CV", value: "Download PDF", href: "/cv.pdf" },
];

function Contact() {
  return (
    <Section eyebrow="Contact" title="Let's talk engineering.">
      <p className="max-w-2xl text-muted-foreground -mt-4 mb-10">
        Open to work experience, collaborations, university outreach and interesting technical problems.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="card-surface card-surface-hover p-6 group flex items-center justify-between gap-4"
          >
            <div className="min-w-0">
              <p className="mono text-xs uppercase tracking-widest text-primary">{l.label}</p>
              <p className="mt-1 font-medium truncate">{l.value}</p>
            </div>
            <span className="text-primary opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition">→</span>
          </a>
        ))}
      </div>
    </Section>
  );
}
