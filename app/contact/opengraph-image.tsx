import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Contact OzoneNews | Editorial, Corrections, Tips';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Contact OzoneNews | Editorial, Corrections, Tips"
        category="Contact"
        author="OzoneNews Editorial"
        publishDate="May 22, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
