import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Google';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Google"
        category="GAMING"
        author="ObjectWire Gaming Desk"
        publishDate="January 29, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
