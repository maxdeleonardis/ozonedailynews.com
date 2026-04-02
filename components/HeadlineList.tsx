'use client';

import { useState } from 'react';
import Link from 'next/link';

// ── Types (mirrored from page) ────────────────────────────────────────────────

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
};

// ── Helpers ───────────────────────────────────────────────────────────────────

const CAT_BG: Record<string, string> = {
  news:            'bg-gray-900',
  tech:            'bg-blue-700',
  technology:      'bg-blue-700',
  finance:         'bg-emerald-700',
  entertainment:   'bg-purple-700',
  world:           'bg-indigo-700',
  science:         'bg-teal-700',
  sports:          'bg-orange-600',
  culture:         'bg-pink-700',
  gaming:          'bg-violet-700',
  'video-games':   'bg-violet-700',
  politics:        'bg-red-800',
  youtube:         'bg-red-600',
  'winter-olympics':'bg-sky-700',
  'world-cup':     'bg-green-700',
  'formula-1':     'bg-red-700',
  crypto:          'bg-amber-600',
  saas:            'bg-cyan-700',
  music:           'bg-fuchsia-700',
  breaking:        'bg-red-600',
  blackrock:       'bg-gray-800',
  shopify:         'bg-green-600',
  equipment:       'bg-slate-700',
  events:          'bg-indigo-600',
  legal:           'bg-red-900',
  infrastructure:  'bg-stone-700',
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

// ── Main component ────────────────────────────────────────────────────────────

const INITIAL_COUNT = 10;
const LOAD_MORE_COUNT = 10;

export default function HeadlineList({ articles }: { articles: Article[] }) {
  const [visible, setVisible] = useState(INITIAL_COUNT);

  const shown = articles.slice(0, visible);
  const hasMore = visible < articles.length;

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-x-8 content-start">
        {shown.map((article) => (
          <Link
            key={article.id}
            href={article.href}
            className="group flex gap-2 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 -mx-2 px-2 transition-colors"
          >
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
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisible((v) => v + LOAD_MORE_COUNT)}
            className="px-6 py-2.5 border-2 border-black text-[11px] font-black tracking-[.2em] uppercase hover:bg-black hover:text-white transition-all duration-150"
          >
            Load More Posts
          </button>
        </div>
      )}
    </>
  );
}
