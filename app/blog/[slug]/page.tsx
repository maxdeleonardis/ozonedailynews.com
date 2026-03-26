import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { ArticleRenderer } from '@/components/article-renderer';
import { NewsArticle } from '@/components/NewsArticle';

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
    <span className="inline-block px-3 py-1 text-xs font-semibold mb-4" style={{ backgroundColor: color.bg, color: color.text }}>
      {category.toUpperCase()}
    </span>
  );
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createClient();
  const fullSlug = `/blog/${slug}`;

  // STEP A: Fetch routing + metadata from content_registry
  const { data: registryEntry } = await supabase
    .from('content_registry')
    .select('component_type, title, description, image_url')
    .eq('slug', fullSlug)
    .maybeSingle();

  const componentType = registryEntry?.component_type ?? 'standard_article';

  // STEP B: Fetch article content — gated to published only
  const { data: article, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error || !article) {
    notFound();
  }

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 z-50" />

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <span className="mx-2">→</span>
          <Link href="/blog" className="hover:text-gray-900 transition-colors">News</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-900">{article.category}</span>
        </nav>

        {/* Category Badge */}
        <CategoryBadge category={article.category} />

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
            {article.title}
          </h1>
          
          {article.excerpt && (
            <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
              {article.excerpt}
            </p>
          )}

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="font-medium">{article.author}</span>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time>{new Date(article.published_at || article.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>~5 min read</span>
            </div>
          </div>
        </header>

        {/* Article Content — component_type dispatch */}
        <div className="prose prose-lg max-w-none">
          {componentType === 'news_article' ? (
            <div dangerouslySetInnerHTML={{ __html: article.content_html ?? '' }} />
          ) : (
            <ArticleRenderer blocks={article.content || []} />
          )}
        </div>

        {/* Share & Navigation */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to News</span>
            </Link>
          </div>
        </footer>
      </article>
    </>
  );
}

// Generate SEO metadata — two-step: content_registry (rich) → articles (fallback)
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const fullSlug = `/blog/${slug}`;

  // Try content_registry first — has publishedTime, modifiedTime, canonical
  const { data: entry } = await supabase
    .from('content_registry')
    .select('title, description, publish_date, modified_date, image_url, image_alt')
    .eq('slug', fullSlug)
    .maybeSingle();

  // Fall back to articles table if not in registry
  const { data: article } = !entry
    ? await supabase
        .from('articles')
        .select('title, excerpt, published_at, updated_at')
        .eq('slug', slug)
        .eq('status', 'published')
        .maybeSingle()
    : { data: null };

  const title       = entry?.title       ?? article?.title;
  const description = entry?.description ?? article?.excerpt;
  const publishedAt = entry?.publish_date ?? article?.published_at;
  const modifiedAt  = entry?.modified_date ?? article?.updated_at;
  const imageUrl    = entry?.image_url ?? null;

  if (!title) {
    return {
      title: 'Article Not Found | ObjectWire',
      alternates: { canonical: 'https://www.objectwire.org/blog' },
    };
  }

  return {
    title: `${title} | ObjectWire`,
    description: description ?? undefined,
    alternates: { canonical: `https://www.objectwire.org${fullSlug}` },
    openGraph: {
      type: 'article',
      title,
      description: description ?? undefined,
      url: `https://www.objectwire.org${fullSlug}`,
      publishedTime: publishedAt ?? undefined,
      modifiedTime:  modifiedAt  ?? undefined,
      ...(imageUrl ? { images: [{ url: imageUrl, alt: entry?.image_alt ?? title }] } : {}),
    },
  };
}
