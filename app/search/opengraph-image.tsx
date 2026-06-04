import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Search OzoneNews';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Search OzoneNews"
        category="Meta"
        author="OzoneNews Editorial"
        publishDate="May 7, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
