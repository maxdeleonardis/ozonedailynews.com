import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'HUNTER×HUNTER NEN×SURVIVOR Launches February 18, 2026 on iOS and Android as Free-to-Play Roguelike Survivor Action Game';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="HUNTER×HUNTER NEN×SURVIVOR Launches February 18, 2026 on iOS and Android as Free-to-Play Roguelike Survivor Action Game"
        category="Game Launch"
        author="OzoneNews Editorial Team"
        publishDate="February 26, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
