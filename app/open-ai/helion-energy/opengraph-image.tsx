import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Helion Energy | Sam Altman $1.65B Stake, Polaris Milestone 2026';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Helion Energy | Sam Altman $1.65B Stake, Polaris Milestone 2026"
        category="Technology"
        author="ObjectWire Editorial"
        publishDate="May 13, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
