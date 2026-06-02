import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/resident-evil-requiem';

export const metadata: Metadata = {
  title: 'Resident Evil Requiem | Release Date, Story, Gameplay & News 2026',
  description: 'Everything confirmed about Resident Evil Requiem (RE9) by Capcom, covering release date, story details, gameplay mechanics, protagonist, setting, and all the latest news.',
  keywords: [
    'Resident Evil Requiem',
    'Resident Evil 9',
    'RE9',
    'Resident Evil Requiem release date',
    'Resident Evil Requiem gameplay',
    'Resident Evil Requiem story',
    'Resident Evil Requiem protagonist',
    'Capcom survival horror 2026',
    'Resident Evil Requiem PS5',
    'Resident Evil Requiem trailer',
    'RE9 release date',
    'next Resident Evil game',
    'Resident Evil 2026',
    'Capcom horror game 2026',
  ],
  alternates: { canonical: `https://www.OzoneNews.org${SLUG}` },
  openGraph: {
    title: 'Resident Evil Requiem | Release Date, Story & Gameplay 2026',
    description: 'Full hub for Resident Evil Requiem (RE9). Release date, confirmed story details, gameplay mechanics, and every announcement from Capcom.',
    type: 'article',
    url: `https://www.OzoneNews.org${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['Rudy Sinigur'],
    section: 'Gaming',
    tags: ['Resident Evil', 'Capcom', 'Survival Horror', 'PS5', 'Gaming'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resident Evil Requiem | Everything Confirmed So Far',
    description: 'Release date, story, protagonist, and gameplay, all confirmed Resident Evil 9 details in one place.',
  },
};

export default function ResidentEvilRequiemPage() {
  return <ArticlePageDB slug="video-games-resident-evil-requiem" />;
}
