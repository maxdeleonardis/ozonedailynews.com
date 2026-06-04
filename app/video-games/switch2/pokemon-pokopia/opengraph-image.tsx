import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Pokémon Pokopia Achieves Highest Review Scores in Pokémon Franchise History on Nintendo Switch 2';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Pokémon Pokopia Achieves Highest Review Scores in Pokémon Franchise History on Nintendo Switch 2"
        category="Gaming"
        author="ObjectWire Gaming Desk"
        publishDate="March 2, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
