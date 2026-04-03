'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createBrowserClient } from '@/lib/supabase/client';

export default function NavUserButton() {
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const supabase = createBrowserClient();

    supabase.auth.getUser().then(({ data }) => {
      const user = data?.user;
      if (user) {
        // Prefer display name from metadata, fall back to email prefix
        const name =
          user.user_metadata?.full_name ||
          user.user_metadata?.name ||
          user.email?.split('@')[0] ||
          'Account';
        setLabel(name);
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      const user = session?.user;
      if (user) {
        const name =
          user.user_metadata?.full_name ||
          user.user_metadata?.name ||
          user.email?.split('@')[0] ||
          'Account';
        setLabel(name);
      } else {
        setLabel(null);
      }
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const href = label ? '/account' : '/login';
  const text = label ?? 'Sign In';

  return (
    <Link
      href={href}
      className="px-3 md:px-4 py-2.5 text-[10px] font-black tracking-[.12em] uppercase whitespace-nowrap hover:bg-black hover:text-white transition-colors shrink-0 max-w-[120px] truncate"
      title={label ?? 'Sign In'}
    >
      {text}
    </Link>
  );
}
