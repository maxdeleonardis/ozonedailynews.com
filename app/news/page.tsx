import Link from 'next/link';
import type { Metadata } from 'next';
import { getPublishedBlogPosts } from '@/lib/blog-service';
import { scanAllContent, filterByDateRange, groupByCategory, getUrgentArticles } from '@/lib/content-scanner';
import { formatArticleDate, parseDate, compareDescending, getRelativeTime } from '@/lib/date-utils';

export const metadata: Metadata = {
  title: "ObjectWire — News That Matters",
  description: "Independent journalism covering technology, finance, investigations, and world events. Source-verified reporting you can trust.",
  alternates: {
    canonical: 'https://www.objectwire.org/news',
  },
  openGraph: {
    title: "ObjectWire — News That Matters",
    description: "Independent journalism covering technology, finance, investigations, and world events.",
    type: 'website',
  },
};

export const revalidate = 300;

function formatArticleDateDisplay(article: any) {
  const wasUpdated = article.updatedAt && 
    (new Date(article.updatedAt).getTime() - new Date(article.publishedAt).getTime() > 3600000);
  
  if (wasUpdated) {
    return {
      display: `Updated ${article.date}`,
      relative: getRelativeTime(article.updatedAt),
      isUpdated: true,
    };
  }
  
  return {
    display: article.date,
    relative: getRelativeTime(article.publishedAt),
    isUpdated: false,
  };
}

export default async function NewsPage() {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const filesystemArticles = await scanAllContent();
  const databaseArticles: any[] = [];
  const allArticles = [...filesystemArticles, ...databaseArticles];
  
  allArticles.sort((a, b) => {
    const dateA = (a as any).updatedAt && (a as any).updatedAt > (a as any).publishedAt ? (a as any).updatedAt : (a as any).publishedAt || a.publishDate;
    const dateB = (b as any).updatedAt && (b as any).updatedAt > (b as any).publishedAt ? (b as any).updatedAt : (b as any).publishedAt || b.publishDate;
    return compareDescending(dateA, dateB);
  });

  const todayArticles = filterByDateRange(allArticles, 1);
  const thisWeekArticles = filterByDateRange(allArticles, 7);
  const urgentArticles = getUrgentArticles(allArticles);
  const categorizedArticles = groupByCategory(allArticles);

  const categories = Object.keys(categorizedArticles).map(cat => ({
    name: cat.charAt(0) + cat.slice(1).toLowerCase().replace(/_/g, ' '),
    href: `/news?category=${cat.toLowerCase()}`,
    count: categorizedArticles[cat].length,
    new: categorizedArticles[cat].some(a => {
      const checkDate = (a.updatedAt && a.publishedAt && a.updatedAt > a.publishedAt) ? a.updatedAt : (a.publishedAt || new Date(a.publishDate));
      return checkDate.getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000;
    }),
  })).sort((a, b) => b.count - a.count);

  const featuredStories = allArticles.slice(0, 5);
  const latestStories = allArticles.slice(0, 20);
  const technologyNews = categorizedArticles['TECHNOLOGY']?.slice(0, 4) || [];
  const businessNews = categorizedArticles['BUSINESS']?.slice(0, 4) || categorizedArticles['FINANCE']?.slice(0, 4) || [];
  const investigationsNews = categorizedArticles['INVESTIGATION']?.slice(0, 4) || categorizedArticles['FRAUD']?.slice(0, 4) || [];

  const totalArticles = allArticles.length;
  const articlesThisWeek = thisWeekArticles.length;

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ─── BREAKING TICKER (only if urgent news) ─── */}
      {(urgentArticles.length > 0 || todayArticles.length > 0) && (
        <div className="bg-blue-600 text-white py-2.5 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4">
              <span className="bg-white text-blue-700 text-xs font-bold px-3 py-1 rounded shrink-0">
                LATEST
              </span>
              <div className="overflow-hidden flex-1">
                <p className="text-sm font-medium whitespace-nowrap animate-marquee">
                  {urgentArticles.length > 0 
                    ? urgentArticles.map(article => article.title).join('  ◆  ')
                    : todayArticles.slice(0, 6).map(article => article.title).join('  ◆  ')
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── MAIN CONTENT ─── */}
      <main className="max-w-6xl mx-auto px-6 py-10">

        {/* ─── LEAD STORY ─── */}
        {featuredStories.length > 0 && (
          <section className="mb-14" id="latest">
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <Link href={`/${featuredStories[0].slug}`} className="group block">
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {featuredStories[0].category}
                    </span>
                    {featuredStories[0].urgent && (
                      <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                        BREAKING
                      </span>
                    )}
                    {formatArticleDateDisplay(featuredStories[0]).isUpdated && (
                      <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
                        UPDATED
                      </span>
                    )}
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-black leading-[1.1] mb-6 text-slate-900 group-hover:text-blue-700 transition-colors">
                    {featuredStories[0].title}
                  </h2>
                  
                  <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl">
                    {featuredStories[0].excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-700 font-bold text-xs">
                          {featuredStories[0].author?.split(' ').map((n: string) => n[0]).join('') || 'OW'}
                        </span>
                      </div>
                      <span className="font-semibold text-slate-800">{featuredStories[0].author}</span>
                    </div>
                    <span className="text-slate-300">|</span>
                    <time className="text-slate-500">{formatArticleDateDisplay(featuredStories[0]).display}</time>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-500">{featuredStories[0].readTime}</span>
                    <span className="ml-auto text-blue-600 font-semibold group-hover:underline hidden sm:inline">
                      Read full story →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          </section>
        )}

        {/* ─── SECONDARY STORIES GRID ─── */}
        {featuredStories.length > 1 && (
          <section className="mb-14">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {featuredStories.slice(1, 5).map((story) => {
                const dateInfo = formatArticleDateDisplay(story);
                return (
                  <article key={story.slug} className="bg-white rounded-xl border border-slate-200 hover:shadow-md hover:border-blue-200 transition-all overflow-hidden">
                    <Link href={`/${story.slug}`} className="group block p-6">
                      <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">
                        {story.category}
                      </span>
                      <h3 className="text-lg font-bold mt-2 mb-3 leading-snug text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-3">
                        {story.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                        {story.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="font-medium text-slate-600">{story.author}</span>
                        <span>·</span>
                        <time>{dateInfo.relative}</time>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* ─── NEWSLETTER CTA (primary — this is the Beehiiv landing focus) ─── */}
        <section className="mb-14">
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Free Newsletter
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                Stay ahead of the story.
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Join thousands of readers who get our top stories, investigations, and analysis delivered to their inbox every morning. No spam, unsubscribe anytime.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="you@email.com"
                  className="flex-1 px-5 py-3.5 rounded-xl text-slate-900 text-base placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="bg-slate-900 hover:bg-black text-white px-8 py-3.5 rounded-xl font-bold text-base transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              
              <p className="text-blue-200/70 text-xs mt-4">
                Trusted by readers who care about verified, independent journalism.
              </p>
            </div>
          </div>
        </section>

        {/* ─── LATEST STORIES FEED ─── */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-black text-slate-900">Latest Stories</h2>
              <p className="text-slate-500 text-sm mt-1">{totalArticles} articles across {categories.length} topics</p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Updated every 5 min
            </div>
          </div>

          <div className="space-y-0">
            {latestStories.map((article, index) => {
              const dateInfo = formatArticleDateDisplay(article);
              return (
                <article 
                  key={`${article.slug}-${index}`} 
                  className={`group ${index > 0 ? 'border-t border-slate-200' : ''}`}
                >
                  <Link href={`/${article.slug}`} className="flex items-start gap-5 py-5 hover:bg-white rounded-lg px-4 -mx-4 transition-colors">
                    {/* Number */}
                    <span className="text-3xl font-black text-slate-200 group-hover:text-blue-200 transition-colors tabular-nums leading-none pt-1 hidden sm:block w-10 shrink-0 text-right">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">{article.category}</span>
                        {article.urgent && (
                          <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full">BREAKING</span>
                        )}
                        {dateInfo.isUpdated && (
                          <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-0.5 rounded-full">UPDATED</span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug mb-1.5">
                        {article.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="font-medium text-slate-600">{article.author}</span>
                        <span>·</span>
                        <time>{dateInfo.relative}</time>
                        <span>·</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <span className="text-slate-300 group-hover:text-blue-500 transition-colors pt-2 hidden md:block">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        {/* ─── TOPIC SECTIONS (2-col layout) ─── */}
        <div className="grid lg:grid-cols-2 gap-8 mb-14" id="technology">
          
          {/* Technology */}
          <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden" id="tech-section">
            <div className="bg-blue-600 px-6 py-4 flex items-center justify-between">
              <h2 className="text-white font-bold flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Technology
              </h2>
              <Link href="/technology" className="text-blue-200 text-xs hover:text-white transition-colors">See all →</Link>
            </div>
            <div className="divide-y divide-slate-100">
              {technologyNews.map((story, index) => {
                const dateInfo = formatArticleDateDisplay(story);
                return (
                  <Link key={story.slug} href={`/${story.slug}`} className="group block px-6 py-4 hover:bg-blue-50/50 transition-colors">
                    <h3 className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug mb-1 line-clamp-2">
                      {story.title}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-1 mb-1">{story.excerpt}</p>
                    <span className="text-xs text-slate-400">{story.author} · {dateInfo.relative}</span>
                  </Link>
                );
              })}
              {technologyNews.length === 0 && (
                <div className="px-6 py-8 text-center text-sm text-slate-400">No technology stories right now.</div>
              )}
            </div>
          </section>

          {/* Finance */}
          <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden" id="finance">
            <div className="bg-emerald-600 px-6 py-4 flex items-center justify-between">
              <h2 className="text-white font-bold flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Finance &amp; Business
              </h2>
              <Link href="/finance" className="text-emerald-200 text-xs hover:text-white transition-colors">See all →</Link>
            </div>
            <div className="divide-y divide-slate-100">
              {businessNews.map((story, index) => {
                const dateInfo = formatArticleDateDisplay(story);
                return (
                  <Link key={story.slug} href={`/${story.slug}`} className="group block px-6 py-4 hover:bg-emerald-50/50 transition-colors">
                    <h3 className="font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug mb-1 line-clamp-2">
                      {story.title}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-1 mb-1">{story.excerpt}</p>
                    <span className="text-xs text-slate-400">{story.author} · {dateInfo.relative}</span>
                  </Link>
                );
              })}
              {businessNews.length === 0 && (
                <div className="px-6 py-8 text-center text-sm text-slate-400">No finance stories right now.</div>
              )}
            </div>
          </section>
        </div>

        {/* Investigations full-width */}
        {investigationsNews.length > 0 && (
          <section className="mb-14" id="investigations">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className="bg-orange-600 px-6 py-4 flex items-center justify-between">
                <h2 className="text-white font-bold flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Investigations &amp; Special Reports
                </h2>
                <Link href="/investigations/minesoda" className="text-orange-200 text-xs hover:text-white transition-colors">See all →</Link>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                {investigationsNews.map((story, index) => {
                  const dateInfo = formatArticleDateDisplay(story);
                  return (
                    <Link key={`${story.slug}-${index}`} href={`/${story.slug}`} className="group block px-6 py-5 hover:bg-orange-50/50 transition-colors">
                      <h3 className="font-semibold text-slate-900 group-hover:text-orange-700 transition-colors leading-snug mb-2">
                        {story.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-2">{story.excerpt}</p>
                      <span className="text-xs text-slate-400">{story.author} · {dateInfo.relative} · {story.readTime}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ─── SECOND NEWSLETTER CTA (bottom of page) ─── */}
        <section className="mb-14">
          <div className="bg-white rounded-2xl border-2 border-blue-200 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-black text-slate-900 mb-2">Never miss a story.</h2>
              <p className="text-slate-500 leading-relaxed">
                Get the most important news from ObjectWire delivered to your inbox. Free, brief, and always verified.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <input 
                type="email" 
                placeholder="you@email.com"
                className="px-5 py-3 rounded-xl text-base bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-base transition-colors whitespace-nowrap">
                Subscribe Free
              </button>
            </div>
          </div>
        </section>

        {/* ─── CATEGORY BROWSE (Archive) ─── */}
        <section className="mb-14" id="archive">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-black text-slate-900">Browse by Topic</h2>
              <p className="text-slate-500 text-sm mt-1">Explore our full archive of {totalArticles} articles.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link 
                key={cat.name}
                href={cat.href}
                className="group bg-white rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-sm transition-all flex items-center justify-between"
              >
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors flex items-center gap-2">
                    {cat.name}
                    {cat.new && (
                      <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">NEW</span>
                    )}
                  </h3>
                  <p className="text-sm text-slate-400 mt-0.5">{cat.count} articles</p>
                </div>
                <svg className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </section>

        {/* ─── FULL ARTICLE ARCHIVE ─── */}
        <section className="mb-14">
          <details className="group">
            <summary className="cursor-pointer flex items-center justify-between bg-white rounded-xl border border-slate-200 px-6 py-4 hover:border-blue-300 transition-colors">
              <span className="font-bold text-slate-900">Complete Article Archive — All {totalArticles} Stories</span>
              <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {Object.entries(categorizedArticles)
                .sort(([,a], [,b]) => b.length - a.length)
                .map(([category, articles]) => (
                  <div key={category} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <div className="bg-blue-900 text-white px-5 py-3 flex items-center justify-between">
                      <h3 className="text-sm font-bold tracking-wider">{category}</h3>
                      <span className="text-xs bg-white/20 px-2.5 py-0.5 rounded-full">{articles.length}</span>
                    </div>
                    <ul className="divide-y divide-slate-100">
                      {articles.slice(0, 5).map((article, idx) => (
                        <li key={`${article.slug}-${idx}`}>
                          <Link 
                            href={`/${article.slug}`} 
                            className="block px-5 py-3 hover:bg-blue-50/50 transition-colors"
                          >
                            <h4 className="text-sm font-semibold leading-snug line-clamp-2 text-slate-800 hover:text-blue-700">
                              {article.title}
                            </h4>
                            <p className="text-xs text-slate-400 mt-1">{article.date}</p>
                          </Link>
                        </li>
                      ))}
                      {articles.length > 5 && (
                        <li className="px-5 py-3 text-center">
                          <span className="text-xs text-blue-500 font-medium">
                            +{articles.length - 5} more articles
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                ))}
            </div>
          </details>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-blue-950 text-white">
        {/* Stats bar */}
        <div className="border-b border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-black">100%</div>
                <div className="text-xs tracking-wider text-blue-300 mt-1">SOURCE VERIFIED</div>
              </div>
              <div>
                <div className="text-3xl font-black">{articlesThisWeek}+</div>
                <div className="text-xs tracking-wider text-blue-300 mt-1">ARTICLES THIS WEEK</div>
              </div>
              <div>
                <div className="text-3xl font-black">{categories.length}</div>
                <div className="text-xs tracking-wider text-blue-300 mt-1">NEWS TOPICS</div>
              </div>
              <div>
                <div className="text-3xl font-black">{totalArticles}</div>
                <div className="text-xs tracking-wider text-blue-300 mt-1">TOTAL ARTICLES</div>
              </div>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <h3 className="font-bold mb-3 text-white">ObjectWire</h3>
              <p className="text-blue-300 leading-relaxed text-sm">
                Independent, source-verified journalism you can trust.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-blue-200">Sections</h3>
              <ul className="space-y-2 text-blue-300">
                <li><Link href="/technology" className="hover:text-white transition-colors">Technology</Link></li>
                <li><Link href="/finance" className="hover:text-white transition-colors">Finance</Link></li>
                <li><Link href="/winter-olympics" className="hover:text-white transition-colors">Olympics</Link></li>
                <li><Link href="/entertainment" className="hover:text-white transition-colors">Entertainment</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-blue-200">More</h3>
              <ul className="space-y-2 text-blue-300">
                <li><Link href="/investigations/minesoda" className="hover:text-white transition-colors">Investigations</Link></li>
                <li><Link href="/disney" className="hover:text-white transition-colors">Disney</Link></li>
                <li><Link href="/news/world" className="hover:text-white transition-colors">World News</Link></li>
                <li><Link href="/news/texas" className="hover:text-white transition-colors">Texas</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-blue-200">About</h3>
              <ul className="space-y-2 text-blue-300">
                <li><Link href="/editorial-standards" className="hover:text-white transition-colors">Editorial Standards</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/rss.xml" className="hover:text-white transition-colors">RSS Feed</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-blue-400">
            <p>&copy; {new Date().getFullYear()} ObjectWire. Independent journalism, always.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
