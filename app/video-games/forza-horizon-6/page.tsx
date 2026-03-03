import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox, Timeline } from '@/components/NewsArticle';

const SLUG = '/video-games/forza-horizon-6';
const AUTHOR_NAME = 'ObjectWire Gaming Desk';

export const metadata: Metadata = {
  title: 'Forza Horizon 6: Release Date, Map, Cars & Everything Known — March 2026 | ObjectWire',
  description:
    'Forza Horizon 6 releases May 19, 2026 on Xbox Series X|S, PC, and later PlayStation 5. Japan open world, 550+ cars, Toyota GR GT cover vehicle, early access May 15 for Premium Edition owners. Everything confirmed as of March 2026.',
  keywords: [
    'Forza Horizon 6',
    'Forza Horizon 6 release date',
    'Forza Horizon 6 Japan',
    'Forza Horizon 6 May 2026',
    'Forza Horizon 6 PS5',
    'Forza Horizon 6 Xbox',
    'Forza Horizon 6 PC Steam',
    'Forza Horizon 6 car list',
    'Forza Horizon 6 Toyota GR GT',
    'Forza Horizon 6 map size',
    'Forza Horizon 6 early access',
    'Playground Games 2026',
    'Xbox Game Pass Forza Horizon 6',
    'Forza Horizon 6 price',
    'Forza Horizon 6 editions',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Forza Horizon 6 — May 19, 2026 | Japan Map, 550+ Cars, PS5 Confirmed',
    description:
      "Everything confirmed about Forza Horizon 6: Japan open world five times larger than Edinburgh, 550+ cars, Toyota GR GT cover vehicle, early access May 15 for Premium Edition. Day-one on Game Pass.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: '2026-03-02T00:00:00Z',
    modifiedTime: '2026-03-02T00:00:00Z',
    section: 'Video Games',
    tags: ['Forza Horizon 6', 'Xbox', 'Playground Games', 'Racing Games', 'Xbox Game Pass'],
    images: [{ url: 'https://www.objectwire.org/entertainment/forza_horizon_6.PNG', width: 1200, height: 675, alt: 'Forza Horizon 6' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forza Horizon 6 — May 19, 2026 | Japan, 550+ Cars & Game Pass Day One',
    description:
      'Everything confirmed about Forza Horizon 6 as of March 2026 — Japan open world, early access May 15, PS5 later in 2026.',
  },
};

export default function ForzaHorizon6Page() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Forza Horizon 6: Release Date, Japan Map, Cars & Everything Known as of March 2026"
        description="Forza Horizon 6 releases May 19, 2026 on Xbox Series X|S and PC. Japan open world, 550+ cars, Toyota GR GT cover vehicle, PS5 later in 2026. Day-one on Xbox Game Pass."
        publishedTime="2026-03-02T00:00:00Z"
        modifiedTime="2026-03-02T00:00:00Z"
        author={AUTHOR_NAME}
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Video Games"
        keywords={['Forza Horizon 6', 'Xbox', 'Playground Games', 'Japan', 'Racing', 'Game Pass']}
      />

      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Video Games', item: '/video-games' },
              { name: 'Racing', item: '/video-games/racing' },
              { name: 'Forza Horizon 6', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Everything Known About Forza Horizon 6 as of March 2026"
        subtitle="Japan open world, 550+ cars, May 19 release — here is every confirmed detail from Playground Games and Xbox."
        category="Video Games"
        categoryColor="blue"
        topicTag="gaming"
        publishDate="March 2, 2026"
        readTime="6 min read"
        author={{
          name: AUTHOR_NAME,
          role: 'Gaming Editor',
        }}
        thumbnail={{
          src: '/entertainment/forza_horizon_6.PNG',
          alt: 'Forza Horizon 6',
        }}
        tags={['Forza Horizon 6', 'Xbox Series X', 'Playground Games', 'Racing', 'Game Pass', 'Japan', 'PC Gaming']}
        trending
      >

        {/* ── INTRO ─────────────────────────────────────────────────────────── */}
        <p>
          Forza Horizon 6 releases on <strong>May 19, 2026</strong>, for Xbox Series X|S and PC via the Microsoft Store and Steam. Playground Games develops the title under Xbox Game Studios, following 2021&apos;s Forza Horizon 5 set in Mexico. Premium Edition owners gain four days of early access beginning <strong>May 15, 2026</strong>. A PlayStation 5 version is confirmed for a later 2026 window. The game is included at launch on Xbox Game Pass Ultimate and PC Game Pass.
        </p>

        <p>
          Microsoft unveiled the title on January 22, 2026, during the Xbox Developer Direct, releasing a gameplay trailer that confirmed Japan as the open-world setting, over 550 cars, and the Toyota GR GT 2025 Prototype as the cover vehicle. A Steam pop-up listing on January 14, 2026 first surfaced the May 19 date ahead of the official announcement.
        </p>

        {/* ── KEY STATS ─────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8 not-prose">
          {[
            { label: 'Release Date', value: 'May 19, 2026' },
            { label: 'Early Access', value: 'May 15, 2026' },
            { label: 'Cars at Launch', value: '550+' },
            { label: 'Cover Vehicle', value: 'Toyota GR GT' },
          ].map(stat => (
            <div key={stat.label} className="rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white p-4 text-center shadow-lg">
              <div className="text-2xl font-black leading-tight">{stat.value}</div>
              <div className="text-blue-200 text-xs mt-1 font-medium uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ── OFFICIAL TRAILER ──────────────────────────────────────────────── */}
        <h2>Official Reveal Trailer</h2>
        <div className="not-prose my-6 rounded-2xl overflow-hidden border border-gray-200 shadow-xl aspect-video">
          <iframe
            src="https://www.youtube.com/embed/dj2PkwfrRP0"
            title="Forza Horizon 6 — Official Gameplay Reveal Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <p className="text-sm text-gray-500 text-center -mt-3 mb-6">
          Forza Horizon 6 gameplay reveal — Xbox Developer Direct, January 22, 2026
        </p>

        {/* ── RELEASE DATE ─────────────────────────────────────────────────── */}
        <h2>Release Date and Early Access</h2>
        <p>
          Forza Horizon 6 launches globally on <strong>May 19, 2026</strong>. Premium Edition owners unlock the game on <strong>May 15, 2026</strong>, four days ahead of standard release. Pre-purchases are live on Steam now across three editions. Xbox Game Pass Ultimate and PC Game Pass subscribers play at no additional cost on the standard launch date.
        </p>

        <HighlightBox type="key-point" color="blue">
          <strong>Early Access Dates:</strong> Premium Edition → May 15 · Standard &amp; Deluxe → May 19 · Game Pass → May 19
        </HighlightBox>

        {/* ── EDITIONS / PRICING ───────────────────────────────────────────── */}
        <h2>Editions and Pricing</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-blue-700 to-blue-800 text-white">
                <th className="px-4 py-3 text-left font-bold">Edition</th>
                <th className="px-4 py-3 text-center font-bold">Price (Steam)</th>
                <th className="px-4 py-3 text-center font-bold">Early Access</th>
                <th className="px-4 py-3 text-left font-bold">Includes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { edition: 'Standard Edition', price: '$69.99', early: '—', includes: 'Base game' },
                { edition: 'Deluxe Edition', price: '$99.99', early: '—', includes: 'Base game + bonus car pack' },
                { edition: 'Premium Edition', price: 'TBA (above $99.99)', early: 'May 15, 2026', includes: 'Base game + all add-ons + early access' },
                { edition: 'Game Pass Ultimate', price: 'Included', early: 'May 19, 2026', includes: 'Standard access via subscription' },
              ].map((row, i) => (
                <tr key={row.edition} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-semibold text-gray-900">{row.edition}</td>
                  <td className="px-4 py-3 text-center font-mono text-blue-700 font-bold">{row.price}</td>
                  <td className="px-4 py-3 text-center text-gray-600">{row.early}</td>
                  <td className="px-4 py-3 text-gray-600">{row.includes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── PLATFORMS ────────────────────────────────────────────────────── */}
        <h2>Platforms</h2>
        <p>
          Forza Horizon 6 launches simultaneously on <strong>Xbox Series X|S</strong>, <strong>PC via Microsoft Store</strong>, <strong>PC via Steam</strong>, and <strong>Xbox Cloud Gaming</strong>. A <strong>PlayStation 5</strong> version is confirmed for a later date in 2026, making Forza Horizon 6 the first series entry to launch on PlayStation. Full cross-save progression is supported across Xbox and PC from day one.
        </p>

        <div className="not-prose my-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { platform: 'Xbox Series X|S', status: 'May 19, 2026', color: 'bg-green-50 border-green-200 text-green-800' },
            { platform: 'PC — Microsoft Store', status: 'May 19, 2026', color: 'bg-green-50 border-green-200 text-green-800' },
            { platform: 'PC — Steam', status: 'May 19, 2026', color: 'bg-green-50 border-green-200 text-green-800' },
            { platform: 'Xbox Cloud Gaming', status: 'May 19, 2026', color: 'bg-green-50 border-green-200 text-green-800' },
            { platform: 'PlayStation 5', status: 'Later in 2026', color: 'bg-amber-50 border-amber-200 text-amber-800' },
            { platform: 'Xbox One / Last-Gen', status: 'Not announced', color: 'bg-gray-50 border-gray-200 text-gray-500' },
          ].map(p => (
            <div key={p.platform} className={`rounded-xl border p-4 text-sm ${p.color}`}>
              <div className="font-bold">{p.platform}</div>
              <div className="text-xs mt-1 opacity-80">{p.status}</div>
            </div>
          ))}
        </div>

        <HighlightBox type="stat" color="purple">
          <strong>First PlayStation entry in franchise history.</strong> Forza Horizon 6 marks the series debut on PlayStation hardware — a shift from Microsoft&apos;s prior Xbox-exclusive strategy.
        </HighlightBox>

        {/* ── SETTING & MAP ────────────────────────────────────────────────── */}
        <h2>Setting: Japan</h2>
        <p>
          Forza Horizon 6 is set in <strong>Japan</strong>, featuring a scaled open world spanning multiple biomes: urban Tokyo districts, highland roads, coastal routes, and the slopes of <strong>Mount Fuji</strong>. Playground Games describes Tokyo in the game as <strong>five times larger than Edinburgh</strong> from Forza Horizon 4, the largest city the series has rendered.
        </p>
        <p>
          The studio describes the full map as the series&apos; <strong>largest and most dense open world to date</strong>, with curated road networks designed around the diversity of Japanese driving culture — from mountain passes to expressway circuits.
        </p>

        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                <th className="px-4 py-3 text-left font-bold">Biome / Area</th>
                <th className="px-4 py-3 text-left font-bold">Description</th>
                <th className="px-4 py-3 text-center font-bold">Confirmed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { area: 'Tokyo Urban District', desc: '5× larger than Edinburgh (FH4) — highways, elevated expressways, dense streets', confirmed: '✅' },
                { area: 'Mount Fuji', desc: 'Iconic peak with switchback mountain roads and highland passes', confirmed: '✅' },
                { area: 'Highland / Rural Roads', desc: 'Winding touge-style roads through forested highlands', confirmed: '✅' },
                { area: 'Coastal Routes', desc: 'Pacific coastline driving with seaside roads', confirmed: '✅' },
              ].map((row, i) => (
                <tr key={row.area} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-semibold text-gray-900">{row.area}</td>
                  <td className="px-4 py-3 text-gray-600">{row.desc}</td>
                  <td className="px-4 py-3 text-center text-lg">{row.confirmed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── CARS ─────────────────────────────────────────────────────────── */}
        <h2>Cars — 550+ at Launch</h2>
        <p>
          The launch roster exceeds <strong>550 cars</strong>. The cover vehicle is the <strong>Toyota GR GT 2025 Prototype</strong>, a fictional near-future variant of Toyota&apos;s GR performance line designed exclusively for the game. Forza Edition cars — special variants with unique handling tuning and bonus traits — return from prior games.
        </p>

        <HighlightBox type="key-point" color="orange">
          <strong>Cover Car:</strong> Toyota GR GT 2025 Prototype — A purpose-built fictional concept created in collaboration with Toyota for Forza Horizon 6.
        </HighlightBox>

        <p>
          Playground Games has not released the full car list ahead of May 19. Based on the reveal trailer, manufacturers confirmed to appear include Toyota, Nissan, Honda, Mazda, Subaru, and Mitsubishi alongside established European and American brands carried over from Forza Horizon 5&apos;s 500-car roster base.
        </p>

        {/* ── GAMEPLAY ─────────────────────────────────────────────────────── */}
        <h2>Gameplay Features and Modes</h2>
        <p>
          Playground Games confirmed the following gameplay systems during the Xbox Developer Direct:
        </p>
        <ul>
          <li><strong>Reworked career mode</strong> — returning wristband progression system from earlier Horizon entries, modernised with curated event series</li>
          <li><strong>Car meets</strong> — open-world spontaneous meet events where players gather and show vehicles</li>
          <li><strong>Solo and co-op campaign</strong> — full story campaign playable alone or with friends online; other players can visit your campaign world</li>
          <li><strong>Forza Edition cars</strong> — returning special variants with unique handling profiles and bonus gameplay effects</li>
          <li><strong>Cross-save</strong> — progress carries between Xbox and PC seamlessly</li>
        </ul>

        <HighlightBox type="quote" color="blue">
          &ldquo;Japan is the birthplace of car culture as we know it. This is the most ambitious Horizon world we have ever built.&rdquo; — Playground Games, Xbox Developer Direct, January 22, 2026
        </HighlightBox>

        {/* ── ANNOUNCEMENT TIMELINE ────────────────────────────────────────── */}
        <h2>Announcement and Development Timeline</h2>
        <Timeline
          events={[
            { time: '2022', title: 'Early Development Confirmed', description: 'Playground Games job listings reference a new major Forza Horizon title in pre-production.' },
            { time: 'Jan 14, 2026', title: 'Steam Pop-Up Leak', description: 'A brief Steam listing goes live and is captured before removal — reveals the May 19 release date and Japan setting.' },
            { time: 'Jan 22, 2026', title: 'Official Xbox Developer Direct Reveal', description: 'Microsoft officially announces Forza Horizon 6 with a full gameplay overview trailer. Japan map, 550+ cars, Toyota GR GT cover vehicle all confirmed.' },
            { time: 'Jan 22, 2026', title: 'Pre-Purchase Opens on Steam', description: 'Standard ($69.99), Deluxe ($99.99), and Premium Editions go live for pre-purchase on Steam immediately following the reveal.' },
            { time: 'May 15, 2026', title: 'Premium Edition Early Access', description: 'Premium Edition owners receive four days of early access ahead of global launch.' },
            { time: 'May 19, 2026', title: 'Global Launch', description: 'Forza Horizon 6 releases worldwide on Xbox Series X|S, PC (Microsoft Store + Steam), and Xbox Cloud Gaming. Day-one on Game Pass Ultimate and PC Game Pass.' },
            { time: 'Late 2026', title: 'PlayStation 5 Version', description: 'A separate PS5 release confirmed by Microsoft for later in 2026.' },
          ]}
        />

        {/* ── GAME PASS ────────────────────────────────────────────────────── */}
        <h2>Xbox Game Pass Day One</h2>
        <p>
          Forza Horizon 6 is included at launch in <strong>Xbox Game Pass Ultimate</strong> and <strong>PC Game Pass</strong>. Subscribers do not need to purchase the game. The Game Pass version provides the Standard Edition experience on the May 19 launch date. Early access on May 15 requires the Premium Edition purchase regardless of Game Pass membership.
        </p>

        <HighlightBox type="stat" color="green">
          <strong>Game Pass Value:</strong> At $69.99 standard retail, day-one Game Pass inclusion makes Forza Horizon 6 accessible to the approximately 34 million Game Pass subscribers without any additional purchase.
        </HighlightBox>

        {/* ── DEVELOPER ────────────────────────────────────────────────────── */}
        <h2>Developer: Playground Games</h2>
        <p>
          <strong>Playground Games</strong>, based in Leamington Spa, United Kingdom, has developed every Forza Horizon entry since the series launched in 2012. The studio operates as part of Xbox Game Studios. Forza Horizon 6 follows <em>Forza Horizon 5</em> (2021, Mexico) and marks a five-year gap between mainline entries — the longest in the franchise. Playground&apos;s site currently lists Forza Horizon 6 under 2026 upcoming titles with no further developer blog posts published as of March 2, 2026.
        </p>

        {/* ── WHAT'S NOT CONFIRMED ─────────────────────────────────────────── */}
        <h2>What Has Not Been Confirmed Yet</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-amber-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-amber-500 text-white">
                <th className="px-4 py-3 text-left font-bold">Topic</th>
                <th className="px-4 py-3 text-left font-bold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-50">
              {[
                { topic: 'Full car list (all 550+)', status: 'Not released — expected closer to May 19' },
                { topic: 'Premium Edition exact price', status: 'Not disclosed — listed above Deluxe ($99.99)' },
                { topic: 'PS5 exact release date', status: 'Confirmed for 2026, no date given' },
                { topic: 'Expansion / DLC schedule', status: 'No details announced' },
                { topic: 'Multiplayer modes beyond co-op campaign', status: 'Not detailed in reveal' },
                { topic: 'Ray tracing / PC tech specs', status: 'Not released' },
              ].map((row, i) => (
                <tr key={row.topic} className={i % 2 === 0 ? 'bg-white' : 'bg-amber-50/40'}>
                  <td className="px-4 py-3 font-semibold text-gray-900">{row.topic}</td>
                  <td className="px-4 py-3 text-gray-600">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── RELATED INTERLINKS ───────────────────────────────────────────── */}
        <div className="not-prose mt-10 border-t border-gray-200 pt-8">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">More Gaming Coverage</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/video-games/gta-6', label: 'GTA 6 — Release Date, Price & Full Guide' },
              { href: '/video-games/racing', label: 'Racing Games Hub' },
              { href: '/video-games/news/my-hero-ultra-rumble-season-15-review', label: 'My Hero Ultra Rumble Season 15 Review' },
              { href: '/video-games/switch2', label: 'Nintendo Switch 2 — Everything Confirmed' },
              { href: '/video-games/marvels-wolverine', label: "Marvel's Wolverine — What We Know" },
              { href: '/video-games', label: 'All Video Games Coverage' },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 rounded-xl border border-gray-200 p-3 hover:border-blue-400 hover:bg-blue-50 transition-colors group"
              >
                <span className="text-blue-500 group-hover:text-blue-700 text-lg">🎮</span>
                <span className="text-sm font-medium text-gray-800 group-hover:text-blue-700">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </NewsArticle>
    </SEOWrapper>
  );
}
