import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Nintendo Co., Ltd.';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Nintendo Co., Ltd."
        category="General"
        author="ObjectWire Technology Desk"
        publishDate="March 13, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
