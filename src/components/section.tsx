import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-5 py-16 md:py-24 ${className}`}>
      {(eyebrow || title) && (
        <div className="mb-10 md:mb-14">
          {eyebrow && (
            <p className="mono text-xs uppercase tracking-[0.2em] text-primary flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold max-w-2xl">{title}</h2>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return <span className="chip">{children}</span>;
}
