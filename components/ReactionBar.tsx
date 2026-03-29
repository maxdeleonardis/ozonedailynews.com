'use client';

// =============================================================================
// ReactionBar — Interactive article engagement bar
//
// Buttons: ❤️ Like (+ count)  💬 Comment  🔗 Share  🔖 Save
//
// • Like & Save are backed by Supabase via /api/likes and /api/saves.
//   State is loaded from the DB on mount whenever a session exists.
//
// • Like count is publicly visible (no auth required to see the number).
//
// • Saves live on the user's profile, viewable at /saved.
//
// • Not signed in → clicking Like or Save triggers Google OAuth and returns
//   the user to the same article after authentication.
//
// • Share uses the Web Share API with a clipboard fallback.
//
// Props:
//   slug     — article identifier (defaults to window.location.pathname)
//   title    — article title (defaults to document.title)
//   url      — canonical URL  (defaults to window.location.href)
//   image    — optional hero image for the save card
//   category — optional category label
// =============================================================================

import { useAuth } from '@/lib/hooks/use-auth';
import { useState, useEffect, useCallback } from 'react';
import { tracking } from '@/lib/tracking';

interface ReactionBarProps {
  slug?:     string;
  title?:    string;
  url?:      string;
  image?:    string;
  category?: string;
}

export default function ReactionBar({ slug, title, url, image, category }: ReactionBarProps) {
  const { isAuth, signIn } = useAuth();

  // ── State ─────────────────────────────────────────────────────────────────
  const [liked,       setLiked]       = useState(false);
  const [likeCount,   setLikeCount]   = useState<number | null>(null);
  const [saved,       setSaved]       = useState(false);
  const [shared,      setShared]      = useState(false);
  const [likeLoading, setLikeLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);

  // Resolve keys client-side (only runs in browser)
  const articleKey   = slug  ?? (typeof window   !== 'undefined' ? window.location.pathname : 'unknown');
  const articleTitle = title ?? (typeof document !== 'undefined' ? document.title           : 'Unknown Article');
  const articleUrl   = url   ?? (typeof window   !== 'undefined' ? window.location.href     : '');

  // ── Load like count + user-specific state from DB ─────────────────────────
  useEffect(() => {
    if (articleKey === 'unknown') return;
    fetch(`/api/likes?slug=${encodeURIComponent(articleKey)}`)
      .then((r) => r.json())
      .then((data) => {
        setLikeCount(data.count ?? 0);
        if (isAuth) setLiked(!!data.liked);
      })
      .catch(() => {});
  }, [articleKey, isAuth]);

  useEffect(() => {
    if (!isAuth || articleKey === 'unknown') return;
    fetch(`/api/saves?slug=${encodeURIComponent(articleKey)}`)
      .then((r) => r.json())
      .then((data) => { setSaved(!!data.saved); })
      .catch(() => {});
  }, [articleKey, isAuth]);

  // ── Helpers ───────────────────────────────────────────────────────────────
  function requireSignIn() {
    signIn();
  }

  // ── Like handler ──────────────────────────────────────────────────────────
  const handleLike = useCallback(async () => {
    if (!isAuth) { requireSignIn(); return; }
    if (likeLoading) return;
    const next      = !liked;
    const prevCount = likeCount ?? 0;
    setLiked(next);
    setLikeCount(prevCount + (next ? 1 : -1));
    setLikeLoading(true);
    try {
      const res  = await fetch('/api/likes', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ slug: articleKey, title: articleTitle, url: articleUrl }),
      });
      const data = await res.json();
      setLiked(data.liked);
      setLikeCount(data.count);
      tracking.trackArticleReaction('like', articleKey, articleTitle, data.liked ? 'add' : 'remove');
    } catch {
      setLiked(!next);
      setLikeCount(prevCount);
    } finally {
      setLikeLoading(false);
    }
  }, [isAuth, liked, likeCount, likeLoading, articleKey, articleTitle, articleUrl]);

  // ── Save handler ──────────────────────────────────────────────────────────
  const handleSave = useCallback(async () => {
    if (!isAuth) { requireSignIn(); return; }
    if (saveLoading) return;
    const next = !saved;
    setSaved(next);
    setSaveLoading(true);
    try {
      const res  = await fetch('/api/saves', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ slug: articleKey, title: articleTitle, url: articleUrl, image, category }),
      });
      const data = await res.json();
      setSaved(data.saved);
      tracking.trackArticleReaction('save', articleKey, articleTitle, data.saved ? 'add' : 'remove');
    } catch {
      setSaved(!next);
    } finally {
      setSaveLoading(false);
    }
  }, [isAuth, saved, saveLoading, articleKey, articleTitle, articleUrl, image, category]);

  // ── Share handler ─────────────────────────────────────────────────────────
  function handleShare() {
    const fire = () => {
      setShared(true);
      setTimeout(() => setShared(false), 2500);
      tracking.trackArticleReaction('share', articleKey, articleTitle, 'add');
    };
    if (typeof navigator.share === 'function') {
      navigator.share({ title: articleTitle, url: articleUrl }).then(fire).catch(() => {});
    } else {
      navigator.clipboard.writeText(articleUrl).then(fire).catch(() => {});
    }
  }

  // ── Comment handler ───────────────────────────────────────────────────────
  function handleComment() {
    tracking.trackArticleReaction('comment_click', articleKey, articleTitle, 'add');
    const el = document.getElementById('comments');
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); }
    else    { window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }
  }

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="my-8 flex flex-wrap items-center justify-center gap-3 p-5 bg-gray-50 rounded-xl border border-gray-100">

      {/* Like */}
      <button
        onClick={handleLike}
        disabled={likeLoading}
        title={isAuth ? (liked ? 'Unlike this article' : 'Like this article') : 'Sign in to like'}
        aria-pressed={liked}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border font-medium text-sm transition-all duration-150 disabled:opacity-60 ${
          liked
            ? 'bg-red-50 border-red-400 text-red-600 shadow-sm'
            : 'bg-white border-gray-200 text-gray-700 hover:border-red-300 hover:bg-red-50'
        }`}
      >
        <span>{liked ? '❤️' : '🤍'}</span>
        <span>{liked ? 'Liked' : 'Like'}</span>
        {likeCount !== null && likeCount > 0 && (
          <span className={`text-xs font-semibold tabular-nums px-1.5 py-0.5 rounded-full ${
            liked ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-500'
          }`}>
            {likeCount >= 1000 ? `${(likeCount / 1000).toFixed(1)}k` : likeCount}
          </span>
        )}
        {!isAuth && (
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
        disabled={saveLoading}
        title={isAuth ? (saved ? 'Remove from saved' : 'Save for later') : 'Sign in to save'}
        aria-pressed={saved}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border font-medium text-sm transition-all duration-150 disabled:opacity-60 ${
          saved
            ? 'bg-yellow-50 border-yellow-400 text-yellow-700 shadow-sm'
            : 'bg-white border-gray-200 text-gray-700 hover:border-yellow-300 hover:bg-yellow-50'
        }`}
      >
        <span>{saved ? '🔖' : '📌'}</span>
        <span>{saved ? 'Saved' : 'Save'}</span>
        {!isAuth && (
          <span className="text-[10px] text-gray-400 font-normal">· sign in</span>
        )}
      </button>

    </div>
  );
}
