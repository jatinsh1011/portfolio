import { Section } from "@/components/section";
import { LINKS, RESUME_HREF } from "@/lib/site";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="If you're building something where the details matter, get in touch."
    >
      <div className="flex flex-wrap gap-x-8 gap-y-3 text-lg">
        <a href={LINKS.email} className="text-accent underline-offset-4 hover:underline">
          {LINKS.emailAddress}
        </a>
        <a
          href={LINKS.github}
          rel="noopener noreferrer"
          className="text-fg underline-offset-4 hover:underline"
        >
          github.com/jatinsh1011
        </a>
        <a
          href={LINKS.linkedin}
          rel="noopener noreferrer"
          className="text-fg underline-offset-4 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href={LINKS.x}
          rel="noopener noreferrer"
          className="text-fg underline-offset-4 hover:underline"
        >
          X (@jatinsj710)
        </a>
        {RESUME_HREF ? (
          <a href={RESUME_HREF} className="text-fg underline-offset-4 hover:underline">
            Resume (PDF)
          </a>
        ) : null}
      </div>
    </Section>
  );
}
