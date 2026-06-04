import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Anime News | Coverage Coming Soon | ObjectWire 2026';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Anime News | Coverage Coming Soon | ObjectWire 2026"
        category="Anime"
        author="ObjectWire Editorial"
        publishDate="May 7, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
