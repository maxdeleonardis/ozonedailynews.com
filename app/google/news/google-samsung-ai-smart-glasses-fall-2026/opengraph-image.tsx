import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Google Samsung AI Smart Glasses | Fall 2026 Launch';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Google Samsung AI Smart Glasses | Fall 2026 Launch"
        category="Technology"
        author="OzoneNews Editorial"
        publishDate="May 20, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
