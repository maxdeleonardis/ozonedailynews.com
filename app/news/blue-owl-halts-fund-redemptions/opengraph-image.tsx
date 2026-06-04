import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Blue Owl Halts Fund Redemptions, Sparking Private Credit Selloff';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Blue Owl Halts Fund Redemptions, Sparking Private Credit Selloff"
        category="Finance"
        author="Alfansa"
        publishDate="February 19, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
