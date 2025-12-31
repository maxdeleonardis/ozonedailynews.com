'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useArticles } from '@/lib/articles-context';
import { ArticleRenderer } from '@/components/article-renderer';
import { useEffect, useState } from 'react';

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const { getArticleBySlug } = useArticles();
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const article = getArticleBySlug(slug);

  // Reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!article) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <p className="text-gray-500 mb-6">The article you're looking for doesn't exist or has been removed.</p>
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← Back to News
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <style jsx global>{`
        .highlight-text {
          transition: all 0.2s ease;
          border-radius: 2px;
          padding: 0 2px;
          margin: 0 -2px;
        }
        .highlight-text:hover {
          background: linear-gradient(120deg, #fef3c7 0%, #fde68a 100%);
          box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.1);
        }
        .key-term {
          position: relative;
          font-weight: 600;
          cursor: help;
        }
        .key-term::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #ef4444, #f97316);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .key-term:hover::after {
          transform: scaleX(1);
        }
      `}</style>

      <article className="py-16 md:py-20 selection:bg-yellow-100 selection:text-yellow-900">
        <div className="max-w-[1150px] mx-auto px-6 md:px-12">
          
          {/* Article Header */}
          <header className="mb-12 animate-in">
            <div className="mb-6">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-all duration-300 hover:gap-3"
              >
                <span>←</span>
                <span>Back to News</span>
              </Link>
            </div>
            
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-red-500 text-white mb-4">
              {article.category.toUpperCase()}
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-8 border-b border-gray-200">
              <span>By <strong className="text-gray-900">{article.author}</strong></span>
              <span className="text-gray-300">•</span>
              <time dateTime={article.updatedAt}>{article.updatedAt}</time>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {article.readTime}
              </span>
              <Link 
                href={`/admin?edit=${article.id}`}
                className="ml-auto text-gray-400 hover:text-blue-600 transition-colors"
              >
                Edit Article
              </Link>
            </div>
          </header>

          {/* Article Content */}
          <ArticleRenderer blocks={article.blocks} />
        </div>
      </article>
    </>
  );
}
