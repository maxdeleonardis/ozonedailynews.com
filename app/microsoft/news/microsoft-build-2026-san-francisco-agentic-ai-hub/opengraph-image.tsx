import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Microsoft Build 2026 | Dates, Location, Announcements & History';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Microsoft Build 2026 | Dates, Location, Announcements & History"
        category="Technology"
        author="OzoneNews Editorial"
        publishDate="June 4, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
