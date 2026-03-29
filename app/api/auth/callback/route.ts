import { NextRequest, NextResponse } from 'next/server';
import { createAuthClient }          from '@/lib/supabase/server';

// Handles the OAuth code exchange after Google/Discord redirect back to the site
export async function GET(req: NextRequest) {
  const { searchParams, origin } = req.nextUrl;
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/';

  if (code) {
    const supabase = await createAuthClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Auth failed — redirect home
  return NextResponse.redirect(`${origin}/`);
}
