import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Windrose Dev Holds Off on Release Date Despite 1M Wishlists | ObjectWire';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Windrose Dev Holds Off on Release Date Despite 1M Wishlists | ObjectWire"
        category="General"
        author="Alfansa"
        publishDate="March 6, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
