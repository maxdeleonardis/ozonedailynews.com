import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Waymo Nears 500,000 Rides Per Week Across 10 U.S. Cities';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Waymo Nears 500,000 Rides Per Week Across 10 U.S. Cities"
        category="TECHNOLOGY"
        author="Jack Wang"
        publishDate="March 25, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
