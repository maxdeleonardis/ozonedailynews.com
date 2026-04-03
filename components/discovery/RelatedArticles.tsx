'use client';

/**
 * RelatedArticles — Client Component
 *
 * Fetches articles related to the current article by:
 *   1. Tags the user has read recently (from localStorage reading history)
 *   2. Same category as the current article
 *
 * Ranks by overlap with the user's history first, then recency.
 * Renders as a compact sidebar list — designed for a ~20% right column.
 */

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface ArticleRow {
  slug: string;
  title: string;
  category: string;
  publish_date: string;
  thumbnail_src?: string;
  tags?: string[];
  url?: string;
}

interface Props {
  currentSlug: string;
  category: string;
  tags?: string[];
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const HISTORY_KEY = 'ow_reading_history';
const MAX_RESULTS = 8;

function getHistoryTags(): string[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const history: { tags?: string[] }[] = JSON.parse(raw);
    // Flatten all tags from last 30 visited articles, deduplicate
    const all = history.flatMap((h) => h.tags ?? []);
    return [...new Set(all)];
  } catch {
    return [];
  }
}

export default function RelatedArticles({ currentSlug, category, tags = [] }: Props) {
  const [articles, setArticles] = useState<ArticleRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const historyTags = getHistoryTags();
      // Combine current article tags + user history tags for scoring
      const allRelevantTags = [...new Set([...tags, ...historyTags])];

      // Fetch recent articles in the same category (or any if none)
      const params = new URLSearchParams({
        select: 'slug,title,category,publish_date,thumbnail_src,tags,url',
        status: 'eq.published',
        order: 'published_at.desc',
        limit: '40',
      });
      if (category) params.set('category', `eq.${category}`);

      try {
        const res = await fetch(
          `${SUPABASE_URL}/rest/v1/articles?${params.toString()}`,
          {
            headers: {
              apikey: SUPABASE_ANON,
              Authorization: `Bearer ${SUPABASE_ANON}`,
            },
            cache: 'no-store',
          }
        );
        const rows: ArticleRow[] = await res.json();

        // Filter out current article and any rows missing a url (can't build correct path from slug alone)
        const candidates = rows.filter((r) => r.slug !== currentSlug && r.url);

        // Score by tag overlap with user history + current article tags
        const scored = candidates.map((r) => {
          const overlap = (r.tags ?? []).filter((t) =>
            allRelevantTags.includes(t)
          ).length;
          return { ...r, _score: overlap };
        });

        // Sort: highest overlap first, then just take top MAX_RESULTS
        scored.sort((a, b) => b._score - a._score);

        setArticles(scored.slice(0, MAX_RESULTS));
      } catch {
        // Silently fail — sidebar is non-critical
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [currentSlug, category, tags]);

  if (loading) {
    return (
      <aside className="space-y-3">
        <h3 className="text-[10px] font-black uppercase tracking-[.15em] text-gray-400 border-b border-gray-200 pb-2 mb-3">
          Related
        </h3>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="animate-pulse space-y-1.5">
            <div className="h-3 bg-gray-100 rounded w-3/4" />
            <div className="h-3 bg-gray-100 rounded w-1/2" />
          </div>
        ))}
      </aside>
    );
  }

  if (!articles.length) return null;

  return (
    <aside>
      <h3 className="text-[10px] font-black uppercase tracking-[.15em] text-gray-400 border-b border-gray-200 pb-2 mb-4">
        Related
      </h3>
      <ul className="space-y-4">
        {articles.map((a) => (
          <li key={a.slug}>
            <Link
              href={a.url ?? `/${a.slug}`}
              className="group block"
            >
              {a.thumbnail_src && (
                <div className="w-full aspect-video overflow-hidden rounded mb-1.5">
                  <img
                    src={a.thumbnail_src}
                    alt={a.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <span className="text-[9px] font-bold uppercase tracking-wider text-red-600">
                {a.category}
              </span>
              <p className="text-xs font-semibold text-gray-900 leading-snug group-hover:underline mt-0.5">
                {a.title}
              </p>
              <p className="text-[10px] text-gray-400 mt-0.5">{a.publish_date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
