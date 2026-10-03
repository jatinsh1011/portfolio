import Link from "next/link";
import { layers } from "@/lib/content";
import { LINKS, RESUME_HREF } from "@/lib/site";

const btn =
  "inline-flex items-center rounded border px-4 py-2.5 text-sm font-medium transition-colors";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-5 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-[1.15fr_1fr] lg:items-center">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
          SDE-2 · Newgen Software Technologies
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight text-fg sm:text-6xl md:text-7xl">
          Jatin Sharma
        </h1>
        <p className="mt-5 max-w-xl text-2xl font-medium leading-snug tracking-tight text-fg/90 md:text-3xl">
          I build products, systems and developer tools, and I want to know what runs underneath them.
        </p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Enterprise software by day, SaaS and tooling by night. Frontend, backend, infrastructure and
          AI, with a standing curiosity about the layers below: networks, operating systems and memory.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/#projects" className={`${btn} border-accent bg-accent text-black hover:bg-accent/90`}>
            View projects
          </Link>
          <a
            href={LINKS.github}
            rel="noopener noreferrer"
            className={`${btn} border-line-strong text-fg hover:border-fg`}
          >
            GitHub
          </a>
          {RESUME_HREF ? (
            <a href={RESUME_HREF} className={`${btn} border-line-strong text-fg hover:border-fg`}>
              Resume
            </a>
          ) : null}
          <Link href="/#contact" className={`${btn} border-line-strong text-fg hover:border-fg`}>
            Contact
          </Link>
        </div>
      </div>

      <aside aria-label="How I think about the stack" className="rounded-lg border border-line bg-surface/70">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <span className="font-mono text-xs text-faint">stack --top-to-bottom</span>
          <span className="font-mono text-xs text-faint">6 layers</span>
        </div>
        <ol>
          {layers.map((layer, i) => (
            <li
              key={layer.name}
              className="group relative border-b border-line px-4 py-3.5 transition-colors last:border-b-0 hover:bg-white/[0.03]"
            >
              <div className="flex items-baseline gap-3">
                <span className="w-5 font-mono text-xs text-faint">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-medium text-fg">{layer.name}</span>
                <span className="min-w-0 truncate font-mono text-xs text-muted">{layer.detail}</span>
              </div>
              <p className="mt-1 pl-8 text-sm text-faint transition-colors group-hover:text-muted">
                {layer.note}
              </p>
            </li>
          ))}
        </ol>
      </aside>
    </section>
  );
}
