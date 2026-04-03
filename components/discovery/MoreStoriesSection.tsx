'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Minimal Article shape — matches what page.tsx passes down
export type MoreStoriesArticle = {
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
  tags?: string[];
};

const CAT_BG: Record<string, string> = {
  news:             'bg-red-600',
  tech:             'bg-blue-700',
  technology:       'bg-blue-700',
  finance:          'bg-emerald-700',
  entertainment:    'bg-purple-700',
  sports:           'bg-orange-600',
  investigations:   'bg-amber-600',
  gaming:           'bg-violet-700',
  'video-games':    'bg-violet-700',
  politics:         'bg-red-800',
  youtube:          'bg-red-600',
  'winter-olympics':'bg-sky-700',
  'world-cup':      'bg-green-700',
  'formula-1':      'bg-red-700',
  crypto:           'bg-amber-600',
  saas:             'bg-cyan-700',
  influencer:       'bg-pink-600',
  culture:          'bg-teal-600',
  science:          'bg-indigo-600',
  world:            'bg-slate-700',
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

interface Props {
  articles: MoreStoriesArticle[];
}

export function MoreStoriesSection({ articles }: Props) {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Derive unique categories present in the data, preserving rough order of first appearance
  const categories = useMemo(() => {
    const seen = new Set<string>();
    const result: string[] = [];
    for (const a of articles) {
      const key = a.category.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        result.push(a.category);
      }
    }
    return result;
  }, [articles]);

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return articles;
    return articles.filter(
      (a) => a.category.toLowerCase() === activeFilter.toLowerCase()
    );
  }, [activeFilter, articles]);

  return (
    <>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {['All', ...categories].map((cat) => {
          const isActive = activeFilter === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-[10px] font-black px-3 py-1.5 tracking-[.15em] uppercase transition-all border ${
                isActive
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-500 border-gray-300 hover:border-black hover:text-black'
              }`}
            >
              {cat.replace(/-/g, ' ')}
            </button>
          );
        })}
      </div>

      {/* Article grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 border-b-2 border-black pb-10">
        {filtered.map((a) => (
          <Link
            key={a.id}
            href={a.href}
            className="group flex flex-col bg-white border border-gray-200 hover:border-black hover:shadow-md transition-all duration-150 rounded-sm overflow-hidden"
          >
            {/* Thumbnail */}
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100 shrink-0">
              {a.imageUrl ? (
                <Image
                  src={a.imageUrl}
                  alt={a.imageAlt ?? a.title}
                  fill
                  sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                  <span className="text-gray-200 text-2xl font-black tracking-tighter">OW</span>
                </div>
              )}
              {a.breaking && (
                <span className="absolute top-2 left-2 bg-black text-white text-[9px] font-black px-2 py-0.5 uppercase tracking-widest">
                  Breaking
                </span>
              )}
            </div>

            <div className="p-4 flex-1 flex flex-col">
              <CatLabel category={a.category} breaking={false} />

              <h3 className="font-serif text-sm font-black text-gray-900 group-hover:underline underline-offset-2 leading-snug mt-2 mb-2">
                {a.title}
              </h3>

              {a.excerpt && (
                <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-2 mb-3">
                  {a.excerpt}
                </p>
              )}

              {/* Tags */}
              {a.tags && a.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {a.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[9px] px-1.5 py-0.5 bg-gray-100 text-gray-500 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-col gap-0.5 text-[10px] font-mono border-t border-gray-100 pt-2 mt-auto">
                <span className="font-semibold text-gray-700">{a.author}</span>
                <span className="text-gray-400">{timeAgo(a.publishDate)}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
