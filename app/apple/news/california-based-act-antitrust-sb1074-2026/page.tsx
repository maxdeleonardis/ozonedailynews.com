import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/apple/news/california-based-act-antitrust-sb1074-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'California BASED Act Dead | Apple and Google Kill SB 1074',
  description:
    'California Senate Bill 1074, the BASED Act, died on April 20 after a 3-3 committee tie. Apple and Google\'s lobbyists defeated the antitrust bill in five weeks. Apple now faces India antitrust hearings.',
  keywords: [
    'California BASED Act 2026',
    'SB 1074 California antitrust',
    'Apple Google California antitrust bill defeated',
    'Blocking Anticompetitive Self-preferencing Entrenched Dominant platforms',
    'Scott Wiener BASED Act',
    'Apple App Store antitrust California',
    'Google antitrust California 2026',
    'California Chamber of Progress tech lobbying',
    'Apple India antitrust penalty 2026',
    'Y Combinator BASED Act support',
    'Digital Markets Act US equivalent',
    'big tech antitrust state legislation 2026',
    'app store self-preferencing ban',
  ],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'California BASED Act Dead | Apple & Google Defeat Antitrust Bill in 5 Weeks',
    description:
      'SB 1074 died 3-3 in committee on April 20. Tech lobbyists dismantled California\'s most ambitious app store antitrust bill in just five weeks. Apple now faces India next.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Conan Boyle'],
    publishedTime: '2026-04-28T23:30:00Z',
    modifiedTime: '2026-04-28T23:30:00Z',
    section: 'Tech',
    tags: ['Apple', 'Google', 'Antitrust', 'California', 'BASED Act'],
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Legal gavel on a courtroom desk representing antitrust regulation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'California\'s BASED Act Is Dead | Apple and Google Won in 5 Weeks',
    description:
      'A 3-3 committee tie killed SB 1074 on April 20. Tech lobbyists defeated the state\'s app store self-preferencing ban before it reached a floor vote.',
    images: [OG_IMAGE],
  },
};

export default function AppleNewsCaliforniaBasedActAntitrustSb10742026Page() {
  return <NewsArticleDB slug="apple-news-california-based-act-antitrust-sb1074-2026" />;
}
