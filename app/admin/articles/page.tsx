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

  // Fetch all articles across all typed tables so nothing is missing from the list
  const TYPED_TABLES = ['articles', 'jack_articles', 'creator_articles', 'wiki_articles', 'article_pages'] as const;
  const articleMap = new Map<string, {
    id: string; slug: string; title: string; category: string;
    status: 'draft' | 'review' | 'published'; brand_slug: string;
    author_name: string; published_at: string; updated_at: string;
  }>();

  for (const table of TYPED_TABLES) {
    let q = service
      .from(table)
      .select('id, slug, title, category, status, brand_slug, author_name, published_at, updated_at')
      .order('updated_at', { ascending: false })
      .limit(200);
    if (profile.brand_slugs?.length > 0) {
      q = q.in('brand_slug', profile.brand_slugs);
    }
    const { data } = await q;
    if (data) {
      for (const row of data) {
        if (!articleMap.has(row.slug)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          articleMap.set(row.slug, row as any);
        }
      }
    }
  }

  const articles = Array.from(articleMap.values()).sort(
    (a, b) => new Date(b.updated_at ?? b.published_at ?? 0).getTime()
              - new Date(a.updated_at ?? a.published_at ?? 0).getTime()
  );

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
