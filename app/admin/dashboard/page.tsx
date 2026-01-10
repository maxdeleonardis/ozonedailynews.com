'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useArticles } from '@/lib/articles-context';
import { isAuthenticated, destroySession } from '@/lib/auth';
import { CreatePostModal } from '@/components/create-post-modal';

export default function AdminDashboard() {
  const router = useRouter();
  const { articles } = useArticles();
  const [showCreateModal, setShowCreateModal] = useState(false);

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
            <button 
              onClick={() => setShowCreateModal(true)}
              className="px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-800"
            >
              + New Article
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 border border-gray-300 text-sm font-medium rounded hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Articles Grid */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-200"
            >
              {/* Article Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span
                  className="px-3 py-1 text-xs font-bold text-white rounded"
                  style={{ backgroundColor: getCategoryColor(article.category) }}
                >
                  {article.category.toUpperCase()}
                </span>
              </div>

              {/* Article Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 line-clamp-2 min-h-[3.5rem]">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[2.5rem]">
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.updatedAt || article.createdAt}</span>
                  <span>•</span>
                  <span
                    className={`px-2 py-0.5 rounded ${
                      article.status === 'published'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {article.status}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="flex-1 text-center px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50"
                  >
                    View
                  </Link>
                  <Link
                    href={`/blog/${article.slug}/edit`}
                    className="flex-1 text-center px-3 py-2 text-sm bg-black text-white rounded hover:bg-gray-800"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {articles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-4">No articles yet</p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
            >
              Create your first article
            </button>
          </div>
        )}
      </main>

      {/* Create Post Modal */}
      <CreatePostModal 
        isOpen={showCreateModal} 
        onClose={() => setShowCreateModal(false)} 
      />
    </div>
  );
}
