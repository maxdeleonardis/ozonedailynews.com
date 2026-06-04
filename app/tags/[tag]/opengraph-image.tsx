import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = '${display} | ObjectWire';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="${display} | ObjectWire"
        category="Tags"
        author="ObjectWire Editorial"
        publishDate="May 17, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
