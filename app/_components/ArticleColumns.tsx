'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { ContentEntry } from '@/lib/content-registry';

// ─── Types ───────────────────────────────────────────────────────────────────

interface PopularRow {
  slug: string;
  views: number;
  title: string;
  category: string;
  publishDate: string;
  author: string;
  description?: string;
}

interface LatestRow extends ContentEntry {
  views: number;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const CATEGORY_COLORS: Record<string, string> = {
  news:           'bg-red-100 text-red-700',
  tech:           'bg-blue-100 text-blue-700',
  technology:     'bg-blue-100 text-blue-700',
  finance:        'bg-green-100 text-green-700',
  entertainment:  'bg-purple-100 text-purple-700',
  sports:         'bg-orange-100 text-orange-700',
  investigations: 'bg-yellow-100 text-yellow-800',
  'winter-olympics': 'bg-sky-100 text-sky-700',
  disney:         'bg-pink-100 text-pink-700',
  'open-ai':      'bg-teal-100 text-teal-700',
  google:         'bg-blue-100 text-blue-700',
  nvidia:         'bg-green-100 text-green-700',
  microsoft:      'bg-indigo-100 text-indigo-700',
  elon:           'bg-gray-100 text-gray-700',
  formula:        'bg-red-100 text-red-700',
};

function tagColor(category: string): string {
  const key = category?.toLowerCase().split('/')[0] ?? '';
  return CATEGORY_COLORS[key] ?? 'bg-gray-100 text-gray-600';
}

function tagLabel(category: string, slug: string): string {
  if (slug.includes('winter-olympics')) return 'Olympics';
  if (slug.includes('formula-1'))       return 'Formula 1';
  if (slug.includes('open-ai'))         return 'OpenAI';
  if (slug.includes('elon-musk'))       return 'Elon Musk';
  const raw = category?.split('/')[0] ?? 'news';
  return raw.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function timeAgo(dateStr: string): string {
  if (!dateStr) return '';
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins  = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days  = Math.floor(diff / 86400000);
  if (mins < 60)   return `${mins}m ago`;
  if (hours < 24)  return `${hours}h ago`;
  if (days === 1)  return 'Yesterday';
  if (days < 7)    return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function ViewCount({ n }: { n: number }) {
  if (n <= 0) return null;
  return (
    <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-gray-400 tabular-nums">
      <svg className="w-2.5 h-2.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 3C5 3 1.7 7.6 1 10c.7 2.4 4 7 9 7s8.3-4.6 9-7c-.7-2.4-4-7-9-7zm0 12a5 5 0 110-10A5 5 0 0110 15zm0-8a3 3 0 100 6 3 3 0 000-6z" />
      </svg>
      {n.toLocaleString()}
    </span>
  );
}

function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-green-600 tracking-wider">
      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
      LIVE
    </span>
  );
}

function Tag({ category, slug }: { category: string; slug: string }) {
  return (
    <span className={`inline-block text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${tagColor(category)}`}>
      {tagLabel(category, slug)}
    </span>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

interface Props {
  latestArticles: ContentEntry[];
}

export default function ArticleColumns({ latestArticles }: Props) {
  const [popular,     setPopular]     = useState<PopularRow[]>([]);
  const [latestViews, setLatestViews] = useState<Record<string, number>>({});
  const [isLive,      setIsLive]      = useState(false);

  useEffect(() => {
    // Fetch the 8 most-read articles from GA4 (ranked)
    fetch('/api/popular-articles?limit=8')
      .then(r => r.json())
      .then(data => {
        if (data.rows?.length) {
          setPopular(data.rows);
          setIsLive(data.source === 'ga4');
        }
      })
      .catch(() => {});

    // Fetch view counts for the latest articles
    if (latestArticles.length === 0) return;
    const slugs = latestArticles.map(a => a.slug).join(',');
    fetch(`/api/popular-articles?slugs=${encodeURIComponent(slugs)}`)
      .then(r => r.json())
      .then(data => {
        if (data.views) setLatestViews(data.views);
      })
      .catch(() => {});
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const latestRows: LatestRow[] = latestArticles.map(a => ({
    ...a,
    views: latestViews[a.slug] ?? 0,
  }));

  const hero     = popular[0];
  const runnerUp = popular.slice(1);

  return (
    <section className="grid lg:grid-cols-12 gap-8 mb-14">

      {/* ── LEFT: Most Popular ──────────────────────────────────────── */}
      <div className="lg:col-span-7 border-r-0 lg:border-r border-gray-300 lg:pr-8">
        <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-6">
          <h2 className="text-xs font-black tracking-widest uppercase">Most Popular</h2>
          {isLive && <LiveBadge />}
        </div>

        {/* Hero popular article */}
        {hero ? (
          <article className="mb-6 pb-6 border-b border-gray-200">
            <Link href={hero.slug} className="group block">
              <div className="flex items-center gap-2 mb-2">
                <Tag category={hero.category} slug={hero.slug} />
                <ViewCount n={hero.views} />
              </div>
              <h3 className="text-3xl md:text-4xl font-black leading-tight mb-3 group-hover:text-gray-600 transition-colors">
                {hero.title}
              </h3>
              {hero.description && (
                <p className="text-base text-gray-600 leading-relaxed mb-3 line-clamp-3">
                  {hero.description}
                </p>
              )}
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="font-semibold text-gray-600">{hero.author}</span>
                <span>·</span>
                <span>{hero.publishDate ? timeAgo(hero.publishDate) : ''}</span>
              </div>
            </Link>
          </article>
        ) : (
          /* Skeleton while loading */
          <div className="mb-6 pb-6 border-b border-gray-200 animate-pulse space-y-3">
            <div className="h-3 w-20 bg-gray-200 rounded" />
            <div className="h-8 w-full bg-gray-200 rounded" />
            <div className="h-4 w-3/4 bg-gray-100 rounded" />
          </div>
        )}

        {/* Ranked runner-up list */}
        <ul className="divide-y divide-gray-100">
          {(runnerUp.length ? runnerUp : Array(7).fill(null)).map((article, i) => (
            <li key={article?.slug ?? i}>
              {article ? (
                <Link href={article.slug} className="group flex items-start gap-3 py-3 hover:bg-gray-50 -mx-2 px-2 rounded transition-colors">
                  <span className="text-2xl font-black text-gray-200 leading-none w-7 shrink-0 text-right mt-0.5">
                    {i + 2}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <Tag category={article.category} slug={article.slug} />
                      <ViewCount n={article.views} />
                    </div>
                    <h4 className="text-sm font-bold leading-snug group-hover:text-gray-600 transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-2 text-[10px] text-gray-400 mt-1">
                      <span>{article.author}</span>
                      <span>·</span>
                      <span>{article.publishDate ? timeAgo(article.publishDate) : ''}</span>
                    </div>
                  </div>
                </Link>
              ) : (
                /* Skeleton row */
                <div className="flex items-start gap-3 py-3 animate-pulse">
                  <div className="h-6 w-6 bg-gray-200 rounded shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-16 bg-gray-200 rounded" />
                    <div className="h-4 w-full bg-gray-100 rounded" />
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* ── RIGHT: Latest Headlines ─────────────────────────────────── */}
      <aside className="lg:col-span-5">
        <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-4">
          <h2 className="text-xs font-black tracking-widest uppercase">Latest Headlines</h2>
          <div className="flex items-center gap-3">
            {isLive && <LiveBadge />}
            <Link href="/news" className="text-xs font-bold text-blue-600 hover:underline">
              All Stories →
            </Link>
          </div>
        </div>

        <ul className="divide-y divide-gray-100">
          {latestRows.map((article, i) => (
            <li key={article.slug}>
              <Link href={article.slug} className="group flex items-start gap-3 py-3.5 hover:bg-gray-50 -mx-2 px-2 rounded transition-colors">
                <span className="text-xl font-black text-gray-200 leading-none w-6 shrink-0 text-right mt-0.5">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <Tag category={article.category} slug={article.slug} />
                    <ViewCount n={article.views} />
                  </div>
                  <h3 className="text-sm font-bold leading-snug group-hover:text-gray-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400 mt-1">
                    <span>{article.author}</span>
                    <span>·</span>
                    <span>{timeAgo(article.publishDate)}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

    </section>
  );
}
