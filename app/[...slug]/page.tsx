'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getBlogPostBySlug, BlogPostFull } from '@/lib/blog-service';
import { ArticleRenderer } from '@/components/article-renderer';

export default function DynamicBlogPost() {
  const params = useParams();
  const [post, setPost] = useState<BlogPostFull | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  // Get the full slug path from catch-all route
  const slugArray = params.slug as string[];
  const fullSlug = slugArray ? slugArray.join('/') : '';

  useEffect(() => {
    loadPost(fullSlug);
  }, [fullSlug]);

  const loadPost = async (slug: string) => {
    try {
      const { data, error } = await getBlogPostBySlug(slug);
      if (error || !data) {
        setNotFound(true);
      } else {
        setPost(data);
      }
    } catch (error) {
      console.error('Error loading post:', error);
      setNotFound(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <Link href="/">
              <div className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
                <div className="w-10 h-10 bg-black flex items-center justify-center rounded">
                  <span className="text-white font-bold text-lg">OW</span>
                </div>
                <span className="text-xl font-bold">ObjectWire</span>
              </div>
            </Link>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="mb-8">
            <svg className="mx-auto h-24 w-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-lg text-gray-600 mb-2">
            No published article found at: <span className="font-mono text-blue-600">/{fullSlug}</span>
          </p>
          <p className="text-sm text-gray-500 mb-8">
            This URL is available for content creation.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/">
              <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                Go Home
              </button>
            </Link>
            <Link href="/admin">
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Create Article Here
              </button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
              <div className="w-10 h-10 bg-black flex items-center justify-center rounded">
                <span className="text-white font-bold text-lg">OW</span>
              </div>
              <span className="text-xl font-bold">ObjectWire</span>
            </div>
          </Link>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>{post.read_time}</span>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            {slugArray.map((segment, index) => {
              const path = '/' + slugArray.slice(0, index + 1).join('/');
              const isLast = index === slugArray.length - 1;
              return (
                <span key={segment} className="flex items-center gap-2">
                  <span>›</span>
                  {isLast ? (
                    <span className="text-gray-900 font-medium truncate max-w-[200px]">{segment}</span>
                  ) : (
                    <Link href={path} className="hover:text-gray-900">{segment}</Link>
                  )}
                </span>
              );
            })}
          </div>
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8 pb-8 border-b border-gray-200">
          <span>By <span className="font-medium text-gray-900">{post.author}</span></span>
          <span>•</span>
          <time>{new Date(post.published_at || post.created_at).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</time>
          <span>•</span>
          <span>{post.read_time}</span>
        </div>

        {/* Featured Image */}
        {post.featured_image && (
          <div className="mb-12">
            <img 
              src={post.featured_image} 
              alt={post.title} 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Excerpt */}
        {post.excerpt && (
          <div className="text-xl text-gray-700 mb-12 leading-relaxed font-serif italic border-l-4 border-gray-300 pl-6">
            {post.excerpt}
          </div>
        )}

        {/* Content Blocks with Interactive Animations */}
        {post.blocks && post.blocks.length > 0 ? (
          <ArticleRenderer blocks={post.blocks} />
        ) : (
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500">No content blocks available.</p>
          </div>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-600 mb-3 tracking-wider">TAGS</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Back to home */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/">
            <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </button>
          </Link>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} ObjectWire. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
