'use client';

import Link from 'next/link';
import { useArticles } from '@/lib/articles-context';

function CategoryBadge({ category }: { category: string }) {
  const colors: Record<string, { bg: string; text: string }> = {
    Technology: { bg: '#e40014', text: '#fff' },
    Business: { bg: '#e40014', text: '#fff' },
    Politics: { bg: '#e40014', text: '#fff' },
    News: { bg: '#155dfc', text: '#fff' },
    Education: { bg: '#00a544', text: '#fff' },
    Crime: { bg: '#78350f', text: '#fff' },
    Investigation: { bg: '#d97706', text: '#fff' },
  };
  const color = colors[category] || { bg: '#fb2c36', text: '#fff' };
  return (
    <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium" style={{ backgroundColor: color.bg, color: color.text }}>
      {category}
    </span>
  );
}

export default function BlogPage() {
  const { articles } = useArticles();
  const publishedArticles = articles.filter(a => a.status === 'published');

  return (
    <div className="py-16 md:py-20">
      <div className="max-w-[1150px] mx-auto px-6 md:px-12">
        {/* Header */}
        <header className="mb-12 pb-8 border-b border-gray-200">
          <p className="text-xs font-mono text-gray-400 mb-4 tracking-wider">INTELLIGENCE FEED</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">News & Investigations</h1>
          <p className="text-gray-500">Verified reporting with source citations and transparent methodology.</p>
        </header>

        {/* Articles */}
        <div className="space-y-12">
          {publishedArticles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 mb-4">No published articles yet.</p>
              <Link href="/admin" className="text-blue-600 hover:underline">
                Go to Dashboard to create your first article
              </Link>
            </div>
          ) : (
            publishedArticles.map((article) => (
              <article key={article.id} className="pb-12 border-b border-gray-100 group">
                <Link href={`/blog/${article.slug}`} className="block">
                  <div className="flex items-center gap-2 mb-4">
                    <CategoryBadge category={article.category} />
                    <span className="text-xs text-gray-400">{article.readTime}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-gray-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{article.author}</span>
                    <span>•</span>
                    <time>{article.updatedAt}</time>
                  </div>
                </Link>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
