import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Star Wars Zero Company | Bit Reactor and Respawn Reveal Clone Wars Tactical RPG';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Star Wars Zero Company | Bit Reactor and Respawn Reveal Clone Wars Tactical RPG"
        category="Gaming"
        author="ObjectWire"
        publishDate="June 4, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
