import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Federal Agencies Raised Concerns About Grok Safety and Reliability Before Pentagon';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Federal Agencies Raised Concerns About Grok Safety and Reliability Before Pentagon"
        category="Technology & Government"
        author="ObjectWire Technology Desk"
        publishDate="March 5, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
