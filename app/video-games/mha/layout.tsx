import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Hero Academia Hub | Final Season, Vigilantes & Ultra Rumble | OzoneNews',
  description:
    'Complete My Hero Academia knowledge hub: final season analysis, Vigilantes spin-off guide, and My Hero Ultra Rumble game coverage. Updated February 2026.',
  keywords: [
    'My Hero Academia',
    'MHA final season',
    'My Hero Vigilantes',
    'My Hero Ultra Rumble',
    'MHA Ultra Rumble season 15',
    'Kohei Horikoshi',
    'Deku',
    'Bakugo',
    'Todoroki',
    'anime 2026',
    'MHA game',
  ],
  authors: [{ name: 'Alfansa', url: 'https://www.ozonenetwork.news/authors/alfansa' }],
  alternates: {
    canonical: 'https://www.ozonenetwork.news/video-games/mha',
  },
  openGraph: {
    title: 'My Hero Academia Hub | Final Season, Vigilantes & Ultra Rumble',
    description:
      'Your complete guide to the My Hero Academia universe: final season, Vigilantes spin-off, and Ultra Rumble game coverage.',
    type: 'article',
    url: 'https://www.ozonenetwork.news/video-games/mha',
    siteName: 'OzoneNews',
    section: 'Video Games & Anime',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Hero Academia Hub | OzoneNews',
    description: 'Final Season, Vigilantes & Ultra Rumble, complete MHA coverage.',
  },
};

export default function MhaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
