"use client";

import Link from "next/link";
import { useState } from "react";

interface TechArticle {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags?: string[];
}

export default function TechNewsFeed() {
  const [articles] = useState<TechArticle[]>([
    {
      title: "Claude Sonnet 4.5: Benchmarks reveal 24% gain in reasoning capabilities",
      slug: "claude-sonnet-4-5-release",
      category: "Intelligence",
      excerpt: "Anthropic's latest model demonstrates significant improvements in complex problem solving and code generation, challenging current state-of-the-art benchmarks.",
      date: "FEB 01",
      readTime: "5 MIN",
      tags: ["AI", "Anthropic"],
    },
    {
      title: "GitHub Copilot Workspace redefines the developer environment",
      slug: "github-verse-copilot",
      category: "Software",
      excerpt: "The shift from autocomplete to full-context awareness marks the beginning of the agentic development era.",
      date: "JAN 31",
      readTime: "7 MIN",
      tags: ["DevTools", "Microsoft"],
    },
    {
      title: "Institutional adoption drives Bitcoin past $95k resistance levels",
      slug: "bitcoin-institutional",
      category: "Infrastructure",
      excerpt: "Major treasury acquisitions signal a shift in corporate asset allocation strategies despite regulatory headwinds.",
      date: "JAN 30",
      readTime: "4 MIN",
      tags: ["Crypto", "Finance"],
    },
    {
      title: "D-Wave announces breakthrough in quantum annealing optimization",
      slug: "quantum-optimization",
      category: "Physics",
      excerpt: "New error-correction techniques pave the way for commercial viability in logistics and supply chain modeling.",
      date: "JAN 29",
      readTime: "6 MIN",
      tags: ["Quantum", "Hardware"],
    },
  ]);

  return (
    <div className="space-y-16">
      {/* Featured / Lead Story */}
      {articles[0] && (
        <article className="group">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-blue-600">
              {articles[0].category}
            </span>
            <span className="w-8 h-px bg-gray-200"></span>
            <span className="font-mono text-[10px] text-gray-400">
              {articles[0].date}
            </span>
          </div>
          <Link href={`/${articles[0].slug}`} className="block">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-gray-900 group-hover:text-gray-600 transition-colors mb-6">
              {articles[0].title}
            </h2>
          </Link>
          <p className="font-sans text-lg text-gray-500 leading-relaxed max-w-2xl">
            {articles[0].excerpt}
          </p>
        </article>
      )}

      {/* Divider */}
      <hr className="border-gray-100" />

      {/* Secondary Articles List */}
      <div className="space-y-12">
        {articles.slice(1).map((article) => (
          <article key={article.slug} className="group grid md:grid-cols-4 gap-4 items-baseline">
            <div className="md:col-span-1 hidden md:block">
              <span className="font-mono text-[10px] text-gray-400 block mb-1">
                {article.date}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-black">
                {article.category}
              </span>
            </div>
            
            <div className="md:col-span-3">
              <Link href={`/${article.slug}`} className="block">
                <h3 className="font-serif text-2xl md:text-3xl text-gray-900 leading-tight group-hover:text-blue-600 transition-colors mb-3">
                  {article.title}
                </h3>
              </Link>
              <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-xl">
                {article.excerpt}
              </p>
              
              {/* Mobile Meta */}
              <div className="mt-3 md:hidden flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-black">
                  {article.category}
                </span>
                <span className="text-gray-300">•</span>
                <span className="font-mono text-[10px] text-gray-400">
                  {article.date}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
