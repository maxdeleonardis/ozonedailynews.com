import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Forza Horizon 6 | 511K Steam Pre-Sales, $30M Revenue Before Launch';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Forza Horizon 6 | 511K Steam Pre-Sales, $30M Revenue Before Launch"
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
