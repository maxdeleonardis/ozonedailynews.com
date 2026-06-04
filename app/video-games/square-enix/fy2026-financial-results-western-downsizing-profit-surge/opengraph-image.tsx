import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Square Enix FY2026 | 35% Profit Surge, Western Retrenchment';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Square Enix FY2026 | 35% Profit Surge, Western Retrenchment"
        category="Gaming"
        author="ObjectWire Editorial"
        publishDate="May 15, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
