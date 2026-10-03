import { existsSync } from "node:fs";
import { join } from "node:path";

export const SITE_URL = "https://jatinsde.tech";
export const SITE_NAME = "Jatin Sharma";
export const SITE_TITLE = "Jatin Sharma — Software Engineer";
export const SITE_DESCRIPTION =
  "Software engineer working on enterprise software at Newgen, building SaaS products and developer tools on the side, and digging into what runs underneath: networks, operating systems, and infrastructure.";

export const LINKS = {
  github: "https://github.com/jatinsh1011",
  linkedin: "https://www.linkedin.com/in/jatin-sharma-005902210/",
  x: "https://x.com/jatinsj710",
  email: "mailto:jatinsj710@gmail.com",
  emailAddress: "jatinsj710@gmail.com",
} as const;

// Resume link only renders if public/resume.pdf exists at build time.
export const RESUME_HREF = existsSync(join(process.cwd(), "public", "resume.pdf"))
  ? "/resume.pdf"
  : null;
