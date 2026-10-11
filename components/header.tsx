import Link from "next/link";
import { BrandMark } from "@/components/brand";
import { ThemeToggle } from "@/components/theme-toggle";

const nav = [
  { href: "/#projects", label: "projects" },
  { href: "/#experience", label: "experience" },
  { href: "/#lab", label: "lab" },
  { href: "/#stack", label: "stack" },
];

export function Header() {
  return (
    <header className="site-header wrap">
      <Link href="/" className="brand" aria-label="Jatin Sharma, home">
        <BrandMark />
        jatin sharma.
      </Link>
      <nav aria-label="Primary" className="nav">
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="actions">
        <Link href="/#contact" className="btn btn-sm">
          Say hello <span className="arrow" aria-hidden="true">→</span>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
