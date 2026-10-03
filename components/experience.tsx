import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { migrations, newgen } from "@/lib/content";

function Chip({ children }: { children: string }) {
  return (
    <li className="rounded border border-line px-2.5 py-1 text-sm text-muted">
      {children}
    </li>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Enterprise software"
      title="Keeping a large platform current while it keeps shipping."
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <p className="font-mono text-xs text-faint">{newgen.company}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-fg">
            {newgen.role} · {newgen.product}
          </h3>
          <p className="mt-4 leading-relaxed text-muted">{newgen.intro}</p>

          <h4 className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-faint">
            Product areas
          </h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {newgen.areas.map((a) => (
              <Chip key={a}>{a}</Chip>
            ))}
          </ul>

          <h4 className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-faint">
            Across
          </h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {newgen.scope.map((a) => (
              <Chip key={a}>{a}</Chip>
            ))}
          </ul>

          <p className="mt-8 text-sm leading-relaxed text-faint">
            {newgen.backend} {newgen.environment}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
            Major migrations
          </h4>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {migrations.map((m) => (
              <div
                key={m.area}
                className="rounded-lg border border-line bg-surface/60 p-4"
              >
                <p className="font-mono text-xs text-accent">{m.area}</p>
                <ol
                  className="mt-3 space-y-1.5"
                  aria-label={`${m.area} migration path`}
                >
                  {m.steps.map((s, i) => (
                    <li key={s} className="text-sm">
                      <span
                        className={
                          i === m.steps.length - 1 ? "text-fg" : "text-muted"
                        }
                      >
                        {s}
                      </span>
                      {i < m.steps.length - 1 ? (
                        <span aria-hidden className="block pl-1 text-faint">
                          ↓
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>
                {m.note ? (
                  <p className="mt-3 font-mono text-[11px] text-faint">
                    {m.note}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-faint">
            Alongside these: microfrontend compatibility, theme architecture,
            and CSS and RTL work that had to hold across the whole product.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
