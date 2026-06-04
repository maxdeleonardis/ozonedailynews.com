import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Alfansa';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Alfansa"
        category="Reference"
        author="ObjectWire Editorial"
        publishDate="March 11, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
