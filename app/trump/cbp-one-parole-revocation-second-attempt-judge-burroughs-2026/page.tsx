import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/trump/cbp-one-parole-revocation-second-attempt-judge-burroughs-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE =
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'CBP One Parole Revocation | Trump Second Attempt, May 6 Hearing',
  description:
    'Trump administration filed new CBP One parole termination notices April 24, 2026, one month after Judge Burroughs ruled the first attempt violated the APA. A May 6 hearing will determine if DHS can proceed.',
  keywords: [
    'CBP One parole revocation 2026',
    'Trump CBP One second termination attempt',
    'Judge Allison Burroughs CBP One ruling',
    'DHS parole termination Administrative Procedure Act',
    'Sileiri Doe v Department of Homeland Security',
    'CBP One 900000 migrants parole',
    'Rodney Scott CBP memo parole termination',
    'Democracy Forward immigration lawsuit 2026',
    'Massachusetts Law Reform Institute CBP One',
    'Venezuelan Association Massachusetts immigration',
    'CBP One Biden parole program 2026',
    'Trump immigration court ruling circumvention',
    'CBP One APA violation ruling March 2026',
    'CBP One May 6 hearing DHS injunction',
    'Trump parole revocation mass termination',
    'CBP One Temporary Protected Status migrants',
    'immigration enforcement federal court 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Trump Moves to Revoke CBP One Parole Again | Court Battle, 900,000 Affected',
    description:
      "One month after Judge Burroughs ruled DHS acted unlawfully, the Trump administration filed new parole termination notices backed by a CBP Commissioner memo. A May 6 hearing will decide if the second attempt can proceed.",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-27T12:00:00Z',
    modifiedTime: '2026-04-27T12:00:00Z',
    section: 'Politics',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: "Migrants gathered representing the 900,000 CBP One parole recipients affected by the Trump administration's second termination attempt",
      },
    ],
    tags: ['Trump', 'Immigration', 'CBP One', 'DHS', 'Federal Court', 'Parole'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trump Files Second CBP One Parole Termination. Judge Already Blocked the First. May 6 Hearing Set.',
    description:
      'New notices are based on an unpublished Rodney Scott memo. Over 900,000 migrants affected. Democracy Forward calls it deliberate court circumvention. Hearing: May 6.',
    images: [OG_IMAGE],
  },
};

export default function TrumpCbpOneParoleRevocationSecondAttemptJudgeBurroughs2026Page() {
  return <JackArticleDB slug="trump-cbp-one-parole-revocation-second-attempt-judge-burroughs-2026" />;
}
