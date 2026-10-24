export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  index: string;
  title: string;
  kind: string;
  featured: boolean;
  summary: string;
  problem: string;
  built: string[];
  decisions: { title: string; body: string }[];
  result: string;
  stack: string[];
  /** Left-to-right request / data flow rendered as a diagram. */
  flow: { label: string; note?: string }[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    slug: "aidevkit",
    index: "01",
    title: "aidevkit",
    kind: "Developer platform · AI tooling",
    featured: true,
    summary:
      "A package manager and public hub for AI agents, skills and MCP servers: one command installs a building block into Claude Code, GitHub Copilot or Codex, and one command takes it back out.",
    problem:
      "Every AI coding tool keeps its agents, skills and MCP configuration in its own folders and formats. Reusing one across tools meant copying files by hand, with no view of what a piece could access and no clean way to undo it.",
    built: [
      "The aidevkit CLI (aidevkit-cli on npm): it resolves a listing, shows the permissions it asks for, writes the configuration each tool expects and records a rollback point.",
      "Provider adapters for GitHub Copilot, Claude Code and Codex behind one plan, apply, backup and rollback engine, with a lockfile and version locking.",
      "A NestJS registry API on Postgres (PGlite in development) with accounts, organisations, policies and usage events.",
      "A Next.js and Tailwind discovery site with 30,000+ real listings imported from the official MCP Registry and permissively licensed collections.",
      "An artifact schema with semver, validation, content hashing and a security scanner that rejects risky content.",
    ],
    decisions: [
      {
        title: "Real data, never invented",
        body: "Every listing is imported from a public source with its license, and install counts start at zero. Collections come in only when their content is permissively licensed, and imported listings are labelled as not reviewed.",
      },
      {
        title: "Skip, never guess",
        body: "MCP servers whose connection needs templated URLs, headers or user-supplied arguments are skipped instead of guessed. Placeholders are dropped and each publisher is capped, which took about 38.7k registry entries down to about 21k listings.",
      },
      {
        title: "Every install is reversible",
        body: "Each install creates a rollback point, major versions are never applied silently, and a lockfile restores a setup on another machine.",
      },
      {
        title: "Usable by agents, not only people",
        body: "JSON output and a stable exit-code contract, checked by an end-to-end test that drives the built binary the way a coding agent would: search, inspect, install.",
      },
      {
        title: "One origin in production",
        body: "Postgres, the API and the site run in Docker Compose on a VPS behind Caddy, which sends /v1 to the API and everything else to the site, so the website and the CLI share one origin.",
      },
    ],
    result:
      "Live at aidevkit.in since October 2026 with 30,000+ building blocks, MIT licensed and open source.",
    stack: [
      "TypeScript",
      "Node.js",
      "NestJS",
      "Next.js",
      "Tailwind",
      "Postgres",
      "PGlite",
      "Zod",
      "Vitest",
      "Docker",
      "Caddy",
    ],
    flow: [
      { label: "aidevkit CLI", note: "search, install" },
      { label: "Caddy", note: "/v1 to the API" },
      { label: "Registry API", note: "NestJS + Postgres" },
      { label: "Provider adapter", note: "Copilot, Claude Code, Codex" },
      { label: "Config + rollback point" },
    ],
    links: [
      { label: "Live site", href: "https://aidevkit.in/" },
      {
        label: "GitHub",
        href: "https://github.com/jatinsh1011/ai-development-hub",
      },
      { label: "npm", href: "https://www.npmjs.com/package/aidevkit-cli" },
    ],
  },
  {
    slug: "tasking",
    index: "02",
    title: "Tasking",
    kind: "SaaS · full lifecycle",
    featured: true,
    summary:
      "A task management app I designed, built, deployed and run myself, from the first schema to HTTPS in production.",
    problem:
      "I wanted a product I could carry through the entire lifecycle instead of stopping at localhost: design the data model, ship the UI, then own the deployment, reverse proxy, certificates and CI/CD.",
    built: [
      "React + Vite + Material UI frontend, served as static files.",
      "Node.js / Express REST API with JWT authentication and bcrypt-hashed passwords.",
      "MongoDB Atlas for persistence, plus Redis.",
      "Dockerised frontend and API, orchestrated with Docker Compose on a Linux VPS.",
    ],
    decisions: [
      {
        title: "The API is never exposed publicly",
        body: "Only the reverse proxy publishes ports 80 and 443. The backend lives on a private Docker network, and the proxy forwards /api to it. There is one public entry point to reason about.",
      },
      {
        title: "Caddy for HTTPS",
        body: "Certificates are issued and renewed automatically, so TLS is infrastructure configuration instead of a recurring chore.",
      },
      {
        title: "Secure session handling",
        body: "JWT-based auth delivered with secure cookie settings in production, passwords hashed with bcrypt, and an explicit allowed frontend origin on the API.",
      },
      {
        title: "Automated deployment",
        body: "A Jenkins pipeline triggered by GitHub webhooks rebuilds and redeploys on push; PM2 and Docker Compose keep processes alive across restarts.",
      },
    ],
    result:
      "Live at tasking.co.in and running in production on a single VPS behind Caddy with automatic HTTPS.",
    stack: [
      "React",
      "Vite",
      "Material UI",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Redis",
      "JWT",
      "Docker",
      "Caddy",
      "Jenkins",
      "Linux",
    ],
    flow: [
      { label: "Browser" },
      { label: "Caddy", note: "TLS, 80/443" },
      { label: "React app", note: "static files" },
      { label: "Express API", note: "private network" },
      { label: "MongoDB Atlas + Redis" },
    ],
    links: [
      { label: "Live site", href: "https://tasking.co.in/" },
      {
        label: "Frontend repo",
        href: "https://github.com/jatinsh1011/tasking-frontend",
      },
      {
        label: "Backend repo",
        href: "https://github.com/jatinsh1011/tasking-backend",
      },
    ],
  },
  {
    slug: "dependency-doctor",
    index: "03",
    title: "Dependency Doctor",
    kind: "Developer tool · AI",
    featured: true,
    summary:
      "Paste a package.json and get dependency guidance grounded in real registry and vulnerability data, with an LLM used only to explain and prioritise.",
    problem:
      "Generic advice about outdated packages is easy to generate and hard to trust. I wanted to see how AI can fit into an engineering workflow without being asked to invent facts.",
    built: [
      "Next.js and TypeScript app with a package.json parser and input validation.",
      "Resolves each requested version range against live npm registry metadata.",
      "Looks up known vulnerabilities for the resolved versions through the OSV database.",
      "Detects peer-dependency conflicts using registry data and semver range intersection.",
      "Sends the collected facts to an LLM, which returns a structured, prioritised report.",
    ],
    decisions: [
      {
        title: "Facts first, model second",
        body: "Versions, deprecations, vulnerabilities and peer conflicts are computed deterministically. The model never decides what is true; it only explains and ranks what the pipeline already found.",
      },
      {
        title: "Structured output, validated twice",
        body: "The model is asked for strict JSON-schema output, and the response is parsed again with Zod. A malformed answer fails loudly instead of rendering something misleading.",
      },
      {
        title: "Swappable provider",
        body: "Analysis sits behind a small interface, so the AI provider and the package registry are replaceable without touching the rest of the pipeline.",
      },
      {
        title: "Bounded external calls",
        body: "Registry and OSV requests run with timeouts and limited concurrency, so one slow package cannot hang the whole analysis.",
      },
    ],
    result:
      "Live at dependencydoctor.in, a working example of AI integrated into a developer workflow as one step in a pipeline, not the whole product.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Zod",
      "semver",
      "OSV API",
      "LLM APIs",
      "Docker",
    ],
    flow: [
      { label: "package.json" },
      { label: "Parse + validate", note: "Zod" },
      { label: "npm registry", note: "versions, peers" },
      { label: "OSV", note: "vulnerabilities" },
      { label: "LLM", note: "structured JSON" },
      { label: "Report" },
    ],
    links: [
      { label: "Live site", href: "https://dependencydoctor.in/" },
      {
        label: "GitHub",
        href: "https://github.com/jatinsh1011/Dependency-doctor",
      },
    ],
  },
  {
    slug: "developer-tools",
    index: "04",
    title: "Development tools",
    kind: "Developer tools · Chrome extension + npm CLI",
    featured: true,
    summary:
      "Two tools for problems I hit in real codebases: NetworkLogger, a Chrome extension that keeps network logs when tabs and popups close, and RTL-Migrate, a published codemod that moves CSS to logical properties for right-to-left layouts.",
    problem:
      "DevTools loses the network panel when a tab or popup closes, which is exactly when OAuth popups and redirects go wrong. And supporting right-to-left languages in a large codebase means touching thousands of marginLeft and paddingRight declarations, where a blind find-and-replace breaks layouts.",
    built: [
      "NetworkLogger: a page-world script that patches fetch, XMLHttpRequest, sendBeacon and form submission to capture requests and, where the browser allows, responses.",
      "NetworkLogger: a relay content script and a background service worker that keep per-domain logs in chrome.storage and export them as JSON.",
      "RTL-Migrate: a CLI, rtlmigrate, published to npm as rtl-migrate-cli.",
      "RTL-Migrate: AST-based rewriting of JS/TS style objects with Babel and recast, and PostCSS rewriting for CSS and SCSS, dry run by default.",
    ],
    decisions: [
      {
        title: "NetworkLogger runs in the page's own JS world",
        body: "Capture code is injected into the MAIN world so it patches the page's real network APIs; a separate isolated-world relay carries messages to the extension.",
      },
      {
        title: "Working around MV3 limits",
        body: "Service workers cannot create object URLs, so an offscreen document builds the Blob that is then handed to the downloads API.",
      },
      {
        title: "RTL-Migrate uses heuristics, not blind replacement",
        body: "left and right are only converted when they look directional. Centering such as left: 50%, full-overlay positioning and off-screen hiding are left alone, and direction ternaries collapse to the logical value.",
      },
      {
        title: "Safe to run on a real repo",
        body: "Diff-first output and preserved formatting make the codemod's changes reviewable like any other pull request.",
      },
    ],
    result:
      "One debugging tool that is upfront about what a browser lets an extension see, and one published codemod that turns a repetitive, error-prone migration into a reviewable diff.",
    stack: [
      "JavaScript",
      "Chrome Extensions",
      "Manifest V3",
      "Node.js",
      "Babel",
      "recast",
      "PostCSS",
      "npm",
    ],
    flow: [
      { label: "Source", note: "page traffic / CSS files" },
      { label: "Hook or parse", note: "MAIN world / Babel, PostCSS" },
      { label: "Rules", note: "capture filters / RTL heuristics" },
      { label: "Output", note: "JSON export / reviewable diff" },
    ],
    links: [
      { label: "NetworkLogger", href: "https://github.com/jatinsh1011/networkLogger" },
      { label: "RTL-Migrate", href: "https://github.com/jatinsh1011/rtlMigrate" },
      { label: "npm", href: "https://www.npmjs.com/package/rtl-migrate-cli" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
