import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Microsoft Scout | Always-On AI Autopilot Revealed at Build 2026';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Microsoft Scout | Always-On AI Autopilot Revealed at Build 2026"
        category="Technology"
        author="OzoneNews Editorial"
        publishDate="June 2, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
