import Link from 'next/link';
import { getEntriesByAuthor, type ContentEntry } from '@/lib/content-registry';

/**
 * AuthorArticles — Auto-populated article list from the content registry.
 *
 * Reads all registry entries by authorSlug and renders them as a linked list
 * with category badges and dates. Replaces hardcoded or placeholder article
 * sections on author pages.
 *
 * Usage:
 *   <AuthorArticles authorSlug="alfansa" />
 *   <AuthorArticles authorSlug="jack-wang" limit={10} />
 */

interface AuthorArticlesProps {
  /** Must match the authorSlug field in content-registry entries */
  authorSlug: string;
  /** Max articles to show (default: all) */
  limit?: number;
  /** Extra articles not in the registry (hardcoded fallbacks) */
  extraArticles?: { href: string; title: string; date: string; category: string }[];
}

export default function AuthorArticles({
  authorSlug,
  limit,
  extraArticles = [],
}: AuthorArticlesProps) {
  const registryArticles = getEntriesByAuthor(authorSlug);

  // Merge registry articles and extras, deduplicate by href/slug
  const slugSet = new Set(registryArticles.map((a) => a.slug));
  const extras = extraArticles.filter((a) => !slugSet.has(a.href));

  const combinedArticles: {
    href: string;
    title: string;
    date: string;
    category: string;
    imageUrl?: string;
  }[] = [
    ...registryArticles.map((a: ContentEntry) => ({
      href: a.slug,
      title: a.title.replace(/ \| ObjectWire$/, ''),
      date: new Date(a.publishDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      category: a.category,
      imageUrl: a.imageUrl,
    })),
    ...extras,
  ];

  const displayArticles = limit
    ? combinedArticles.slice(0, limit)
    : combinedArticles;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">
          Published Articles
        </h2>
        <span className="text-sm font-semibold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
          {combinedArticles.length} total
        </span>
      </div>

      {displayArticles.length === 0 ? (
        <p className="text-gray-500 italic py-4">
          Articles are on the way — check back soon.
        </p>
      ) : (
        <ul className="space-y-4">
          {displayArticles.map((a) => (
            <li
              key={a.href}
              className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
            >
              <Link
                href={a.href}
                className="group flex items-start gap-4"
              >
                {/* Thumbnail (if available) */}
                {a.imageUrl && (
                  <div className="w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={a.imageUrl}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}
                <div>
                  <span className="text-gray-900 font-semibold group-hover:text-blue-700 transition-colors leading-snug">
                    {a.title}
                  </span>
                  <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                    <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-medium">
                      {a.category}
                    </span>
                    <span>{a.date}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {limit && combinedArticles.length > limit && (
        <p className="mt-4 text-sm text-gray-400 text-center">
          Showing {limit} of {combinedArticles.length} articles
        </p>
      )}
    </div>
  );
}
