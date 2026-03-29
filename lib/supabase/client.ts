import { createBrowserClient as createSupabaseBrowserClient } from '@supabase/ssr';

/**
 * Browser-side Supabase client (anon key).
 * Uses @supabase/ssr for proper cookie-based session handling.
 * Safe to use in 'use client' components.
 */
export function createBrowserClient() {
  return createSupabaseBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
