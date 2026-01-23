import Link from 'next/link';
import type { Metadata } from 'next';
import { getPublishedBlogPosts } from '@/lib/blog-service';
import { scanAllContent, filterByDateRange, groupByCategory, getUrgentArticles } from '@/lib/content-scanner';

export const metadata: Metadata = {
  title: "Latest News & Investigations | The Object Wire",
  description: "Stay updated with the latest investigative journalism, breaking news, technology updates, political analysis and fraud investigations from The Object Wire.",
  alternates: {
    canonical: 'https://www.objectwire.org/news',
  },
  openGraph: {
    title: "Latest News & Investigations | The Object Wire",
    description: "Comprehensive news coverage with verified sources and investigative depth.",
  },
};

// Revalidate every 5 minutes to show fresh content
export const revalidate = 300;

export default async function NewsPage() {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // 1. Scan filesystem for all articles
  const filesystemArticles = await scanAllContent();
  
  // 2. Fetch from Supabase database
  const { data: databasePosts } = await getPublishedBlogPosts();
  
  // 3. Convert database posts to same format
  const databaseArticles = databasePosts?.map(post => ({
    title: post.title,
    excerpt: post.excerpt || 'Read the full article for more details.',
    category: post.category?.toUpperCase() || 'NEWS',
    date: post.published_at 
      ? new Date(post.published_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      : 'Recently published',
    slug: post.slug,
    author: post.author || 'ObjectWire Team',
    readTime: post.read_time || '5 min',
    urgent: false,
    filePath: 'database',
    createdAt: post.published_at ? new Date(post.published_at) : new Date(),
  })) || [];

  // 4. Combine all content sources
  const allArticles = [...filesystemArticles, ...databaseArticles];
  
  // 5. Sort by date (newest first)
  allArticles.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  // 6. Get different article segments
  const todayArticles = filterByDateRange(allArticles, 1); // Last 24 hours
  const thisWeekArticles = filterByDateRange(allArticles, 7); // Last 7 days
  const urgentArticles = getUrgentArticles(allArticles);
  const categorizedArticles = groupByCategory(allArticles);

  // 7. Build dynamic category list
  const categories = Object.keys(categorizedArticles).map(cat => ({
    name: cat.charAt(0) + cat.slice(1).toLowerCase().replace(/_/g, ' '),
    href: `/news?category=${cat.toLowerCase()}`,
    count: categorizedArticles[cat].length,
    new: categorizedArticles[cat].some(a => 
      a.createdAt.getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000
    ),
  })).sort((a, b) => b.count - a.count);

  // 8. Prepare sections
  const featuredStories = allArticles.slice(0, 4);
  const technologyNews = categorizedArticles['TECHNOLOGY']?.slice(0, 6) || 
                         categorizedArticles['AI']?.slice(0, 6) ||
                         categorizedArticles['SOFTWARE']?.slice(0, 6) || [];
  const businessNews = categorizedArticles['BUSINESS']?.slice(0, 6) || 
                       categorizedArticles['FINANCE']?.slice(0, 6) || [];
  const politicsNews = categorizedArticles['POLITICS']?.slice(0, 6) || 
                       categorizedArticles['GOVERNMENT']?.slice(0, 6) || [];
  const investigationsNews = categorizedArticles['INVESTIGATION']?.slice(0, 6) || 
                             categorizedArticles['FRAUD']?.slice(0, 6) || [];

  const totalArticles = allArticles.length;
  const articlesThisWeek = thisWeekArticles.length;

  return (
    <div className="min-h-screen bg-white">
      {/* Newspaper-Style Header */}
      <header className="border-b-4 border-double border-black">
        <div className="container py-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs text-gray-600 mb-4 pb-4 border-b border-gray-200">
            <span className="font-mono">{today}</span>
            <span className="font-mono tracking-wider">COMPREHENSIVE NEWS COVERAGE</span>
            <span className="font-mono">Latest Updates</span>
          </div>
          
          {/* Page Title */}
          <div className="text-center py-6">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
              Latest News & Investigations
            </h1>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="h-px w-16 bg-black"></div>
              <p className="text-sm font-mono tracking-widest text-gray-600">
                VERIFIED • SOURCE-CITED • INDEPENDENT
              </p>
              <div className="h-px w-16 bg-black"></div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 pt-4 border-t border-gray-200 text-sm font-medium">
            <Link href="/news/quantum-computing" className="hover:underline underline-offset-4">Quantum Computing</Link>
            <Link href="/minesoda" className="hover:underline underline-offset-4">Minnesota</Link>
            <Link href="/case" className="hover:underline underline-offset-4">Investigations</Link>
            <Link href="/analyst" className="hover:underline underline-offset-4">Business</Link>
            <Link href="/coding" className="hover:underline underline-offset-4">Technology</Link>
            <Link href="/opinion" className="hover:underline underline-offset-4">Opinion</Link>
          </nav>
        </div>
      </header>

      {/* Breaking News Ticker */}
      <div className="bg-red-600 text-white py-2 overflow-hidden">
        <div className="container">
          <div className="flex items-center gap-4">
            <span className="bg-white text-red-600 text-xs font-bold px-3 py-1 animate-pulse shrink-0">
              LATEST
            </span>
            <div className="overflow-hidden flex-1">
              <p className="text-sm font-medium whitespace-nowrap animate-marquee">
                {urgentArticles.length > 0 
                  ? urgentArticles.map(article => article.title).join(' • ')
                  : todayArticles.slice(0, 5).map(article => article.title).join(' • ')
                }
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8">
            
            {/* Featured Stories */}
            <section className="mb-12">
              <h2 className="text-xs font-bold tracking-widest border-b-2 border-black pb-2 mb-6">
                FEATURED STORIES
              </h2>
              
              {/* Lead Story */}
              <article className="mb-8 pb-8 border-b-2 border-black">
                <Link href={`/${featuredStories[0].slug}`} className="group block">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1">
                      {featuredStories[0].category}
                    </span>
                    {featuredStories[0].urgent && (
                      <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 animate-pulse">
                        BREAKING
                      </span>
                    )}
                    <span className="text-xs text-gray-500">{featuredStories[0].readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-4xl font-black leading-tight mb-4 group-hover:underline">
                    {featuredStories[0].title}
                  </h2>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-4 first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none">
                    {featuredStories[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-black">{featuredStories[0].author}</span>
                      <span>•</span>
                      <time>{featuredStories[0].date}</time>
                    </div>
                    <span className="font-medium text-black group-hover:underline">
                      Continue Reading →
                    </span>
                  </div>
                </Link>
              </article>

              {/* Secondary Featured Stories */}
              <div className="grid md:grid-cols-2 gap-8">
                {featuredStories.slice(1).map((story, index) => (
                  <article key={story.slug} className="border-b border-gray-200 pb-6">
                    <Link href={`/${story.slug}`} className="group block">
                      <span className="text-xs font-bold text-gray-500 tracking-wider">
                        {story.category}
                      </span>
                      <h3 className="text-xl font-bold mt-2 mb-3 leading-tight group-hover:underline">
                        {story.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {story.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="font-medium">{story.author}</span>
                        <span>•</span>
                        <time>{story.date}</time>
                        <span>•</span>
                        <span>{story.readTime}</span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            {/* Technology Section */}
            <section className="mb-12">
              <h2 className="text-xs font-bold tracking-widest border-b-2 border-blue-600 pb-2 mb-6">
                TECHNOLOGY & INNOVATION
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologyNews.map((story, index) => (
                  <article key={story.slug} className="border border-gray-200 hover:shadow-lg transition-shadow">
                    <Link href={`/${story.slug}`} className="group block p-4">
                      <span className="text-xs font-bold text-blue-600">{story.category}</span>
                      <h3 className="font-bold mt-2 mb-2 leading-tight group-hover:underline">
                        {story.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {story.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{story.author}</span>
                        <span>•</span>
                        <time>{story.date}</time>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            {/* Business Section */}
            <section className="mb-12">
              <h2 className="text-xs font-bold tracking-widest border-b-2 border-green-600 pb-2 mb-6">
                BUSINESS & FINANCE
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {businessNews.map((story, index) => (
                  <article key={story.slug} className="border border-gray-200 hover:shadow-lg transition-shadow">
                    <Link href={`/${story.slug}`} className="group block p-4">
                      <span className="text-xs font-bold text-green-600">{story.category}</span>
                      <h3 className="font-bold mt-2 mb-2 leading-tight group-hover:underline">
                        {story.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {story.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{story.author}</span>
                        <span>•</span>
                        <time>{story.date}</time>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            {/* Politics Section */}
            <section className="mb-12">
              <h2 className="text-xs font-bold tracking-widest border-b-2 border-purple-600 pb-2 mb-6">
                POLITICS & INVESTIGATIONS
              </h2>
              <div className="space-y-6">
                {politicsNews.map((story, index) => (
                  <article key={story.slug} className="flex gap-6 border-b border-gray-200 pb-6">
                    <div className="flex-1">
                      <Link href={`/${story.slug}`} className="group block">
                        <span className="text-xs font-bold text-purple-600">{story.category}</span>
                        <h3 className="text-xl font-bold mt-2 mb-3 leading-tight group-hover:underline">
                          {story.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-3">
                          {story.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span className="font-medium">{story.author}</span>
                          <span>•</span>
                          <time>{story.date}</time>
                        </div>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Investigations & Special Reports */}
            {investigationsNews.length > 0 && (
              <section className="mb-12">
                <h2 className="text-xs font-bold tracking-widest border-b-2 border-orange-600 pb-2 mb-6">
                  INVESTIGATIONS & SPECIAL REPORTS
                </h2>
                <div className="space-y-6">
                  {investigationsNews.map((story, index) => (
                    <article key={`${story.slug}-${index}`} className="flex gap-6 border-b border-gray-200 pb-6">
                      <div className="flex-1">
                        <Link href={`/${story.slug}`} className="group block">
                          <span className="text-xs font-bold text-orange-600">{story.category}</span>
                          <h3 className="text-xl font-bold mt-2 mb-3 leading-tight group-hover:underline">
                            {story.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-3">
                            {story.excerpt}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span className="font-medium">{story.author}</span>
                            <span>•</span>
                            <time>{story.date}</time>
                            <span>•</span>
                            <span>{story.readTime}</span>
                          </div>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Today's Latest Stories - Dynamically Combined */}
            <section className="mb-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -mx-4 px-4 py-8 md:mx-0 md:px-8 md:rounded-lg border-2 border-indigo-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xs font-bold tracking-widest border-b-2 border-indigo-600 pb-2">
                  🔥 TODAY'S LATEST STORIES • LIVE UPDATES
                </h2>
                <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-300">
                  Updated {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                </span>
              </div>
              
              {todayArticles.length > 0 ? (
                <>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {todayArticles.slice(0, 12).map((article, index) => (
                      <article 
                        key={`${article.slug}-${index}`}
                        className="border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-xl transition-all bg-white rounded-lg overflow-hidden group"
                      >
                        <Link href={`/${article.slug}`} className="block">
                          <div className="p-4">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-xs font-bold text-indigo-600 uppercase bg-indigo-100 px-2 py-1 rounded">
                                {article.category}
                              </span>
                              {article.urgent && (
                                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded animate-pulse">
                                  BREAKING
                                </span>
                              )}
                            </div>
                            
                            <h3 className="font-bold text-lg mt-2 mb-3 leading-tight group-hover:text-indigo-600 transition-colors line-clamp-2">
                              {article.title}
                            </h3>
                            
                            <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">
                              {article.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-gray-700">{article.author}</span>
                                <span>•</span>
                                <span>{article.readTime}</span>
                              </div>
                              <time className="text-indigo-600 font-medium">{article.date}</time>
                            </div>
                          </div>
                        </Link>
                      </article>
                    ))}
                  </div>
                  
                  <div className="text-center pt-4 border-t border-indigo-200">
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-indigo-300">
                        ✨ <strong>{todayArticles.length} articles</strong> published today across all categories
                      </span>
                    </p>
                    <p className="text-xs text-gray-500 italic">
                      Content dynamically scanned from entire site • Auto-updated every 5 minutes
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-2">No articles published in the last 24 hours.</p>
                  <p className="text-sm text-gray-500">Showing recent articles from this week below.</p>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            
            {/* Categories/Sections */}
            <div className="mb-8 bg-gray-50 p-6">
              <h3 className="text-xs font-bold tracking-widest border-b border-gray-300 pb-2 mb-4">
                NEWS CATEGORIES
              </h3>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <Link 
                      href={cat.href}
                      className="flex items-center justify-between text-sm hover:bg-gray-100 p-2 -mx-2 transition-colors"
                    >
                      <span className="font-medium flex items-center gap-2">
                        {cat.name}
                        {cat.new && (
                          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                            NEW
                          </span>
                        )}
                      </span>
                      <span className="text-xs text-gray-400">{cat.count} articles</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest Updates */}
            <div className="mb-8 border border-gray-300">
              <div className="bg-gray-200 px-4 py-2 border-b border-gray-300">
                <h3 className="text-sm font-bold">Latest Updates</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4 text-sm">
                  {allArticles.slice(0, 5).map((article, index) => (
                    <li key={`sidebar-${article.slug}-${index}`} className="flex items-start gap-2">
                      <span 
                        className={`${
                          index === 0 ? 'bg-red-500 animate-pulse' : 
                          index === 1 ? 'bg-red-500' : 
                          'bg-blue-500'
                        } w-2 h-2 rounded-full mt-2 flex-shrink-0`}
                      ></span>
                      <div>
                        <Link href={`/${article.slug}`} className="font-semibold hover:underline">
                          {article.title}
                        </Link>
                        <p className="text-xs text-gray-500">
                          {index === 0 ? 'Just now' : 
                           index === 1 ? '2 hours ago' : 
                           index === 2 ? '4 hours ago' : 
                           '6 hours ago'}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-black text-white p-6 mb-8">
              <h3 className="font-bold mb-3">Stay Informed</h3>
              <p className="text-sm text-gray-300 mb-4">
                Get our latest investigations and breaking news delivered directly to your inbox.
              </p>
              <div className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-3 py-2 text-black text-sm"
                />
                <button className="bg-red-600 text-white py-2 text-sm font-bold hover:bg-red-700 transition-colors">
                  SUBSCRIBE
                </button>
              </div>
            </div>

            {/* About Box */}
            <div className="border border-gray-300 bg-gray-50">
              <div className="bg-gray-200 px-4 py-2 border-b border-gray-300">
                <h3 className="text-sm font-bold">About Our Coverage</h3>
              </div>
              <div className="p-4 text-sm text-gray-700 leading-relaxed">
                <p className="mb-3">
                  <strong>The Object Wire</strong> provides comprehensive news coverage across 
                  technology, business, politics, and investigations with rigorous fact-checking 
                  and source verification.
                </p>
                <p className="mb-3">
                  Every story undergoes editorial review and includes direct source citations 
                  for full transparency.
                </p>
                <div className="border-t border-gray-300 pt-3 mt-3">
                  <Link href="/editorial-standards" className="text-blue-700 hover:underline text-xs">
                    Learn about our editorial standards →
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Editorial Standards */}
      <section className="bg-black text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-xs tracking-wider text-gray-400">SOURCE VERIFIED</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{articlesThisWeek}+</div>
              <div className="text-xs tracking-wider text-gray-400">ARTICLES THIS WEEK</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{categories.length}</div>
              <div className="text-xs tracking-wider text-gray-400">NEWS CATEGORIES</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5MIN</div>
              <div className="text-xs tracking-wider text-gray-400">UPDATE CYCLE</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-gray-400">
              📊 <strong>{totalArticles} total articles</strong> dynamically discovered across all topics
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
