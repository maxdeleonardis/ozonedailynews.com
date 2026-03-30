import type { Metadata } from 'next';
import { getAllEntries, type ContentEntry } from '@/lib/registry-service';
import { SiteIndexTree } from './SiteIndexTree';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Site Index | ObjectWire',
  description:
    'Browse the complete ObjectWire article index organized by category and tags. Explore 400+ verified articles across technology, gaming, finance, politics, sports, and more.',
  alternates: {
    canonical: 'https://www.objectwire.org/site-index',
  },
  openGraph: {
    title: 'Site Index | ObjectWire',
    description:
      'Browse the complete ObjectWire article index organized by category and tags.',
    type: 'website',
    url: 'https://www.objectwire.org/site-index',
    siteName: 'ObjectWire',
  },
};

/* ── Hub slugs / categories that should NOT appear as articles ──────────── */
const HUB_SLUGS = new Set([
  '/', '/news', '/tech', '/technology', '/finance', '/search', '/site-index',
  '/youtube', '/editorial-standards', '/social', '/entertainment', '/blog',
  '/about', '/team', '/privacy-policy', '/terms-of-service', '/copyright',
  '/corrections', '/get-help', '/service', '/index', '/feeds', '/crypto',
  '/artists', '/influencer', '/saas', '/research', '/objectwire',
  '/podcasts', '/video-games', '/winter-olympics', '/world-cup', '/formula-1',
  '/redbull', '/disney', '/elon-musk', '/google', '/apple', '/nvidia',
  '/microsoft', '/open-ai', '/github', '/nasa', '/intel',
  '/bio-hacking', '/earth', '/ngos', '/cars', '/clothing', '/events',
  '/bank-of-america', '/austin-private-detective-agency', '/missing-persons',
  '/investigations', '/college', '/define', '/authors', '/politics',
  '/amazon', '/tiktok', '/trump', '/cuba',
]);

const HUB_CATEGORIES = new Set(['Meta', 'Support', 'Services', 'Legal']);

function isArticle(e: ContentEntry): boolean {
  if (HUB_SLUGS.has(e.slug)) return false;
  if (HUB_CATEGORIES.has(e.category)) return false;
  const parts = e.slug.split('/').filter(Boolean);
  if (parts.length < 2) return false;
  if (e.description.length < 60) return false;
  if (e.title.startsWith('›') || e.title.startsWith('ObjectWire coverage')) return false;
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
      title: a.title.replace(/\s*\|\s*ObjectWire.*$/i, '').trim(),
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
            Browse {articles.length} articles across {categories.length} categories and {allTags.length} topics.
          </p>
        </div>
      </header>

      {/* Interactive tree (client component) */}
      <SiteIndexTree categories={categories} allTags={allTags} />
    </div>
  );
}
