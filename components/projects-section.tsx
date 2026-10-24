import Link from "next/link";
import { ProjectArt, PROJECT_TONE } from "@/components/project-art";
import { projects, type Project } from "@/lib/projects";

function Card({ project, large }: { project: Project; large: boolean }) {
  const external = project.links.slice(0, 2);
  return (
    <article className="card project-card">
      <div className={`card-art ${PROJECT_TONE[project.slug] ?? ""}`} aria-hidden="true">
        <ProjectArt slug={project.slug} />
      </div>
      <div className="card-body">
        <p className="project-kind">
          {project.index} · {project.kind}
        </p>
        <h3 className="card-title">
          <Link href={`/projects/${project.slug}/`} className="card-link">
            {project.title}
          </Link>
        </h3>
        <p>{project.summary}</p>
        <ul className="tag-row" aria-label="Technology">
          {project.stack.slice(0, large ? 7 : 5).map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
        <div className="project-links">
          <Link className="link" href={`/projects/${project.slug}/`}>
            read the breakdown →
          </Link>
          {external.map((l) => (
            <a key={l.href} className="link-muted" href={l.href} rel="noopener noreferrer">
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="projects-title" className="title">
            things i built,
            <br />
            <span className="accent">shipped and run.</span>
          </h2>
          <p className="lede">
            Each one started from a specific problem. The pages behind them cover what I built, the
            decisions that mattered, and the architecture.
          </p>
        </div>
        <div className="project-grid is-featured">
          {featured.map((p) => (
            <Card key={p.slug} project={p} large />
          ))}
        </div>
        {rest.length > 0 && (
          <div className="project-grid is-rest">
            {rest.map((p) => (
              <Card key={p.slug} project={p} large={false} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
