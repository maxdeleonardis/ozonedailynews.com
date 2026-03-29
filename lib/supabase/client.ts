import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import { createBrowserClient as createSSRBrowserClient } from '@supabase/ssr';

/**
 * Browser-side Supabase client (anon key).
 * Safe to use in 'use client' components — only exposes public/anon credentials.
 * Use for storage uploads, client-side reads, and editor writes.
 */
export function createBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(
      'Missing Supabase env vars. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local'
    );
  }

  return createSupabaseClient(url, key);
}

/**
 * Auth-aware browser Supabase client.
 * Use this in 'use client' components that need to call supabase.auth.getUser(),
 * supabase.auth.signInWithOAuth(), supabase.auth.signOut(), etc.
 * Automatically syncs the session between client and server via cookies.
 */
export function createAuthBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  return createSSRBrowserClient(url, key);
}

