'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// â”€â”€â”€ Types â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export interface LibraryArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  relativeDate: string;
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
}

// â”€â”€â”€ Category accent colours â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const CATEGORY_ACCENTS: Record<string, string> = {
  TECHNOLOGY: '#1d4ed8', TECH: '#1d4ed8',
  FINANCE: '#059669', BUSINESS: '#059669',
  SPORTS: '#7c3aed', 'WINTER OLYMPICS': '#7c3aed',
  INVESTIGATION: '#c2410c', FRAUD: '#c2410c', INVESTIGATIONS: '#c2410c',
  ENTERTAINMENT: '#be185d',
  GAMING: '#6d28d9',
  WORLD: '#0369a1',
  NEWS: '#dc2626',
  SCIENCE: '#0d9488', HEALTH: '#0d9488',
  POLITICS: '#7f1d1d',
  AI: '#0891b2',
  CRYPTO: '#b45309',
};

function accent(category: string): string {
  return CATEGORY_ACCENTS[category.toUpperCase().trim()] ?? '#111827';
}

type ViewMode = 'grid' | 'list';

// â”€â”€â”€ Breaking ticker â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function TickerBanner({ headlines }: { headlines: string[] }) {
  if (!headlines.length) return null;
  const repeated = [...headlines, ...headlines, ...headlines].join('   â, †   ');
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

// â”€â”€â”€ Article card (grid) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function ArticleCard({ article }: { article: LibraryArticle }) {
  const color = accent(article.category);
  return (
    <Link
      href={article.slug.startsWith('/') ? article.slug : `/${article.slug}`}
      className="group flex flex-col bg-white border border-gray-200 hover:border-black hover:shadow-md transition-all duration-150 rounded-sm"
    >
      {/* Thumbnail */}
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
        {/* Category */}
        <span
          className="text-[10px] font-black uppercase tracking-[.12em] mb-2 block"
          style={{ color }}
        >
          {article.category}
          {article.isUpdated && <span className="ml-2 text-gray-400 font-bold normal-case tracking-normal">Updated</span>}
        </span>

        {/* Title */}
        <h3 className="text-[11px] font-black text-gray-900 group-hover:underline underline-offset-2 leading-snug mb-2 font-serif">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-[10px] text-gray-500 leading-relaxed mb-3">
          {article.excerpt}
        </p>

        {/* Meta */}
        <div className="flex flex-col gap-0.5 text-[10px] font-mono border-t border-gray-100 pt-2 mt-auto">
          <span className="font-semibold text-gray-700">{article.author}</span>
          <span className="text-gray-400">{article.date || article.relativeDate}</span>
        </div>
      </div>
    </Link>
  );
}

// â”€â”€â”€ Article list row â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function ArticleRow({ article, index }: { article: LibraryArticle; index: number }) {
  const color = accent(article.category);
  return (
    <Link
      href={article.slug.startsWith('/') ? article.slug : `/${article.slug}`}
      className="group flex items-start gap-4 py-4 border-b border-gray-200 last:border-0 hover:bg-gray-50 px-1 transition-colors"
    >
      {/* Number */}
      <span className="text-[11px] font-black font-mono text-gray-300 pt-0.5 w-6 shrink-0 hidden sm:block">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Accent bar */}
      <div className="w-0.5 self-stretch shrink-0" style={{ background: color }} />

      <div className="flex-1 min-w-0">
        <span className="text-[10px] font-black uppercase tracking-[.12em] block mb-0.5" style={{ color }}>
          {article.category}
          {article.urgent && <span className="ml-2 text-black">Â· Breaking</span>}
        </span>
        <h3 className="text-sm font-black text-gray-900 group-hover:underline underline-offset-2 leading-snug mb-1 line-clamp-2 font-serif">
          {article.title}
        </h3>
        <p className="text-xs text-gray-500 line-clamp-1 mb-1.5">{article.excerpt}</p>
        <div className="flex items-center gap-2 text-[10px] text-gray-400 font-mono">
          <span>{article.author}</span>
          <span>Â·</span>
          <time>{article.relativeDate}</time>
          {article.readTime && <><span>Â·</span><span>{article.readTime}</span></>}
        </div>
      </div>

      {/* Thumbnail — always shown, color swatch as fallback */}
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

// â”€â”€â”€ Hero (top story) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function HeroStory({ article }: { article: LibraryArticle }) {
  const color = accent(article.category);
  return (
    <Link
      href={article.slug.startsWith('/') ? article.slug : `/${article.slug}`}
      className="group block border-b-2 border-black pb-6 mb-6"
    >
      {article.imageUrl && (
        <div className="relative w-full aspect-[21/9] overflow-hidden bg-gray-100 mb-4">
          <Image src={article.imageUrl} alt={article.title} fill sizes="100vw" className="object-cover group-hover:scale-[1.01] transition-transform duration-300" />
        </div>
      )}
      <span className="text-[10px] font-black uppercase tracking-[.15em] block mb-2" style={{ color }}>
        {article.category}
        {article.urgent && <span className="ml-3 text-black">Â· Breaking</span>}
      </span>
      <h2 className="text-3xl md:text-4xl font-black text-gray-900 group-hover:underline underline-offset-4 leading-tight mb-3 font-serif">
        {article.title}
      </h2>
      <p className="text-base text-gray-600 leading-relaxed mb-3 max-w-3xl">{article.excerpt}</p>
      <div className="text-xs text-gray-400 font-mono">{article.author} Â· {article.relativeDate}{article.readTime && ` Â· ${article.readTime}`}</div>
    </Link>
  );
}

// â”€â”€â”€ Main component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function NewsLibrary({
  articles,
  categories,
  totalArticles,
  articlesThisWeek,
  today,
  urgentTicker = [],
}: NewsLibraryProps) {
  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const searchRef = useRef<HTMLInputElement>(null);

  // Press / to focus search
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

  const filtered = useMemo(() => {
    let list = [...articles];

    // Text search
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(a =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.author.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (activeCat) {
      list = list.filter(a => a.category.toUpperCase().trim() === activeCat);
    }

    return list;
  }, [articles, query, activeCat]);

  const isFiltering = !!query.trim() || !!activeCat;
  const rest = filtered;

  return (
    <div className="min-h-screen bg-[#faf9f6]">

      {/* ── Section header ── */}
      <div className="border-b-2 border-black bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-5xl font-black tracking-tighter leading-none font-serif">News</h1>
              <p className="text-xs font-mono text-gray-500 mt-1">
                {today} &nbsp;Â·&nbsp; {totalArticles} articles &nbsp;Â·&nbsp; {articlesThisWeek} this week
              </p>
            </div>

            {/* Search */}
            <div className="flex items-center gap-2 border border-gray-300 bg-white focus-within:border-black transition-colors px-3 py-2 max-w-xs w-full sm:w-auto">
              <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <input
                ref={searchRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={`Search ${totalArticles} articlesâ€¦`}
                className="flex-1 bg-transparent text-xs font-mono text-gray-900 placeholder-gray-400 focus:outline-none"
              />
              {query && (
                <button onClick={() => setQuery('')} className="text-gray-400 hover:text-black text-xs font-mono shrink-0">âœ•</button>
              )}
            </div>
          </div>


        </div>
      </div>

      {/* â”€â”€ Content â”€â”€ */}
      <main className="max-w-7xl mx-auto px-4 py-8">

        {/* Toolbar: category filters + result count + view toggle */}
        <div className="mb-6 space-y-3">
          {/* Category chips */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setActiveCat(null)}
              className={`text-[10px] font-black uppercase tracking-[.12em] px-3 py-1.5 border rounded-sm shrink-0 transition-colors ${
                !activeCat ? 'bg-black text-white border-black' : 'border-gray-300 text-gray-500 hover:border-black hover:text-black'
              }`}
            >
              All
            </button>
            {categories.map(cat => {
              const isActive = activeCat === cat.rawName;
              const color = accent(cat.rawName);
              return (
                <button
                  key={cat.rawName}
                  onClick={() => setActiveCat(isActive ? null : cat.rawName)}
                  className="text-[10px] font-black uppercase tracking-[.12em] px-3 py-1.5 border rounded-sm shrink-0 transition-colors"
                  style={
                    isActive
                      ? { background: color, color: '#fff', borderColor: color }
                      : { borderColor: '#d1d5db', color: '#6b7280' }
                  }
                >
                  {cat.name}
                  {cat.isNew && <span className="ml-1 inline-block w-1.5 h-1.5 rounded-full bg-green-400 align-middle" />}
                </button>
              );
            })}
          </div>

          {/* Result count + clear + view toggle */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <p className="text-xs font-mono text-gray-500">
              <span className="font-black text-gray-900">{rest.length}</span> article{rest.length !== 1 ? 's' : ''}
              {activeCat && <span> · <span style={{ color: accent(activeCat) }} className="font-black">{activeCat}</span></span>}
              {query.trim() && <span> · &ldquo;{query}&rdquo;</span>}
              {isFiltering && (
                <button
                  onClick={() => { setQuery(''); setActiveCat(null); }}
                  className="ml-2 text-gray-400 hover:text-black underline"
                >
                  Clear
                </button>
              )}
            </p>
            <div className="flex items-center gap-1">
              {(['grid', 'list'] as ViewMode[]).map(m => (
                <button
                  key={m}
                  onClick={() => setViewMode(m)}
                  title={m === 'grid' ? 'Grid view' : 'List view'}
                  className={`text-[10px] font-black px-2.5 py-1 border transition-colors ${
                    viewMode === m ? 'bg-black text-white border-black' : 'border-gray-300 text-gray-400 hover:border-black hover:text-black'
                  }`}
                >
                  {m === 'grid' ? '⊞' : '☰'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Articles */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-8">
            {rest.map(a => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-gray-200 px-4">
            {rest.map((a, i) => <ArticleRow key={a.slug} article={a} index={i} />)}
          </div>
        )}

        {rest.length === 0 && (
          <p className="text-center text-gray-400 py-20 font-mono text-sm">No results found.</p>
        )}

        {/* Stats bar */}
        <div className="mt-16 border-t-2 border-black pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: totalArticles, label: 'Articles' },
            { value: `${articlesThisWeek}+`, label: 'This Week' },
            { value: categories.length, label: 'Topics' },
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
