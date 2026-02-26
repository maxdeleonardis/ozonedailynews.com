'use client';

// =============================================================================
// ReactionBar — Interactive article engagement bar
//
// Buttons: ❤️ Like  💬 Comment  🔗 Share  🔖 Save
//
// • Like & Save require Google sign-in via next-auth.
//   If the user is not signed in, clicking either triggers the Google OAuth
//   flow and returns them to the same article after authentication.
//
// • State is persisted in localStorage (ow_liked_articles / ow_saved_articles)
//   so the liked/saved state survives page reloads.
//
// • Every interaction fires a GA4 `article_reaction` event via tracking.ts,
//   including the signed-in user's identity when available.
//
// • Share uses the Web Share API (mobile/desktop browsers) with a clipboard
//   fallback that briefly shows "Copied!" confirmation.
//
// • Comment scrolls to the #comments anchor on the page (Discord comments
//   section or any element with id="comments").
//
// Props:
//   slug  — optional stable identifier (defaults to window.location.pathname)
//   title — optional article title (defaults to document.title)
// =============================================================================

import { useSession, signIn } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { tracking } from '@/lib/tracking';

interface ReactionBarProps {
  slug?: string;
  title?: string;
}

export default function ReactionBar({ slug, title }: ReactionBarProps) {
  const { data: session } = useSession();

  const [liked, setLiked]   = useState(false);
  const [saved, setSaved]   = useState(false);
  const [shared, setShared] = useState(false);

  // Resolve the stable article key and title once on client
  const articleKey   = slug  ?? (typeof window   !== 'undefined' ? window.location.pathname  : 'unknown');
  const articleTitle = title ?? (typeof document  !== 'undefined' ? document.title            : 'Unknown Article');

  // Hydrate liked/saved state from localStorage
  useEffect(() => {
    try {
      const likes = JSON.parse(localStorage.getItem('ow_liked_articles') ?? '[]') as string[];
      const saves = JSON.parse(localStorage.getItem('ow_saved_articles') ?? '[]') as string[];
      setLiked(likes.includes(articleKey));
      setSaved(saves.includes(articleKey));
    } catch { /* ignore parse errors */ }
  }, [articleKey]);

  // ── Helpers ──────────────────────────────────────────────────────────────

  /** Redirect to Google sign-in, returning to the current article URL */
  function requireSignIn(): void {
    signIn('google', { callbackUrl: window.location.href });
  }

  function persistList(key: string, articleId: string, active: boolean): void {
    try {
      const list = JSON.parse(localStorage.getItem(key) ?? '[]') as string[];
      const updated = active
        ? [...new Set([...list, articleId])]
        : list.filter((id) => id !== articleId);
      localStorage.setItem(key, JSON.stringify(updated));
    } catch { /* non-critical */ }
  }

  // ── Handlers ─────────────────────────────────────────────────────────────

  function handleLike(): void {
    if (!session) { requireSignIn(); return; }
    const next = !liked;
    setLiked(next);
    persistList('ow_liked_articles', articleKey, next);
    tracking.trackArticleReaction('like', articleKey, articleTitle, next ? 'add' : 'remove');
  }

  function handleSave(): void {
    if (!session) { requireSignIn(); return; }
    const next = !saved;
    setSaved(next);
    persistList('ow_saved_articles', articleKey, next);
    tracking.trackArticleReaction('save', articleKey, articleTitle, next ? 'add' : 'remove');
  }

  function handleShare(): void {
    const url = window.location.href;
    const fire = () => {
      setShared(true);
      setTimeout(() => setShared(false), 2500);
      tracking.trackArticleReaction('share', articleKey, articleTitle, 'add');
    };

    if (typeof navigator.share === 'function') {
      navigator.share({ title: articleTitle, url }).then(fire).catch(() => {/* cancelled */});
    } else {
      navigator.clipboard.writeText(url).then(fire).catch(() => {/* fallback */});
    }
  }

  function handleComment(): void {
    tracking.trackArticleReaction('comment_click', articleKey, articleTitle, 'add');
    const el = document.getElementById('comments');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // No comments section in view — scroll to page bottom
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="my-8 flex flex-wrap items-center justify-center gap-3 p-5 bg-gray-50 rounded-xl border border-gray-100">

      {/* Like */}
      <button
        onClick={handleLike}
        title={session ? (liked ? 'Unlike this article' : 'Like this article') : 'Sign in with Google to like'}
        aria-pressed={liked}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border font-medium text-sm transition-all duration-150 ${
          liked
            ? 'bg-red-50 border-red-400 text-red-600 shadow-sm'
            : 'bg-white border-gray-200 text-gray-700 hover:border-red-300 hover:bg-red-50'
        }`}
      >
        <span>{liked ? '❤️' : '🤍'}</span>
        <span>{liked ? 'Liked' : 'Like'}</span>
        {!session && (
          <span className="text-[10px] text-gray-400 font-normal">· sign in</span>
        )}
      </button>

      {/* Comment */}
      <button
        onClick={handleComment}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50 font-medium text-sm transition-all duration-150"
      >
        <span>💬</span>
        <span>Comment</span>
      </button>

      {/* Share */}
      <button
        onClick={handleShare}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border font-medium text-sm transition-all duration-150 ${
          shared
            ? 'bg-green-50 border-green-400 text-green-600 shadow-sm'
            : 'bg-white border-gray-200 text-gray-700 hover:border-green-300 hover:bg-green-50'
        }`}
      >
        <span>{shared ? '✅' : '🔗'}</span>
        <span>{shared ? 'Copied!' : 'Share'}</span>
      </button>

      {/* Save */}
      <button
        onClick={handleSave}
        title={session ? (saved ? 'Remove from saved' : 'Save for later') : 'Sign in with Google to save'}
        aria-pressed={saved}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border font-medium text-sm transition-all duration-150 ${
          saved
            ? 'bg-yellow-50 border-yellow-400 text-yellow-700 shadow-sm'
            : 'bg-white border-gray-200 text-gray-700 hover:border-yellow-300 hover:bg-yellow-50'
        }`}
      >
        <span>{saved ? '🔖' : '📌'}</span>
        <span>{saved ? 'Saved' : 'Save'}</span>
        {!session && (
          <span className="text-[10px] text-gray-400 font-normal">· sign in</span>
        )}
      </button>

    </div>
  );
}
