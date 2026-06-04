// app/admin/layout.tsx
// Server Component — auth guard for all /admin routes.
// Redirects to /login if the user is not authenticated or not an editor.
// Any page under /admin/ inherits this check automatically.

import { redirect } from 'next/navigation';
import { createSSRClient } from '@/lib/supabase/ssr';
import { createServiceClient } from '@/lib/supabase/server';

export const metadata = {
  title: 'OzoneNews CMS',
  robots: { index: false, follow: false },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ssr = await createSSRClient();
  if (!ssr) redirect('/login');

  const {
    data: { user },
  } = await ssr.auth.getUser();

  if (!user) redirect('/login?redirect=/admin');

  // Check editor role via service client (bypasses RLS to read the profile row)
  const service = createServiceClient();
  if (!service) redirect('/login?redirect=/admin');

  const { data: profile } = await service
    .from('profiles')
    .select('is_editor')
    .eq('user_id', user.id)
    .single();

  if (!profile?.is_editor) redirect('/');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top navigation bar */}
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="font-bold text-gray-900 text-sm tracking-tight">
            OzoneNews CMS
          </span>
          <nav className="flex gap-4 text-sm">
            <a
              href="/admin"
              className="text-gray-600 hover:text-gray-900"
            >
              Articles
            </a>
            <a
              href="/admin/media"
              className="text-gray-600 hover:text-gray-900"
            >
              Media
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span>{user.email}</span>
          <a href="/login" className="text-blue-600 hover:text-blue-800 underline">
            Sign out
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>
    </div>
  );
}
