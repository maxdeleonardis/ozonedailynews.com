import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Clair Obscur: Expedition 33 Built by Just 4 Programmers — Most Awarded Game in History | ObjectWire';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Clair Obscur: Expedition 33 Built by Just 4 Programmers — Most Awarded Game in History | ObjectWire"
        category="General"
        author="ObjectWire Gaming Desk"
        publishDate="March 17, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
