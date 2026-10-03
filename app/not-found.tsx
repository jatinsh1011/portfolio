import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-32">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Nothing here.</h1>
      <p className="mt-4 text-muted">That page doesn&apos;t exist or has moved.</p>
      <Link href="/" className="mt-8 inline-block text-accent hover:underline">
        Back to home →
      </Link>
    </div>
  );
}
