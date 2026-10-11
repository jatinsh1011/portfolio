import type { ReactNode, SVGProps } from "react";

// 24-unit line icons, drawn to match the rest of the site: 1.8 stroke, round caps and joins.
const paths = {
  window: (<><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M3 9h18" /></>),
  server: (<><rect x="4" y="4" width="16" height="7" rx="2" /><rect x="4" y="13" width="16" height="7" rx="2" /><path d="M8 7.5h.01M8 16.5h.01" /></>),
  database: (<><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" /></>),
  cloud: (<path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 9.5 4.3 4.3 0 0 0 7 18z" />),
  globe: (<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>),
  cpu: (<><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" /></>),
  plug: (<path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0zM12 17v5" />),
  lock: (<><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>),
  layers: (<path d="m12 3 9 5-9 5-9-5zM3 13l9 5 9-5" />),
  arrows: (<path d="M7 7h12l-3-3M17 17H5l3 3" />),
  terminal: (<><rect x="3" y="4" width="18" height="16" rx="3" /><path d="m7 10 3 2-3 2M12 15h5" /></>),
  boxes: (<><rect x="3" y="12" width="8" height="8" rx="1.5" /><rect x="13" y="12" width="8" height="8" rx="1.5" /><rect x="8" y="3" width="8" height="8" rx="1.5" /></>),
  sparkle: (<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />),
  code: (<path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" />),
  layout: (<><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M9 4v16M9 10h12" /></>),
  check: (<path d="m5 12 4.5 4.5L19 7" />),
  briefcase: (<><rect x="3" y="7" width="18" height="13" rx="2.5" /><path d="M9 7V5h6v2M3 12h18" /></>),
  at: (<><circle cx="12" cy="12" r="4" /><path d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-3.5 7.1" /></>),
  file: (<><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></>),
  mail: (<><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" /></>),
  package: (<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9zM4 7.5l8 4.5 8-4.5M12 12v9" />),
  palette: (<><circle cx="12" cy="12" r="9" /><path d="M12 21a2.5 2.5 0 0 1 0-5h1.5a3.5 3.5 0 0 0 3.5-3.5M8 10h.01M12 7.5h.01M16 10h.01" /></>),
  coffee: (<path d="M5 8h11v6a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5zM16 10h1.5a2.5 2.5 0 0 1 0 5H16M8 3v2M11 3v2" />),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof paths;

export function Icon({ name, ...rest }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
