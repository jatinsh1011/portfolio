import type { CSSProperties } from "react";
import { journey } from "@/lib/content";
import { LINKS, RESUME_HREF } from "@/lib/site";

export function Story() {
  return (
    <section id="story" className="section" aria-labelledby="story-title">
      <div className="wrap split">
        <div className="story-side">
          <h2 id="story-title" className="title">
            curious about
            <br />
            <span className="accent">what’s underneath.</span>
          </h2>
          <div className="path-panel">
            <div className="mini path-card" style={{ "--tilt": "-1.5deg" } as CSSProperties}>
              <p className="mini-title">the path so far</p>
              <ol className="path" aria-label="Learning path">
                {journey.map((step) => (
                  <li key={step.label} className={step.state === "worked" ? "is-done" : "is-next"}>
                    <span className="path-dot" aria-hidden="true" />
                    {step.label}
                    {step.state === "exploring" ? <span className="status">exploring</span> : null}
                  </li>
                ))}
              </ol>
            </div>
            <span className="sticker" style={{ "--tilt": "4deg" } as CSSProperties}>
              one layer down at a time
            </span>
          </div>
        </div>

        <div>
          <div className="prose">
            <p>
              I started with application development: components, endpoints, forms. It worked, and
              at some point “it works” stopped being a satisfying answer. Why is this request slow?
              What does the database do with that query? What actually happens between a browser
              and a server?
            </p>
            <p>
              Each question pulled me one layer down: from JavaScript into backend services, into
              databases, into networking, then Linux and Docker. That curiosity is now pointing at
              C++, operating systems and distributed systems, and, more recently, at what it takes
              to run AI systems.
            </p>
            <p>
              At work that habit shows up as debugging production problems and carrying large
              migrations through. Outside work it shows up as building the whole thing, then
              running it.
            </p>
          </div>
          <p className="note story-meta">
            B.Tech, Maharaja Agrasen Institute of Technology, Delhi · 2024 · CGPA 8.97 · about
            three years of professional experience.
          </p>
          <p className="signature">Jatin</p>
          <div className="story-links">
            {RESUME_HREF ? (
              <a className="link" href={RESUME_HREF}>
                read my resume ↗
              </a>
            ) : null}
            <a className="link" href={LINKS.github} rel="noopener noreferrer">
              see my GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
