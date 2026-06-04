import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Unreal Engine Becomes the Backbone of 2026 Entertainment Production';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Unreal Engine Becomes the Backbone of 2026 Entertainment Production"
        category="Entertainment"
        author="OzoneNews Editorial Team"
        publishDate="March 12, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
