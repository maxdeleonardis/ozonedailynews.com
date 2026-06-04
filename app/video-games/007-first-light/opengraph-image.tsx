import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = '007: First Light';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="007: First Light"
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
