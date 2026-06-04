'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { createBrowserClient } from '@/lib/supabase/client';

// Shown only to editors on article pages (any path with 2+ segments)
// Links to /admin/articles/edit/[slug]

export default function AdminEditButton() {
  const pathname = usePathname();
  const [isEditor, setIsEditor] = useState(false);

  useEffect(() => {
    const supabase = createBrowserClient();
    if (!supabase) return;

    supabase.auth.getUser().then(async ({ data }) => {
      const user = data.user;
      if (!user) return;

      const { data: profile } = await supabase
        .from('profiles')
        .select('is_editor')
        .eq('user_id', user.id)
        .single();

      if (profile?.is_editor) setIsEditor(true);
    });
  }, []);

  // Only show on article-like paths (e.g. /finance/spacex-ipo-...) — not on /admin, /account, etc.
  const segments = pathname.split('/').filter(Boolean);
  const isArticlePage = segments.length >= 2 &&
    !pathname.startsWith('/admin') &&
    !pathname.startsWith('/account') &&
    !pathname.startsWith('/auth') &&
    !pathname.startsWith('/login');

  if (!isEditor || !isArticlePage) return null;

  // The slug is the full path minus the leading slash, with / replaced by -
  // e.g. /finance/spacex-ipo-... → finance-spacex-ipo-...
  const slug = segments.join('-');

  return (
    <Link
      href={`/admin/articles/edit/${slug}`}
      className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100 transition-colors"
      title="Edit this article"
    >
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
      Edit
    </Link>
  );
}
