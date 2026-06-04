import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Windrose Hits 222K Concurrent Players | 2026\'s First Viral Indie Breakout';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Windrose Hits 222K Concurrent Players | 2026\'s First Viral Indie Breakout"
        category="Gaming"
        author="ObjectWire Gaming Desk"
        publishDate="April 21, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
