import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Dragon Ball Xenoverse 3 | AGE 1000, West City, PS5 2027';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Dragon Ball Xenoverse 3 | AGE 1000, West City, PS5 2027"
        category="Gaming"
        author="Jack Sterling"
        publishDate="April 27, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
