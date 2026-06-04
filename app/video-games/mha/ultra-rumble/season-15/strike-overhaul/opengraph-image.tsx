import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Overhaul Blighted Precipice Quick Skill  ” Season 15 My';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Overhaul Blighted Precipice Quick Skill  ” Season 15 My"
        category="Gaming"
        author="ObjectWire Editorial"
        publishDate="February 18, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
