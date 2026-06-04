import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Pokémon Pokopia Sells 2.2M Copies in 4 Days, Shattering Spin-Off Records | ObjectWire';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Pokémon Pokopia Sells 2.2M Copies in 4 Days, Shattering Spin-Off Records | ObjectWire"
        category="General"
        author="Conan Boyle"
        publishDate="March 12, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
