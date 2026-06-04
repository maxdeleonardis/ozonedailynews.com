import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'GTA 6 Trailer 2 Breakdown | Every Confirmed Detail, Release Date';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="GTA 6 Trailer 2 Breakdown | Every Confirmed Detail, Release Date"
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
