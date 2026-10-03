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
    slug: "tasking",
    index: "01",
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
    index: "02",
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
    slug: "networklogger",
    index: "03",
    title: "NetworkLogger",
    kind: "Developer tool · Chrome extension",
    featured: false,
    summary:
      "A Manifest V3 extension that records fetch, XHR, sendBeacon and form traffic so logs survive popups, closed tabs and short-lived windows.",
    problem:
      "DevTools loses the network panel when a tab or popup closes, which is exactly when some bugs happen: OAuth popups, redirects, short-lived windows. I wanted a recorder that keeps going.",
    built: [
      "A page-world script that patches fetch, XMLHttpRequest, sendBeacon and form submission to capture requests and, where the browser allows, responses.",
      "A relay content script that forwards events to the background service worker only while recording is on.",
      "Per-domain persistence in chrome.storage.local and JSON export of the captured logs.",
    ],
    decisions: [
      {
        title: "Run in the page's own JS world",
        body: "Capture code is injected into the MAIN world so it patches the page's real network APIs; a separate isolated-world relay carries messages to the extension.",
      },
      {
        title: "Work around MV3 limits",
        body: "Service workers cannot create object URLs, so an offscreen document builds the Blob that is then handed to the downloads API.",
      },
      {
        title: "Be explicit about limits",
        body: "Navigation form POST responses and cross-origin subresource bodies are not visible to page JavaScript. The tool documents that and captures timing and size where it can.",
      },
    ],
    result:
      "A debugging tool for real web apps, deliberately upfront about what a browser lets an extension see.",
    stack: [
      "JavaScript",
      "Chrome Extensions",
      "Manifest V3",
      "Service Workers",
      "chrome.storage",
    ],
    flow: [
      { label: "Page", note: "fetch / XHR / beacon" },
      { label: "Capture script", note: "MAIN world" },
      { label: "Relay", note: "isolated world" },
      { label: "Service worker", note: "chrome.storage" },
      { label: "JSON export" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/jatinsh1011/networkLogger" },
    ],
  },
  {
    slug: "rtl-migrate",
    index: "04",
    title: "RTL-Migrate",
    kind: "Developer tool · npm CLI",
    featured: false,
    summary:
      "A published CLI and codemod that migrates physical LTR CSS and CSS-in-JS properties to CSS logical properties, so layouts work in RTL.",
    problem:
      "Supporting right-to-left languages in a large codebase means touching thousands of marginLeft, paddingRight and left/right declarations. Doing it by hand is slow and error-prone, and a blind find-and-replace breaks layouts.",
    built: [
      "A CLI, rtlmigrate, published to npm as rtl-migrate-cli.",
      "AST-based rewriting of JS/TS style objects with Babel and recast, so untouched code keeps its formatting.",
      "PostCSS-based rewriting for CSS and SCSS files.",
      "Dry run by default: it prints a diff and only writes files with an explicit flag.",
    ],
    decisions: [
      {
        title: "Heuristics over blind replacement",
        body: "left and right are only converted when they look directional. Centering such as left: 50%, full-overlay positioning with all four edges at zero, and off-screen hiding are left alone.",
      },
      {
        title: "Understand direction conditionals",
        body: "Ternaries such as direction === 'ltr' ? a : b collapse to the logical value, and 4-value margin or padding shorthands are split correctly.",
      },
      {
        title: "Safe to run on a real repo",
        body: "Diff-first output and preserved formatting make the changes reviewable like any other pull request.",
      },
    ],
    result:
      "Published on npm: a repetitive, error-prone manual migration turned into a reviewable codemod.",
    stack: [
      "Node.js",
      "Babel",
      "recast",
      "PostCSS",
      "Commander",
      "Vitest",
      "npm",
    ],
    flow: [
      { label: "Glob of files" },
      { label: "Parse", note: "Babel / PostCSS" },
      { label: "Heuristics", note: "skip centering, overlays" },
      { label: "Rewrite", note: "recast" },
      { label: "Diff or write" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/jatinsh1011/rtlMigrate" },
      { label: "npm", href: "https://www.npmjs.com/package/rtl-migrate-cli" },
    ],
  },
  {
    slug: "fluxgate",
    index: "05",
    title: "FluxGate",
    kind: "Infrastructure · reverse proxy",
    featured: false,
    summary:
      "A reverse proxy and load balancer written from scratch on Node's http module, to understand what NGINX or an ALB does underneath.",
    problem:
      "I use reverse proxies daily and wanted to know what is inside one: streaming, balancing, health checking and rate limiting, built without a framework doing the work.",
    built: [
      "A streaming reverse proxy that pipes requests and responses without buffering them.",
      "Round-robin load balancing across three backend services that skips unhealthy nodes.",
      "Periodic health checks that mark backends up or down and bring them back when they recover.",
      "Redis-backed rate limiting at 10 requests per 10 seconds per IP, with TTL-based reset.",
      "A metrics endpoint exposing request counts, errors, active connections and backend health.",
      "Proxy, backends and Redis run as containers on a private Docker network.",
    ],
    decisions: [
      {
        title: "Stream, do not buffer",
        body: "Bodies are piped through, which keeps memory flat regardless of payload size.",
      },
      {
        title: "Shared rate-limit state",
        body: "Counters live in Redis, so limits would still hold if more than one proxy instance ran.",
      },
      {
        title: "Failover without intervention",
        body: "Health checks drive routing, so a dead backend drops out of rotation and returns on its own.",
      },
    ],
    result:
      "A learning project that made proxying, health checking and rate limiting concrete instead of something I only configure.",
    stack: ["Node.js", "Redis", "Docker", "Docker Compose", "HTTP"],
    flow: [
      { label: "Client" },
      { label: "FluxGate", note: "rate limit, metrics" },
      { label: "Health-aware round robin" },
      { label: "Backend x3" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/jatinsh1011/FluxGate" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
