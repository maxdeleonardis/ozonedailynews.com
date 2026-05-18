'use client';

import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '@/lib/hooks/use-auth';

// ─── Props ───────────────────────────────────────────────────────────────────

interface EngagementBarProps {
  slug: string;
  title: string;
  url: string;
  image?: string;
  category?: string;
  /** Render style — 'row' = horizontal icon row, 'compact' = smaller */
  variant?: 'row' | 'compact';
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function EngagementBar({
  slug,
  title,
  url,
  image,
  category,
  variant = 'row',
}: EngagementBarProps) {
  const { isAuth, loading: authLoading, signIn } = useAuth();

  // Like state
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [likeLoading, setLikeLoading] = useState(false);

  // Save state
  const [saved, setSaved] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);

  // Share state
  const [justCopied, setJustCopied] = useState(false);

  // ── Fetch initial state ──────────────────────────────────────────────────

  useEffect(() => {
    if (authLoading) return;

    // Like count (public, always fetch)
    fetch(`/api/likes?slug=${encodeURIComponent(slug)}`)
      .then((r) => r.json())
      .then((d) => {
        setLikeCount(d.count ?? 0);
        setLiked(d.liked ?? false);
      })
      .catch(() => {});

    // Save status (only when authed)
    if (isAuth) {
      fetch(`/api/saves?slug=${encodeURIComponent(slug)}`)
        .then((r) => r.json())
        .then((d) => setSaved(d.saved ?? false))
        .catch(() => {});
    }
  }, [slug, isAuth, authLoading]);

  // ── Handlers ─────────────────────────────────────────────────────────────

  const requireAuth = useCallback(() => {
    if (!isAuth) {
      signIn();
      return true;
    }
    return false;
  }, [isAuth, signIn]);

  const toggleLike = useCallback(async () => {
    if (requireAuth()) return;
    if (likeLoading) return;
    setLikeLoading(true);

    // Optimistic update
    setLiked((prev) => !prev);
    setLikeCount((prev) => prev + (liked ? -1 : 1));

    try {
      const res = await fetch('/api/likes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, title, url }),
      });
      const data = await res.json();
      if (res.ok) {
        setLiked(data.liked);
        setLikeCount(data.count);
      }
    } catch {
      // Revert on error
      setLiked((prev) => !prev);
      setLikeCount((prev) => prev + (liked ? 1 : -1));
    } finally {
      setLikeLoading(false);
    }
  }, [requireAuth, likeLoading, liked, slug, title, url]);

  const toggleSave = useCallback(async () => {
    if (requireAuth()) return;
    if (saveLoading) return;
    setSaveLoading(true);
    setSaved((prev) => !prev);

    try {
      const res = await fetch('/api/saves', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, title, url, image, category }),
      });
      const data = await res.json();
      if (res.ok) setSaved(data.saved);
    } catch {
      setSaved((prev) => !prev);
    } finally {
      setSaveLoading(false);
    }
  }, [requireAuth, saveLoading, slug, title, url, image, category]);

  const handleShare = useCallback(async () => {
    const fullUrl = `https://www.ozonenetwork.news${url}`;

    if (navigator.share) {
      try {
        await navigator.share({ title, url: fullUrl });
        return;
      } catch {
        // User cancelled or not supported — fall through to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(fullUrl);
      setJustCopied(true);
      setTimeout(() => setJustCopied(false), 2000);
    } catch {
      // Clipboard API not available
    }
  }, [title, url]);

  const handleComment = useCallback(() => {
    // Scroll to comment section or navigate to article
    window.location.href = `${url}#comments`;
  }, [url]);

  // ── Render ───────────────────────────────────────────────────────────────

  const isCompact = variant === 'compact';
  const btnBase = `flex items-center gap-1 transition-colors ${isCompact ? 'text-[10px]' : 'text-xs'} font-medium`;

  return (
    <div
      className={`flex items-center ${isCompact ? 'gap-3' : 'gap-4'}`}
      onClick={(e) => e.preventDefault()}
    >
      {/* Like */}
      <button
        onClick={toggleLike}
        disabled={likeLoading}
        className={`${btnBase} ${liked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
        aria-label={liked ? 'Unlike' : 'Like'}
      >
        <span className={isCompact ? 'text-sm' : 'text-base'}>{liked ? '❤️' : '🤍'}</span>
        {likeCount > 0 && <span>{likeCount}</span>}
        {!isCompact && <span className="hidden sm:inline">{liked ? 'Liked' : 'Like'}</span>}
      </button>

      {/* Comment */}
      <button
        onClick={handleComment}
        className={`${btnBase} text-gray-400 hover:text-blue-500`}
        aria-label="Comment"
      >
        <span className={isCompact ? 'text-sm' : 'text-base'}>💬</span>
        {!isCompact && <span className="hidden sm:inline">Comment</span>}
      </button>

      {/* Share */}
      <button
        onClick={handleShare}
        className={`${btnBase} ${justCopied ? 'text-green-600' : 'text-gray-400 hover:text-green-600'}`}
        aria-label="Share"
      >
        <span className={isCompact ? 'text-sm' : 'text-base'}>{justCopied ? '✅' : '🔗'}</span>
        {!isCompact && <span className="hidden sm:inline">{justCopied ? 'Copied!' : 'Share'}</span>}
      </button>

      {/* Save */}
      <button
        onClick={toggleSave}
        disabled={saveLoading}
        className={`${btnBase} ${saved ? 'text-amber-500' : 'text-gray-400 hover:text-amber-500'}`}
        aria-label={saved ? 'Unsave' : 'Save'}
      >
        <span className={isCompact ? 'text-sm' : 'text-base'}>{saved ? '📌' : '📎'}</span>
        {!isCompact && <span className="hidden sm:inline">{saved ? 'Saved' : 'Save'}</span>}
      </button>
    </div>
  );
}
