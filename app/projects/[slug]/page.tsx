import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-line py-10 md:grid-cols-[11rem_1fr] md:gap-10">
      <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{label}</h2>
      <div>{children}</div>
    </section>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="mx-auto max-w-4xl px-5 pb-24 pt-14 md:pt-20">
      <Link href="/#projects" className="font-mono text-sm text-muted transition-colors hover:text-fg">
        ← All projects
      </Link>

      <header className="mt-8">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
          {project.index} · {project.kind}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-fg md:text-6xl">{project.title}</h1>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-muted">{project.summary}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          {project.links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              rel="noopener noreferrer"
              className={`rounded border px-4 py-2 text-sm font-medium transition-colors ${
                i === 0
                  ? "border-accent bg-accent text-black hover:bg-accent/90"
                  : "border-line-strong text-fg hover:border-fg"
              }`}
            >
              {l.label} <span aria-hidden>↗</span>
            </a>
          ))}
        </div>
      </header>

      <div className="mt-14">
        <Block label="Problem">
          <p className="text-lg leading-relaxed text-fg/90">{project.problem}</p>
        </Block>

        <Block label="What I built">
          <ul className="space-y-3 text-muted">
            {project.built.map((b) => (
              <li key={b} className="flex gap-3 leading-relaxed">
                <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block label="Architecture">
          <ol className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-stretch" aria-label="Data flow">
            {project.flow.map((step, i) => (
              <li key={step.label} className="flex items-center gap-2">
                <div className="rounded-lg border border-line bg-surface/60 px-4 py-3">
                  <p className="text-sm font-medium text-fg">{step.label}</p>
                  {step.note ? <p className="font-mono text-xs text-faint">{step.note}</p> : null}
                </div>
                {i < project.flow.length - 1 ? (
                  <span aria-hidden className="font-mono text-faint">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </Block>

        <Block label="Engineering decisions">
          <dl className="space-y-6">
            {project.decisions.map((d) => (
              <div key={d.title}>
                <dt className="font-medium text-fg">{d.title}</dt>
                <dd className="mt-1.5 leading-relaxed text-muted">{d.body}</dd>
              </div>
            ))}
          </dl>
        </Block>

        <Block label="Technology">
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <li key={t} className="rounded border border-line px-2.5 py-1 font-mono text-xs text-muted">
                {t}
              </li>
            ))}
          </ul>
        </Block>

        <Block label="Result">
          <p className="text-lg leading-relaxed text-fg/90">{project.result}</p>
        </Block>
      </div>

      <nav aria-label="Next project" className="mt-6 border-t border-line pt-8">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">Next project</p>
        <Link
          href={`/projects/${next.slug}/`}
          className="mt-2 inline-block text-2xl font-semibold tracking-tight text-fg transition-colors hover:text-accent"
        >
          {next.title} <span aria-hidden>→</span>
        </Link>
      </nav>
    </article>
  );
}
