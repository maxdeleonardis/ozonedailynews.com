import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Microsoft Corporation â€” Products, News & Analysis';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Microsoft Corporation â€” Products, News & Analysis"
        category="General"
        author="Austin Web Services"
        publishDate="March 15, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
