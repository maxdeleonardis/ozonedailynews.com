'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { ContentEntry } from '@/lib/content-registry';
import { inferTopicTag, TopicTag } from '@/components/NewsArticle';

interface Props {
  // Fallback curated articles used only if GA4 returns no data
  featuredArticle: ContentEntry;
  secondaryArticles: ContentEntry[];
}

interface GA4Row {
  slug: string;
  views: number;
  title: string;
  category: string;
  publishDate: string;
  author: string;
  description?: string;
}

interface GA4RankedResponse {
  source: string;
  rows: GA4Row[];
}

function formatViews(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toLocaleString();
}

function timeAgo(dateStr: string): string {
  if (!dateStr) return '';
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function cleanTitle(title: string): string {
  return title.replace(/\s*\|\s*ObjectWire\s*$/i, '').trim();
}

export default function HeroLeadSection({ featuredArticle, secondaryArticles }: Props) {
  const [items, setItems] = useState<GA4Row[]>([]);
  const [isLive, setIsLive] = useState(false);

  // Build fallback list from curated props
  const fallback: GA4Row[] = [featuredArticle, ...secondaryArticles.slice(0, 7)].map((a) => ({
    slug: a.slug,
    views: 0,
    title: a.title,
    category: a.category,
    publishDate: a.publishDate,
    author: a.author,
    description: a.description,
  }));

  useEffect(() => {
    const controller = new AbortController();
    // Use the ranked ?limit= endpoint — same as MostReadSection — so we get real GA4-ordered data with views
    fetch('/api/popular-articles?limit=8', { signal: controller.signal })
      .then((r) => r.json())
      .then((data: GA4RankedResponse) => {
        if (data.source === 'ga4' && data.rows?.length > 0) {
          setItems(data.rows.slice(0, 8));
          setIsLive(true);
        } else {
          setItems(fallback);
        }
      })
      .catch(() => setItems(fallback));
    return () => controller.abort();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Render fallback immediately (SSR-safe), replaced by GA4 data on mount
  const displayItems = items.length > 0 ? items : fallback;
  const featured = displayItems[0];
  const secondary = displayItems.slice(1, 8);

  return (
    <div className="lg:col-span-7 flex flex-col gap-8">
      {/* Section header */}
      <div className="flex items-center justify-between border-b-2 border-black pb-2">
        <div className="flex items-center gap-2">
          <h2 className="text-xs font-black tracking-widest uppercase">Most Popular</h2>
          {isLive && (
            <span className="text-[10px] font-bold text-green-600 tracking-wide">● LIVE</span>
          )}
        </div>
        <Link href="/news" className="text-xs font-bold text-blue-600 hover:underline">
          All Stories →
        </Link>
      </div>

      {featured && (
        <>
          {/* ── Featured (rank #1) ── */}
          <Link href={featured.slug} className="group block border-b border-gray-200 pb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-3xl font-black text-gray-100 leading-none select-none tabular-nums">01</span>
              <TopicTag topic={inferTopicTag(featured.category, featured.slug)} size="sm" />
              {featured.views > 0 && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-400 tabular-nums ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                    <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41Z" clipRule="evenodd" />
                  </svg>
                  {formatViews(featured.views)}
                </span>
              )}
            </div>

            <h3 className="text-3xl md:text-4xl font-black leading-[1.1] mb-3 group-hover:text-gray-600 transition-colors">
              {cleanTitle(featured.title)}
            </h3>

            {featured.description && (
              <p className="text-base text-gray-600 leading-relaxed mb-3 line-clamp-2">
                {featured.description}
              </p>
            )}

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="font-bold text-black">{featured.author}</span>
              {featured.publishDate && (
                <>
                  <span>•</span>
                  <span>{timeAgo(featured.publishDate)}</span>
                </>
              )}
            </div>
          </Link>

          {/* ── Secondary stories (ranks #2–8) ── */}
          <ul className="divide-y divide-gray-100">
            {secondary.map((article, i) => (
              <li key={article.slug}>
                <Link
                  href={article.slug}
                  className="group flex items-start gap-3 hover:bg-gray-50/80 -mx-2 px-2 py-3 rounded transition-colors"
                >
                  <span className="text-lg font-black leading-none mt-0.5 w-7 shrink-0 tabular-nums text-right text-gray-200">
                    {String(i + 2).padStart(2, '0')}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                      <TopicTag topic={inferTopicTag(article.category, article.slug)} size="xs" showIcon={false} />
                      {article.views > 0 && (
                        <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-gray-400 tabular-nums">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3" aria-hidden="true">
                            <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                            <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41Z" clipRule="evenodd" />
                          </svg>
                          {formatViews(article.views)}
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm font-bold leading-snug group-hover:text-gray-600 transition-colors line-clamp-2">
                      {cleanTitle(article.title)}
                    </h3>

                    <div className="flex items-center gap-1.5 text-[10px] text-gray-400 mt-1">
                      <span className="font-medium text-gray-600">{article.author}</span>
                      {article.publishDate && (
                        <>
                          <span>•</span>
                          <span>{timeAgo(article.publishDate)}</span>
                        </>
                      )}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
