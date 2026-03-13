import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';
// Page renders dynamically — content fetched from Supabase at request time.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Florida Passes First State-Level Stablecoin Law in the US — HB 175 | ObjectWire',
  description: 'Florida HB 175 passed the House 102–2 and Senate 37–0, creating the first full state-level rulebook for payment stablecoins in the US and launching a live pilot for government fee payments.',
  keywords: ['Florida stablecoin law HB 175','Florida payment stablecoin regulation 2026','HB 175 Florida stablecoin','Florida crypto regulation 2026','GENIUS Act state implementation','qualified payment stablecoin issuer','Florida Office of Financial Regulation stablecoin','stablecoin not security Florida','DeSantis stablecoin bill','Florida stablecoin pilot program','state stablecoin regulation United States','payment stablecoin AML compliance','stablecoin government fee payments','OFR stablecoin licensing Florida'],
  alternates: { canonical: 'https://www.objectwire.org/crypto/news/florida-hb175-stablecoin-law-payment-regulation' },
  openGraph: {
    title: 'Florida Passes First State-Level Stablecoin Law — HB 175 Heads to DeSantis',
    description: 'HB 175 passed 102–2 in the House and 37–0 in the Senate. Florida defines "payment stablecoin," requires OFR licensing, implements the federal GENIUS Act, and launches a pilot for stablecoin fee payments.',
    type: 'article',
    url: 'https://www.objectwire.org/crypto/news/florida-hb175-stablecoin-law-payment-regulation',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Finance Desk'],
    publishedTime: '2026-03-06T14:00:00Z',
    modifiedTime: '2026-03-06T14:00:00Z',
    section: 'Finance',
    tags: ['Stablecoin', 'Florida', 'Crypto Regulation', 'HB 175', 'GENIUS Act', 'DeSantis'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florida Creates First US State-Level Stablecoin Rulebook — HB 175',
    description: 'House 102–2, Senate 37–0. Florida defines payment stablecoins, requires OFR licensing, and pilots stablecoin payments for government fees.',
  },
};

export default function FloridaHB175Page() {
  return <WikiArticle slug="/crypto/news/florida-hb175-stablecoin-law-payment-regulation" />;
}
