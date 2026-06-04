import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Everything Known About Forza Horizon 6 as of March 2026';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Everything Known About Forza Horizon 6 as of March 2026"
        category="Video Games"
        author="OzoneNews Editorial Team"
        publishDate="April 22, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
