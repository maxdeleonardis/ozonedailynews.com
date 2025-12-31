import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "News & Investigations",
  description: "Latest verified news, investigations, and analysis from ObjectWire. Source-cited reporting on fraud, business, technology, and policy.",
  openGraph: {
    title: "News & Investigations | ObjectWire",
    description: "Latest verified news and investigations from ObjectWire.",
  },
};

const articles = [
  {
    title: "Feeding Our Future: Inside Minnesota's $250 Million Fraud Scheme",
    excerpt: "A comprehensive investigation into one of the largest pandemic-era fraud cases in U.S. history, involving falsified meal counts, shell companies, and 70 federal indictments.",
    category: "Investigation",
    date: "December 30, 2025",
    slug: "minnesota-feeding-our-future-fraud",
    author: "ObjectWire Investigations"
  }
];

export default function BlogPage() {
  return (
    <div className="py-16 md:py-20">
      <div className="container">
        {/* Header */}
        <header className="mb-12 pb-8 border-b border-gray-200 max-w-3xl">
          <p className="text-xs font-mono text-gray-400 mb-4 tracking-wider">INTELLIGENCE FEED</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">News & Investigations</h1>
          <p className="text-gray-500">Verified reporting with source citations and transparent methodology.</p>
        </header>

        {/* Articles */}
        <div className="max-w-3xl space-y-12">
          {articles.map((article, index) => (
            <article key={index} className="pb-12 border-b border-gray-100">
              <Link href={`/blog/${article.slug}`} className="block group">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-red-50 text-red-700 mb-4">
                  {article.category}
                </span>
                <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-gray-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{article.author}</span>
                  <span>•</span>
                  <time>{article.date}</time>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
