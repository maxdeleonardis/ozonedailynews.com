import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Fortnite Season 2 Weapons Tier List | Katana, SMGs, LMGs Ranked';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Fortnite Season 2 Weapons Tier List | Katana, SMGs, LMGs Ranked"
        category="Gaming"
        author="ObjectWire Editorial"
        publishDate="April 29, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
