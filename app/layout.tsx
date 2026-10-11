import type { Metadata, Viewport } from "next";
import { Hurricane, Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SiteEffects } from "@/components/site-effects";
import {
  LINKS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";

// Rounded display fallback where Arial Rounded MT Bold isn't installed (Windows, Android, Linux).
const rounded = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["800", "900"],
  display: "swap",
});
// Handwritten signature under the story.
const script = Hurricane({
  variable: "--font-hurricane",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s · ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  keywords: [
    "Jatin Sharma",
    "software engineer",
    "full-stack developer",
    "React",
    "Node.js",
    "Java",
    "systems",
    "developer tools",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fffdf9" },
    { media: "(prefers-color-scheme: dark)", color: "#191a1d" },
  ],
  colorScheme: "light dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: "Software Development Engineer",
  worksFor: { "@type": "Organization", name: "Newgen Software Technologies" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Maharaja Agrasen Institute of Technology",
  },
  sameAs: [LINKS.github, LINKS.linkedin, LINKS.x],
};

// Apply a saved light/dark choice before first paint; without one the site follows the OS.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${rounded.variable} ${script.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <SiteEffects />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
