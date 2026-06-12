import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/news/crazy-taxi-world-tour-ai-controversy';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=675&fit=crop&q=80';

export const metadata: Metadata = {
  title: 'Crazy Taxi World Tour AI Controversy | Sega Steam Disclosure',
  description:
    'Sega defends Crazy Taxi World Tour after its Steam page confirms generative AI use. Series creator Kenji Kanno says AI was reference-only at Summer Game Fest. Full breakdown.',
  keywords: [
    'Crazy Taxi World Tour AI',
    'Crazy Taxi World Tour controversy',
    'Sega generative AI disclosure',
    'Crazy Taxi World Tour Steam',
    'Kenji Kanno AI Summer Game Fest',
    'Sega AI game development 2026',
    'Crazy Taxi reboot AI',
    'Sega Football Club Champions AI',
    'Xbox Games Showcase Crazy Taxi',
    'Crazy Taxi World Tour reveal',
    'generative AI video games 2026',
    'Valve Steam AI disclosure policy',
    'Crazy Taxi World Tour release date',
    'Sega AI tools background assets',
    'Summer Game Fest Play Days 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Crazy Taxi World Tour AI Controversy | Sega, Kenji Kanno, Steam',
    description:
      'Sega confirms AI use in Crazy Taxi World Tour. Kenji Kanno says every final asset is hand-made. Sega Football Club Champions provides uncomfortable context.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Jack Sterling'],
    publishedTime: '2026-06-12T14:00:00-05:00',
    modifiedTime: '2026-06-12T14:00:00-05:00',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Crazy Taxi World Tour AI controversy' }],
    tags: ['Crazy Taxi', 'Sega', 'Generative AI', 'Xbox Games Showcase', 'Summer Game Fest'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crazy Taxi World Tour AI Controversy | Sega Defends Steam Disclosure',
    description:
      'Kenji Kanno: AI was reference-only, every asset is human-made. But Sega Football Club Champions says otherwise.',
    images: [OG_IMAGE],
  },
};

export default function CrazyTaxiAIControversyPage() {
  return <JackArticleDB slug="video-games-news-crazy-taxi-world-tour-ai-controversy" />;
}
