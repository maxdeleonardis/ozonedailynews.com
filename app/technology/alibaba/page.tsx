import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Alibaba Group — Global E-Commerce & Technology Conglomerate | ObjectWire',
  description:
    'Comprehensive profile of Alibaba Group Holding Limited. Covers company history from 1999 founding through regulatory crackdowns, leadership under Jack Ma and Eddie Wu, and future prospects in AI, cloud, and global logistics.',
  keywords: [
    'Alibaba Group',
    'Jack Ma',
    'Eddie Wu Alibaba CEO',
    'Alibaba history',
    'Alibaba AI',
    'Alibaba Cloud',
    'Taobao',
    'Tmall',
    'AliExpress',
    'Alipay',
    'Ant Group',
    'Alibaba restructuring 2023',
    'Alibaba Qwen AI',
    'Joseph Tsai Alibaba',
    'Alibaba NYSE BABA',
    'Chinese tech company',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/technology/alibaba',
  },
  openGraph: {
    title: 'Alibaba Group — Global E-Commerce & Technology Conglomerate | ObjectWire',
    description:
      'From a Hangzhou apartment in 1999 to a $200B+ empire: the full profile of Alibaba Group, Jack Ma, leadership succession, regulatory crackdowns, and the company\'s AI pivot.',
    type: 'article',
    url: 'https://www.objectwire.org/technology/alibaba',
    siteName: 'ObjectWire',
    publishedTime: '2026-03-07T14:00:00Z',
    modifiedTime: '2026-03-07T14:00:00Z',
    section: 'Technology',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alibaba Group — Full Company Profile | ObjectWire',
    description:
      'History, leadership, AI strategy, and future prospects of Alibaba Group. From Jack Ma to Eddie Wu — the full story.',
  },
};

export default function AlibabaPage() {
  return <WikiArticle slug="technology-alibaba" />;
}
