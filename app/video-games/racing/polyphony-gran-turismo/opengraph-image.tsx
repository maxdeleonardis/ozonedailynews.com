import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Gran Turismo 7 Review — The Gold Standard of Sim Racing, and Why Polyphony Digital Is Already Building the Next One';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Gran Turismo 7 Review — The Gold Standard of Sim Racing, and Why Polyphony Digital Is Already Building the Next One"
        category="Gaming"
        author="ObjectWire Gaming Desk"
        publishDate="March 2, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
