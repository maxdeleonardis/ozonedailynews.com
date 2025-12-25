import { getBlogPostBySlug, getBlogCategoryById, formatDate, getAllBlogPosts, getRelatedBlogPosts } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import NewsCard from '@/components/news-card';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | ObjectWire',
    };
  }

  return {
    title: `${post.title} | ObjectWire`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  const category = getBlogCategoryById(post.category);

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Image Section */}
      {post.hero && (
        <div className="relative w-full h-[400px] md:h-[500px] bg-gray-100">
          <img
            src={post.hero}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-white"></div>
        </div>
      )}

      {/* Article Container */}
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Header Section */}
        <header className={`${post.hero ? '-mt-32 relative z-10' : 'pt-24'} pb-8`}>
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-black">
            {post.title}
          </h1>

          {/* Author & Meta Info */}
          <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
            <span className="font-medium">{post.author.name}</span>
            <span>•</span>
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
          </div>
        </header>

        {/* Main Content Section */}
        <article className="prose prose-lg max-w-none pb-16">
          {/* First Section with larger text */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black uppercase tracking-tight">
              {category?.name || 'Analysis'}
            </h3>
            <div className="text-lg leading-relaxed text-gray-800 space-y-4">
              {post.description}
            </div>
          </div>

          {/* Content Body */}
          <div 
            className="article-content space-y-6 text-base leading-relaxed text-gray-800"
            dangerouslySetInnerHTML={{ 
              __html: post.content
                .split('\n\n')
                .map(para => {
                  // H1
                  if (para.startsWith('# ')) {
                    return `<h1 class="text-3xl font-bold mt-12 mb-6 first:mt-0 text-black">${para.substring(2)}</h1>`;
                  }
                  // H2
                  if (para.startsWith('## ')) {
                    return `<h2 class="text-2xl font-bold mt-10 mb-5 text-black">${para.substring(3)}</h2>`;
                  }
                  // H3
                  if (para.startsWith('### ')) {
                    return `<h3 class="text-xl font-bold mt-8 mb-4 text-black">${para.substring(4)}</h3>`;
                  }
                  // H4
                  if (para.startsWith('#### ')) {
                    return `<h4 class="text-lg font-bold mt-6 mb-3 text-black uppercase tracking-wide">${para.substring(5)}</h4>`;
                  }
                  // Lists
                  if (para.startsWith('- ')) {
                    const items = para.split('\n')
                      .filter(line => line.startsWith('- '))
                      .map(item => `<li class="mb-2">${item.substring(2)}</li>`)
                      .join('\n');
                    return `<ul class="list-disc list-inside space-y-2 my-4">${items}</ul>`;
                  }
                  // HR
                  if (para === '---') {
                    return '<hr class="my-8 border-gray-300">';
                  }
                  // Regular paragraph
                  if (para.trim()) {
                    return `<p class="mb-4 leading-relaxed">${para
                      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold">$1</strong>')
                      .replace(/\*(.+?)\*/g, '<em>$1</em>')
                      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">$1</a>')}</p>`;
                  }
                  return '';
                })
                .join('\n')
            }}
          />
        </article>

        {/* Sources Section */}
        {post.metadata?.sources && (
          <div className="border-t border-gray-200 py-8 mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
              Sources & References
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {post.metadata.sources.map((source, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-gray-400">{index + 1}.</span>
                  <span>{source}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer Navigation */}
        <footer className="border-t border-gray-200 py-8 mb-16">
          <Link 
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-gray-600 transition"
          >
            <span>←</span>
            <span>Back to News</span>
          </Link>
        </footer>
      </div>

      {/* Related Articles Widget */}
      <section className="bg-gray-50 py-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getRelatedBlogPosts(post.id, post.category).map((relatedPost) => (
              <NewsCard
                key={relatedPost.id}
                title={relatedPost.title}
                description={relatedPost.description}
                slug={relatedPost.slug}
                category={relatedPost.category}
                publishedAt={relatedPost.publishedAt}
                readingTime={relatedPost.readingTime}
                image={relatedPost.hero}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comment Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-16">
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold mb-6">Join the Discussion</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <p className="text-gray-700 mb-4">
              We're building a community-driven discussion platform. Join our Discord to discuss this article with other readers.
            </p>
            <a
              href="https://discord.gg/objectwire"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Join Discord Discussion
            </a>
            <p className="text-sm text-gray-500 mt-4">
              🔮 Future: On-chain verified comments with reputation tracking
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-yellow-50 py-16 px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">STAY UP TO DATE</h2>
          <p className="text-gray-700 mb-8">GET Objective LATEST</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:border-black text-black"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}