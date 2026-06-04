import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Epic Games Implements V-Bucks';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Epic Games Implements V-Bucks"
        category="Gaming"
        author="ObjectWire Editorial"
        publishDate="March 18, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
