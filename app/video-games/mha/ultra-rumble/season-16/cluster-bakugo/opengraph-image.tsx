import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Cluster Bakugo Season 16 | My Hero Ultra Rumble Skill Set';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Cluster Bakugo Season 16 | My Hero Ultra Rumble Skill Set"
        category="Video Games"
        author="Jack Sterling"
        publishDate="April 22, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
