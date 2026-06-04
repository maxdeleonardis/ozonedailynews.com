import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Warhorse Studios Confirms Middle-earth RPG | New Kingdom Come Title 2026';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Warhorse Studios Confirms Middle-earth RPG | New Kingdom Come Title 2026"
        category="Gaming"
        author="OzoneNews Editorial"
        publishDate="May 20, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
