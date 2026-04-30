import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

// Inline article — no Supabase sync. Content lives in the codebase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/switch2/nintendo-switch-2-pre-order-guide';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Nintendo Switch 2 Pre-Order Guide | Where to Buy, Price, Bundles',
  description:
    'Nintendo Switch 2 pre-orders are open now. Console: $449.99. Mario Kart World bundle: $499.99. Buy at Nintendo, Best Buy, GameStop, Amazon, Target, and Walmart before June 5, 2026.',
  keywords: [
    'Nintendo Switch 2 pre-order',
    'where to buy Nintendo Switch 2',
    'Nintendo Switch 2 pre-order 2026',
    'Nintendo Switch 2 in stock',
    'Nintendo Switch 2 price $449.99',
    'Nintendo Switch 2 Mario Kart World bundle',
    'Nintendo Switch 2 Best Buy',
    'Nintendo Switch 2 GameStop',
    'Nintendo Switch 2 Amazon',
    'Nintendo Switch 2 Walmart',
    'Nintendo Switch 2 Target',
    'Nintendo Switch 2 bundle deals',
    'Nintendo Switch 2 launch June 5 2026',
    'Nintendo Switch 2 accessories',
    'Joy-Con 2 price',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Nintendo Switch 2 Pre-Order Guide | Bundles, Price, Where to Buy',
    description:
      'Switch 2 launches June 5, 2026 at $449.99. Mario Kart World bundle $499.99. Pre-orders live at Nintendo, Best Buy, GameStop, Amazon, Target, Walmart. Stock is limited.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Gaming Desk'],
    publishedTime: '2026-04-29T12:00:00Z',
    modifiedTime: '2026-04-29T12:00:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Nintendo Switch 2 console pre-order guide' }],
    tags: ['Nintendo Switch 2', 'Nintendo', 'Pre-Order', 'Gaming', 'Launch 2026'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nintendo Switch 2 Pre-Order | $449.99 | Launches June 5',
    description:
      'Pre-orders live now. Mario Kart World bundle $499.99. Best Buy, GameStop, Amazon, Target, and Walmart all have units. Stock is tight.',
    images: [OG_IMAGE],
  },
};

export default function Switch2PreOrderPage() {
  return (
    <NewsArticle
      title="Nintendo Switch 2 Pre-Order Guide | Where to Buy, Bundles, Price"
      subtitle="Every retailer link, bundle option, accessory price, and what to know before June 5, 2026"
      category="Gaming"
      categoryColor="red"
      topicTag="gaming"
      publishDate="April 29, 2026"
      readTime="5 min read"
      author={{ name: 'ObjectWire Gaming Desk', authorSlug: 'objectwire-gaming-desk' }}
      tags={['Nintendo Switch 2', 'Nintendo', 'Pre-Order', 'Mario Kart World', 'Gaming']}
      thumbnail={{ src: OG_IMAGE, alt: 'Nintendo Switch 2 pre-order guide' }}
      slug="video-games-switch2-nintendo-switch-2-pre-order-guide"
      url={SLUG}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Video Games', item: '/video-games' },
        { name: 'Nintendo Switch 2', item: '/video-games/switch2' },
        { name: 'Pre-Order Guide', item: SLUG },
      ]}
      moreFromHub={[
        { slug: 'video-games-switch2', title: 'Nintendo Switch 2 | Complete Hub | Release Date, Price, Games', url: '/video-games/switch2', publishDate: 'April 29, 2026', category: 'Gaming' },
        { slug: 'video-games-switch2-nintendo-switch-2-launch-games', title: 'Nintendo Switch 2 Launch Games | Full List', url: '/video-games/switch2/nintendo-switch-2-launch-games', publishDate: 'April 29, 2026', category: 'Gaming' },
      ]}
      moreFromHubLabel="Nintendo Switch 2"
      moreFromHubHref="/video-games/switch2"
    >
      <div className="prose prose-lg max-w-none">

        <p>
          Nintendo Switch 2 pre-orders are live right now ahead of the console&apos;s <strong>June 5, 2026</strong>{' '}
          global launch. The base console is <strong>$449.99</strong>. A Mario Kart World bundle is available at
          most retailers for <strong>$499.99</strong>. Stock has been constrained since pre-orders opened in April,
          and several retailers have already sold out once. If you want a unit on launch day, pre-ordering now is
          the most reliable option.
        </p>

        <p>
          This is the full{' '}
          <Link href="/video-games/switch2" className="text-blue-600 hover:text-blue-800 underline">
            Nintendo Switch 2
          </Link>{' '}
          pre-order guide. Below: every retailer, bundle breakdowns, accessory pricing, and what to do if stock
          runs out before June 5.
        </p>

        <h2 id="preorder-retailers">Where to Pre-Order Nintendo Switch 2</h2>

        <p>
          Pre-orders are available at the following retailers. Nintendo&apos;s own store has no scalper markup and
          ships directly. Third-party retail (Best Buy, GameStop, Target, Walmart, Amazon) all offer the standard
          MSRP pre-order, with in-store pickup options available at physical locations for day-one access without
          shipping delays.
        </p>

        <ul>
          <li>
            <a
              href="https://www.nintendo.com/us/store/hardware/switch-2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Nintendo Official Store
            </a>{' '}
            — Direct pre-order, ships June 5. No markup. Nintendo Account required.
          </li>
          <li>
            <a
              href="https://www.bestbuy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Best Buy
            </a>{' '}
            — In-store and online pre-order. In-store pickup available. My Best Buy members got early access.
          </li>
          <li>
            <a
              href="https://www.gamestop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              GameStop
            </a>{' '}
            — Pre-order online or in-store. PowerUp Rewards members had first access. Bundle deals available.
          </li>
          <li>
            <a
              href="https://www.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Amazon
            </a>{' '}
            — Pre-order with Prime delivery guarantee for June 5 arrival. Add to wishlist for restock alerts.
          </li>
          <li>
            <a
              href="https://www.target.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Target
            </a>{' '}
            — Pre-order online or reserve in-store. Target Circle members get 5% off accessories.
          </li>
          <li>
            <a
              href="https://www.walmart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Walmart
            </a>{' '}
            — Online pre-order and in-store launch-day pickup (limited units per location).
          </li>
        </ul>

        <h2 id="preorder-bundles">Switch 2 Bundles | Which One to Buy</h2>

        <p>
          Nintendo is shipping two configurations at launch. The base console is the better value if you plan to
          buy multiple games. The Mario Kart World bundle saves you money if Mario Kart World is one of your
          target games, since $499.99 for console plus the game undercuts buying them separately at $529.98 total.
        </p>

        <table>
          <thead>
            <tr>
              <th>Configuration</th>
              <th>Price</th>
              <th>What&apos;s Included</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nintendo Switch 2 (Base)</td>
              <td>$449.99</td>
              <td>Console, dock, two Joy-Con 2, straps, HDMI cable, AC adapter</td>
            </tr>
            <tr>
              <td>Nintendo Switch 2 + Mario Kart World</td>
              <td>$499.99</td>
              <td>Everything in base, plus Mario Kart World download code</td>
            </tr>
          </tbody>
        </table>

        <p>
          There is no physical game card version of the Mario Kart World bundle. The game is included as a
          download code inside the box. If you want the physical cartridge, purchase Mario Kart World separately
          at $79.99 alongside the base console.
        </p>

        <h2 id="preorder-accessories">Accessory Pricing | Joy-Con 2, Pro Controller, Camera</h2>

        <p>
          Nintendo Switch 2 accessories are available to pre-order alongside the console. The Joy-Con 2 include
          the new mouse mode sensor and C button for GameChat.
        </p>

        <table>
          <thead>
            <tr>
              <th>Accessory</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Joy-Con 2 pair</td>
              <td>$79.99</td>
            </tr>
            <tr>
              <td>Joy-Con 2 strap pair</td>
              <td>$19.99</td>
            </tr>
            <tr>
              <td>Nintendo Switch 2 Pro Controller</td>
              <td>$79.99</td>
            </tr>
            <tr>
              <td>Nintendo Switch 2 Camera (for GameChat video)</td>
              <td>$49.99</td>
            </tr>
            <tr>
              <td>Nintendo Switch 2 Carrying Case</td>
              <td>$29.99</td>
            </tr>
            <tr>
              <td>Nintendo Switch Online + Expansion Pack (1 year)</td>
              <td>$49.99/yr individual | $79.99/yr family</td>
            </tr>
          </tbody>
        </table>

        <h2 id="preorder-stock">Stock Alert | What to Do If Sold Out</h2>

        <p>
          Several pre-order waves have already sold out. Nintendo has confirmed it is producing Switch 2 in higher
          volumes than original Switch at launch, but demand has outpaced supply at multiple retailers. Steps to
          take if your preferred retailer is out of stock:
        </p>

        <ul>
          <li>Set up a stock alert at{' '}
            <a href="https://nowinstock.net" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              NowInStock.net
            </a>{' '}
            which aggregates Nintendo Switch 2 restocks across all major US retailers in real time.
          </li>
          <li>Enable alerts on Amazon and Target&apos;s wishlist feature for automatic restock notifications.</li>
          <li>Check Nintendo&apos;s official store at midnight Eastern on restock days, as Nintendo pushes direct
            inventory drops without advance announcement.</li>
          <li>Avoid third-party marketplace listings above MSRP. Nintendo has confirmed additional inventory
            will be available through launch week.</li>
        </ul>

        <p>
          Nintendo has stated it expects to have Switch 2 units available at retail through launch week and beyond,
          in contrast to the Switch 1 shortage that persisted for over 18 months after its March 2017 launch.
        </p>

        <h2 id="switch2-what-to-know">What to Know Before Pre-Ordering</h2>

        <p>
          A few things worth confirming before you complete a pre-order:
        </p>

        <ul>
          <li>
            <strong>Backwards compatibility:</strong> Most Nintendo Switch 1 physical game cards work on Switch 2.
            Check Nintendo&apos;s compatibility tool for specific titles. Your existing Nintendo Switch digital
            library transfers to Switch 2 via your Nintendo Account.
          </li>
          <li>
            <strong>Nintendo Switch Online:</strong> An active Nintendo Switch Online subscription is required
            for online multiplayer. The Expansion Pack tier ($49.99/yr individual) is needed for GameChat and
            access to the retro gaming library.
          </li>
          <li>
            <strong>Joy-Con 2 in the box:</strong> Two Joy-Con 2 controllers are included in the base console
            package. You do not need to purchase them separately for single-player or local co-op play.
          </li>
          <li>
            <strong>No 3D or VR:</strong> Nintendo has not announced any VR or stereoscopic 3D support for
            Switch 2 at launch.
          </li>
        </ul>

        <p>
          For the full hardware breakdown, display specs, and everything confirmed about the platform, see the{' '}
          <Link href="/video-games/switch2" className="text-blue-600 hover:text-blue-800 underline">
            Nintendo Switch 2 hub
          </Link>. For launch titles, see the{' '}
          <Link href="/video-games/switch2/nintendo-switch-2-launch-games" className="text-blue-600 hover:text-blue-800 underline">
            Switch 2 launch games guide
          </Link>.
        </p>

      </div>
    </NewsArticle>
  );
}
