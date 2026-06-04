import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Outersloth Rejects 100% of Generative AI Pitches — GDC Festival of Gaming 2026 | ObjectWire';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Outersloth Rejects 100% of Generative AI Pitches — GDC Festival of Gaming 2026 | ObjectWire"
        category="General"
        author="ObjectWire Gaming Desk"
        publishDate="March 12, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
