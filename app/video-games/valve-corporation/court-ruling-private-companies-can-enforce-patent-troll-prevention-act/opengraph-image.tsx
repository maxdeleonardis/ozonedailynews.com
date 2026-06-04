import { ImageResponse } from 'next/og';
import { NewsArticleOG } from '@/lib/og-templates';

export const runtime = 'edge';
export const alt = 'Valve Wins Jury Verdict Under Washington Patent Troll Prevention Act -- Private Companies Can Enforce the Law';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <NewsArticleOG
        title="Valve Wins Jury Verdict Under Washington Patent Troll Prevention Act -- Private Companies Can Enforce the Law"
        category="Court Ruling"
        author="OzoneNews Editorial Team"
        publishDate="February 26, 2026"
      />
    ),
    {
      ...size,
    }
  );
}
