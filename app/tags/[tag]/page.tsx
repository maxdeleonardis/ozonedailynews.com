import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAllEntries } from '@/lib/registry-service';
import { SITE_CONFIG } from '@/lib/site-config';
import type { ContentEntry } from '@/lib/types';

// Tag pages change only when the registry changes, so revalidate hourly.
export const revalidate = 3600;

/**
 * HONEY is the legacy badge for Earth, wildlife, and environment coverage that
 * arrived with the HoneyNewspaper merger. It gets its own archive treatment here
 * so that heritage stays discoverable rather than looking like an ordinary tag.
 */
const HONEY_SLUG = 'honey';

/**
 * Normalize a human-readable tag into its URL slug.
 *
 * This MUST stay byte-identical to the href builder in
 * components/articles/ArticleFooter.tsx, otherwise tag links 404.
 */
function tagSlug(tag: string): string {
  return tag.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

/** Turn a slug back into a readable label for display. */
function tagLabel(slug: string): string {
  return slug
    .split('-')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/** Every distinct tag slug currently present in the live registry. */
function allTagSlugs(entries: ContentEntry[]): string[] {
  const slugs = new Set<string>();
  for (const e of entries) {
    for (const t of e.tags ?? []) {
      const s = tagSlug(t);
      if (s) slugs.add(s);
    }
  }
  return [...slugs].sort();
}

/** Entries carrying the given tag slug, newest first. */
function entriesForTag(entries: ContentEntry[], slug: string): ContentEntry[] {
  return entries
    .filter((e) => e.lifecycle !== 'pruned' && (e.tags ?? []).some((t) => tagSlug(t) === slug))
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

export async function generateStaticParams() {
  const entries = await getAllEntries();
  return allTagSlugs(entries).map((tag) => ({ tag }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ tag: string }> },
): Promise<Metadata> {
  const { tag } = await params;
  const entries = await getAllEntries();
  const matches = entriesForTag(entries, tag);
  const label = tagLabel(tag);

  if (matches.length === 0) return { title: `Tag Not Found | ${SITE_CONFIG.name}` };

  const isHoney = tag === HONEY_SLUG;
  const title = isHoney
    ? `Honey Legacy Desk | Earth, Wildlife & Environment Coverage`
    : `${label} | Coverage Archive`;
  const description = isHoney
    ? 'Earth, wildlife, and environment coverage carried over from the HoneyNewspaper merger, plus ongoing OzoneNews reporting on the living world.'
    : `All ${SITE_CONFIG.name} coverage tagged ${label}, newest first.`;
  const url = `${SITE_CONFIG.url}/tags/${tag}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: 'website',
      url,
      siteName: SITE_CONFIG.publisherName,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    // Tag archives are navigational, not primary content.
    robots: { index: true, follow: true },
  };
}

export default async function TagPage(
  { params }: { params: Promise<{ tag: string }> },
) {
  const { tag } = await params;
  const entries = await getAllEntries();
  const articles = entriesForTag(entries, tag);

  // A tag with no live articles is a dead link; fall through to the 404 handler,
  // which in turn triggers the catchall's drop-one-slug redirect.
  if (articles.length === 0) notFound();

  const isHoney = tag === HONEY_SLUG;
  const label = isHoney ? 'Honey' : tagLabel(tag);

  // Accent palette: amber for the Honey legacy desk, black for everything else.
  const accentBg = isHoney ? 'bg-amber-500' : 'bg-black';
  const accentText = isHoney ? 'text-amber-700' : 'text-black';
  const accentBar = isHoney ? 'bg-amber-500' : 'bg-black';

  const hero = articles[0];
  const grid = articles.slice(1);

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${label} | ${SITE_CONFIG.name}`,
    url: `${SITE_CONFIG.url}/tags/${tag}`,
    description: isHoney
      ? 'Earth, wildlife, and environment coverage from the HoneyNewspaper legacy desk.'
      : `All ${SITE_CONFIG.name} coverage tagged ${label}.`,
    publisher: {
      '@type': 'NewsMediaOrganization',
      name: SITE_CONFIG.publisherName,
      url: SITE_CONFIG.url,
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: articles.length,
      itemListElement: articles.slice(0, 30).map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_CONFIG.url}${a.slug}`,
        name: a.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <div className="min-h-screen bg-white">
        <header className="border-b-2 border-black bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
            <nav className="text-xs text-gray-500 mb-4">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/news" className="hover:text-black transition-colors">News</Link>
              <span className="mx-2">→</span>
              <span className={`font-semibold ${accentText}`}>{label}</span>
            </nav>

            <div className="flex items-start gap-4">
              <div className={`h-12 w-1.5 ${accentBar} shrink-0 mt-1`} />
              <div>
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-black">
                  {isHoney ? '🍯 Honey Legacy Desk' : label}
                </h1>
                <p className="mt-2 text-gray-600 text-base sm:text-lg max-w-2xl">
                  {isHoney
                    ? 'Earth, wildlife, and environment coverage carried over from the HoneyNewspaper merger, plus ongoing OzoneNews reporting on the living world.'
                    : `Every story filed under ${label}, newest first.`}
                </p>
                <p className="mt-3 text-xs font-mono text-gray-400 uppercase tracking-widest">
                  {articles.length} {articles.length === 1 ? 'article' : 'articles'}
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          {hero && (
            <Link
              href={hero.slug}
              className="group flex flex-col sm:flex-row gap-6 mb-10 border border-gray-200 rounded-sm overflow-hidden hover:border-black hover:shadow-md transition-all"
            >
              {hero.imageUrl ? (
                <div className="relative w-full sm:w-80 aspect-[16/9] sm:aspect-auto shrink-0 bg-gray-100 overflow-hidden">
                  <Image
                    src={hero.imageUrl}
                    alt={hero.imageAlt ?? hero.title}
                    fill
                    priority
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 320px"
                  />
                </div>
              ) : (
                <div className={`w-full sm:w-80 aspect-[16/9] sm:aspect-auto ${isHoney ? 'bg-amber-50' : 'bg-gray-50'} flex items-center justify-center shrink-0`}>
                  <span className="text-gray-300 text-4xl font-black opacity-50">📰</span>
                </div>
              )}
              <div className="p-5 sm:p-6 flex flex-col justify-center flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {hero.breaking && (
                    <span className="text-[9px] font-black px-2 py-0.5 tracking-[.15em] uppercase text-white bg-red-600">Breaking</span>
                  )}
                  <span className={`text-[9px] font-black px-2 py-0.5 tracking-[.15em] uppercase text-white ${accentBg}`}>
                    {hero.category}
                  </span>
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-black leading-snug group-hover:underline mb-2">{hero.title}</h2>
                {hero.description && (
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">{hero.description}</p>
                )}
                <p className="text-[10px] text-gray-400 font-mono">
                  {hero.author} · {new Date(hero.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
            </Link>
          )}

          {grid.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {grid.map((article) => (
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
                    <div className={`w-full aspect-[16/9] ${isHoney ? 'bg-amber-50' : 'bg-gray-50'} flex items-center justify-center shrink-0`}>
                      <span className="text-gray-300 text-3xl font-black opacity-40">📰</span>
                    </div>
                  )}
                  <div className="p-4 flex flex-col flex-1">
                    {article.breaking && (
                      <span className="text-[9px] font-black px-2 py-0.5 tracking-[.15em] uppercase text-white bg-red-600 self-start mb-1">Breaking</span>
                    )}
                    <span className={`text-[9px] font-black px-2 py-0.5 tracking-[.15em] uppercase text-white ${accentBg} self-start mb-2`}>
                      {article.category}
                    </span>
                    <h2 className="font-serif text-base font-black leading-snug group-hover:underline line-clamp-3 flex-1">{article.title}</h2>
                    <p className="text-[10px] text-gray-500 font-mono mt-3 pt-2 border-t border-gray-100">
                      {article.author} · {new Date(article.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
}
