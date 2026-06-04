import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Battlefield 6 2026 Roadmap | Seasons 3-5, Naval Warfare, Server Browser';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Battlefield 6 2026 Roadmap | Seasons 3-5, Naval Warfare, Server Browser"
        category="News"
        author="Jack Sterling"
        publishDate="April 19, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
