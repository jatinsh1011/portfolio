import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/icons";
import { migrations, newgen } from "@/lib/content";

const MIGRATION_LOOK: Record<string, { icon: IconName; tint: string }> = {
  React: { icon: "layers", tint: "var(--c-blue)" },
  MUI: { icon: "palette", tint: "var(--c-purple)" },
  Bundler: { icon: "package", tint: "var(--c-orange)" },
  Java: { icon: "coffee", tint: "var(--c-pink)" },
};

export function Experience() {
  return (
    <section id="experience" className="band" aria-labelledby="experience-title">
      <div className="wrap">
        <div className="band-head">
          <p className="eyebrow">{newgen.company}</p>
          <h2 id="experience-title" className="title">
            keeping a big platform current
            <br />
            <span className="accent-pink">while it keeps shipping.</span>
          </h2>
        </div>

        <div className="plan role">
          <div className="plan-hero">
            <p className="numeral">{newgen.role}.</p>
            <p>
              On {newgen.product}, an enterprise platform: frontend, backend and platform work on
              major releases and patches.
            </p>
          </div>
          <div className="plan-list">
            <p className="role-intro">{newgen.intro}</p>
            <div>
              <h3 className="mini-label">product areas</h3>
              <ul className="tag-row">
                {newgen.areas.map((a) => (
                  <li key={a} className="tag">
                    {a}
                  </li>
                ))}
              </ul>
              <h3 className="mini-label">across</h3>
              <ul className="tag-row">
                {newgen.scope.map((a) => (
                  <li key={a} className="tag">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <h3 className="tile-title migrations-title">major migrations.</h3>
        <div className="migrations">
          {migrations.map((m) => {
            const look = MIGRATION_LOOK[m.area] ?? { icon: "layers", tint: "var(--c-blue)" };
            return (
              <div key={m.area} className="option-card migration">
                <span className="icon-tile" style={{ "--tint": look.tint } as CSSProperties}>
                  <Icon name={look.icon} />
                </span>
                <h4>{m.area}</h4>
                <ol className="steps-row" aria-label={`${m.area} migration path`}>
                  {m.steps.map((s, i) => (
                    <li key={s}>
                      <span className={i === m.steps.length - 1 ? "step-pill is-now" : "step-pill"}>{s}</span>
                      {i < m.steps.length - 1 ? (
                        <span className="step-arrow" aria-hidden="true">
                          {" "}→
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>
                {m.note ? <span className="pill-soon">{m.note}</span> : null}
              </div>
            );
          })}
        </div>

        <div className="experience-notes">
          <p className="note">
            Alongside these: microfrontend compatibility, theme architecture, and CSS and RTL work
            that had to hold across the whole product.
          </p>
          <p className="note">
            {newgen.backend} {newgen.environment}
          </p>
        </div>
      </div>
    </section>
  );
}
