import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Super Mario Wonder Switch 2 Edition | Bellabel Park';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Super Mario Wonder Switch 2 Edition | Bellabel Park"
        category="Gaming"
        author="Jack Sterling"
        publishDate="April 8, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
