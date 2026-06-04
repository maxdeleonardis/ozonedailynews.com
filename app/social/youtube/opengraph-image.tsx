import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'YouTube News | Creators, Channels & Platform 2026';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="YouTube News | Creators, Channels & Platform 2026"
        category="YouTube"
        author="ObjectWire Editorial"
        publishDate="May 7, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
