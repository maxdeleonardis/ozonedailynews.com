// =============================================================================
// /account â€” Current user's profile dashboard (Supabase auth)
// =============================================================================

'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { createBrowserClient } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';

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

export default function AccountPage() {
  const router = useRouter();
  const supabase = createBrowserClient();

  const [user, setUser]       = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving]   = useState(false);
  const [message, setMessage] = useState('');

  // Editable fields
  const [username,    setUsername]    = useState('');
  const [displayName, setDisplayName] = useState('');
  const [bio,         setBio]         = useState('');
  const [location,    setLocation]    = useState('');
  const [website,     setWebsite]     = useState('');

  // â”€â”€ Load session + profile â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const loadProfile = useCallback(async (uid: string) => {
    const { data } = await supabase
      .from('public_profiles')
      .select('*')
      .eq('id', uid)
      .single();

    if (data) {
      setProfile(data);
      setUsername(data.username ?? '');
      setDisplayName(data.display_name ?? '');
      setBio(data.bio ?? '');
      setLocation(data.location ?? '');
      setWebsite(data.website ?? '');
    }
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        router.replace('/login');
        return;
      }
      setUser(user);
      loadProfile(user.id);
    });
  }, [supabase, router, loadProfile]);

  // â”€â”€ Save profile â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    setMessage('');

    const updates: Partial<Profile> = {
      display_name: displayName || null,
      bio: bio || null,
      location: location || null,
      website: website || null,
    };
    if (username) updates.username = username;

    const { error } = await supabase
      .from('public_profiles')
      .update(updates)
      .eq('id', user.id);

    setSaving(false);
    setMessage(error ? error.message : 'Profile saved!');
  };

  // â”€â”€ Sign out â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.replace('/');
  };

  // â”€â”€ Loading skeleton â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  if (loading) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-16">
        <div className="animate-pulse space-y-5">
          <div className="h-8 w-48 bg-gray-200 rounded" />
          <div className="h-20 w-20 bg-gray-200 rounded-full" />
          <div className="h-4 w-64 bg-gray-200 rounded" />
          <div className="h-4 w-48 bg-gray-200 rounded" />
        </div>
      </main>
    );
  }

  const avatarLetter = (displayName || user?.email || 'U').charAt(0).toUpperCase();
  const provider = user?.app_metadata?.provider ?? 'google';

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">

      {/* â”€â”€ Page header â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="flex items-center justify-between mb-10 pb-4 border-b-2 border-black">
        <h1 className="text-2xl font-black tracking-tight font-serif">My Account</h1>
        <button
          onClick={handleSignOut}
          className="text-[11px] font-bold tracking-widest uppercase px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
        >
          Sign Out
        </button>
      </div>

      {/* â”€â”€ Avatar + identity â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="flex items-center gap-5 mb-10">
        {profile?.avatar_url ? (
          <Image
            src={profile.avatar_url}
            alt={displayName || 'Avatar'}
            width={80}
            height={80}
            className="rounded-full w-20 h-20 object-cover border-2 border-black"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center text-white font-black text-2xl font-serif shrink-0">
            {avatarLetter}
          </div>
        )}
        <div>
          <p className="font-bold text-gray-900 text-base">{displayName || user?.email}</p>
          <p className="text-xs text-gray-400 font-mono mt-0.5">{user?.email}</p>
          <span className="inline-block mt-1.5 text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 bg-gray-100 text-gray-500">
            via {provider}
          </span>
          {profile?.username && (
            <div className="mt-1.5">
              <Link href={`/profile/${profile.username}`} className="text-xs text-black font-bold hover:underline">
                @{profile.username} â€” view public profile â†’
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* â”€â”€ Edit profile â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="mb-10">
        <h2 className="text-xs font-black tracking-[.2em] uppercase text-gray-400 mb-5">Edit Profile</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
              placeholder="your_handle"
              className="w-full px-3 py-2 border-2 border-black text-sm font-mono focus:outline-none focus:ring-2 focus:ring-black"
            />
            <p className="text-[11px] text-gray-400 mt-1">3â€“30 characters Â· letters, numbers, underscores</p>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Display Name</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Your Name"
              className="w-full px-3 py-2 border-2 border-black text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell us about yourselfâ€¦"
              maxLength={500}
              rows={3}
              className="w-full px-3 py-2 border-2 border-black text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black"
            />
            <p className="text-[11px] text-gray-400 mt-1">{bio.length}/500</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Austin, TX"
                className="w-full px-3 py-2 border-2 border-black text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Website</label>
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://yoursite.com"
                className="w-full px-3 py-2 border-2 border-black text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
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
            {saving ? 'Savingâ€¦' : 'Save Profile'}
          </button>
        </div>
      </section>

      {/* â”€â”€ Account info â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-xs font-black tracking-[.2em] uppercase text-gray-400 mb-4">Account Details</h2>
        <dl className="space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-gray-500">Email</dt>
            <dd className="font-mono text-gray-900">{user?.email}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-500">Member since</dt>
            <dd className="font-mono text-gray-900">
              {user?.created_at
                ? new Date(user.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
                : 'â€”'}
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-500">Sign-in method</dt>
            <dd className="font-mono text-gray-900 capitalize">{provider}</dd>
          </div>
        </dl>
      </section>

    </main>
  );
}
