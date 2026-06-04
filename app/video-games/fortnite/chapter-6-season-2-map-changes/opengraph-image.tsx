import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Fortnite Chapter 6 Season 2 Map Changes | All New POIs';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Fortnite Chapter 6 Season 2 Map Changes | All New POIs"
        category="Gaming"
        author="ObjectWire Editorial"
        publishDate="April 29, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
