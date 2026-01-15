import type { Metadata } from 'next';
import Link from 'next/link';
import { getPublishedBlogPosts } from '@/lib/blog-service';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Iran News Hub - 2026 Iranian Revolution Coverage | ObjectWire",
  description: "Comprehensive coverage of the 2026 Iranian Revolution and current events in Iran. Real-time verified intelligence on political developments, protests, and regional impact.",
  keywords: ["Iran news", "Iranian revolution 2026", "Iran protests", "Iran political crisis", "Middle East news", "Iran current events", "Tehran news"],
  openGraph: {
    title: "Iran News Hub - 2026 Iranian Revolution | ObjectWire",
    description: "Live coverage and analysis of the 2026 Iranian Revolution and ongoing developments in Iran.",
    type: "website",
  },
};

export default async function IranHubPage() {
  // Fetch all published posts and filter for Iran-related content
  const { data: allPosts } = await getPublishedBlogPosts();
  
  const iranPosts = allPosts?.filter(post => 
    post.tags.some(tag => tag.toLowerCase().includes('iran')) ||
    post.category.toLowerCase().includes('iran') ||
    post.title.toLowerCase().includes('iran') ||
    post.slug.includes('iran')
  ).slice(0, 20) || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 border-b border-gray-800">
        <div className="container max-w-6xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-600 flex items-center justify-center rounded">
              <span className="text-2xl">🇮🇷</span>
            </div>
            <span className="text-sm font-mono text-gray-400 tracking-wider">LIVE COVERAGE</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Iran News Hub</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Comprehensive verified intelligence on the 2026 Iranian Revolution, political developments, 
            and regional impact. Real-time updates from primary sources with full citation transparency.
          </p>
        </div>
      </section>

      {/* Key Facts Banner */}
      <section className="bg-red-50 border-b border-red-100 py-6">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-1">Jan 2026</div>
              <div className="text-sm text-gray-600">Ongoing Developments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-1">{iranPosts.length}</div>
              <div className="text-sm text-gray-600">Verified Reports</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-1">Live</div>
              <div className="text-sm text-gray-600">Coverage Status</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Context */}
      <section className="py-12 border-b border-gray-200">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">2026 Iranian Revolution Timeline</h2>
          <div className="space-y-6">
            <div className="flex gap-4 pb-6 border-b border-gray-200">
              <div className="flex-shrink-0 w-32 text-sm font-mono text-gray-500">JAN 2026</div>
              <div>
                <h3 className="font-semibold mb-2">Revolutionary Escalation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Mass demonstrations intensify across major Iranian cities. Protests expand beyond 
                  economic grievances to calls for fundamental political change. Security forces 
                  deployment increases in Tehran, Mashhad, and Isfahan.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 pb-6 border-b border-gray-200">
              <div className="flex-shrink-0 w-32 text-sm font-mono text-gray-500">DEC 2025</div>
              <div>
                <h3 className="font-semibold mb-2">Initial Protests</h3>
                <p className="text-gray-600 leading-relaxed">
                  Economic protests emerge in response to currency devaluation and inflation. 
                  Student-led demonstrations spread to provincial cities. Internet restrictions 
                  implemented intermittently.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-32 text-sm font-mono text-gray-500">NOV 2025</div>
              <div>
                <h3 className="font-semibold mb-2">Pre-Revolution Context</h3>
                <p className="text-gray-600 leading-relaxed">
                  Rising tensions over economic conditions, government policies, and regional 
                  diplomatic isolation. Civil society organizations increase coordination despite 
                  government pressure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16">
        <div className="container max-w-6xl">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold">Latest Iran Coverage</h2>
            <span className="text-sm text-gray-500">{iranPosts.length} verified reports</span>
          </div>

          {iranPosts.length > 0 ? (
            <div className="grid gap-8">
              {iranPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-red-50 text-red-600 text-xs font-semibold rounded-full border border-red-200">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500 font-mono">
                          {new Date(post.published_at || post.created_at).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      
                      <Link href={`/${post.slug}`}>
                        <h3 className="text-2xl font-bold mb-3 hover:text-red-600 transition-colors cursor-pointer">
                          {post.title}
                        </h3>
                      </Link>
                      
                      {post.excerpt && (
                        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                      )}
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>By {post.author}</span>
                        <span>•</span>
                        <span>{post.read_time}</span>
                        {post.tags.length > 0 && (
                          <>
                            <span>•</span>
                            <div className="flex gap-2">
                              {post.tags.slice(0, 3).map(tag => (
                                <span key={tag} className="px-2 py-0.5 bg-gray-100 rounded text-xs">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <Link href={`/${post.slug}`}>
                      <button className="px-6 py-2 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors rounded">
                        Read Report →
                      </button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center">
              <div className="text-5xl mb-4">📰</div>
              <h3 className="text-xl font-semibold mb-2">No Iran Coverage Yet</h3>
              <p className="text-gray-600 mb-6">
                Iran-related articles will appear here as they are published. 
                Check back soon for the latest verified intelligence.
              </p>
              <Link href="/">
                <button className="px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors">
                  Browse All News
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Key Topics */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Key Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="text-xl font-semibold mb-2">Political Developments</h3>
              <p className="text-gray-600 text-sm">
                Government responses, policy changes, and leadership statements regarding 
                the ongoing situation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl font-semibold mb-2">Economic Impact</h3>
              <p className="text-gray-600 text-sm">
                Currency fluctuations, sanctions effects, and economic measures implemented 
                during the crisis period.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Regional Effects</h3>
              <p className="text-gray-600 text-sm">
                International responses, diplomatic developments, and regional security 
                implications of events in Iran.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Notice */}
      <section className="py-12 bg-blue-50 border-y border-blue-100">
        <div className="container max-w-6xl">
          <div className="flex items-start gap-4">
            <div className="text-3xl">✓</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Verification Standards</h3>
              <p className="text-gray-700 leading-relaxed">
                All Iran coverage is verified using primary sources and cross-referenced with 
                multiple independent reports. Claims are documented with full source citations. 
                Updates are made in real-time as new verified information becomes available.
              </p>
              <Link href="/editorial-standards" className="text-blue-600 hover:text-blue-700 font-medium mt-3 inline-block">
                Read our editorial standards →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get real-time updates on Iran developments with verified, source-cited intelligence.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/">
              <button className="px-8 py-4 bg-black text-white font-semibold hover:bg-gray-800 transition-colors rounded">
                View All Coverage
              </button>
            </Link>
            <Link href="/about">
              <button className="px-8 py-4 border-2 border-black text-black font-semibold hover:bg-gray-50 transition-colors rounded">
                About ObjectWire
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
