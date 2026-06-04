import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Pragmata Hits 1 Million Units in 48 Hours | Capcom Breaks the New IP Curse';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Pragmata Hits 1 Million Units in 48 Hours | Capcom Breaks the New IP Curse"
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
