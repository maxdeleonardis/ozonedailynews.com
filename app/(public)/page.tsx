import Link from 'next/link';
import type { Metadata } from 'next';

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

export const metadata: Metadata = {
  title: "ObjectWire | Precision Intelligence News Network",
  description: "ObjectWire delivers verified, source-cited intelligence on business, technology, fraud investigations, and policy. Built for professionals who require accuracy over volume.",
  openGraph: {
    title: "ObjectWire | Precision Intelligence News Network",
    description: "Verified, source-cited intelligence for professionals.",
  },
};

const featuredArticle = {
  title: "Feeding Our Future: Inside Minnesota's $250 Million Fraud Scheme",
  excerpt: "A comprehensive investigation into one of the largest pandemic-era fraud cases in U.S. history, involving falsified meal counts, shell companies, and federal indictments.",
  category: "Investigation",
  date: "December 30, 2025",
  slug: "minnesota-feeding-our-future-fraud",
  author: "ObjectWire Investigations"
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-mono text-gray-500 mb-4 tracking-wider">PRECISION INTELLIGENCE</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Verified news.<br />
              <span className="text-gray-400">Source-cited reporting.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              ObjectWire delivers event-driven intelligence constructed as documented claims, supported by primary sources and transparent citations.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/blog"
                className="px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Read Latest
              </Link>
              <Link 
                href="/editorial-standards"
                className="px-6 py-3 border border-gray-300 text-sm font-medium hover:border-black transition-colors"
              >
                Our Standards
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 border-t border-gray-200">
        <div className="container">
          <p className="text-xs font-mono text-gray-400 mb-8 tracking-wider">FEATURED INVESTIGATION</p>
          
          <article className="max-w-3xl">
            <Link href={`/blog/${featuredArticle.slug}`} className="block group">
              <CategoryBadge category={featuredArticle.category} />
              <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-gray-600 transition-colors">
                {featuredArticle.title}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>{featuredArticle.author}</span>
                <span>•</span>
                <time>{featuredArticle.date}</time>
              </div>
            </Link>
          </article>
        </div>
      </section>

      {/* Standards Preview */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-xs font-mono text-gray-400 mb-4 tracking-wider">OUR COMMITMENT</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Editorial Standards</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 bg-white border border-gray-200">
                <h3 className="font-semibold mb-2">Source Verification</h3>
                <p className="text-sm text-gray-500">Every claim traced to primary sources with transparent citations.</p>
              </div>
              <div className="p-5 bg-white border border-gray-200">
                <h3 className="font-semibold mb-2">Factual Accuracy</h3>
                <p className="text-sm text-gray-500">Three-stage editorial review before any publication.</p>
              </div>
              <div className="p-5 bg-white border border-gray-200">
                <h3 className="font-semibold mb-2">Corrections Policy</h3>
                <p className="text-sm text-gray-500">Transparent updates and error corrections when needed.</p>
              </div>
            </div>
            <Link 
              href="/editorial-standards" 
              className="inline-block mt-6 text-sm font-medium text-gray-600 hover:text-black"
            >
              Read full standards →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
