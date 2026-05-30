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

      {article.status === 'published' && article.url && (
        <div className="mb-6 px-4 py-3 bg-blue-50 border border-blue-200 rounded text-sm text-blue-800 flex items-center justify-between gap-4">
          <span>This article is live. Edit any fields below, then click <strong>Publish to GitHub</strong> to overwrite the static JSON and redeploy.</span>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 rounded transition-colors"
          >
            View live article
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </div>
      )}

      <AdminArticleForm initialData={article} isEdit />
    </div>
  );
}
