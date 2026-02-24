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
import { signIn, signOut, useSession } from 'next-auth/react';
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
  const { data: session, status } = useSession();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loadingComments, setLoadingComments] = useState(true);
  const [draft, setDraft] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const signInTracked = useRef(false);

  const user = session?.user as (DiscordUser & { name?: string | null }) | undefined;

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

  // ── Track Discord sign-in once per session ──────────────────────────────────
  useEffect(() => {
    if (
      status === 'authenticated' &&
      user?.discordUsername &&
      !signInTracked.current
    ) {
      signInTracked.current = true;
      trackDiscordEvent('discord_sign_in', user.discordUsername, user.discordId, slug);
    }
  }, [status, user, slug]);

  // ── Submit comment ──────────────────────────────────────────────────────────
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!draft.trim() || submitting || !user) return;

    setSubmitting(true);
    setError('');
    setSuccessMsg('');

    try {
      const res = await fetch('/api/discord/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, body: draft.trim() }),
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
      trackDiscordEvent('discord_comment', user.discordUsername, user.discordId, slug);
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  // ── Handle sign-out with GA4 tracking ──────────────────────────────────────
  async function handleSignOut() {
    if (user) {
      await trackDiscordEvent('discord_sign_out', user.discordUsername, user.discordId, slug);
    }
    await signOut({ redirect: false });
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
        {status === 'authenticated' && user?.discordUsername && (
          <div className="flex items-center gap-2 text-sm">
            <Image
              src={user.discordAvatar ?? '/favicon.ico'}
              alt={user.discordUsername}
              width={24}
              height={24}
              className="rounded-full"
              unoptimized
            />
            <span className="text-gray-700 font-medium hidden sm:inline">
              {user.discordUsername}
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
      {status !== 'authenticated' && (
        <div className="bg-[#5865F2]/5 border border-[#5865F2]/20 rounded-xl p-6 text-center mb-8">
          <DiscordIcon className="w-8 h-8 text-[#5865F2] mx-auto mb-3" />
          <p className="text-gray-700 font-medium mb-1">
            Sign in with Discord to join the conversation
          </p>
          <p className="text-sm text-gray-500 mb-5">
            Your comments are synced to our Discord community.
          </p>
          <button
            onClick={() =>
              signIn('discord', {
                callbackUrl: typeof window !== 'undefined' ? window.location.href : '/',
              })
            }
            disabled={status === 'loading'}
            className="inline-flex items-center gap-2.5 bg-[#5865F2] hover:bg-[#4752C4] active:bg-[#3C45A5] text-white font-semibold py-2.5 px-6 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5865F2] focus-visible:ring-offset-2 disabled:opacity-60"
          >
            <DiscordIcon className="w-4 h-4" />
            {status === 'loading' ? 'Loading…' : 'Continue with Discord'}
          </button>
        </div>
      )}

      {/* ── Comment form (authenticated) ───────────────────────────────────── */}
      {status === 'authenticated' && (
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex gap-3">
            {user?.discordAvatar && (
              <div className="shrink-0 pt-0.5">
                <Image
                  src={user.discordAvatar}
                  alt={user.discordUsername ?? 'You'}
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
                <p className="text-xs text-green-600 mt-2" role="status">{successMsg}</p>
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
          {status === 'authenticated'
            ? 'Be the first to start the conversation!'
            : 'Sign in with Discord to start the conversation.'}
        </div>
      ) : (
        <div className="divide-y divide-gray-100">
          {comments.map((c) => (
            <CommentCard key={c.id} comment={c} />
          ))}
        </div>
      )}

      {/* Footer note */}
      <p className="text-xs text-gray-400 mt-6 text-center">
        Comments sync to our{' '}
        <a
          href="https://discord.gg/objectwire"
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
