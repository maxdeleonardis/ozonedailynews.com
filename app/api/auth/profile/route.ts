// =============================================================================
// /api/auth/profile
//
// POST — Upserts the signed-in user into public_profiles.
//   Called once after every sign-in (from AuthTracker).
//   Handles multi-provider linking: if the same email signs in via Google
//   and later via Discord, both provider IDs are stored on one profile.
//
//   Body: { provider, displayName, avatarUrl, googleId, discordId,
//           discordUsername }
//   Returns: { ok: true, profile: { ... } }
// =============================================================================

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession }          from 'next-auth';
import { authOptions }               from '@/lib/auth-options';
import { createClient }              from '@/lib/supabase/server';
import { sha256hex }                 from '@/lib/hash';

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  }

  let body: {
    provider?:        string;
    displayName?:     string;
    avatarUrl?:       string;
    googleId?:        string;
    discordId?:       string;
    discordUsername?:  string;
  };
  try { body = await req.json(); } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const userHash = await sha256hex(session.user.email);
  const supabase = await createClient();

  // ── Check if profile already exists ────────────────────────────────────
  const { data: existing } = await supabase
    .from('public_profiles')
    .select('id, google_id, discord_id, discord_username, primary_provider')
    .eq('user_hash', userHash)
    .single();

  const provider = body.provider ?? 'google';

  if (existing) {
    // ── Merge: accumulate provider IDs without overwriting existing ones ──
    const updates: Record<string, unknown> = {
      display_name: body.displayName ?? session.user.name ?? 'User',
      avatar_url:   body.avatarUrl   ?? session.user.image ?? null,
      updated_at:   new Date().toISOString(),
    };

    // Link Google ID if this sign-in provides one and we don't have it yet
    if (body.googleId && !existing.google_id) {
      updates.google_id = body.googleId;
    }
    // Link Discord ID if this sign-in provides one and we don't have it yet
    if (body.discordId && !existing.discord_id) {
      updates.discord_id       = body.discordId;
      updates.discord_username = body.discordUsername ?? null;
    }
    // Update discord_username if it changed
    if (body.discordUsername && existing.discord_id) {
      updates.discord_username = body.discordUsername;
    }

    const { error } = await supabase
      .from('public_profiles')
      .update(updates)
      .eq('user_hash', userHash);

    if (error) {
      console.error('[profile update]', error.message);
      return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }
  } else {
    // ── Insert: first-time profile creation ──────────────────────────────
    const { error } = await supabase
      .from('public_profiles')
      .insert({
        user_hash:        userHash,
        primary_provider: provider,
        display_name:     body.displayName ?? session.user.name ?? 'User',
        email:            session.user.email,
        avatar_url:       body.avatarUrl   ?? session.user.image ?? null,
        google_id:        body.googleId    ?? null,
        discord_id:       body.discordId   ?? null,
        discord_username: body.discordUsername ?? null,
      });

    if (error) {
      console.error('[profile insert]', error.message);
      return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }
  }

  return NextResponse.json({ ok: true });
}

// =============================================================================
// GET — Fetch the current user's profile (for profile page / settings)
// =============================================================================
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  }

  const userHash = await sha256hex(session.user.email);
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('public_profiles')
    .select('id, user_hash, username, display_name, bio, avatar_url, location, website, primary_provider, google_id, discord_id, discord_username, created_at')
    .eq('user_hash', userHash)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
  }

  return NextResponse.json({ profile: data });
}

// =============================================================================
// PATCH — Update profile fields (username, bio, location, website)
// =============================================================================
export async function PATCH(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  }

  let body: {
    username?: string;
    displayName?: string;
    bio?: string;
    location?: string;
    website?: string;
  };
  try { body = await req.json(); } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const userHash = await sha256hex(session.user.email);
  const supabase = await createClient();

  // Build update object with only provided fields
  const updates: Record<string, unknown> = {
    updated_at: new Date().toISOString(),
  };

  if (body.username !== undefined) {
    // Validate username: alphanumeric + underscores, 3-30 chars
    const cleaned = body.username.trim().toLowerCase();
    if (!/^[a-z0-9_]{3,30}$/.test(cleaned)) {
      return NextResponse.json(
        { error: 'Username must be 3-30 characters, letters/numbers/underscores only' },
        { status: 400 }
      );
    }
    // Check uniqueness
    const { data: taken } = await supabase
      .from('public_profiles')
      .select('id')
      .eq('username', cleaned)
      .neq('user_hash', userHash)
      .single();
    if (taken) {
      return NextResponse.json({ error: 'Username already taken' }, { status: 409 });
    }
    updates.username = cleaned;
  }
  if (body.displayName !== undefined) updates.display_name = body.displayName;
  if (body.bio !== undefined)         updates.bio = body.bio;
  if (body.location !== undefined)    updates.location = body.location;
  if (body.website !== undefined)     updates.website = body.website;

  const { error } = await supabase
    .from('public_profiles')
    .update(updates)
    .eq('user_hash', userHash);

  if (error) {
    console.error('[profile patch]', error.message);
    return NextResponse.json({ error: 'DB error' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
