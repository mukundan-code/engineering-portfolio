import { useState } from "react";
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

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "ssmukundan3@gmail.com";

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailClick = () => {
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  };

  return (
    <Section eyebrow="Contact" title="Let's talk engineering.">
      <p className="max-w-2xl text-muted-foreground -mt-4 mb-10">
        Open to work experience, collaborations, university outreach and interesting technical problems.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {/* Dedicated Interactive Email Card */}
        <div 
          onClick={handleEmailClick}
          className="card-surface card-surface-hover p-6 group flex items-center justify-between gap-4 cursor-pointer"
        >
          <div className="min-w-0">
            <p className="mono text-xs uppercase tracking-widest text-primary">Email</p>
            <p className="mt-1 font-medium truncate">{email}</p>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="px-3 py-1.5 text-xs font-mono rounded bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          >
            {copied ? "Copied! ✓" : "Copy"}
          </button>
        </div>

        {/* Other Links */}
        <a
          href="https://github.com/mukundan-code"
          target="_blank"
          rel="noreferrer"
          className="card-surface card-surface-hover p-6 group flex items-center justify-between gap-4"
        >
          <div className="min-w-0">
            <p className="mono text-xs uppercase tracking-widest text-primary">GitHub</p>
            <p className="mt-1 font-medium truncate">mukundan-code</p>
          </div>
          <span className="text-primary opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition">→</span>
        </a>

        <a
          href="https://www.linkedin.com/in/mukundan-saravanan-aa5320323/"
          target="_blank"
          rel="noreferrer"
          className="card-surface card-surface-hover p-6 group flex items-center justify-between gap-4"
        >
          <div className="min-w-0">
            <p className="mono text-xs uppercase tracking-widest text-primary">LinkedIn</p>
            <p className="mt-1 font-medium truncate">Mukundan Saravanan</p>
          </div>
          <span className="text-primary opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition">→</span>
        </a>

        <a
          href="/cv.pdf"
          target="_blank"
          rel="noreferrer"
          className="card-surface card-surface-hover p-6 group flex items-center justify-between gap-4"
        >
          <div className="min-w-0">
            <p className="mono text-xs uppercase tracking-widest text-primary">CV</p>
            <p className="mt-1 font-medium truncate">Download PDF</p>
          </div>
          <span className="text-primary opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition">→</span>
        </a>
      </div>
    </Section>
  );
}