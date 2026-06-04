import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Epic Games Sues Contractor Who Ran Fortnite Leaks Account | ObjectWire';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Epic Games Sues Contractor Who Ran Fortnite Leaks Account | ObjectWire"
        category="General"
        author="Alfansa"
        publishDate="March 6, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
