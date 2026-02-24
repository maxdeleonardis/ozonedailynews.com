'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';

// ─── Types ────────────────────────────────────────────────────────────────────

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

// ─── Category colour map ──────────────────────────────────────────────────────

type SpineColor = {
  bg: string;
  text: string;
  light: string;
  badge: string;
  border: string;
  tag: string;
  icon: string;
};

const CATEGORY_COLORS: Record<string, SpineColor> = {
  TECHNOLOGY:    { bg: '#1d4ed8', text: '#fff', light: '#eff6ff', badge: '#bfdbfe', border: '#3b82f6', tag: 'bg-blue-600 text-white', icon: '💻' },
  TECH:          { bg: '#1d4ed8', text: '#fff', light: '#eff6ff', badge: '#bfdbfe', border: '#3b82f6', tag: 'bg-blue-600 text-white', icon: '💻' },
  FINANCE:       { bg: '#059669', text: '#fff', light: '#f0fdf4', badge: '#bbf7d0', border: '#10b981', tag: 'bg-emerald-600 text-white', icon: '💰' },
  BUSINESS:      { bg: '#059669', text: '#fff', light: '#f0fdf4', badge: '#bbf7d0', border: '#10b981', tag: 'bg-emerald-600 text-white', icon: '📈' },
  SPORTS:        { bg: '#7c3aed', text: '#fff', light: '#faf5ff', badge: '#ddd6fe', border: '#8b5cf6', tag: 'bg-violet-600 text-white', icon: '🏅' },
  'WINTER OLYMPICS': { bg: '#7c3aed', text: '#fff', light: '#faf5ff', badge: '#ddd6fe', border: '#8b5cf6', tag: 'bg-violet-600 text-white', icon: '🏔️' },
  INVESTIGATION: { bg: '#c2410c', text: '#fff', light: '#fff7ed', badge: '#fed7aa', border: '#ea580c', tag: 'bg-orange-700 text-white', icon: '🔍' },
  FRAUD:         { bg: '#c2410c', text: '#fff', light: '#fff7ed', badge: '#fed7aa', border: '#ea580c', tag: 'bg-orange-700 text-white', icon: '🔎' },
  ENTERTAINMENT: { bg: '#be185d', text: '#fff', light: '#fdf2f8', badge: '#fbcfe8', border: '#ec4899', tag: 'bg-pink-700 text-white', icon: '🎬' },
  GAMING:        { bg: '#6d28d9', text: '#fff', light: '#f5f3ff', badge: '#ede9fe', border: '#7c3aed', tag: 'bg-purple-700 text-white', icon: '🎮' },
  WORLD:         { bg: '#0369a1', text: '#fff', light: '#f0f9ff', badge: '#bae6fd', border: '#0ea5e9', tag: 'bg-sky-700 text-white', icon: '🌍' },
  NEWS:          { bg: '#dc2626', text: '#fff', light: '#fef2f2', badge: '#fecaca', border: '#ef4444', tag: 'bg-red-600 text-white', icon: '📰' },
  SCIENCE:       { bg: '#0d9488', text: '#fff', light: '#f0fdfa', badge: '#99f6e4', border: '#14b8a6', tag: 'bg-teal-600 text-white', icon: '🔬' },
  HEALTH:        { bg: '#0d9488', text: '#fff', light: '#f0fdfa', badge: '#99f6e4', border: '#14b8a6', tag: 'bg-teal-600 text-white', icon: '💊' },
  POLITICS:      { bg: '#7f1d1d', text: '#fff', light: '#fef2f2', badge: '#fca5a5', border: '#dc2626', tag: 'bg-red-900 text-white', icon: '🏛️' },
  AI:            { bg: '#06b6d4', text: '#fff', light: '#ecfeff', badge: '#a5f3fc', border: '#22d3ee', tag: 'bg-cyan-600 text-white', icon: '🤖' },
  CRYPTO:        { bg: '#b45309', text: '#fff', light: '#fffbeb', badge: '#fde68a', border: '#f59e0b', tag: 'bg-amber-700 text-white', icon: '₿' },
  META:          { bg: '#374151', text: '#fff', light: '#f9fafb', badge: '#e5e7eb', border: '#6b7280', tag: 'bg-gray-700 text-white', icon: '📋' },
};

function getCategoryColor(category: string): SpineColor {
  const key = category.toUpperCase().trim();
  return CATEGORY_COLORS[key] ?? { bg: '#1f2937', text: '#fff', light: '#f9fafb', badge: '#e5e7eb', border: '#6b7280', tag: 'bg-gray-800 text-white', icon: '📄' };
}

// ─── View mode type ───────────────────────────────────────────────────────────

type ViewMode = 'shelves' | 'grid' | 'list';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function normalizeCategory(raw: string): string {
  return raw.toUpperCase().trim();
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function TickerBanner({ headlines }: { headlines: string[] }) {
  if (headlines.length === 0) return null;
  const repeated = [...headlines, ...headlines, ...headlines].join('  ◆  ');
  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
        <span className="bg-white text-red-700 text-[10px] font-black px-2.5 py-1 rounded shrink-0 uppercase tracking-wider">
          Breaking
        </span>
        <div className="overflow-hidden flex-1">
          <p className="text-sm font-medium whitespace-nowrap animate-marquee">
            {repeated}
          </p>
        </div>
      </div>
    </div>
  );
}

function CardCatalogSearch({ value, onChange, totalArticles }: {
  value: string;
  onChange: (v: string) => void;
  totalArticles: number;
}) {
  return (
    <div className="relative flex-1 max-w-xl">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        type="text"
        placeholder={`Search ${totalArticles} articles…`}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full pl-10 pr-10 py-2.5 bg-blue-50 border-2 border-blue-200 rounded-lg text-sm text-gray-800 placeholder:text-blue-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-medium"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-400 hover:text-blue-700"
          aria-label="Clear search"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}

function ViewToggle({ mode, onChange }: { mode: ViewMode; onChange: (m: ViewMode) => void }) {
  const modes: { key: ViewMode; icon: string; label: string }[] = [
    { key: 'shelves', icon: '📚', label: 'Shelves' },
    { key: 'grid',    icon: '⊞',  label: 'Grid' },
    { key: 'list',    icon: '☰',  label: 'List' },
  ];
  return (
    <div className="flex items-center bg-blue-100 rounded-lg p-1 gap-1">
      {modes.map(m => (
        <button
          key={m.key}
          onClick={() => onChange(m.key)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
            mode === m.key
              ? 'bg-white shadow text-blue-900'
              : 'text-blue-600 hover:text-blue-900'
          }`}
          title={m.label}
        >
          <span>{m.icon}</span>
          <span className="hidden sm:inline">{m.label}</span>
        </button>
      ))}
    </div>
  );
}

// Book spine – small compact card for the shelves view
function BookSpine({ article, index }: { article: LibraryArticle; index: number }) {
  const colors = getCategoryColor(article.category);
  return (
    <Link
      href={article.slug}
      className="group relative flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      {/* Colored top stripe */}
      <div className="h-1.5 w-full" style={{ background: colors.bg }} />

      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
            style={{ background: colors.badge, color: colors.bg }}
          >
            {colors.icon} {article.category}
          </span>
          {article.urgent && (
            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-red-100 text-red-700 animate-pulse">
              LIVE
            </span>
          )}
        </div>

        <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug flex-1 line-clamp-3">
          {article.title}
        </h3>

        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mt-2 hidden sm:block">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
          <span className="text-xs text-gray-400 font-medium truncate max-w-[120px]">{article.author}</span>
          <div className="flex items-center gap-1.5">
            {article.isUpdated && (
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-purple-100 text-purple-700">UPD</span>
            )}
            <time className="text-[10px] text-gray-400">{article.relativeDate}</time>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Full card for grid view
function BookCard({ article }: { article: LibraryArticle }) {
  const colors = getCategoryColor(article.category);
  return (
    <Link
      href={article.slug}
      className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
    >
      {/* Colored band */}
      <div className="h-2 w-full" style={{ background: colors.bg }} />
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full" style={{ background: colors.badge, color: colors.bg }}>
            {colors.icon} {article.category}
          </span>
          {article.urgent && (
            <span className="text-xs font-black px-2 py-0.5 rounded-full bg-red-100 text-red-700 animate-pulse">BREAKING</span>
          )}
        </div>
        <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug mb-2 line-clamp-3">
          {article.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
          <span className="font-medium text-gray-600 truncate max-w-[130px]">{article.author}</span>
          <div className="flex items-center gap-2">
            {article.isUpdated && <span className="font-bold text-purple-600">Updated</span>}
            <time>{article.relativeDate}</time>
            {article.readTime && <span>· {article.readTime}</span>}
          </div>
        </div>
      </div>
    </Link>
  );
}

// List row for list view
function ListRow({ article, index }: { article: LibraryArticle; index: number }) {
  const colors = getCategoryColor(article.category);
  return (
    <Link
      href={article.slug}
      className="group flex items-start gap-4 py-4 px-4 -mx-4 hover:bg-white rounded-xl transition-colors"
    >
      <span
        className="text-2xl font-black tabular-nums leading-none pt-0.5 shrink-0 w-8 text-right"
        style={{ color: colors.badge }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <div
        className="w-1 self-stretch rounded-full shrink-0"
        style={{ background: colors.bg }}
      />

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: colors.bg }}>
            {article.category}
          </span>
          {article.urgent && (
            <span className="text-[10px] font-black text-red-600 animate-pulse">● LIVE</span>
          )}
          {article.isUpdated && (
            <span className="text-[10px] font-bold text-purple-600">UPDATED</span>
          )}
        </div>
        <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug mb-1 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-xs text-gray-500 line-clamp-1 mb-1.5">{article.excerpt}</p>
        <div className="flex items-center gap-2 text-[11px] text-gray-400">
          <span className="font-medium text-gray-500">{article.author}</span>
          <span>·</span>
          <time>{article.relativeDate}</time>
          {article.readTime && <><span>·</span><span>{article.readTime}</span></>}
        </div>
      </div>

      <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}

// Shelf row: one category's articles in the shelves view
function AisleShelf({ category, articles, isActive, onSelect }: {
  category: LibraryCategory;
  articles: LibraryArticle[];
  isActive: boolean;
  onSelect: () => void;
}) {
  const colors = getCategoryColor(category.rawName);
  const [expanded, setExpanded] = useState(false);
  const topArticles = expanded ? articles : articles.slice(0, 4);

  return (
    <section
      className={`mb-4 rounded-xl overflow-hidden border transition-all duration-300 ${
        isActive ? 'border-2 shadow-md' : 'border-gray-200'
      }`}
      style={isActive ? { borderColor: colors.bg } : {}}
    >
      {/* Shelf label (like the aisle header in a library) */}
      <button
        onClick={() => { onSelect(); setExpanded(ea => !ea); }}
        className="w-full flex items-center justify-between px-5 py-3.5 text-left"
        style={{ background: isActive ? colors.bg : '#f8f7f4' }}
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{colors.icon}</span>
          <div>
            <h2 className={`font-black text-sm uppercase tracking-wider ${isActive ? 'text-white' : 'text-gray-800'}`}>
              {category.name}
            </h2>
            <p className={`text-xs font-medium ${isActive ? 'text-white/70' : 'text-gray-400'}`}>
              {category.count} {category.count === 1 ? 'article' : 'articles'}
            </p>
          </div>
          {category.isNew && (
            <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-green-100 text-green-700'}`}>
              NEW
            </span>
          )}
        </div>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${expanded ? 'rotate-180' : ''} ${isActive ? 'text-white' : 'text-gray-400'}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Article spines on the shelf */}
      {isActive && (
        <div className="p-4 bg-white">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {topArticles.map((a, i) => (
              <BookSpine key={a.slug} article={a} index={i} />
            ))}
          </div>
          {articles.length > 4 && (
            <button
              onClick={() => setExpanded(e => !e)}
              className="mt-4 w-full py-2 text-xs font-bold rounded-lg border-2 border-dashed transition-colors"
              style={{ borderColor: colors.border, color: colors.bg }}
            >
              {expanded
                ? '↑ Show fewer articles'
                : `↓ Show ${articles.length - 4} more in this aisle`}
            </button>
          )}
        </div>
      )}
    </section>
  );
}

// Reading table: top featured stories hero
function ReadingTable({ articles }: { articles: LibraryArticle[] }) {
  const [active, setActive] = useState(0);
  const featured = articles.slice(0, 5);
  const hero = featured[active];
  if (!hero) return null;

  const heroColors = getCategoryColor(hero.category);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-8">
      {/* Header bar */}
      <div className="flex items-center justify-between px-5 py-3 bg-[#0f0c1f] border-b border-[#1e1a3f]">
        <div className="flex items-center gap-2">
          <span className="text-blue-400 text-sm">📖</span>
          <span className="text-blue-100 text-xs font-bold uppercase tracking-widest">Reading Table</span>
          <span className="text-purple-400 text-xs">— Top Stories</span>
        </div>
        <div className="flex items-center gap-1">
          {featured.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === active ? 'bg-blue-400 w-4' : 'bg-white/20 hover:bg-white/40'}`}
              aria-label={`Story ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Hero story */}
        <Link href={hero.slug} className="group flex-1 p-7 hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full"
              style={{ background: heroColors.bg, color: '#fff' }}
            >
              {heroColors.icon} {hero.category}
            </span>
            {hero.urgent && (
              <span className="text-xs font-black px-3 py-1 rounded-full bg-red-100 text-red-700 animate-pulse">
                🔴 BREAKING
              </span>
            )}
            <span className="text-xs text-gray-400">{hero.relativeDate}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 group-hover:text-blue-700 transition-colors leading-tight mb-4">
            {hero.title}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5 line-clamp-3">
            {hero.excerpt}
          </p>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-xs font-black text-gray-600">{hero.author?.charAt(0)}</span>
            </div>
            <span className="font-medium text-gray-700">{hero.author}</span>
            {hero.readTime && <><span>·</span><span>📖 {hero.readTime}</span></>}
          </div>
        </Link>

        {/* Side queue */}
        {featured.length > 1 && (
          <div className="lg:w-72 lg:border-l border-t lg:border-t-0 border-gray-100 divide-y divide-gray-100">
            {featured.filter((_, i) => i !== active).slice(0, 4).map((a, i) => {
              const c = getCategoryColor(a.category);
              return (
                <Link
                  key={a.slug}
                  href={a.slug}
                  className="group flex items-start gap-3 p-4 hover:bg-gray-50 transition-colors"
                  onMouseEnter={() => setActive(featured.indexOf(a))}
                >
                  <div className="w-1 self-stretch rounded-full shrink-0 mt-0.5" style={{ background: c.bg }} />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: c.bg }}>
                      {a.category}
                    </span>
                    <h4 className="text-xs font-bold text-gray-800 group-hover:text-blue-700 transition-colors leading-snug line-clamp-2 mt-0.5">
                      {a.title}
                    </h4>
                    <time className="text-[10px] text-gray-400 mt-1 block">{a.relativeDate}</time>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main library component ───────────────────────────────────────────────────

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
  const [viewMode, setViewMode] = useState<ViewMode>('shelves');
  const searchRef = useRef<HTMLInputElement>(null);

  // ── Keyboard shortcut: / to focus search ──
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

  // ── Filtered articles ──
  const filtered = useMemo(() => {
    let results = articles;
    if (query.trim()) {
      const q = query.toLowerCase();
      results = results.filter(
        a =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.author.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q)
      );
    }
    if (activeCat) {
      results = results.filter(a => normalizeCategory(a.category) === activeCat);
    }
    return results;
  }, [articles, query, activeCat]);

  // ── Articles grouped by category (for shelf view) ──
  const grouped = useMemo(() => {
    const map = new Map<string, LibraryArticle[]>();
    filtered.forEach(a => {
      const key = normalizeCategory(a.category);
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(a);
    });
    return map;
  }, [filtered]);

  const isSearching = query.trim().length > 0 || activeCat !== null;

  return (
    <div className="min-h-screen" style={{ background: '#faf9f6' }}>

      {/* Breaking ticker */}
      {urgentTicker.length > 0 && <TickerBanner headlines={urgentTicker} />}

      {/* ── Library Masthead ──────────────────────────────────────── */}
      <header style={{ background: 'linear-gradient(180deg, #0f0c1f 0%, #1a1340 60%, #2d1b69 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 py-10">
          {/* Date & edition */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">📚 The ObjectWire Library</span>
              <span className="text-purple-600/50 text-[10px]">|</span>
              <span className="text-purple-300 text-[11px]">{today}</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-blue-300 text-[11px]">{articlesThisWeek} new this week</span>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-2">
              ObjectWire News
            </h1>
            <p className="text-blue-300 text-sm">
              {totalArticles} volumes in the collection — browse by aisle, search, or explore
            </p>
          </div>

          {/* Card catalog search bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 bg-white/10 border-2 border-blue-500 rounded-xl px-4 py-3 shadow-inner">
              <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={searchRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={`Search ${totalArticles} articles… (press / to focus)`}
                className="flex-1 bg-transparent text-white placeholder:text-blue-300/60 text-base font-medium focus:outline-none"
              />
              {query && (
                <button onClick={() => setQuery('')} className="text-blue-300 hover:text-white shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            {query && (
              <p className="text-blue-300 text-xs text-center mt-2">
                {filtered.length} result{filtered.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
              </p>
            )}
          </div>
        </div>

        {/* ── Aisle Navigation (category strip) ── */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
              {/* All button */}
              <button
                onClick={() => { setActiveCat(null); }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                  activeCat === null && !query
                    ? 'bg-blue-500 text-white'
                    : 'text-blue-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                🗂️ All Aisles
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${activeCat === null && !query ? 'bg-white/20' : 'bg-white/10'}`}>
                  {totalArticles}
                </span>
              </button>

              {categories.map(cat => {
                const colors = getCategoryColor(cat.rawName);
                const isActive = activeCat === cat.rawName;
                return (
                  <button
                    key={cat.rawName}
                    onClick={() => setActiveCat(isActive ? null : cat.rawName)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                      isActive
                        ? 'text-white shadow'
                        : 'text-blue-300 hover:bg-white/10 hover:text-white'
                    }`}
                    style={isActive ? { background: colors.bg } : {}}
                  >
                    <span>{colors.icon}</span>
                    {cat.name}
                    {cat.isNew && <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />}
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-white/10'}`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* ── Main floor ────────────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 py-8">

        {/* View toggle + result count bar */}
        <div className="flex items-center justify-between mb-6">
          <div>
            {isSearching ? (
              <div>
                <p className="font-bold text-gray-800">
                  {filtered.length} article{filtered.length !== 1 ? 's' : ''}{' '}
                  {activeCat && <span>in <span style={{ color: getCategoryColor(activeCat).bg }}>{activeCat}</span></span>}
                  {query && <span> matching &ldquo;{query}&rdquo;</span>}
                </p>
                <button
                  onClick={() => { setQuery(''); setActiveCat(null); }}
                  className="text-xs text-blue-600 hover:underline mt-0.5"
                >
                  ← Clear filters &amp; browse all
                </button>
              </div>
            ) : (
              <p className="font-bold text-gray-800">
                {totalArticles} articles across {categories.length} aisles
              </p>
            )}
          </div>
          <ViewToggle mode={viewMode} onChange={setViewMode} />
        </div>

        {/* ── Reading Table (hero — only when not searching) ── */}
        {!isSearching && viewMode === 'shelves' && (
          <ReadingTable articles={articles.filter(a => !a.isUpdated || a.urgent).slice(0, 5)} />
        )}

        {/* ── SHELVES VIEW ── */}
        {viewMode === 'shelves' && (
          <div>
            {isSearching ? (
              // When searching, show flat grid of results
              filtered.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filtered.map((a, i) => <BookSpine key={a.slug} article={a} index={i} />)}
                </div>
              ) : (
                <div className="text-center py-20 text-gray-400">
                  <div className="text-5xl mb-4">🔍</div>
                  <p className="font-bold text-lg text-gray-600">No articles found</p>
                  <p className="text-sm mt-1">Try a different search term or browse an aisle</p>
                </div>
              )
            ) : (
              // Default: one aisle/shelf per category
              <div>
                {categories
                  .filter(cat => (grouped.get(cat.rawName) ?? []).length > 0)
                  .map(cat => (
                    <AisleShelf
                      key={cat.rawName}
                      category={cat}
                      articles={grouped.get(cat.rawName) ?? []}
                      isActive={activeCat === cat.rawName || activeCat === null}
                      onSelect={() => setActiveCat(activeCat === cat.rawName ? null : cat.rawName)}
                    />
                  ))}
              </div>
            )}
          </div>
        )}

        {/* ── GRID VIEW ── */}
        {viewMode === 'grid' && (
          <div>
            {filtered.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map(a => <BookCard key={a.slug} article={a} />)}
              </div>
            ) : (
              <div className="text-center py-20 text-gray-400">
                <div className="text-5xl mb-4">📚</div>
                <p className="font-bold text-lg text-gray-600">No articles found</p>
              </div>
            )}
          </div>
        )}

        {/* ── LIST VIEW ── */}
        {viewMode === 'list' && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <span className="font-bold text-gray-800 text-sm">
                {filtered.length} article{filtered.length !== 1 ? 's' : ''}
              </span>
            </div>
            {filtered.length > 0 ? (
              <div className="px-4 py-2 divide-y divide-gray-100">
                {filtered.map((a, i) => (
                  <ListRow key={a.slug} article={a} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-gray-400">
                <p className="font-bold">No articles match your filters</p>
              </div>
            )}
          </div>
        )}

        {/* ── Library stats footer ── */}
        <div className="mt-16 rounded-2xl overflow-hidden" style={{ background: '#0f0c1f' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1e1a3f]">
            {[
              { value: `${totalArticles}`, label: 'Volumes' },
              { value: `${articlesThisWeek}+`, label: 'Added This Week' },
              { value: `${categories.length}`, label: 'Aisles' },
              { value: '100%', label: 'Source Verified' },
            ].map(stat => (
              <div key={stat.label} className="py-8 text-center">
                <div className="text-3xl font-black text-blue-300">{stat.value}</div>
                <div className="text-xs text-purple-400 font-bold uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="border-t border-[#1e1a3f] px-6 py-5">
            <div className="flex flex-wrap justify-center gap-6 text-xs text-purple-400">
              <Link href="/editorial-standards" className="hover:text-blue-300 transition-colors">Editorial Standards</Link>
              <Link href="/about" className="hover:text-blue-300 transition-colors">About ObjectWire</Link>
              <Link href="/rss.xml" className="hover:text-blue-300 transition-colors">RSS Feed</Link>
              <Link href="/corrections" className="hover:text-blue-300 transition-colors">Corrections</Link>
              <Link href="/authors" className="hover:text-blue-300 transition-colors">Authors</Link>
              <Link href="/privacy-policy" className="hover:text-blue-300 transition-colors">Privacy</Link>
            </div>
            <p className="text-center text-purple-800 text-[11px] mt-4">
              © {new Date().getFullYear()} ObjectWire. Independent journalism, always.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}
