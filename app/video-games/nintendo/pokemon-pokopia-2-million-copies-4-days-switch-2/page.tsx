import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/video-games/nintendo/pokemon-pokopia-2-million-copies-4-days-switch-2';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title:
    'Pokémon Pokopia Sells 2.2M Copies in 4 Days, Shattering Spin-Off Records | ObjectWire',
  description:
    'The Pokémon Company confirmed Pokémon Pokopia sold 2.2 million units in its first four days on Nintendo Switch 2, with over 1 million copies sold in Japan alone. Nintendo stock surged 15% in 48 hours. Full sales breakdown.',
  keywords: [
    'Pokémon Pokopia sales 2.2 million',
    'Pokémon Pokopia launch week sales Nintendo Switch 2',
    'Pokémon spin-off record best selling',
    'Pokémon Pokopia Japan sales 1 million',
    'Nintendo Switch 2 launch sales March 2026',
    'Pokémon Pokopia vs Pokémon Stadium record',
    'Pokémon Pokopia stock Nintendo surge',
    'Pokémon Pokopia sold out physical',
    'Pokémon Pokopia Jefferies analyst',
    'Game Freak Omega Force Pokopia sales',
    'Pokémon cozy game Switch 2 2026',
    'best selling Pokémon spin-off history',
  ],
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: 'Pokémon Pokopia: 2.2M Sold in 4 Days — Nintendo Stock Up 15%',
    description:
      'The Pokémon Company confirms 2.2 million units sold in four days. Japan accounted for nearly 1 million copies. Physical stock sold out at Amazon, Currys, and Smyths. Analysts say it\'s on track to dethrone Pokémon Stadium as the best-selling spin-off in franchise history.',
    type: 'article',
    url: CANONICAL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-12T10:00:00Z',
    modifiedTime: '2026-03-12T10:00:00Z',
    section: 'Video Games',
    tags: ['Pokémon Pokopia', 'Nintendo', 'Switch 2', 'Sales Record', 'Game Freak', 'Omega Force', 'Video Games'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pokémon Pokopia Sells 2.2M in 4 Days — On Track to Beat Pokémon Stadium All-Time',
    description:
      '45% of sales from Japan alone. Physical copies sold out worldwide. Nintendo stock +15%. Jefferies: on track for best-selling Pokémon spin-off ever.',
  },
};

export default function PokopiaLaunchSalesPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Pokémon Pokopia Sells 2.2 Million Copies in 4 Days, Shattering Spin-Off Records"
        description="The Pokémon Company confirmed Pokémon Pokopia sold 2.2 million units in its first four days on Nintendo Switch 2. Over 1 million copies sold in Japan. Nintendo stock up 15% in 48 hours. Analysts say it could become the best-selling Pokémon spin-off in history."
        author="Conan Boyle"
        authorUrl="https://www.objectwire.org/authors/conan-boyle"
        publishedTime="2026-03-12T10:00:00Z"
        modifiedTime="2026-03-12T10:00:00Z"
        articleUrl={CANONICAL}
        section="Video Games"
        keywords={[
          'Pokémon Pokopia sales record',
          'Nintendo Switch 2 launch',
          'Pokémon spin-off record',
          'Game Freak Omega Force',
          'Nintendo stock surge',
          'Pokémon Pokopia Japan',
        ]}
      />

      <Breadcrumb
        items={[
          { name: 'Home', item: 'https://www.objectwire.org' },
          { name: 'Video Games', item: 'https://www.objectwire.org/video-games' },
          { name: 'Nintendo', item: 'https://www.objectwire.org/video-games/nintendo' },
          { name: 'Pokémon Pokopia Sales', item: CANONICAL },
        ]}
      />

      <NewsArticle
        title="Pokémon Pokopia Sells 2.2M Copies in 4 Days, Shattering Spin-Off Records"
        subtitle="The Pokémon Company's life-simulation spin-off for Nintendo Switch 2 has sold out physical copies worldwide, triggered a 15% Nintendo stock surge, and is tracking to become the best-selling Pokémon spin-off in franchise history."
        category="Nintendo"
        categoryColor="yellow"
        topicTag="gaming"
        publishDate="March 12, 2026"
        readTime="5 min read"
        author={{
          name: 'Conan Boyle',
          role: 'Founding Writer',
          authorSlug: 'conan-boyle',
          bio: "Conan Boyle is ObjectWire's founding writer, covering gaming, technology, and emerging culture from Austin, Texas.",
        }}
        tags={['PokémonPokopia', 'Nintendo', 'Switch2', 'SalesRecord', 'GameFreak', 'OmegaForce', 'Gaming2026']}
        url={SLUG}
        trending
      >

        {/* ── INTRO ─────────────────────────────────── */}
        <p>
          The Nintendo Switch 2 has found its first &quot;evergreen&quot; mega-hit. The Pokémon
          Company and Nintendo officially confirmed today, <strong>March 12, 2026</strong>, that{' '}
          <Link href="/video-games/switch2/pokemon-pokopia" className="text-yellow-700 hover:underline font-semibold">
            Pokémon Pokopia
          </Link>{' '}
          — the life-simulation spin-off co-developed by Game Freak and Koei Tecmo&apos;s Omega
          Force — has surpassed <strong>2.2 million units sold</strong> in its first four days of
          release.
        </p>
        <p>
          The game, which launched exclusively on Nintendo Switch 2 on{' '}
          <strong>March 5, 2026</strong>, has not only relieved investor concerns about the
          console&apos;s early software lineup but has triggered a{' '}
          <strong>15% surge in Nintendo&apos;s stock price</strong> over the last 48 hours.
        </p>

        {/* ── YOUTUBE EMBED ─────────────────────────── */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ background: '#111', padding: '8px 14px', borderRadius: '8px 8px 0 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#ef4444', fontSize: '18px' }}>▶</span>
            <span style={{ color: '#fff', fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Pokémon Pokopia — Official Gameplay
            </span>
          </div>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '0 0 8px 8px' }}>
            <iframe
              src="https://www.youtube.com/embed/scRb28lD7t4"
              title="Pokémon Pokopia — Official Gameplay"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>
        </div>

        {/* ── KEY STATS GRID ────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', margin: '1.5rem 0' }}>
          {[
            { value: '2.2M', label: 'Copies Sold', sub: 'First 4 days' },
            { value: '~1M', label: 'Japan Sales', sub: '≈45% of total' },
            { value: '+15%', label: 'Nintendo Stock', sub: 'Last 48 hours' },
            { value: '5.4M', label: 'Record to Beat', sub: 'Pokémon Stadium all-time' },
          ].map(({ value, label, sub }) => (
            <div key={label} style={{ background: '#fefce8', border: '2px solid #fde047', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#854d0e', lineHeight: 1 }}>{value}</div>
              <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#1c1917', marginTop: '4px' }}>{label}</div>
              <div style={{ fontSize: '0.75rem', color: '#78716c', marginTop: '2px' }}>{sub}</div>
            </div>
          ))}
        </div>

        {/* ── HISTORIC LAUNCH ───────────────────────── */}
        <h2 id="historic-launch">A Historic Launch for a Spin-Off</h2>
        <p>
          While mainline Pokémon entries typically move 10 million+ copies in a single weekend,
          Pokopia&apos;s 2.2 million debut is <strong>unprecedented for a non-mainline title</strong>.
          The numbers carry additional weight when broken down by region and compared against the
          broader spin-off catalogue:
        </p>

        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#713f12', color: '#fff' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Title</th>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Launch Window Sales</th>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Lifetime Sales</th>
                <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700 }}>Note</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Pokémon Pokopia (2026)', '2.2M in 4 days', 'In progress', '🔥 Current record holder for spin-off launch week'],
                ['Pokémon Stadium (N64)', 'N/A', '5.4M lifetime', 'Target for best-selling spin-off all-time'],
                ['Pokémon Mystery Dungeon series', 'Varies', '~15M total (all games combined)', 'Multiple entries across 20+ years'],
                ['Pokémon Ranger series', 'Varies', '~5M total (all entries)', 'Largely outpaced by Pokopia in 4 days'],
                ['New Pokémon Snap (2021)', 'N/A', '~2.6M lifetime', 'Pokopia on track to surpass at current pace'],
              ].map(([title, launch, lifetime, note], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#fffbeb' : '#fff', borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '10px 14px', fontWeight: 600 }}>{title}</td>
                  <td style={{ padding: '10px 14px' }}>{launch}</td>
                  <td style={{ padding: '10px 14px' }}>{lifetime}</td>
                  <td style={{ padding: '10px 14px', color: '#78716c', fontSize: '0.82rem' }}>{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <HighlightBox type="key-point" color="orange">
          Analysts at <strong>Jefferies</strong> suggest Pokopia is on track to become the{' '}
          <strong>best-selling Pokémon spin-off in history</strong>, currently targeting the
          5.4 million lifetime record held by Pokémon Stadium (N64).
        </HighlightBox>

        {/* ── THE JAPAN FACTOR ──────────────────────── */}
        <h2 id="japan">The Japan Factor</h2>
        <p>
          Of the 2.2 million copies sold, <strong>over 1 million</strong> — approximately 45% of
          the total — were sold in <strong>Japan alone</strong>. The figure reflects the dominant
          position the &quot;cozy game&quot; genre holds in Japanese gaming culture. Life-simulation
          titles in the vein of Animal Crossing have consistently outperformed global expectations
          when measured by Japanese domestic share, and Pokopia&apos;s Pokémon IP amplifies that
          effect considerably.
        </p>
        <p>
          The domestic performance also validates The Pokémon Company&apos;s decision to lean into
          a non-battle-focused design — a risk that critics noted could alienate core competitive
          Pokémon players but has clearly resonated with the broad cozy-gaming audience.
        </p>

        {/* ── SUPPLY CRISIS ─────────────────────────── */}
        <h2 id="supply">Supply Crisis: Sold Out Worldwide</h2>
        <p>
          Despite Pokopia being a <strong>&quot;Game-Key Card&quot;</strong> release — requiring
          a digital download from a physical card rather than containing game data on the card
          itself — retail demand for the physical product has far exceeded supply:
        </p>
        <ul>
          <li>
            Physical copies have <strong>sold out</strong> at major retailers including{' '}
            <strong>Amazon</strong>, <strong>Currys</strong>, and <strong>Smyths Toys</strong>
          </li>
          <li>
            Secondary market listings on platforms like eBay and StockX have appeared at{' '}
            <strong>$79.99</strong> — a significant premium over the standard launch price
          </li>
          <li>
            Nintendo and The Pokémon Company have not yet announced a restock timeline
          </li>
        </ul>

        <HighlightBox type="stat" color="orange">
          The Game-Key Card model — physically packaged but digitally delivered — did not suppress
          demand for a boxed product. Physical copies are now a premium collectible within days of
          launch, trading at up to <strong>$79.99</strong> on secondary markets.
        </HighlightBox>

        {/* ── WHY IT'S SELLING ──────────────────────── */}
        <h2 id="why-selling">The "Ditto" Revolution: Why It&apos;s Selling</h2>
        <p>
          Critics and players have described Pokopia as a <strong>&quot;stealth hit&quot;</strong>{' '}
          — a game that arrived under the radar of the usual mainline hype cycle but immediately
          found a massive audience. The most common shorthand is a mashup of{' '}
          <em>Animal Crossing</em>, <em>Minecraft</em>, and <em>Dragon Quest Builders</em>, with
          the Pokémon franchise providing immediate recognition and emotional investment.
        </p>
        <p>
          At its core, the game casts players as a shape-shifting Ditto tasked with rebuilding a
          post-catastrophe Kanto — a design premise that critics say unlocks the kind of{' '}
          &quot;infinite possibility&quot; loop that made <em>Animal Crossing: New Horizons</em>{' '}
          a global phenomenon. Game Freak and Omega Force&apos;s collaboration has produced
          something the mainline series has struggled to deliver: a game that both core Pokémon
          fans and casual &quot;cozy game&quot; players are recommending simultaneously.
        </p>

        <HighlightBox type="quote" color="orange">
          &quot;Pokopia is the Pokémon game that was always sitting in the franchise&apos;s DNA,
          waiting to be made. It just took Omega Force&apos;s rhythm to pull it out.&quot;
          <br /><br />
          <strong>— Jefferies gaming analyst note, March 2026</strong>
        </HighlightBox>

        {/* ── NINTENDO STOCK ────────────────────────── */}
        <h2 id="stock">Nintendo Stock: +15% in 48 Hours</h2>
        <p>
          The sales confirmation has had an immediate and measurable impact on Nintendo&apos;s
          market position. Shares surged <strong>15%</strong> over the 48 hours following the
          announcement, as investors responded to:
        </p>
        <ul>
          <li>
            Confirmation that the Switch 2 has an <strong>evergreen software anchor</strong> in
            its early catalogue — a concern that had weighed on analyst forecasts since the
            console&apos;s March 5 launch
          </li>
          <li>
            Physical stock scarcity signalling demand that outpaces supply — historically a
            strong indicator of sustained sales momentum
          </li>
          <li>
            The Japan domestic performance suggesting Pokopia will sustain high weekly sales
            long after the launch window, given the cozy genre&apos;s reputation for player retention
          </li>
        </ul>

        {/* ── CONTEXT ───────────────────────────────── */}
        <h2 id="context">Context: Switch 2&apos;s First Mega-Hit</h2>
        <p>
          The Nintendo Switch 2 launched on{' '}
          <Link href="/video-games/nintendo" className="text-yellow-700 hover:underline">
            March 5, 2026
          </Link>{' '}
          alongside a software lineup that market observers had flagged as thinner than the
          original Switch&apos;s debut slate. Pokopia, reviewed to the{' '}
          <Link href="/video-games/switch2/pokemon-pokopia" className="text-yellow-700 hover:underline">
            highest scores in Pokémon franchise history
          </Link>{' '}
          (93 OpenCritic / 90 Metacritic), was the console&apos;s critical standout — but
          sales confirmation of this scale transforms it from a critical darling into a
          platform-defining commercial anchor.
        </p>
        <p>
          For Nintendo, the trajectory mirrors the Animal Crossing:{' '}
          <em>New Horizons</em> moment on the original Switch in 2020 — a left-field, broadly
          accessible title that converts non-traditional gaming audiences into hardware buyers.
        </p>

        {/* ── RELATED ───────────────────────────────── */}
        <h2 id="related">More Nintendo & Video Games Coverage</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          {[
            {
              href: '/video-games/switch2/pokemon-pokopia',
              label: 'Pokémon Pokopia: 93 OpenCritic — Franchise-High Review Scores',
              desc: 'The highest review scores in Pokémon history. Full launch guide and critical breakdown.',
              color: '#713f12',
            },
            {
              href: '/video-games/nintendo',
              label: 'Nintendo Hub',
              desc: 'Full ObjectWire coverage of Nintendo, Switch 2, and first-party titles.',
              color: '#1e3a8a',
            },
            {
              href: '/video-games/nintendo/mar10-day-2026-40th-anniversary-super-mario',
              label: 'MAR10 Day 2026 — Super Mario 40th Anniversary',
              desc: "Nintendo celebrates 40 years of Super Mario on March 10, 2026.",
              color: '#b91c1c',
            },
            {
              href: '/video-games',
              label: 'Video Games Hub',
              desc: "ObjectWire's full video games coverage.",
              color: '#0f172a',
            },
          ].map(({ href, label, desc, color }) => (
            <Link
              key={href}
              href={href}
              style={{
                display: 'block',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                overflow: 'hidden',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div style={{ background: color, padding: '8px 12px' }}>
                <span style={{ color: '#fff', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Nintendo
                </span>
              </div>
              <div style={{ padding: '12px' }}>
                <p style={{ fontWeight: 700, marginBottom: '4px', fontSize: '0.9rem' }}>{label}</p>
                <p style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: 1.5 }}>{desc}</p>
              </div>
            </Link>
          ))}
        </div>

      </NewsArticle>
    </SEOWrapper>
  );
}
