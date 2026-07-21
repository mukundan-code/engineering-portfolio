import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="mono text-sm text-primary">ERR_404 · Route not resolved</p>
        <h1 className="mt-3 text-6xl font-bold text-gradient">404</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The circuit path you're looking for isn't wired up.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Runtime fault detected</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something short-circuited. Try reloading or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Retry
          </button>
          <a href="/" className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-accent">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mukundan Saravanan | Engineering Portfolio" },
      {
        name: "description",
        content:
          "Engineering portfolio of Mukundan Saravanan — A-Level student in Mathematics, Further Mathematics, Physics and Computer Science pursuing Electronics & Communication Engineering, AI hardware and semiconductor systems.",
      },
      { name: "author", content: "Mukundan Saravanan" },
      { property: "og:title", content: "Mukundan Saravanan | Engineering Portfolio" },
      {
        property: "og:description",
        content:
          "Projects, research and engineering work by an A-Level student aiming for Electronics & Communication Engineering at Imperial, Cambridge, Oxford, UCL and Warwick.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const NAV = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/blog", label: "Research" },
  { to: "/contact", label: "Contact" },
] as const;

function Nav() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => { setOpen(false); }, [path]);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur-md bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="grid h-8 w-8 place-items-center rounded-md border border-primary/40 bg-primary/10 mono text-primary text-sm font-semibold shrink-0 group-hover:bg-primary/20 transition-colors">
            MS
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-semibold">Mukundan Saravanan</span>
            <span className="mono text-[10px] uppercase tracking-widest text-muted-foreground">Engineering Portfolio</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary bg-primary/10" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground hover:bg-accent/50" }}
              className="rounded-md px-3 py-1.5 text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden rounded-md border border-border p-2 text-muted-foreground"
          aria-label="Menu"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M3 6h18M3 12h18M3 18h18"/>}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border bg-background/95 px-5 py-3 flex flex-col gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary bg-primary/10" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-md px-3 py-2 text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <p className="mono text-xs uppercase tracking-widest text-primary">Engineer · Student · Builder</p>
          <h3 className="mt-2 text-lg font-semibold">Mukundan Saravanan</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            Aspiring Electronics & Communication Engineer building real hardware, software and systems from the ground up.
          </p>
        </div>
        <div>
          <p className="mono text-xs uppercase tracking-widest text-muted-foreground">Sitemap</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-muted-foreground hover:text-primary">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mono text-xs uppercase tracking-widest text-muted-foreground">Connect</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li><a href="mailto:ssmukundan3@gmail.com" className="text-muted-foreground hover:text-primary">Email</a></li>
            <li><a href="https://github.com/mukundan-code" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/mukundan-saravanan-aa5320323/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-4 flex flex-wrap justify-between items-center gap-2 mono text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Mukundan Saravanan</span>
          <span>Built with intent · v1.0</span>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1"><Outlet /></main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
