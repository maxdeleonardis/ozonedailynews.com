'use client';
// lib/supabase/client.ts
// Browser-side Supabase clients.
// createBrowserClient()     — anonymous reads + anon-allowed writes (reactions, saves)
// createAuthBrowserClient() — auth-aware: used in admin editor, session sync
//
// Both return null when env vars are missing so callers degrade gracefully
// instead of crashing the page with "Cannot destructure property 'auth'".

import { createClient } from '@supabase/supabase-js';
import { createBrowserClient as createSSRBrowserClient } from '@supabase/ssr';

export function createBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    console.warn('[createBrowserClient] Missing env vars — url:', !!url, 'key:', !!key);
    return null;
  }
  try {
    return createClient(url, key);
  } catch (err) {
    console.error('[createBrowserClient] createClient threw:', err);
    return null;
  }
}

export function createAuthBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    console.warn('[createAuthBrowserClient] Missing env vars — url:', !!url, 'key:', !!key);
    return null;
  }
  try {
    return createSSRBrowserClient(url, key);
  } catch (err) {
    console.error('[createAuthBrowserClient] createSSRBrowserClient threw:', err);
    return null;
  }
}
