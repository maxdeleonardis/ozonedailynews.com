'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { ContentEntry } from '@/lib/content-registry';
import { inferTopicTag, TopicTag } from '@/components/NewsArticle';

interface EnrichedRow {
  slug: string;
  views: number;
  title: string;
  category: string;
  publishDate: string;
  author: string;
  description?: string;
}

interface Props {
  curatedArticles: ContentEntry[];
  hideHeader?: boolean;
}

function formatViews(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toLocaleString();
}

export default function MostReadSection({ curatedArticles, hideHeader }: Props) {
  const [items, setItems] = useState<EnrichedRow[]>([]);
  const [isLive, setIsLive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    fetch('/api/popular-articles?limit=15', { signal: controller.signal })
      .then((r) => r.json())
      .then((data: { source: string; rows: EnrichedRow[] }) => {
        if (data.source === 'ga4' && data.rows?.length > 0) {
          // API already enriches rows server-side — use directly
          setItems(data.rows);
          setIsLive(true);
        } else {
          // Fallback to curated list without view counts
          setItems(curatedArticles.map((a) => ({
            slug: a.slug,
            views: 0,
            title: a.title,
            category: a.category,
            publishDate: a.publishDate,
            author: a.author,
            description: a.description,
          })));
        }
      })
      .catch(() => {
        setItems(curatedArticles.map((a) => ({
          slug: a.slug,
          views: 0,
          title: a.title,
          category: a.category,
          publishDate: a.publishDate,
          author: a.author,
          description: a.description,
        })));
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // When rendered in combined-hero mode (hideHeader), update the external badge span
  useEffect(() => {
    if (!hideHeader) return;
    const badge = document.getElementById('most-read-live-badge');
    if (badge) badge.textContent = isLive ? '● LIVE' : '';
  }, [isLive, hideHeader]);

  return (
    <div>
      {/* Section header */}
      {!hideHeader && (
      <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-1">
        <h2 className="text-xs font-black tracking-widest uppercase">Most Read</h2>
        {isLive && (
          <span className="text-[10px] font-bold text-green-600 tracking-wide">
            ● LIVE
          </span>
        )}
      </div>
      )}

      {/* Loading skeletons */}
      {loading && (
        <ul className="divide-y divide-gray-100">
          {Array.from({ length: 10 }).map((_, i) => (
            <li key={i} className="py-3.5">
              <div className="flex items-start gap-3 animate-pulse">
                <div className="w-6 h-4 bg-gray-100 rounded mt-1 shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-2.5 bg-gray-100 rounded w-1/4" />
                  <div className="h-3.5 bg-gray-100 rounded w-full" />
                  <div className="h-2.5 bg-gray-100 rounded w-1/3" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Ranked list */}
      {!loading && (
        <ul className="divide-y divide-gray-100">
          {items.map((article, i) => (
            <li key={article.slug}>
              <Link
                href={article.slug}
                className="group flex items-start gap-3 py-3.5 hover:bg-gray-50 -mx-2 px-2 rounded transition-colors"
              >
                <span className={`text-xl font-black leading-none mt-0.5 w-7 shrink-0 tabular-nums text-right ${
                  i === 0 ? 'text-black' : i <= 2 ? 'text-gray-400' : 'text-gray-200'
                }`}>
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                    <TopicTag
                      topic={inferTopicTag(article.category, article.slug)}
                      size="xs"
                      showIcon={false}
                    />
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
                  <h4 className="text-sm font-bold leading-snug group-hover:text-gray-500 transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-400 mt-0.5">
                    <span className="font-medium text-gray-600">{article.author}</span>
                    {article.publishDate && <><span>•</span><span>{article.publishDate}</span></>}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
