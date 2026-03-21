// =============================================================================
// /profile/[username] — Public profile page
//
// Shows a user's public profile: display name, avatar, bio, linked accounts,
// and their activity (likes, saves, recent comments).
// =============================================================================

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import type { Metadata } from 'next';

interface ProfilePageProps {
  params: Promise<{ username: string }>;
}

async function getProfile(username: string) {
  const supabase = await createClient();

  const { data } = await supabase
    .from('public_profiles')
    .select('id, user_hash, username, display_name, bio, avatar_url, location, website, primary_provider, google_id, discord_id, discord_username, created_at')
    .eq('username', username)
    .single();

  return data;
}

async function getUserActivity(userHash: string) {
  const supabase = await createClient();

  const [likes, saves] = await Promise.all([
    supabase
      .from('article_likes')
      .select('article_slug, article_title, article_url, liked_at')
      .eq('user_hash', userHash)
      .order('liked_at', { ascending: false })
      .limit(10),
    supabase
      .from('article_saves')
      .select('article_slug, article_title, article_url, saved_at')
      .eq('user_hash', userHash)
      .order('saved_at', { ascending: false })
      .limit(10),
  ]);

  return {
    likes: likes.data ?? [],
    saves: saves.data ?? [],
  };
}

export async function generateMetadata({ params }: ProfilePageProps): Promise<Metadata> {
  const { username } = await params;
  const profile = await getProfile(username);
  if (!profile) return { title: 'Profile Not Found — OBJECTWIRE' };

  return {
    title: `${profile.display_name} (@${profile.username}) — OBJECTWIRE`,
    description: profile.bio || `${profile.display_name}'s profile on OBJECTWIRE`,
  };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { username } = await params;
  const profile = await getProfile(username);
  if (!profile) notFound();

  const activity = await getUserActivity(profile.user_hash);
  const memberSince = new Date(profile.created_at).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* ── Profile Header ─────────────────────────────────────────────── */}
      <div className="flex items-start gap-6 mb-8">
        {profile.avatar_url ? (
          <Image
            src={profile.avatar_url}
            alt={profile.display_name}
            width={96}
            height={96}
            className="rounded-full w-24 h-24 object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-3xl flex-shrink-0">
            {profile.display_name.charAt(0).toUpperCase()}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <h1 className="text-2xl font-bold text-gray-900 truncate">
            {profile.display_name}
          </h1>
          <p className="text-gray-500 text-sm">@{profile.username}</p>

          {profile.bio && (
            <p className="mt-2 text-gray-700 text-sm leading-relaxed">{profile.bio}</p>
          )}

          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-gray-500">
            {profile.location && (
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {profile.location}
              </span>
            )}
            {profile.website && (
              <a
                href={profile.website.startsWith('http') ? profile.website : `https://${profile.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 hover:underline"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                {profile.website.replace(/^https?:\/\//, '')}
              </a>
            )}
            <span>Member since {memberSince}</span>
          </div>

          {/* ── Linked accounts badges ──────────────────────────────────── */}
          <div className="flex gap-2 mt-3">
            {profile.google_id && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded-full text-xs text-gray-600">
                <svg className="w-3 h-3" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /></svg>
                Google
              </span>
            )}
            {profile.discord_id && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#5865F2]/10 rounded-full text-xs text-[#5865F2]">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.12-.094.246-.192.373-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
                {profile.discord_username ?? 'Discord'}
              </span>
            )}
            {profile.primary_provider === 'email' && !profile.google_id && !profile.discord_id && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded-full text-xs text-gray-600">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" /></svg>
                Email
              </span>
            )}
          </div>
        </div>
      </div>

      <hr className="border-gray-200 my-8" />

      {/* ── Activity ───────────────────────────────────────────────────── */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Liked articles */}
        <section>
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
            Recent Likes
          </h2>
          {activity.likes.length === 0 ? (
            <p className="text-sm text-gray-400">No likes yet.</p>
          ) : (
            <ul className="space-y-3">
              {activity.likes.map((like) => (
                <li key={like.article_slug}>
                  <Link
                    href={like.article_url}
                    className="text-sm text-gray-700 hover:text-black hover:underline leading-snug block"
                  >
                    {like.article_title}
                  </Link>
                  <time className="text-xs text-gray-400">
                    {new Date(like.liked_at).toLocaleDateString()}
                  </time>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Saved articles */}
        <section>
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
            Saved Articles
          </h2>
          {activity.saves.length === 0 ? (
            <p className="text-sm text-gray-400">No saved articles yet.</p>
          ) : (
            <ul className="space-y-3">
              {activity.saves.map((save) => (
                <li key={save.article_slug}>
                  <Link
                    href={save.article_url}
                    className="text-sm text-gray-700 hover:text-black hover:underline leading-snug block"
                  >
                    {save.article_title}
                  </Link>
                  <time className="text-xs text-gray-400">
                    {new Date(save.saved_at).toLocaleDateString()}
                  </time>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}
