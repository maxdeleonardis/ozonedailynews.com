import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Forza Horizon 6 Pre-Sells 500K on Steam | Alinea Analyst Projects Better Launch Than FH5';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Forza Horizon 6 Pre-Sells 500K on Steam | Alinea Analyst Projects Better Launch Than FH5"
        category="Gaming"
        author="ObjectWire Gaming Desk"
        publishDate="April 21, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
