import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Rocket League Season 22 | v2.66 Patch Notes, Rocket Pass, and QoL Upgrades';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Rocket League Season 22 | v2.66 Patch Notes, Rocket Pass, and QoL Upgrades"
        category="Video Games"
        author="ObjectWire Gaming Desk"
        publishDate="March 31, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
