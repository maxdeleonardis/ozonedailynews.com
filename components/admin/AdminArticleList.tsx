'use client';

// components/admin/AdminArticleList.tsx
// Displays all articles in a table with status filters and quick actions.

import { useState } from 'react';

interface ArticleRow {
  id: string;
  slug: string;
  title: string;
  category: string;
  status: 'draft' | 'review' | 'published';
  brand_slug: string;
  author_name: string;
  published_at: string;
  updated_at: string;
}

interface Props {
  articles: ArticleRow[];
}

const STATUS_BADGE: Record<string, string> = {
  draft:     'bg-gray-100 text-gray-700',
  review:    'bg-yellow-100 text-yellow-700',
  published: 'bg-green-100 text-green-700',
};

const ALL_STATUSES = ['all', 'draft', 'review', 'published'] as const;

export default function AdminArticleList({ articles }: Props) {
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [deleting, setDeleting]         = useState<string | null>(null);
  const [publishing, setPublishing]     = useState<string | null>(null);
  const [message, setMessage]           = useState<{ type: 'ok' | 'err'; text: string } | null>(null);

  const filtered = statusFilter === 'all'
    ? articles
    : articles.filter((a) => a.status === statusFilter);

  async function handleDelete(slug: string, title: string) {
    if (!confirm(`Delete draft "${title}"? This cannot be undone.`)) return;
    setDeleting(slug);
    try {
      const res = await fetch(`/api/cms/articles/${slug}`, { method: 'DELETE' });
      const json = await res.json() as { ok?: boolean; error?: string };
      if (json.ok) {
        setMessage({ type: 'ok', text: `Deleted "${title}".` });
        // Reload page to refresh list
        window.location.reload();
      } else {
        setMessage({ type: 'err', text: json.error ?? 'Delete failed.' });
      }
    } finally {
      setDeleting(null);
    }
  }

  async function handlePublish(slug: string, title: string) {
    if (!confirm(`Publish "${title}" to GitHub? This will trigger a site rebuild.`)) return;
    setPublishing(slug);
    setMessage(null);
    try {
      const res  = await fetch('/api/cms/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      });
      const json = await res.json() as {
        ok?: boolean;
        error?: string;
        details?: string[];
        url?: string;
        message?: string;
      };

      if (json.ok) {
        setMessage({ type: 'ok', text: `Published! ${json.message ?? ''} → ${json.url ?? ''}` });
        window.location.reload();
      } else {
        const detail = json.details?.join(' | ') ?? json.error ?? 'Publish failed.';
        setMessage({ type: 'err', text: detail });
      }
    } finally {
      setPublishing(null);
    }
  }

  return (
    <div>
      {/* Status filter tabs */}
      <div className="flex gap-2 mb-4">
        {ALL_STATUSES.map((s) => (
          <button
            key={s}
            onClick={() => setStatusFilter(s)}
            className={`px-3 py-1 rounded text-xs font-medium border ${
              statusFilter === s
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'
            }`}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
            {s === 'all' ? ` (${articles.length})` : ` (${articles.filter((a) => a.status === s).length})`}
          </button>
        ))}
      </div>

      {/* Feedback message */}
      {message && (
        <div
          className={`mb-4 px-4 py-3 rounded text-sm ${
            message.type === 'ok'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {message.text}
          <button
            onClick={() => setMessage(null)}
            className="ml-4 text-xs underline opacity-70 hover:opacity-100"
          >
            dismiss
          </button>
        </div>
      )}

      {/* Table */}
      {filtered.length === 0 ? (
        <p className="text-gray-500 text-sm py-8 text-center">
          No articles found. <a href="/admin/articles/new" className="text-blue-600 underline">Create one.</a>
        </p>
      ) : (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Title</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Brand</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Category</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Status</th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">Updated</th>
                <th className="text-right px-4 py-3 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((article) => (
                <tr key={article.slug} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="font-medium text-gray-900 truncate max-w-xs" title={article.title}>
                      {article.title}
                    </div>
                    <div className="text-xs text-gray-400 font-mono">{article.slug}</div>
                  </td>
                  <td className="px-4 py-3 text-gray-600 text-xs font-mono">{article.brand_slug}</td>
                  <td className="px-4 py-3 text-gray-600">{article.category}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${STATUS_BADGE[article.status] ?? 'bg-gray-100 text-gray-700'}`}>
                      {article.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-xs">
                    {article.updated_at
                      ? new Date(article.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                      : '—'}
                  </td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <a
                      href={`/admin/articles/edit/${article.slug}`}
                      className="text-blue-600 hover:text-blue-800 underline text-xs"
                    >
                      Edit
                    </a>
                    <button
                      onClick={() => handlePublish(article.slug, article.title)}
                      disabled={publishing === article.slug}
                      className="text-green-700 hover:text-green-900 underline text-xs disabled:opacity-50"
                    >
                      {publishing === article.slug ? 'Publishing...' : article.status === 'published' ? 'Republish' : 'Publish'}
                    </button>
                    <button
                      onClick={() => handleDelete(article.slug, article.title)}
                      disabled={deleting === article.slug}
                      className="text-red-600 hover:text-red-800 underline text-xs disabled:opacity-50"
                    >
                      {deleting === article.slug ? 'Deleting...' : 'Delete'}
                    </button>
                    {article.status === 'published' && (
                      <a
                        href={`/${article.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 underline text-xs"
                      >
                        View live ↗
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
