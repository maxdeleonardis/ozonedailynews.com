'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { ContentEntry } from '@/lib/content-registry';
import { inferTopicTag, TopicTag } from '@/components/NewsArticle';

interface Props {
  articles: ContentEntry[];
}

interface GA4Row {
  slug: string;
  views: number;
}

interface GA4SlugResponse {
  source: string;
  views: Record<string, number>;
}

function formatViews(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toLocaleString();
}

function timeAgo(dateStr: string): string {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function HeroLatestFeed({ articles }: Props) {
  const [viewMap, setViewMap] = useState<Map<string, number>>(new Map());
  const [isLive, setIsLive] = useState(false);

  // Stable string dependency — avoids re-firing when the array reference changes
  const slugsKey = articles.map((a) => a.slug).join(',');

  useEffect(() => {
    if (!slugsKey) return;
    const controller = new AbortController();
    fetch(`/api/popular-articles?slugs=${encodeURIComponent(slugsKey)}`, { signal: controller.signal })
      .then((r) => r.json())
      .then((data: GA4SlugResponse) => {
        if (data.source === 'ga4' && data.views) {
          setViewMap(new Map(Object.entries(data.views)));
          setIsLive(true);
        }
      })
      .catch(() => {/* silently fall back to no view counts */});
    return () => controller.abort();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slugsKey]);

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-1">
        <div className="flex items-center gap-2">
          <h2 className="text-xs font-black tracking-widest uppercase">Latest Headlines</h2>
          {isLive && (
            <span className="text-[10px] font-bold text-green-600 tracking-wide">● LIVE</span>
          )}
        </div>
        <Link href="/news" className="text-xs font-bold text-blue-600 hover:underline">
          All Stories →
        </Link>
      </div>

      <ul className="divide-y divide-gray-100 flex-1">
        {articles.map((article, i) => {
          const displayViews = viewMap.get(article.slug) ?? 0;
          return (
            <li key={article.slug}>
              <Link
                href={article.slug}
                className="group flex items-start gap-3 py-3 hover:bg-gray-50/80 -mx-2 px-2 rounded transition-colors"
              >
                {/* Rank number */}
                <span className={`text-lg font-black leading-none mt-0.5 w-7 shrink-0 tabular-nums text-right ${
                  i === 0 ? 'text-black' : i <= 2 ? 'text-gray-400' : 'text-gray-200'
                }`}>
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="flex-1 min-w-0">
                  {/* Category tag + view count on same row */}
                  <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                    <TopicTag
                      topic={inferTopicTag(article.category, article.slug)}
                      size="xs"
                      showIcon={false}
                    />
                    {displayViews > 0 && (
                      <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-gray-400 tabular-nums">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3" aria-hidden="true">
                          <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                          <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41Z" clipRule="evenodd" />
                        </svg>
                        {formatViews(displayViews)}
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm font-bold leading-snug group-hover:text-gray-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  {article.description && (
                    <p className="text-xs text-gray-500 mt-0.5 line-clamp-1 leading-relaxed">
                      {article.description}
                    </p>
                  )}
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-400 mt-1">
                    <span className="font-medium text-gray-600">{article.author}</span>
                    <span>•</span>
                    <span>{timeAgo(article.publishDate)}</span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
