import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'GTA 6 Map | State of Leonida, Vice City, and Every Confirmed Region';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="GTA 6 Map | State of Leonida, Vice City, and Every Confirmed Region"
        category="Gaming"
        author="OzoneNews Editorial"
        publishDate="May 25, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
