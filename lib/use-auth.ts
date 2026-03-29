'use client';

import { useEffect, useState } from 'react';
import { createBrowserClient } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';

export type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<AuthStatus>('loading');

  useEffect(() => {
    const supabase = createBrowserClient();

    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user ?? null);
      setStatus(data.user ? 'authenticated' : 'unauthenticated');
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setStatus(session?.user ? 'authenticated' : 'unauthenticated');
    });

    return () => subscription.unsubscribe();
  }, []);

  function signIn(provider: 'google' | 'discord' = 'google', callbackUrl?: string) {
    const supabase = createBrowserClient();
    const redirectTo = callbackUrl
      ? `${window.location.origin}/api/auth/callback?next=${encodeURIComponent(callbackUrl)}`
      : `${window.location.origin}/api/auth/callback`;
    supabase.auth.signInWithOAuth({ provider, options: { redirectTo } });
  }

  function signOut() {
    const supabase = createBrowserClient();
    supabase.auth.signOut().then(() => {
      window.location.href = '/';
    });
  }

  return { user, status, signIn, signOut };
}
