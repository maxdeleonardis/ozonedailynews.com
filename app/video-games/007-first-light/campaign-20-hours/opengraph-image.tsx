import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = '007 First Light Campaign Length | 20 Hours Average Playthrough';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="007 First Light Campaign Length | 20 Hours Average Playthrough"
        category="Gaming"
        author="ObjectWire Editorial"
        publishDate="May 4, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
