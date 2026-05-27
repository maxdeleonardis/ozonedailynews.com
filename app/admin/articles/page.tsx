// app/admin/articles/page.tsx
// Server Component — lists all articles (all statuses) for this editor's brands.
// Passes data to the AdminArticleList client component for interactivity.

import { createSSRClient } from '@/lib/supabase/ssr';
import { createServiceClient } from '@/lib/supabase/server';
import AdminArticleList from '@/components/admin/AdminArticleList';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function AdminArticlesPage() {
  const ssr = await createSSRClient();
  if (!ssr) redirect('/login');

  const { data: { user } } = await ssr.auth.getUser();
  if (!user) redirect('/login');

  const service = createServiceClient();
  if (!service) return <p className="text-red-600">Database not configured.</p>;

  const { data: profile } = await service
    .from('profiles')
    .select('is_editor, brand_slugs')
    .eq('user_id', user.id)
    .single();

  if (!profile?.is_editor) redirect('/');

  // Fetch all articles for this editor's brands
  let query = service
    .from('articles')
    .select('id, slug, title, category, status, brand_slug, author_name, published_at, updated_at')
    .order('updated_at', { ascending: false })
    .limit(200);

  if (profile.brand_slugs?.length > 0) {
    query = query.in('brand_slug', profile.brand_slugs);
  }

  const { data: articles } = await query;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-gray-900">Articles</h1>
        <a
          href="/admin/articles/new"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md"
        >
          + New Article
        </a>
      </div>

      <AdminArticleList articles={articles ?? []} />
    </div>
  );
}
