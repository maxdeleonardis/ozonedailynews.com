import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Ubisoft | Company Profile, Creative Houses, 2026 Reset';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Ubisoft | Company Profile, Creative Houses, 2026 Reset"
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
