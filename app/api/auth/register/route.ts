// =============================================================================
// /api/auth/register
//
// POST — Register a new user with email + password.
//   Creates a row in user_credentials (bcrypt hash) and a public_profiles row.
//   Body: { email, password, displayName }
//   Returns: { ok: true }
// =============================================================================

import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { createClient } from '@/lib/supabase/server';
import { sha256hex }    from '@/lib/hash';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

export async function POST(req: NextRequest) {
  let body: { email?: string; password?: string; displayName?: string };
  try { body = await req.json(); } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const email       = body.email?.toLowerCase().trim();
  const password    = body.password;
  const displayName = body.displayName?.trim();

  // ── Validate inputs ────────────────────────────────────────────────────
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
  }
  if (!password || password.length < MIN_PASSWORD_LENGTH) {
    return NextResponse.json(
      { error: `Password must be at least ${MIN_PASSWORD_LENGTH} characters` },
      { status: 400 }
    );
  }

  const supabase = await createClient();
  const userHash = await sha256hex(email);

  // ── Check if credentials already exist ─────────────────────────────────
  const { data: existing } = await supabase
    .from('user_credentials')
    .select('id')
    .eq('email', email)
    .single();

  if (existing) {
    return NextResponse.json(
      { error: 'An account with this email already exists' },
      { status: 409 }
    );
  }

  // ── Hash password and insert credentials ───────────────────────────────
  const passwordHash = await bcrypt.hash(password, 12);

  const { error: credError } = await supabase
    .from('user_credentials')
    .insert({
      user_hash:     userHash,
      email,
      password_hash: passwordHash,
    });

  if (credError) {
    console.error('[register cred insert]', credError.message);
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }

  // ── Create or update public profile ────────────────────────────────────
  // If they previously signed in with Google/Discord (same email), merge
  const { data: existingProfile } = await supabase
    .from('public_profiles')
    .select('id')
    .eq('user_hash', userHash)
    .single();

  if (!existingProfile) {
    const { error: profileError } = await supabase
      .from('public_profiles')
      .insert({
        user_hash:        userHash,
        primary_provider: 'email',
        display_name:     displayName || email.split('@')[0],
        email,
      });

    if (profileError) {
      console.error('[register profile insert]', profileError.message);
      // Credentials were created — don't fail the whole request
    }
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
