'use client';

// =============================================================================
// DiscordComments
// =============================================================================
// Embeds a Discord-backed comment section at the bottom of any article.
//
// Usage:
//   import DiscordComments from '@/components/discord-comments';
//   <DiscordComments slug="youtube/sidemen/ksi" articleTitle="KSI | ObjectWire" />
//
// What it does:
//   • Users must sign in with Discord to comment
//   • Comments are stored server-side and forwarded to a Discord channel webhook
//   • Every auth event (sign-in, comment, sign-out) is tracked via the GA4
//     Measurement Protocol using the Discord username as user_id
//
// Environment variables needed (add to .env.local):
//   DISCORD_CLIENT_ID               — Discord OAuth app client ID
//   DISCORD_CLIENT_SECRET           — Discord OAuth app client secret
//   NEXTAUTH_SECRET                 — random secret (openssl rand -base64 32)
//   NEXTAUTH_URL                    — your site URL (e.g. https://www.objectwire.org)
//   DISCORD_COMMENTS_WEBHOOK_URL    — Discord channel webhook URL (optional)
//   GA_MEASUREMENT_PROTOCOL_SECRET  — GA4 Measurement Protocol API secret
// =============================================================================

import { useState, useEffect, useCallback, useRef } from 'react';
import { useAuth } from '@/lib/hooks/use-auth';
import Image from 'next/image';
import { GA_MEASUREMENT_ID } from '@/lib/tracking';

// ── Types ─────────────────────────────────────────────────────────────────────

interface Comment {
  id: string;
  slug: string;
  discordId: string;
  discordUsername: string;
  discordAvatar: string;
  body: string;
  createdAt: string;
}

interface DiscordUser {
  discordId: string;
  discordUsername: string;
  discordAvatar: string;
  email?: string;
}

interface Props {
  /** URL-safe article identifier, e.g. "youtube/sidemen/ksi" */
  slug: string;
  /** Used in Discord webhook embeds */
  articleTitle?: string;
}

// ── GA4 client-side helper ────────────────────────────────────────────────────

function getClientId(): string {
  if (typeof window === 'undefined') return 'server';
  try {
    const raw = localStorage.getItem('ow_visitor');
    if (raw) return JSON.parse(raw).clientId ?? 'unknown';
  } catch { /* ignore */ }
  return 'unknown';
}

async function trackDiscordEvent(
  event: 'discord_sign_in' | 'discord_comment' | 'discord_sign_out',
  discordUsername: string,
  discordId: string,
  slug?: string,
) {
  try {
    // Also fire client-side gtag event so it shows in real-time view
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', event, {
        discord_username: discordUsername,
        ...(slug ? { article_slug: slug } : {}),
      });
    }

    // Server-side Measurement Protocol → bypasses ad-blockers
    await fetch('/api/analytics/discord', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event,
        clientId: getClientId(),
        discordUsername,
        discordId,
        slug,
      }),
    });
  } catch {
    // Analytics must never break the UX
  }
}

// ── Sub-components ────────────────────────────────────────────────────────────

function DiscordIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function CommentCard({ comment }: { comment: Comment }) {
  const timeAgo = (iso: string) => {
    const diff = Date.now() - new Date(iso).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'just now';
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    return `${Math.floor(hrs / 24)}d ago`;
  };

  return (
    <div className="flex gap-3 py-4 border-b border-gray-100 last:border-0">
      <div className="shrink-0">
        <Image
          src={comment.discordAvatar}
          alt={comment.discordUsername}
          width={36}
          height={36}
          className="rounded-full"
          unoptimized
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-semibold text-gray-900 text-sm">
            {comment.discordUsername}
          </span>
          <span className="text-xs text-gray-400">{timeAgo(comment.createdAt)}</span>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed break-words">{comment.body}</p>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function DiscordComments({ slug, articleTitle }: Props) {
  const { user: authUser, isAuth, loading: authLoading, signIn, signOut } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loadingComments, setLoadingComments] = useState(true);
  const [draft, setDraft] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const signInTracked = useRef(false);

  const isSignedIn = isAuth && !!authUser;
  const displayName = authUser?.user_metadata?.full_name ?? authUser?.email?.split('@')[0] ?? 'You';
  const displayAvatar = authUser?.user_metadata?.avatar_url ?? '/favicon.ico';

  // ── Fetch comments ──────────────────────────────────────────────────────────
  const fetchComments = useCallback(async () => {
    try {
      const res = await fetch(`/api/discord/comments?slug=${encodeURIComponent(slug)}`);
      if (res.ok) {
        const data = await res.json();
        setComments(data.comments ?? []);
      }
    } catch {
      // silently fail — not critical
    } finally {
      setLoadingComments(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  // ── Track sign-in once per session ──────────────────────────────────
  useEffect(() => {
    if (
      isSignedIn &&
      displayName &&
      !signInTracked.current
    ) {
      signInTracked.current = true;
      trackDiscordEvent('discord_sign_in', displayName, authUser?.id ?? '', slug);
    }
  }, [isSignedIn, displayName, authUser, slug]);

  // ── Submit comment ──────────────────────────────────────────────────────────
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!draft.trim() || submitting || !authUser) return;

    setSubmitting(true);
    setError('');
    setSuccessMsg('');

    try {
      const res = await fetch('/api/discord/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, body: draft.trim(), articleTitle }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? 'Failed to post comment. Please try again.');
        return;
      }

      const { comment } = await res.json();
      setComments((prev) => [comment, ...prev]);
      setDraft('');
      setSuccessMsg('Comment posted!');
      setTimeout(() => setSuccessMsg(''), 3000);

      // Track to GA4
      trackDiscordEvent('discord_comment', displayName, authUser?.id ?? '', slug);
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  // ── Handle sign-out with GA4 tracking ──────────────────────────────────────
  async function handleSignOut() {
    if (authUser) {
      await trackDiscordEvent('discord_sign_out', displayName, authUser.id ?? '', slug);
    }
    await signOut();
    signInTracked.current = false;
  }

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <section
      id="discord-comments"
      aria-label="Comments"
      className="mt-12 border-t border-gray-200 pt-10"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <DiscordIcon className="w-5 h-5 text-[#5865F2]" />
          Discussion
          {comments.length > 0 && (
            <span className="text-sm font-normal text-gray-500 ml-1">
              ({comments.length})
            </span>
          )}
        </h2>

        {/* Signed-in user pill */}
        {isSignedIn && (
          <div className="flex items-center gap-2 text-sm">
            <Image
              src={displayAvatar}
              alt={displayName}
              width={24}
              height={24}
              className="rounded-full"
              unoptimized
            />
            <span className="text-gray-700 font-medium hidden sm:inline">
              {displayName}
            </span>
            <button
              onClick={handleSignOut}
              className="text-xs text-gray-400 hover:text-gray-600 underline underline-offset-2 ml-1"
            >
              Sign out
            </button>
          </div>
        )}
      </div>

      {/* ── Sign-in gate ───────────────────────────────────────────────────── */}
      {!isSignedIn && (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center mb-8">
          <p className="text-gray-700 font-medium mb-1">
            Sign in to join the conversation
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Your comments appear live in our Discord server, every post grows the community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => signIn()}
              disabled={authLoading}
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold py-2.5 px-6 rounded-lg border border-gray-300 transition-colors disabled:opacity-60"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Sign in to comment
            </button>
          </div>
        </div>
      )}

      {/* ── Comment form (any authenticated user) ────────────────────────── */}
      {isSignedIn && (
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex gap-3">
            {displayAvatar && (
              <div className="shrink-0 pt-0.5">
                <Image
                  src={displayAvatar}
                  alt={displayName}
                  width={36}
                  height={36}
                  className="rounded-full"
                  unoptimized
                />
              </div>
            )}
            <div className="flex-1">
              <textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Add a comment…"
                maxLength={1000}
                rows={3}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#5865F2]/40 focus:border-[#5865F2] transition"
              />
              <div className="flex items-center justify-between mt-2 gap-3">
                <span className="text-xs text-gray-400">
                  {draft.length}/1000 · Visible in our Discord channel
                </span>
                <button
                  type="submit"
                  disabled={!draft.trim() || submitting}
                  className="inline-flex items-center gap-1.5 bg-[#5865F2] hover:bg-[#4752C4] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <DiscordIcon className="w-3.5 h-3.5" />
                  {submitting ? 'Posting…' : 'Post'}
                </button>
              </div>

              {error && (
                <p className="text-xs text-red-600 mt-2" role="alert">{error}</p>
              )}
              {successMsg && (
                <p className="text-xs text-green-600 mt-2" role="status">
                  {successMsg}{' '}
                  <a
                    href="https://discord.gg/wBsgkU4uAf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5865F2] hover:underline ml-1"
                  >
                    See it live in Discord →
                  </a>
                </p>
              )}
            </div>
          </div>
        </form>
      )}

      {/* ── Comment list ───────────────────────────────────────────────────── */}
      {loadingComments ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-3 py-4 animate-pulse">
              <div className="w-9 h-9 rounded-full bg-gray-200 shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-gray-200 rounded w-24" />
                <div className="h-3 bg-gray-200 rounded w-full" />
                <div className="h-3 bg-gray-200 rounded w-3/4" />
              </div>
            </div>
          ))}
        </div>
      ) : comments.length === 0 ? (
        <div className="text-center py-10 text-gray-500 text-sm">
          <DiscordIcon className="w-8 h-8 text-gray-300 mx-auto mb-3" />
          No comments yet.{' '}
          {isSignedIn
            ? 'Be the first to start the conversation!'
            : 'Sign in to start the conversation.'}
        </div>
      ) : (
        <div className="divide-y divide-gray-100">
          {comments.map((c) => (
            <CommentCard key={c.id} comment={c} />
          ))}
        </div>
      )}

      {/* ── Discord community growth banner ───────────────────────────────── */}
      <div className="mt-8 rounded-xl bg-[#5865F2]/5 border border-[#5865F2]/20 p-4 flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <DiscordIcon className="w-8 h-8 text-[#5865F2] shrink-0" />
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Every comment appears live in our Discord server.
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              Join to see the full conversation, get notified on new articles, and connect with the community.
            </p>
          </div>
        </div>
        <a
          href="https://discord.gg/wBsgkU4uAf"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] active:bg-[#3C45A5] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
        >
          <DiscordIcon className="w-4 h-4" />
          Join ObjectWire Discord
        </a>
      </div>

      {/* Footer note */}
      <p className="text-xs text-gray-400 mt-4 text-center">
        Comments sync to our{' '}
        <a
          href="https://discord.gg/wBsgkU4uAf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#5865F2] hover:underline"
        >
          ObjectWire Discord
        </a>
        {articleTitle ? ` · ${articleTitle}` : ''}.
      </p>
    </section>
  );
}
