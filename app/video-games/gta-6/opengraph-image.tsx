import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Grand Theft Auto VI';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Grand Theft Auto VI"
        category="Video Games"
        author="ObjectWire"
        publishDate="June 4, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
