import { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Mika Lafuente: Argentine-American Model & Lifestyle Influencer',
  description:
    'Full biography, career details, and social media presence of Mika Lafuente, Argentine-American model and popular lifestyle creator.',
  keywords: [
    'Mika Lafuente',
    'influencer',
    'model',
    'Instagram model',
    'TikTok creator',
    'biography',
    'Argentine model',
  ],
  openGraph: {
    title: 'Mika Lafuente | Model & Digital Creator Hub',
    description: 'Biography and career deep-dive for Mika Lafuente.',
    type: 'profile',
    url: 'https://www.objectwire.org/influencer/mika-lafuente',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/influencer/mika-lafuente',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mika Lafuente | Model & Digital Creator Hub',
    description: 'Biography and career deep-dive for Mika Lafuente.',
  },
};

export default function MikaLafuentePage() {
  return <CreatorArticleDB slug="influencer/mika-lafuente" />;
}
