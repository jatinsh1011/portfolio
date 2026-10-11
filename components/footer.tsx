import Link from "next/link";
import { BrandMark } from "@/components/brand";
import { Icon } from "@/components/icons";
import { LINKS, RESUME_HREF } from "@/lib/site";

export function Footer() {
  return (
    <footer className="wrap site-footer">
      <div className="footer-top">
        <div>
          <Link href="/" className="brand" aria-label="Jatin Sharma, home">
            <BrandMark />
            jatin sharma.
          </Link>
          <p className="small footer-tagline">products, tools, and the layers under them.</p>
        </div>
        <div className="footer-actions">
          <a className="btn btn-sm" href={LINKS.email}>
            Email me <span className="arrow" aria-hidden="true">↗</span>
          </a>
          {RESUME_HREF ? (
            <a className="btn btn-sm btn-quiet" href={RESUME_HREF}>
              Resume <span className="arrow" aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      </div>
      <div className="footer-bottom">
        <nav className="footer-links" aria-label="Elsewhere">
          <a className="foot-chip c-green" href={LINKS.github} rel="noopener noreferrer">
            <span className="icon-sq"><Icon name="code" /></span>github ↗
          </a>
          <a className="foot-chip" href={LINKS.linkedin} rel="noopener noreferrer">
            <span className="icon-sq"><Icon name="briefcase" /></span>linkedin ↗
          </a>
          <a className="foot-chip c-purple" href={LINKS.x} rel="noopener noreferrer">
            <span className="icon-sq"><Icon name="at" /></span>x ↗
          </a>
          {RESUME_HREF ? (
            <a className="foot-chip c-orange" href={RESUME_HREF}>
              <span className="icon-sq"><Icon name="file" /></span>resume ↗
            </a>
          ) : null}
          <a className="foot-chip c-pink" href={LINKS.email}>
            <span className="icon-sq"><Icon name="mail" /></span>email ↗
          </a>
        </nav>
        <div className="footer-utility">
          <span>Next.js, served by Caddy from a single VPS.</span>
          <span>© {new Date().getFullYear()} Jatin Sharma</span>
        </div>
      </div>
    </footer>
  );
}
