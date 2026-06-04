import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Amazon News 2026 | AWS, Robotics & AI';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Amazon News 2026 | AWS, Robotics & AI"
        category="Amazon"
        author="ObjectWire Editorial"
        publishDate="May 7, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
