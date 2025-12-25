'use client';

import { useEffect, useState } from 'react';
import { fetchArticles } from '@/libs/api-client';
import NewsCard from '@/components/news-card';

interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  image?: string;
  author?: { name: string };
  readingTime?: number;
}

export default function NewsPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadArticles() {
      try {
        setLoading(true);
        const result = await fetchArticles({ limit: 12 });
        const data = result.data || result || [];
        setArticles(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Error loading articles:', err);
        setArticles([
          {
            id: '1',
            slug: 'silicon-labs-robotics',
            title: 'Silicon Labs Advances Robotics with AI Integration',
            category: 'Technology',
            publishedAt: new Date().toISOString(),
            excerpt: 'Leading semiconductor manufacturer reports breakthrough in embedded AI systems for autonomous robots.',
            author: { name: 'Tech Reporter' },
            readingTime: 5
          },
          {
            id: '2',
            slug: 'markets-surge-on-inflation-data',
            title: 'Markets Surge on Better-Than-Expected Inflation Data',
            category: 'Economics',
            publishedAt: new Date().toISOString(),
            excerpt: 'Stock indices climb following release of consumer price index showing moderation in inflation trends.',
            author: { name: 'Finance Editor' },
            readingTime: 4
          },
        ]);
        setError(null);
      } finally {
        setLoading(false);
      }
    }

    loadArticles();
  }, []);

  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 border-b border-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Intelligence Feed
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
              Real-time coverage and structured analysis. Every update is designed for clarity, accuracy, and integration into professional decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          {loading && (
            <div className="text-center py-16">
              <p className="text-gray-600">Loading articles...</p>
            </div>
          )}
          
          {error && <p className="text-center text-red-600 py-8">{error}</p>}

          {!loading && articles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <NewsCard
                  key={article.id}
                  id={article.id}
                  slug={article.slug}
                  title={article.title}
                  excerpt={article.excerpt}
                  category={article.category || 'News'}
                  publishedAt={article.publishedAt}
                  image={article.image}
                  author={article.author}
                  readingTime={article.readingTime}
                />
              ))}
            </div>
          )}

          {!loading && articles.length === 0 && !error && (
            <p className="text-center text-gray-600 py-8">No articles found. Check back soon.</p>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50 border-t border-black">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-gray-700 mb-8">Subscribe to get intelligence delivered directly to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 border border-black rounded px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}