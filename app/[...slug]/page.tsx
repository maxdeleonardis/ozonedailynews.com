import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPostBySlug, BlogPostFull } from '@/lib/blog-service';
import { ArticleRenderer } from '@/components/article-renderer';
import { generateArticleMetadata, generateArticleSchema } from '@/lib/seo';

export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ slug: string[] }>;
};

// Generate SEO metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fullSlug = slug.join('/');
  const post = await getBlogPostBySlug(fullSlug);
  
  if (!post) {
    return {
      title: 'Article Not Found | ObjectWire',
    };
  }
  
  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt || '',
  };
}

export default async function DynamicBlogPost({ params }: Props) {
  const { slug } = await params;
  const fullSlug = slug.join('/');
  const post = await getBlogPostBySlug(fullSlug);
  
  if (!post || post.status !== 'published') {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Article Header with Title and Featured Image */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
            {/* Title and Meta */}
            <div className="flex-1">
              <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 mb-4 inline-block">
                ← Back to ObjectWire
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                <span>By {post.author || 'ObjectWire Team'}</span>
                <span>•</span>
                <span>{new Date(post.published_at || post.created_at || Date.now()).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span>•</span>
                <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-medium">{post.category || 'News'}</span>
              </div>
            </div>
            {/* Featured Image */}
            {post.featured_image && (
              <div className="w-full md:w-80 flex-shrink-0">
                <img 
                  src={post.featured_image} 
                  alt={post.title}
                  className="w-full h-48 md:h-52 object-cover rounded-lg shadow-md"
                />
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10">
        {post.layout_columns === 2 && post.sidebar_blocks && post.sidebar_blocks.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <div className="flex-1 lg:max-w-[calc(100%-320px)]">
              <ArticleRenderer blocks={post.blocks || []} />
            </div>
            {/* Sidebar */}
            <aside className="w-full lg:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-24 space-y-6">
                <ArticleRenderer blocks={post.sidebar_blocks} />
              </div>
            </aside>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <ArticleRenderer blocks={post.blocks || []} />
          </div>
        )}
      </div>
      
      {/* Footer with tags */}
      <footer className="max-w-5xl mx-auto px-6 md:px-12 py-12 border-t border-gray-200">
        <div className="flex flex-wrap gap-4 items-center justify-between text-sm text-gray-600">
          <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
            ← Back to ObjectWire
          </Link>
          {post.tags && post.tags.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {post.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </footer>
    </div>
  );
}
