import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Resident Evil Requiem Shatters Steam Records — 267K Concurrent Players at Launch | ObjectWire';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Resident Evil Requiem Shatters Steam Records — 267K Concurrent Players at Launch | ObjectWire"
        category="General"
        author="ObjectWire Gaming Desk"
        publishDate="March 6, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
