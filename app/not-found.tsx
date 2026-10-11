import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap notfound">
      <p className="eyebrow">404</p>
      <h1 className="display">
        nothing here.
        <br />
        <span className="accent">it moved or never existed.</span>
      </h1>
      <div className="cta-pair">
        <div className="cta">
          <Link className="btn" href="/">
            Back home <span className="arrow" aria-hidden="true">→</span>
          </Link>
          <p className="note">jatinsde.tech</p>
        </div>
        <div className="cta">
          <Link className="btn btn-quiet" href="/#projects">
            See projects <span className="arrow" aria-hidden="true">→</span>
          </Link>
          <p className="note">case studies with architecture</p>
        </div>
      </div>
    </section>
  );
}
