import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Fortnite Phineas and Ferb Cup | How to Win Buff Perry, Doofenshmirtz Free';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Fortnite Phineas and Ferb Cup | How to Win Buff Perry, Doofenshmirtz Free"
        category="Gaming"
        author="ObjectWire Gaming Desk"
        publishDate="April 3, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
