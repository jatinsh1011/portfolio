import { LINKS, RESUME_HREF } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="band-accent contact" aria-labelledby="contact-title">
      <span className="closing-glyph" aria-hidden="true">
        j.
      </span>
      <div className="wrap contact-inner">
        <span className="brand-tile" aria-hidden="true">
          j
        </span>
        <h2 id="contact-title" className="title-xl">
          building something
          <br />
          where the details matter?
          <br />
          <span className="accent">let’s talk.</span>
        </h2>
        <div className="cta-pair">
          <div className="cta">
            <a className="btn" href={LINKS.email}>
              Email me <span className="arrow" aria-hidden="true">↗</span>
            </a>
            <p className="note">{LINKS.emailAddress}</p>
          </div>
          {RESUME_HREF ? (
            <div className="cta">
              <a className="btn btn-quiet" href={RESUME_HREF}>
                Resume <span className="arrow" aria-hidden="true">↗</span>
              </a>
              <p className="note">PDF · one page</p>
            </div>
          ) : null}
        </div>
        <ul className="contact-links">
          <li>
            <a href={LINKS.github} rel="noopener noreferrer">
              GitHub ↗
            </a>
          </li>
          <li>
            <a href={LINKS.linkedin} rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </li>
          <li>
            <a href={LINKS.x} rel="noopener noreferrer">
              X (@jatinsj710) ↗
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
