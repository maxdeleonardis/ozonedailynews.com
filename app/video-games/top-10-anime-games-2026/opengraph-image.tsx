import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Top 10 Anime Games of 2026: Best Seasonal Games & Battle Royales';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Top 10 Anime Games of 2026: Best Seasonal Games & Battle Royales"
        category="General"
        author="Austin Web Services"
        publishDate="March 13, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
