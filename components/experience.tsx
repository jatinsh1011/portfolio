import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/icons";
import { newgen } from "@/lib/content";

// Look of each capability card, in the order of `newgen.capabilities`.
const CAPABILITY_LOOK: { icon: IconName; tint: string }[] = [
  { icon: "layers", tint: "var(--c-blue)" },
  { icon: "cloud", tint: "var(--c-teal)" },
  { icon: "server", tint: "var(--c-orange)" },
  { icon: "database", tint: "var(--c-green)" },
];

export function Experience() {
  return (
    <section id="experience" className="band" aria-labelledby="experience-title">
      <div className="wrap">
        <div className="band-head">
          <p className="eyebrow">
            {newgen.company} · {newgen.role}
          </p>
          <h2 id="experience-title" className="title">
            building {newgen.product}.
            <br />
            <span className="accent-pink">banks build on it.</span>
          </h2>
        </div>

        <div className="plan role">
          <div className="plan-hero">
            <p className="numeral">{newgen.role}.</p>
            <p>{newgen.summary}</p>
          </div>
          <div className="plan-list">
            <p className="role-intro">{newgen.intro}</p>
            <p className="role-work">{newgen.work}</p>
            <div>
              <h3 className="mini-label">parts of the product i’ve built on</h3>
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

        <h3 className="tile-title capabilities-title">built for enterprise IT.</h3>
        <div className="capabilities">
          {newgen.capabilities.map((c, i) => {
            const look = CAPABILITY_LOOK[i % CAPABILITY_LOOK.length];
            return (
              <div key={c.title} className="option-card capability">
                <span className="icon-tile" style={{ "--tint": look.tint } as CSSProperties}>
                  <Icon name={look.icon} />
                </span>
                <h4>{c.title}</h4>
                <p>{c.body}</p>
                <ul className="tag-row" aria-label={c.title}>
                  {c.items.map((item) => (
                    <li key={item} className="tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="experience-notes">
          <p className="note">{newgen.stack}</p>
          <p className="note">{newgen.alongside}</p>
        </div>
      </div>
    </section>
  );
}
