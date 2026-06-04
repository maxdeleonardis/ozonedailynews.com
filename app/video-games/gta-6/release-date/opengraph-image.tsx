import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'GTA 6 Release Date | Everything Confirmed for Fall 2026';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="GTA 6 Release Date | Everything Confirmed for Fall 2026"
        category="Gaming"
        author="ObjectWire Editorial"
        publishDate="May 11, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
