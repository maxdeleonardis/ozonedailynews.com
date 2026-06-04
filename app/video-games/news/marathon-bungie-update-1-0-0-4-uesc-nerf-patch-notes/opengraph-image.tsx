import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Marathon Update 1.0.0.4 — Bungie Nerfs UESC AI, Thermal Scopes, & More | ObjectWire';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Marathon Update 1.0.0.4 — Bungie Nerfs UESC AI, Thermal Scopes, & More | ObjectWire"
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
