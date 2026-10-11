import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/icons";
import { lab, stack } from "@/lib/content";

// Look of each lab card, in the order of `lab`.
const LAB_LOOK: { tone: string; icon: IconName; tint: string; back: string; tag: string; light?: boolean }[] = [
  { tone: "t-peach", icon: "cpu", tint: "var(--c-blue)", back: "#ffc9df", tag: "systems" },
  { tone: "t-pink", icon: "plug", tint: "var(--c-pink)", back: "#ffd392", tag: "networking" },
  { tone: "t-sky", icon: "lock", tint: "var(--c-blue)", back: "#ffc9df", tag: "security" },
  { tone: "t-blue", icon: "database", tint: "#fffdf9", back: "#ffd392", tag: "data", light: true },
  { tone: "t-stone", icon: "arrows", tint: "var(--c-orange)", back: "#ffd392", tag: "realtime" },
  { tone: "t-orange", icon: "terminal", tint: "var(--c-blue)", back: "#ffc9df", tag: "operating systems" },
  { tone: "t-mint", icon: "boxes", tint: "var(--c-green)", back: "#ffd392", tag: "infrastructure" },
  { tone: "t-plum", icon: "sparkle", tint: "#ffc9df", back: "#ffd392", tag: "AI", light: true },
];

const STACK_ICON: Record<string, IconName> = {
  Languages: "code",
  Frontend: "layout",
  Backend: "server",
  Data: "database",
  Infrastructure: "boxes",
  Systems: "cpu",
  AI: "sparkle",
};

export function Lab() {
  return (
    <section id="lab" className="section" aria-labelledby="lab-title">
      <div className="wrap tilt-cards lab-grid">
        <div className="lab-intro">
          <h2 id="lab-title" className="title">
            things
            <br />
            i’m
            <br />
            <span className="accent">exploring.</span>
          </h2>
          <p className="lede">
            I learn by building. These are areas I’m working through, not claims of expertise.
          </p>
        </div>
        {lab.map((item, i) => {
          const look = LAB_LOOK[i % LAB_LOOK.length];
          return (
            <article key={item.title} className={`tilt-card ${look.tone}`}>
              <span className="icon-stack" style={{ "--back": look.back } as CSSProperties}>
                <span
                  className={look.light ? "icon-tile is-light" : "icon-tile"}
                  style={{ "--tint": look.tint } as CSSProperties}
                >
                  <Icon name={look.icon} />
                </span>
              </span>
              <h3>{item.title}.</h3>
              <p>{item.body}</p>
              <span className="tag">{look.tag}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section id="stack" className="section" aria-labelledby="stack-title">
      <div className="wrap split">
        <h2 id="stack-title" className="title">
          what i work with,
          <br />
          <span className="accent">grouped by job.</span>
        </h2>
        <dl className="stack-list">
          {stack.map((g) => (
            <div key={g.group} className="stack-row">
              <dt>
                <span className="icon-soft">
                  <Icon name={STACK_ICON[g.group] ?? "code"} />
                </span>
                {g.group}
              </dt>
              <dd>
                {g.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
