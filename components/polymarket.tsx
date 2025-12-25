'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  getTrendingMarkets,
  getMarketsByCategory,
  formatVolume,
  getTimeRemaining,
  type PolymarketMarket,
} from '@/lib/polymarket';
import { AnimatedCard, GlitchText, StaggerContainer, StaggerItem, TypewriterText } from './animations';

interface PolymarketDisplayProps {
  category?: string;
  limit?: number;
  title?: string;
  description?: string;
}

export function PolymarketMarkets({
  category,
  limit = 5,
  title = 'LIVE PREDICTION MARKETS',
  description = 'Real-time odds from Polymarket prediction markets.',
}: PolymarketDisplayProps) {
  const [markets, setMarkets] = useState<PolymarketMarket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMarket, setSelectedMarket] = useState<PolymarketMarket | null>(null);

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = category
          ? await getMarketsByCategory(category, limit)
          : await getTrendingMarkets(limit);
        setMarkets(data);
      } catch (err) {
        setError('Failed to fetch markets');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMarkets();
    // Refresh every 30 seconds
    const interval = setInterval(fetchMarkets, 30000);
    return () => clearInterval(interval);
  }, [category, limit]);

  if (loading && markets.length === 0) {
    return (
      <div className="text-center py-12">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block"
        >
          <div className="w-8 h-8 border-2 border-gray-300 dark:border-gray-700 border-t-blue-500 rounded-full"></div>
        </motion.div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">Loading prediction markets...</p>
      </div>
    );
  }

  if (error && markets.length === 0) {
    return (
      <div className="text-center py-12 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-900">
        <p className="text-red-600 dark:text-red-400 font-semibold">⚠ {error}</p>
        <p className="text-sm text-red-500 dark:text-red-400 mt-2">
          Unable to connect to Polymarket API. Please try again later.
        </p>
      </div>
    );
  }

  if (markets.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">No markets available</p>
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <GlitchText>
            <h2 className="text-3xl font-semibold mb-6">{title}</h2>
          </GlitchText>
          <TypewriterText
            text={description}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto block"
          />
        </div>

        {/* Markets Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {markets.map((market, index) => (
            <StaggerItem key={market.id}>
              <AnimatedCard delay={index * 0.1}>
                <motion.div
                  onClick={() => setSelectedMarket(market)}
                  className="cursor-pointer border border-gray-200 dark:border-gray-800 p-6 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 bg-white dark:bg-gray-900 rounded-lg hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Market Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {market.question}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {market.category}
                        </p>
                      </div>
                      <motion.div
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full"
                        animate={{ opacity: [0.7, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <span className="text-xs font-bold text-blue-700 dark:text-blue-300">
                          LIVE
                        </span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="space-y-3 mb-4">
                    {market.outcomes.slice(0, 2).map((outcome, idx) => (
                      <motion.div
                        key={idx}
                        className="relative"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{outcome.name}</span>
                          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                            {outcome.probability.toFixed(1)}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${outcome.probability}%` }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Market Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Volume 24h</p>
                      <p className="text-sm font-bold text-green-600 dark:text-green-400">
                        {formatVolume(market.volume24h)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Liquidity</p>
                      <p className="text-sm font-bold text-purple-600 dark:text-purple-400">
                        {formatVolume(market.liquidity)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Closes In</p>
                      <p className="text-sm font-bold text-orange-600 dark:text-orange-400">
                        {getTimeRemaining(market.endDate)}
                      </p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <a
                    href={`https://polymarket.com/market/${market.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-all duration-300 transform hover:scale-105"
                    onClick={(e) => e.stopPropagation()}
                  >
                    TRADE ON POLYMARKET
                    <span className="ml-2">→</span>
                  </a>
                </motion.div>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Detailed Market View Modal */}
        {selectedMarket && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedMarket(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto border border-gray-200 dark:border-gray-800"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{selectedMarket.question}</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {selectedMarket.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedMarket(null)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    ✕
                  </button>
                </div>

                {/* All Outcomes */}
                <div className="space-y-4 mb-6">
                  <h3 className="text-lg font-semibold mb-4">All Outcomes</h3>
                  {selectedMarket.outcomes.map((outcome, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{outcome.name}</span>
                        <span className="font-bold text-lg text-blue-600 dark:text-blue-400">
                          {outcome.probability.toFixed(2)}%
                        </span>
                      </div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
                          initial={{ width: 0 }}
                          animate={{ width: `${outcome.probability}%` }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Total Volume</p>
                    <p className="text-lg font-bold">{formatVolume(selectedMarket.volume)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">24h Volume</p>
                    <p className="text-lg font-bold">{formatVolume(selectedMarket.volume24h)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Liquidity</p>
                    <p className="text-lg font-bold">{formatVolume(selectedMarket.liquidity)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Status</p>
                    <p className="text-lg font-bold">
                      {selectedMarket.active ? (
                        <span className="text-green-600">Active</span>
                      ) : (
                        <span className="text-red-600">Closed</span>
                      )}
                    </p>
                  </div>
                </div>

                <a
                  href={`https://polymarket.com/market/${selectedMarket.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-center transition-all duration-300"
                >
                  TRADE ON POLYMARKET
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Live Indicator */}
        <div className="text-center">
          <motion.div
            className="inline-flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
            animate={{ opacity: [0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span>Data updates every 30 seconds</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
