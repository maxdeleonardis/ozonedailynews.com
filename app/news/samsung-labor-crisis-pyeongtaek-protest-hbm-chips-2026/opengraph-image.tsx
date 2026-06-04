import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Samsung Labor Crisis | 40,000 Workers Protest in Pyeongtaek as AI Chip Supply Hangs in the Balance';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Samsung Labor Crisis | 40,000 Workers Protest in Pyeongtaek as AI Chip Supply Hangs in the Balance"
        category="News"
        author="Jack Wang"
        publishDate="April 23, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
