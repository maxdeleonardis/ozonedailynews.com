import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

// Inline hub — no Supabase sync. Content lives in the codebase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/switch2';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Nintendo Switch 2 | Release Date, Price, Games & Pre-Order',
  description:
    'Nintendo Switch 2 launches June 5, 2026 at $449.99. Full hub: launch games, pre-order guide, specs, GameChat, Joy-Con 2, and backwards compatibility.',
  keywords: [
    'Nintendo Switch 2',
    'Nintendo Switch 2 release date',
    'Nintendo Switch 2 price',
    'Nintendo Switch 2 games',
    'Nintendo Switch 2 pre-order',
    'Nintendo Switch 2 specs',
    'Nintendo Switch 2 GameChat',
    'Nintendo Switch 2 Joy-Con 2',
    'Nintendo Switch 2 backwards compatible',
    'Switch 2 launch date June 2026',
    'Nintendo Switch 2 4K',
    'Switch 2 vs Switch specs',
    'Mario Kart World Switch 2',
    'Donkey Kong Bananza Switch 2',
    'Nintendo 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Nintendo Switch 2 | Release Date, Price & Full Guide 2026',
    description:
      'Everything confirmed about Nintendo Switch 2. Launches June 5, 2026 at $449.99. Mario Kart World, Donkey Kong Bananza, GameChat, 4K docked output via DLSS.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Gaming Desk'],
    publishedTime: '2026-04-29T12:00:00Z',
    modifiedTime: '2026-04-29T12:00:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Nintendo Switch 2 console and Joy-Con 2 controllers' }],
    tags: ['Nintendo Switch 2', 'Nintendo', 'Gaming', 'Console', 'Launch 2026'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nintendo Switch 2 | June 5, 2026 | $449.99 | Full Guide',
    description:
      'Launch date, price, every confirmed game, pre-order details, Joy-Con 2 mouse mode, GameChat, and 4K docked specs. Everything confirmed for Switch 2.',
    images: [OG_IMAGE],
  },
};

export default function Switch2HubPage() {
  return (
    <NewsArticle
      title="Nintendo Switch 2 | Complete Hub | Release Date, Price, Games"
      subtitle="Everything confirmed about the Nintendo Switch 2 ahead of its June 5, 2026 launch"
      category="Gaming"
      categoryColor="red"
      topicTag="gaming"
      publishDate="April 29, 2026"
      readTime="8 min read"
      author={{ name: 'ObjectWire Gaming Desk', authorSlug: 'objectwire-gaming-desk' }}
      tags={['Nintendo Switch 2', 'Nintendo', 'Mario Kart World', 'Donkey Kong Bananza', 'Gaming']}
      thumbnail={{ src: OG_IMAGE, alt: 'Nintendo Switch 2 console with Joy-Con 2 controllers' }}
      slug="video-games-switch2"
      url={SLUG}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Video Games', item: '/video-games' },
        { name: 'Nintendo Switch 2', item: '/video-games/switch2' },
      ]}
      moreFromHub={[
        { slug: 'video-games-switch2-nintendo-switch-2-pre-order-guide', title: 'Nintendo Switch 2 Pre-Order Guide | Where to Buy, Bundles, Price', url: '/video-games/switch2/nintendo-switch-2-pre-order-guide', publishDate: 'April 29, 2026', category: 'Gaming' },
        { slug: 'video-games-switch2-nintendo-switch-2-launch-games', title: 'Nintendo Switch 2 Launch Games | Full List, Mario Kart World, Donkey Kong Bananza', url: '/video-games/switch2/nintendo-switch-2-launch-games', publishDate: 'April 29, 2026', category: 'Gaming' },
        { slug: 'video-games-switch2-pokemon-pokopia', title: 'Pokemon Pokopia Review Scores | Highest-Rated Pokemon Game Ever on Switch 2', url: '/video-games/switch2/pokemon-pokopia', publishDate: 'March 2026', category: 'Gaming' },
        { slug: 'video-games-switch2-super-mario-wonder-switch2-edition-bellabel-park', title: 'Super Mario Bros. Wonder Switch 2 Edition | Bellabel Park', url: '/video-games/switch2/super-mario-wonder-switch2-edition-bellabel-park', publishDate: 'March 26, 2026', category: 'Gaming' },
      ]}
      moreFromHubLabel="Nintendo Switch 2 Coverage"
      moreFromHubHref="/video-games/switch2"
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Nintendo Switch 2 launches <strong>June 5, 2026</strong> worldwide at a retail price of{' '}
          <strong>$449.99 USD</strong>. The successor to the original Switch and Switch OLED is Nintendo's first new
          console since 2017, featuring a larger 7.9-inch display, DLSS-powered 4K output in docked mode, and a
          redesigned Joy-Con 2 with a new "mouse mode" capability. Pre-orders are open now at Nintendo's official
          store, Best Buy, GameStop, Target, Amazon, and Walmart.
        </p>

        <p>
          Nintendo first revealed the console on January 16, 2025 via a teaser video. A full Nintendo Direct on
          April 2, 2025 confirmed the hardware specifications, launch lineup, pricing, and the new GameChat social
          feature. The June 5 global release is simultaneous across North America, Europe, Japan, and Australia.
        </p>

        <h2 id="switch2-specs">Switch 2 Specs | What Is Actually Different</h2>

        <p>
          The Switch 2 is a significant hardware upgrade over the original Switch. The handheld screen grows from
          6.2 inches to <strong>7.9 inches</strong>, and the panel is an LCD with improved brightness. In docked
          mode, the console uses{' '}
          <a
            href="https://www.nvidia.com/en-us/geforce/technologies/dlss/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            NVIDIA DLSS upscaling
          </a>{' '}
          to output at 4K resolution on compatible TVs. In handheld mode it targets 1080p, with 120fps support at
          720p in select titles.
        </p>

        <p>
          The new Joy-Con 2 controllers attach magnetically (replacing the rail slide mechanism) and include a
          new <strong>C button</strong> for accessing GameChat. The most notable hardware addition is{' '}
          <strong>mouse mode</strong>: the Joy-Con 2 underside contains an optical sensor so both controllers can
          function as a wireless mouse on any flat surface, enabling cursor-driven gameplay and menu navigation in
          supported titles.
        </p>

        <p>
          The kickstand is now full-width (spanning the entire console back), a direct response to the original's
          narrow single-point kickstand. USB-C ports are located on both the top and bottom of the unit for
          flexible charging positions. The console ships with a larger dock with a wider air vent to handle
          increased thermal output at 4K.
        </p>

        <h2 id="switch2-price">Switch 2 Price | Console, Bundles, and Accessories</h2>

        <p>
          The Nintendo Switch 2 base console retails for <strong>$449.99</strong> and includes the console, a
          dock, two Joy-Con 2 controllers, Joy-Con 2 straps, an HDMI cable, and an AC adapter.
        </p>

        <p>
          A <strong>Mario Kart World bundle</strong> ships simultaneously at <strong>$499.99</strong>, pairing the
          console with a download code for Mario Kart World. Joy-Con 2 controllers are sold separately as a pair
          at $79.99. The Nintendo Switch 2 Pro Controller is available at $79.99 and supports the full button
          layout with enhanced rumble.
        </p>

        <p>
          For owners of Switch 1 games, Nintendo confirmed that most Switch 1 physical game cards are
          backwards compatible, though a small number of titles require a software compatibility update. Digital
          library transfers are supported for Nintendo Account holders. Nintendo Switch Online and the Expansion
          Pack tier remain required for online multiplayer and the online GameChat features.
        </p>

        <h2 id="switch2-gamechat">GameChat | Voice, Video, and Group Play</h2>

        <p>
          GameChat is Nintendo's answer to Discord and PlayStation Party Chat. The feature is accessed via the
          C button on Joy-Con 2 and supports voice chat across any game, along with optional video chat using a
          separately sold Nintendo Switch 2 Camera accessory. Groups of up to eight players can join a GameChat
          session, and the feature integrates with Nintendo Switch Online for cross-game communication.
        </p>

        <p>
          This is the first time Nintendo has built native voice chat into the console itself rather than
          routing players to a companion smartphone app, a persistent criticism of the original Switch.
        </p>

        <h2 id="switch2-launch-games">Launch Games | Mario Kart World and Donkey Kong Bananza</h2>

        <p>
          Two first-party Nintendo titles launch on <strong>June 5, 2026</strong> alongside the console.{' '}
          <Link href="/video-games/switch2/nintendo-switch-2-launch-games" className="text-blue-600 hover:text-blue-800 underline">
            See the full Nintendo Switch 2 launch games list
          </Link>{' '}
          for every confirmed title including third-party releases.
        </p>

        <p>
          <strong>Mario Kart World</strong> ($79.99) is the first open-world Mario Kart, featuring 24-player
          online races across interconnected courses rather than individual track selections. It supports 4K 60fps
          in docked mode and is the fastest-selling Nintendo launch title since the original Switch.{' '}
          <strong>Donkey Kong Bananza</strong> is a 2D/3D hybrid platformer returning the franchise to
          center-stage after a decade absence, featuring Donkey Kong's fist-pounding mechanics that deform the
          environment in real time.
        </p>

        <p>
          Pokémon Pokopia, covered in detail in our{' '}
          <Link href="/video-games/switch2/pokemon-pokopia" className="text-blue-600 hover:text-blue-800 underline">
            Pokémon Pokopia review score analysis
          </Link>
          , scored 93 on OpenCritic and 90 on Metacritic, making it the highest-rated Pokémon game of all time
          and an early showcase for what Switch 2 hardware enables. The console&apos;s first weeks are the
          strongest first-party Nintendo launch lineup since the Wii.
        </p>

        <h2 id="switch2-pre-order">Pre-Order | Where to Buy Right Now</h2>

        <p>
          Pre-orders for Nintendo Switch 2 are open across all major retailers.{' '}
          <Link href="/video-games/switch2/nintendo-switch-2-pre-order-guide" className="text-blue-600 hover:text-blue-800 underline">
            Full pre-order guide with retailer links, bundle options, and accessory pricing
          </Link>.
        </p>

        <p>
          Nintendo&apos;s own store offers a direct pre-order without scalper markups. Stock has been
          constrained at physical retail, and units already sold out once in early April at some chains. Digital
          pre-orders guarantee day-one access without shipping delays. Best Buy and GameStop offer in-store
          pickup options for June 5.
        </p>

        <h2 id="switch2-backwards-compat">Backwards Compatibility | Which Switch 1 Games Work</h2>

        <p>
          Nintendo confirmed that the vast majority of Nintendo Switch 1 game cards are backwards compatible with
          Switch 2. The console reads Switch 1 cartridges directly. A small number of titles require a software
          update to function correctly, and Nintendo maintains a compatibility checker on its official website
          for specific titles.
        </p>

        <p>
          Digital games purchased on a Nintendo Account carry over to Switch 2. Nintendo Switch Online
          subscription-based games from the NES, SNES, N64, Game Boy, GBA, and Sega Genesis libraries remain
          accessible. Expansion Pack subscribers retain access to the N64 and Sega library on Switch 2.
        </p>

        <p>
          For a full breakdown of the Switch 2 first-party titles see{' '}
          <Link href="/video-games/nintendo" className="text-blue-600 hover:text-blue-800 underline">
            our Nintendo hub
          </Link>{' '}
          and the{' '}
          <Link href="/video-games/switch2/nintendo-switch-2-launch-games" className="text-blue-600 hover:text-blue-800 underline">
            Switch 2 launch games article
          </Link>.
        </p>

      </div>
    </NewsArticle>
  );
}
