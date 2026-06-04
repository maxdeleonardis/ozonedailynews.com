import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Maul Shadow Lord Season 1 Finale Review | Episodes 9 and 10';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Maul Shadow Lord Season 1 Finale Review | Episodes 9 and 10"
        category="Gaming"
        author="ObjectWire Editorial"
        publishDate="May 4, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
