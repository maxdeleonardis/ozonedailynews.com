'use client';

/**
 * PopularCarousel
 *
 * Layout:
 *   LEFT  — Featured article: full thumbnail, title, excerpt, author
 *   RIGHT — Scrollable rail of up to 9 more articles, each with a rank
 *            number, thumbnail, title, category, and author.
 *           Prev / Next arrow buttons + drag-to-scroll on desktop.
 *           On mobile the whole section collapses to a single swipeable
 *           horizontal scroll strip.
 */

import React, { useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export type PopularArticle = {
  href: string;
  title: string;
  excerpt?: string;
  author: string;
  publishDate: string;
  category: string;
  imageUrl?: string;
  imageAlt?: string;
};

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

const CAT_COLORS: Record<string, string> = {
  Tech:          'bg-blue-600',
  Technology:    'bg-blue-600',
  AI:            'bg-violet-600',
  Gaming:        'bg-green-600',
  Finance:       'bg-emerald-600',
  Crypto:        'bg-orange-500',
  Entertainment: 'bg-pink-600',
  Politics:      'bg-red-600',
  Science:       'bg-cyan-600',
  Sports:        'bg-yellow-500',
  World:         'bg-indigo-600',
  Culture:       'bg-rose-500',
  News:          'bg-gray-700',
};

function catColor(cat: string) {
  return CAT_COLORS[cat] ?? 'bg-gray-700';
}

// ─── Featured (left panel) ────────────────────────────────────────────────────
function FeaturedCard({ article }: { article: PopularArticle }) {
  return (
    <Link href={article.href} className="group block h-full">
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100 rounded-sm">
        {article.imageUrl ? (
          <Image
            src={article.imageUrl}
            alt={article.imageAlt ?? article.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-900">
            <span className="text-white text-5xl font-black tracking-tighter opacity-20">OW</span>
          </div>
        )}
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        {/* rank badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 text-[9px] font-black px-2.5 py-1 tracking-[.2em] uppercase bg-white text-black">
            🔥 Most Popular
          </span>
        </div>
        {/* content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className={`inline-block text-[9px] font-black px-2 py-0.5 tracking-widest uppercase text-white mb-2 ${catColor(article.category)}`}>
            {article.category}
          </span>
          <h3 className="font-serif text-xl md:text-2xl font-black leading-tight text-white group-hover:underline decoration-2 mb-1.5">
            {article.title}
          </h3>
          {article.excerpt && (
            <p className="text-gray-300 text-xs leading-relaxed line-clamp-2 mb-2 hidden sm:block">
              {article.excerpt}
            </p>
          )}
          <p className="text-[10px] text-gray-400 font-mono">
            <span className="font-semibold text-white">{article.author}</span>
            {' · '}{timeAgo(article.publishDate)}
          </p>
        </div>
      </div>
    </Link>
  );
}

// ─── Rail card ────────────────────────────────────────────────────────────────
function RailCard({ article, rank }: { article: PopularArticle; rank: number }) {
  return (
    <Link
      href={article.href}
      className="group flex-shrink-0 w-48 sm:w-56 flex flex-col border border-gray-200 hover:border-black hover:shadow-md transition-all rounded-sm overflow-hidden bg-white"
    >
      {/* thumbnail */}
      <div className="relative w-full aspect-[16/9] bg-gray-100 overflow-hidden shrink-0">
        {article.imageUrl ? (
          <Image
            src={article.imageUrl}
            alt={article.imageAlt ?? article.title}
            fill
            sizes="224px"
            className="object-cover group-hover:scale-[1.04] transition-transform duration-400"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-900">
            <span className="text-white text-xl font-black tracking-tighter opacity-20">OW</span>
          </div>
        )}
        {/* rank badge */}
        <div className="absolute top-2 left-2 w-6 h-6 bg-black flex items-center justify-center">
          <span className="text-[10px] font-black text-white leading-none">{rank}</span>
        </div>
      </div>
      {/* text */}
      <div className="p-2.5 flex flex-col flex-1">
        <span className={`inline-block text-[8px] font-black px-1.5 py-0.5 tracking-widest uppercase text-white mb-1.5 self-start ${catColor(article.category)}`}>
          {article.category}
        </span>
        <h4 className="text-xs font-black leading-snug line-clamp-3 group-hover:underline mb-auto">
          {article.title}
        </h4>
        <p className="text-[9px] text-gray-400 font-mono mt-2 pt-1.5 border-t border-gray-100 truncate">
          {article.author} · {timeAgo(article.publishDate)}
        </p>
      </div>
    </Link>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
interface PopularCarouselProps {
  articles: PopularArticle[]; // [0] = featured, [1-9] = rail
}

export default function PopularCarousel({ articles }: PopularCarouselProps) {
  if (!articles || articles.length === 0) return null;

  const [featured, ...railArticles] = articles;
  const rail = railArticles.slice(0, 9);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Drag-to-scroll state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  const scrollBy = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -240 : 240, behavior: 'smooth' });
  };

  // Mouse drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grabbing';
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft.current - (x - startX.current);
  };
  const onMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
  };

  return (
    <section className="mb-8">
      {/* section header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[9px] font-black tracking-[.3em] uppercase text-white bg-black px-2.5 py-1">
          🔥 Popular Now
        </span>
        <div className="h-px flex-1 bg-gray-200" />
        {/* arrow controls — desktop */}
        <div className="hidden sm:flex items-center gap-1.5">
          <button
            onClick={() => scrollBy('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className="w-7 h-7 border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ‹
          </button>
          <button
            onClick={() => scrollBy('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className="w-7 h-7 border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ›
          </button>
        </div>
      </div>

      {/* body — featured + rail */}
      <div className="grid lg:grid-cols-[45%_1fr] gap-4 items-start">

        {/* ── Featured article ── */}
        <div className="shrink-0">
          <FeaturedCard article={featured} />
        </div>

        {/* ── Scrollable rail ── */}
        <div className="relative min-w-0">
          {/* fade edges */}
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          )}
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          )}

          <div
            ref={scrollRef}
            onScroll={onScroll}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            className="flex gap-3 overflow-x-auto scrollbar-hide cursor-grab select-none pb-1"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {rail.map((article, i) => (
              <div key={article.href} style={{ scrollSnapAlign: 'start' }}>
                <RailCard article={article} rank={i + 2} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
