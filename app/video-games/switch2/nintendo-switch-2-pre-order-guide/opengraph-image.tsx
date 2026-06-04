import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Nintendo Switch 2 Pre-Order Guide | Where to Buy, Price, Bundles';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Nintendo Switch 2 Pre-Order Guide | Where to Buy, Price, Bundles"
        category="Gaming"
        author="ObjectWire Editorial"
        publishDate="April 29, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
