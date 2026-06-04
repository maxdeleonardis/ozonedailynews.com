import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Ace Combat 8 Wings of Theve | Release Date October 2, 2026';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Ace Combat 8 Wings of Theve | Release Date October 2, 2026"
        category="Gaming"
        author="OzoneNews Editorial"
        publishDate="June 4, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
