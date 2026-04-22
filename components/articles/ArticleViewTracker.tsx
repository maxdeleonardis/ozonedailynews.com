// =============================================================================
// ArticleViewTracker
//
// Drop inside any article page. Records the view in two places:
//   1. localStorage (`ow_reading_history`) — for ALL users, anonymous or
//      signed in. Powers the on-device RelatedArticles ranking algorithm.
//   2. Supabase via /api/history/track — only for signed-in users.
// =============================================================================

'use client';

import { useEffect, useRef } from 'react';
import { useArticleHistory } from '@/lib/use-article-history';

interface Props {
  slug:      string;
  title:     string;
  url:       string;
  image?:    string;
  category?: string;
  tags?:     string[];
}

const HISTORY_KEY = 'ow_reading_history';
const MAX_HISTORY = 30;

interface LocalHistoryEntry {
  slug:      string;
  title:     string;
  url:       string;
  image?:    string;
  category?: string;
  tags?:     string[];
  ts:        number;
}

function recordLocal(entry: LocalHistoryEntry) {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    const list: LocalHistoryEntry[] = raw ? JSON.parse(raw) : [];
    const filtered = list.filter((e) => e.slug !== entry.slug);
    const next = [entry, ...filtered].slice(0, MAX_HISTORY);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
  } catch {
    /* private mode / quota — fail silently */
  }
}

export default function ArticleViewTracker({ slug, title, url, image, category, tags }: Props) {
  const { track, isLoggedIn } = useArticleHistory();
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;
    tracked.current = true;

    // Local record powers RelatedArticles for everyone
    recordLocal({ slug, title, url, image, category, tags, ts: Date.now() });

    // Server mirror only when signed in
    if (isLoggedIn) {
      track({ slug, title, url, image, category });
    }
  }, [isLoggedIn, track, slug, title, url, image, category, tags]);

  return null;
}
