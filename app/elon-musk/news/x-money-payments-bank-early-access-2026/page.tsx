import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/elon-musk/news/x-money-payments-bank-early-access-2026';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const OG_IMAGE = `https://www.ozonenetwork.news/api/og?title=X+Money+Enters+Early+Access+%7C+6%25+APY%2C+Visa+Card%2C+xAI+Concierge&category=Tech&author=Jack+Sterling&date=April+28+2026&bg=${encodeURIComponent('https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=675&fit=crop')}`;

export const metadata: Metadata = {
  title: 'X Money Early Access | 6% APY, Visa Debit & xAI Concierge 2026',
  description:
    'Elon Musk launches X Money in public early access April 2026: 6% APY savings, Visa debit with 3% cashback, an xAI financial concierge, and a forced creator payout migration from Stripe. Senate Banking Committee opens inquiry.',
  keywords: [
    'X Money',
    'X Money 6% APY',
    'X Money Visa card',
    'Elon Musk fintech',
    'Elon Musk bank',
    'X Money early access 2026',
    'X Money creator payouts',
    'X Money vs Venmo',
    'xAI financial concierge',
    'X Money Senate Banking Committee',
    'X Money Stripe migration',
    'Elon Musk Everything App',
    'X Money high yield savings',
    'X payments 2026',
    'X Money Dogecoin stablecoin',
    'X Money account suspension risk',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'X Money Enters Early Access | 6% APY, Visa Debit & xAI Concierge',
    description:
      'Elon Musk launches X Money with a 6% annual yield, P2P inside DMs, a Visa debit card, and a forced migration of all creator payouts from Stripe. Senate opens inquiry.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-28T22:00:00-05:00',
    modifiedTime: '2026-05-20T10:00:00-05:00',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'X Money fintech app launch 2026, mobile payment interface' }],
    tags: ['Elon Musk', 'X Money', 'Fintech', 'Senate Banking Committee', 'xAI', 'Creator Economy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'X Money Is Live | 6% APY, Visa Card, Creator Payouts Leave Stripe',
    description:
      'Musk launches X Money: 6% yield, Visa debit, xAI concierge, creator Stripe migration. Senate Banking Committee opens inquiry. April 28, 2026.',
    images: [OG_IMAGE],
  },
};

export default function XMoneyEarlyAccessPage() {
  return <JackArticleDB slug="elon-musk-news-x-money-payments-bank-early-access-2026" />;
}
