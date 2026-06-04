import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'GTA 6 | Take-Two Shakes Up AI Team Despite CEO\'s Hundreds of Pilots Pledge';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="GTA 6 | Take-Two Shakes Up AI Team Despite CEO\'s Hundreds of Pilots Pledge"
        category="Gaming"
        author="ObjectWire Gaming"
        publishDate="April 3, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
