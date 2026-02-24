import type { Metadata } from 'next';
import Link from 'next/link';
import { MHAArticle, MHASection } from '@/components/mha_article';

export const metadata: Metadata = {
  title: 'Ferrari: History, Models, Formula 1 & Latest News | ObjectWire',
  description:
    'Complete guide to Ferrari — the iconic Italian supercar manufacturer. Explore Ferrari\'s history, current lineup, Formula 1 success, and latest model releases.',
  keywords: [
    'Ferrari',
    'Ferrari cars',
    'Ferrari supercar',
    'Ferrari Formula 1',
    'Ferrari SF-25',
    'Ferrari history',
    'Maranello',
    'Enzo Ferrari',
    'Ferrari 2026',
    'Italian sports car',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/cars/ferrari',
  },
  openGraph: {
    title: 'Ferrari: History, Models, Formula 1 & Latest News',
    description:
      'Complete guide to Ferrari — the iconic Italian supercar manufacturer. Models, history, Formula 1, and the latest from Maranello.',
    type: 'article',
    url: 'https://www.objectwire.org/cars/ferrari',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ferrari: History, Models, Formula 1 & Latest News | ObjectWire',
    description:
      'Complete guide to Ferrari — history, current lineup, Formula 1 success, and latest releases from Maranello.',
  },
};

export default function FerrariPage() {
  return (
    <MHAArticle
      title="Ferrari"
      subtitle="The Prancing Horse — Italy's Most Iconic Supercar Manufacturer"
      schema={{
        title: 'Ferrari: History, Models, Formula 1 & Latest News',
        description:
          'Complete guide to Ferrari — the iconic Italian supercar manufacturer. Explore Ferrari\'s history, current lineup, Formula 1 success, and latest model releases.',
        publishedTime: '2025-01-01T00:00:00Z',
        modifiedTime: '2026-02-24T00:00:00Z',
        author: 'ObjectWire Editorial Team',
        imageUrl: 'https://www.objectwire.org/ferrari-hero.jpg',
        articleUrl: 'https://www.objectwire.org/cars/ferrari',
        section: 'Cars',
        keywords: ['Ferrari', 'supercar', 'Formula 1', 'Maranello', 'Italian cars'],
      }}
      breadcrumbItems={[
        { name: 'Home', item: '/' },
        { name: 'Cars', item: '/cars' },
        { name: 'Ferrari', item: '/cars/ferrari' },
      ]}
      relatedLinks={[
        {
          href: '/formula-1',
          title: 'Formula 1 Coverage',
          description:
            'Full Formula 1 race results, standings, team news, and analysis across every 2026 season round.',
          gradient: 'from-red-900/50 to-orange-900/50',
          hoverGradient: 'hover:from-red-800/50 hover:to-orange-800/50',
          borderColor: 'border-red-500/30',
          titleColor: 'text-red-400',
        },
        {
          href: '/cars',
          title: 'Cars Hub',
          description:
            'Latest car reviews, comparisons, industry news, and buying guides across all automotive segments.',
          gradient: 'from-yellow-900/50 to-amber-900/50',
          hoverGradient: 'hover:from-yellow-800/50 hover:to-amber-800/50',
          borderColor: 'border-yellow-500/30',
          titleColor: 'text-yellow-400',
        },
      ]}
      externalLinks={[
        {
          href: 'https://www.ferrari.com',
          label: 'Official Ferrari Website',
        },
        {
          href: 'https://www.ferrari.com/en-EN/formula1',
          label: 'Scuderia Ferrari Formula 1',
        },
        {
          href: 'https://store.steampowered.com',
          label: 'Ferrari on Steam (F1 & Racing Games)',
        },
        {
          href: 'https://twitter.com/Ferrari',
          label: 'Ferrari Official Twitter/X',
        },
      ]}
    >
      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
        <MHASection>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Ferrari S.p.A.</strong> is an Italian luxury sports car manufacturer headquartered in Maranello,
            Italy. Founded by <strong>Enzo Ferrari</strong> in 1939, originally as Auto Avio Costruzioni, the company
            built its first car in 1940. Ferrari is widely regarded as the world's most recognisable and prestigious
            automotive brand, with a heritage spanning more than eight decades of road cars and motorsport dominance.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            The company operates at the intersection of art, engineering, and performance. Each Ferrari is handbuilt
            at the historic Maranello factory, where strict production limits—typically fewer than 14,000 cars per
            year—preserve exclusivity and resale value. Ferrari is consistently ranked among the world's most powerful
            brands, commanding a loyal global clientele and one of the highest average vehicle prices in the industry.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Beyond road cars, Ferrari's identity is inseparable from <strong>Formula 1</strong>. Scuderia Ferrari is
            the oldest and most successful constructor in the sport's history, with 16 Constructors' Championships and
            15 Drivers' Championships. The <strong>Prancing Horse (Cavallino Rampante)</strong> badge remains one of
            the most recognisable logos on Earth.
          </p>
        </MHASection>
      </section>

      {/* History */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">History</h2>

        <MHASection heading="The Enzo Era (1939–1988)" headingColor="text-red-400">
          <p className="text-gray-300 leading-relaxed mb-4">
            Enzo Ferrari's journey began as a racing driver for Alfa Romeo before he established his own racing
            stable. The first car to bear the Ferrari name—the 125 S—debuted in 1947, powered by a 1.5-litre V12
            engine. This set the template for Ferrari's engineering philosophy: small-displacement, high-revving
            engines delivering extraordinary performance.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Through the 1950s and 60s, Ferrari became synonymous with Le Mans victories and Formula 1 glory. Iconic
            road cars such as the 250 GTO, 275 GTB, and Daytona defined the brand's visual language and cemented
            collector values that endure today.
          </p>
        </MHASection>

        <MHASection heading="Fiat Acquisition to the Modern Era (1969–2015)" headingColor="text-orange-400">
          <p className="text-gray-300 leading-relaxed mb-4">
            In 1969, Fiat acquired a 50% stake in Ferrari, providing capital for expanded production. The partnership
            funded landmark models including the Testarossa, F40, F50, Enzo, and LaFerrari—each representing the
            pinnacle of road-going performance at their respective launches.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Ferrari was listed on the New York Stock Exchange and Borsa Italiana in October 2015, separating from
            Fiat Chrysler Automobiles as an independent company. The IPO valued Ferrari at approximately €9 billion,
            marking the start of its modern chapter as a publicly traded luxury brand.
          </p>
        </MHASection>

        <MHASection heading="Ferrari Today (2016–Present)" headingColor="text-yellow-400">
          <p className="text-gray-300 leading-relaxed mb-4">
            Under CEO <strong>Benedetto Vigna</strong> (appointed 2021), Ferrari has accelerated its electrification
            strategy while maintaining its performance-first ethos. The <strong>Ferrari SF90 Stradale</strong>
            —introduced in 2019—became the brand's first series-production plug-in hybrid, delivering 1,000 hp from a
            combined V8 and triple-motor setup.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Ferrari's first fully electric vehicle, the <strong>Ferrari Electric</strong> (project codenamed
            "Elettrica"), is expected before 2026, signalling the brand's commitment to an electrified future without
            sacrificing the emotional character its customers demand.
          </p>
        </MHASection>
      </section>

      {/* Current Lineup */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Current Model Lineup</h2>
        <MHASection>
          <p className="text-gray-300 leading-relaxed mb-6">
            As of 2026, Ferrari's road car portfolio spans grand tourers, mid-engine V8s, V12 flagships, and hybrid
            hypercars. Key models include:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-xl font-semibold text-red-400 mb-3">V8 / V6 Hybrid</h4>
              <ul className="text-gray-300 space-y-1">
                <li>• Ferrari Roma — 3.9L twin-turbo V8, 612 hp</li>
                <li>• Ferrari Roma Spider — open-top grand tourer</li>
                <li>• Ferrari Portofino M — convertible GT, 620 hp</li>
                <li>• Ferrari SF90 Stradale — PHEV, 1,000 hp</li>
                <li>• Ferrari SF90 Spider — open-top PHEV flagship</li>
                <li>• Ferrari 296 GTB — 830 hp V6 hybrid berlinetta</li>
                <li>• Ferrari 296 GTS — open-top 296</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-yellow-400 mb-3">V12 &amp; Special Series</h4>
              <ul className="text-gray-300 space-y-1">
                <li>• Ferrari 12Cilindri — 830 hp naturally aspirated V12</li>
                <li>• Ferrari 12Cilindri Spider — convertible V12</li>
                <li>• Ferrari Purosangue — SUV, 725 hp V12</li>
                <li>• Ferrari F80 — hypercar, 1,200 hp hybrid</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-orange-400 mb-3">XX Programme &amp; Track-Only</h4>
            <ul className="text-gray-300 space-y-1">
              <li>• Ferrari 499P Modificata — Le Mans Hypercar road-legal derivative</li>
              <li>• Ferrari FXX-K Evo — track-only hybrid, 1,050 hp</li>
            </ul>
          </div>
        </MHASection>
      </section>

      {/* Formula 1 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Formula 1 — Scuderia Ferrari</h2>

        <MHASection heading="F1 Heritage" headingColor="text-red-400">
          <p className="text-gray-300 leading-relaxed mb-4">
            Scuderia Ferrari has competed in every Formula 1 World Championship season since 1950, making it the
            only team present from the sport's inaugural year to the present day. The team has accumulated:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>16 Constructors' World Championships</li>
            <li>15 Drivers' World Championships</li>
            <li>240+ race victories (as of February 2026)</li>
            <li>Driver legends including Ascari, Lauda, Scheckter, Prost, Schumacher, Räikkönen, and Leclerc</li>
          </ul>
        </MHASection>

        <MHASection
          heading="2026 Season — SF-25 &amp; New Regulations"
          headingColor="text-orange-400"
          highlight={
            <>
              <h4 className="text-xl font-semibold text-red-400 mb-3">2026 Driver Lineup</h4>
              <p className="text-gray-300 leading-relaxed mb-2">
                <strong>Charles Leclerc</strong> (Monaco) — 2022 Championship runner-up, Ferrari's long-term
                cornerstone driver.
              </p>
              <p className="text-gray-300 leading-relaxed mb-2">
                <strong>Lewis Hamilton</strong> — Seven-time World Champion, joined Ferrari for 2025 in one of
                motorsport's most high-profile signings.
              </p>
              <Link
                href="/formula-1"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 underline mt-2"
              >
                Full 2026 F1 Season Coverage →
              </Link>
            </>
          }
        >
          <p className="text-gray-300 leading-relaxed mb-4">
            The 2026 Formula 1 season introduces sweeping technical regulation changes — smaller cars, reduced
            downforce, and a new 50/50 hybrid power unit split between combustion and electrical energy. Ferrari's
            SF-25 challenger was developed entirely under the new ruleset, with the Maranello factory investing
            heavily in aerodynamic research and a revised power unit.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Following the near-miss championship challenges of 2022 and 2024, Ferrari enters 2026 as one of the
            strongest constructor contenders alongside Red Bull and Mercedes.
          </p>
        </MHASection>
      </section>

      {/* Technology & Engineering */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Technology &amp; Engineering</h2>
        <MHASection>
          <h3 className="text-2xl font-semibold text-red-400 mb-4">Powertrain Philosophy</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Ferrari's engineering identity has always centred on high-revving, naturally aspirated engines—most
            famously the V12 screaming to 9,000 rpm. Modern emissions regulations pushed the brand toward
            twin-turbocharged V8s and hybrid systems, but Ferrari has preserved the emotional soundtrack that defines
            the ownership experience.
          </p>

          <h3 className="text-2xl font-semibold text-orange-400 mb-4 mt-6">Electrification Roadmap</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Ferrari's electrification plan includes:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li>Plug-in hybrid models across the core range by 2026</li>
            <li>First fully electric Ferrari expected in 2025–2026</li>
            <li>Retention of V12 combustion engine in top-tier models through the decade</li>
            <li>Proprietary battery and e-motor development in-house at Maranello</li>
          </ul>

          <h3 className="text-2xl font-semibold text-yellow-400 mb-4 mt-6">Personalisation — Tailor Made</h3>
          <p className="text-gray-300 leading-relaxed">
            Ferrari's <strong>Tailor Made</strong> programme allows clients to specify bespoke interior and exterior
            configurations beyond the standard options list. From hand-stitched leather combinations to custom paint
            colours matched to personal items, Tailor Made cars command a significant premium and represent Ferrari's
            commitment to one-of-a-kind craftsmanship.
          </p>
        </MHASection>
      </section>

      {/* Brand & Culture */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Brand &amp; Culture</h2>
        <MHASection>
          <p className="text-gray-300 leading-relaxed mb-4">
            Ferrari's brand power extends far beyond the automotive sector. The Prancing Horse appears on licensed
            merchandise, fashion collaborations, theme park experiences (Ferrari World Abu Dhabi), and esports
            partnerships. In 2023, Ferrari was valued at over <strong>$34 billion</strong> as a brand—regularly
            appearing in the top 10 most valuable luxury brands globally.
          </p>

          <h3 className="text-2xl font-semibold text-red-400 mb-4 mt-6">Ferrari Museums</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong>Museo Ferrari (Maranello)</strong> — the historic home, adjacent to the factory</li>
            <li><strong>Museo Enzo Ferrari (Modena)</strong> — dedicated to the founder's life and early career</li>
          </ul>

          <h3 className="text-2xl font-semibold text-orange-400 mb-4 mt-6">Ferrari in Popular Culture</h3>
          <p className="text-gray-300 leading-relaxed">
            From Magnum P.I.'s 308 GTS to the Ferrari 250 GT California in Ferris Bueller's Day Off and the
            countless appearances in music videos and film, Ferrari has cemented its status as a cultural icon
            synonymous with aspiration, speed, and Italian craftsmanship.
          </p>
        </MHASection>
      </section>
    </MHAArticle>
  );
}
