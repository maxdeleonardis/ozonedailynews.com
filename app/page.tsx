'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const getCategoryClass = (category: string) => {
  switch (category.toLowerCase()) {
    case 'technology':
    case 'ai & tech':
      return 'category-tech';
    case 'policy':
      return 'category-policy';
    case 'business':
      return 'category-business';
    case 'analysis':
      return 'category-analysis';
    default:
      return 'bg-slate-100 text-slate-700';
  }
};

export default function Home() {
  const [email, setEmail] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [stats, setStats] = useState({ stories: 0, readers: 0, analysis: 0 });

  useEffect(() => {
    // Animate stats on load
    const interval = setInterval(() => {
      setStats(prev => ({
        stories: prev.stories < 500 ? prev.stories + 25 : 500,
        readers: prev.readers < 100000 ? prev.readers + 5000 : 100000,
        analysis: prev.analysis < 150 ? prev.analysis + 8 : 150
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const allArticles = [
    {
      title: "Alphabet Inc - The History of Google",
      author: "Bennett Freeman",
      date: "November 14, 2025",
      category: "Technology",
      readTime: "8 min",
      excerpt: "From a dorm room startup to a global powerhouse, Google's journey exemplifies innovation and ambition.",
      slug: "alphabet-google-history",
      featured: true
    },
    {
      title: "Comet AI Web Browser vs Atlas by ChatGPT",
      author: "Jack Sterling",
      date: "November 14, 2025",
      category: "AI & Tech",
      readTime: "5 min",
      excerpt: "AI web browsers are reshaping how we surf the internet, blending machine learning with everyday navigation.",
      slug: "comet-ai-browser-vs-atlas"
    },
    {
      title: "Non-Degree Studies at University of Texas Austin 2026",
      author: "Max",
      date: "November 14, 2025",
      category: "Business",
      readTime: "6 min",
      excerpt: "World-class faculty in flexible formats. Whether you're eyeing skill-building certificates or flexible online courses.",
      slug: "ut-austin-non-degree-2026"
    },
    {
      title: "Austin Tech Policy: 2025 Legislative Update",
      author: "Sarah Chen",
      date: "November 13, 2025",
      category: "Policy",
      readTime: "7 min",
      excerpt: "Key legislative changes affecting Austin's growing tech sector. Analysis of new regulations and their market impact.",
      slug: "austin-tech-policy-2025"
    },
    {
      title: "Market Analysis: Austin Real Estate Trends",
      author: "David Ross",
      date: "November 12, 2025",
      category: "Analysis",
      readTime: "9 min",
      excerpt: "Deep dive into Austin's competitive real estate market, investment opportunities, and demographic shifts.",
      slug: "austin-realestate-analysis"
    }
  ];

  const filteredArticles = activeFilter === 'All' 
    ? allArticles 
    : allArticles.filter(a => a.category === activeFilter);

  const categories = ['All', 'Technology', 'AI & Tech', 'Business', 'Policy', 'Analysis'];

  return (
    <main className="bg-slate-50 text-slate-900">
      {/* Hero Section - Sharp & Professional */}
      <section className="section-divider py-32 md:py-40 bg-slate-100">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-900 animate-fade-in-up">
            Objective.Wire
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mb-12 font-light leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Detective Reporting Austin. Real-time intelligence and structured analysis for business, tech, and policy decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Link 
              href="/news"
              className="btn-primary text-center"
            >
              Browse Intelligence →
            </Link>
            <Link 
              href="/about"
              className="btn-secondary text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-white section-divider">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="stat-card">
              <div className="stat-number">{stats.stories.toLocaleString()}+</div>
              <div className="stat-label">Stories Published</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{(stats.readers / 1000).toFixed(0)}K+</div>
              <div className="stat-label">Active Readers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.analysis}</div>
              <div className="stat-label">In-Depth Analysis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 md:py-16">
        <div className="container max-w-5xl">
          {allArticles.filter(a => a.featured).map((article, i) => (
            <div key={i} className="featured-article group cursor-pointer">
              <div className="flex items-center justify-between mb-6">
                <span className={`category-badge ${getCategoryClass(article.category)}`}>
                  Featured: {article.category}
                </span>
                <span className="text-sm text-gray-300">{article.date}</span>
              </div>
              <Link href={`/article/${article.slug}`}>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white group-hover:text-slate-200 transition-colors">
                  {article.title}
                </h2>
              </Link>
              <p className="text-lg text-slate-200 mb-6 leading-relaxed max-w-3xl">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-white border-opacity-20">
                <div>
                  <p className="text-sm font-medium text-slate-300">By {article.author}</p>
                  <p className="text-xs text-slate-400">{article.readTime} read</p>
                </div>
                <span className="text-xl">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 md:py-16">
        <div className="container max-w-5xl">
          <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wide mb-6">Filter by Category</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`btn-filter ${activeFilter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid/List */}
      <section className="section-divider py-12 md:py-16">
        <div className="container max-w-5xl">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Intelligence Feed</h2>
            <div className="h-1 w-16 bg-slate-900 mt-4 rounded-full"></div>
          </div>

          <div className="space-y-6">
            {filteredArticles.filter(a => !a.featured).map((article, i) => (
              <article key={i} className="article-card group">
                <div className="flex items-start justify-between mb-4">
                  <span className={`category-badge ${getCategoryClass(article.category)}`}>
                    {article.category}
                  </span>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime} read</span>
                  </div>
                </div>
                <Link href={`/article/${article.slug}`}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                </Link>
                <div className="text-sm text-slate-600 mb-4 font-medium">
                  By {article.author}
                </div>
                <p className="text-slate-700 leading-relaxed max-w-3xl">
                  {article.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Related Topics Section */}
      <section className="py-16 md:py-24 bg-white section-divider">
        <div className="container max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Trending Topics</h2>
          <div className="h-1 w-16 bg-slate-900 mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Austin Tech Policy', 'AI & Machine Learning', 'Real Estate Markets', 'Startup Ecosystem', 'Market Analysis', 'Business Intelligence'].map((topic, i) => (
              <div key={i} className="article-card text-center py-8">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{topic}</h3>
                <p className="text-sm text-slate-600 mb-4">Latest insights & analysis</p>
                <Link href="/news" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                  Explore →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Standards Section */}
      <section className="section-divider py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Our Standards</h2>
            <div className="h-1 w-16 bg-slate-900 mt-4 rounded-full"></div>
          </div>
          <div className="prose prose-sm max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              At ObjectWire, our editorial process is rooted in accuracy, clarity, and accountability. All published material undergoes rigorous verification to ensure factual integrity and unbiased reporting. We adhere to a standard of source transparency, citation discipline, and contextual relevance across all formats.
            </p>
            <div className="pull-quote">
              "Journalism should be a public service, not a performance art."
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-bold text-slate-900 mb-2">Accuracy First</h4>
                <p className="text-sm text-slate-600">Every fact verified, every source confirmed, every claim substantiated.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-bold text-slate-900 mb-2">Transparency</h4>
                <p className="text-sm text-slate-600">We disclose our methods, sources, and any conflicts of interest.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-bold text-slate-900 mb-2">Accountability</h4>
                <p className="text-sm text-slate-600">We correct errors promptly and take responsibility for our reporting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 md:py-32">
        <div className="container max-w-2xl">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-2">Stay Informed</h2>
            <div className="h-1 w-16 bg-slate-900 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-700 text-lg leading-relaxed">
              Get weekly intelligence delivered to your inbox. Structured analysis for professionals.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-modern flex-1"
            />
            <button 
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-slate-500 mt-4 text-center">
            No spam. Unsubscribe anytime. See our <Link href="/privacy-policy" className="hover:underline font-semibold">privacy policy</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
