// lib/supabase/ssr.ts
// Cookie-based Supabase client for Server Components and API Routes.
// Required for reading the logged-in user's session server-side.
// Uses @supabase/ssr (already installed) — NOT the plain supabase-js client.
//
// Usage:
//   const client = await createSSRClient();
//   const { data: { user } } = await client.auth.getUser();

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createSSRClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;

  const cookieStore = await cookies();

  return createServerClient(url, key, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // In Server Components, cookie writes are ignored.
          // Cookie writes in API Route handlers work normally.
        }
      },
    },
  });
}
