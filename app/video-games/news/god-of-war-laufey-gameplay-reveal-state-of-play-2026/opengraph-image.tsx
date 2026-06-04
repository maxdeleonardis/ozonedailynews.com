import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'God of War Laufey Gameplay Reveal | Play as Faye, 2027';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="God of War Laufey Gameplay Reveal | Play as Faye, 2027"
        category="Gaming"
        author="OzoneNews Editorial"
        publishDate="June 4, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
