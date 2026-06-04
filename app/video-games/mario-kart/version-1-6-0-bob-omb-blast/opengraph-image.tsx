import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Mario Kart World Version 1.6.0 | Bob-omb Blast Returns on Nintendo Switch 2';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Mario Kart World Version 1.6.0 | Bob-omb Blast Returns on Nintendo Switch 2"
        category="Gaming"
        author="Connan Boyle"
        publishDate="March 30, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
