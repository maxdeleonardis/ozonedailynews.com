// app/admin/articles/edit/[slug]/page.tsx
// Server Component — fetches the draft article and passes it to the form.
// Static JSON is ALWAYS the source of truth — it is read first so the
// Git-committed version wins over any stale Supabase row.

import fs from 'fs';
import path from 'path';
import { createServiceClient } from '@/lib/supabase/server';
import AdminArticleForm from '@/components/admin/AdminArticleForm';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

const STATIC_BASE = path.join(process.cwd(), 'content', 'static');
const ALL_STORES = [
  'articles',
  'jack_articles',
  'wiki_articles',
  'creator_articles',
  'article_pages',
  'sterling_articles',
] as const;

function loadFromStatic(slug: string): Record<string, unknown> | null {
  for (const store of ALL_STORES) {
    const fp = path.join(STATIC_BASE, store, `${slug}.json`);
    if (fs.existsSync(fp)) {
      try { return JSON.parse(fs.readFileSync(fp, 'utf8')); } catch { continue; }
    }
  }
  return null;
}

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // 1. Try static JSON first — this is always the canonical version
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let article: Record<string, any> | null = loadFromStatic(slug);

  // 2. Fall back to Supabase across all typed tables
  if (!article) {
    const service = createServiceClient();
    if (!service) return <p className="text-red-600">Database not configured.</p>;

    for (const table of ALL_STORES) {
      const { data } = await service.from(table).select('*').eq('slug', slug).single();
      if (data) { article = data; break; }
    }
  }

  if (!article) notFound();

  return (
    <div>
      <div className="mb-6">
        <a href="/admin/articles" className="text-sm text-blue-600 hover:text-blue-800 underline">
          ← Back to Articles
        </a>
        <div className="flex items-center gap-3 mt-2">
          <h1 className="text-xl font-bold text-gray-900">Edit Article</h1>
          {article.url ? (
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-gray-500 bg-gray-100 hover:bg-gray-200 hover:text-blue-600 px-2 py-0.5 rounded transition-colors"
            >
              {slug} ↗
            </a>
          ) : (
            <span className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{slug}</span>
          )}
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


      <AdminArticleForm initialData={article} isEdit />
    </div>
  );
}
