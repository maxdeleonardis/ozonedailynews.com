import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/tech/news/tenstorrent-tt-quietbox-2-risc-v-ai-workstation-9999';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title:
    'Tenstorrent QuietBox 2 | $9,999 RISC-V AI Workstation',
  description:
    "Jim Keller's Tenstorrent unveiled the TT-QuietBox 2 on March 10, 2026, a $9,999 liquid-cooled RISC-V AI workstation capable of running 120B-parameter",
  keywords: [
    'Tenstorrent QuietBox 2 RISC-V workstation 2026',
    'TT-QuietBox 2 $9999 AI workstation',
    'Jim Keller Tenstorrent AI hardware',
    'RISC-V AI inference workstation',
    'Tenstorrent vs Nvidia CUDA alternative',
    'TT-Buda TT-Metalium open source AI compiler',
    'teraflop local LLM inference workstation',
    '120 billion parameter local inference',
    'Tenstorrent liquid cooled AI developer machine',
    'open source AI hardware RISC-V 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Tenstorrent Fires at Nvidia With $9,999 RISC-V "QuietBox 2" AI Workstation',
    description:
      "The TT-QuietBox 2 runs 120B-parameter models locally, delivers teraflop-class inference, uses a fully open-source stack, and costs $2,000 less than its",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-12T00:00:00Z',
    modifiedTime: '2026-03-12T00:00:00Z',
    section: 'Technology',
    tags: ['Tenstorrent', 'RISC-V', 'AI Hardware', 'QuietBox 2', 'Jim Keller', 'Nvidia', 'Open Source AI'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tenstorrent QuietBox 2 | $9,999 RISC-V Workstation Runs',
    description:
      "Jim Keller's Tenstorrent just shipped a liquid-cooled, fully open-source AI workstation for $9,999. No CUDA. No Nvidia. Teraflop inference. 120B",
  },
};

export default function TenstorrentQuietBox2Page() {
  return <NewsArticleDB slug="tech-news-tenstorrent-tt-quietbox-2-risc-v-ai-workstation-9999" />;
}
