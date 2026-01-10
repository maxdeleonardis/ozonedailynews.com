'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useArticles, Article, ArticleBlock } from '@/lib/articles-context';
import { isAuthenticated } from '@/lib/auth';

export default function ArticleEditPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const { getArticleBySlug, addArticle, updateArticle } = useArticles();
  
  const [article, setArticle] = useState<Partial<Article> | null>(null);
  const [content, setContent] = useState('');
  const [saved, setSaved] = useState<Date | null>(null);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/admin');
      return;
    }

    if (slug === 'new') {
      setArticle({
        title: '',
        slug: '',
        excerpt: '',
        blocks: [],
        category: 'News',
        status: 'draft',
        author: 'ObjectWire Editorial',
        createdAt: new Date().toISOString().split('T')[0],
      });
      setContent('');
    } else {
      const existingArticle = getArticleBySlug(slug);
      if (existingArticle) {
        setArticle(existingArticle);
        // Convert blocks to plain text for editing
        const text = existingArticle.blocks
          .map(block => block.content)
          .join('\n\n');
        setContent(text);
      } else {
        router.push('/admin/dashboard');
      }
    }
  }, [slug, getArticleBySlug, router]);

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  const contentToBlocks = (text: string): ArticleBlock[] => {
    const paragraphs = text.split('\n\n').filter(p => p.trim());
    return paragraphs.map((para, idx) => ({
      id: `block-${idx}`,
      type: 'paragraph' as const,
      content: para.trim(),
    }));
  };

  const handleSave = async () => {
    if (!article || !article.title || !article.slug) {
      alert('Please add a title before saving');
      return;
    }

    const blocks = contentToBlocks(content);

    const articleData: Article = {
      id: article.slug,
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt || '',
      blocks,
      category: article.category || 'News',
      status: (article.status as 'draft' | 'published') || 'draft',
      author: article.author || 'ObjectWire Editorial',
      createdAt: article.createdAt || new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      readTime: '5 min read',
    };

    try {
      if (slug === 'new') {
        await addArticle(articleData);
        router.push('/admin/dashboard');
      } else {
        await updateArticle(article.slug, articleData);
        router.push('/admin/dashboard');
      }
      setSaved(new Date());
    } catch (error) {
      console.error('Failed to save article:', error);
      alert('Failed to save article.');
    }
  };

  if (!article) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white selection:bg-yellow-100 selection:text-yellow-900">
      {/* Header Bar */}
      <div className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
        <div className="max-w-[1150px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link 
              href="/admin/dashboard" 
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-all duration-300 hover:gap-3"
            >
              <span>←</span>
              <span>Dashboard</span>
            </Link>
            {saved && (
              <span className="text-xs text-green-600">
                Saved at {saved.toLocaleTimeString()}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <select
              value={article.status}
              onChange={(e) => setArticle(prev => ({ ...prev, status: e.target.value as 'draft' | 'published' }))}
              className="text-sm border border-gray-300 px-3 py-2 rounded-md"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
            <button
              onClick={handleSave}
              className="px-5 py-2 text-sm bg-gray-900 text-white font-medium rounded-md hover:bg-gray-700 transition-colors"
            >
              Save Article
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-20">
        <div className="max-w-[1150px] mx-auto px-6 md:px-12">
          
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-red-600 text-white rounded-sm">
              {article.category?.toUpperCase() || 'NEWS'}
            </span>
          </div>

          {/* Title */}
          <div className="mb-6">
            <textarea
              value={article.title}
              onChange={(e) => {
                const title = e.target.value;
                setArticle(prev => ({
                  ...prev,
                  title,
                  slug: generateSlug(title),
                }));
              }}
              placeholder="Article Title"
              rows={2}
              className="w-full text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight border-none outline-none resize-none placeholder:text-gray-300"
            />
          </div>

          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-8 mb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">By</span>
              <input
                type="text"
                value={article.author}
                onChange={(e) => setArticle(prev => ({ ...prev, author: e.target.value }))}
                className="font-semibold text-gray-900 border-none outline-none bg-transparent w-48"
                placeholder="Author name"
              />
            </div>
            <span className="text-gray-300">•</span>
            <time className="text-gray-500">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-1 text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              5 min read
            </span>
          </div>

          {/* Excerpt */}
          <div className="mb-8">
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
              Excerpt / Summary
            </label>
            <textarea
              value={article.excerpt}
              onChange={(e) => setArticle(prev => ({ ...prev, excerpt: e.target.value }))}
              placeholder="A brief summary that appears in article previews and search results..."
              rows={3}
              className="w-full text-base text-gray-700 leading-relaxed border border-gray-200 px-4 py-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>

          {/* Main Content Editor */}
          <div className="mb-8">
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
              Article Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your article here. Separate paragraphs with blank lines.

This is how professional journalists write - clean, direct, and focused on the story. No blocks, no distractions, just great writing."
              rows={20}
              className="w-full text-base md:text-lg leading-relaxed text-gray-900 border border-gray-200 px-6 py-4 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent font-serif"
              style={{ minHeight: '500px' }}
            />
            <div className="mt-2 text-xs text-gray-400">
              Tip: Separate paragraphs with a blank line. Write naturally - the content will be formatted automatically.
            </div>
          </div>

          {/* URL Slug */}
          {article.title && (
            <div className="mb-8 p-4 bg-gray-50 rounded-md border border-gray-200">
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                URL Slug
              </label>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">objectwire.com/blog/</span>
                <input
                  type="text"
                  value={article.slug}
                  onChange={(e) => setArticle(prev => ({ ...prev, slug: generateSlug(e.target.value) }))}
                  className="flex-1 text-sm font-mono text-gray-700 bg-white border border-gray-300 px-3 py-2 rounded"
                />
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
