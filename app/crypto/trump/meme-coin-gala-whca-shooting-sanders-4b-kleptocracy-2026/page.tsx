import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/crypto/trump/meme-coin-gala-whca-shooting-sanders-4b-kleptocracy-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE =
  'https://images.unsplash.com/photo-1621416894569-0e5e21f3a7ab?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Trump WHCA Shooting | Meme Coin Gala, Sanders $4B Report',
  description:
    'Trump evacuated from the WHCA Dinner after shots fired, as Sanders released a $4B kleptocracy report on $TRUMP coin profits and Persian Gulf deals.',
  keywords: [
    'Trump WHCA Dinner shooting 2026',
    'Cole Tomas Allen White House Correspondents Dinner',
    'Bernie Sanders Trump kleptocracy $4 billion',
    '$TRUMP meme coin gala Mar-a-Lago',
    'World Liberty Financial Trump profits',
    'Trump meme coin price collapse 2026',
    'Sanders Trump crypto profits report',
    'WHCA Dinner shooting Washington Hilton',
    'Trump evacuated White House Correspondents Dinner',
    'Elizabeth Warren Trump meme coin corruption',
    'Trump $TRUMP $MELANIA coin profits',
    'Persian Gulf Trump business deals 2026',
    'Qatari jet Trump $150 million',
    'Trump crypto news April 2026',
    'Operation Epic Fury Iran Trump',
    'Trump Secret Service WHCA 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Trump WHCA Shooting | Meme Coin Gala & Sanders $4B Kleptocracy Report',
    description:
      'Trump was rushed offstage by Secret Service at the WHCA Dinner hours after Sanders accused the family of pocketing $4B in office, including $3B in meme coin profits. The $TRUMP Gala went ahead at Mar-a-Lago with tickets down 94%.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-26T00:30:00Z',
    modifiedTime: '2026-04-26T00:30:00Z',
    section: 'Crypto',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'Cryptocurrency coins representing the $TRUMP meme coin controversy at the Mar-a-Lago Meme Coin Gala',
      },
    ],
    tags: ['Trump', 'WHCA Dinner', 'Meme Coin', 'Bernie Sanders', 'Crypto', 'World Liberty Financial'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trump Evacuated from WHCA Dinner After Shots Fired, Meme Coin Gala Down 94%, Sanders Calls It $4B Kleptocracy',
    description:
      'Cole Tomas Allen apprehended at the Washington Hilton. Sanders says Trump pocketed $3B in meme coins. $TRUMP gala tickets collapsed 94%.',
    images: [OG_IMAGE],
  },
};

export default function CryptoTrumpMemeCoinGalaWhcaShootingSanders4bKleptocracy2026Page() {
  return <NewsArticleDB slug="crypto-trump-meme-coin-gala-whca-shooting-sanders-4b-kleptocracy-2026" />;
}
