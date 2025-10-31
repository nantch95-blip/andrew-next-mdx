import Link from 'next/link';
export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight text-lg">Andrew Rosenfeld</Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/about" className="hover:opacity-70">About</Link>
            <Link href="/projects" className="hover:opacity-70">Projects</Link>
            <Link href="/writing" className="hover:opacity-70">Writing</Link>
            <Link href="/glossary" className="hover:opacity-70">Glossary</Link>
            <Link href="/contact" className="inline-flex items-center rounded-2xl px-3 py-1.5 bg-black text-white hover:opacity-90">Get in touch</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
