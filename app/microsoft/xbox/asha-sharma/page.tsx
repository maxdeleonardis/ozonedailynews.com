import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Asha Sharma | CVP Xbox Experiences & Platforms | Microsoft',
  description:
    'Asha Sharma is Corporate Vice President of Xbox Experiences & Platforms at Microsoft, overseeing the Xbox app on Windows, cross-device gaming',
  keywords: [
    'Asha Sharma Microsoft',
    'Asha Sharma Xbox',
    'CVP Xbox Experiences Platforms',
    'Xbox app Windows',
    'Microsoft Gaming executive',
    'Xbox platform strategy',
    'Game Pass platform',
    'Xbox Cloud Gaming',
    'Microsoft women in tech',
    'Xbox leadership',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/microsoft/xbox/asha-sharma',
  },
  openGraph: {
    title: 'Asha Sharma | Corporate VP, Xbox Experiences & Platforms',
    description:
      'Profile of Asha Sharma, CVP at Microsoft Xbox, her role overseeing Xbox platform experiences, Windows gaming, and cross-device infrastructure at the',
    type: 'profile',
    url: 'https://www.objectwire.org/microsoft/xbox/asha-sharma',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Asha Sharma | Corporate VP, Xbox Experiences & Platforms",
    description: "Profile of Asha Sharma, CVP at Microsoft Xbox, her role overseeing Xbox platform experiences, Windows gaming, and cross-device infrastructure at the",
  },
};

export default function AshaSharmaPage() {
  return <WikiArticle slug="microsoft-xbox-asha-sharma" />;
}
