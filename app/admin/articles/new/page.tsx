// app/admin/articles/new/page.tsx

import AdminArticleForm from '@/components/admin/AdminArticleForm';

export default function NewArticlePage() {
  return (
    <div>
      <div className="mb-6">
        <a href="/admin/articles" className="text-sm text-blue-600 hover:text-blue-800 underline">
          ← Back to Articles
        </a>
        <h1 className="text-xl font-bold text-gray-900 mt-2">New Article</h1>
      </div>
      <AdminArticleForm />
    </div>
  );
}
