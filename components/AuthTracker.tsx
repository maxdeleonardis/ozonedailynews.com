'use client';

// =============================================================================
// AuthTracker — GA4 user identity sync for Google Sign-In
//
// This component is rendered inside AuthProvider (which wraps the whole app).
// It watches the next-auth session and, whenever a logged-in Google session
// is detected, calls tracking.identifyUser() so that:
//
//   1. GA4 gets a stable SHA-256 hashed user_id (required for cross-device
//      attribution and User-ID reporting in GA4 Explore).
//
//   2. The user is marked as `has_email: true` in GA4 user properties.
//
//   3. The server-side Measurement Protocol endpoint receives the hashed ID
//      so server events are attributed to the same user as client events.
//
// Security: The email is SHA-256 hashed before leaving the browser.
//           PII is never sent to GA4 in plain text.
// =============================================================================

import { useAuth } from '@/lib/hooks/use-auth';
import { useEffect, useRef } from 'react';
import { tracking } from '@/lib/tracking';

export default function AuthTracker() {
  const { user, isAuth, email } = useAuth();
  // Track whether we've already identified this session so we don't
  // fire duplicate events on every render.
  const identifiedRef = useRef<string | null>(null);

  useEffect(() => {
    if (!isAuth || !email) return;

    // Avoid re-firing if we already identified this exact email this session
    if (identifiedRef.current === email) return;
    identifiedRef.current = email;

    // Identify user in GA4 + server Measurement Protocol
    const displayName = user?.user_metadata?.full_name ?? undefined;
    tracking.identifyUser(email, displayName);

    // Upsert public profile to Supabase
    const provider = user?.app_metadata?.provider ?? 'google';
    fetch('/api/auth/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        provider,
        displayName: displayName ?? null,
        avatarUrl:   user?.user_metadata?.avatar_url ?? null,
        googleId:    user?.user_metadata?.sub ?? null,
        discordId:   null,
        discordUsername: null,
      }),
    }).catch(() => {});
  }, [user, isAuth, email]);

  return null;
}
