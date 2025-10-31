import Link from 'next/link';
import { posts } from './posts';
export default function WritingIndex() {
  const sorted = [...posts].sort((a,b) => (a.date < b.date ? 1 : -1));
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
      <h1 className="text-3xl font-semibold mb-6">Writing</h1>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {posts
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((post, i) => (
      <Link
        key={post.slug}
        href={`/writing/${post.slug}`}
        className="block rounded-2xl border p-4 bg-white transition-all
                   hover:shadow-lg hover:-translate-y-0.5 reveal"
        style={{ ["--delay" as any]: `${i * 70}ms` }}
      >
        <div className="text-xs text-neutral-500 mb-1">
          {post.series ?? "Writing"} • {new Date(post.date).toLocaleDateString()}
        </div>

        <h3 className="text-lg font-semibold">{post.title}</h3>
        <p className="text-sm text-neutral-600 mt-2">{post.summary}</p>

        {/* ✅ Tag pills inside card */}
        {post.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2 py-1 rounded-full bg-neutral-100 text-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    ))}
</div>

     
    </main>
  );
}
