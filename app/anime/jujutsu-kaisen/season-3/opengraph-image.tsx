import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'JJK Season 3 | Culling Game Arc, Episode Guide, Where to Watch';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="JJK Season 3 | Culling Game Arc, Episode Guide, Where to Watch"
        category="Anime"
        author="OzoneNews Editorial"
        publishDate="May 25, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
