import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPostBySlug, BlogPostFull } from '@/lib/blog-service';
import { ArticleRenderer } from '@/components/article-renderer';
import { generateSEOMetadata, generateArticleSchema } from '@/lib/seo';

export const dynamic = 'force-dynamic';

type Props = {
  params: { slug: string[] };
};

// Generate SEO metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const fullSlug = params.slug.join('/');
  const { data: post } = await getBlogPostBySlug(fullSlug);
  
  if (!post) {
    return {
      title: 'Article Not Found | ObjectWire',
    };
  }
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://objectwire.com';
  const seo = generateSEOMetadata(post, baseUrl);
  
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: seo.author || 'ObjectWire Editorial Team' }],
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: 'article',
      publishedTime: seo.publishedTime,
      modifiedTime: seo.modifiedTime,
      authors: [seo.author || 'ObjectWire Editorial Team'],
      tags: seo.tags,
      images: [
        {
          url: seo.ogImage || '',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage || ''],
    },
  };
}

export default async function DynamicBlogPost({ params }: Props) {
  const fullSlug = params.slug.join('/');
  const { data: post, error } = await getBlogPostBySlug(fullSlug);
  
  if (error || !post || post.status !== 'published') {
    notFound();
  }
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://objectwire.com';
  const schema = generateArticleSchema(post, baseUrl);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
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

      {/* Article Content */}
      <ArticleRenderer blocks={post.blocks} />
      
      {/* Footer with metadata */}
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200 mt-16">
        <div className="flex flex-wrap gap-4 items-center justify-between text-sm text-gray-600">
          <div className="flex flex-wrap gap-4">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{new Date(post.published_at || post.created_at).toLocaleDateString()}</span>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">{post.category}</span>
            {post.tags.slice(0, 3).map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
