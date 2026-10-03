import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { lab, stack } from "@/lib/content";

export function Lab() {
  return (
    <Section
      id="lab"
      eyebrow="Engineering lab"
      title="Things I'm exploring."
      lead="I learn by building. These are areas I'm working through, not claims of expertise."
    >
      <ul className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {lab.map((item, i) => (
          <li
            key={item.title}
            className="bg-bg p-5 transition-colors hover:bg-surface"
          >
            <Reveal delay={(i % 4) * 60}>
              <p className="font-mono text-xs text-faint">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-medium text-fg">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="Toolbox"
      title="What I work with, grouped by what it's for."
    >
      <dl className="divide-y divide-line border-y border-line">
        {stack.map((g) => (
          <div
            key={g.group}
            className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-[10rem_1fr]"
          >
            <dt className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
              {g.group}
            </dt>
            <dd className="flex flex-wrap gap-x-2 text-fg/90">
              {g.items.map((item, i) => (
                <span key={item}>
                  {item}
                  {i < g.items.length - 1 ? (
                    <span aria-hidden className="pl-2 text-faint">
                      ·
                    </span>
                  ) : null}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
