import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Meta 8,000 Layoffs | Applied AI Draft and $145B Silicon Race';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Meta 8,000 Layoffs | Applied AI Draft and $145B Silicon Race"
        category="Meta"
        author="ObjectWire Editorial"
        publishDate="May 15, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
