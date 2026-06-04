import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Rainbow Six Siege Operation Silent Hunt | Solid Snake, 1v1 Arcade, and the End of Dual Front';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Rainbow Six Siege Operation Silent Hunt | Solid Snake, 1v1 Arcade, and the End of Dual Front"
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
