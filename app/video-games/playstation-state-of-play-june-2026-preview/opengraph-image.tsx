import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'PlayStation State of Play June 2026 | Wolverine, Intergalactic, God of War Preview';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="PlayStation State of Play June 2026 | Wolverine, Intergalactic, God of War Preview"
        category="Gaming"
        author="OzoneNews Editorial"
        publishDate="June 1, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
