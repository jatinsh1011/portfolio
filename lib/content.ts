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

// Product facts follow Newgen's public investor material (figures as of March 2026).
export const newgen = {
  company: "Newgen Software Technologies",
  role: "Senior SDE",
  title: "Senior Software Design Engineer",
  product: "NewgenONE",
  summary:
    "Building NewgenONE at Newgen Software: one enterprise platform for content, process and customer communication. Promoted from SDE-2 to Senior SDE in July 2026.",
  intro:
    "NewgenONE is Newgen’s enterprise platform for banks, financial institutions, insurers and governments. It brings content management, business process management and customer communication management together, with business rules, document intelligence and AI agents built on top, and it is used by around 500 enterprises across 79 countries.",
  work: "I build across its frontend, backend and platform layers: features for major releases, client requirements, production fixes and performance work, while keeping a large product modern as it keeps shipping.",
  areas: [
    "NewgenONE Workspace",
    "Business Admin",
    "Queue and criteria management",
    "Advanced search",
    "Multilingual and RTL support",
    "Themes",
  ],
  scope: [
    "Frontend",
    "Backend",
    "Platform",
    "Microfrontends",
    "Enterprise deployments",
    "Performance",
  ],
  capabilities: [
    {
      title: "Content, process, communication",
      body: "ECM, BPM and CCM in one low-code platform, with business rules, document intelligence and AI agents on top.",
      items: ["ECM", "BPM", "CCM", "Business rules", "AI agents"],
    },
    {
      title: "Any cloud, or on-premise",
      body: "The same product ships to public cloud, private data centres and hybrid setups.",
      items: ["AWS", "Azure", "Google Cloud", "On-premise", "Hybrid"],
    },
    {
      title: "Enterprise app servers",
      body: "Deployed on the Java application servers banks already run.",
      items: ["Red Hat JBoss EAP", "IBM WebSphere"],
    },
    {
      title: "Enterprise databases",
      body: "Runs on the databases regulated institutions standardise on.",
      items: ["Oracle", "PostgreSQL", "MySQL", "Redis cache"],
    },
  ],
  stack:
    "Under the hood: Java and Spring Boot services, REST APIs, FreeMarker templates, React and MUI microfrontends, Docker and CI/CD pipelines.",
  alongside:
    "Alongside features: microfrontend compatibility, theme architecture, RTL support, and platform-wide React, MUI and Java upgrades.",
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
  {
    group: "Data",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Oracle", "Redis"],
  },
  {
    group: "Infrastructure",
    items: ["Docker", "Jenkins", "AWS", "Linux", "Caddy", "Nginx", "JBoss"],
  },
  {
    group: "Systems",
    items: ["TCP/IP", "HTTP", "TLS", "Linux", "C++", "Networking"],
  },
  { group: "AI", items: ["LLMs", "AI APIs", "AI developer tooling", "Agents"] },
];
