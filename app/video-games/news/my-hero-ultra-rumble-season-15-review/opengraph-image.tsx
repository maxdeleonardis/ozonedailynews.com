import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'My Hero Ultra Rumble Season 15: Tokoyami, Neo Academia & Patch 1.14.0 | Full Review';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="My Hero Ultra Rumble Season 15: Tokoyami, Neo Academia & Patch 1.14.0 | Full Review"
        category="Video Games"
        author="OzoneNews Editorial Team"
        publishDate="March 2, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
