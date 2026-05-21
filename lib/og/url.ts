/**
 * lib/og/url.ts
 *
 * Standardised Satori OG image URL builder.
 *
 * Usage:
 *   import { getOGImageUrl } from '@/lib/og/url';
 *
 *   // Slug-based (preferred — route looks up title/category from content_registry)
 *   const img = getOGImageUrl({ slug: '/video-games/ea/news/f1-25-...' });
 *
 *   // Param-based (use when slug isn't in the registry yet)
 *   const img = getOGImageUrl({ title: 'My Article', category: 'Gaming' });
 *
 * The generated URL points to /api/og on the production domain so it is
 * stable, publicly crawlable, and eligible for Google Top Stories / Discover.
 */

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ozonenetwork.news';

export interface OGImageOptions {
  /** Canonical article path, e.g. "/video-games/ea/news/f1-25-...". Preferred — route auto-resolves title/category. */
  slug?: string;
  /** Headline override (used when slug isn't in the registry). */
  title?: string;
  /** Category override — controls badge colour and Unsplash query. */
  category?: string;
  /** Optional byline shown in the bottom-left of the card. */
  author?: string;
  /** Optional publish date shown in the card. */
  date?: string;
  /** Pass "true" to show the red LIVE badge. */
  breaking?: boolean;
}

/**
 * Returns the full absolute URL to the Satori-generated 1200×675 OG image
 * for this article. Safe to use in:
 *   - metadata.openGraph.images
 *   - metadata.twitter.images
 *   - NewsArticleSchema imageUrl
 *   - content_registry image_url
 */
export function getOGImageUrl(options: OGImageOptions): string {
  const params = new URLSearchParams();

  if (options.slug) {
    params.set('slug', options.slug);
  }
  if (options.title) {
    params.set('title', options.title);
  }
  if (options.category) {
    params.set('category', options.category);
  }
  if (options.author) {
    params.set('author', options.author);
  }
  if (options.date) {
    params.set('date', options.date);
  }
  if (options.breaking) {
    params.set('breaking', 'true');
  }

  return `${SITE}/api/og?${params.toString()}`;
}
