import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'YouTube CPM by Niche 2026 | Creator Economy Deep Dive';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="YouTube CPM by Niche 2026 | Creator Economy Deep Dive"
        category="YouTube"
        author="OzoneNews Editorial"
        publishDate="June 1, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
