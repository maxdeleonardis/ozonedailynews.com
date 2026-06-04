import type { Metadata } from 'next';
import Link from 'next/link';
import { Hub } from '@/components/Hub';

export const dynamic = 'force-dynamic';

const SLUG = '/anime';

export const metadata: Metadata = {
  title: 'Anime News & Series Guides | OzoneNews 2026',
  description: 'Anime coverage at OzoneNews: Jujutsu Kaisen, My Hero Academia, Demon Slayer, One Piece, Dragon Ball and more. Season guides, arc breakdowns, and release',
  keywords: [
    'anime news 2026',
    'Jujutsu Kaisen',
    'My Hero Academia',
    'Demon Slayer',
    'One Piece',
    'anime season guide',
    'anime release calendar 2026',
    'shonen anime',
    'anime hub',
  ],
  alternates: { canonical: `https://www.OzoneNews.org${SLUG}` },
  openGraph: {
    title: 'Anime News & Series Guides | OzoneNews 2026',
    description: 'Season guides, arc breakdowns, and release calendars for the biggest anime series in 2026.',
    type: 'website',
    url: `https://www.OzoneNews.org${SLUG}`,
    siteName: 'OzoneNews',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anime Hub',
    description: 'Jujutsu Kaisen, MHA, Demon Slayer, One Piece and more.',
  },
};

export default function AnimePage() {
  return (
    <Hub
      badge="Anime"
      badgeColor="from-purple-600 to-pink-600"
      title="Anime"
      subtitle="Series guides, arc breakdowns, and season coverage for the biggest anime running in 2026"
      updatedAt="2026-05-21"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Anime Hub | OzoneNews',
        description: 'Anime coverage at OzoneNews including Jujutsu Kaisen, My Hero Academia, Demon Slayer, One Piece, and Dragon Ball.',
        url: 'https://www.OzoneNews.org/anime',
        publisher: {
          '@type': 'NewsMediaOrganization',
          name: 'OzoneNews',
          url: 'https://www.OzoneNews.org',
        },
      }}
    >
      {/* Quick Stats */}
      <Hub.InfoGrid
        title="Anime at a Glance"
        icon="📺"
        columns={4}
        items={[
          { label: 'Series Covered', value: '6+' },
          { label: 'Active Seasons', value: 'Spring 2026' },
          { label: 'Top Series', value: 'Jujutsu Kaisen' },
          { label: 'Genre Focus', value: 'Shonen' },
        ]}
      />

      {/* Featured Series */}
      <Hub.Section title="Featured Series" icon="⭐" id="featured" level={2}>
        <Hub.CardGrid>
          <Hub.Card
            href="/anime/jujutsu-kaisen"
            title="Jujutsu Kaisen"
            description="Yuji Itadori, cursed energy, and the complete arc-by-arc guide to Gege Akutami's flagship shonen. Season 3 coverage, Culling Game breakdown, and release calendar."
            badge="Deep Dive"
            emoji="🔵"
          />
          <Hub.Card
            href="/video-games/mha/ultra-rumble/season-16"
            title="My Hero Academia Ultra Rumble | Season 16"
            description="The battle royale adaptation of MHA with Season 16 character roster, patch notes, and ranked season breakdown."
            badge="Gaming"
            emoji="🦸"
          />
          <Hub.Card
            href="/anime"
            title="Demon Slayer | Infinity Castle Arc"
            description="The Infinity Castle arc is the most anticipated anime story of 2026. Guide coming soon."
            badge="Coming Soon"
            emoji="🗡️"
          />
          <Hub.Card
            href="/anime"
            title="One Piece | Egghead Arc Coverage"
            description="The Egghead Island arc and what it means for the final saga. Full breakdown coming soon."
            badge="Coming Soon"
            emoji="☠️"
          />
        </Hub.CardGrid>
      </Hub.Section>

      {/* Series Index */}
      <Hub.Section title="Series Guide Index" icon="📖" id="index" level={2}>
        <Hub.LinkGrid
          columns={4}
          items={[
            { href: '/anime/jujutsu-kaisen', label: 'Jujutsu Kaisen', emoji: '🔵' },
            { href: '/video-games/mha/ultra-rumble/season-16', label: 'My Hero Academia', emoji: '🦸' },
            { href: '/anime', label: 'Demon Slayer', emoji: '🗡️' },
            { href: '/anime', label: 'One Piece', emoji: '☠️' },
            { href: '/anime', label: 'Dragon Ball', emoji: '🟡' },
            { href: '/anime', label: 'Chainsaw Man', emoji: '⛓️' },
            { href: '/anime', label: 'Bleach TYBW', emoji: '⚔️' },
            { href: '/anime', label: 'Vinland Saga', emoji: '🪓' },
          ]}
        />
      </Hub.Section>

      {/* 2026 Anime Season Calendar */}
      <Hub.Section title="2026 Anime Release Calendar" icon="📅" id="calendar" level={2} variant="card">
        <Hub.Table
          columns={[
            { key: 'series', label: 'Series', bold: true },
            { key: 'studio', label: 'Studio' },
            { key: 'arc', label: 'Season / Arc' },
            { key: 'status', label: 'Status' },
          ]}
          rows={[
            { series: 'Jujutsu Kaisen', studio: 'MAPPA', arc: 'Season 3, Hidden Inventory + Culling Game', status: 'Airing' },
            { series: 'Demon Slayer', studio: 'ufotable', arc: 'Infinity Castle Arc (Film)', status: 'Coming 2026' },
            { series: 'One Piece', studio: 'Toei Animation', arc: 'Egghead Island', status: 'Airing' },
            { series: 'My Hero Academia', studio: 'Bones', arc: 'Final Arc', status: 'Completed' },
            { series: 'Dragon Ball Daima', studio: 'Toei Animation', arc: 'Season 1', status: 'Airing' },
            { series: 'Chainsaw Man', studio: 'MAPPA', arc: 'Season 2', status: 'TBA 2026' },
          ]}
        />
      </Hub.Section>

      {/* Why Anime */}
      <Hub.Section title="Why Anime Matters in 2026" icon="🌐" id="context" level={2} variant="highlight">
        <Hub.Prose>
          <p>
            Anime has become one of the most globally consumed entertainment formats of the 2020s. Crunchyroll reported over 13 million paid subscribers as of 2024, with viewership concentrated in North America, Europe, and Latin America as well as its historical markets in Japan and Southeast Asia. Netflix, Amazon Prime, and Disney Plus have all invested heavily in exclusive anime licensing and co-production deals, signaling mainstream media recognition of the format's audience pull.
          </p>
          <p>
            The dominant force in anime's global breakout has been the shonen genre, led by series from Shueisha's Weekly Shonen Jump magazine. <strong>Jujutsu Kaisen</strong> surpassed 100 million manga volumes in circulation in 2024, making it one of the fastest-selling manga in publishing history. <strong>Demon Slayer</strong> holds the record for highest-grossing anime film with the Mugen Train arc adaptation. <strong>One Piece</strong> remains the best-selling manga series of all time, with over 530 million copies sold globally.
          </p>
          <p>
            OzoneNews anime coverage focuses on series with confirmed airing schedules, arc-level breakdown guides for readers who want context without spoilers, and gaming crossover coverage where anime franchises extend into the video game market.
            Follow the full{' '}
            <Link href="/video-games" className="text-blue-600 hover:text-blue-800 underline">Video Games hub</Link>
            {' '}for anime-game crossover titles and our{' '}
            <Link href="/entertainment" className="text-blue-600 hover:text-blue-800 underline">Entertainment desk</Link>
            {' '}for industry news.
          </p>
        </Hub.Prose>
      </Hub.Section>

      {/* Related Hubs */}
      <Hub.Section title="Related OzoneNews Hubs" icon="🔗" id="related" level={2}>
        <Hub.CardGrid>
          <Hub.Card
            href="/video-games"
            title="Video Games Hub"
            description="GTA 6, Nintendo Switch 2, 007 First Light, and all major gaming coverage."
            emoji="🎮"
          />
          <Hub.Card
            href="/entertainment"
            title="Entertainment Desk"
            description="Streaming deals, studio news, and pop culture coverage."
            emoji="🎬"
          />
          <Hub.Card
            href="/tech"
            title="Tech Desk"
            description="AI, platforms, and the technology shaping content in 2026."
            emoji="💻"
          />
        </Hub.CardGrid>
      </Hub.Section>
    </Hub>
  );
}
