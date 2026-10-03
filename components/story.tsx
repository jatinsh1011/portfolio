import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { journey } from "@/lib/content";

export function Story() {
  return (
    <Section id="story" eyebrow="Story" title="Haha">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            I started with application development: components, endpoints,
            forms. It worked, and at some point &ldquo;it works&rdquo; stopped
            being a satisfying answer. Why is this request slow? What does the
            database do with that query? What actually happens between a browser
            and a server?
          </p>
          <p>
            Each question pulled me one layer down: from JavaScript into backend
            services, into databases, into networking, then Linux and Docker.
            That curiosity is now pointing at C++, operating systems and
            distributed systems, and, more recently, at what it takes to run AI
            systems.
          </p>
          <p>
            At work that habit shows up as debugging production problems and
            carrying large migrations through. Outside work it shows up as
            building the whole thing, then running it.
          </p>
          <p className="text-sm text-faint">
            B.Tech, Maharaja Agrasen Institute of Technology, Delhi · 2024 ·
            CGPA 8.97 · about three years of professional experience.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ol
            className="relative ml-2 border-l border-line-strong"
            aria-label="Learning path"
          >
            {journey.map((step) => (
              <li key={step.label} className="relative pb-5 pl-7 last:pb-0">
                <span
                  aria-hidden
                  className={`absolute -left-[5px] top-[7px] h-[9px] w-[9px] rounded-full border ${
                    step.state === "worked"
                      ? "border-accent bg-accent"
                      : "border-line-strong bg-bg"
                  }`}
                />
                <span
                  className={step.state === "worked" ? "text-fg" : "text-muted"}
                >
                  {step.label}
                </span>
                {step.state === "exploring" ? (
                  <span className="ml-2 font-mono text-[11px] uppercase tracking-wider text-faint">
                    exploring
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
