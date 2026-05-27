// app/auth/callback/route.ts
// Handles the redirect back from Supabase after email confirmation or OAuth.
// Exchanges the one-time code for a session cookie, then redirects the user.

import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function GET(req: NextRequest) {
  const { searchParams, origin } = new URL(req.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/';

  if (code) {
    const cookieStore = await cookies();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          },
        },
      }
    );

    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      // Redirect to the originally requested page (or home)
      const redirectTo = next.startsWith('/') ? `${origin}${next}` : origin;
      return NextResponse.redirect(redirectTo);
    }
  }

  // Auth failed — redirect to login with an error flag
  return NextResponse.redirect(`${origin}/login?error=auth_callback_failed`);
}
