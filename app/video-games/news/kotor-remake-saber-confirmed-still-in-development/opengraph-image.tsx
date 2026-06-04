import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'KOTOR Remake Still in Development, Saber Confirms | 5 Years';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="KOTOR Remake Still in Development, Saber Confirms | 5 Years"
        category="Gaming"
        author="ObjectWire Editorial"
        publishDate="March 7, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
