import Link from 'next/link';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/Card';
export default function HomePage() {
  return (
    <main>
      <section id="home" className="mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-12 items-center gap-8">
          <div className="md:col-span-7">
            <p className="text-sm uppercase tracking-widest text-neutral-500">Portfolio • Writing • Teaching</p>
            <h1 className="mt-3 text-4xl/tight md:text-6xl/tight font-semibold">Music educator, prompt engineer, & creative strategist.</h1>
            <p className="mt-4 text-neutral-600 max-w-prose">I help people learn, design, and communicate—across classical music, opera, and AI. Explore selected projects, essays, and resources.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/projects" className="rounded-2xl px-4 py-2 bg-black text-white">See my work</Link>
              <Link href="/writing" className="rounded-2xl px-4 py-2 border">Read my writing</Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <Card><CardHeader><CardTitle>Currently</CardTitle></CardHeader><CardContent>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li>• Building a prompt‑engineering portfolio and resources for educators.</li>
                <li>• Exploring Mahler & opera pedagogy; drafting beginner‑friendly harmony notes.</li>
                <li>• Consulting on cultural representation frameworks in the performing arts.</li>
              </ul>
            </CardContent></Card>
          </div>
        </div>
      </section>
      <section id="work" className="bg-neutral-50 border-y">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold">Selected Work</h2>
            <Link href="/projects" className="text-sm inline-flex items-center gap-1 hover:opacity-70">All projects →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Prompt Engineering Glossary', blurb: 'A structured glossary with examples and use cases.', href: '/projects/glossary' },
              { title: 'Music Theory Pedagogy Tools', blurb: 'Accessible handouts re‑adapting Piston’s Harmony.', href: '/projects/pedagogy-tools' },
              { title: 'Cultural Integrity Grid Toolkit', blurb: 'Rubrics inspired by Phil Chan for representation.', href: '/projects/cultural-grid' }
            ].map(p => (
              <Card key={p.title}><CardHeader><CardTitle>{p.title}</CardTitle></CardHeader><CardContent>
                <p className="text-sm text-neutral-600">{p.blurb}</p>
                <div className="mt-4"><Link href={p.href} className="rounded-2xl px-3 py-1.5 border inline-block">View project</Link></div>
              </CardContent></Card>
            ))}
          </div>
        </div>
      </section>
      <section id="writing" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Writing</h2>
          <Link href="/writing" className="text-sm inline-flex items-center gap-1 hover:opacity-70">All posts →</Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card><CardHeader><CardTitle>Teach the Machine – Part 1</CardTitle></CardHeader><CardContent>
            <p className="text-sm text-neutral-600">Why prompt patterns work as learn‑by‑teaching strategies.</p>
            <div className="mt-4"><Link href="/writing/teach-the-machine-part-1" className="rounded-2xl px-3 py-1.5 border inline-block">Read</Link></div>
          </CardContent></Card>
          <Card><CardHeader><CardTitle>Mahler 7: Finding the Line</CardTitle></CardHeader><CardContent>
            <p className="text-sm text-neutral-600">First impressions from a late‑in‑life discovery.</p>
            <div className="mt-4"><Link href="/writing/mahler-7-finding-the-line" className="rounded-2xl px-3 py-1.5 border inline-block">Read</Link></div>
          </CardContent></Card>
        </div>
      </section>
    </main>
  );
}
