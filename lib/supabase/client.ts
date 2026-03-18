import { createClient as createSupabaseClient } from '@supabase/supabase-js';

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
