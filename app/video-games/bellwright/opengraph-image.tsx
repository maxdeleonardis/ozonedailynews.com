import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Bellwright — Medieval Survival RPG Tops 1 Million Sales | ObjectWire';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Bellwright — Medieval Survival RPG Tops 1 Million Sales | ObjectWire"
        category="Video Games"
        author="ObjectWire Editorial"
        publishDate="March 7, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
