'use client';

/**
 * PopularCarousel — auto-advancing featured news carousel
 *
 * Replaces the static hero section on the homepage.
 *
 * Layout:
 *   LEFT  — Large featured panel: full 16:9 thumbnail with gradient overlay,
 *            category pill, headline, excerpt, author. Crossfades every 7s.
 *   RIGHT — Vertical list of up to 9 articles with rank badges and thumbnails.
 *            Active item has a left accent bar + countdown progress stripe.
 *            Clicking any item jumps to it and resets the timer.
 *   MOBILE — Featured on top, horizontal snap-scroll strip below.
 */

import React, { useEffect, useRef, useState, useCallback } from 'react';
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
  breaking?: boolean;
};

const INTERVAL_MS = 7000;

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 2) return 'Just now';
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 7) return `${d}d ago`;
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

const CAT_COLORS: Record<string, string> = {
  Tech:          'bg-blue-600',
  Technology:    'bg-blue-600',
  AI:            'bg-violet-600',
  Gaming:        'bg-green-600',
  Finance:       'bg-emerald-700',
  Crypto:        'bg-orange-500',
  Entertainment: 'bg-pink-600',
  Politics:      'bg-red-600',
  Science:       'bg-cyan-600',
  Sports:        'bg-yellow-500',
  World:         'bg-indigo-600',
  Culture:       'bg-rose-500',
  News:          'bg-gray-700',
};
function catColor(cat: string) { return CAT_COLORS[cat] ?? 'bg-gray-700'; }

// ─── Featured panel ────────────────────────────────────────────────────────────
function FeaturedPanel({
  article,
  rank,
  isMostRead,
  visible,
}: {
  article: PopularArticle;
  rank: number;
  isMostRead: boolean;
  visible: boolean;
}) {
  return (
    <Link href={article.href} className="group block">
      <div
        className="relative w-full overflow-hidden bg-gray-900 transition-opacity duration-300"
        style={{ aspectRatio: '16/9', maxHeight: 460, opacity: visible ? 1 : 0 }}
      >
        {article.imageUrl ? (
          <Image
            src={article.imageUrl}
            alt={article.imageAlt ?? article.title}
            fill
            priority={rank === 1}
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover group-hover:scale-[1.025] transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-900">
            <span className="text-white text-6xl font-black tracking-tighter opacity-10">OW</span>
          </div>
        )}
        {/* gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/25 to-transparent" />

        {/* top badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          {isMostRead && (
            <span className="inline-flex items-center gap-1 text-[9px] font-black px-2 py-0.5 tracking-[.18em] uppercase bg-white text-black">
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20">
                <path d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-1.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" />
              </svg>
              Most Read
            </span>
          )}
          {article.breaking && (
            <span className="text-[9px] font-black px-2 py-0.5 tracking-[.18em] uppercase bg-red-600 text-white">
              Breaking
            </span>
          )}
        </div>

        {/* bottom overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <span className={`inline-block text-[9px] font-black px-2 py-0.5 tracking-widest uppercase text-white mb-3 ${catColor(article.category)}`}>
            {article.category}
          </span>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-black leading-tight text-white group-hover:underline decoration-2 mb-2">
            {article.title}
          </h2>
          {article.excerpt && (
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 mb-3 hidden sm:block max-w-2xl">
              {article.excerpt}
            </p>
          )}
          <div className="flex items-center gap-3">
            <p className="text-[10px] text-gray-400 font-mono">
              <span className="font-semibold text-white">{article.author}</span>
              {' · '}{timeAgo(article.publishDate)}
            </p>
            <span className="text-[9px] font-black tracking-widest uppercase text-gray-400 border border-gray-600 px-2 py-0.5 hover:bg-white hover:text-black transition-colors">
              Read →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────
interface PopularCarouselProps {
  articles: PopularArticle[];
  isMostRead?: boolean;
}

export default function PopularCarousel({ articles, isMostRead = false }: PopularCarouselProps) {
  if (!articles || articles.length === 0) return null;

  const items = articles.slice(0, 10);
  const [activeIdx, setActiveIdx] = useState(0);
  const [visibleIdx, setVisibleIdx] = useState(0);   // trails activeIdx for crossfade
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollRailToActive = useCallback((idx: number) => {
    const child = railRef.current?.children[idx] as HTMLElement | undefined;
    child?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, []);

  const goTo = useCallback((idx: number) => {
    setActiveIdx(idx);
    setProgress(0);
    // brief fade: hide, swap content, show
    setVisibleIdx(-1);
    setTimeout(() => { setVisibleIdx(idx); scrollRailToActive(idx); }, 200);
  }, [scrollRailToActive]);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    setProgress(0);
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + (100 / (INTERVAL_MS / 50)), 100));
    }, 50);
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => {
        const next = (prev + 1) % items.length;
        setProgress(0);
        setVisibleIdx(-1);
        setTimeout(() => { setVisibleIdx(next); scrollRailToActive(next); }, 200);
        return next;
      });
    }, INTERVAL_MS);
  }, [items.length, scrollRailToActive]);

  useEffect(() => {
    setVisibleIdx(0);
    if (!paused) startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  const handleSelect = (idx: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    goTo(idx);
    if (!paused) startTimer();
  };

  return (
    <section
      className="w-full border-b-2 border-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Header bar ─────────────────────────────────────────────────── */}
      <div className="flex items-center gap-2 pb-3 border-b border-gray-200 mb-0">
        <span className="text-[9px] font-black tracking-[.3em] uppercase text-white bg-black px-2.5 py-1.5 shrink-0">
          Top Stories
        </span>
        <div className="h-px flex-1 bg-gray-200" />
        <span className="text-[9px] font-mono text-gray-400 tabular-nums shrink-0">
          {String(activeIdx + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </span>
        <button
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? 'Play' : 'Pause'}
          className="w-6 h-6 border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all text-gray-500 text-[10px] shrink-0"
        >
          {paused ? '▶' : '❚❚'}
        </button>
        <button
          onClick={() => handleSelect((activeIdx - 1 + items.length) % items.length)}
          aria-label="Previous"
          className="w-6 h-6 border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all text-gray-500 text-xs shrink-0"
        >‹</button>
        <button
          onClick={() => handleSelect((activeIdx + 1) % items.length)}
          aria-label="Next"
          className="w-6 h-6 border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all text-gray-500 text-xs shrink-0"
        >›</button>
      </div>

      {/* ── Body ───────────────────────────────────────────────────────── */}
      <div className="grid lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_340px] gap-0">

        {/* ── Featured panel ── */}
        <div className="border-r border-gray-200">
          <FeaturedPanel
            article={items[activeIdx]}
            rank={activeIdx + 1}
            isMostRead={isMostRead && activeIdx === 0}
            visible={visibleIdx === activeIdx}
          />
        </div>

        {/* ── Vertical rail (desktop) ── */}
        <div
          ref={railRef}
          className="hidden lg:flex flex-col overflow-y-auto divide-y divide-gray-100"
          style={{ maxHeight: 460 }}
        >
          {items.map((article, idx) => (
            <button
              key={article.href}
              onClick={() => handleSelect(idx)}
              className={`group relative flex items-start gap-2.5 p-3 text-left transition-colors
                ${idx === activeIdx
                  ? 'bg-gray-50 border-l-[3px] border-l-black'
                  : 'hover:bg-gray-50 border-l-[3px] border-l-transparent'
                }`}
            >
              {/* progress stripe */}
              {idx === activeIdx && !paused && (
                <div
                  className="absolute bottom-0 left-0 h-[2px] bg-black"
                  style={{ width: `${progress}%`, transition: 'width 50ms linear' }}
                />
              )}
              {/* rank */}
              <span className={`shrink-0 w-5 h-5 flex items-center justify-center text-[9px] font-black leading-none mt-0.5
                ${idx === activeIdx ? 'bg-black text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-800 group-hover:text-white'}`}>
                {idx + 1}
              </span>
              {/* thumb */}
              <div className="relative shrink-0 w-[60px] h-[40px] overflow-hidden bg-gray-100">
                {article.imageUrl ? (
                  <Image src={article.imageUrl} alt={article.imageAlt ?? article.title} fill sizes="60px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-800">
                    <span className="text-white text-[7px] font-black opacity-30">OW</span>
                  </div>
                )}
              </div>
              {/* text */}
              <div className="flex-1 min-w-0">
                <span className={`inline-block text-[7px] font-black tracking-widest uppercase mb-1 px-1.5 py-0.5 text-white ${catColor(article.category)}`}>
                  {article.category}
                </span>
                <p className={`text-[11px] leading-snug line-clamp-2 font-black
                  ${idx === activeIdx ? 'text-black' : 'text-gray-700 group-hover:text-black'}`}>
                  {article.title}
                </p>
                <p className="text-[9px] text-gray-400 font-mono mt-0.5 truncate">
                  {article.author} · {timeAgo(article.publishDate)}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* ── Mobile horizontal strip ── */}
        <div
          className="lg:hidden flex gap-2 overflow-x-auto scrollbar-hide px-0 pb-2 pt-3 col-span-full"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {items.map((article, idx) => (
            <button
              key={article.href}
              onClick={() => handleSelect(idx)}
              style={{ scrollSnapAlign: 'start' }}
              className={`shrink-0 w-32 flex flex-col border-2 transition-colors text-left
                ${idx === activeIdx ? 'border-black' : 'border-gray-200'}`}
            >
              <div className="relative w-full bg-gray-100 overflow-hidden" style={{ aspectRatio: '16/9' }}>
                {article.imageUrl && (
                  <Image src={article.imageUrl} alt={article.title} fill sizes="128px" className="object-cover" />
                )}
                <div className={`absolute top-1 left-1 w-4 h-4 flex items-center justify-center text-[9px] font-black
                  ${idx === activeIdx ? 'bg-black text-white' : 'bg-white/90 text-black'}`}>
                  {idx + 1}
                </div>
              </div>
              <p className="text-[9px] font-black leading-snug line-clamp-2 p-1.5">{article.title}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
