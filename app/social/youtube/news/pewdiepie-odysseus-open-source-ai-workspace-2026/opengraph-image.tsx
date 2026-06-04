import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'PewDiePie Launches Odysseus | Free Open-Source AI Workspace';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="PewDiePie Launches Odysseus | Free Open-Source AI App"
        category="Tech"
        author="OzoneNews Editorial Team"
        publishDate="June 4, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
