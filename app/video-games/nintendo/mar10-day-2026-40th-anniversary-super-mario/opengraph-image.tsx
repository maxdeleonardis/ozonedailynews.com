import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Nintendo Kicks Off MAR10 Day 2026 with 40th Anniversary Power-Ups';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Nintendo Kicks Off MAR10 Day 2026 with 40th Anniversary Power-Ups"
        category="Gaming"
        author="Conan Doyle"
        publishDate="March 5, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
