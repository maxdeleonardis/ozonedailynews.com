import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getAllArticles, getCreatorArticles, getJackArticles } from '@/lib/article-service';

export const dynamic = 'force-dynamic';
import type { ArticleFull } from '@/lib/article-service';
import { getAllEntries, type ContentEntry } from '@/lib/registry-service';
import EngagementBar from '@/components/engagement/EngagementBar';
import HeadlineList from '@/components/discovery/HeadlineList';
import { getPopularLeadSlug } from '@/lib/popular-lead';
import { MoreStoriesSection } from '@/components/discovery/MoreStoriesSection';

export const metadata: Metadata = {
  title: 'ObjectWire News | Independent Investigative Journalism & Tech',
  description:
    'ObjectWire News delivers independent investigative journalism, technology news, finance analysis, and verified reporting. Trusted source for in-depth coverage',
  alternates: { canonical: 'https://www.objectwire.org' },
  openGraph: {
    title: 'ObjectWire News | Independent Investigative Journalism',
    description: 'Independent news source delivering verified investigative journalism and technology coverage.',
    url: 'https://www.objectwire.org',
    siteName: 'ObjectWire News',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ObjectWire News | Independent Investigative Journalism',
    description: 'Independent news source delivering verified investigative journalism and technology coverage.',
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
  { label: 'News',         href: '/news',            icon: '📰' },
  { label: 'Tech',         href: '/tech',             icon: '💻' },
  { label: 'Finance',      href: '/finance',          icon: '💰' },
  { label: 'Video Games',  href: '/video-games',      icon: '🎮' },
  { label: 'Entertainment',href: '/entertainment',    icon: '🎬' },
  { label: 'Olympics',     href: '/winter-olympics',  icon: '🏅' },
  { label: 'World Cup',    href: '/world-cup',        icon: '⚽' },
  { label: 'Formula 1',    href: '/formula-1',        icon: '🏎️' },
  { label: 'Investigations',href: '/investigations',  icon: '🔬' },
  { label: 'Crypto',       href: '/crypto',           icon: '₿'  },
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

  // Load Supabase articles (non-fatal)
  let blogArticles: Article[] = [];
  try {
    const all = await getAllArticles();
    blogArticles = all
      .filter((p: ArticleFull) => p.status === 'published')
      .map((p: ArticleFull) => fromBlog(p, contentRegistry))
      .filter((a: Article | null): a is Article => a !== null);
  } catch {
    // Supabase unavailable — static registry still shows
  }

  // Load creator articles (influencer bios, athlete profiles)
  try {
    const creators = await getCreatorArticles();
    const creatorArticles = creators.map((p) => {
      const href = p.url;
      return {
        id: p.slug,
        title: p.title.replace(/\s*[|—–\-]\s*ObjectWire.*$/i, ''),
        excerpt: p.excerpt ?? undefined,
        href,
        publishDate: p.published_at ?? p.publishedAt ?? '',
        category: p.category ?? 'Entertainment',
        author: p.author_name ?? 'ObjectWire',
        imageUrl: p.imageUrl ?? undefined,
        imageAlt: p.image_alt ?? undefined,
        breaking: false,
        featured: false,
        exclusive: false,
      } as Article;
    });
    blogArticles.push(...creatorArticles);
  } catch {
    // Creator articles unavailable — no-op
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
    .filter((e) => e.slug.split('/').filter(Boolean).length >= 2 && !e.slug.includes('['))
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
    const moreStories      = rest.slice(0, 120);  // 4-col × 3-row grid with 10 pages
    const headlineArticles = rest.slice(120, 160); // overflow headline list
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

        {/* ── FEATURED: 1 HERO + 2 SECONDARY ──────────────────────────── */}
        {lead && (
          <section className="border-b-2 border-black pb-8 mb-0">
            <div className="grid lg:grid-cols-2 gap-6">

              {/* Hero — left, large */}
              <div>
                <Link href={lead.href} className="group block">
                  {lead.imageUrl ? (
                    <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100 mb-4">
                      <Image
                        src={lead.imageUrl}
                        alt={lead.imageAlt ?? lead.title}
                        fill
                        priority
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {isMostRead && (
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center gap-1.5 text-[9px] font-black px-2.5 py-1 tracking-[.2em] uppercase bg-black text-white">
                            <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20"><path d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-1.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"/></svg>
                            Most Read
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="w-full aspect-[16/9] bg-gray-100 mb-4 flex items-center justify-center">
                      <span className="text-gray-300 text-5xl font-black tracking-tighter">OW</span>
                    </div>
                  )}
                  <CatLabel category={lead.category} breaking={lead.breaking} />
                  <h2 className="font-serif text-2xl md:text-4xl font-black leading-tight mt-3 mb-3 group-hover:underline decoration-2">
                    {lead.title}
                  </h2>
                  {lead.exclusive && (
                    <span className="inline-block text-[9px] font-black px-2 py-0.5 tracking-widest uppercase border border-black text-black mb-2">
                      EXCLUSIVE
                    </span>
                  )}
                  {lead.excerpt && (
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-3">
                      {lead.excerpt}
                    </p>
                  )}
                  <p className="text-[11px] text-gray-500 font-mono">
                    <span className="font-semibold text-black">{lead.author}</span>
                    {' · '}{timeAgo(lead.publishDate)}
                  </p>
                </Link>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <EngagementBar
                    slug={lead.href}
                    title={lead.title}
                    url={lead.href}
                    image={lead.imageUrl}
                    category={lead.category}
                  />
                </div>
              </div>

              {/* Right column — 2 stacked secondary cards */}
              <div className="flex flex-col gap-6">
                {second && (
                  <Link href={second.href} className="group flex flex-col flex-1 border border-gray-200 hover:border-black hover:shadow-md transition-all rounded-sm overflow-hidden">
                    {second.imageUrl && (
                      <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100 shrink-0">
                        <Image
                          src={second.imageUrl}
                          alt={second.imageAlt ?? second.title}
                          fill
                          className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 25vw"
                        />
                      </div>
                    )}
                    <div className="p-4 flex-1 flex flex-col">
                      <CatLabel category={second.category} breaking={second.breaking} />
                      <h3 className="font-serif text-lg font-black leading-tight mt-2 mb-2 group-hover:underline decoration-2">
                        {second.title}
                      </h3>
                      {second.excerpt && (
                        <p className="text-gray-600 text-xs leading-relaxed line-clamp-2 mb-2">
                          {second.excerpt}
                        </p>
                      )}
                      <p className="text-[10px] text-gray-500 font-mono mt-auto pt-2 border-t border-gray-100">
                        <span className="font-semibold text-black">{second.author}</span>
                        {' · '}{timeAgo(second.publishDate)}
                      </p>
                    </div>
                  </Link>
                )}
                {third && (
                  <Link href={third.href} className="group flex flex-col flex-1 border border-gray-200 hover:border-black hover:shadow-md transition-all rounded-sm overflow-hidden">
                    {third.imageUrl && (
                      <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100 shrink-0">
                        <Image
                          src={third.imageUrl}
                          alt={third.imageAlt ?? third.title}
                          fill
                          className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 25vw"
                        />
                      </div>
                    )}
                    <div className="p-4 flex-1 flex flex-col">
                      <CatLabel category={third.category} breaking={third.breaking} />
                      <h3 className="font-serif text-lg font-black leading-tight mt-2 mb-2 group-hover:underline decoration-2">
                        {third.title}
                      </h3>
                      {third.excerpt && (
                        <p className="text-gray-600 text-xs leading-relaxed line-clamp-2 mb-2">
                          {third.excerpt}
                        </p>
                      )}
                      <p className="text-[10px] text-gray-500 font-mono mt-auto pt-2 border-t border-gray-100">
                        <span className="font-semibold text-black">{third.author}</span>
                        {' · '}{timeAgo(third.publishDate)}
                      </p>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </section>
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
            Independent investigative journalism, technology news, finance analysis, and verified reporting.
            Every article is source-cited, fact-checked, and written with depth and accuracy.
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
