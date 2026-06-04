import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'GameStop Classifies PS3, Xbox 360, and Wii U as Retro Consoles — With One Presidential Fact Wrong';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="GameStop Classifies PS3, Xbox 360, and Wii U as Retro Consoles — With One Presidential Fact Wrong"
        category="Gaming"
        author="ObjectWire Gaming Desk"
        publishDate="March 16, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
