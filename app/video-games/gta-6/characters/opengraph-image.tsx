import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'GTA 6 Characters | Jason Duval, Lucia Caminos, Every Confirmed Detail';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="GTA 6 Characters | Jason Duval, Lucia Caminos, Every Confirmed Detail"
        category="Gaming"
        author="OzoneNews Editorial"
        publishDate="May 25, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
