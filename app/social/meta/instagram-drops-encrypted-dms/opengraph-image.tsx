import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Instagram Drops Encrypted DMs | E2EE Removed May 2026';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Instagram Drops Encrypted DMs | E2EE Removed May 2026"
        category="Privacy"
        author="Jack Sterling"
        publishDate="May 11, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
