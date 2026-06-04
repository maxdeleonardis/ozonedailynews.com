import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'My Hero Ultra Rumble Season 16 Goes Plus Ultra for the 2.5 Anniversary';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="My Hero Ultra Rumble Season 16 Goes Plus Ultra for the 2.5 Anniversary"
        category="Video Games"
        author="Jack Sterling"
        publishDate="March 25, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
