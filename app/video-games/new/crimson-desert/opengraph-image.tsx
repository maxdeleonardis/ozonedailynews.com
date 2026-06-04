import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Crimson Desert Hits 3 Million Wishlists Before March 19 Launch';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Crimson Desert Hits 3 Million Wishlists Before March 19 Launch"
        category="GAMING"
        author="OzoneNews Editorial Team"
        publishDate="March 1, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
