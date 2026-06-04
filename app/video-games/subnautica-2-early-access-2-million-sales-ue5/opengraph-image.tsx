import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Subnautica 2 Early Access | 2 Million Copies in 12 Hours';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Subnautica 2 Early Access | 2 Million Copies in 12 Hours"
        category="Gaming"
        author="ObjectWire Editorial"
        publishDate="May 15, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
