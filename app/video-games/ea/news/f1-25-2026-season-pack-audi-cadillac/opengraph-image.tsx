import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'EA F1 25 2026 Season Pack | Audi, Cadillac, June 3';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="EA F1 25 2026 Season Pack | Audi, Cadillac, June 3"
        category="Gaming"
        author="OzoneNews Editorial"
        publishDate="May 20, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
