// Polymarket API integration
const POLYMARKET_API_BASE = 'https://clob.polymarket.com';

export interface PolymarketMarket {
  id: string;
  question: string;
  description: string;
  endDate: string;
  imageUrl: string;
  liquidity: number;
  volume: number;
  volume24h: number;
  outcomes: PolymarketOutcome[];
  active: boolean;
  createdAt: string;
  category: string;
}

export interface PolymarketOutcome {
  name: string;
  probability: number;
  price: number;
}

export interface PolymarketMarketResponse {
  id: string;
  question: string;
  description: string;
  end_date_iso: string;
  image_url: string;
  liquidity: number;
  volume: number;
  volume_24h: number;
  outcomes: string[];
  active: boolean;
  created_at: string;
  category: string;
  tokens: PolymarketToken[];
}

export interface PolymarketToken {
  token_id: string;
  outcome: string;
  price: number;
}

/**
 * Fetch trending markets from Polymarket
 * Returns the top markets by volume/liquidity
 */
export async function getTrendingMarkets(limit: number = 5): Promise<PolymarketMarket[]> {
  try {
    const response = await fetch(`${POLYMARKET_API_BASE}/markets?limit=${limit}&sort=volume_24h&order=desc`);
    
    if (!response.ok) {
      throw new Error(`Polymarket API error: ${response.status}`);
    }
    
    const data = await response.json();
    const markets = Array.isArray(data) ? data : (data?.data || data?.markets || []);
    return transformMarkets(markets);
  } catch (error) {
    console.error('Failed to fetch trending markets:', error);
    return [];
  }
}

/**
 * Fetch markets by category
 */
export async function getMarketsByCategory(category: string, limit: number = 5): Promise<PolymarketMarket[]> {
  try {
    const response = await fetch(
      `${POLYMARKET_API_BASE}/markets?category=${encodeURIComponent(category)}&limit=${limit}&sort=volume_24h&order=desc`
    );
    
    if (!response.ok) {
      throw new Error(`Polymarket API error: ${response.status}`);
    }
    
    const data = await response.json();
    const markets = Array.isArray(data) ? data : (data?.data || data?.markets || []);
    return transformMarkets(markets);
  } catch (error) {
    console.error(`Failed to fetch ${category} markets:`, error);
    return [];
  }
}

/**
 * Search markets by query string
 */
export async function searchMarkets(query: string, limit: number = 5): Promise<PolymarketMarket[]> {
  try {
    const response = await fetch(
      `${POLYMARKET_API_BASE}/markets?search=${encodeURIComponent(query)}&limit=${limit}`
    );
    
    if (!response.ok) {
      throw new Error(`Polymarket API error: ${response.status}`);
    }
    
    const data = await response.json();
    const markets = Array.isArray(data) ? data : (data?.data || data?.markets || []);
    return transformMarkets(markets);
  } catch (error) {
    console.error('Failed to search markets:', error);
    return [];
  }
}

/**
 * Fetch a specific market by ID
 */
export async function getMarketById(marketId: string): Promise<PolymarketMarket | null> {
  try {
    const response = await fetch(`${POLYMARKET_API_BASE}/markets/${marketId}`);
    
    if (!response.ok) {
      throw new Error(`Polymarket API error: ${response.status}`);
    }
    
    const data = await response.json();
    const transformed = transformMarkets([data]);
    return transformed[0] || null;
  } catch (error) {
    console.error('Failed to fetch market:', error);
    return null;
  }
}

/**
 * Get market prices/odds
 */
export async function getMarketPrices(marketId: string): Promise<PolymarketToken[]> {
  try {
    const response = await fetch(`${POLYMARKET_API_BASE}/markets/${marketId}/prices`);
    
    if (!response.ok) {
      throw new Error(`Polymarket API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch market prices:', error);
    return [];
  }
}

/**
 * Get market order book
 */
export async function getMarketOrderBook(marketId: string): Promise<any> {
  try {
    const response = await fetch(`${POLYMARKET_API_BASE}/markets/${marketId}/orderbook`);
    
    if (!response.ok) {
      throw new Error(`Polymarket API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch market order book:', error);
    return null;
  }
}

/**
 * Transform Polymarket API response to internal format
 */
function transformMarkets(apiMarkets: any[]): PolymarketMarket[] {
  if (!Array.isArray(apiMarkets)) {
    console.warn('transformMarkets received non-array input:', apiMarkets);
    return [];
  }

  return apiMarkets
    .filter(market => market && market.id)
    .map(market => {
      const outcomes: PolymarketOutcome[] = (market.tokens || [])
        .map((token: any) => ({
          name: token.outcome || token.name || 'Unknown',
          probability: Math.min(Math.max(token.price * 100, 0), 100),
          price: token.price || 0,
        }))
        .sort((a: PolymarketOutcome, b: PolymarketOutcome) => b.probability - a.probability);

      return {
        id: market.id,
        question: market.question || 'Unknown Market',
        description: market.description || '',
        endDate: market.end_date_iso || market.endDate || new Date().toISOString(),
        imageUrl: market.image_url || market.imageUrl || '',
        liquidity: market.liquidity || 0,
        volume: market.volume || 0,
        volume24h: market.volume_24h || market.volume24h || 0,
        outcomes,
        active: market.active !== false,
        createdAt: market.created_at || market.createdAt || new Date().toISOString(),
        category: market.category || 'General',
      };
    });
}

/**
 * Format large numbers for display
 */
export function formatVolume(volume: number): string {
  if (volume >= 1_000_000) {
    return `$${(volume / 1_000_000).toFixed(1)}M`;
  } else if (volume >= 1_000) {
    return `$${(volume / 1_000).toFixed(1)}K`;
  }
  return `$${volume.toFixed(0)}`;
}

/**
 * Calculate time remaining until market ends
 */
export function getTimeRemaining(endDate: string): string {
  try {
    const end = new Date(endDate);
    const now = new Date();
    const diff = end.getTime() - now.getTime();

    if (diff <= 0) return 'Closed';

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);

    if (days > 0) return `${days}d ${hours}h`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  } catch {
    return 'Unknown';
  }
}
