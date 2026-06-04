import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Capcom | Golden Era, RE Engine, 2026 Profile';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Capcom | Golden Era, RE Engine, 2026 Profile"
        category="Gaming"
        author="ObjectWire"
        publishDate="June 4, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
