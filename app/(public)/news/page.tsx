'use client';

import type { Metadata } from "next";
import Link from 'next/link';
import { useArticles } from '@/lib/articles-context';
import { Badge } from '@/components/ui/badge';

export default function NewsPage() {
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
                <Link href={`/${article.slug}`} className="block">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="destructive" className="bg-red-500">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-gray-400">{new Date(article.created_at).toLocaleDateString()}</span>
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
                    <time>{new Date(article.updated_at).toLocaleDateString()}</time>
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
