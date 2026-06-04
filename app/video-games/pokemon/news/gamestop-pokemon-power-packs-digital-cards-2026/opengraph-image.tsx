import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'GameStop Pokemon Power Packs | The Digital Card System That Is Genius, Shady, and Selling Out';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="GameStop Pokemon Power Packs | The Digital Card System That Is Genius, Shady, and Selling Out"
        category="Gaming"
        author="ObjectWire Gaming Desk"
        publishDate="April 22, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
