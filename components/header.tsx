import Link from "next/link";

const nav = [
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#lab", label: "Lab" },
  { href: "/#stack", label: "Stack" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="font-mono text-sm tracking-tight text-fg">
          jatin<span className="text-accent">.</span>sharma
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-1 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden rounded px-3 py-1.5 text-muted transition-colors hover:text-fg md:block"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="ml-2 rounded border border-line-strong px-3 py-1.5 text-fg transition-colors hover:border-accent hover:text-accent"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
