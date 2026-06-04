import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Rudy Sinigur | Staff Writer, OzoneNews';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Rudy Sinigur | Staff Writer, OzoneNews"
        category="Meta"
        author="OzoneNews Editorial"
        publishDate="June 2, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
