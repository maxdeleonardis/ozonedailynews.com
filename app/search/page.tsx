import Link from 'next/link';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { scanAllContent } from '@/lib/content-scanner';
import Breadcrumb from '@/components/nav/Breadcrumb';
import type { Metadata } from 'next';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const params = await searchParams;
  const query = params.q || '';
  
  return {
    title: query ? `Search Results for "${query}"` : 'Search',
    description: query 
      ? `Search results for "${query}" on OzoneNews` 
      : 'Search OzoneNews for news, articles, and investigations',
    robots: {
      index: false, // Don't index search results pages
      follow: true,
    },
    alternates: {
      canonical: 'https://www.ozonenetwork.news/search',
    },
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q?.trim().toLowerCase() || '';

  let results: any[] = [];
  let searchPerformed = false;

  if (query) {
    searchPerformed = true;

    // Single source of truth: filesystem scan finds ALL pages with metadata.
    // No separate Supabase query — avoids duplicates and broken slug-to-URL mapping.
    const allArticles = await scanAllContent();

    // Search algorithm: title, excerpt, category, author
    results = allArticles.filter(article => {
      const searchableText = `
        ${article.title} 
        ${article.excerpt} 
        ${article.category} 
        ${article.author}
      `.toLowerCase();

      return searchableText.includes(query);
    });

    // Sort by relevance (title matches first, then excerpt matches)
    results.sort((a, b) => {
      const aTitleMatch = a.title.toLowerCase().includes(query);
      const bTitleMatch = b.title.toLowerCase().includes(query);
      
      if (aTitleMatch && !bTitleMatch) return -1;
      if (!aTitleMatch && bTitleMatch) return 1;
      
      // If both match title or both don't, sort by date
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }

  return (
    <div className={`${jakarta.variable} min-h-screen bg-white font-[family-name:var(--font-jakarta)]`}>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumb */}
        <Breadcrumb 
          items={[
            { name: 'Home', item: '/' },
            { name: 'Search', item: '/search' },
          ]}
        />

        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {query ? `Search Results for "${query}"` : 'Search OzoneNews'}
          </h1>
          
          {searchPerformed && (
            <p className="text-gray-600">
              Found <strong>{results.length}</strong> {results.length === 1 ? 'result' : 'results'}
            </p>
          )}
        </div>

        {/* Search Form */}
        <form action="/search" method="GET" className="mb-12">
          <div className="flex gap-3">
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="Search articles, news, topics..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              autoFocus
            />
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </div>
        </form>

        {/* Results */}
        {searchPerformed && (
          <div>
            {results.length > 0 ? (
              <div className="space-y-8">
                {results.map((article, index) => (
                  <article 
                    key={`${article.slug}-${index}`}
                    className="border-b border-gray-200 pb-8 last:border-0"
                  >
                    <Link href={article.slug.startsWith('/') ? article.slug : `/${article.slug}`} className="group block">
                      {/* Category Badge */}
                      <span className="inline-block text-xs font-bold text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded mb-2">
                        {article.category}
                      </span>

                      {/* Title */}
                      <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-700 leading-relaxed mb-3 line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Metadata */}
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="font-medium">{article.author}</span>
                        <span>•</span>
                        <time>{article.date}</time>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  No results found for "{query}"
                </h2>
                <p className="text-gray-600 mb-6">
                  Try different keywords or browse our categories below
                </p>
                
                {/* Suggested Categories */}
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link 
                    href="/news"
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
                  >
                    Latest News
                  </Link>
                  <Link 
                    href="/microsoft"
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
                  >
                    Microsoft
                  </Link>
                  <Link 
                    href="/google"
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
                  >
                    Google
                  </Link>
                  <Link 
                    href="/apple"
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
                  >
                    AI & Technology
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Initial State - No Search Performed */}
        {!searchPerformed && (
          <div className="text-center py-12">
            <div className="text-6xl mb-6">🔎</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Search our entire site
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Search through hundreds of articles, news stories, and investigations. 
              We cover technology, business, politics, and more.
            </p>

            {/* Popular Topics */}
            <div className="max-w-3xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Popular Topics
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link 
                  href="/search?q=microsoft"
                  className="p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all text-left"
                >
                  <div className="text-2xl mb-2">🖥️</div>
                  <h4 className="font-semibold text-gray-900">Microsoft</h4>
                  <p className="text-sm text-gray-600">Windows, Azure, Cloud</p>
                </Link>
                
                <Link 
                  href="/search?q=google"
                  className="p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all text-left"
                >
                  <div className="text-2xl mb-2">🌐</div>
                  <h4 className="font-semibold text-gray-900">Google</h4>
                  <p className="text-sm text-gray-600">Waymo, AI, Search</p>
                </Link>
                
                <Link 
                  href="/search?q=ai"
                  className="p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all text-left"
                >
                  <div className="text-2xl mb-2">🤖</div>
                  <h4 className="font-semibold text-gray-900">Artificial Intelligence</h4>
                  <p className="text-sm text-gray-600">ChatGPT, Gemini, ML</p>
                </Link>
                
                <Link 
                  href="/search?q=privacy"
                  className="p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all text-left"
                >
                  <div className="text-2xl mb-2">🔒</div>
                  <h4 className="font-semibold text-gray-900">Privacy & Security</h4>
                  <p className="text-sm text-gray-600">Encryption, Data Protection</p>
                </Link>
                
                <Link 
                  href="/search?q=politics"
                  className="p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all text-left"
                >
                  <div className="text-2xl mb-2">🏛️</div>
                  <h4 className="font-semibold text-gray-900">Politics</h4>
                  <p className="text-sm text-gray-600">Government, Policy</p>
                </Link>
                
                <Link 
                  href="/search?q=investigation"
                  className="p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all text-left"
                >
                  <div className="text-2xl mb-2">🔍</div>
                  <h4 className="font-semibold text-gray-900">Investigations</h4>
                  <p className="text-sm text-gray-600">Fraud, Exposés</p>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
