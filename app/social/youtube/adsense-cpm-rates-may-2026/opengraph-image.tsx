import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'YouTube CPM Rates May 2026 | AdSense Niche Breakdown & RPM Data';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="YouTube CPM Rates May 2026 | AdSense Niche Breakdown & RPM Data"
        category="YouTube"
        author="OzoneNews Editorial"
        publishDate="May 29, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
