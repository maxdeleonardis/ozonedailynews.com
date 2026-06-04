import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Rainbow Six Siege Y11S1.1 Patch | Every Operator and Weapon Buff Explained';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Rainbow Six Siege Y11S1.1 Patch | Every Operator and Weapon Buff Explained"
        category="Video Games"
        author="ObjectWire Gaming Desk"
        publishDate="March 31, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
