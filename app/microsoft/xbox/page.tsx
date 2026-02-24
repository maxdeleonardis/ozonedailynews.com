import type { Metadata } from 'next';
import Link from 'next/link';
import { Hub } from '@/components/Hub';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';

export const metadata: Metadata = {
  title: 'Xbox — Microsoft Gaming Hub: Consoles, Game Pass & News | ObjectWire',
  description:
    'ObjectWire\'s Xbox hub: Xbox Series X|S, Game Pass, Activision Blizzard, Xbox Cloud Gaming, and all news and analysis covering Microsoft\'s gaming division.',
  keywords: [
    'Xbox news 2026',
    'Xbox Series X',
    'Xbox Series S',
    'Xbox Game Pass',
    'Microsoft Gaming',
    'Activision Blizzard Xbox',
    'Xbox Cloud Gaming',
    'Phil Spencer',
    'Xbox exclusives 2026',
    'Call of Duty Xbox',
    'Halo Xbox',
    'Xbox hardware',
    'Game Pass Ultimate',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/microsoft/xbox',
  },
  openGraph: {
    title: 'Xbox — Microsoft Gaming Hub | ObjectWire',
    description:
      'Full Xbox coverage: Series X|S hardware, Game Pass, Activision Blizzard titles, cloud gaming, and all breaking Microsoft gaming news.',
    type: 'website',
    url: 'https://www.objectwire.org/microsoft/xbox',
    siteName: 'ObjectWire',
  },
};

export default function XboxHubPage() {
  return (
    <SEOWrapper slug="/microsoft/xbox">
      <NewsArticleSchema
        title="Xbox — Microsoft Gaming: Consoles, Game Pass & Industry Coverage"
        description="ObjectWire's hub for Xbox and Microsoft Gaming — covering Xbox Series X|S hardware, Game Pass, Activision Blizzard, cloud gaming, and all breaking news from Microsoft's gaming division."
        author="ObjectWire Gaming Desk"
        publishedTime="2026-02-23T00:00:00Z"
        modifiedTime="2026-02-23T00:00:00Z"
        articleUrl="https://www.objectwire.org/microsoft/xbox"
        section="Gaming"
        keywords={['Xbox', 'Xbox Series X', 'Game Pass', 'Microsoft Gaming', 'Activision Blizzard', 'Phil Spencer']}
      />

      <div className="border-b border-white/10 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Microsoft', item: '/microsoft' },
              { name: 'Xbox', item: '/microsoft/xbox' },
            ]}
          />
        </div>
      </div>

      <Hub
        badge="MICROSOFT GAMING"
        badgeColor="from-green-600 to-emerald-500"
        title="🎮 Xbox"
        subtitle="Microsoft's gaming division spans hardware consoles, Game Pass subscription services, cloud gaming, and a first-party studio portfolio that now includes Activision Blizzard — making it the largest gaming company by revenue in the world."
        meta={
          <>
            <span>🎮 34M+ Game Pass Subscribers</span>
            <span className="hidden md:inline">•</span>
            <span>🏢 CEO: Phil Spencer</span>
            <span className="hidden md:inline">•</span>
            <span>💰 ~$21B Annual Gaming Revenue</span>
          </>
        }
      >

        {/* Quick Facts */}
        <Hub.InfoGrid
          title="Xbox by the Numbers"
          icon="📊"
          items={[
            { label: 'Game Pass Subscribers', value: '34M+' },
            { label: 'Annual Gaming Revenue', value: '~$21 Billion' },
            { label: 'First-Party Studios', value: '30+ (inc. Activision Blizzard)' },
            { label: 'Xbox Series X Launch', value: 'November 10, 2020' },
            { label: 'Activision Blizzard Acquired', value: 'October 2024 — $69B' },
            { label: 'Game Pass Ultimate Price', value: '$19.99/month' },
            { label: 'Xbox Cloud Gaming Devices', value: 'Browser, TV, mobile, console' },
            { label: 'Xbox One Installed Base', value: '~50M (prior gen)' },
          ]}
          columns={4}
        />

        {/* Featured Stories */}
        <Hub.Section title="Latest Xbox News" icon="🔴" variant="default">
          <div className="space-y-4">
            <Hub.Card
              href="/video-games"
              title="Xbox's Activision Blizzard Integration: One Year In"
              description="With the $69 billion acquisition complete, Microsoft is consolidating Activision, Blizzard, and King studios under the Xbox brand. Call of Duty, World of Warcraft, and Candy Crush now sit inside Game Pass — here's what that means for the platform."
              badge="Analysis"
              emoji="🎯"
              meta="February 2026 • Business"
            />
            <Hub.Card
              href="/video-games"
              title="Xbox Cloud Gaming Expands to Samsung, LG, and Roku Smart TVs"
              description="Xbox Game Pass Ultimate members can now stream hundreds of games directly on smart TVs without a console — the clearest sign yet of Microsoft's console-optional gaming future."
              badge="Product"
              emoji="📺"
              meta="2026 • Cloud Gaming"
            />
            <Hub.Card
              href="/microsoft"
              title="Xbox PC Integration: Windows 11 and the Microsoft Store Overhaul"
              description="Microsoft is tightening the loop between Xbox consoles and Windows PCs — shared libraries, cross-save, and a redesigned Microsoft Store put PC gaming at the center of the Game Pass strategy."
              emoji="💻"
              meta="2026 • Platform"
            />
          </div>
        </Hub.Section>

        {/* Consoles */}
        <Hub.Section title="Xbox Hardware" icon="🕹️" variant="card">
          <Hub.Table
            columns={[
              { key: 'console', label: 'Console', bold: true },
              { key: 'launch', label: 'Launch' },
              { key: 'price', label: 'MSRP' },
              { key: 'specs', label: 'Key Specs' },
              { key: 'note', label: 'Position' },
            ]}
            rows={[
              {
                console: 'Xbox Series X',
                launch: 'Nov 10, 2020',
                price: '$499',
                specs: '12 TFLOPS, 1TB NVMe, 4K 120fps',
                note: 'Flagship — full power, disc drive',
              },
              {
                console: 'Xbox Series S',
                launch: 'Nov 10, 2020',
                price: '$299',
                specs: '4 TFLOPS, 512GB NVMe, 1440p 120fps',
                note: 'Entry-level — digital-only, compact',
              },
              {
                console: 'Xbox Series X (Digital)',
                launch: 'Oct 2024',
                price: '$449',
                specs: '12 TFLOPS, 1TB NVMe, 4K 120fps',
                note: 'Disc-less flagship variant',
              },
              {
                console: 'Xbox Series S 1TB',
                launch: 'Sept 2023',
                price: '$349',
                specs: '4 TFLOPS, 1TB NVMe, 1440p 120fps',
                note: 'Expanded storage entry-level',
              },
            ]}
          />
        </Hub.Section>

        {/* Game Pass */}
        <Hub.Section title="Xbox Game Pass" icon="🟢" variant="highlight">
          <Hub.Prose>
            <p>
              Game Pass is the strategic center of Microsoft's gaming business. The subscription gives players access to hundreds of games — including every first-party Microsoft title on day one — across console, PC, and cloud. With 34M+ subscribers, it generates recurring revenue that offsets the hardware margin constraints of console manufacturing.
            </p>
            <p>
              The inclusion of{' '}
              <Link href="/video-games" className="text-cyan-300 hover:underline font-semibold">
                Activision Blizzard
              </Link>{' '}
              titles — Call of Duty, Diablo, Overwatch, World of Warcraft — significantly upgraded the catalogue and made Game Pass Ultimate one of the most content-dense subscription services in gaming.
            </p>
          </Hub.Prose>

          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Game Pass Core', value: '$9.99/mo', sub: 'Online multiplayer + rotating catalogue' },
              { label: 'Game Pass Standard', value: '$14.99/mo', sub: 'Full catalogue, no day-one titles' },
              { label: 'Game Pass Ultimate', value: '$19.99/mo', sub: 'Console + PC + Cloud + EA Play' },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-lg p-4">
                <p className="text-2xl font-black text-white">{s.value}</p>
                <p className="text-sm font-semibold text-gray-200">{s.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </Hub.Section>

        {/* First-Party Studios */}
        <Hub.Section title="Major First-Party Studios" icon="🏢" variant="default">
          <Hub.Table
            columns={[
              { key: 'studio', label: 'Studio', bold: true },
              { key: 'known', label: 'Known For' },
              { key: 'location', label: 'Location' },
            ]}
            rows={[
              { studio: '343 Industries', known: 'Halo franchise', location: 'Kirkland, WA' },
              { studio: 'The Coalition', known: 'Gears of War franchise', location: 'Vancouver, Canada' },
              { studio: 'Playground Games', known: 'Forza Horizon', location: 'Leamington Spa, UK' },
              { studio: 'Turn 10 Studios', known: 'Forza Motorsport', location: 'Redmond, WA' },
              { studio: 'Obsidian Entertainment', known: 'The Outer Worlds, Fallout New Vegas', location: 'Irvine, CA' },
              { studio: 'inXile Entertainment', known: 'Wasteland, RPG titles', location: 'Newport Beach, CA' },
              { studio: 'Ninja Theory', known: 'Hellblade franchise', location: 'Cambridge, UK' },
              { studio: 'Double Fine Productions', known: 'Psychonauts', location: 'San Francisco, CA' },
              { studio: 'Activision', known: 'Call of Duty, Tony Hawk', location: 'Santa Monica, CA' },
              { studio: 'Blizzard Entertainment', known: 'World of Warcraft, Overwatch, Diablo', location: 'Irvine, CA' },
              { studio: 'King', known: 'Candy Crush Saga (mobile)', location: 'London, UK' },
            ]}
          />
        </Hub.Section>

        {/* Xbox Leadership */}
        <Hub.Section title="Xbox Leadership" icon="👥" variant="card">
          <div className="space-y-4">
            <Hub.Card
              href="/microsoft"
              title="Phil Spencer — CEO, Microsoft Gaming"
              description="Head of Xbox since 2014, Spencer championed the Game Pass model, negotiated the Activision Blizzard acquisition, and has consistently framed gaming as a platform play rather than a hardware race."
              emoji="🎮"
            />
            <Hub.Card
              href="/microsoft/xbox/asha-sharma"
              title="Asha Sharma — CVP, Xbox Experiences & Platforms"
              description="Corporate Vice President overseeing Xbox platform experiences, the Xbox app on Windows, and cross-device gaming infrastructure. A key architect of Microsoft's platform-first gaming strategy."
              emoji="🖥️"
            />
          </div>
        </Hub.Section>

        {/* Related */}
        <Hub.Section title="Related Coverage" icon="🔗" variant="default">
          <Hub.LinkGrid
            columns={4}
            items={[
              { href: '/microsoft', emoji: '🪟', label: 'Microsoft HQ', sub: 'Full corporate hub' },
              { href: '/video-games', emoji: '🕹️', label: 'Video Games', sub: 'Industry coverage' },
              { href: '/define/hedera-vs-solana-for-dapps', emoji: '🔗', label: 'Blockchain', sub: 'Web3 gaming infrastructure' },
              { href: '/tech', emoji: '🔭', label: 'Tech News', sub: 'Hardware & platform news' },
            ]}
          />
        </Hub.Section>

      </Hub>
    </SEOWrapper>
  );
}
