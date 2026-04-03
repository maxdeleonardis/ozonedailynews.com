'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// -- Types --------------------------------------------------------------------

export interface LibraryArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  relativeDate: string;
  publishedAtISO?: string;
  readTime?: string;
  urgent?: boolean;
  isUpdated?: boolean;
  imageUrl?: string;
}

export interface LibraryCategory {
  name: string;
  rawName: string;
  count: number;
  isNew: boolean;
}

export interface NewsLibraryProps {
  articles: LibraryArticle[];
  categories: LibraryCategory[];
  totalArticles: number;
  articlesThisWeek: number;
  today: string;
  urgentTicker?: string[];
  popularSlugs?: string[];
}

// -- System / internal routes to hide from category filter --------------------

const HIDDEN_CATEGORIES = new Set([
  'JACKARTICLE', 'ARTICLEPAGE', 'ACCOUNT', 'SAVED', 'HISTORY', 'TAGS',
  'AUTH', 'LOGIN', 'PROFILE', 'ADMIN', 'API', 'FEEDS', 'SEARCH',
  'SITE-INDEX', 'INDEX', 'RSS.XML', 'NEWS-SITEMAP.XML', 'NOT-FOUND',
  'GET-HELP', 'SERVICE', 'SUPPORT', 'CORRECTIONS', 'COPYRIGHT',
  'PRIVACY-POLICY', 'TERMS-OF-SERVICE', 'EDITORIAL-STANDARDS', 'ABOUT',
  'TEAM', 'AUTHORS', 'OTHER', 'GENERAL',
]);

// -- Canonical category display names ----------------------------------------

const CATEGORY_LABELS: Record<string, string> = {
  TECHNOLOGY: 'Technology', TECH: 'Technology',
  GAMING: 'Gaming', 'VIDEO-GAMES': 'Gaming',
  SPORTS: 'Sports',
  YOUTUBE: 'YouTube',
  FINANCE: 'Finance',
  ENTERTAINMENT: 'Entertainment',
  NEWS: 'News',
  REFERENCE: 'Reference',
  META: 'Meta',
  POLITICS: 'Politics',
  EVENTS: 'Events',
  SCIENCE: 'Science',
  LEGAL: 'Legal',
  LIFESTYLE: 'Lifestyle',
  BUSINESS: 'Business',
  SERVICES: 'Services',
  AMAZON: 'Amazon',
  BLACKROCK: 'BlackRock',
  AUTOMOTIVE: 'Automotive',
  INVESTIGATIONS: 'Investigations', INVESTIGATION: 'Investigations',
  'WORLD AFFAIRS': 'World Affairs', 'WORLD-AFFAIRS': 'World Affairs', WORLD: 'World Affairs',
  EQUIPMENT: 'Equipment',
  'SOCIAL MEDIA': 'Social Media', 'SOCIAL-MEDIA': 'Social Media', SOCIAL: 'Social Media',
  CLOUDFLARE: 'Cloudflare',
  CALIFORNIA: 'California',
  FORTNITE: 'Fortnite',
  CLAUDE: 'Claude AI',
  MEDIA: 'Media',
  SHOPIFY: 'Shopify',
  'CENTRAL CEE': 'Central Cee', 'CENTRAL-CEE': 'Central Cee',
  INFLUENCER: 'Influencer',
  CRYPTO: 'Crypto',
  'OPEN-AI': 'OpenAI', OPENAI: 'OpenAI', 'OPEN AI': 'OpenAI',
  NVIDIA: 'Nvidia',
  MICROSOFT: 'Microsoft',
  APPLE: 'Apple',
  GOOGLE: 'Google',
  GITHUB: 'GitHub',
  NETFLIX: 'Netflix',
  DISNEY: 'Disney',
  TIKTOK: 'TikTok',
  'FORMULA-1': 'Formula 1', 'FORMULA 1': 'Formula 1',
  'WINTER-OLYMPICS': 'Winter Olympics', 'WINTER OLYMPICS': 'Winter Olympics',
  'WORLD-CUP': 'World Cup', 'WORLD CUP': 'World Cup',
  'ROCKET-LEAGUE': 'Rocket League', 'ROCKET LEAGUE': 'Rocket League',
  SAAS: 'SaaS',
  'BIO-HACKING': 'Bio-Hacking',
  COLLEGE: 'Education', EDUCATION: 'Education',
  CUBA: 'Cuba',
  CULTURE: 'Culture',
  TRUMP: 'Trump',
  'ELON-MUSK': 'Elon Musk', 'ELON MUSK': 'Elon Musk',
  NASA: 'NASA',
  NGOS: 'NGOs',
  REDBULL: 'Red Bull', 'RED BULL': 'Red Bull',
  INTEL: 'Intel',
  ARTISTS: 'Artists',
  INSTAGRAM: 'Instagram',
};

function cleanCategoryLabel(rawName: string): string {
  return CATEGORY_LABELS[rawName.toUpperCase().trim()] ?? (
    rawName.charAt(0).toUpperCase() + rawName.slice(1).toLowerCase().replace(/-/g, ' ').replace(/_/g, ' ')
  );
}

// -- Category accent colours --------------------------------------------------

const CATEGORY_ACCENTS: Record<string, string> = {
  TECHNOLOGY: '#1d4ed8', TECH: '#1d4ed8', MICROSOFT: '#1d4ed8', APPLE: '#1d4ed8',
  CLOUDFLARE: '#f97316', NVIDIA: '#76a914', INTEL: '#0071c5', GITHUB: '#333',
  'OPEN-AI': '#10b981', OPENAI: '#10b981', CLAUDE: '#b45309',
  FINANCE: '#059669', BUSINESS: '#059669', BLACKROCK: '#059669', SAAS: '#059669',
  SPORTS: '#7c3aed', 'WINTER OLYMPICS': '#7c3aed', 'WINTER-OLYMPICS': '#7c3aed',
  'FORMULA-1': '#dc2626', 'FORMULA 1': '#dc2626',
  INVESTIGATION: '#c2410c', INVESTIGATIONS: '#c2410c',
  ENTERTAINMENT: '#be185d', NETFLIX: '#e50914', DISNEY: '#1d6bc1',
  GAMING: '#6d28d9', 'VIDEO-GAMES': '#6d28d9', FORTNITE: '#00c2ff',
  'ROCKET-LEAGUE': '#ff4400', 'ROCKET LEAGUE': '#ff4400',
  WORLD: '#0369a1', 'WORLD AFFAIRS': '#0369a1', 'WORLD-AFFAIRS': '#0369a1', CUBA: '#c2410c',
  NEWS: '#dc2626', MEDIA: '#dc2626',
  SCIENCE: '#0d9488', NASA: '#0d9488', 'BIO-HACKING': '#0d9488',
  POLITICS: '#7f1d1d', TRUMP: '#7f1d1d',
  CRYPTO: '#b45309', AMAZON: '#ff9900',
  YOUTUBE: '#ff0000',
  TIKTOK: '#333', 'SOCIAL MEDIA': '#0ea5e9', 'SOCIAL-MEDIA': '#0ea5e9', SOCIAL: '#0ea5e9',
  INSTAGRAM: '#e1306c',
  INFLUENCER: '#ec4899', ARTISTS: '#8b5cf6', 'CENTRAL CEE': '#8b5cf6', 'CENTRAL-CEE': '#8b5cf6',
  CALIFORNIA: '#1d4ed8',
  AUTOMOTIVE: '#64748b', EQUIPMENT: '#64748b',
  LIFESTYLE: '#d97706', CULTURE: '#d97706', EVENTS: '#d97706',
  SHOPIFY: '#96bf48', LEGAL: '#475569', REFERENCE: '#475569',
  REDBULL: '#cc0000', 'RED BULL': '#cc0000',
  'ELON MUSK': '#475569', 'ELON-MUSK': '#475569',
  GOOGLE: '#4285f4',
  COLLEGE: '#1d4ed8', EDUCATION: '#1d4ed8',
};

function accent(category: string): string {
  return CATEGORY_ACCENTS[category.toUpperCase().trim()] ?? '#111827';
}

type ViewMode = 'grid' | 'popular';
type DateFilter = 'all' | 'today' | 'week' | 'month';

// -- Date helpers -------------------------------------------------------------

function isWithinDays(isoDate: string | undefined, days: number): boolean {
  if (!isoDate) return false;
  const ms = days * 24 * 60 * 60 * 1000;
  return Date.now() - new Date(isoDate).getTime() <= ms;
}

// -- Breaking ticker ----------------------------------------------------------

function TickerBanner({ headlines }: { headlines: string[] }) {
  if (!headlines.length) return null;
  const repeated = [...headlines, ...headlines].join('   \u25c6   ');
  return (
    <div className="bg-black text-white py-1.5 overflow-hidden border-b border-black">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
        <span className="bg-white text-black text-[9px] font-black px-2 py-0.5 shrink-0 uppercase tracking-widest">
          Breaking
        </span>
        <div className="overflow-hidden flex-1">
          <p className="text-xs font-medium whitespace-nowrap animate-marquee font-mono">{repeated}</p>
        </div>
      </div>
    </div>
  );
}

// -- Article card (grid view) -------------------------------------------------

function ArticleCard({ article }: { article: LibraryArticle }) {
  const color = accent(article.category);
  return (
    <Link
      href={article.slug.startsWith('/') ? article.slug : `/${article.slug}`}
      className="group flex flex-col bg-white border border-gray-200 hover:border-black hover:shadow-md transition-all duration-150 rounded-sm"
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100 shrink-0">
        {article.imageUrl ? (
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
            className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full" style={{ background: `${color}12` }} />
        )}
        {article.urgent && (
          <span className="absolute top-2 left-2 bg-black text-white text-[9px] font-black px-2 py-0.5 uppercase tracking-widest">
            Breaking
          </span>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-[.12em] mb-2 block" style={{ color }}>
          {cleanCategoryLabel(article.category)}
          {article.isUpdated && <span className="ml-2 text-gray-400 font-bold normal-case tracking-normal">Updated</span>}
        </span>
        <h3 className="text-[11px] font-black text-gray-900 group-hover:underline underline-offset-2 leading-snug mb-2 font-serif">
          {article.title}
        </h3>
        <p className="text-[10px] text-gray-500 leading-relaxed mb-3 line-clamp-2">
          {article.excerpt}
        </p>
        <div className="flex flex-col gap-0.5 text-[10px] font-mono border-t border-gray-100 pt-2 mt-auto">
          <span className="font-semibold text-gray-700">{article.author}</span>
          <span className="text-gray-400">{article.relativeDate || article.date}</span>
        </div>
      </div>
    </Link>
  );
}

// -- Article list row (popular view) ------------------------------------------

function ArticleRow({ article, index, popularRank }: { article: LibraryArticle; index: number; popularRank?: number }) {
  const color = accent(article.category);
  return (
    <Link
      href={article.slug.startsWith('/') ? article.slug : `/${article.slug}`}
      className="group flex items-start gap-4 py-4 border-b border-gray-200 last:border-0 hover:bg-gray-50 px-1 transition-colors"
    >
      <span className="text-[11px] font-black font-mono text-gray-300 pt-0.5 w-7 shrink-0 hidden sm:block">
        {popularRank ? `#${popularRank}` : String(index + 1).padStart(2, '0')}
      </span>

      <div className="w-0.5 self-stretch shrink-0" style={{ background: color }} />

      <div className="flex-1 min-w-0">
        <span className="text-[10px] font-black uppercase tracking-[.12em] block mb-0.5" style={{ color }}>
          {cleanCategoryLabel(article.category)}
          {article.urgent && <span className="ml-2 text-black">&middot; Breaking</span>}
          {popularRank && <span className="ml-2 text-orange-500 font-black normal-case tracking-normal text-[9px]">Trending</span>}
        </span>
        <h3 className="text-sm font-black text-gray-900 group-hover:underline underline-offset-2 leading-snug mb-1 line-clamp-2 font-serif">
          {article.title}
        </h3>
        <p className="text-xs text-gray-500 line-clamp-1 mb-1.5">{article.excerpt}</p>
        <div className="flex items-center gap-2 text-[10px] text-gray-400 font-mono flex-wrap">
          <span>{article.author}</span>
          <span>&middot;</span>
          <time>{article.relativeDate}</time>
          {article.readTime && <><span>&middot;</span><span>{article.readTime}</span></>}
        </div>
      </div>

      <div className="relative w-20 h-14 shrink-0 overflow-hidden hidden sm:block bg-gray-100">
        {article.imageUrl ? (
          <Image src={article.imageUrl} alt={article.title} fill sizes="80px" className="object-cover" />
        ) : (
          <div className="w-full h-full" style={{ background: `${color}18` }} />
        )}
      </div>
    </Link>
  );
}

// -- Main component -----------------------------------------------------------

export default function NewsLibrary({
  articles,
  categories,
  totalArticles,
  articlesThisWeek,
  today,
  urgentTicker = [],
  popularSlugs = [],
}: NewsLibraryProps) {
  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [dateFilter, setDateFilter] = useState<DateFilter>('all');
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const popularRankMap = useMemo(() => {
    const map = new Map<string, number>();
    popularSlugs.forEach((slug, i) => {
      const normalized = slug.startsWith('/') ? slug : `/${slug}`;
      map.set(normalized, i + 1);
    });
    return map;
  }, [popularSlugs]);

  const visibleCategories = useMemo(() =>
    categories.filter(c => !HIDDEN_CATEGORIES.has(c.rawName.toUpperCase().trim())),
    [categories]
  );

  const filtered = useMemo(() => {
    let list = [...articles];

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(a =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.author.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
      );
    }

    if (activeCat) {
      list = list.filter(a => a.category.toUpperCase().trim() === activeCat);
    }

    if (dateFilter === 'today') {
      list = list.filter(a => isWithinDays(a.publishedAtISO, 1));
    } else if (dateFilter === 'week') {
      list = list.filter(a => isWithinDays(a.publishedAtISO, 7));
    } else if (dateFilter === 'month') {
      list = list.filter(a => isWithinDays(a.publishedAtISO, 30));
    }

    if (viewMode === 'popular' && popularSlugs.length > 0) {
      list.sort((a, b) => {
        const slugA = a.slug.startsWith('/') ? a.slug : `/${a.slug}`;
        const slugB = b.slug.startsWith('/') ? b.slug : `/${b.slug}`;
        const rankA = popularRankMap.get(slugA) ?? 99999;
        const rankB = popularRankMap.get(slugB) ?? 99999;
        return rankA - rankB;
      });
    }

    return list;
  }, [articles, query, activeCat, dateFilter, viewMode, popularSlugs, popularRankMap]);

  const isFiltering = !!query.trim() || !!activeCat || dateFilter !== 'all';

  return (
    <div className="min-h-screen bg-[#faf9f6]">

      <TickerBanner headlines={urgentTicker} />

      {/* Section header */}
      <div className="border-b-2 border-black bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-5xl font-black tracking-tighter leading-none font-serif">News</h1>
              <p className="text-xs font-mono text-gray-500 mt-1">
                {today} &nbsp;&middot;&nbsp; {totalArticles} articles &nbsp;&middot;&nbsp; {articlesThisWeek} this week
              </p>
            </div>
            <div className="flex items-center gap-2 border border-gray-300 bg-white focus-within:border-black transition-colors px-3 py-2 max-w-xs w-full sm:w-auto">
              <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <input
                ref={searchRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={`Search ${totalArticles} articles\u2026`}
                className="flex-1 bg-transparent text-xs font-mono text-gray-900 placeholder-gray-400 focus:outline-none"
              />
              {query && (
                <button onClick={() => setQuery('')} className="text-gray-400 hover:text-black text-sm font-mono shrink-0">&times;</button>
              )}
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6 space-y-3">

          {/* Date quick-filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 font-mono mr-1 shrink-0 w-10">When</span>
            {([
              { key: 'all',   label: 'All time' },
              { key: 'today', label: 'Today' },
              { key: 'week',  label: 'This week' },
              { key: 'month', label: 'This month' },
            ] as { key: DateFilter; label: string }[]).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setDateFilter(key)}
                className={`text-[10px] font-black px-3 py-1.5 border transition-colors rounded-sm shrink-0 ${
                  dateFilter === key
                    ? 'bg-black text-white border-black'
                    : 'border-gray-300 text-gray-500 hover:border-black hover:text-black'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Category chips */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 font-mono mr-1 shrink-0 w-10">Topic</span>
            <button
              onClick={() => setActiveCat(null)}
              className={`text-[10px] font-black uppercase tracking-[.12em] px-3 py-1.5 border rounded-sm shrink-0 transition-colors ${
                !activeCat ? 'bg-black text-white border-black' : 'border-gray-300 text-gray-500 hover:border-black hover:text-black'
              }`}
            >
              All
            </button>
            {visibleCategories.map(cat => {
              const isActive = activeCat === cat.rawName;
              const color = accent(cat.rawName);
              return (
                <button
                  key={cat.rawName}
                  onClick={() => setActiveCat(isActive ? null : cat.rawName)}
                  className="text-[10px] font-black uppercase tracking-[.12em] px-3 py-1.5 border rounded-sm shrink-0 transition-all"
                  style={
                    isActive
                      ? { background: color, color: '#fff', borderColor: color }
                      : { borderColor: '#d1d5db', color: '#6b7280' }
                  }
                >
                  {cleanCategoryLabel(cat.rawName)}
                  {cat.isNew && <span className="ml-1 inline-block w-1.5 h-1.5 rounded-full bg-green-400 align-middle" />}
                  <span className="ml-1 opacity-40 font-mono normal-case tracking-normal text-[8px]">{cat.count}</span>
                </button>
              );
            })}
          </div>

          {/* Result count + view toggle */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <p className="text-xs font-mono text-gray-500">
              <span className="font-black text-gray-900">{filtered.length}</span> article{filtered.length !== 1 ? 's' : ''}
              {activeCat && <span> &middot; <span style={{ color: accent(activeCat) }} className="font-black">{cleanCategoryLabel(activeCat)}</span></span>}
              {dateFilter !== 'all' && <span> &middot; <span className="font-black text-gray-700">{dateFilter === 'today' ? 'Today' : dateFilter === 'week' ? 'This week' : 'This month'}</span></span>}
              {query.trim() && <span> &middot; &ldquo;{query}&rdquo;</span>}
              {isFiltering && (
                <button
                  onClick={() => { setQuery(''); setActiveCat(null); setDateFilter('all'); }}
                  className="ml-2 text-gray-400 hover:text-black underline"
                >
                  Clear
                </button>
              )}
            </p>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setViewMode('grid')}
                title="Grid view"
                className={`text-[11px] font-black px-2.5 py-1 border transition-colors ${
                  viewMode === 'grid' ? 'bg-black text-white border-black' : 'border-gray-300 text-gray-400 hover:border-black hover:text-black'
                }`}
              >
                &#8862;
              </button>
              <button
                onClick={() => setViewMode('popular')}
                title="Most popular — ranked by site analytics"
                className={`text-[10px] font-black px-2.5 py-1 border transition-colors flex items-center gap-1 ${
                  viewMode === 'popular' ? 'bg-black text-white border-black' : 'border-gray-300 text-gray-400 hover:border-black hover:text-black'
                }`}
              >
                &#9776;
                {viewMode === 'popular' && <span className="text-[8px] tracking-widest uppercase ml-0.5">Popular</span>}
              </button>
            </div>
          </div>
        </div>

        {/* Articles output */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-4">
            {filtered.map(a => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-gray-200 px-4 py-2">
            {popularSlugs.length > 0 ? (
              <div className="border-b border-gray-100 pb-2 mb-2 flex items-center gap-2">
                <span className="text-[9px] font-black uppercase tracking-widest text-orange-500">&#9650; Ranked by site traffic this week</span>
              </div>
            ) : (
              <div className="border-b border-gray-100 pb-2 mb-2">
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Sorted by date &middot; Analytics not available</span>
              </div>
            )}
            {filtered.map((a, i) => {
              const normalizedSlug = a.slug.startsWith('/') ? a.slug : `/${a.slug}`;
              return (
                <ArticleRow
                  key={a.slug}
                  article={a}
                  index={i}
                  popularRank={popularRankMap.get(normalizedSlug)}
                />
              );
            })}
          </div>
        )}

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-20 font-mono text-sm">No results found.</p>
        )}

        {/* Stats bar */}
        <div className="mt-16 border-t-2 border-black pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: totalArticles, label: 'Articles' },
            { value: `${articlesThisWeek}+`, label: 'This Week' },
            { value: visibleCategories.length, label: 'Topics' },
            { value: '100%', label: 'Source Verified' },
          ].map(s => (
            <div key={s.label}>
              <div className="text-2xl font-black text-gray-900 font-serif">{s.value}</div>
              <div className="text-[10px] font-black uppercase tracking-[.12em] text-gray-400 font-mono mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs font-mono text-gray-400 border-t border-gray-200 pt-6">
          <Link href="/editorial-standards" className="hover:text-black transition-colors">Editorial Standards</Link>
          <Link href="/about" className="hover:text-black transition-colors">About</Link>
          <Link href="/rss.xml" className="hover:text-black transition-colors">RSS Feed</Link>
          <Link href="/corrections" className="hover:text-black transition-colors">Corrections</Link>
          <Link href="/authors" className="hover:text-black transition-colors">Authors</Link>
        </div>
      </main>
    </div>
  );
}
