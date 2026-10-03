export const layers = [
  {
    name: "Application",
    detail: "React, Next.js, MUI, microfrontends",
    note: "UI architecture, themes, RTL, Webpack and Vite builds",
  },
  {
    name: "Services",
    detail: "Node.js, Spring Boot, REST",
    note: "APIs, auth, enterprise integrations",
  },
  {
    name: "Data",
    detail: "MongoDB, PostgreSQL, Oracle, Redis",
    note: "Modelling, caching, query behaviour",
  },
  {
    name: "Infrastructure",
    detail: "Docker, Caddy, Jenkins, AWS",
    note: "Deployments, reverse proxies, CI/CD",
  },
  {
    name: "Network",
    detail: "HTTP, TLS, TCP/IP",
    note: "What actually happens on the wire",
  },
  {
    name: "System",
    detail: "Linux, processes, C++, memory",
    note: "Where the abstractions bottom out",
  },
] as const;

export const journey: { label: string; state: "worked" | "exploring" }[] = [
  { label: "JavaScript", state: "worked" },
  { label: "Backend", state: "worked" },
  { label: "Databases", state: "worked" },
  { label: "Networking", state: "worked" },
  { label: "Linux", state: "worked" },
  { label: "Docker", state: "worked" },
  { label: "C++", state: "exploring" },
  { label: "Operating systems", state: "exploring" },
  { label: "Systems programming", state: "exploring" },
  { label: "Distributed systems", state: "exploring" },
  { label: "AI infrastructure", state: "exploring" },
];

export const migrations: { area: string; steps: string[]; note?: string }[] = [
  { area: "React", steps: ["17", "18", "19"] },
  { area: "MUI", steps: ["v4", "v5", "v7"] },
  { area: "Bundler", steps: ["Webpack 4", "Webpack 5", "Vite"], note: "Vite is in progress" },
  { area: "Java", steps: ["17", "21"] },
];

export const newgen = {
  company: "Newgen Software Technologies",
  role: "SDE-2",
  product: "NewgenONE",
  intro:
    "NewgenONE is an enterprise platform. I work across its frontend, backend and platform layers on major releases and patches, which means the work spans new features, long-running migrations, production issues, internal QA findings and client requirements.",
  areas: [
    "NewgenONE Workspace",
    "Business Admin",
    "Custom Workspace",
    "Queue Management",
    "Criteria Management",
    "Advanced Search",
    "WorkItemList",
    "Multilingual support",
    "Themes",
  ],
  scope: [
    "Frontend",
    "Backend",
    "Platform",
    "Enterprise deployments",
    "Migrations",
    "Debugging",
    "QA and client requirements",
    "Performance",
    "Microfrontends",
  ],
  environment:
    "Deployments span on-premise and cloud setups on AWS, Azure and GCP, running on JBoss EAP or WebSphere against PostgreSQL, Oracle and Redis.",
  backend: "Spring Boot, REST APIs, FreeMarker templates, Docker and CI/CD pipelines.",
};

export const lab: { title: string; body: string }[] = [
  {
    title: "C++ and memory",
    body: "Pointers, allocation and object lifetimes, to see what a garbage collector or a framework hides.",
  },
  {
    title: "TCP servers and HTTP internals",
    body: "Sockets, framing and parsing, down to what a request is before a framework gets hold of it.",
  },
  {
    title: "TLS and cryptography",
    body: "Handshakes, certificates and why HTTPS works the way it does.",
  },
  {
    title: "Redis and Kafka",
    body: "Caching, rate limiting, queues and logs, and how they behave under failure.",
  },
  {
    title: "WebSockets",
    body: "Long-lived connections and the state and scaling problems that come with them.",
  },
  {
    title: "Operating systems and Linux",
    body: "Processes, scheduling and concurrency, from the shell side and the kernel side.",
  },
  {
    title: "Docker and distributed systems",
    body: "Networks, volumes, restarts, and the failure modes that appear once there is more than one machine.",
  },
  {
    title: "AI agents and LLM infrastructure",
    body: "Agents, model APIs, AI-assisted engineering, and what running them costs.",
  },
];

export const stack: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "Java", "C++"] },
  { group: "Frontend", items: ["React", "Next.js", "Vite", "MUI", "Tailwind"] },
  { group: "Backend", items: ["Node.js", "NestJS", "Express", "Spring Boot"] },
  { group: "Data", items: ["MongoDB", "PostgreSQL", "MySQL", "Oracle", "Redis"] },
  { group: "Infrastructure", items: ["Docker", "Jenkins", "AWS", "Linux", "Caddy", "Nginx", "JBoss"] },
  { group: "Systems", items: ["TCP/IP", "HTTP", "TLS", "Linux", "C++", "Networking"] },
  { group: "AI", items: ["LLMs", "AI APIs", "AI developer tooling", "Agents"] },
];
