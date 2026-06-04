import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Witch Hat Atelier | Review, Staff, Season 2 News 2026';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Witch Hat Atelier | Review, Staff, Season 2 News 2026"
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
