import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/trump/god-squad-gulf-drilling-esa-exemption';
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'God Squad Exempts Gulf Drilling | ESA Override 2026',
  description:
    'God Squad voted unanimously March 31 to exempt all Gulf oil drilling from the ESA, the first ruling since 1992, invoked on national security grounds.',
  keywords: [
    'God Squad ESA exemption 2026',
    'Endangered Species Committee Gulf drilling',
    'Endangered Species Act Gulf of Mexico exemption',
    "Rice's whale Gulf of Mexico extinction",
    'Pete Hegseth national security ESA',
    'Doug Burgum Endangered Species Committee',
    'Gulf oil drilling Endangered Species Act override',
    'Trump administration ESA exemption',
    'God Squad meeting 2026',
    "Rice's whale endangered species",
    'Gulf of Mexico drilling rights 2026',
    'Endangered Species Act national security provision',
    'ESA Section 7 exemption Gulf',
    'offshore drilling ESA 2026',
  ],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'God Squad Exempts Gulf Drilling | ESA Override 2026',
    description:
      "The Endangered Species Committee voted unanimously March 31 to shield all Gulf oil operations from ESA constraints. Environmental groups say it could push the Rice's whale to extinction.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: OG_IMAGE ? [{ url: `https://www.objectwire.org${OG_IMAGE}` }] : [],
    publishedTime: '2026-03-31T00:00:00Z',
    modifiedTime: '2026-03-31T00:00:00Z',
    section: 'Politics',
    tags: ['Trump', 'Endangered Species Act', 'Gulf of Mexico', 'Pete Hegseth', 'Doug Burgum'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "God Squad Exempts All Gulf Drilling from ESA | First Ruling Since 1992",
    description:
      "Pete Hegseth invoked a never-before-used national security provision to force the God Squad's hand. The committee voted unanimously, putting the Rice's whale at grave risk.",
  },
};

export default function TrumpGodSquadGulfDrillingEsaExemptionPage() {
  return <JackArticleDB slug="trump-god-squad-gulf-drilling-esa-exemption" />;
}
