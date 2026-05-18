import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getAllArticles, getJackArticles } from '@/lib/article-service';
import type { ArticleFull } from '@/lib/article-service';
import { getAllEntries, type ContentEntry } from '@/lib/registry-service';
import EngagementBar from '@/components/engagement/EngagementBar';
import HeadlineList from '@/components/discovery/HeadlineList';
import { getPopularLeadSlug } from '@/lib/popular-lead';
import { MoreStoriesSection } from '@/components/discovery/MoreStoriesSection';
import PopularCarousel from '@/components/discovery/PopularCarousel';

export const metadata: Metadata = {
  title: 'ObjectWire | Tech, Gaming, Crypto & Culture News 2026',
  description:
    'ObjectWire is a verified news platform covering tech, gaming, crypto, entertainment, esports, and culture. Every article is source-cited, fact-checked, and written for real search intent. No aggregation, no filler.',
  keywords: [
    'tech news 2026',
    'gaming news',
    'crypto news',
    'entertainment news',
    'esports news',
    'culture news',
    'investigative journalism',
    'ObjectWire',
  ],
  alternates: { canonical: 'https://www.ozonenetwork.news' },
  openGraph: {
    title: 'ObjectWire | Tech, Gaming, Crypto & Culture News 2026',
    description:
      'Verified news across tech, gaming, crypto, entertainment, esports, and culture. Source-cited, fact-checked, written with depth.',
    url: 'https://www.ozonenetwork.news',
    siteName: 'ObjectWire',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ObjectWire | Tech, Gaming, Crypto & Culture News 2026',
    description:
      'Tech, gaming, crypto, esports, and culture. Verified news, no aggregation, no filler.',
  },
};

export const revalidate = 3600;

// ── Unified article shape ─────────────────────────────────────────────────────

type Article = {
  id: string;
  title: string;
  excerpt?: string;
  href: string;
  publishDate: string;
  category: string;
  author: string;
  imageUrl?: string;
  imageAlt?: string;
  breaking?: boolean;
  featured?: boolean;
  exclusive?: boolean;
  tags?: string[];
};

function fromRegistry(e: ContentEntry): Article {
  return {
    id: e.slug,
    title: e.title.replace(/\s*[|—–\-]\s*ObjectWire.*$/i, ''),
    excerpt: e.description,
    href: e.slug,
    publishDate: e.publishDate,
    category: e.category,
    author: e.author,
    imageUrl: e.imageUrl,
    imageAlt: e.imageAlt,
    featured: e.featured,
    tags: e.tags,
  };
}

function fromBlog(p: ArticleFull, registry: ContentEntry[]): Article | null {
  // Articles migrated from page routes have slugs derived from their path
  // (e.g. /social/meta/news/article → slug "social-meta-news-article").
  // Look up the canonical URL in the content registry. If no match, use
  // the `url` field from the article itself (set by wiki:publish).
  const registryEntry = registry.find(
    (e) => e.slug.replace(/^\//, '').replace(/\//g, '-') === p.slug
  );
  const href = registryEntry?.slug ?? p.url;
  if (!href) return null;
  return {
    id: String(p.id),
    title: p.title.replace(/\s*[|—–\-]\s*ObjectWire.*$/i, ''),
    excerpt: p.excerpt ?? undefined,
    href,
    publishDate: (p.published_at ?? p.publishedAt ?? ''),
    category: p.category ?? 'News',
    author: p.author_name ?? 'ObjectWire',
    imageUrl: p.imageUrl ?? p.thumbnail_url ?? undefined,
    imageAlt: p.image_alt ?? p.thumbnail_alt ?? undefined,
    breaking: p.breaking ?? false,
    featured: p.featured ?? false,
    exclusive: p.exclusive ?? false,
    tags: Array.isArray(p.tags) ? p.tags : [],
  };
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const CAT_BG: Record<string, string> = {
  news:            'bg-red-600',
  tech:            'bg-blue-700',
  technology:      'bg-blue-700',
  finance:         'bg-emerald-700',
  entertainment:   'bg-purple-700',
  sports:          'bg-orange-600',
  investigations:  'bg-amber-600',
  gaming:          'bg-violet-700',
  'video-games':   'bg-violet-700',
  politics:        'bg-red-800',
  youtube:         'bg-red-600',
  'winter-olympics': 'bg-sky-700',
  'world-cup':     'bg-green-700',
  'formula-1':     'bg-red-700',
  crypto:          'bg-amber-600',
  saas:            'bg-cyan-700',
};

function catBg(cat: string): string {
  return CAT_BG[cat.toLowerCase()] ?? 'bg-gray-700';
}

function timeAgo(dateStr: string): string {
  if (!dateStr) return '';
  const diff = Date.now() - new Date(dateStr).getTime();
  const hours = Math.floor(diff / 3_600_000);
  const days  = Math.floor(diff / 86_400_000);
  if (hours < 1)  return 'Just now';
  if (hours < 24) return `${hours}h ago`;
  if (days === 1) return 'Yesterday';
  if (days < 7)   return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// ── Section navigation beats ──────────────────────────────────────────────────

const BEATS = [
  { label: 'Tech',          href: '/tech',             icon: '💻' },
  { label: 'AI',            href: '/open-ai',          icon: '🤖' },
  { label: 'Nvidia',        href: '/nvidia',           icon: '⚡' },
  { label: 'Google',        href: '/google',           icon: '🔍' },
  { label: 'Video Games',   href: '/video-games',      icon: '🎮' },
  { label: 'Anime',         href: '/anime',            icon: '🎌' },
  { label: 'Crypto',        href: '/crypto',           icon: '₿'  },
  { label: 'Finance',       href: '/finance',          icon: '💰' },
  { label: 'Science',       href: '/nasa',             icon: '🔬' },
  { label: 'Microsoft',     href: '/microsoft',        icon: '🪟' },
  { label: 'Investigations',href: '/investigations',   icon: '🗂️' },
];

// ── Reusable sub-components ───────────────────────────────────────────────────

function CatLabel({ category, breaking }: { category: string; breaking?: boolean }) {
  if (breaking) {
    return (
      <span className="inline-flex items-center gap-1 text-[9px] font-black px-2 py-0.5 tracking-[.2em] uppercase bg-red-600 text-white">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shrink-0" />
        BREAKING
      </span>
    );
  }
  return (
    <span className={`inline-block text-[9px] font-black px-2 py-0.5 tracking-[.15em] uppercase text-white ${catBg(category)}`}>
      {category.replace(/-/g, ' ').toUpperCase()}
    </span>
  );
}

function SectionRule({ label, href }: { label: string; href?: string }) {
  return (
    <div className="flex items-center gap-3 mb-5 mt-10 first:mt-0">
      <div className="h-1 w-5 bg-black shrink-0" />
      <h2 className="text-[10px] font-black tracking-[.3em] uppercase whitespace-nowrap">{label}</h2>
      <div className="h-px flex-1 bg-black" />
      {href && (
        <Link href={href} className="text-[9px] font-bold tracking-widest uppercase text-gray-500 hover:text-black transition-colors whitespace-nowrap">
          More →
        </Link>
      )}
    </div>
  );
}

// Compact headline list row
function HeadlineRow({ article }: { article: Article }) {
  return (
    <Link href={article.href} className="group flex gap-2 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 -mx-2 px-2 transition-colors">
      <div className="flex-1 min-w-0">
        <CatLabel category={article.category} breaking={article.breaking} />
        <h4 className="font-serif text-sm font-black leading-snug mt-1 group-hover:underline line-clamp-2">
          {article.title}
        </h4>
        <p className="text-[10px] text-gray-500 font-mono mt-1">
          {article.author} · {timeAgo(article.publishDate)}
        </p>
      </div>
    </Link>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function HomePage() {
  // Load the content registry from Supabase
  const contentRegistry = await getAllEntries();

  // Categories whose pages no longer exist on this site — exclude from homepage
  const EXCLUDED_CATEGORIES = new Set([
    'Automotive', 'automotive', 'Cars', 'cars',
    'Influencer', 'influencer', 'Creator', 'creator',
    'Sports', 'sports',
    'Politics', 'politics',
    'Lifestyle', 'lifestyle',
  ]);

  // Slug prefixes whose pages were deleted — exclude from homepage
  const EXCLUDED_PREFIXES = [
    '/cars/', '/influencer/', '/creator/', '/formula-1/',
    '/service', '/austin-private-detective-agency',
    '/winter-olympics/', '/world-cup/', '/mls/',
  ];

  // Load Supabase articles (non-fatal)
  let blogArticles: Article[] = [];
  try {
    const all = await getAllArticles();
    blogArticles = all
      .filter((p: ArticleFull) => p.status === 'published')
      .filter((p: ArticleFull) => !EXCLUDED_CATEGORIES.has(p.category ?? ''))
      .map((p: ArticleFull) => fromBlog(p, contentRegistry))
      .filter((a: Article | null): a is Article => a !== null)
      .filter((a: Article) => !EXCLUDED_PREFIXES.some((pfx) => a.href.startsWith(pfx)));
  } catch {
    // Supabase unavailable — static registry still shows
  }

  // Load jack articles (premium research, investigations)
  try {
    const jacks = await getJackArticles();
    const jackArticles = jacks
      .map((p: ArticleFull) => fromBlog(p, contentRegistry))
      .filter((a): a is Article => a !== null);
    blogArticles.push(...jackArticles);
  } catch {
    // JackArticles unavailable — no-op
  }

  // Content registry: exclude section/hub pages (< 2 path segments)
  // and dynamic route patterns like /profile/[username]
  const registryArticles = contentRegistry
    .filter((e) => {
      if (e.slug.split('/').filter(Boolean).length < 2) return false;
      if (e.slug.includes('[')) return false;
      if (EXCLUDED_CATEGORIES.has(e.category)) return false;
      if (EXCLUDED_PREFIXES.some((p) => e.slug.startsWith(p))) return false;
      return true;
    })
    .map(fromRegistry);

  // Merge & deduplicate by href — when both sources have the same article,
  // combine fields so we get the best of both (Supabase has status flags,
  // registry has images and SEO descriptions).
  const seen = new Map<string, number>(); // href → index in merged[]
  const merged: Article[] = [];
  for (const a of [...blogArticles, ...registryArticles]) {
    const idx = seen.get(a.href);
    if (idx === undefined) {
      seen.set(a.href, merged.length);
      merged.push(a);
    } else {
      // Merge: keep existing entry but backfill missing fields
      const existing = merged[idx];
      if (!existing.imageUrl && a.imageUrl) {
        existing.imageUrl = a.imageUrl;
        existing.imageAlt = a.imageAlt;
      }
      if (!existing.excerpt && a.excerpt) existing.excerpt = a.excerpt;
      if (a.breaking) existing.breaking = true;
      if (a.featured) existing.featured = true;
      if (a.exclusive) existing.exclusive = true;
      // Prefer newer publish date
      if (a.publishDate && (!existing.publishDate || new Date(a.publishDate) > new Date(existing.publishDate))) {
        existing.publishDate = a.publishDate;
      }
    }
  }
  merged.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  // GA4: promote most-read article to lead slot
  let popularLeadSlug: string | null = null;
  try { popularLeadSlug = await getPopularLeadSlug(); } catch { /* graceful fallback */ }

  let isMostRead = false;
  if (popularLeadSlug) {
    const popularIdx = merged.findIndex((a) => a.href === popularLeadSlug);
    if (popularIdx > 0) {
      // Move it to front without mutating original sort
      const [popular] = merged.splice(popularIdx, 1);
      merged.unshift(popular);
      isMostRead = true;
    } else if (popularIdx === 0) {
      isMostRead = true;
    }
  }

  const [lead, second, third, ...rest] = merged;
  const popularArticles  = [lead, second, third, ...rest].filter(Boolean).slice(0, 10);
  const moreStories      = rest.slice(0, 48);   // 4-col × 4-row grid (12/page × 4 pages)
  const headlineArticles = rest.slice(48, 90);   // compact headline overflow list
  const editionDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-white">

      {/* ══ MAIN CONTENT ══════════════════════════════════════════════════════ */}
      <main className="container mx-auto px-0 sm:px-2 py-6">

        {/* date stamp above fold */}
        {lead && (
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest whitespace-nowrap">{editionDate}</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>
        )}

        {/* ── TOP STORIES CAROUSEL (replaces static hero) ─────────────── */}
        {popularArticles.length > 0 && (
          <div className="mb-6">
            <PopularCarousel articles={popularArticles} isMostRead={isMostRead} />
          </div>
        )}

        {/* ── MORE STORIES (news-library style grid with category filter) ── */}
        {moreStories.length > 0 && (
          <>
            <SectionRule label="More Stories" href="/site-index" />
            <MoreStoriesSection articles={moreStories} />
          </>
        )}

        {/* ── HEADLINE LIST + COVERAGE BEATS ───────────────────────────────── */}
        {headlineArticles.length > 0 && (
          <>
            <SectionRule label="Today's Headlines" href="/site-index" />
            <div className="grid lg:grid-cols-3 gap-8 mb-10">

              {/* 2-col compact headline list with load-more */}
              <div className="lg:col-span-2">
                <HeadlineList articles={headlineArticles} />
              </div>

              {/* Coverage beats */}
              <div>
                <p className="text-[9px] font-black tracking-[.3em] uppercase border-b-2 border-black pb-2 mb-3">
                  Coverage Beats
                </p>
                <div className="space-y-1">
                  {BEATS.map((b) => (
                    <Link
                      key={b.href}
                      href={b.href}
                      className="flex items-center gap-3 py-2.5 px-3 border border-gray-200 hover:border-black hover:bg-gray-50 transition-all group"
                    >
                      <span className="text-base shrink-0">{b.icon}</span>
                      <span className="text-sm font-black group-hover:underline leading-none">{b.label}</span>
                      <span className="ml-auto text-gray-300 group-hover:text-black text-xs">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* ── ABOUT STRIP ───────────────────────────────────────────────────── */}
        <section className="border-t-2 border-b-2 border-black py-6 text-center mt-4">
          <p className="text-[9px] tracking-[.4em] uppercase font-black text-gray-500 mb-2">About ObjectWire</p>
          <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed mb-4">
            ObjectWire is a focused, verified news platform covering tech, AI, gaming, finance, and culture.
            Every article is source-cited, fact-checked, and written for depth, not clicks. No aggregation, no filler.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 text-[10px] tracking-widest uppercase font-bold text-gray-500">
            {[
              { href: '/about',               label: 'Our Story' },
              { href: '/editorial-standards', label: 'Editorial Standards' },
              { href: '/team',                label: 'Our Team' },
              { href: '/get-help/contact',    label: 'Contact' },
              { href: '/site-index',          label: 'Site Index' },
              { href: '/rss.xml',             label: 'RSS' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="hover:text-black hover:underline transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
