import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Jack Wang';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Jack Wang"
        category="General"
        author="Austin Web Services"
        publishDate="March 8, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
