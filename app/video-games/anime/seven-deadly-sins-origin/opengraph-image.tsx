import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Seven Deadly Sins: Origin Launches March 16, 2026 on PS5 and Steam as Open-World Action RPG -- Mobile Expansion March 23';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Seven Deadly Sins: Origin Launches March 16, 2026 on PS5 and Steam as Open-World Action RPG -- Mobile Expansion March 23"
        category="Game Launch"
        author="OzoneNews Editorial Team"
        publishDate="February 26, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
