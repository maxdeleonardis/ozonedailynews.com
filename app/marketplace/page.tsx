'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MarketsDisplay } from '@/components/marketplace/markets-display';
import { MarketFilters } from '@/components/marketplace/market-filters';
import { motion } from 'framer-motion';
import { GlitchText, PageTransition } from '@/components/animations';

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <PageTransition>
      <main className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-16 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4">
                <Link
                  href="/"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  ← Back to Home
                </Link>
              </div>

              <GlitchText>
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
                  Prediction Markets
                </h1>
              </GlitchText>

              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mb-8">
                Explore real-time prediction markets powered by Polymarket. Track odds, liquidity, and market activity across multiple categories.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Markets</div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">1000+</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Volume</div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">$10M+</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Live Feeds</div>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">5+</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Update Freq</div>
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">30s</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filters */}
            <MarketFilters
              onCategoryChange={setSelectedCategory}
              onSearchChange={setSearchQuery}
            />

            {/* Markets Display */}
            <MarketsDisplay
              category={selectedCategory || undefined}
              limit={24}
              title={selectedCategory ? `${selectedCategory} Markets` : 'All Markets'}
              description={
                searchQuery
                  ? `Search results for "${searchQuery}"`
                  : 'Real-time prediction market data from Polymarket'
              }
              searchQuery={searchQuery || undefined}
            />
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-gray-50 dark:bg-gray-950 py-16 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Real-time Data</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Live market data updates every 30 seconds for accurate odds and liquidity information.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Multiple Categories</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Filter markets by category: Politics, Sports, Crypto, Technology, and more.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Direct Trading</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  One-click access to trade directly on Polymarket from each market card.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Trading?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Explore prediction markets and make informed trades on Polymarket.
            </p>
            <a
              href="https://polymarket.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Visit Polymarket →
            </a>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
