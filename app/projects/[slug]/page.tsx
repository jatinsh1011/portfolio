import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import { ProjectArt, PROJECT_TONE } from "@/components/project-art";
import { getProject, projects } from "@/lib/projects";
import { SITE_NAME } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}/` },
    openGraph: {
      title: `${project.title} · ${SITE_NAME}`,
      description: project.summary,
      url: `/projects/${project.slug}/`,
    },
  };
}

const CHIP_TONES = ["chip-peach", "chip-sky", "chip-rose", "chip-night"];

function Row({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  const id = title.replace(/[^a-z]+/gi, "-").replace(/^-|-$/g, "");
  return (
    <section className="case-row" aria-labelledby={id}>
      <div className="case-label">
        <span className="chapter-num" aria-hidden="true">
          {n}
        </span>
        <h2 id={id}>{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article>
      <header className="wrap case-hero">
        <Link href="/#projects" className="back-link">
          ← all projects
        </Link>
        <p className="eyebrow">
          {project.index} · {project.kind}
        </p>
        <h1 className="title">{project.title}</h1>
        <p className="lede case-lede">{project.summary}</p>
        <div className="case-links">
          {project.links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              rel="noopener noreferrer"
              className={i === 0 ? "btn" : "btn btn-quiet"}
            >
              {l.label} <span className="arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </header>

      <div className="wrap">
        <div className={`card-art case-art ${PROJECT_TONE[project.slug] ?? ""}`} aria-hidden="true">
          <ProjectArt slug={project.slug} />
        </div>
      </div>

      <div className="wrap case-body">
        <Row n="01" title="the problem.">
          <p className="prose">{project.problem}</p>
        </Row>

        <Row n="02" title="what i built.">
          <ul className="built-list">
            {project.built.map((b) => (
              <li key={b}>
                <span className="icon-soft">
                  <Icon name="check" />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Row>

        <Row n="03" title="how it flows.">
          <div className="flow-panel">
            <ol className="flow" aria-label="Data flow">
              {project.flow.map((step, i) => (
                <li key={step.label}>
                  <div className="mini" style={{ "--tilt": `${i % 2 ? 1 : -1}deg` } as CSSProperties}>
                    <b>{step.label}</b>
                    {step.note ? <small>{step.note}</small> : null}
                  </div>
                  {i < project.flow.length - 1 ? (
                    <span className="flow-arrow" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </Row>

        <Row n="04" title="decisions that mattered.">
          <div className="decisions">
            {project.decisions.map((d) => (
              <div key={d.title} className="decision">
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </div>
            ))}
          </div>
        </Row>

        <Row n="05" title="built with.">
          <ul className="chips" aria-label="Technology" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {project.stack.map((t, i) => (
              <li key={t} className={`chip ${CHIP_TONES[i % CHIP_TONES.length]}`}>
                {t}
              </li>
            ))}
          </ul>
        </Row>

        <Row n="06" title="the result.">
          <div className="result-panel">
            <p>{project.result}</p>
          </div>
        </Row>
      </div>

      <nav aria-label="Next project" className="wrap case-next">
        <Link href={`/projects/${next.slug}/`} className="next-card">
          <span className="eyebrow">next project</span>
          <span className="card-title">
            {next.title} <span className="accent">→</span>
          </span>
          <p>{next.summary}</p>
        </Link>
      </nav>
    </article>
  );
}
