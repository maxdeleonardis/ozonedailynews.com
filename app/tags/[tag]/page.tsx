import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllEntries } from '@/lib/registry-service';

export const revalidate = 3600;
export const dynamicParams = true;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Convert URL slug (video-games) → Display label (Video Games) */
function slugToDisplay(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/** Normalize a tag string to the same format used in URLs */
function tagToSlug(tag: string): string {
  return tag.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;
  const display = slugToDisplay(tag);
  const SLUG = `/tags/${tag}`;

  return {
    title: `${display} | OzoneNews`,
    description: `Browse all OzoneNews articles tagged with ${display}. News, analysis, and in-depth coverage.`,
    alternates: { canonical: `https://www.ozonenetwork.news${SLUG}` },
    openGraph: {
      title: `${display} | OzoneNews`,
      description: `All OzoneNews articles tagged with ${display}.`,
      type: 'website',
      url: `https://www.ozonenetwork.news${SLUG}`,
      siteName: 'OzoneNews',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${display} | OzoneNews`,
      description: `All OzoneNews articles tagged with ${display}.`,
    },
  };
}

// ---------------------------------------------------------------------------
// Static params — pre-render the top 200 tags at build time
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  try {
    const all = await getAllEntries();
    const tagMap = new Map<string, number>();
    for (const entry of all) {
      for (const t of entry.tags) {
        const slug = tagToSlug(t);
        if (slug) tagMap.set(slug, (tagMap.get(slug) ?? 0) + 1);
      }
    }
    return [...tagMap.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 200)
      .map(([tag]) => ({ tag }));
  } catch {
    return [];
  }
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const display = slugToDisplay(tag);

  const all = await getAllEntries();

  const articles = all
    .filter((e) => e.tags.some((t) => tagToSlug(t) === tag))
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 60);

  return (
    <div className="min-h-screen bg-white">
      {/* Hub header */}
      <header className="border-b-2 border-black bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <nav className="text-xs text-gray-500 mb-4">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span className="mx-2">→</span>
            <Link href="/site-index" className="hover:text-black transition-colors">Tags</Link>
            <span className="mx-2">→</span>
            <span className="text-black font-semibold">#{display}</span>
          </nav>
          <div className="flex items-start gap-4">
            <div className="h-12 w-1.5 bg-black shrink-0 mt-1" />
            <div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-black">
                #{display}
              </h1>
              <p className="mt-2 text-gray-600 text-base sm:text-lg max-w-2xl">
                All OzoneNews articles tagged with &ldquo;{display}&rdquo;.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {articles.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-gray-400 text-lg">No articles found for this tag yet.</p>
            <Link href="/" className="mt-4 inline-block text-sm text-blue-600 hover:underline">
              ← Back to home
            </Link>
          </div>
        ) : (
          <>
            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-6">
              {articles.length} article{articles.length !== 1 ? 's' : ''}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={article.slug}
                  className="group flex flex-col border border-gray-200 rounded-sm overflow-hidden hover:border-black hover:shadow-md transition-all"
                >
                  {article.imageUrl ? (
                    <div className="relative w-full aspect-[16/9] bg-gray-100 overflow-hidden shrink-0">
                      <Image
                        src={article.imageUrl}
                        alt={article.imageAlt ?? article.title}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-[16/9] bg-gray-50 border-b border-gray-100 flex items-center justify-center shrink-0">
                      <span className="text-gray-300 text-3xl font-black">OW</span>
                    </div>
                  )}
                  <div className="p-4 flex flex-col flex-1">
                    <span className="text-[9px] font-black px-2 py-0.5 tracking-[.15em] uppercase text-white bg-black self-start mb-2">
                      {article.category}
                    </span>
                    <h2 className="font-serif text-base font-black leading-snug group-hover:underline line-clamp-3 flex-1">
                      {article.title.replace(/\s*[|]\s*OzoneNews.*$/i, '')}
                    </h2>
                    {article.description && (
                      <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                        {article.description}
                      </p>
                    )}
                    <p className="text-[10px] text-gray-500 font-mono mt-3 pt-2 border-t border-gray-100">
                      {article.author} ·{' '}
                      {article.publishDate
                        ? new Date(article.publishDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })
                        : ''}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
