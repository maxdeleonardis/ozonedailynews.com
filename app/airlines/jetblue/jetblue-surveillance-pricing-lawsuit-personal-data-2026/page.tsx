import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/airlines/jetblue/jetblue-surveillance-pricing-lawsuit-personal-data-2026';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'JetBlue Surveillance Pricing Lawsuit | Personal Data Used to Set Fares 2026',
  description: 'JetBlue faces a federal class action lawsuit alleging it uses cookies, tracking pixels, and third-party data brokers to inflate ticket prices based on individual browsing behavior — a practice regulators call "surveillance pricing."',
  keywords: [
    'JetBlue surveillance pricing lawsuit 2026',
    'JetBlue class action personal data fares',
    'JetBlue wiretapping lawsuit Andrew Phillips',
    'JetBlue dynamic pricing cookies tracking',
    'surveillance pricing airlines 2026',
    'JetBlue Joanna Geraghty data pricing',
    'JetBlue incognito window fare difference',
    'Rep Greg Casar JetBlue letter',
    'Sen Ruben Gallego JetBlue AI pricing',
    'JetBlue cache cookies fare jump $230',
    'airline personalized pricing data brokers',
    'JetBlue federal anti-wiretapping lawsuit',
    'New York consumer protection JetBlue',
    'JetBlue NuggetSince94 viral X post',
    'airline surveillance pricing FTC',
    'dynamic pricing airline data 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'JetBlue Sued Over Surveillance Pricing | Personal Data Used to Set Ticket Fares',
    description: 'A viral X post, a $230 single-day fare jump, and a deleted JetBlue reply have ignited a federal class action lawsuit and congressional scrutiny over whether airlines use your browsing history to charge you more.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Wang'],
    publishedTime: '2026-04-23T22:00:00Z',
    modifiedTime: '2026-04-23T22:00:00Z',
    section: 'Finance',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Airplane at airport gate representing JetBlue surveillance pricing lawsuit 2026' }],
    tags: ['JetBlue', 'Surveillance Pricing', 'Privacy', 'Lawsuit', 'Airlines'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JetBlue Sued for Using Your Data to Inflate Ticket Prices',
    description: 'A funeral, a $230 fare jump, and a now-deleted JetBlue reply about clearing cookies. The lawsuit that could reshape how airlines price every ticket.',
    images: [OG_IMAGE],
  },
};

export default function AirlinesJetblueJetblueSurveillancePricingLawsuitPersonalData2026Page() {
  return <JackArticleDB slug="airlines-jetblue-jetblue-surveillance-pricing-lawsuit-personal-data-2026" />;
}
