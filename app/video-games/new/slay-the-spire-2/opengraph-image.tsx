import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Slay the Spire 2 Shatters Records and Briefly ';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Slay the Spire 2 Shatters Records and Briefly "
        category="GAMING"
        author="OzoneNews Editorial Team"
        publishDate="March 1, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
