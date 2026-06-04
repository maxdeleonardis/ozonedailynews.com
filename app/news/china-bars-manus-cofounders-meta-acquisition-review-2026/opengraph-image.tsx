import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'China Bars Manus Co-Founders From Leaving Country Amid Meta Deal Review';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="China Bars Manus Co-Founders From Leaving Country Amid Meta Deal Review"
        category="Technology"
        author="Jack Sterling"
        publishDate="March 25, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
