// =============================================================================
// VaultDashboard — The core client component for /account
//
// A "Digital Vault" of the user's interests, tastes, and engagement history.
// Tabs: Overview | Liked | Saved | History | Profile
// Future: users will be compensated for their engagement data.
// =============================================================================

'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter }   from 'next/navigation';
import Image            from 'next/image';
import Link             from 'next/link';
import { createBrowserClient } from '@/lib/supabase/client';
import type { User }    from '@supabase/supabase-js';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Profile {
  id: string;
  username: string | null;
  display_name: string | null;
  bio: string | null;
  avatar_url: string | null;
  location: string | null;
  website: string | null;
  created_at: string;
}

interface VaultStats {
  totalLikes: number;
  totalSaves: number;
  totalViews: number;
  totalComments: number;
  readingStreak: number;
  uniqueDaysRead: number;
}

interface InterestEntry { name: string; weight: number }

interface LikeEntry {
  article_slug: string;
  article_title: string;
  article_url: string;
  liked_at: string;
}

interface SaveEntry {
  article_slug: string;
  article_title: string;
  article_url: string;
  article_image: string | null;
  article_category: string | null;
  saved_at: string;
}

interface ViewEntry {
  article_slug: string;
  article_title: string;
  article_url: string;
  article_image: string | null;
  article_category: string | null;
  viewed_at: string;
}

interface CommentEntry {
  id: string;
  slug: string;
  body: string;
  created_at: string;
}

type Tab = 'overview' | 'liked' | 'saved' | 'history' | 'profile';

// ─── Helpers ─────────────────────────────────────────────────────────────────

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

function StatCard({ label, value, icon }: { label: string; value: number | string; icon: string }) {
  return (
    <div className="bg-white border-2 border-black p-4 flex flex-col items-center justify-center text-center min-h-[100px]">
      <span className="text-2xl mb-1">{icon}</span>
      <span className="text-2xl font-black font-serif tabular-nums">{value}</span>
      <span className="text-[10px] font-bold tracking-[.15em] uppercase text-gray-500 mt-1">{label}</span>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function VaultDashboard() {
  const router   = useRouter();
  const supabase = createBrowserClient();

  // Auth + profile
  const [user, setUser]         = useState<User | null>(null);
  const [profile, setProfile]   = useState<Profile | null>(null);
  const [authReady, setAuthReady] = useState(false);

  // Vault data
  const [stats, setStats]           = useState<VaultStats | null>(null);
  const [interests, setInterests]   = useState<InterestEntry[]>([]);
  const [likes, setLikes]           = useState<LikeEntry[]>([]);
  const [saves, setSaves]           = useState<SaveEntry[]>([]);
  const [views, setViews]           = useState<ViewEntry[]>([]);
  const [comments, setComments]     = useState<CommentEntry[]>([]);
  const [vaultLoading, setVaultLoading] = useState(true);

  // Profile editing
  const [editUsername,    setEditUsername]    = useState('');
  const [editDisplayName, setEditDisplayName] = useState('');
  const [editBio,         setEditBio]         = useState('');
  const [editLocation,    setEditLocation]    = useState('');
  const [editWebsite,     setEditWebsite]     = useState('');
  const [saving, setSaving]   = useState(false);
  const [message, setMessage] = useState('');

  // Tabs
  const [tab, setTab] = useState<Tab>('overview');
  const tabRef = useRef<HTMLDivElement>(null);

  // ── Load user + profile ────────────────────────────────────────────────

  const loadProfile = useCallback(async (uid: string) => {
    const { data } = await supabase
      .from('public_profiles')
      .select('*')
      .eq('id', uid)
      .single();

    if (data) {
      setProfile(data);
      setEditUsername(data.username ?? '');
      setEditDisplayName(data.display_name ?? '');
      setEditBio(data.bio ?? '');
      setEditLocation(data.location ?? '');
      setEditWebsite(data.website ?? '');
    }
  }, [supabase]);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user: u } }) => {
      if (!u) {
        router.replace('/login?redirect=/account');
        return;
      }
      setUser(u);
      setAuthReady(true);
      loadProfile(u.id);
    });
  }, [supabase, router, loadProfile]);

  // ── Load vault data ────────────────────────────────────────────────────

  useEffect(() => {
    if (!authReady) return;
    setVaultLoading(true);

    fetch('/api/vault')
      .then(r => r.json())
      .then(data => {
        if (data.error) return;
        setStats(data.stats);
        setInterests(data.interests ?? []);
        setLikes(data.likes ?? []);
        setSaves(data.saves ?? []);
        setViews(data.views ?? []);
        setComments(data.comments ?? []);
      })
      .catch(() => {})
      .finally(() => setVaultLoading(false));
  }, [authReady]);

  // ── Save profile ──────────────────────────────────────────────────────

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    setMessage('');

    const updates: Record<string, unknown> = {
      display_name: editDisplayName || null,
      bio: editBio || null,
      location: editLocation || null,
      website: editWebsite || null,
    };
    if (editUsername) updates.username = editUsername;

    const { error } = await supabase
      .from('public_profiles')
      .update(updates)
      .eq('id', user.id);

    setSaving(false);
    setMessage(error ? error.message : 'Profile saved!');
    if (!error) loadProfile(user.id);
  };

  // ── Sign out ──────────────────────────────────────────────────────────

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.replace('/');
  };

  // ── Unsave handler ────────────────────────────────────────────────────

  const [removing, setRemoving] = useState<string | null>(null);
  const handleUnsave = async (slug: string, title: string, url: string) => {
    setRemoving(slug);
    try {
      await fetch('/api/saves', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, title, url }),
      });
      setSaves(prev => prev.filter(s => s.article_slug !== slug));
      if (stats) setStats({ ...stats, totalSaves: stats.totalSaves - 1 });
    } finally {
      setRemoving(null);
    }
  };

  // ── Unlike handler ────────────────────────────────────────────────────

  const [unliking, setUnliking] = useState<string | null>(null);
  const handleUnlike = async (slug: string, title: string, url: string) => {
    setUnliking(slug);
    try {
      await fetch('/api/likes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, title, url }),
      });
      setLikes(prev => prev.filter(l => l.article_slug !== slug));
      if (stats) setStats({ ...stats, totalLikes: stats.totalLikes - 1 });
    } finally {
      setUnliking(null);
    }
  };

  // ── Loading ───────────────────────────────────────────────────────────

  if (!authReady) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="animate-pulse space-y-6">
          <div className="h-8 w-56 bg-gray-200 rounded" />
          <div className="flex gap-4">
            <div className="h-24 w-24 bg-gray-200 rounded-full" />
            <div className="flex-1 space-y-3 py-2">
              <div className="h-5 w-48 bg-gray-200 rounded" />
              <div className="h-4 w-32 bg-gray-200 rounded" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[1,2,3,4].map(i => <div key={i} className="h-24 bg-gray-200 rounded" />)}
          </div>
        </div>
      </main>
    );
  }

  const avatarLetter = (profile?.display_name || user?.email || 'U').charAt(0).toUpperCase();
  const provider     = user?.app_metadata?.provider ?? 'email';
  const maxWeight    = Math.max(...interests.map(i => i.weight), 1);

  // ── Tab definitions ───────────────────────────────────────────────────

  const tabs: { id: Tab; label: string; icon: string; count?: number }[] = [
    { id: 'overview', label: 'Overview',  icon: '◈' },
    { id: 'liked',    label: 'Liked',     icon: '♥', count: stats?.totalLikes },
    { id: 'saved',    label: 'Saved',     icon: '⊞', count: stats?.totalSaves },
    { id: 'history',  label: 'History',   icon: '◷', count: stats?.totalViews },
    { id: 'profile',  label: 'Profile',   icon: '⚙' },
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12">

      {/* ══════════════════════════════════════════════════════════════════
          HEADER — Identity + Vault branding
          ══════════════════════════════════════════════════════════════════ */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <h1 className="text-xl sm:text-2xl font-black tracking-tight font-serif">Your Vault</h1>
          <span className="text-[10px] font-bold tracking-[.2em] uppercase px-2 py-0.5 bg-gradient-to-r from-amber-100 to-yellow-50 text-amber-700 border border-amber-200 rounded-full">
            Digital
          </span>
        </div>
        <button
          onClick={handleSignOut}
          className="text-[11px] font-bold tracking-widest uppercase px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
        >
          Sign Out
        </button>
      </div>
      <p className="text-xs text-gray-400 mb-8">
        Your interests, engagement, and reading identity, all in one place.
      </p>

      {/* ══════════════════════════════════════════════════════════════════
          IDENTITY CARD
          ══════════════════════════════════════════════════════════════════ */}
      <section className="flex items-center gap-5 mb-8 p-5 border-2 border-black bg-gradient-to-br from-white to-gray-50">
        {profile?.avatar_url ? (
          <Image
            src={profile.avatar_url}
            alt={profile.display_name || 'Avatar'}
            width={72}
            height={72}
            className="rounded-full w-[72px] h-[72px] object-cover border-2 border-black flex-shrink-0"
          />
        ) : (
          <div className="w-[72px] h-[72px] rounded-full bg-black flex items-center justify-center text-white font-black text-2xl font-serif flex-shrink-0">
            {avatarLetter}
          </div>
        )}
        <div className="min-w-0">
          <p className="font-black text-gray-900 text-lg font-serif truncate">
            {profile?.display_name || user?.email}
          </p>
          <p className="text-xs text-gray-400 font-mono truncate">{user?.email}</p>
          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
            <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 bg-gray-100 text-gray-500">
              via {provider}
            </span>
            {profile?.username && (
              <Link href={`/profile/${profile.username}`} className="text-[10px] font-bold text-black hover:underline tracking-wide uppercase">
                @{profile.username}
              </Link>
            )}
            <span className="text-[10px] text-gray-400">
              Member since {user?.created_at
                ? new Date(user.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                : '—'}
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          TAB BAR
          ══════════════════════════════════════════════════════════════════ */}
      <div ref={tabRef} className="flex gap-0 border-b-2 border-black mb-8 overflow-x-auto scrollbar-none">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`
              flex items-center gap-1.5 px-4 py-3 text-xs font-bold tracking-wider uppercase whitespace-nowrap
              transition-colors border-b-2 -mb-[2px]
              ${tab === t.id
                ? 'border-black text-black'
                : 'border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-300'}
            `}
          >
            <span className="text-sm">{t.icon}</span>
            {t.label}
            {t.count !== undefined && t.count > 0 && (
              <span className="ml-1 px-1.5 py-0 text-[9px] font-bold bg-black text-white rounded-full tabular-nums">
                {t.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          TAB: OVERVIEW
          ══════════════════════════════════════════════════════════════════ */}
      {tab === 'overview' && (
        <div className="space-y-10">

          {/* Stats Grid */}
          {vaultLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[1,2,3,4].map(i => <div key={i} className="h-[100px] bg-gray-100 animate-pulse" />)}
            </div>
          ) : stats && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <StatCard icon="♥"  label="Articles Liked" value={stats.totalLikes} />
              <StatCard icon="⊞"  label="Articles Saved" value={stats.totalSaves} />
              <StatCard icon="◷"  label="Articles Read"  value={stats.totalViews} />
              <StatCard icon="💬" label="Comments"       value={stats.totalComments} />
            </div>
          )}

          {/* Reading Streak */}
          {stats && stats.readingStreak > 0 && (
            <div className="flex items-center gap-4 p-4 border-2 border-amber-300 bg-amber-50">
              <span className="text-3xl">🔥</span>
              <div>
                <p className="font-black font-serif text-lg">
                  {stats.readingStreak}-day reading streak
                </p>
                <p className="text-xs text-gray-500">
                  You&apos;ve read articles {stats.uniqueDaysRead} unique day{stats.uniqueDaysRead !== 1 ? 's' : ''} recently. Keep it up.
                </p>
              </div>
            </div>
          )}

          {/* Interest Map */}
          <div>
            <h2 className="text-xs font-black tracking-[.2em] uppercase text-gray-400 mb-4">
              Your Interest Map
            </h2>
            {interests.length === 0 ? (
              <div className="text-center py-10">
                <span className="text-4xl block mb-3">🗺️</span>
                <p className="text-sm text-gray-500">
                  Start reading, liking, and saving articles to build your interest map.
                </p>
              </div>
            ) : (
              <div className="space-y-2.5">
                {interests.map(({ name, weight }) => (
                  <div key={name} className="flex items-center gap-3">
                    <span className="w-28 sm:w-36 text-xs font-bold uppercase tracking-wider text-gray-700 text-right truncate flex-shrink-0">
                      {name}
                    </span>
                    <div className="flex-1 h-6 bg-gray-100 overflow-hidden">
                      <div
                        className="h-full bg-black transition-all duration-500"
                        style={{ width: `${Math.max((weight / maxWeight) * 100, 4)}%` }}
                      />
                    </div>
                    <span className="text-xs font-mono text-gray-400 w-8 text-right tabular-nums flex-shrink-0">
                      {weight}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recent Activity Feed */}
          <div>
            <h2 className="text-xs font-black tracking-[.2em] uppercase text-gray-400 mb-4">
              Recent Activity
            </h2>
            {vaultLoading ? (
              <div className="space-y-3">
                {[1,2,3].map(i => <div key={i} className="h-14 bg-gray-100 animate-pulse rounded" />)}
              </div>
            ) : (
              <RecentActivityFeed likes={likes} saves={saves} views={views} comments={comments} />
            )}
          </div>

          {/* Vault Notice */}
          <div className="p-5 border-2 border-dashed border-gray-300 bg-gray-50 text-center">
            <span className="text-2xl block mb-2">🏦</span>
            <p className="text-sm font-bold text-gray-700 mb-1">Your data, your value</p>
            <p className="text-xs text-gray-500 max-w-md mx-auto">
              Every like, save, and article you read contributes to your digital profile.
              Soon, OzoneNews will compensate users for their engagement and attention.
              Your Vault is where that value accumulates.
            </p>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          TAB: LIKED
          ══════════════════════════════════════════════════════════════════ */}
      {tab === 'liked' && (
        <div>
          {vaultLoading ? (
            <ListSkeleton />
          ) : likes.length === 0 ? (
            <EmptyState
              icon="♥"
              title="No liked articles yet"
              body="Hit the heart on any article to add it to your Vault."
            />
          ) : (
            <div className="space-y-2">
              <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold pb-2">
                {likes.length} liked article{likes.length !== 1 ? 's' : ''}
              </p>
              {likes.map(entry => (
                <div
                  key={entry.article_slug}
                  className="group flex items-center gap-4 p-3 border border-transparent hover:border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-red-400 text-lg flex-shrink-0">♥</span>
                  <div className="flex-1 min-w-0">
                    <Link href={entry.article_url}>
                      <p className="text-sm font-semibold text-gray-900 line-clamp-1 hover:text-red-600 transition-colors">
                        {entry.article_title}
                      </p>
                    </Link>
                    <p className="text-[11px] text-gray-400 mt-0.5">{timeAgo(entry.liked_at)}</p>
                  </div>
                  <button
                    onClick={() => handleUnlike(entry.article_slug, entry.article_title, entry.article_url)}
                    disabled={unliking === entry.article_slug}
                    title="Remove like"
                    className="flex-shrink-0 p-1.5 text-gray-300 hover:text-red-400 hover:bg-red-50 transition-colors disabled:opacity-40 rounded-full opacity-0 group-hover:opacity-100"
                  >
                    {unliking === entry.article_slug ? (
                      <Spinner />
                    ) : (
                      <XIcon />
                    )}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          TAB: SAVED
          ══════════════════════════════════════════════════════════════════ */}
      {tab === 'saved' && (
        <div>
          {vaultLoading ? (
            <ListSkeleton />
          ) : saves.length === 0 ? (
            <EmptyState
              icon="⊞"
              title="Nothing saved yet"
              body="Hit the save button on any article to bookmark it in your Vault."
            />
          ) : (
            <div className="space-y-2">
              <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold pb-2">
                {saves.length} saved article{saves.length !== 1 ? 's' : ''}
              </p>
              {saves.map(entry => (
                <div
                  key={entry.article_slug}
                  className="group flex gap-4 p-3 border border-transparent hover:border-gray-200 hover:bg-gray-50 transition-colors"
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
                      <div className="w-full h-full flex items-center justify-center text-xl bg-gray-50">⊞</div>
                    )}
                  </Link>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    {entry.article_category && (
                      <span className="text-[10px] font-bold uppercase tracking-wide text-amber-600">
                        {entry.article_category}
                      </span>
                    )}
                    <Link href={entry.article_url}>
                      <p className="text-sm font-semibold text-gray-900 line-clamp-2 hover:text-amber-700 transition-colors leading-snug">
                        {entry.article_title}
                      </p>
                    </Link>
                    <p className="text-[11px] text-gray-400 mt-0.5">Saved {timeAgo(entry.saved_at)}</p>
                  </div>

                  {/* Unsave */}
                  <button
                    onClick={() => handleUnsave(entry.article_slug, entry.article_title, entry.article_url)}
                    disabled={removing === entry.article_slug}
                    title="Remove from saved"
                    className="flex-shrink-0 self-center p-1.5 text-gray-300 hover:text-red-400 hover:bg-red-50 transition-colors disabled:opacity-40 rounded-full opacity-0 group-hover:opacity-100"
                  >
                    {removing === entry.article_slug ? <Spinner /> : <XIcon />}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          TAB: HISTORY
          ══════════════════════════════════════════════════════════════════ */}
      {tab === 'history' && (
        <div>
          {vaultLoading ? (
            <ListSkeleton />
          ) : views.length === 0 ? (
            <EmptyState
              icon="◷"
              title="No reading history yet"
              body="Articles you read will appear here. History is kept for 7 days."
            />
          ) : (
            <div className="space-y-2">
              <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold pb-2">
                {views.length} article{views.length !== 1 ? 's' : ''} in the last 7 days
              </p>
              {views.map(entry => (
                <Link
                  key={entry.article_slug}
                  href={entry.article_url}
                  className="group flex gap-4 p-3 border border-transparent hover:border-gray-200 hover:bg-gray-50 transition-colors"
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
                      <div className="w-full h-full flex items-center justify-center text-xl">◷</div>
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
                    <p className="text-[11px] text-gray-400 mt-0.5">{timeAgo(entry.viewed_at)}</p>
                  </div>

                  {/* Arrow */}
                  <svg className="w-4 h-4 text-gray-300 flex-shrink-0 self-center group-hover:text-gray-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          TAB: PROFILE (Edit)
          ══════════════════════════════════════════════════════════════════ */}
      {tab === 'profile' && (
        <div className="max-w-xl space-y-8">

          {/* Edit fields */}
          <section>
            <h2 className="text-xs font-black tracking-[.2em] uppercase text-gray-400 mb-5">Edit Profile</h2>

            <div className="space-y-4">
              <Field
                label="Username"
                value={editUsername}
                onChange={v => setEditUsername(v.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
                placeholder="your_handle"
                hint="3-30 characters, letters, numbers, underscores"
                mono
              />
              <Field
                label="Display Name"
                value={editDisplayName}
                onChange={setEditDisplayName}
                placeholder="Your Name"
              />
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Bio</label>
                <textarea
                  value={editBio}
                  onChange={e => setEditBio(e.target.value)}
                  placeholder="Tell us about yourself..."
                  maxLength={500}
                  rows={3}
                  className="w-full px-3 py-2 border-2 border-black text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black"
                />
                <p className="text-[11px] text-gray-400 mt-1">{editBio.length}/500</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Location" value={editLocation} onChange={setEditLocation} placeholder="Austin, TX" />
                <Field label="Website"  value={editWebsite}  onChange={setEditWebsite}  placeholder="https://yoursite.com" />
              </div>

              {message && (
                <p className={`text-sm font-medium ${message === 'Profile saved!' ? 'text-green-600' : 'text-red-600'}`}>
                  {message}
                </p>
              )}

              <button
                onClick={handleSave}
                disabled={saving}
                className="w-full py-3 bg-black text-white text-xs font-black tracking-widest uppercase hover:bg-gray-800 transition-colors disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Save Profile'}
              </button>
            </div>
          </section>

          {/* Account Details */}
          <section className="border-t-2 border-black pt-6">
            <h2 className="text-xs font-black tracking-[.2em] uppercase text-gray-400 mb-4">Account Details</h2>
            <dl className="space-y-3 text-sm">
              <DetailRow label="Email"           value={user?.email ?? '—'} mono />
              <DetailRow
                label="Member since"
                value={user?.created_at
                  ? new Date(user.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
                  : '—'}
                mono
              />
              <DetailRow label="Sign-in method"  value={provider} mono capitalize />
              <DetailRow label="User ID"          value={user?.id?.slice(0, 8) + '...'} mono />
            </dl>
          </section>

          {/* Danger Zone */}
          <section className="border-t border-red-200 pt-6">
            <h2 className="text-xs font-black tracking-[.2em] uppercase text-red-400 mb-3">Danger Zone</h2>
            <p className="text-xs text-gray-500 mb-3">
              Signing out will not delete your data. Your Vault persists across sessions.
            </p>
            <button
              onClick={handleSignOut}
              className="px-5 py-2.5 border-2 border-red-300 text-red-500 text-xs font-bold tracking-widest uppercase hover:bg-red-50 transition-colors"
            >
              Sign Out
            </button>
          </section>
        </div>
      )}

    </main>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// Sub-components
// ═══════════════════════════════════════════════════════════════════════════════

function Field({
  label,
  value,
  onChange,
  placeholder,
  hint,
  mono,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  hint?: string;
  mono?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border-2 border-black text-sm focus:outline-none focus:ring-2 focus:ring-black ${mono ? 'font-mono' : ''}`}
      />
      {hint && <p className="text-[11px] text-gray-400 mt-1">{hint}</p>}
    </div>
  );
}

function DetailRow({
  label,
  value,
  mono,
  capitalize,
}: {
  label: string;
  value: string;
  mono?: boolean;
  capitalize?: boolean;
}) {
  return (
    <div className="flex justify-between items-center py-1">
      <dt className="text-gray-500">{label}</dt>
      <dd className={`text-gray-900 ${mono ? 'font-mono' : ''} ${capitalize ? 'capitalize' : ''}`}>{value}</dd>
    </div>
  );
}

function EmptyState({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center gap-3">
      <span className="text-5xl">{icon}</span>
      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      <p className="text-gray-500 text-sm max-w-xs">{body}</p>
      <Link
        href="/"
        className="mt-2 px-5 py-2.5 bg-black text-white text-xs font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors"
      >
        Browse Articles
      </Link>
    </div>
  );
}

function ListSkeleton() {
  return (
    <div className="space-y-3">
      {[1,2,3,4,5].map(i => (
        <div key={i} className="flex gap-4 p-3 animate-pulse">
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

function Spinner() {
  return (
    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

// ─── Recent Activity Feed ────────────────────────────────────────────────────

function RecentActivityFeed({
  likes,
  saves,
  views,
  comments,
}: {
  likes: LikeEntry[];
  saves: SaveEntry[];
  views: ViewEntry[];
  comments: CommentEntry[];
}) {
  // Merge all activity into a unified feed, sorted by time
  type ActivityItem = {
    type: 'like' | 'save' | 'view' | 'comment';
    title: string;
    url: string;
    time: string;
  };

  const feed: ActivityItem[] = [];

  for (const l of likes.slice(0, 10)) {
    feed.push({ type: 'like', title: l.article_title, url: l.article_url, time: l.liked_at });
  }
  for (const s of saves.slice(0, 10)) {
    feed.push({ type: 'save', title: s.article_title, url: s.article_url, time: s.saved_at });
  }
  for (const v of views.slice(0, 10)) {
    feed.push({ type: 'view', title: v.article_title, url: v.article_url, time: v.viewed_at });
  }
  for (const c of comments.slice(0, 5)) {
    feed.push({ type: 'comment', title: c.body.slice(0, 80), url: `/${c.slug}`, time: c.created_at });
  }

  feed.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());

  const icons = { like: '♥', save: '⊞', view: '◷', comment: '💬' };
  const colors = {
    like:    'text-red-400',
    save:    'text-amber-500',
    view:    'text-purple-400',
    comment: 'text-blue-400',
  };
  const verbs = {
    like:    'Liked',
    save:    'Saved',
    view:    'Read',
    comment: 'Commented on',
  };

  if (feed.length === 0) {
    return (
      <div className="text-center py-10">
        <span className="text-3xl block mb-2">📊</span>
        <p className="text-sm text-gray-500">No activity yet. Start reading to build your timeline.</p>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      {feed.slice(0, 15).map((item, i) => (
        <Link
          key={`${item.type}-${i}`}
          href={item.url}
          className="flex items-center gap-3 p-2.5 hover:bg-gray-50 transition-colors group"
        >
          <span className={`text-base flex-shrink-0 ${colors[item.type]}`}>
            {icons[item.type]}
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500">
              <span className="font-semibold text-gray-600">{verbs[item.type]}</span>
              {' '}
              <span className="text-gray-900 font-medium group-hover:text-black">{item.title}</span>
            </p>
          </div>
          <span className="text-[10px] text-gray-400 flex-shrink-0 tabular-nums">{timeAgo(item.time)}</span>
        </Link>
      ))}
    </div>
  );
}
