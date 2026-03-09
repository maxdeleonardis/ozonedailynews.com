import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Overhaul Blighted Precipice Quick Skill  ” Season 15 My Hero Ultra Rumble | ObjectWire',
  description:
    'Bandai Namco drops the Overhaul "Blighted Precipice" Quick Skill in My Hero Ultra Rumble Season 15 on February 18, 2026. Full stats, quirk skills, tuning guide, roll strategy, and playstyle breakdown.',
  keywords: [
    'Overhaul Blighted Precipice Ultra Rumble',
    'My Hero Ultra Rumble Season 15',
    'Overhaul Quick Skill',
    'MHUR Overhaul rolls',
    'Blighted Precipice stats',
    'Ultra Rumble Season 15 new character',
    'Bandai Namco MHA game 2026',
    'Shie Hassaikai Quirk skill',
    'Overhaul villain build',
    'Ultra Rumble Assault role',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/video-games/mha/ultra-rumble/season-15/strike-overhaul',
  },
  openGraph: {
    title: 'Overhaul Blighted Precipice Quick Skill  ” Season 15 Ultra Rumble',
    description:
      'Bandai Namco drops the Overhaul "Blighted Precipice" Quick Skill variant in My Hero Ultra Rumble Season 15. Full stats, quirk breakdown, and roll guide.',
    type: 'article',
    url: 'https://www.objectwire.org/video-games/mha/ultra-rumble/season-15/strike-overhaul',
    siteName: 'ObjectWire',
    publishedTime: '2026-02-18T13:00:00+09:00',
    modifiedTime: '2026-02-18T13:00:00+09:00',
    authors: ['ObjectWire Gaming Desk'],
    section: 'Video Games',
    tags: ['My Hero Ultra Rumble', 'Overhaul', 'Season 15', 'Bandai Namco', 'Quick Skill'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Overhaul Blighted Precipice Quick Skill  ” Season 15 Ultra Rumble',
    description:
      'Full breakdown of the new Overhaul Quick Skill variant released February 18, 2026 in My Hero Ultra Rumble Season 15.',
  },
};

export default function OverhaulBlightedPrecipicePage() {
  return <WikiArticle slug="video-games-mha-ultra-rumble-season-15-strike-overhaul" />;
}
