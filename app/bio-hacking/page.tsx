import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Bio-Hacking News 2026 | Longevity & CRISPR',
  description: 'Latest bio-hacking news: CRISPR, longevity research, FDA clearances and health tech.',
  alternates: { canonical: 'https://www.objectwire.org/bio-hacking' },
  openGraph: {
    title: 'Bio-Hacking News 2026 | Longevity & CRISPR',
    description: 'Latest bio-hacking news: CRISPR, longevity research, FDA clearances and health tech.',
    type: 'website',
    url: 'https://www.objectwire.org/bio-hacking',
    siteName: 'ObjectWire',
  },
};

export default function Page() {
  return <WikiArticle slug="bio-hacking" />;
}
