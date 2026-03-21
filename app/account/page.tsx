// =============================================================================
// /account — Current user's profile dashboard
//
// Shows their profile info with inline editing for username, bio, etc.
// Redirects to sign-in if not authenticated.
// =============================================================================

'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface Profile {
  id: string;
  user_hash: string;
  username: string | null;
  display_name: string;
  bio: string | null;
  avatar_url: string | null;
  location: string | null;
  website: string | null;
  primary_provider: string;
  google_id: string | null;
  discord_id: string | null;
  discord_username: string | null;
  created_at: string;
}

export default function AccountPage() {
  const { data: session, status } = useSession();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  // Editable fields
  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');

  useEffect(() => {
    if (status !== 'authenticated') return;

    fetch('/api/auth/profile')
      .then((r) => r.json())
      .then((data) => {
        if (data.profile) {
          const p = data.profile as Profile;
          setProfile(p);
          setUsername(p.username ?? '');
          setDisplayName(p.display_name);
          setBio(p.bio ?? '');
          setLocation(p.location ?? '');
          setWebsite(p.website ?? '');
        }
      })
      .finally(() => setLoading(false));
  }, [status]);

  const handleSave = async () => {
    setSaving(true);
    setMessage('');

    const res = await fetch('/api/auth/profile', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username || undefined,
        displayName: displayName || undefined,
        bio,
        location,
        website,
      }),
    });

    const data = await res.json();
    setSaving(false);

    if (!res.ok) {
      setMessage(data.error ?? 'Failed to save');
    } else {
      setMessage('Profile updated!');
    }
  };

  if (status === 'loading' || loading) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-10">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-48 bg-gray-200 rounded" />
          <div className="h-24 w-24 bg-gray-200 rounded-full" />
          <div className="h-4 w-64 bg-gray-200 rounded" />
        </div>
      </main>
    );
  }

  if (status !== 'authenticated') {
    return (
      <main className="max-w-2xl mx-auto px-4 py-10 text-center">
        <h1 className="text-xl font-bold mb-4">Sign in to view your profile</h1>
        <p className="text-gray-500">You need to be signed in to access your account.</p>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">My Profile</h1>

      {/* ── Avatar + basic info ────────────────────────────────────────── */}
      <div className="flex items-center gap-4 mb-8">
        {profile?.avatar_url ? (
          <Image
            src={profile.avatar_url}
            alt={profile.display_name}
            width={80}
            height={80}
            className="rounded-full w-20 h-20 object-cover"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl">
            {(profile?.display_name ?? 'U').charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-900">{session.user?.email}</p>
          <p className="text-xs text-gray-500">
            Signed in via {profile?.primary_provider ?? 'unknown'}
          </p>
          {profile?.username && (
            <Link
              href={`/profile/${profile.username}`}
              className="text-xs text-blue-600 hover:underline"
            >
              View public profile →
            </Link>
          )}
        </div>
      </div>

      {/* ── Linked accounts ────────────────────────────────────────────── */}
      <section className="mb-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-sm font-semibold text-gray-900 mb-3">Linked Accounts</h2>
        <div className="flex flex-wrap gap-3">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${profile?.google_id ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-400'}`}>
            <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /></svg>
            Google {profile?.google_id ? '✓' : '—'}
          </div>
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${profile?.discord_id ? 'bg-indigo-50 text-indigo-700' : 'bg-gray-100 text-gray-400'}`}>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.12-.094.246-.192.373-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
            Discord {profile?.discord_id ? `✓ ${profile.discord_username ?? ''}` : '—'}
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Sign in with another provider to link it to your account (same email required).
        </p>
      </section>

      {/* ── Edit form ──────────────────────────────────────────────────── */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-gray-900">Edit Profile</h2>

        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="your_handle"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
          <p className="text-xs text-gray-400 mt-1">3-30 characters, letters/numbers/underscores</p>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Display Name</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell us about yourself…"
            maxLength={500}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm resize-none"
          />
          <p className="text-xs text-gray-400 mt-1">{bio.length}/500</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Austin, TX"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Website</label>
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="objectwire.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
        </div>

        {message && (
          <p className={`text-sm ${message.includes('!') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}

        <Button onClick={handleSave} disabled={saving} className="w-full">
          {saving ? 'Saving…' : 'Save Profile'}
        </Button>
      </section>
    </main>
  );
}
