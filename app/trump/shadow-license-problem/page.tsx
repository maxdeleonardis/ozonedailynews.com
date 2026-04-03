import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'The Shadow License Problem: White House War Edits Steal from Hollywood and Gaming | ObjectWire',
  description:
    'The White House is splicing drone footage of real military strikes with Grand Theft Auto screens, Mortal Kombat callouts, and Tom Cruise clips, without permission. Ben Stiller is demanding removal. Legal experts call it a "shadow license" crisis with no clear accountability.',
  keywords: [
    'White House war edits copyright',
    'White House social media copyright violation',
    'Ben Stiller White House Tropic Thunder',
    'White House GTA war montage',
    'White House shadow license problem',
    'Pentagon propaganda meme copyright',
    'Screen Actors Guild White House',
    'Fair Use government propaganda',
    'White House Iran strikes video',
    'Kesha White House copyright',
    'government copyright infringement',
    'White House gaming war video',
    'Mortal Kombat White House montage',
    'Call of Duty US military killstreak',
    'government political video fair use',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/trump/shadow-license-problem',
  },
  openGraph: {
    title: "The Shadow License Problem: White House 'War Edits' Put Hollywood and the Pentagon on Edge",
    description:
      'White House montages splicing Iran strike drone footage with GTA "Wasted" screens and Tom Cruise clips have triggered copyright demands from Ben Stiller and Kesha, and exposed a legal grey zone with no clear accountability.',
    type: 'article',
    url: 'https://www.objectwire.org/trump/shadow-license-problem',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    publishedTime: '2026-03-07T18:00:00Z',
    modifiedTime: '2026-03-07T18:00:00Z',
    section: 'Politics',
    tags: [
      'White House',
      'Copyright',
      'War Edits',
      'Ben Stiller',
      'Tropic Thunder',
      'GTA',
      'Propaganda',
      'Fair Use',
      'Screen Actors Guild',
      'Pentagon',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "White House 'War Edits' Hit Back: Ben Stiller, GTA, and the Shadow License Problem",
    description:
      'The White House is treating Hollywood and gaming IP as public property for war montages. Ben Stiller wants his Tropic Thunder clip pulled. Legal experts say there\'s no clear mechanism to make them comply.',
  },
};

export default function ShadowLicenseProblemPage() {
  return <WikiArticle slug="trump-shadow-license-problem" />;
}
