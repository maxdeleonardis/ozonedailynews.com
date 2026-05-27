// app/admin/articles/edit/[slug]/page.tsx
// Server Component — fetches the draft article and passes it to the form.

import { createServiceClient } from '@/lib/supabase/server';
import AdminArticleForm from '@/components/admin/AdminArticleForm';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = createServiceClient();
  if (!service) return <p className="text-red-600">Database not configured.</p>;

  const { data: article } = await service
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!article) notFound();

  return (
    <div>
      <div className="mb-6">
        <a href="/admin/articles" className="text-sm text-blue-600 hover:text-blue-800 underline">
          ← Back to Articles
        </a>
        <div className="flex items-center gap-3 mt-2">
          <h1 className="text-xl font-bold text-gray-900">Edit Article</h1>
          <span className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{slug}</span>
          <span className={`text-xs px-2 py-0.5 rounded font-medium ${
            article.status === 'published'
              ? 'bg-green-100 text-green-700'
              : article.status === 'review'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-gray-100 text-gray-600'
          }`}>
            {article.status}
          </span>
        </div>
      </div>

      {article.status === 'published' && (
        <div className="mb-6 px-4 py-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
          This article is published. Changes here will only update the Supabase record (not the live site).
          To update the live site, edit the static JSON file in Git directly and redeploy.
        </div>
      )}

      <AdminArticleForm initialData={article} isEdit />
    </div>
  );
}
