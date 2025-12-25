import { getAllBlogPosts, getBlogCategoryById, formatDate } from '@/lib/blog-data';
import { blogCategories } from '@/lib/blog-data';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  TypewriterText, 
  GlitchText, 
  AnimatedCard, 
  PulseIndicator,
  PageTransition,
  StaggerContainer,
  StaggerItem,
  DataStream
} from '@/components/animations';

export const metadata: Metadata = {
  title: 'Analysis | ObjectWire',
  description: 'Strategic intelligence and analysis from ObjectWire - precision research on technology, supply chains, regulation, and geopolitics.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const categories = blogCategories;

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12">
            <GlitchText className="text-4xl font-mono font-bold tracking-wider mb-4">
              <TypewriterText text="STRATEGIC ANALYSIS" />
            </GlitchText>
            <TypewriterText 
              text="Event-driven intelligence constructed as documented claims, supported by primary sources and transparent citations. Each analysis is designed for immediate comprehension and professional application."
              className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl block"
            />
            <div className="mt-6">
              <DataStream className="h-16" />
            </div>
          </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-sm font-semibold tracking-wider text-gray-500 dark:text-gray-400 mb-4">
            ANALYSIS CATEGORIES
          </h2>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <StaggerItem key={category.id}>
                <AnimatedCard delay={index * 0.1}>
                  <div className="border border-gray-200 dark:border-gray-800 p-4 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 bg-white dark:bg-gray-900 rounded-lg">
                    <PulseIndicator 
                      level={5} 
                      color={category.color}
                    />
                    <h3 className="font-semibold text-sm mb-2 mt-3">{category.name}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Featured Posts */}
        <div className="mb-12">
          <h2 className="text-sm font-semibold tracking-wider text-gray-500 dark:text-gray-400 mb-6">
            FEATURED ANALYSIS
          </h2>
          {posts.filter(post => post.featured).map((post) => {
            const category = getBlogCategoryById(post.category);
            return (
              <article 
                key={post.id}
                className="border-b border-gray-200 dark:border-gray-800 pb-8 mb-8 last:border-b-0"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: category?.color || '#6B7280' }}
                  ></div>
                  <span className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400">
                    {category?.name.toUpperCase()}
                  </span>
                  <span className="text-xs text-gray-400">•</span>
                  <time className="text-xs text-gray-500 dark:text-gray-400">
                    {formatDate(post.publishedAt)}
                  </time>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {post.readingTime} min read
                  </span>
                </div>
                
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-semibold mb-4 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {post.description}
                </p>
                
                {post.metadata && (
                  <div className="flex items-center space-x-6 text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500 dark:text-gray-400">Strategic Relevance:</span>
                      <span className="font-semibold">{post.metadata.strategicRelevance}/10</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500 dark:text-gray-400">Verification:</span>
                      <span className={`font-semibold ${
                        post.metadata.verificationLevel === 'high' ? 'text-green-600 dark:text-green-400' :
                        post.metadata.verificationLevel === 'medium' ? 'text-yellow-600 dark:text-yellow-400' :
                        'text-red-600 dark:text-red-400'
                      }`}>
                        {post.metadata.verificationLevel?.toUpperCase()}
                      </span>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* All Posts */}
        <div>
          <h2 className="text-sm font-semibold tracking-wider text-gray-500 dark:text-gray-400 mb-6">
            ALL ANALYSIS
          </h2>
          <div className="space-y-8">
            {posts.filter(post => !post.featured).map((post) => {
              const category = getBlogCategoryById(post.category);
              return (
                <article 
                  key={post.id}
                  className="border-b border-gray-200 dark:border-gray-800 pb-6 last:border-b-0"
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: category?.color || '#6B7280' }}
                    ></div>
                    <span className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400">
                      {category?.name.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <time className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(post.publishedAt)}
                    </time>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-semibold mb-3 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                      <span>{post.readingTime} min read</span>
                      {post.metadata && (
                        <>
                          <span>•</span>
                          <span>Relevance: {post.metadata.strategicRelevance}/10</span>
                        </>
                      )}
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-xs font-semibold hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      READ ANALYSIS →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </PageTransition>
  );
}