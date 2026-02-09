import Link from 'next/link';
import type { Metadata } from 'next';
import { scanAllContent } from '@/lib/content-scanner';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "ObjectWire | Independent Investigative Journalism & Tech News",
  description: "ObjectWire delivers independent investigative journalism, technology news, finance analysis, and verified reporting. Trusted source for in-depth coverage of business, politics, and innovation.",
  alternates: {
    canonical: 'https://www.objectwire.org',
  },
  openGraph: {
    title: "ObjectWire | Independent Investigative Journalism",
    description: "Independent news source delivering verified investigative journalism and technology coverage.",
    url: 'https://www.objectwire.org',
    siteName: 'ObjectWire',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ObjectWire | Independent Investigative Journalism",
    description: "Independent news source delivering verified investigative journalism and technology coverage.",
  },
};

// Revalidate every 5 minutes to show fresh content
export const revalidate = 300;

export default async function HomePage() {
  // Get latest articles
  const allArticles = await scanAllContent();
  const latestArticles = allArticles.slice(0, 8);
  const featuredArticle = allArticles[0];

  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Masthead - Traditional Newspaper Header */}
      <header className="border-b-4 border-double border-black">
        <div className="container py-8">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs text-gray-600 mb-6 pb-4 border-b border-gray-200">
            <span className="font-mono">{today}</span>
            <span className="font-mono tracking-wider">INDEPENDENT • VERIFIED • SOURCE-CITED</span>
            <span className="font-mono">Est. 2024</span>
          </div>
          
          {/* Main Title */}
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none mb-2">
              OBJECTWIRE
            </h1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-24 bg-black"></div>
              <p className="text-sm font-mono tracking-widest text-gray-600">
                INVESTIGATIVE JOURNALISM
              </p>
              <div className="h-px w-24 bg-black"></div>
            </div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Delivering independent news coverage, investigative reporting, and technology analysis 
              with verified sources and editorial integrity.
            </p>
          </div>
        </div>
      </header>

      <main className="container py-12">
        {/* Featured Story */}
        {featuredArticle && (
          <section className="mb-16 pb-16 border-b-2 border-black">
            <div className="text-center mb-6">
              <span className="inline-block px-4 py-2 bg-black text-white text-xs font-bold tracking-wider">
                FEATURED STORY
              </span>
            </div>
            <article className="max-w-4xl mx-auto">
              <Link href={featuredArticle.slug} className="group">
                <div className="space-y-4">
                  <span className="text-xs font-bold tracking-wider text-red-600 uppercase">
                    {featuredArticle.category}
                  </span>
                  <h2 className="text-4xl md:text-6xl font-black leading-tight group-hover:text-gray-700 transition-colors">
                    {featuredArticle.title}
                  </h2>
                  {featuredArticle.excerpt && (
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                  )}
                  <div className="flex items-center gap-4 text-sm text-gray-600 pt-2">
                    <span className="font-semibold">{featuredArticle.author || 'ObjectWire Team'}</span>
                    <span>•</span>
                    <span>{featuredArticle.date}</span>
                    {featuredArticle.readTime && (
                      <>
                        <span>•</span>
                        <span>{featuredArticle.readTime}</span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            </article>
          </section>
        )}

        {/* Latest News Grid */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black">Latest News</h2>
            <Link 
              href="/news" 
              className="text-sm font-bold hover:underline flex items-center gap-2"
            >
              View All News
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.slice(1, 7).map((article) => (
              <article key={article.slug} className="border-t-2 border-black pt-4">
                <Link href={article.slug} className="group space-y-3 block">
                  <span className="text-xs font-bold tracking-wider text-red-600">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold leading-tight group-hover:text-gray-700 transition-colors line-clamp-3">
                    {article.title}
                  </h3>
                  {article.excerpt && (
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {article.excerpt}
                    </p>
                  )}
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{article.date}</span>
                    {article.readTime && (
                      <>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-16 py-16 bg-gray-50 -mx-4 px-4 md:-mx-8 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black mb-8 text-center">Explore by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: 'News', href: '/news', icon: '📰' },
                { name: 'Finance', href: '/finance', icon: '💰' },
                { name: 'SaaS', href: '/saas/cognyte', icon: '💻' },
                { name: 'Entertainment', href: '/entertainment/netflix', icon: '🎬' },
                { name: 'NGO Investigations', href: '/ngos', icon: '🏛️' },
                { name: 'James Cameron', href: '/entertainment/james-cameron', icon: '�' },
                { name: 'Winter Olympics', href: '/winter-olympics', icon: '⛷️' },
                { name: 'World Cup', href: '/world-cup', icon: '⚽' },
              ].map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="group p-6 border-2 border-black hover:bg-black hover:text-white transition-all text-center"
                >
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <div className="font-bold">{category.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About ObjectWire */}
        <section className="max-w-4xl mx-auto text-center py-16 border-t-2 border-black">
          <h2 className="text-3xl font-black mb-6">About ObjectWire</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              ObjectWire is an independent news organization committed to investigative journalism, 
              verified reporting, and editorial integrity. We cover technology, finance, business, 
              politics, and culture with depth and accuracy.
            </p>
            <p>
              Every article is source-cited, fact-checked, and written by experienced journalists. 
              We believe in transparency, accountability, and serving the public interest.
            </p>
            <div className="flex items-center justify-center gap-6 pt-6">
              <Link href="/about" className="font-bold hover:underline">
                Our Story
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/editorial-standards" className="font-bold hover:underline">
                Editorial Standards
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/team" className="font-bold hover:underline">
                Our Team
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/contact" className="font-bold hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-double border-black mt-16">
        <div className="container py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-black text-lg mb-4">News</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/news" className="hover:underline">Latest News</Link></li>
                <li><Link href="/news/texas" className="hover:underline">Texas</Link></li>
                <li><Link href="/news/canada" className="hover:underline">Canada</Link></li>
                <li><Link href="/investigations" className="hover:underline">Investigations</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-black text-lg mb-4">Technology</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/saas" className="hover:underline">SaaS & Startups</Link></li>
                <li><Link href="/crypto" className="hover:underline">Cryptocurrency</Link></li>
                <li><Link href="/apple" className="hover:underline">Apple</Link></li>
                <li><Link href="/google" className="hover:underline">Google</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-black text-lg mb-4">Business</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/finance" className="hover:underline">Finance</Link></li>
                <li><Link href="/elon-musk" className="hover:underline">Elon Musk</Link></li>
                <li><Link href="/microsoft" className="hover:underline">Microsoft</Link></li>
                <li><Link href="/nvidia" className="hover:underline">Nvidia</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-black text-lg mb-4">About</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="/editorial-standards" className="hover:underline">Editorial Standards</Link></li>
                <li><Link href="/team" className="hover:underline">Our Team</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} ObjectWire. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Independent journalism serving the public interest
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
// commit test
