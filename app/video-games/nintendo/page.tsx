import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.


export const metadata: Metadata = {
  title: 'Nintendo Co., Ltd. | Gaming Company Profile',
  description: 'Complete profile of Nintendo, Japanese multinational video game company. History, gaming consoles, franchises like Mario and Zelda, Switch success, and',
  keywords: [
    'Nintendo',
    'Nintendo Company',
    'video game company',
    'Nintendo Switch',
    'Super Mario',
    'The Legend of Zelda',
    'gaming consoles',
    'Japanese gaming',
    'Kyoto Japan',
    'Shigeru Miyamoto',
  ],
  alternates: {
    canonical: 'https://www.ozonenetwork.news/nintendo',
  },
  openGraph: {
    title: 'Nintendo Co., Ltd. | Gaming Company Profile',
    description: 'Japanese video game company: history, iconic franchises, and gaming innovations.',
    type: 'article',
    url: 'https://www.ozonenetwork.news/nintendo',
    siteName: 'OzoneNews',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nintendo | Company Profile',
    description: 'Complete guide to Nintendo gaming company.',
  },
};

export default function NintendoPage() {
  return <WikiArticle slug="video-games-nintendo" />;
}
