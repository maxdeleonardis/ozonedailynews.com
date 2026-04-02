'use client';

// =============================================================================
// DiscordComments
// =============================================================================
// Two ways to comment — no login required:
//
//   1. GUEST   — type a name + message, post instantly. Shows as "Name (Guest)"
//                in the comment list and in Discord.
//   2. DISCORD — click "Connect Discord", OAuth via Supabase, real username
//                and avatar used on both site and Discord.
//
// Every comment is saved to discord_comments in Supabase and forwarded to the
// Discord Forum Channel at:
//   https://discord.com/channels/1385068774549360772/1485009785048010934
//
// Usage:
//   import DiscordComments from '@/components/discord-comments';
//   <DiscordComments slug="youtube/sidemen/ksi" articleTitle="KSI | ObjectWire" />
// =============================================================================

import { useState, useEffect, useCallback, useRef } from 'react';
import { createBrowserClient } from '@/lib/supabase/client';
import Image from 'next/image';

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

interface Props {
  slug: string;
  articleTitle?: string;
}

// ── GA4 client-side helper ────────────────────────────────────────────────────

// ── Sub-components ────────────────────────────────────────────────────────────

function DiscordIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

function CommentCard({ comment }: { comment: Comment }) {
  const isGuest = comment.discordId.startsWith('guest_');
  const avatarSrc = comment.discordAvatar ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.discordUsername)}&background=${isGuest ? '9ca3af' : '5865F2'}&color=fff&size=72`;

  return (
    <div className="flex gap-3 py-4">
      <div className="shrink-0">
        <Image src={avatarSrc} alt={comment.discordUsername} width={36} height={36} className="rounded-full" unoptimized />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 mb-1 flex-wrap">
          <span className="font-semibold text-gray-900 text-sm">{comment.discordUsername}</span>
          {isGuest ? (
            <span className="text-[10px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-full font-medium">Guest</span>
          ) : (
            <span className="inline-flex items-center gap-0.5 text-[10px] text-[#5865F2] font-medium">
              <DiscordIcon className="w-3 h-3" /> Discord
            </span>
          )}
          <span className="text-xs text-gray-400">{timeAgo(comment.createdAt)}</span>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed break-words">{comment.body}</p>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function DiscordComments({ slug, articleTitle }: Props) {
  const [comments, setComments]               = useState<Comment[]>([]);
  const [loadingComments, setLoadingComments] = useState(true);

  // Discord OAuth identity (Supabase)
  const [discordUser, setDiscordUser]         = useState<{ id: string; name: string; avatar: string } | null>(null);
  const [discordLoading, setDiscordLoading]   = useState(false);

  // Form
  const [draft, setDraft]           = useState('');
  const [guestName, setGuestName]   = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError]           = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const hasMounted = useRef(false);

  // ── On mount: restore guest name + check for Discord Supabase session ─────
  useEffect(() => {
    if (hasMounted.current) return;
    hasMounted.current = true;

    // Restore saved guest name
    try {
      const saved = localStorage.getItem('ow_guest_name');
      if (saved) setGuestName(saved);
    } catch { /* ignore */ }

    // Check if user already has a Discord Supabase session
    const supabase = createBrowserClient();
    supabase.auth.getUser().then(({ data }) => {
      const u = data.user;
      if (u?.app_metadata?.provider === 'discord') {
        setDiscordUser({
          id:     u.id,
          name:   u.user_metadata?.full_name ?? u.user_metadata?.custom_claims?.global_name ?? u.user_metadata?.name ?? 'Discord User',
          avatar: u.user_metadata?.avatar_url ?? '',
        });
      }
    });
  }, []);

  // ── Fetch comments ────────────────────────────────────────────────────────
  const fetchComments = useCallback(async () => {
    try {
      const res = await fetch(`/api/discord/comments?slug=${encodeURIComponent(slug)}`);
      if (res.ok) {
        const data = await res.json();
        setComments(data.comments ?? []);
      }
    } catch { /* silent */ }
    finally { setLoadingComments(false); }
  }, [slug]);

  useEffect(() => { fetchComments(); }, [fetchComments]);

  // ── Connect Discord (Supabase OAuth) ──────────────────────────────────────
  async function handleConnectDiscord() {
    setDiscordLoading(true);
    const supabase = createBrowserClient();
    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo: `${location.origin}/auth/callback?next=${encodeURIComponent(location.pathname + '#discord-comments')}`,
        scopes: 'identify',
      },
    });
    if (oauthError) {
      setDiscordLoading(false);
      setError('Could not connect Discord. Please try again.');
    }
    // On success the browser redirects away; loading stays until redirect
  }

  // ── Disconnect Discord ────────────────────────────────────────────────────
  async function handleDisconnectDiscord() {
    const supabase = createBrowserClient();
    await supabase.auth.signOut();
    setDiscordUser(null);
  }

  // ── Submit comment ────────────────────────────────────────────────────────
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!draft.trim() || submitting) return;

    // Guest mode requires a name
    if (!discordUser && !guestName.trim()) {
      setError('Enter your name to post as a guest.');
      return;
    }

    setSubmitting(true);
    setError('');
    setSuccessMsg('');

    // Persist guest name for next time
    if (!discordUser && guestName.trim()) {
      try { localStorage.setItem('ow_guest_name', guestName.trim()); } catch { /* ignore */ }
    }

    try {
      const res = await fetch('/api/discord/comments', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug,
          body:        draft.trim(),
          articleTitle,
          // If not Discord-authed, send guest identity in the payload
          guestName:   discordUser ? undefined : guestName.trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? 'Failed to post. Please try again.');
        return;
      }

      const { comment } = await res.json();
      setComments((prev) => [comment, ...prev]);
      setDraft('');
      setSuccessMsg('Comment posted!');
      setTimeout(() => setSuccessMsg(''), 4000);
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  // ── Render ────────────────────────────────────────────────────────────────
  const posterName   = discordUser?.name ?? (guestName.trim() || 'Guest');
  const posterAvatar = discordUser?.avatar ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(posterName)}&background=9ca3af&color=fff&size=72`;

  return (
    <section id="discord-comments" aria-label="Comments" className="mt-12 border-t border-gray-200 pt-10">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <DiscordIcon className="w-5 h-5 text-[#5865F2]" />
          Discussion
          {comments.length > 0 && (
            <span className="text-sm font-normal text-gray-500 ml-1">({comments.length})</span>
          )}
        </h2>

        {/* Discord connected pill */}
        {discordUser && (
          <div className="flex items-center gap-2 text-sm">
            <Image
              src={discordUser.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(discordUser.name)}&background=5865F2&color=fff&size=48`}
              alt={discordUser.name}
              width={24}
              height={24}
              className="rounded-full"
              unoptimized
            />
            <span className="text-gray-700 font-medium hidden sm:inline">{discordUser.name}</span>
            <DiscordIcon className="w-3.5 h-3.5 text-[#5865F2]" />
            <button
              onClick={handleDisconnectDiscord}
              className="text-xs text-gray-400 hover:text-gray-600 underline underline-offset-2 ml-1"
            >
              Disconnect
            </button>
          </div>
        )}
      </div>

      {/* ── Comment Form (always visible — guest or Discord) ───────────────── */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-3">
          {/* Avatar */}
          <div className="shrink-0 pt-0.5">
            <Image src={posterAvatar} alt={posterName} width={36} height={36} className="rounded-full" unoptimized />
          </div>

          <div className="flex-1 space-y-2">
            {/* Guest name field — only when not connected to Discord */}
            {!discordUser && (
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Your name"
                maxLength={40}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5865F2]/40 focus:border-[#5865F2] transition"
              />
            )}

            {/* Comment textarea */}
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={discordUser ? `Comment as ${discordUser.name}…` : 'Write a comment…'}
              maxLength={1000}
              rows={3}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#5865F2]/40 focus:border-[#5865F2] transition"
            />

            {/* Footer row */}
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400">{draft.length}/1000</span>

                {/* Connect Discord nudge */}
                {!discordUser && (
                  <button
                    type="button"
                    onClick={handleConnectDiscord}
                    disabled={discordLoading}
                    className="inline-flex items-center gap-1.5 text-xs text-[#5865F2] hover:text-[#4752C4] font-medium transition-colors disabled:opacity-60"
                  >
                    <DiscordIcon className="w-3.5 h-3.5" />
                    {discordLoading ? 'Connecting…' : 'Connect Discord'}
                  </button>
                )}
              </div>

              <button
                type="submit"
                disabled={!draft.trim() || submitting || (!discordUser && !guestName.trim())}
                className="inline-flex items-center gap-1.5 bg-[#5865F2] hover:bg-[#4752C4] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <DiscordIcon className="w-3.5 h-3.5" />
                {submitting ? 'Posting…' : 'Post'}
              </button>
            </div>

            {error && <p className="text-xs text-red-600" role="alert">{error}</p>}
            {successMsg && (
              <p className="text-xs text-green-600" role="status">
                {successMsg}{' '}
                <a href="https://discord.gg/wBsgkU4uAf" target="_blank" rel="noopener noreferrer"
                  className="text-[#5865F2] hover:underline">See it in Discord →</a>
              </p>
            )}
          </div>
        </div>
      </form>

      {/* ── Comment List ───────────────────────────────────────────────────── */}
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
          <p>No comments yet. Be the first to start the conversation.</p>
        </div>
      ) : (
        <div className="divide-y divide-gray-100">
          {comments.map((c) => <CommentCard key={c.id} comment={c} />)}
        </div>
      )}

      {/* ── Discord Banner ─────────────────────────────────────────────────── */}
      <div className="mt-8 rounded-xl bg-[#5865F2]/5 border border-[#5865F2]/20 p-4 flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <DiscordIcon className="w-8 h-8 text-[#5865F2] shrink-0" />
          <div>
            <p className="text-sm font-semibold text-gray-900">Every comment appears live in our Discord server.</p>
            <p className="text-xs text-gray-500 mt-0.5">Join to see the full conversation and connect with the community.</p>
          </div>
        </div>
        <a
          href="https://discord.gg/wBsgkU4uAf"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
        >
          <DiscordIcon className="w-4 h-4" />
          Join ObjectWire Discord
        </a>
      </div>

      <p className="text-xs text-gray-400 mt-4 text-center">
        Comments sync to our{' '}
        <a href="https://discord.gg/wBsgkU4uAf" target="_blank" rel="noopener noreferrer" className="text-[#5865F2] hover:underline">
          ObjectWire Discord
        </a>
        {articleTitle ? ` · ${articleTitle}` : ''}.
      </p>
    </section>
  );
}
