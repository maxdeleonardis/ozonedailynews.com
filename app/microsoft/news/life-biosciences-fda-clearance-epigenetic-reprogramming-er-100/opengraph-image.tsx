import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'ER-100 FDA Clearance | First Human Trial of Partial Epigenetic Reprogramming for Optic Neuropathies';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="ER-100 FDA Clearance | First Human Trial of Partial Epigenetic Reprogramming for Optic Neuropathies"
        category="Science"
        author="ObjectWire Science Desk"
        publishDate="January 28, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
