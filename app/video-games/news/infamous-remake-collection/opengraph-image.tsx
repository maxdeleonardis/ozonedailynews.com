import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'inFamous Remake Collection | PlayStation Studios, Not Sucker Punch';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="inFamous Remake Collection | PlayStation Studios, Not Sucker Punch"
        category="Gaming"
        author="ObjectWire Editorial"
        publishDate="May 16, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
