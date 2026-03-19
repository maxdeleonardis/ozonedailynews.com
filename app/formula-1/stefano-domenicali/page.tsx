import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';

export const metadata: Metadata = {
  title: 'Stefano Domenicali — CEO of Formula 1: Career, Tenure & Legacy | ObjectWire',
  description:
    'Stefano Domenicali is the President and CEO of Formula One Group since January 2021. Formerly Ferrari Team Principal (2008–2014) and Lamborghini CEO, he has overseen F1\'s transformation into a global entertainment brand — expanding to Miami, Las Vegas, and driving record revenues.',
  alternates: {
    canonical: 'https://www.objectwire.org/formula-1/stefano-domenicali',
  },
  keywords: [
    'Stefano Domenicali',
    'Formula 1 CEO',
    'CEO of Formula 1 2026',
    'Stefano Domenicali Formula One',
    'Formula 1 President',
    'Stefano Domenicali Ferrari',
    'Stefano Domenicali Lamborghini',
    'Formula One Group CEO',
    'who runs Formula 1',
    'F1 chief executive',
    'Domenicali Miami Grand Prix',
    'Domenicali Las Vegas Grand Prix',
    'F1 expansion strategy',
    'Formula 1 leadership',
    'Stefano Domenicali biography',
    'Formula 1 CEO salary',
    'Formula 1 revenue growth',
    'F1 Netflix Drive to Survive CEO',
  ],
  openGraph: {
    title: 'Stefano Domenicali — CEO of Formula 1 | ObjectWire',
    description:
      'From Ferrari Team Principal to Lamborghini CEO to the helm of the world\'s most watched motorsport. The complete biography of Stefano Domenicali.',
    type: 'article',
    publishedTime: '2026-02-24T10:00:00Z',
    url: 'https://www.objectwire.org/formula-1/stefano-domenicali',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stefano Domenicali — CEO of Formula 1 | ObjectWire',
    description:
      'From Ferrari Team Principal to Lamborghini CEO to President of the world\'s premier motorsport series. Full biography and career profile.',
  },
};

export default function StefanoDomenicaliPage() {
  const breadcrumbItems = [
    { name: 'Home', item: '/' },
    { name: 'Formula 1', item: '/formula-1' },
    { name: 'Stefano Domenicali', item: '/formula-1/stefano-domenicali' },
  ];

  return (
    <>
      <NewsArticleSchema
        title="Stefano Domenicali — President and CEO of Formula One Group"
        description="Full biography of Stefano Domenicali: Ferrari Team Principal 2008–2014, Lamborghini CEO 2016–2020, and Formula One Group President & CEO since January 2021. Covers his transformation of F1 into a global entertainment powerhouse."
        author="Alfansa — ObjectWire Editorial"
        publishedTime="2026-02-24T10:00:00Z"
        modifiedTime="2026-02-24T10:00:00Z"
        articleUrl="https://www.objectwire.org/formula-1/stefano-domenicali"
        section="Sports"
        keywords={[
          'Stefano Domenicali',
          'Formula 1 CEO',
          'Formula One Group',
          'Ferrari Team Principal',
          'Lamborghini CEO',
          'F1 expansion',
        ]}
      />

      <div className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 pt-4 max-w-6xl">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Wikipedia-Style Header */}
        <header className="border-b border-gray-200 pb-6 mb-6">
          <div className="container mx-auto px-4 max-w-6xl">
            <h1 className="text-4xl font-serif mb-2">Stefano Domenicali</h1>
            <p className="text-gray-600 italic">
              From ObjectWire, the verification-first intelligence platform
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-6xl pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* ── Main Content ─────────────────────────────────────────── */}
            <main className="lg:col-span-8">

              {/* Lead Paragraph */}
              <p className="text-lg leading-relaxed mb-6">
                <strong>Stefano Domenicali</strong> (born May 11, 1965, in{' '}
                <strong>Imola, Emilia-Romagna, Italy</strong>) is an Italian sports executive serving
                as <strong>President and Chief Executive Officer of the Formula One Group</strong>{' '}
                since January 2021. Prior to leading the world&apos;s premier motorsport series, he
                served as{' '}
                <Link href="/formula-1" className="text-blue-600 hover:underline">
                  Formula One
                </Link>{' '}
                team principal at <strong>Scuderia Ferrari</strong> from 2008 to 2014 and as{' '}
                <strong>CEO of Automobili Lamborghini</strong> from 2016 to 2020. Under his
                leadership, Formula 1 has undergone a landmark commercial transformation — expanding
                to new markets including <strong>Miami, Las Vegas, and Saudi Arabia</strong>,
                breaking global viewership records, and generating revenues surpassing{' '}
                <strong>$3 billion annually</strong>.
              </p>

              {/* Table of Contents */}
              <nav className="bg-gray-50 border border-gray-200 p-4 mb-8 rounded-lg">
                <h2 className="font-bold text-gray-900 mb-3 border-b border-gray-300 pb-2">
                  Contents
                </h2>
                <ol className="space-y-1 text-sm">
                  <li>
                    <a href="#early-life" className="text-blue-600 hover:underline">
                      1 Early Life &amp; Education
                    </a>
                  </li>
                  <li>
                    <a href="#ferrari" className="text-blue-600 hover:underline">
                      2 Career at Ferrari (1991–2014)
                    </a>
                    <ol className="ml-4 mt-1 space-y-1">
                      <li>
                        <a href="#ferrari-rise" className="text-blue-600 hover:underline">
                          2.1 Rise Through the Ranks
                        </a>
                      </li>
                      <li>
                        <a href="#ferrari-team-principal" className="text-blue-600 hover:underline">
                          2.2 Team Principal (2008–2014)
                        </a>
                      </li>
                      <li>
                        <a href="#ferrari-departure" className="text-blue-600 hover:underline">
                          2.3 Departure
                        </a>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <a href="#lamborghini" className="text-blue-600 hover:underline">
                      3 Lamborghini CEO (2016–2020)
                    </a>
                  </li>
                  <li>
                    <a href="#f1-ceo" className="text-blue-600 hover:underline">
                      4 President &amp; CEO of Formula 1 (2021–present)
                    </a>
                    <ol className="ml-4 mt-1 space-y-1">
                      <li>
                        <a href="#commercial-expansion" className="text-blue-600 hover:underline">
                          4.1 Commercial Expansion
                        </a>
                      </li>
                      <li>
                        <a href="#new-races" className="text-blue-600 hover:underline">
                          4.2 New Grands Prix
                        </a>
                      </li>
                      <li>
                        <a href="#digital-media" className="text-blue-600 hover:underline">
                          4.3 Media &amp; Digital Strategy
                        </a>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <a href="#controversies" className="text-blue-600 hover:underline">
                      5 Controversies &amp; Criticisms
                    </a>
                  </li>
                  <li>
                    <a href="#personal" className="text-blue-600 hover:underline">
                      6 Personal Life
                    </a>
                  </li>
                  <li>
                    <a href="#legacy" className="text-blue-600 hover:underline">
                      7 Legacy &amp; Assessment
                    </a>
                  </li>
                  <li>
                    <a href="#seealso" className="text-blue-600 hover:underline">
                      8 See Also
                    </a>
                  </li>
                  <li>
                    <a href="#references" className="text-blue-600 hover:underline">
                      9 References
                    </a>
                  </li>
                </ol>
              </nav>

              {/* ── Early Life ─────────────────────────────────────────── */}
              <section id="early-life" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">
                  Early Life &amp; Education
                </h2>
                <p className="mb-4 leading-relaxed">
                  Stefano Domenicali was born on <strong>May 11, 1965</strong>, in{' '}
                  <strong>Imola</strong>, a city in the Emilia-Romagna region of northern Italy —
                  the same city that hosted the{' '}
                  <a
                    href="https://en.wikipedia.org/wiki/Autodromo_Enzo_e_Dino_Ferrari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Autodromo Enzo e Dino Ferrari
                  </a>
                  , a circuit intimately connected to the history of Formula 1 and Scuderia Ferrari.
                  Growing up in a region steeped in motorsport culture — the Emilia-Romagna &ldquo;Motor
                  Valley&rdquo; is home to Ferrari, Lamborghini, Maserati, Ducati, and Dallara —
                  Domenicali developed an early affinity for the sport.
                </p>
                <p className="mb-4 leading-relaxed">
                  He pursued higher education at the{' '}
                  <strong>University of Bologna</strong>, one of the oldest and most prestigious
                  universities in the world, where he studied <strong>economics and business
                  administration</strong>. His academic background in business finance would prove
                  formative in his later ability to manage the commercial and strategic dimensions of
                  both Ferrari and, ultimately, Formula 1 itself.
                </p>
              </section>

              {/* ── Ferrari Career ─────────────────────────────────────── */}
              <section id="ferrari" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">
                  Career at Ferrari (1991–2014)
                </h2>

                <h3 id="ferrari-rise" className="text-lg font-semibold mb-3">
                  Rise Through the Ranks
                </h3>
                <p className="mb-4 leading-relaxed">
                  Domenicali joined <strong>Scuderia Ferrari</strong> in <strong>1991</strong>, at
                  age 26, in an administrative role within the sporting department. Over a 23-year
                  association with the Maranello team, he rose steadily through the organization —
                  working across personnel management, logistics, and operations. His ascent was
                  notable for spanning both the late-Barnard/Alesi era of Ferrari and into the
                  transformative Todt-Schumacher dynasty that delivered five consecutive
                  Constructors&apos; Championships (1999–2004).
                </p>
                <p className="mb-4 leading-relaxed">
                  During the Schumacher era, Domenicali served in supporting operational management
                  roles, working alongside technical director <strong>Ross Brawn</strong> and
                  sporting director <strong>Jean Todt</strong> — gaining an inside view of what
                  the most dominant constructor in the sport&apos;s history looked like from within.
                  His progression was rewarded when he was appointed to the senior management
                  structure ahead of the team&apos;s post-Schumacher transition.
                </p>

                <h3 id="ferrari-team-principal" className="text-lg font-semibold mb-3">
                  Team Principal (2008–2014)
                </h3>
                <p className="mb-4 leading-relaxed">
                  Following Jean Todt&apos;s departure to become FIA President, Domenicali was
                  appointed <strong>Ferrari Team Principal</strong> ahead of the{' '}
                  <strong>2008 season</strong>. He inherited a competitive package — and in his
                  debut season, Kimi Räikkönen had just won the 2007 Drivers&apos; Championship.
                  In 2008 he oversaw a season in which <strong>Felipe Massa</strong> came agonizingly
                  close to the Drivers&apos; title, losing to Lewis Hamilton by a single point on the
                  final lap of the final race in Brazil.
                </p>
                <p className="mb-4 leading-relaxed">
                  Ferrari won the <strong>2008 Constructors&apos; Championship</strong> under
                  Domenicali&apos;s leadership — the team&apos;s most recent constructor title to
                  date. The following years were marked by fierce competition with{' '}
                  <strong>Red Bull Racing</strong> and the emergence of Sebastian Vettel as a
                  dominant force. Ferrari challenged strongly in <strong>2010</strong> and{' '}
                  <strong>2012</strong> with Fernando Alonso at the wheel, with the Spaniard twice
                  finishing runner-up in world title battles with Vettel that went to the final race.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-300">
                        <th className="p-3 text-left font-semibold">Season</th>
                        <th className="p-3 text-left font-semibold">Driver</th>
                        <th className="p-3 text-left font-semibold">WDC Position</th>
                        <th className="p-3 text-left font-semibold">WCC Position</th>
                        <th className="p-3 text-left font-semibold">Notable</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-3">2008</td>
                        <td className="p-3">Räikkönen / Massa</td>
                        <td className="p-3">2nd (Massa, −1 pt)</td>
                        <td className="p-3 font-bold text-red-600">1st ✓</td>
                        <td className="p-3">Hamilton wins WDC on final lap; Ferrari win WCC</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="p-3">2009</td>
                        <td className="p-3">Räikkönen / Massa</td>
                        <td className="p-3">6th</td>
                        <td className="p-3">4th</td>
                        <td className="p-3">Massa injured mid-season; Brawn GP dominates</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3">2010</td>
                        <td className="p-3">Alonso / Massa</td>
                        <td className="p-3">2nd (Alonso)</td>
                        <td className="p-3">3rd</td>
                        <td className="p-3">Alonso loses title to Vettel by 4 pts, Abu Dhabi</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="p-3">2011</td>
                        <td className="p-3">Alonso / Massa</td>
                        <td className="p-3">4th</td>
                        <td className="p-3">3rd</td>
                        <td className="p-3">Vettel / Red Bull dominant</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3">2012</td>
                        <td className="p-3">Alonso / Massa</td>
                        <td className="p-3">2nd (Alonso)</td>
                        <td className="p-3">2nd</td>
                        <td className="p-3">Alonso loses title by 3 pts; closest championship in years</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="p-3">2013</td>
                        <td className="p-3">Alonso / Massa</td>
                        <td className="p-3">2nd (Alonso)</td>
                        <td className="p-3">2nd</td>
                        <td className="p-3">Vettel wins last 9 races</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3">2014</td>
                        <td className="p-3">Alonso / Räikkönen</td>
                        <td className="p-3">—</td>
                        <td className="p-3">—</td>
                        <td className="p-3">Domenicali resigns April 2014; replaced by Marco Mattiacci</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 id="ferrari-departure" className="text-lg font-semibold mb-3">
                  Departure (April 2014)
                </h3>
                <p className="mb-4 leading-relaxed">
                  On <strong>April 13, 2014</strong>, following a difficult start to the season —
                  with Ferrari struggling against the new turbo-hybrid regulations introduced that
                  year — Domenicali resigned as Team Principal. In a dignified statement, he
                  accepted responsibility for the team&apos;s results and expressed personal
                  conviction that a change of leadership was in Ferrari&apos;s best interests.
                </p>
                <blockquote className="border-l-4 border-red-600 pl-6 italic my-6">
                  &ldquo;I have decided to take responsibility for the current situation and to
                  leave my position as Team Principal. This decision is one of the most difficult
                  — and painful — that I have ever had to take. But I felt it was the right one
                  for Ferrari.&rdquo;
                  <footer className="text-sm text-gray-500 mt-2 not-italic">
                    — Stefano Domenicali, April 2014
                  </footer>
                </blockquote>
                <p className="leading-relaxed">
                  His departure was widely characterised as graceful. He remains the only Ferrari
                  Team Principal to have voluntarily resigned rather than been dismissed — and his
                  reputation within the paddock remained intact. He was subsequently involved with
                  the FIA in various advisory capacities before his transition to Lamborghini.
                </p>
              </section>

              {/* ── Lamborghini ────────────────────────────────────────── */}
              <section id="lamborghini" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">
                  CEO of Automobili Lamborghini (2016–2020)
                </h2>
                <p className="mb-4 leading-relaxed">
                  In <strong>2016</strong>, Domenicali was appointed <strong>CEO of
                  Automobili Lamborghini</strong>, the iconic Italian supercar manufacturer also
                  headquartered in the Emilia-Romagna Motor Valley. The appointment returned him
                  to a senior executive role within the Volkswagen Group&apos;s prestige portfolio,
                  alongside brands such as Bentley, Bugatti, Porsche, and Audi.
                </p>
                <p className="mb-4 leading-relaxed">
                  During his tenure at Lamborghini, Domenicali oversaw the launch of the{' '}
                  <strong>Urus</strong> — Lamborghini&apos;s first SUV — in 2018, a vehicle that
                  would prove transformative for the brand&apos;s commercial profile. The Urus
                  effectively doubled Lamborghini&apos;s annual sales volume and opened the brand
                  to a broader global demographic, while also generating significant criticism from
                  traditionalists who saw an SUV as antithetical to Lamborghini&apos;s identity.
                </p>
                <p className="leading-relaxed">
                  Under Domenicali, Lamborghini posted record sales figures in 2019 and expanded its
                  presence in Asian markets. His ability to navigate the commercial expansion of an
                  aspirational performance brand — growing revenues while preserving brand cachet —
                  directly informed the strategy he would later apply to Formula 1.
                </p>
              </section>

              {/* ── F1 CEO ─────────────────────────────────────────────── */}
              <section id="f1-ceo" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">
                  President &amp; CEO of Formula 1 (2021–present)
                </h2>
                <p className="mb-4 leading-relaxed">
                  Domenicali was announced as President and CEO of the{' '}
                  <strong>Formula One Group</strong> in <strong>September 2020</strong>, succeeding
                  American business executive{' '}
                  <strong>Chase Carey</strong>, who himself had replaced the long-serving{' '}
                  <strong>Bernie Ecclestone</strong> after Liberty Media acquired Formula 1 in 2017.
                  Domenicali formally assumed the role on <strong>January 1, 2021</strong>.
                </p>
                <p className="mb-4 leading-relaxed">
                  His appointment was greeted with near-universal enthusiasm in the paddock. As a
                  motorsport insider who had spent 23 years at Ferrari and understood the technical,
                  sporting, and political complexities of the sport from the inside, Domenicali
                  brought credibility that none of his recent predecessors could match. He was{' '}
                  <em>of</em> Formula 1 in a way Chase Carey — a cable television executive — was
                  not.
                </p>

                <h3 id="commercial-expansion" className="text-lg font-semibold mb-3">
                  Commercial Expansion &amp; Revenue Growth
                </h3>
                <p className="mb-4 leading-relaxed">
                  The most immediately striking achievement of Domenicali&apos;s tenure has been
                  the commercial transformation of Formula 1. In 2021 — his first full year — the
                  sport&apos;s revenues reached approximately <strong>$2.1 billion</strong>,
                  recovering from a COVID-impacted 2020. By 2023, total revenue had surpassed{' '}
                  <strong>$3.2 billion</strong>, and 2024 and 2025 figures have continued to grow,
                  driven by race promotion fees, media rights, and sponsorship.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-300">
                        <th className="p-3 text-left font-semibold">Year</th>
                        <th className="p-3 text-left font-semibold">F1 Revenue (est.)</th>
                        <th className="p-3 text-left font-semibold">Race Calendar</th>
                        <th className="p-3 text-left font-semibold">Key Milestone</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-3">2021</td>
                        <td className="p-3">~$2.1B</td>
                        <td className="p-3">23 races</td>
                        <td className="p-3">Domenicali&apos;s first full year; sprint format introduced</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="p-3">2022</td>
                        <td className="p-3">~$2.6B</td>
                        <td className="p-3">22 races</td>
                        <td className="p-3">Miami Grand Prix debuts; major US expansion begins</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3">2023</td>
                        <td className="p-3">~$3.2B</td>
                        <td className="p-3">23 races</td>
                        <td className="p-3">Las Vegas Grand Prix inaugural; record race count</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="p-3">2024</td>
                        <td className="p-3">~$3.6B</td>
                        <td className="p-3">24 races</td>
                        <td className="p-3">Record calendar; US viewership peaks</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3">2025</td>
                        <td className="p-3">~$3.9B est.</td>
                        <td className="p-3">24 races</td>
                        <td className="p-3">New broadcast and streaming deals; Madrid GP confirmed for 2026</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">2026</td>
                        <td className="p-3 font-semibold">TBC</td>
                        <td className="p-3">24 races + Madrid GP</td>
                        <td className="p-3">New power unit regulations; Audi enters as constructor</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 id="new-races" className="text-lg font-semibold mb-3">
                  New Grands Prix &amp; Calendar Expansion
                </h3>
                <p className="mb-4 leading-relaxed">
                  One of Domenicali&apos;s defining contributions has been the deliberate
                  expansion of F1&apos;s race calendar, particularly into <strong>the United
                  States and Middle East</strong>, which he identified as high-growth commercial
                  markets.
                </p>

                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li>
                    <strong>Miami Grand Prix (2022)</strong> — Formula 1&apos;s second US race, held
                    at the{' '}
                    <Link href="/formula-1" className="text-blue-600 hover:underline">
                      Formula 1
                    </Link>{' '}
                    Miami International Autodrome around Hard Rock Stadium. Became an immediate
                    cultural phenomenon, attracting celebrities and generating more than $400 million
                    of economic impact for the region in its first year.
                  </li>
                  <li>
                    <strong>Las Vegas Grand Prix (2023)</strong> — F1&apos;s third US race and the
                    most commercially ambitious addition to the calendar, held on the Las Vegas Strip.
                    Liberty Media owns and operates the race directly — a unique arrangement that
                    allows maximum revenue capture. The inaugural event generated over $1 billion in
                    local economic impact.
                  </li>
                  <li>
                    <strong>Saudi Arabian Grand Prix (2021)</strong> — A street circuit in Jeddah,
                    added to bring F1 to the Gulf region as part of a lucrative long-term deal.
                    Controversial due to Saudi Arabia&apos;s human rights record, but commercially
                    significant.
                  </li>
                  <li>
                    <strong>Qatar Grand Prix (2023)</strong> — Added to the permanent calendar as
                    part of F1&apos;s Middle East expansion, complementing the existing Bahrain and
                    Abu Dhabi rounds.
                  </li>
                  <li>
                    <strong>Madrid Grand Prix (2026)</strong> — Confirmed for 2026, replacing the
                    Barcelona Spanish Grand Prix at a new street circuit layout in Madrid&apos;s IFEMA
                    exhibition complex.
                  </li>
                </ul>

                <h3 id="digital-media" className="text-lg font-semibold mb-3">
                  Media, Digital &amp; Entertainment Strategy
                </h3>
                <p className="mb-4 leading-relaxed">
                  Domenicali has embraced and accelerated the entertainment-first strategy that
                  Chase Carey began with the commission of <em>Formula 1: Drive to Survive</em> for
                  Netflix. Under Domenicali&apos;s tenure, the series — which provides behind-the-scenes
                  access to team and driver narratives — expanded to six seasons and is widely credited
                  with driving a generational shift in F1&apos;s fanbase, particularly in the United
                  States, where viewership on ESPN grew by over 50% between 2018 and 2023.
                </p>
                <p className="mb-4 leading-relaxed">
                  Beyond Netflix, Domenicali has overseen:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li>
                    New broadcast deals in the US (ESPN), UK (Sky Sports), and emerging markets
                    including India and Southeast Asia
                  </li>
                  <li>
                    The expansion of the{' '}
                    <strong>F1 Arcade</strong> hospitality and entertainment brand to major global
                    cities
                  </li>
                  <li>
                    A partnership with <strong>EA Sports</strong> covering the official F1 video game
                    franchise and esports competition
                  </li>
                  <li>
                    Aggressive social media and short-form video strategies on TikTok, Instagram
                    Reels, and YouTube Shorts, targeting younger demographics
                  </li>
                  <li>
                    The development of <strong>F1 TV Pro</strong> — Formula 1&apos;s own direct-to-consumer
                    streaming platform available in markets where traditional broadcast rights are not
                    exclusively licensed
                  </li>
                </ul>
              </section>

              {/* ── Controversies ──────────────────────────────────────── */}
              <section id="controversies" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">
                  Controversies &amp; Criticisms
                </h2>

                <h3 className="text-lg font-semibold mb-3">Calendar Overload</h3>
                <p className="mb-4 leading-relaxed">
                  Domenicali&apos;s expansion to 24 races has drawn sustained criticism from drivers,
                  team personnel, and commentators who argue the calendar is too demanding on both
                  human and mechanical resources. Multiple drivers — including <strong>Lewis
                  Hamilton</strong>, <strong>Max Verstappen</strong>, and <strong>Fernando
                  Alonso</strong> — have publicly questioned the sustainability of a 24-race season,
                  raising concerns about burnout and the erosion of race prestige when Grands Prix
                  become weekly occurrences.
                </p>

                <h3 className="text-lg font-semibold mb-3">
                  Human Rights &amp; Sportswashing Criticism
                </h3>
                <p className="mb-4 leading-relaxed">
                  The addition of Saudi Arabian and Qatar Grands Prix, alongside the existing Bahrain
                  and Abu Dhabi rounds, has subjected Domenicali to persistent criticism from human
                  rights organisations who accuse Formula 1 of facilitating &ldquo;sportswashing&rdquo; —
                  using the sport&apos;s global brand to improve the reputations of authoritarian
                  governments. Domenicali has consistently defended the presence, arguing that{' '}
                  <em>&ldquo;engagement is better than isolation&rdquo;</em> and that F1&apos;s presence
                  creates a platform for positive dialogue. Critics remain unpersuaded.
                </p>

                <h3 className="text-lg font-semibold mb-3">Traditional Circuits Under Threat</h3>
                <p className="leading-relaxed">
                  F1&apos;s pivot toward high-fee city circuits and new markets has put pressure on
                  historic European venues — including the{' '}
                  <strong>Belgian Grand Prix</strong> (Spa-Francorchamps) and the{' '}
                  <strong>Spanish Grand Prix</strong> (Barcelona, replaced by Madrid in 2026) —
                  which struggle to match the race fees paid by Gulf sovereign wealth funds and
                  American city promoters. Many within the sport view this as a commercial
                  prioritisation that risks alienating the European fanbase that built F1&apos;s
                  foundational audience.
                </p>
              </section>

              {/* ── Personal Life ──────────────────────────────────────── */}
              <section id="personal" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">
                  Personal Life
                </h2>
                <p className="mb-4 leading-relaxed">
                  Domenicali is married and has children. He is known for maintaining a low personal
                  profile compared to his public executive role, rarely engaging in gossip or
                  personal controversy. He speaks fluent <strong>Italian, English, and French</strong>
                  — a linguistic range that reflects the international nature of both the Formula 1
                  paddock and his years operating across European corporate environments.
                </p>
                <p className="leading-relaxed">
                  He is based in the{' '}
                  <strong>London</strong> area, where Formula One Group is headquartered, while
                  maintaining close ties to Italy and the Emilia-Romagna motorsport community. He
                  is widely regarded in the paddock as approachable, political in the best sense —
                  able to manage the fiercely competing interests of 10 constructor teams — and
                  deeply knowledgeable about every dimension of the sport.
                </p>
              </section>

              {/* ── Legacy ─────────────────────────────────────────────── */}
              <section id="legacy" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">
                  Legacy &amp; Assessment
                </h2>
                <p className="mb-4 leading-relaxed">
                  It is difficult to overstate the scale of Formula 1&apos;s transformation under
                  Domenicali and Liberty Media. When he took over in January 2021, the sport was
                  emerging from its worst commercial year in decades (COVID-impacted 2020). Five
                  years later, F1 is arguably the{' '}
                  <strong>fastest-growing major sports property on the planet</strong> — with
                  revenues more than 85% above pre-pandemic levels, a younger global fanbase,
                  growing US footprint, and a cultural presence it has never previously enjoyed.
                </p>
                <p className="mb-4 leading-relaxed">
                  The &ldquo;Domenicali formula&rdquo; — if it can be called that — consists of
                  three core elements: <strong>(1)</strong> expanding the calendar into high-fee,
                  high-visibility city markets; <strong>(2)</strong> leveraging media partnerships to
                  tell human stories behind the technical competition; and{' '}
                  <strong>(3)</strong> treating Formula 1 as an{' '}
                  <em>entertainment brand</em>, not merely a sporting competition. Critics argue
                  this dilutes the sporting purity of the championship; supporters point to the
                  numbers.
                </p>
                <blockquote className="border-l-4 border-gray-400 pl-6 italic my-6">
                  &ldquo;Formula 1 is not just about what happens on the track. It is about everything
                  that happens around it — the culture, the energy, the global conversation.
                  That&apos;s what we are building.&rdquo;
                  <footer className="text-sm text-gray-500 mt-2 not-italic">
                    — Stefano Domenicali
                  </footer>
                </blockquote>
                <p className="leading-relaxed">
                  Whether the infrastructure of multiple US Grands Prix, expanded Middle East
                  dates, and 24-race calendars proves sustainable — financially, operationally, and
                  from a sporting quality standpoint — will likely define the final
                  assessment of his tenure. For now, the commercial record is unambiguous.
                </p>
              </section>

              {/* ── See Also ───────────────────────────────────────────── */}
              <section id="seealso" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">
                  See Also
                </h2>
                <ul className="space-y-2 list-disc list-inside ml-2">
                  <li>
                    <Link href="/formula-1" className="text-blue-600 hover:underline">
                      Formula 1 — The Complete Guide
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://www.formula1.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Formula1.com — Official Website
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Stefano_Domenicali"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Stefano Domenicali — Wikipedia
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Formula_One_Group"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Formula One Group — Wikipedia
                    </a>
                  </li>
                </ul>
              </section>

              {/* ── References ─────────────────────────────────────────── */}
              <section id="references" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">
                  References
                </h2>
                <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700 ml-2">
                  <li>
                    <a
                      href="https://www.formula1.com/en/latest/article.domenicali-appointed-president-and-ceo.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Formula1.com — Domenicali appointed President and CEO of Formula 1
                    </a>
                    , September 2020
                  </li>
                  <li>
                    <a
                      href="https://www.bbc.com/sport/formula1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      BBC Sport — Domenicali resigns as Ferrari team principal
                    </a>
                    , April 2014
                  </li>
                  <li>
                    <a
                      href="https://www.autosport.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Autosport — Ferrari under Domenicali: A statistical review
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.motorsport.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Motorsport.com — Domenicali&apos;s commercial transformation of F1
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.forbes.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Forbes — Formula 1&apos;s revenue growth and business model analysis
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.theguardian.com/sport/formulaone"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      The Guardian — Formula 1 calendar controversy and calendar expansion
                    </a>
                  </li>
                </ol>
              </section>

              {/* Article Footer */}
              <div className="border-t border-gray-200 pt-6 text-sm text-gray-500">
                <p>
                  <strong>Author:</strong> Alfansa — ObjectWire Editorial
                </p>
                <p className="mt-1">
                  <strong>Published:</strong> February 24, 2026 &nbsp;|&nbsp;{' '}
                  <strong>Last Updated:</strong> February 24, 2026
                </p>
                <p className="mt-1">
                  Part of ObjectWire&apos;s{' '}
                  <Link href="/formula-1" className="text-blue-600 hover:underline">
                    Formula 1 coverage
                  </Link>
                  .
                </p>
              </div>
            </main>

            {/* ── Sidebar ──────────────────────────────────────────────── */}
            <aside className="lg:col-span-4">
              <div className="sticky top-4 space-y-6">

                {/* Infobox */}
                <div className="border border-gray-300 rounded-lg overflow-hidden text-sm bg-gray-50">
                  {/* Photo */}
                  <div className="bg-gray-200 border-b border-gray-300">
                    <img
                      src="/formula-1/ceo_formula_1.PNG"
                      alt="Stefano Domenicali, President and CEO of Formula One Group"
                      className="w-full h-auto object-cover"
                    />
                    <p className="text-xs text-gray-500 italic text-center px-2 py-1">
                      Stefano Domenicali, President &amp; CEO, Formula One Group
                    </p>
                  </div>

                  {/* Infobox Title */}
                  <div className="bg-gray-100 border-b border-gray-300 p-3 text-center">
                    <h2 className="font-bold text-base">Stefano Domenicali</h2>
                    <p className="text-xs text-gray-500">President &amp; CEO, Formula One Group</p>
                  </div>

                  {/* Key Facts */}
                  <div className="p-3 space-y-2">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-600 text-xs uppercase tracking-wide">
                        Born
                      </span>
                      <span className="text-right text-xs">May 11, 1965 · Imola, Italy</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-600 text-xs uppercase tracking-wide">
                        Nationality
                      </span>
                      <span className="text-xs">Italian</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-600 text-xs uppercase tracking-wide">
                        Education
                      </span>
                      <span className="text-right text-xs">University of Bologna (Economics)</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-600 text-xs uppercase tracking-wide">
                        Current Role
                      </span>
                      <span className="text-right text-xs">President &amp; CEO, F1 Group</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-600 text-xs uppercase tracking-wide">
                        In Role Since
                      </span>
                      <span className="text-xs">January 1, 2021</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-600 text-xs uppercase tracking-wide">
                        Ferrari Tenure
                      </span>
                      <span className="text-xs">1991 – 2014 (23 years)</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-600 text-xs uppercase tracking-wide">
                        Ferrari TP
                      </span>
                      <span className="text-xs">2008 – April 2014</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-600 text-xs uppercase tracking-wide">
                        Lamborghini CEO
                      </span>
                      <span className="text-xs">2016 – 2020</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-600 text-xs uppercase tracking-wide">
                        WCC Titles Won
                      </span>
                      <span className="text-xs">1 (Ferrari 2008)</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-600 text-xs uppercase tracking-wide">
                        Predecessor (F1)
                      </span>
                      <span className="text-xs">Chase Carey</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-600 text-xs uppercase tracking-wide">
                        Languages
                      </span>
                      <span className="text-xs">Italian · English · French</span>
                    </div>
                  </div>
                </div>

                {/* Career Timeline */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-3 text-sm">
                    Career Timeline
                  </h3>
                  <div className="space-y-3 text-xs">
                    {[
                      { year: '1965', event: 'Born in Imola, Italy' },
                      { year: '1991', event: 'Joins Scuderia Ferrari' },
                      { year: '2008', event: 'Appointed Ferrari Team Principal' },
                      { year: '2008', event: 'Wins Constructors\' Championship with Ferrari', highlight: true },
                      { year: '2010', event: 'Alonso runner-up by 4 pts (Red Bull)' },
                      { year: '2012', event: 'Alonso runner-up by 3 pts (Red Bull)' },
                      { year: 'Apr 2014', event: 'Resigns as Ferrari Team Principal' },
                      { year: '2016', event: 'Appointed CEO of Lamborghini' },
                      { year: '2018', event: 'Lamborghini Urus SUV launched' },
                      { year: 'Sep 2020', event: 'Announced as Formula 1 CEO', highlight: true },
                      { year: 'Jan 2021', event: 'Officially assumes F1 CEO role' },
                      { year: '2022', event: 'Miami Grand Prix debut' },
                      { year: '2023', event: 'Las Vegas Grand Prix inaugural' },
                      { year: '2026', event: 'Madrid GP added; new power unit era' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-2">
                        <div
                          className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                            item.highlight ? 'bg-red-600' : 'bg-gray-400'
                          }`}
                        />
                        <div>
                          <span className="font-bold text-gray-800">{item.year}</span>
                          <span className="text-gray-500"> — {item.event}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related F1 Links */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-3 text-sm">
                    Formula 1 Coverage
                  </h3>
                  <ul className="space-y-2 text-xs">
                    <li>
                      <Link
                        href="/formula-1"
                        className="text-blue-600 hover:underline font-medium"
                      >
                        → Formula 1 — Complete Guide
                      </Link>
                    </li>
                    <li className="text-gray-500 pl-3">2026 teams, drivers, calendar, history</li>
                  </ul>
                </div>

                {/* Official Links */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-3 text-sm">
                    Official Links
                  </h3>
                  <ul className="space-y-2 text-xs">
                    <li>
                      <a
                        href="https://www.formula1.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        formula1.com — Official F1 Website
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/stefanodomenicali/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Stefano Domenicali — LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-gray-50 py-8">
          <div className="container mx-auto px-4 max-w-6xl text-center text-sm text-gray-600">
            <p>
              This article is part of{' '}
              <Link href="/" className="text-blue-600 hover:underline">
                ObjectWire
              </Link>
              &apos;s{' '}
              <Link href="/formula-1" className="text-blue-600 hover:underline">
                Formula 1 coverage
              </Link>
              . Written by Alfansa — ObjectWire Editorial. Last updated: February 24, 2026.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
