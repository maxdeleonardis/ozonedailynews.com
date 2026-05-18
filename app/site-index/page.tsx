import type { Metadata } from 'next';
import { getAllEntries, type ContentEntry } from '@/lib/registry-service';
import { SiteIndexTree } from './SiteIndexTree';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Site Index',
  description:
    'Browse the complete OzoneNews article index organized by category and tags. Explore 400+ verified articles across technology, gaming, finance, politics,',
  alternates: {
    canonical: 'https://www.ozonenetwork.news/site-index',
  },
  openGraph: {
    title: 'Site Index',
    description:
      'Browse the complete OzoneNews article index organized by category and tags.',
    type: 'website',
    url: 'https://www.ozonenetwork.news/site-index',
    siteName: 'OzoneNews',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Site Index',
    description: 'Browse the complete OzoneNews article index organized by category and tags.',
  },
};

/* ── Hub slugs / categories that should NOT appear as articles ──────────── */
const HUB_SLUGS = new Set([
  '/', '/news', '/tech', '/technology', '/finance', '/search', '/site-index',
  '/youtube', '/editorial-standards', '/social', '/entertainment', '/blog',
  '/about', '/team', '/privacy-policy', '/terms-of-service', '/copyright',
  '/corrections', '/get-help', '/service', '/index', '/feeds', '/crypto',
  '/artists', '/influencer', '/saas', '/research', '/OzoneNews',
  '/podcasts', '/video-games', '/winter-olympics', '/world-cup', '/formula-1',
  '/redbull', '/disney', '/elon-musk', '/google', '/apple', '/nvidia',
  '/microsoft', '/open-ai', '/github', '/nasa', '/intel',
  '/bio-hacking', '/earth', '/ngos', '/cars', '/clothing', '/events',
  '/bank-of-america', '/austin-private-detective-agency', '/missing-persons',
  '/investigations', '/college', '/define', '/authors', '/politics',
  '/amazon', '/tiktok', '/trump', '/cuba', '/anime', '/science',
]);

const HUB_CATEGORIES = new Set(['Meta', 'Support', 'Services', 'Legal']);

function isArticle(e: ContentEntry): boolean {
  if (HUB_SLUGS.has(e.slug)) return false;
  if (HUB_CATEGORIES.has(e.category)) return false;
  const parts = e.slug.split('/').filter(Boolean);
  if (parts.length < 2) return false;
  if (e.description.length < 60) return false;
  if (e.title.startsWith('›') || e.title.startsWith('OzoneNews coverage')) return false;
  return true;
}

/* ── Category display order ────────────────────────────────────────────── */
const CATEGORY_ORDER = [
  'News', 'Technology', 'Gaming', 'Finance', 'Politics', 'Sports',
  'Entertainment', 'Science', 'World Affairs', 'Investigations',
  'YouTube', 'Lifestyle', 'Business', 'Automotive', 'Events',
  'Education', 'History', 'Research', 'AI Research',
];

export interface SiteIndexArticle {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  category: string;
  tags: string[];
  author: string;
}

export interface SiteIndexCategory {
  name: string;
  articles: SiteIndexArticle[];
}

export default async function SiteIndexPage() {
  /* Build data on the server */
  const contentRegistry = await getAllEntries();
  const articles = contentRegistry.filter(isArticle);

  /* Group by category */
  const grouped = new Map<string, SiteIndexArticle[]>();
  for (const a of articles) {
    const cat = a.category;
    if (!grouped.has(cat)) grouped.set(cat, []);
    grouped.get(cat)!.push({
      slug: a.slug,
      title: a.title.replace(/\s*\|\s*OzoneNews.*$/i, '').trim(),
      description: a.description,
      publishDate: a.publishDate,
      category: a.category,
      tags: a.tags,
      author: a.author,
    });
  }

  /* Sort articles within each category by date desc */
  for (const list of grouped.values()) {
    list.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  }

  /* Sort categories in display order */
  const categories: SiteIndexCategory[] = [];
  for (const cat of CATEGORY_ORDER) {
    if (grouped.has(cat)) {
      categories.push({ name: cat, articles: grouped.get(cat)! });
      grouped.delete(cat);
    }
  }
  /* Remaining categories alphabetically */
  for (const [cat, arts] of [...grouped.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    categories.push({ name: cat, articles: arts });
  }

  /* Collect all tags with counts */
  const tagMap = new Map<string, number>();
  for (const a of articles) {
    for (const t of a.tags) tagMap.set(t, (tagMap.get(t) ?? 0) + 1);
  }
  const allTags = [...tagMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([tag, count]) => ({ tag, count }));

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <nav className="text-xs text-gray-500 mb-4 font-sans">
            <a href="/" className="hover:text-gray-900 transition-colors">Home</a>
            <span className="mx-2">→</span>
            <span className="text-gray-900">Site Index</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Site Index
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl">
            Browse {articles.length} articles across {categories.length} categories and {allTags.length} topics. Auto-generated from the OzoneNews content registry, the same source feeding every search engine signal below.
          </p>

          {/* Automatic SEO System panel */}
          <div className="mt-8 rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-700 ring-1 ring-inset ring-emerald-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live
              </span>
              <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Automatic SEO System
              </h2>
            </div>
            <p className="text-sm text-gray-600 mb-5 max-w-3xl leading-relaxed">
              Every published article is registered in Supabase, then automatically syndicated to Google through four live endpoints. No manual sitemap edits, no static files, no orphan URLs.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-5">
              <div className="rounded-lg bg-white border border-gray-200 p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 tabular-nums">{contentRegistry.length}</div>
                <div className="text-xs text-gray-500 mt-1">Registry entries</div>
              </div>
              <div className="rounded-lg bg-white border border-gray-200 p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 tabular-nums">{articles.length}</div>
                <div className="text-xs text-gray-500 mt-1">Indexed articles</div>
              </div>
              <div className="rounded-lg bg-white border border-gray-200 p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 tabular-nums">{categories.length}</div>
                <div className="text-xs text-gray-500 mt-1">Categories</div>
              </div>
              <div className="rounded-lg bg-white border border-gray-200 p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 tabular-nums">{allTags.length}</div>
                <div className="text-xs text-gray-500 mt-1">Topic tags</div>
              </div>
            </div>

            {/* Live endpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3 sm:px-4 py-2.5 sm:py-3 hover:border-blue-400 hover:bg-blue-50 transition-colors"
              >
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-700">sitemap.xml</div>
                  <div className="text-xs text-gray-500 truncate">All indexable URLs, regenerated daily</div>
                </div>
                <span className="text-xs text-blue-600 font-medium flex-shrink-0 ml-3">Open ↗</span>
              </a>
              <a
                href="/news-sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3 sm:px-4 py-2.5 sm:py-3 hover:border-blue-400 hover:bg-blue-50 transition-colors"
              >
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-700">news-sitemap.xml</div>
                  <div className="text-xs text-gray-500 truncate">Last 48 hours, Google News &amp; Top Stories</div>
                </div>
                <span className="text-xs text-blue-600 font-medium flex-shrink-0 ml-3">Open ↗</span>
              </a>
              <a
                href="/robots.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3 sm:px-4 py-2.5 sm:py-3 hover:border-blue-400 hover:bg-blue-50 transition-colors"
              >
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-700">robots.txt</div>
                  <div className="text-xs text-gray-500 truncate">Crawl directives, dynamic from app/robots.ts</div>
                </div>
                <span className="text-xs text-blue-600 font-medium flex-shrink-0 ml-3">Open ↗</span>
              </a>
              <a
                href="/feeds"
                className="group flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3 sm:px-4 py-2.5 sm:py-3 hover:border-blue-400 hover:bg-blue-50 transition-colors"
              >
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-700">RSS &amp; JSON feeds</div>
                  <div className="text-xs text-gray-500 truncate">Per-category syndication endpoints</div>
                </div>
                <span className="text-xs text-blue-600 font-medium flex-shrink-0 ml-3">Browse →</span>
              </a>
            </div>

            {/* Pipeline diagram */}
            <div className="mt-5 pt-5 border-t border-gray-200">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-2">
                Publishing pipeline
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 font-medium text-purple-700 ring-1 ring-inset ring-purple-200">page.tsx</span>
                <span className="text-gray-400">→</span>
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 font-medium text-blue-700 ring-1 ring-inset ring-blue-200">wiki:publish</span>
                <span className="text-gray-400">→</span>
                <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">Supabase registry</span>
                <span className="text-gray-400">→</span>
                <span className="inline-flex items-center rounded-md bg-amber-50 px-2 py-1 font-medium text-amber-700 ring-1 ring-inset ring-amber-200">JSON-LD + sitemap + RSS</span>
                <span className="text-gray-400">→</span>
                <span className="inline-flex items-center rounded-md bg-rose-50 px-2 py-1 font-medium text-rose-700 ring-1 ring-inset ring-rose-200">Google index</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Interactive tree (client component) */}
      <SiteIndexTree categories={categories} allTags={allTags} />
    </div>
  );
}
