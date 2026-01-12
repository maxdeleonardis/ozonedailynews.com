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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Floating Header Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200/50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/admin/dashboard" 
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-medium">Back</span>
            </Link>
            {saved && (
              <div className="flex items-center gap-1.5 text-xs text-green-600 bg-green-50 px-3 py-1.5 rounded-full animate-fade-in">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Saved {saved.toLocaleTimeString()}</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <select
              value={article.status}
              onChange={(e) => setArticle(prev => ({ ...prev, status: e.target.value as 'draft' | 'published' }))}
              className="text-sm font-medium border border-gray-200 bg-white px-3 py-1.5 rounded-lg hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
            >
              <option value="draft">📝 Draft</option>
              <option value="published">🌐 Published</option>
            </select>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-5 py-1.5 text-sm bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-all shadow-sm hover:shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
              </svg>
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="pt-20 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Category Selector with Modern Pills */}
          <div className="mb-8 mt-8">
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Category
            </label>
            <div className="flex flex-wrap gap-2">
              {['Technology', 'Business', 'Politics', 'News', 'Education', 'Crime', 'Investigation'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setArticle(prev => ({ ...prev, category: cat }))}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    article.category === cat
                      ? 'bg-black text-white shadow-md scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Title with Larger, More Prominent Design */}
          <div className="mb-8">
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
              placeholder="Give your story a title..."
              rows={2}
              className="w-full text-4xl md:text-5xl font-bold leading-tight tracking-tight border-none outline-none resize-none placeholder:text-gray-200 focus:placeholder:text-gray-300 transition-all"
              style={{ 
                fontFamily: 'var(--font-sans)',
                textRendering: 'optimizeLegibility'
              }}
            />
          </div>

          {/* Elegant Metadata Bar */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 pb-6 mb-8 border-b border-gray-200">
            <div className="flex items-center gap-2 group">
              <svg className="w-4 h-4 text-gray-300 group-hover:text-gray-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <input
                type="text"
                value={article.author}
                onChange={(e) => setArticle(prev => ({ ...prev, author: e.target.value }))}
                className="font-medium text-gray-700 border-none outline-none bg-transparent hover:text-gray-900 transition-colors"
                placeholder="Author name"
              />
            </div>
            <span className="text-gray-200">•</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time className="text-gray-500">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
            </div>
            <span className="text-gray-200">•</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-500">~5 min read</span>
            </div>
          </div>

          {/* Excerpt with Modern Card Design */}
          <div className="mb-10">
            <label className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Excerpt
            </label>
            <div className="relative">
              <textarea
                value={article.excerpt}
                onChange={(e) => setArticle(prev => ({ ...prev, excerpt: e.target.value }))}
                placeholder="Write a compelling summary that draws readers in..."
                rows={3}
                className="w-full text-base text-gray-700 leading-relaxed bg-gray-50 border-2 border-transparent px-5 py-4 rounded-xl resize-none focus:outline-none focus:bg-white focus:border-gray-900 transition-all placeholder:text-gray-300"
              />
              <div className="absolute bottom-3 right-4 text-xs text-gray-300">
                {article.excerpt?.length || 0} characters
              </div>
            </div>
          </div>

          {/* Main Content Editor - Distraction Free */}
          <div className="mb-10">
            <label className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Article Content
            </label>
            <div className="relative group">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Start writing your story...

Separate paragraphs with blank lines. Focus on clarity, accuracy, and compelling narrative. This is where great journalism happens."
                rows={20}
                className="w-full text-lg leading-relaxed text-gray-800 bg-white border-2 border-gray-100 px-8 py-6 rounded-2xl resize-none focus:outline-none focus:border-gray-900 transition-all font-serif placeholder:text-gray-200 shadow-sm hover:shadow-md focus:shadow-lg"
                style={{ 
                  minHeight: '600px',
                  lineHeight: '1.8'
                }}
              />
              {/* Word Count Overlay */}
              <div className="absolute bottom-4 right-6 text-xs text-gray-300 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-100">
                {content.split(/\s+/).filter(w => w.length > 0).length} words
              </div>
            </div>
            <div className="mt-3 flex items-start gap-2 text-xs text-gray-400 bg-blue-50 border border-blue-100 rounded-lg p-3">
              <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="leading-relaxed">
                <strong>Writing tip:</strong> Separate paragraphs with blank lines for better readability. Your content will be automatically formatted for the web.
              </span>
            </div>
          </div>

          {/* URL Slug - Sleek Design */}
          {article.title && (
            <div className="mb-8 p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
              <label className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Article URL
              </label>
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg border border-gray-200">
                <span className="text-sm text-gray-400 font-mono">objectwire.com/blog/</span>
                <input
                  type="text"
                  value={article.slug}
                  onChange={(e) => setArticle(prev => ({ ...prev, slug: generateSlug(e.target.value) }))}
                  className="flex-1 text-sm font-mono text-gray-700 bg-transparent border-none outline-none"
                />
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
