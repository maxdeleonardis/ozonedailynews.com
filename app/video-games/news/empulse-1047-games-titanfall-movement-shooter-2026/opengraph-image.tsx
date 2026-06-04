import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'EMPULSE | 1047 Games Reveals Titanfall-Style Movement Shooter';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="EMPULSE | 1047 Games Reveals Titanfall-Style Movement Shooter"
        category="Gaming"
        author="OzoneNews Editorial"
        publishDate="June 1, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
