'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <main className="bg-white text-black">
      {/* Hero Section - Minimal and Clean */}
      <section className="border-b border-black py-32 px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Objective.Wire
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mb-12 font-light">
            Detective Reporting Austin. Real-time intelligence and structured analysis for business, tech, and policy decisions.
          </p>
          <Link 
            href="/news"
            className="inline-block px-8 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition"
          >
            Browse Intelligence →
          </Link>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-24 px-6 md:px-12 border-b border-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-16">Latest Intelligence</h2>

          <div className="space-y-12">
            {[
              {
                title: "Alphabet Inc - The History of Google",
                author: "Bennett Freeman",
                date: "November 14, 2025",
                excerpt: "From a dorm room startup to a global powerhouse, Google's journey exemplifies innovation and ambition.",
                slug: "alphabet-google-history"
              },
              {
                title: "Comet AI Web Browser vs Atlas by ChatGPT",
                author: "Jack Sterling",
                date: "November 14, 2025",
                excerpt: "AI web browsers are reshaping how we surf the internet, blending machine learning with everyday navigation.",
                slug: "comet-ai-browser-vs-atlas"
              },
              {
                title: "Non-Degree Studies at University of Texas Austin 2026",
                author: "Max",
                date: "November 14, 2025",
                excerpt: "World-class faculty in flexible formats. Whether you're eyeing skill-building certificates or flexible online courses.",
                slug: "ut-austin-non-degree-2026"
              }
            ].map((article, i) => (
              <article key={i} className="border-b border-gray-300 pb-12 last:border-0">
                <Link href={`/article/${article.slug}`}>
                  <h3 className="text-2xl font-bold mb-3 hover:underline cursor-pointer">
                    {article.title}
                  </h3>
                </Link>
                <div className="text-sm text-gray-600 mb-4">
                  By {article.author} • {article.date}
                </div>
                <p className="text-gray-700 leading-relaxed max-w-2xl">
                  {article.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Standards Section */}
      <section className="py-24 px-6 md:px-12 border-b border-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8">Editorial Standards</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            At ObjectWire, our editorial process is rooted in accuracy, clarity, and accountability. All published material undergoes rigorous verification to ensure factual integrity and unbiased reporting. We adhere to a standard of source transparency, citation discipline, and contextual relevance across all formats.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-gray-700 mb-8">
            Get the latest intelligence delivered to your inbox. Structured analysis for professionals.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 border border-black focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-gray-500"
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
