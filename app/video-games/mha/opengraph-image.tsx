import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = '› video-games › mha';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="› video-games › mha"
        category="Gaming"
        author="Alfansa"
        publishDate="May 7, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
