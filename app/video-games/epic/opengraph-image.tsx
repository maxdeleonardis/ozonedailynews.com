import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Unreal Engine Expands Beyond Gaming Into Film, Automotive, and Architecture — 2026 Adoption Trends';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Unreal Engine Expands Beyond Gaming Into Film, Automotive, and Architecture — 2026 Adoption Trends"
        category="Video Games"
        author="Alfansa"
        publishDate="March 1, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
