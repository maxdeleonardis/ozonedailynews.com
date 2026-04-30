import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

// Inline article — no Supabase sync. Content lives in the codebase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/switch2/nintendo-switch-2-launch-games';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Nintendo Switch 2 Launch Games | Full List, Mario Kart World',
  description:
    'Complete Nintendo Switch 2 launch games list for June 5, 2026. Mario Kart World, Donkey Kong Bananza, Pokemon Pokopia, Super Mario Bros Wonder Switch 2 Edition, and every confirmed title.',
  keywords: [
    'Nintendo Switch 2 launch games',
    'Nintendo Switch 2 games list',
    'Mario Kart World',
    'Donkey Kong Bananza',
    'Pokemon Pokopia Switch 2',
    'Switch 2 launch titles June 2026',
    'Nintendo Switch 2 first-party games',
    'Nintendo Switch 2 game lineup',
    'best Nintendo Switch 2 games',
    'Nintendo Switch 2 exclusive games',
    'Switch 2 third-party games',
    'Mario Kart World price',
    'Donkey Kong Bananza release date',
    'Nintendo Switch 2 Welcome Tour',
    'Switch 2 new games 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Nintendo Switch 2 Launch Games | Full List June 5, 2026',
    description:
      'Every game confirmed for Nintendo Switch 2 launch. Mario Kart World at $79.99, Donkey Kong Bananza, Pokemon Pokopia with 93 OpenCritic, and all confirmed third-party titles.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Gaming Desk'],
    publishedTime: '2026-04-29T13:00:00Z',
    modifiedTime: '2026-04-29T13:00:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Nintendo Switch 2 launch games lineup 2026' }],
    tags: ['Nintendo Switch 2', 'Mario Kart World', 'Donkey Kong', 'Nintendo', 'Gaming'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nintendo Switch 2 Launch Games | Every Confirmed Title',
    description:
      'Mario Kart World, Donkey Kong Bananza, Pokemon Pokopia, and all confirmed third-party titles launching with Switch 2 on June 5, 2026.',
    images: [OG_IMAGE],
  },
};

export default function Switch2LaunchGamesPage() {
  return (
    <NewsArticle
      title="Nintendo Switch 2 Launch Games | Full List for June 5, 2026"
      subtitle="Every first-party and third-party game confirmed for the Nintendo Switch 2 launch window"
      category="Gaming"
      categoryColor="red"
      topicTag="gaming"
      publishDate="April 29, 2026"
      readTime="6 min read"
      author={{ name: 'ObjectWire Gaming Desk', authorSlug: 'objectwire-gaming-desk' }}
      tags={['Nintendo Switch 2', 'Mario Kart World', 'Donkey Kong Bananza', 'Pokemon Pokopia', 'Gaming']}
      thumbnail={{ src: OG_IMAGE, alt: 'Nintendo Switch 2 launch games 2026' }}
      slug="video-games-switch2-nintendo-switch-2-launch-games"
      url={SLUG}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Video Games', item: '/video-games' },
        { name: 'Nintendo Switch 2', item: '/video-games/switch2' },
        { name: 'Launch Games', item: SLUG },
      ]}
      moreFromHub={[
        { slug: 'video-games-switch2', title: 'Nintendo Switch 2 | Complete Hub | Release Date, Price, Games', url: '/video-games/switch2', publishDate: 'April 29, 2026', category: 'Gaming' },
        { slug: 'video-games-switch2-nintendo-switch-2-pre-order-guide', title: 'Nintendo Switch 2 Pre-Order Guide', url: '/video-games/switch2/nintendo-switch-2-pre-order-guide', publishDate: 'April 29, 2026', category: 'Gaming' },
        { slug: 'video-games-switch2-pokemon-pokopia', title: 'Pokemon Pokopia Review Scores | 93 OpenCritic', url: '/video-games/switch2/pokemon-pokopia', publishDate: 'March 2026', category: 'Gaming' },
        { slug: 'video-games-switch2-super-mario-wonder-switch2-edition-bellabel-park', title: 'Super Mario Bros. Wonder Switch 2 Edition | Bellabel Park', url: '/video-games/switch2/super-mario-wonder-switch2-edition-bellabel-park', publishDate: 'March 26, 2026', category: 'Gaming' },
      ]}
      moreFromHubLabel="Nintendo Switch 2"
      moreFromHubHref="/video-games/switch2"
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Nintendo Switch 2 launches <strong>June 5, 2026</strong> with the strongest first-party lineup Nintendo
          has shipped at any console launch in two decades. Two flagship first-party titles are available on day
          one: <strong>Mario Kart World</strong> at $79.99 and <strong>Donkey Kong Bananza</strong>. Several
          major third-party publishers have committed to launch-window titles, and the console&apos;s backwards
          compatibility with Switch 1 games means owners already have a substantial library on day one.
        </p>

        <p>
          For full hardware specs, price, and where to pre-order, see the{' '}
          <Link href="/video-games/switch2" className="text-blue-600 hover:text-blue-800 underline">
            Nintendo Switch 2 hub
          </Link>.
        </p>

        <h2 id="launch-day-titles">Day-One Launch Titles | June 5, 2026</h2>

        <p>
          These titles are confirmed for release on the Switch 2 launch date.
        </p>

        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Publisher</th>
              <th>Price</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Mario Kart World</strong></td>
              <td>Nintendo</td>
              <td>$79.99</td>
              <td>Open-world, 24-player online, 4K 60fps docked. Also in $499.99 bundle.</td>
            </tr>
            <tr>
              <td><strong>Donkey Kong Bananza</strong></td>
              <td>Nintendo</td>
              <td>$59.99</td>
              <td>2D/3D hybrid platformer. Real-time environment deformation.</td>
            </tr>
            <tr>
              <td><strong>Nintendo Switch 2 Welcome Tour</strong></td>
              <td>Nintendo</td>
              <td>Free</td>
              <td>Tech showcase and hardware demo. Demonstrates Joy-Con 2 mouse mode and GameChat.</td>
            </tr>
          </tbody>
        </table>

        <h2 id="mario-kart-world">Mario Kart World | Open-World Racing on Switch 2</h2>

        <p>
          Mario Kart World is the most significant departure in the franchise since Mario Kart 8. Rather than
          individual race tracks, the game features a single interconnected open world where courses are
          carved through a living environment. Players race across the full map, moving between biomes, cities,
          and landmarks in a continuous space.
        </p>

        <p>
          The game supports <strong>24-player online races</strong>, up from 12 in Mario Kart 8 Deluxe, and
          runs at 4K 60fps in docked mode on Switch 2. A free-roam mode allows exploration outside of race
          events. Nintendo has confirmed post-launch content, including additional courses and characters.
        </p>

        <p>
          At <strong>$79.99</strong>, Mario Kart World is priced higher than previous Nintendo first-party
          titles, which have typically been $59.99. Nintendo stated the pricing reflects the scope of the
          open-world design and the post-launch content roadmap. It is included in the $499.99 console bundle
          as a download code.
        </p>

        <h2 id="donkey-kong-bananza">Donkey Kong Bananza | The Franchise Returns</h2>

        <p>
          Donkey Kong Bananza marks the franchise&apos;s first major release since Donkey Kong Country: Tropical
          Freeze in 2014. Developed internally at Nintendo, the game is a 2D/3D hybrid platformer where Donkey
          Kong&apos;s fist-pounding and terrain deformation are the core mechanics. Environments are destructible
          in real time, with DK capable of punching through soil, rock, and structures to create new paths
          or uncover secrets.
        </p>

        <p>
          Nintendo has positioned Bananza alongside Mario Kart World as the two headline launch titles for
          Switch 2. The game&apos;s visual fidelity, particularly the deformation physics, has been cited as a
          demonstration of the Switch 2 hardware&apos;s CPU headroom over the original Switch.
        </p>

        <h2 id="pokemon-pokopia">Pokemon Pokopia | Highest-Rated Pokemon Game Ever</h2>

        <p>
          While not a day-one Switch 2 launch title, Pokemon Pokopia arrived in the console&apos;s early
          window and has become one of the most critically acclaimed titles on the platform. It scored{' '}
          <strong>93 on OpenCritic</strong> and <strong>90 on Metacritic</strong>, the highest marks ever
          recorded for a Pokemon title. Full details in the{' '}
          <Link href="/video-games/switch2/pokemon-pokopia" className="text-blue-600 hover:text-blue-800 underline">
            Pokemon Pokopia review score analysis
          </Link>.
        </p>

        <h2 id="super-mario-wonder">Super Mario Bros. Wonder Switch 2 Edition</h2>

        <p>
          Nintendo released an expanded version of the 2023 Switch 1 hit with new content for Switch 2.
          Super Mario Bros. Wonder Switch 2 Edition launched March 26, 2026 and added Bellabel Park,
          12-player online, and 70+ training courses. A $20 upgrade path is available for owners of the
          original Switch 1 version. Full breakdown in the{' '}
          <Link href="/video-games/switch2/super-mario-wonder-switch2-edition-bellabel-park" className="text-blue-600 hover:text-blue-800 underline">
            Super Mario Bros. Wonder Switch 2 Edition article
          </Link>.
        </p>

        <h2 id="third-party-launch">Third-Party and Indie Launch Window Titles</h2>

        <p>
          Alongside Nintendo first-party titles, multiple third-party publishers announced Switch 2
          launch-window releases. These titles are confirmed for June 5 or within the launch window
          (within 60 days of the console&apos;s release).
        </p>

        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Developer / Publisher</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Cyberpunk 2077</strong> (Switch 2 Edition)</td>
              <td>CD Projekt Red</td>
              <td>Enhanced port with ray tracing and 60fps handheld. First time on Nintendo hardware.</td>
            </tr>
            <tr>
              <td><strong>EA Sports FC 26</strong></td>
              <td>EA Sports</td>
              <td>Launch-day multiplatform release on Switch 2.</td>
            </tr>
            <tr>
              <td><strong>Hogwarts Legacy</strong> (Switch 2 Edition)</td>
              <td>Portkey Games / WB</td>
              <td>Enhanced port with improved load times and handheld resolution.</td>
            </tr>
            <tr>
              <td><strong>Elden Ring</strong> (Switch 2 Edition)</td>
              <td>FromSoftware / Bandai Namco</td>
              <td>30fps docked, 30fps handheld. Confirmed for Switch 2.</td>
            </tr>
          </tbody>
        </table>

        <p>
          Nintendo has also confirmed that Fortnite, Minecraft, and Roblox will be available on Switch 2 from
          day one, all as free-to-play titles with full cross-platform play enabled.
        </p>

        <h2 id="switch1-backwards-compat">Switch 1 Games on Switch 2 | Your Existing Library</h2>

        <p>
          One of the practical strengths of the Switch 2 launch is backwards compatibility. Most Switch 1
          physical game cards work on Switch 2 without modification. Digital games linked to your Nintendo
          Account transfer automatically. This means owners of Switch 1 carry forward their entire existing
          library, which includes hundreds of titles.
        </p>

        <p>
          A Nintendo Switch Online subscription remains required for online play. Digital library games from
          the original Switch&apos;s NSO retro catalog are included on Switch 2 for active subscribers.
        </p>

        <p>
          For pricing and where to buy the console itself, see the{' '}
          <Link href="/video-games/switch2/nintendo-switch-2-pre-order-guide" className="text-blue-600 hover:text-blue-800 underline">
            Nintendo Switch 2 pre-order guide
          </Link>.
        </p>

      </div>
    </NewsArticle>
  );
}
