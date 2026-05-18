/**
 * AuthorArticlesServer — Async Server Component
 *
 * Fetches published articles for a given author from TWO sources and merges them:
 *   1. content_registry (Supabase) — standard article pages indexed by authorSlug
 *   2. jack_articles (Supabase)    — premium JackArticle layout pieces (e.g. Sanders/AOC)
 *
 * Falls back to the static content-registry.ts array when Supabase is unavailable.
 * Results are deduped by slug and sorted newest-first.
 *
 * Because this is a Server Component, it runs on the server at request time —
 * new articles show up automatically as soon as they are published to Supabase.
 *
 * Usage:
 *   import { AuthorArticlesServer } from '@/components/authors/AuthorArticlesServer';
 *   <AuthorArticlesServer authorSlug="jack-sterling" authorName="Jack Sterling" />
 */

import Link from 'next/link';
import { getEntriesByAuthor } from '@/lib/registry-service';
import { createClient } from '@/lib/supabase/server';

interface Article {
  href: string;
  title: string;
  date: string;
  category: string;
  imageUrl?: string;
}

interface Props {
  authorSlug: string;
  /** Display name used to back-match legacy jack_articles rows */
  authorName?: string;
}

export async function AuthorArticlesServer({ authorSlug, authorName }: Props) {
  // ── 1. content_registry / static registry ──────────────────────────────
  const registryEntries = await getEntriesByAuthor(authorSlug);

  const registryArticles: Article[] = registryEntries.map((e) => ({
    href: e.slug,
    title: e.title.replace(/ \| OzoneNews$/, ''),
    date: new Date(e.publishDate).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    }),
    category: e.category,
    imageUrl: e.imageUrl,
  }));

  // ── 2. jack_articles (JackArticle layout) ──────────────────────────────
  let jackArticles: Article[] = [];
  try {
    const supabase = await createClient();
    // Match by author->>'slug' or author->>'name'
    const { data } = await supabase
      .from('jack_articles')
      .select('slug, title, subtitle, publish_date, section, hero_image, author')
      .or(
        `author->>slug.eq.${authorSlug}${authorName ? `,author->>name.eq.${authorName}` : ''}`
      )
      .order('publish_date', { ascending: false });

    if (data && data.length > 0) {
      jackArticles = data.map((row: Record<string, unknown>) => {
        const hero = row.hero_image as Record<string, string> | null;
        const publishDate = row.publish_date
          ? new Date(String(row.publish_date)).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric',
            })
          : '';

        // jack_articles slugs are stored with dashes, reconstruct the URL
        // e.g. "technology-sanders-aoc-ai-data-center-moratorium-act-march-2026"
        // → "/technology/sanders-aoc-ai-data-center-moratorium-act-march-2026"
        const rawSlug = String(row.slug ?? '');
        const href = rawSlug.startsWith('/')
          ? rawSlug
          : '/' + rawSlug.replace(/^([^-]+)-/, '$1/');

        return {
          href,
          title: String(row.title ?? '').replace(/ \| OzoneNews$/, ''),
          date: publishDate,
          category: String(row.section ?? 'General'),
          imageUrl: hero?.src ?? undefined,
        };
      });
    }
  } catch {
    // Supabase unavailable — gracefully skip jack_articles
  }

  // ── 3. Merge + dedup by href (registry takes precedence) ─────────────────
  const seen = new Set(registryArticles.map((a) => a.href));
  const merged: Article[] = [
    ...registryArticles,
    ...jackArticles.filter((a) => !seen.has(a.href)),
  ];

  // Sort newest-first (best-effort — date strings may not parse if empty)
  merged.sort((a, b) => {
    const da = new Date(a.date).getTime();
    const db = new Date(b.date).getTime();
    return isNaN(db - da) ? 0 : db - da;
  });

  const total = merged.length;

  return (
    <div>
      {/* Header row */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[10px] uppercase tracking-widest font-black text-gray-400">
          Published Work
        </h2>
        <span className="text-[10px] font-mono font-semibold text-gray-400 bg-gray-100 px-2.5 py-1 border border-gray-200">
          {total} {total === 1 ? 'article' : 'articles'}
        </span>
      </div>

      {total === 0 ? (
        <p className="text-sm text-gray-400 italic py-6 border border-dashed border-gray-200 text-center">
          Articles are on the way, check back soon.
        </p>
      ) : (
        <ul className="divide-y divide-gray-100">
          {merged.map((a) => (
            <li key={a.href} className="py-4 first:pt-0 last:pb-0">
              <Link href={a.href} className="group flex items-start gap-4">
                {/* Thumbnail */}
                {a.imageUrl && (
                  <div className="w-20 h-14 rounded-sm overflow-hidden shrink-0 bg-gray-100 border border-gray-100">
                    <img
                      src={a.imageUrl}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                )}
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-black leading-snug mb-1.5 line-clamp-2">
                    {a.title}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="px-2 py-0.5 bg-gray-100 border border-gray-200 font-medium uppercase tracking-wide">
                      {a.category}
                    </span>
                    {a.date && <span className="font-mono">{a.date}</span>}
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
