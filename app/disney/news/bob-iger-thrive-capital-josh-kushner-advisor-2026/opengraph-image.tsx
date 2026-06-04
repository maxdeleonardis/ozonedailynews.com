import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Bob Iger Returns to Thrive Capital | Former Disney Boss Joins Josh Kushner\'s $15B VC Firm';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Bob Iger Returns to Thrive Capital | Former Disney Boss Joins Josh Kushner\'s $15B VC Firm"
        category="Entertainment"
        author="Jack Wang"
        publishDate="April 23, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
