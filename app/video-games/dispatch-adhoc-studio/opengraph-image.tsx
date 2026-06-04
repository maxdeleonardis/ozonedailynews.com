import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Dispatch Xbox Release | AdHoc Studio Superhero Comedy Coming Summer 2026';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Dispatch Xbox Release | AdHoc Studio Superhero Comedy Coming Summer 2026"
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
