import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Forza Horizon 6 Leak May 2026 | Playground Games Issues Franchise-Wide and Hardware Bans';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Forza Horizon 6 Leak May 2026 | Playground Games Issues Franchise-Wide and Hardware Bans"
        category="Gaming"
        author="Jack Sterling"
        publishDate="May 11, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
