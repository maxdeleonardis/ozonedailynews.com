// =============================================================================
// ArticleHistory
//
// Displays the logged-in user's recent reading history.
// Shows last 50 articles from the past 7 days, newest first.
// Usable as a standalone page section or inside a panel/dropdown.
// =============================================================================

'use client';

import Link                        from 'next/link';
import Image                       from 'next/image';
import { useArticleHistory }       from '@/lib/use-article-history';
import { useAuth }                 from '@/lib/hooks/use-auth';

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60_000);
  if (m < 1)  return 'just now';
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
}

export default function ArticleHistory() {
  const { isAuth, loading: authLoading } = useAuth();
  const { history, loading } = useArticleHistory();

  // ── Not logged in ─────────────────────────────────────────────────────────
  if (!isAuth && !authLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
        <span className="text-5xl">📖</span>
        <h2 className="text-xl font-bold text-gray-900">Sign in to see your reading history</h2>
        <p className="text-gray-500 text-sm max-w-xs">
          Your last 7 days of article views will appear here when you&apos;re signed in with Google.
        </p>
      </div>
    );
  }

  // ── Loading ───────────────────────────────────────────────────────────────
  if (authLoading || loading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex gap-4 p-4 rounded-xl bg-gray-50 animate-pulse">
            <div className="w-20 h-14 rounded-lg bg-gray-200 flex-shrink-0" />
            <div className="flex-1 space-y-2 py-1">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-3 bg-gray-200 rounded w-1/4" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // ── Empty ─────────────────────────────────────────────────────────────────
  if (history.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
        <span className="text-5xl">🗞️</span>
        <h2 className="text-xl font-bold text-gray-900">No history yet</h2>
        <p className="text-gray-500 text-sm max-w-xs">
          Articles you read will appear here. History is kept for 7&nbsp;days.
        </p>
        <Link href="/" className="mt-2 px-4 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-colors">
          Browse articles
        </Link>
      </div>
    );
  }

  // ── History list ──────────────────────────────────────────────────────────
  return (
    <div className="space-y-3">
      <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold pb-1">
        Last 7 days · {history.length} article{history.length !== 1 ? 's' : ''}
      </p>

      {history.map((entry) => (
        <Link
          key={entry.article_slug}
          href={entry.article_url}
          className="group flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
        >
          {/* Thumbnail */}
          <div className="w-20 h-14 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
            {entry.article_image ? (
              <Image
                src={entry.article_image}
                alt={entry.article_title}
                width={80}
                height={56}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                unoptimized
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-2xl">
                🗞️
              </div>
            )}
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            {entry.article_category && (
              <span className="text-[10px] font-bold uppercase tracking-wide text-purple-600">
                {entry.article_category}
              </span>
            )}
            <p className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-purple-700 transition-colors leading-snug">
              {entry.article_title}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">{timeAgo(entry.viewed_at)}</p>
          </div>

          {/* Arrow */}
          <svg className="w-4 h-4 text-gray-300 flex-shrink-0 self-center group-hover:text-gray-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ))}
    </div>
  );
}
