import type { Metadata } from 'next';
import Link from 'next/link';
import {
  getAllTags,
  getEntriesByTag,
  type ContentEntry,
} from '@/lib/content-registry';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Convert URL slug back to human-readable tag: "creator-economy" → "Creator Economy" */
function slugToTag(slug: string): string {
  return decodeURIComponent(slug)
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/** Find the exact tag string in the registry (case-insensitive match against slug) */
function resolveTag(slug: string): string | null {
  const allTags = getAllTags();
  const decoded = slugToTag(slug);
  const match = allTags.find(
    (t) => t.tag.toLowerCase() === decoded.toLowerCase()
  );
  return match?.tag ?? null;
}

// ---------------------------------------------------------------------------
// Static params — pre-render every tag page at build time
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return getAllTags().map(({ tag }) => ({
    tag: tag.toLowerCase().replace(/\s+/g, '-'),
  }));
}

// ---------------------------------------------------------------------------
// Dynamic metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag: rawTag } = await params;
  const tag = resolveTag(rawTag) ?? slugToTag(rawTag);
  const articles = getEntriesByTag(tag);

  return {
    title: `${tag} | ${articles.length} Articles | ObjectWire`,
    description: `All ObjectWire articles tagged "${tag}", the latest news, analysis and coverage.`,
    alternates: {
      canonical: `https://www.objectwire.org/tags/${rawTag}`,
    },
    openGraph: {
      title: `${tag} | ObjectWire`,
      description: `${articles.length} articles about ${tag} on ObjectWire.`,
      url: `https://www.objectwire.org/tags/${rawTag}`,
      siteName: 'ObjectWire',
      type: 'website',
    },
  };
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function TagArchivePage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag: rawTag } = await params;
  const tag = resolveTag(rawTag) ?? slugToTag(rawTag);
  const articles = getEntriesByTag(tag);

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      {/* Header */}
      <header
        style={{
          background:
            'linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #1e293b 100%)',
        }}
      >
        <div className="max-w-5xl mx-auto px-4 py-14 text-center">
          <Link
            href="/tags"
            className="inline-block text-white/50 text-xs font-bold tracking-[0.12em] uppercase mb-3 hover:text-white/80 transition-colors"
          >
            ← All Topics
          </Link>
          <h1 className="text-white font-black text-4xl md:text-5xl mb-3">
            {tag}
          </h1>
          <p className="text-white/70 text-lg">
            {articles.length} article{articles.length !== 1 ? 's' : ''} on
            ObjectWire
          </p>
        </div>
      </header>

      {/* Article list */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        {articles.length === 0 ? (
          <p className="text-center text-gray-500 py-20">
            No articles found for this tag.
          </p>
        ) : (
          <div className="space-y-6">
            {articles.map((article: ContentEntry) => (
              <Link
                key={article.slug}
                href={article.slug}
                className="group block bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Thumbnail */}
                  {article.imageUrl && (
                    <div className="md:w-56 md:min-h-[140px] bg-gray-100 overflow-hidden flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={article.imageUrl}
                        alt={article.imageAlt ?? article.title}
                        className="w-full h-40 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Text */}
                  <div className="p-5 flex flex-col justify-center">
                    {/* Category + date */}
                    <div className="flex items-center gap-3 mb-2 text-xs">
                      <span className="font-bold uppercase tracking-wider text-blue-600">
                        {article.category}
                      </span>
                      <span className="text-gray-400">
                        {new Date(article.publishDate).toLocaleDateString(
                          'en-US',
                          {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          }
                        )}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug mb-1">
                      {article.title.replace(/ \| ObjectWire$/, '')}
                    </h2>

                    <p className="text-sm text-gray-500 line-clamp-2">
                      {article.description}
                    </p>

                    {/* Author */}
                    {article.author && (
                      <p className="mt-2 text-xs text-gray-400">
                        By {article.author}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* CollectionPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: `${tag}, ObjectWire`,
            description: `All articles tagged "${tag}" on ObjectWire.`,
            url: `https://www.objectwire.org/tags/${rawTag}`,
            numberOfItems: articles.length,
            publisher: {
              '@type': 'Organization',
              name: 'ObjectWire',
              url: 'https://www.objectwire.org',
            },
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: articles.length,
              itemListElement: articles.slice(0, 50).map((a, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                url: `https://www.objectwire.org${a.slug}`,
                name: a.title,
              })),
            },
          }),
        }}
      />
    </div>
  );
}
