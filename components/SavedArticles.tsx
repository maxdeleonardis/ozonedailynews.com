// =============================================================================
// SavedArticles — user's bookmarked article list
//
// Fetches from GET /api/saves and renders a full save list.
// Shows unsave button inline. Requires auth.
// =============================================================================

'use client';

import Link       from 'next/link';
import Image      from 'next/image';
import { useState, useEffect } from 'react';
import { useAuth }             from '@/lib/hooks/use-auth';

interface SaveEntry {
  article_slug:     string;
  article_title:    string;
  article_url:      string;
  article_image:    string | null;
  article_category: string | null;
  saved_at:         string;
}

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60_000);
  if (m < 1)  return 'just now';
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d}d ago`;
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default function SavedArticles() {
  const { isAuth, loading: authLoading, signIn } = useAuth();
  const [saves,   setSaves]   = useState<SaveEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [removing, setRemoving] = useState<string | null>(null);

  useEffect(() => {
    if (!isAuth) return;
    setLoading(true);
    fetch('/api/saves')
      .then((r) => r.json())
      .then((data) => setSaves(data.saves ?? []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [isAuth]);

  async function handleUnsave(slug: string, title: string, url: string) {
    setRemoving(slug);
    try {
      await fetch('/api/saves', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ slug, title, url }),
      });
      setSaves((prev) => prev.filter((s) => s.article_slug !== slug));
    } finally {
      setRemoving(null);
    }
  }

  // ── Not signed in ─────────────────────────────────────────────────────────
  if (!isAuth && !authLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
        <span className="text-5xl">🔖</span>
        <h2 className="text-xl font-bold text-gray-900">Sign in to see your saved articles</h2>
        <p className="text-gray-500 text-sm max-w-xs">
          Save articles to read later. They&apos;ll always be here on your profile.
        </p>
        <button
          onClick={() => signIn()}
          className="mt-2 px-5 py-2.5 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-colors font-medium"
        >
          Sign in
        </button>
      </div>
    );
  }

  // ── Loading ───────────────────────────────────────────────────────────────
  if (authLoading || loading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
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
  if (saves.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
        <span className="text-5xl">📌</span>
        <h2 className="text-xl font-bold text-gray-900">Nothing saved yet</h2>
        <p className="text-gray-500 text-sm max-w-xs">
          Hit the <strong>Save</strong> button on any article to bookmark it here.
        </p>
        <Link href="/" className="mt-2 px-4 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-colors">
          Browse articles
        </Link>
      </div>
    );
  }

  // ── Save list ─────────────────────────────────────────────────────────────
  return (
    <div className="space-y-3">
      <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold pb-1">
        {saves.length} saved article{saves.length !== 1 ? 's' : ''}
      </p>

      {saves.map((entry) => (
        <div
          key={entry.article_slug}
          className="group flex gap-4 p-3 rounded-xl border border-transparent hover:border-gray-100 hover:bg-gray-50 transition-colors"
        >
          {/* Thumbnail */}
          <Link href={entry.article_url} className="w-20 h-14 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 block">
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
              <div className="w-full h-full flex items-center justify-center text-2xl">🔖</div>
            )}
          </Link>

          {/* Text */}
          <div className="flex-1 min-w-0">
            {entry.article_category && (
              <span className="text-[10px] font-bold uppercase tracking-wide text-yellow-600">
                {entry.article_category}
              </span>
            )}
            <Link href={entry.article_url}>
              <p className="text-sm font-semibold text-gray-900 line-clamp-2 hover:text-yellow-700 transition-colors leading-snug">
                {entry.article_title}
              </p>
            </Link>
            <p className="text-xs text-gray-400 mt-0.5">Saved {timeAgo(entry.saved_at)}</p>
          </div>

          {/* Unsave button */}
          <button
            onClick={() => handleUnsave(entry.article_slug, entry.article_title, entry.article_url)}
            disabled={removing === entry.article_slug}
            title="Remove from saved"
            className="flex-shrink-0 self-center p-1.5 rounded-full text-gray-300 hover:text-red-400 hover:bg-red-50 transition-colors disabled:opacity-40"
          >
            {removing === entry.article_slug ? (
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      ))}
    </div>
  );
}
