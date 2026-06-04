import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Ubisoft €1.3B Record Loss | Hexe 2027, Far Cry & Ghost Recon by 2029';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Ubisoft €1.3B Record Loss | Hexe 2027, Far Cry & Ghost Recon by 2029"
        category="Gaming"
        author="OzoneNews Editorial"
        publishDate="April 28, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
