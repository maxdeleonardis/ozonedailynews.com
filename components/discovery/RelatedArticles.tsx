'use client';

/**
 * RelatedArticles — Client Component
 *
 * Personalized sidebar. Pulls candidates from all three article tables
 * (`articles`, `jack_articles`, `creator_articles`) and ranks each by:
 *
 *   score = currentTagOverlap × 5
 *         + decayedHistoryTagOverlap   (exp decay, 7-day half-life)
 *         + decayedHistoryCategoryHit  (same idea, smaller weight)
 *         + sameCategoryAsCurrent × 2
 *         + small recency bonus (newer first)
 *
 * Reading history comes from `localStorage.ow_reading_history` written by
 * `ArticleViewTracker` for every visitor (anon + signed-in).
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
  _publishedMs?: number;
  _score?: number;
}

interface Props {
  currentSlug: string;
  category: string;
  tags?: string[];
}

interface HistoryEntry {
  slug: string;
  title?: string;
  url?: string;
  image?: string;
  category?: string;
  tags?: string[];
  ts?: number;
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const HISTORY_KEY = 'ow_reading_history';
const MAX_RESULTS = 8;
const PER_TABLE_LIMIT = 30;
const HALF_LIFE_DAYS = 7;
const DAY_MS = 24 * 60 * 60 * 1000;

function getHistory(): HistoryEntry[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * Build a recency-weighted tag/category interest map from history.
 * Newer reads contribute more. Tags from older reads decay exponentially.
 */
function buildInterestProfile(history: HistoryEntry[]) {
  const tagWeights = new Map<string, number>();
  const categoryWeights = new Map<string, number>();
  const now = Date.now();

  for (const entry of history) {
    const ageDays = entry.ts ? (now - entry.ts) / DAY_MS : 7;
    const weight = Math.pow(0.5, ageDays / HALF_LIFE_DAYS); // exp decay
    for (const t of entry.tags ?? []) {
      tagWeights.set(t, (tagWeights.get(t) ?? 0) + weight);
    }
    if (entry.category) {
      categoryWeights.set(entry.category, (categoryWeights.get(entry.category) ?? 0) + weight);
    }
  }

  return { tagWeights, categoryWeights };
}

async function fetchTable(
  table: 'articles' | 'jack_articles' | 'creator_articles',
  selectCols: string,
): Promise<ArticleRow[]> {
  const params = new URLSearchParams({
    select: selectCols,
    order: 'published_at.desc',
    limit: String(PER_TABLE_LIMIT),
  });
  // jack_articles has no `status` column — only filter the others
  if (table !== 'jack_articles') {
    params.set('status', 'eq.published');
  }
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${params.toString()}`, {
      headers: {
        apikey: SUPABASE_ANON,
        Authorization: `Bearer ${SUPABASE_ANON}`,
      },
      cache: 'no-store',
    });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export default function RelatedArticles({ currentSlug, category, tags = [] }: Props) {
  const [articles, setArticles] = useState<ArticleRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const history = getHistory().filter((h) => h.slug !== currentSlug);
      const { tagWeights, categoryWeights } = buildInterestProfile(history);
      const currentTagSet = new Set(tags);

      // Pull candidates from all three article tables in parallel.
      // Each table exposes the same column names we need.
      const [news, jack, creators] = await Promise.all([
        fetchTable('articles',         'slug,title,category,publish_date,thumbnail_src,tags,url,published_at'),
        fetchTable('jack_articles',    'slug,title,category,publish_date,thumbnail_src,tags,url,published_at'),
        fetchTable('creator_articles', 'slug,title,category,publish_date,thumbnail_src,tags,url,published_at'),
      ]);

      const merged = [...news, ...jack, ...creators]
        .filter((r) => r.slug !== currentSlug && r.url);

      // Deduplicate by slug (jack/creator shouldn't collide with articles, but be safe)
      const seen = new Set<string>();
      const unique = merged.filter((r) => {
        if (seen.has(r.slug)) return false;
        seen.add(r.slug);
        return true;
      });

      // Score each candidate
      const nowMs = Date.now();
      const scored = unique.map((r) => {
        const rowTags = r.tags ?? [];
        const publishedMs = (r as ArticleRow & { published_at?: string }).published_at
          ? new Date((r as ArticleRow & { published_at?: string }).published_at!).getTime()
          : 0;

        // 1. Direct tag overlap with current article (strongest signal)
        const directOverlap = rowTags.filter((t) => currentTagSet.has(t)).length;

        // 2. History tag affinity (decayed)
        let historyTagScore = 0;
        for (const t of rowTags) {
          historyTagScore += tagWeights.get(t) ?? 0;
        }

        // 3. History category affinity (decayed)
        const historyCategoryScore = categoryWeights.get(r.category) ?? 0;

        // 4. Same category as current article
        const sameCategory = r.category === category ? 1 : 0;

        // 5. Recency bonus — newer published articles get a tiny lift
        const ageDays = publishedMs ? (nowMs - publishedMs) / DAY_MS : 30;
        const recencyBonus = Math.max(0, 1 - ageDays / 30) * 0.5;

        const score =
          directOverlap * 5 +
          historyTagScore * 2 +
          historyCategoryScore * 1 +
          sameCategory * 2 +
          recencyBonus;

        return { ...r, _score: score, _publishedMs: publishedMs };
      });

      // Sort by score, then recency
      scored.sort((a, b) => {
        if ((b._score ?? 0) !== (a._score ?? 0)) return (b._score ?? 0) - (a._score ?? 0);
        return (b._publishedMs ?? 0) - (a._publishedMs ?? 0);
      });

      setArticles(scored.slice(0, MAX_RESULTS));
      setLoading(false);
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
