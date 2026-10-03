import Link from "next/link";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { projects, type Project } from "@/lib/projects";

function Card({ project, large }: { project: Project; large: boolean }) {
  const external = project.links.slice(0, 2);
  return (
    <article
      className={`group relative flex h-full flex-col rounded-lg border border-line bg-surface/60 p-6 transition-colors hover:border-line-strong hover:bg-surface ${
        large ? "md:p-8" : ""
      }`}
    >
      <div className="flex items-center justify-between font-mono text-xs text-faint">
        <span>{project.index}</span>
        <span>{project.kind}</span>
      </div>

      <h3
        className={`mt-5 font-semibold tracking-tight text-fg ${large ? "text-3xl" : "text-xl"}`}
      >
        <Link
          href={`/projects/${project.slug}/`}
          className="after:absolute after:inset-0 after:content-[''] focus-visible:after:rounded-lg"
        >
          {project.title}
        </Link>
      </h3>

      <p className="mt-3 leading-relaxed text-muted">{project.summary}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technology">
        {project.stack.slice(0, large ? 8 : 5).map((t) => (
          <li
            key={t}
            className="rounded border border-line px-2 py-0.5 font-mono text-xs text-muted"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="relative z-10 mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-7 text-sm">
        <Link
          href={`/projects/${project.slug}/`}
          className="font-medium text-accent transition-colors hover:text-fg"
        >
          Read the breakdown <span aria-hidden>→</span>
        </Link>
        {external.map((l) => (
          <a
            key={l.href}
            href={l.href}
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-fg"
          >
            {l.label} <span aria-hidden>↗</span>
          </a>
        ))}
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Things I built, shipped and run."
      lead="Each one started from a specific problem. The pages behind them cover what I built, the decisions that mattered, and the architecture."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 80}>
            <Card project={p} large />
          </Reveal>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        {rest.map((p, i) => (
          <Reveal key={p.slug} delay={i * 80}>
            <Card project={p} large={false} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
