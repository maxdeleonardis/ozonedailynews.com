import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Meta MCI | Employee Tracking Revolt, GDPR Risk & Rollback 2026';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Meta MCI | Employee Tracking Revolt, GDPR Risk & Rollback 2026"
        category="Meta"
        author="OzoneNews Editorial"
        publishDate="June 3, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
