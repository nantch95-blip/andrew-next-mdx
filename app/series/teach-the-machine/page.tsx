import Link from 'next/link';
import { posts } from '@/app/writing/posts';
export default function SeriesTeachTheMachine() {
  const series = posts.filter(p => p.series === 'Teach the Machine – Teach the Student')
                      .sort((a,b) => a.date.localeCompare(b.date));
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
      <h1 className="text-3xl font-semibold mb-4">Teach the Machine – Teach the Student</h1>
      <p className="text-neutral-700 mb-8">A several‑part series on adapting prompt patterns into learn‑by‑teaching strategies for music theory.</p>
      <ol className="list-decimal pl-6 space-y-2">
        {series.map(p => (
          <li key={p.slug}><Link className="underline" href={`/writing/${p.slug}`}>{p.title}</Link> <span className="text-xs text-neutral-500">({p.date})</span></li>
        ))}
      </ol>
    </main>
  );
}
