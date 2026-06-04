import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'GTA 6 Pre-Orders May Be Imminent as PlayStation Database Lists Title IDs | Take-Two Assures Sony and Microsoft No Further Delay';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="GTA 6 Pre-Orders May Be Imminent as PlayStation Database Lists Title IDs | Take-Two Assures Sony and Microsoft No Further Delay"
        category="Video Games"
        author="OzoneNews Editorial Team"
        publishDate="March 2, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
