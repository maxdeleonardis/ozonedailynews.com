import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Cluster Bakugo Shop Duration | MHUR Season 16 End Date';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Cluster Bakugo Shop Duration | MHUR Season 16 End Date"
        category="Gaming"
        author="ObjectWire Editorial"
        publishDate="May 6, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
