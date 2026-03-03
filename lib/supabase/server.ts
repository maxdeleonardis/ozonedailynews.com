import { createClient as createSupabaseClient } from '@supabase/supabase-js';

/**
 * Server-side Supabase client (anon key).
 * Used for reading published articles and writing new ones (RLS allows anon insert/update).
 * Awaitable so call sites can use: const supabase = await createClient()
 */
export async function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(
      'Missing Supabase env vars. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local'
    );
  }

  return createSupabaseClient(url, key);
}
