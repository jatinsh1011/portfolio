import type { CSSProperties } from "react";
import Link from "next/link";
import { Icon, type IconName } from "@/components/icons";
import { layers } from "@/lib/content";
import { projects } from "@/lib/projects";
import { LINKS, RESUME_HREF } from "@/lib/site";

const LAYER_LOOK: { icon: IconName; tint: string }[] = [
  { icon: "window", tint: "var(--c-blue)" },
  { icon: "server", tint: "var(--c-orange)" },
  { icon: "database", tint: "var(--c-green)" },
  { icon: "boxes", tint: "var(--c-purple)" },
  { icon: "globe", tint: "var(--c-pink)" },
  { icon: "cpu", tint: "var(--c-teal)" },
];

const live = projects.filter((p) => p.links.some((l) => l.label === "Live site")).length;

export function Hero() {
  return (
    <>
      <section className="wrap hero" aria-labelledby="hero-title">
        <div>
          <p className="eyebrow hero-eyebrow">Jatin Sharma · Senior Software Design Engineer at Newgen Software</p>
          <h1 id="hero-title" className="display">
            products, tools,
            <br />
            <span className="accent">and the layers under them.</span>
          </h1>
          <p className="lede">
            Enterprise software by day; by night, aidevkit, a package manager for AI agents, skills and
            MCP servers, plus SaaS and developer tools. Frontend, backend, infrastructure and AI, with a
            standing curiosity about the layers below: networks, operating systems and memory.
          </p>
          <div className="chips" aria-label="What I work on">
            <span className="chip chip-peach">frontend</span>
            <span className="chip chip-sky">backend</span>
            <span className="chip chip-rose">infrastructure</span>
            <span className="chip chip-night">systems</span>
            <Link className="more" href="/#stack">
              + the whole toolbox →
            </Link>
          </div>
        </div>

        <div className="cta-pair">
          <div className="cta">
            <Link className="btn" href="/#projects">
              See my work <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <p className="note">
              {projects.length} projects · {live} live in production
            </p>
          </div>
          {RESUME_HREF ? (
            <div className="cta">
              <a className="btn btn-quiet" href={RESUME_HREF}>
                Resume <span className="arrow" aria-hidden="true">↗</span>
              </a>
              <p className="note">PDF · one page</p>
            </div>
          ) : (
            <div className="cta">
              <a className="btn btn-quiet" href={LINKS.github} rel="noopener noreferrer">
                GitHub <span className="arrow" aria-hidden="true">↗</span>
              </a>
              <p className="note">github.com/jatinsh1011</p>
            </div>
          )}
        </div>
      </section>

      <div className="wrap hero-visual">
        <figure className="window" aria-label="How I think about the stack, top to bottom" style={{ margin: 0 }}>
          <div className="window-bar">
            <i />
            <i />
            <i />
            stack --top-to-bottom
            <span className="window-meta">{layers.length} layers</span>
          </div>
          <ol className="layers">
            {layers.map((layer, i) => (
              <li key={layer.name} className="layer">
                <div className="layer-top">
                  <span className="icon-sq" style={{ "--tint": LAYER_LOOK[i].tint } as CSSProperties}>
                    <Icon name={LAYER_LOOK[i].icon} />
                  </span>
                  <span className="layer-num">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <b>{layer.name}</b>
                <code>{layer.detail}</code>
                <span className="layer-note">{layer.note}</span>
              </li>
            ))}
          </ol>
        </figure>
        <span className="sticker" style={{ "--tilt": "-4deg", right: 56, top: -16 } as CSSProperties}>
          full stack, top to bottom
        </span>
        <span className="sticker s-pink" style={{ "--tilt": "4deg", left: 40, bottom: -18 } as CSSProperties}>
          still digging ↓
        </span>
      </div>
    </>
  );
}
