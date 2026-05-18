import type { Metadata } from 'next';
import Hub from '@/components/Hub';
import { getArticlesByCategory } from '@/lib/registry-service';

// ISR: regenerate at most once per hour.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Creator News | Latest from YouTube, TikTok & Social Media',
  description: 'Breaking creator news: MrBeast, Logan Paul, Pokimane, Ari Kytsya, and more. Updated daily.',
  alternates: { canonical: 'https://www.owire.org/creator/news' },
  openGraph: {
    title: 'Creator News | YouTube, TikTok & Social Media',
    description: 'The latest news from the biggest names in online content creation.',
    type: 'website',
    url: 'https://www.owire.org/creator/news',
    siteName: 'OzoneNews',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creator News | oWire',
    description: 'Breaking news from the biggest creators on YouTube, TikTok, and social media.',
  },
};

export default async function CreatorNewsPage() {
  const articles = await getArticlesByCategory('Creator', 20);

  const featured = articles.slice(0, 2);
  const latest = articles.slice(2);

  return (
    <Hub
      title="Creator News"
      subtitle="The latest from YouTube, TikTok, Instagram, and the creators everyone is watching."
      badge="Creators"
      badgeColor="from-[#7c3aed] to-[#a855f7]"
    >
      <Hub.StatBar
        items={[
          { value: '1B+', label: 'YouTube Viewers' },
          { value: '1B+', label: 'TikTok Users' },
          { value: '2B+', label: 'Instagram Users' },
          { value: '2026', label: 'Season' },
        ]}
        accentColor="text-[#7c3aed]"
      />

      {featured.length > 0 && (
        <Hub.Section title="Top Creator Stories" variant="default" className="border-[#7c3aed] shadow-lg">
          <Hub.CardGrid columns={featured.length === 1 ? 1 : 2}>
            {featured.map((a) => (
              <Hub.Card
                key={a.slug}
                href={a.slug}
                title={a.title}
                description={a.description}
                thumbnail={a.imageUrl}
                publishedAt={a.publishDate}
              />
            ))}
          </Hub.CardGrid>
        </Hub.Section>
      )}

      {latest.length > 0 && (
        <Hub.Section title="Latest Creator Coverage" variant="card">
          <Hub.CardGrid columns={3}>
            {latest.map((a) => (
              <Hub.Card
                key={a.slug}
                href={a.slug}
                title={a.title}
                description={a.description}
                thumbnail={a.imageUrl}
                publishedAt={a.publishDate}
              />
            ))}
          </Hub.CardGrid>
        </Hub.Section>
      )}

      {articles.length === 0 && (
        <Hub.Section title="Creator Coverage" variant="card">
          <p className="text-gray-500 text-sm py-8 text-center">
            More creator stories coming soon. Check the{' '}
            <a href="/creator" className="text-blue-600 hover:text-blue-800 underline">
              Creator Hub
            </a>{' '}
            for profiles.
          </p>
        </Hub.Section>
      )}
    </Hub>
  );
}
