import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Fabletics - Activewear & Athleisure Brand | OBJECTWIRE',
  description: 'Comprehensive history of Fabletics, the membership-based activewear brand co-founded by Kate Hudson. From innovative subscription model to billion-dollar valuation.',
  keywords: 'Fabletics, Kate Hudson, activewear, athleisure, VIP membership, TechStyle Fashion Group, Adam Goldenberg',
  openGraph: {
    title: 'Fabletics - The Complete Company History',
    description: 'How Kate Hudson and TechStyle Fashion Group disrupted the activewear industry with a membership-based model.',
    type: 'article',
    publishedTime: '2026-02-09T10:00:00Z',
    authors: ['OBJECTWIRE Fashion Desk'],
  },
};

export default function FableticsPage() {
  return <WikiArticle slug="clothing-fabletics" />;
}
