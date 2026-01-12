'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useArticles } from '@/lib/articles-context';
import { isAuthenticated, destroySession } from '@/lib/auth';

export default function AdminDashboard() {
  const router = useRouter();
  const { articles } = useArticles();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/admin');
    }
  }, [router]);

  const handleLogout = () => {
    destroySession();
    router.push('/admin');
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Technology: '#e40014',
      Business: '#e40014',
      Politics: '#e40014',
      News: '#155dfc',
      Education: '#00a544',
      Crime: '#78350f',
      Investigation: '#d97706',
    };
    return colors[category] || '#fb2c36';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">ObjectWire Dashboard</h1>
            <span className="text-sm text-gray-500">
              {articles.length} article{articles.length !== 1 ? 's' : ''}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
              View Site
            </Link>
            <Link
              href="/blog/new/edit"
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              + New Article
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 border border-gray-300 text-sm font-medium rounded hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Articles List - Clean Table Style */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <div className="grid grid-cols-12 gap-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
              <div className="col-span-5">Article</div>
              <div className="col-span-3">Author</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2 text-right">Actions</div>
            </div>
          </div>

          {/* Articles Rows */}
          <div className="divide-y divide-gray-100">
            {articles.map((article) => (
              <div
                key={article.id}
                className="px-6 py-4 hover:bg-gray-50 transition-colors group"
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Thumbnail + Title */}
                  <div className="col-span-5 flex items-center gap-4">
                    <div
                      className="w-16 h-16 rounded flex-shrink-0 flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: getCategoryColor(article.category) }}
                    >
                      {article.category.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 truncate">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-500 truncate mt-0.5">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                        <span>{article.updatedAt || article.createdAt}</span>
                        <span>•</span>
                        <span>{article.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="col-span-3">
                    <p className="text-sm text-gray-600 truncate">{article.author}</p>
                  </div>

                  {/* Status */}
                  <div className="col-span-2">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        article.status === 'published'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {article.status === 'published' ? 'Published' : 'Draft'}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="col-span-2 flex items-center justify-end gap-2">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
                      title="View"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </Link>
                    <Link
                      href={`/blog/${article.slug}/edit`}
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
                      title="Edit"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </Link>
                    <button
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
                      title="More options"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {articles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-4">No articles yet</p>
            <Link
              href="/blog/new/edit"
              className="inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
            >
              Create your first article
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
