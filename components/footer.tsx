import { LINKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Jatin Sharma</p>
        <p className="font-mono text-xs">
          Next.js, served by Caddy from a single VPS.{" "}
          <a
            className="text-muted hover:text-fg"
            href={LINKS.github}
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {" · "}
          <a
            className="text-muted hover:text-fg"
            href={LINKS.linkedin}
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {" · "}
          <a
            className="text-muted hover:text-fg"
            href={LINKS.x}
            rel="noopener noreferrer"
          >
            X
          </a>
        </p>
      </div>
    </footer>
  );
}
