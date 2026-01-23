"use client";

import type { Metadata } from 'next';
import Link from "next/link";
import { useState } from "react";

// News Filter Component
function NewsFilter() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All News', count: 24 },
    { id: 'breakthroughs', label: 'Breakthroughs', count: 8 },
    { id: 'companies', label: 'Companies', count: 12 },
    { id: 'research', label: 'Research', count: 6 },
    { id: 'hardware', label: 'Hardware', count: 4 },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeFilter === filter.id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {filter.label} ({filter.count})
        </button>
      ))}
    </div>
  );
}

// Featured Article Component
function FeaturedArticle() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
      <div className="flex items-center gap-2 mb-4">
        <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          Featured
        </span>
        <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full">
          Breaking
        </span>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        D-Wave Qubits Lead Quantum Optimization Revolution
      </h2>
      
      <p className="text-xl text-blue-100 mb-6 max-w-4xl">
        D-Wave's Advantage prototype achieves quantum computational supremacy on real-world problems, 
        solving optimization challenges that would take classical computers millions of years.
      </p>
      
      <div className="flex items-center gap-6 text-sm text-blue-200 mb-6">
        <div className="flex items-center gap-2">
          <span>⚡</span>
          <span>1000x speedup</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🔬</span>
          <span>Peer-reviewed Science</span>
        </div>
        <div className="flex items-center gap-2">
          <span>💼</span>
          <span>NYSE: QBTS</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🎯</span>
          <span>5,000+ qubits</span>
        </div>
      </div>
      
      <Link 
        href="/news/quantum-computing/d-wave-quantum-optimization-breakthrough"
        className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
      >
        Read Full Analysis
        <span>→</span>
      </Link>
    </div>
  );
}

// News Grid Component
function NewsGrid() {
  const articles = [
    {
      title: "D-Wave Quantum Optimization Breakthrough",
      excerpt: "Advantage prototype demonstrates quantum supremacy on real-world optimization problems",
      category: "Companies",
      date: "January 15, 2026",
      author: "ObjectWire Quantum Team",
      readTime: "12 min read",
      featured: true,
      urgent: true,
    },
    {
      title: "IBM Quantum Network Expands to 200+ Members",
      excerpt: "New partnerships drive quantum research across healthcare and finance sectors",
      category: "Companies", 
      date: "January 12, 2026",
      author: "Tech Reporter",
      readTime: "8 min read",
      featured: false,
      urgent: false,
    },
    {
      title: "MIT Quantum Error Correction Milestone",
      excerpt: "Researchers achieve 99.9% fidelity in quantum error correction protocols",
      category: "Research",
      date: "January 10, 2026", 
      author: "Research Team",
      readTime: "10 min read",
      featured: false,
      urgent: false,
    },
    {
      title: "Google's Quantum AI Lab Announces New Chip",
      excerpt: "Sycamore 2.0 processor features 1000+ qubits with improved coherence times",
      category: "Hardware",
      date: "January 8, 2026",
      author: "Hardware Analyst", 
      readTime: "6 min read",
      featured: false,
      urgent: false,
    },
    {
      title: "Quantum Cryptography Standards Updated",
      excerpt: "NIST releases new guidelines for post-quantum cryptographic implementations",
      category: "Research",
      date: "January 5, 2026",
      author: "Security Expert",
      readTime: "9 min read", 
      featured: false,
      urgent: false,
    },
    {
      title: "Microsoft Azure Quantum Platform Growth",
      excerpt: "Cloud quantum services see 300% usage increase in enterprise applications",
      category: "Companies",
      date: "January 3, 2026",
      author: "Cloud Reporter",
      readTime: "7 min read",
      featured: false,
      urgent: false,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article, index) => (
        <article key={index} className={`bg-white rounded-xl border transition-all duration-300 hover:shadow-lg ${
          article.featured ? 'border-blue-200 shadow-md' : 'border-gray-200'
        }`}>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-xs font-bold px-2 py-1 rounded uppercase ${
                article.category === 'Companies' ? 'bg-blue-100 text-blue-800' :
                article.category === 'Research' ? 'bg-green-100 text-green-800' :
                article.category === 'Hardware' ? 'bg-purple-100 text-purple-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {article.category}
              </span>
              {article.urgent && (
                <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded uppercase">
                  Breaking
                </span>
              )}
            </div>
            
            <h3 className="font-bold text-lg text-gray-900 mb-2 leading-tight">
              {article.title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
              <span>{article.date}</span>
              <span>{article.readTime}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">By {article.author}</span>
              <Link 
                href={index === 0 ? "/news/quantum-computing/d-wave-quantum-optimization-breakthrough" : "#"}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function QuantumComputingNewsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-blue-800 via-purple-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <nav className="mb-8">
            <div className="flex items-center gap-2 text-sm text-blue-200">
              <Link href="/" className="hover:text-white">ObjectWire</Link>
              <span>/</span>
              <Link href="/news" className="hover:text-white">News</Link>
              <span>/</span>
              <span className="text-white">Quantum Computing</span>
            </div>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              News Hub
            </span>
            <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
              Updated Daily
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Quantum Computing
            <span className="block text-xl md:text-2xl font-normal text-blue-200 mt-2">
              Latest News, Breakthroughs & Industry Developments
            </span>
          </h1>

          <p className="text-xl text-blue-100 max-w-4xl mb-8">
            Stay at the forefront of quantum computing with comprehensive coverage of breakthrough 
            research, industry developments, and technological advances from D-Wave, IBM, Google, 
            and leading quantum research institutions worldwide.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <span>⚛️</span>
              <span>Quantum Technology</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔬</span>
              <span>Research Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💼</span>
              <span>Industry Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📊</span>
              <span>Market Insights</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        
        {/* Featured Article */}
        <FeaturedArticle />

        {/* News Filter */}
        <NewsFilter />

        {/* News Grid */}
        <NewsGrid />

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Load More Articles
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mt-16 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated on Quantum Computing</h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Get the latest quantum computing breakthroughs, research updates, and industry analysis 
            delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}