import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Binance Launches Prediction Markets | On-Chain Probability Trading via Keyless Wallet';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Binance Launches Prediction Markets | On-Chain Probability Trading via Keyless Wallet"
        category="News"
        author="Jack Sterling"
        publishDate="April 18, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
