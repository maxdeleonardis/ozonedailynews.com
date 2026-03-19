import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';

export const metadata: Metadata = {
  title: 'Kristi Noem — U.S. Secretary of Homeland Security | ObjectWire',
  description:
    'Kristi Noem is the U.S. Secretary of Homeland Security under President Donald Trump, confirmed January 25, 2025. Formerly the 33rd Governor of South Dakota (2019–2025) and U.S. Representative for South Dakota\'s at-large congressional district (2011–2019), she is one of the most prominent figures in the modern Republican Party.',
  keywords: [
    'Kristi Noem DHS Secretary',
    'Kristi Noem Homeland Security',
    'Kristi Noem biography',
    'Kristi Noem South Dakota Governor',
    'Kristi Noem Trump cabinet',
    'Secretary of Homeland Security 2025',
    'Kristi Noem immigration policy',
    'Kristi Noem COVID policy South Dakota',
    'DHS Secretary 2026',
    'Kristi Noem FEMA',
    'Kristi Noem World Cup security',
    'Kristi Noem No Going Back memoir',
    'Kristi Noem career profile',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/trump/kristi-noem',
  },
  openGraph: {
    title: 'Kristi Noem — U.S. Secretary of Homeland Security | ObjectWire',
    description:
      'From South Dakota state legislator to Governor to head of DHS under Trump. The full profile of Kristi Noem.',
    type: 'article',
    publishedTime: '2026-02-25T18:00:00Z',
    url: 'https://www.objectwire.org/trump/kristi-noem',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kristi Noem — U.S. Secretary of Homeland Security | ObjectWire',
    description:
      'Former South Dakota Governor, now leading DHS under Trump. Full biography and policy record.',
  },
};

export default function KristiNoemPage() {
  const breadcrumbItems = [
    { name: 'Home', item: '/' },
    { name: 'Trump Administration', item: '/trump' },
    { name: 'Kristi Noem', item: '/trump/kristi-noem' },
  ];

  return (
    <>
      <NewsArticleSchema
        title="Kristi Noem — U.S. Secretary of Homeland Security"
        description="Full profile of Kristi Noem: South Dakota state legislator, U.S. Representative (2011–2019), 33rd Governor of South Dakota (2019–2025), and U.S. Secretary of Homeland Security confirmed January 25, 2025."
        author="ObjectWire Editorial"
        authorUrl="https://www.objectwire.org/team"
        publishedTime="2026-02-25T18:00:00Z"
        modifiedTime="2026-02-25T18:00:00Z"
        articleUrl="https://www.objectwire.org/trump/kristi-noem"
        section="Trump Administration"
        keywords={[
          'Kristi Noem',
          'DHS Secretary',
          'Secretary of Homeland Security',
          'South Dakota Governor',
          'Trump Cabinet',
          'FEMA',
          'Homeland Security 2025',
        ]}
      />

      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-4 max-w-6xl">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Wikipedia-Style Header */}
        <header className="border-b border-gray-200 pb-6 mb-6">
          <div className="container mx-auto px-4 max-w-6xl">
            <h1 className="text-4xl font-serif mb-2">Kristi Noem</h1>
            <p className="text-gray-600 italic">
              From ObjectWire, the verification-first intelligence platform
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-6xl pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Main Content */}
            <main className="lg:col-span-8 order-2 lg:order-1">

              {/* Lead Paragraph */}
              <p className="text-lg leading-relaxed mb-6">
                <strong>Kristi Lynn Noem</strong> (born November 30, 1971, in{' '}
                <strong>Watertown, South Dakota</strong>) is an American politician serving as the{' '}
                <strong>U.S. Secretary of Homeland Security</strong> under President Donald Trump,
                confirmed by the Senate on <strong>January 25, 2025</strong>. She previously served
                as the <strong>33rd Governor of South Dakota</strong> (2019–2025), the first woman
                to hold that office, and as <strong>U.S. Representative</strong> for South
                Dakota&apos;s at-large congressional district (2011–2019). As DHS Secretary, she
                oversees the department&apos;s 260,000+ employees and a portfolio spanning border
                security, immigration enforcement, cybersecurity, disaster response through{' '}
                <Link href="/world-cup/news/host-cities-security-funding-frozen-dhs-shutdown" className="text-blue-600 hover:underline">
                  FEMA
                </Link>
                , and counterterrorism.
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
                    <a href="#state-legislature" className="text-blue-600 hover:underline">
                      2 South Dakota State Legislature (2007–2011)
                    </a>
                  </li>
                  <li>
                    <a href="#congress" className="text-blue-600 hover:underline">
                      3 U.S. House of Representatives (2011–2019)
                    </a>
                  </li>
                  <li>
                    <a href="#governor" className="text-blue-600 hover:underline">
                      4 Governor of South Dakota (2019–2025)
                    </a>
                    <ol className="ml-4 mt-1 space-y-1">
                      <li>
                        <a href="#covid" className="text-blue-600 hover:underline">
                          4.1 COVID-19 Response
                        </a>
                      </li>
                      <li>
                        <a href="#social-policy" className="text-blue-600 hover:underline">
                          4.2 Social and Legislative Policy
                        </a>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <a href="#dhs-secretary" className="text-blue-600 hover:underline">
                      5 Secretary of Homeland Security (2025–present)
                    </a>
                    <ol className="ml-4 mt-1 space-y-1">
                      <li>
                        <a href="#confirmation" className="text-blue-600 hover:underline">
                          5.1 Senate Confirmation
                        </a>
                      </li>
                      <li>
                        <a href="#dhs-priorities" className="text-blue-600 hover:underline">
                          5.2 Priorities and Actions
                        </a>
                      </li>
                      <li>
                        <a href="#dhs-shutdown" className="text-blue-600 hover:underline">
                          5.3 DHS Partial Funding Lapse (2026)
                        </a>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <a href="#controversies" className="text-blue-600 hover:underline">
                      6 Controversies
                    </a>
                  </li>
                  <li>
                    <a href="#personal" className="text-blue-600 hover:underline">
                      7 Personal Life
                    </a>
                  </li>
                  <li>
                    <a href="#seealso" className="text-blue-600 hover:underline">
                      8 See Also
                    </a>
                  </li>
                </ol>
              </nav>

              {/* Early Life */}
              <section id="early-life" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">
                  Early Life &amp; Education
                </h2>
                <p className="mb-4 leading-relaxed">
                  Kristi Lynn Arnold was born on <strong>November 30, 1971</strong>, in{' '}
                  <strong>Watertown, South Dakota</strong>, the daughter of Ron and Corinne Arnold.
                  She grew up on her family&apos;s farm and ranch in <strong>Hamlin County</strong>,
                  where she was raised in a rural agricultural household. The experience of farm life
                  shaped her political identity and her later emphasis on property rights, limited
                  federal regulation, and South Dakota&apos;s agricultural economy.
                </p>
                <p className="mb-4 leading-relaxed">
                  She attended <strong>South Dakota State University (SDSU)</strong> in Brookings,
                  where she studied plant science and business administration. She left before
                  completing her degree after her father was killed in a farming accident in{' '}
                  <strong>1994</strong>, returning to help manage the family farm. Noem eventually
                  completed her bachelor&apos;s degree in political science from SDSU in{' '}
                  <strong>2012</strong>, while serving in Congress.
                </p>
              </section>

              {/* State Legislature */}
              <section id="state-legislature" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">
                  South Dakota State Legislature (2007–2011)
                </h2>
                <p className="mb-4 leading-relaxed">
                  Noem entered elected office in <strong>2006</strong>, winning a seat in the{' '}
                  <strong>South Dakota House of Representatives</strong> representing District 5.
                  She was re-elected in 2008, serving on the Agriculture and Natural Resources and
                  Commerce and Energy committees. Her time in the state legislature established her
                  as a fiscal conservative focused on tax reduction, agricultural policy, and
                  opposition to federal mandates on state governments.
                </p>
              </section>

              {/* Congress */}
              <section id="congress" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">
                  U.S. House of Representatives (2011–2019)
                </h2>
                <p className="mb-4 leading-relaxed">
                  Noem won South Dakota&apos;s at-large congressional seat in the{' '}
                  <strong>2010 midterm elections</strong>, defeating incumbent Democrat Stephanie
                  Herseth Sandlin. She was re-elected four times. In the House, she served on the{' '}
                  <strong>Ways and Means Committee</strong> and was a member of the{' '}
                  <strong>Republican Study Committee</strong>. She was among the representatives who
                  voted for the <strong>Tax Cuts and Jobs Act of 2017</strong>, the signature
                  legislative achievement of Trump&apos;s first term.
                </p>
                <p className="mb-4 leading-relaxed">
                  During her congressional tenure, Noem was consistently rated as one of the more
                  conservative members of the House Republican caucus by groups such as the{' '}
                  <strong>American Conservative Union</strong>. She focused legislative attention on
                  agriculture, water rights, and reducing federal agency overreach into state land use.
                </p>
              </section>

              {/* Governor */}
              <section id="governor" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">
                  Governor of South Dakota (2019–2025)
                </h2>
                <p className="mb-4 leading-relaxed">
                  Noem was elected Governor of South Dakota in <strong>2018</strong>, defeating
                  Democrat Billie Sutton with 51.6% of the vote. She was inaugurated in January
                  2019 as the <strong>first woman to serve as Governor of South Dakota</strong>.
                  She was re-elected in 2022 by a wide margin, carrying 62% of the vote.
                </p>

                <h3 id="covid" className="text-xl font-semibold mb-3">
                  COVID-19 Response
                </h3>
                <p className="mb-4 leading-relaxed">
                  Noem became a nationally prominent figure during the COVID-19 pandemic for her
                  decision <strong>not to issue a statewide lockdown order or mask mandate</strong>,
                  making South Dakota one of the few states that never implemented broad
                  pandemic-era restrictions. She argued that such measures were government overreach
                  and that South Dakotans were capable of making their own decisions.
                </p>
                <p className="mb-4 leading-relaxed">
                  The decision drew both significant praise from conservatives — including an
                  invitation to speak at national Republican events — and criticism from public
                  health officials, as South Dakota recorded among the highest per-capita COVID-19
                  death rates in the country during the delta wave of <strong>2021</strong>. She
                  hosted the <strong>2020 Mount Rushmore fireworks celebration</strong> attended by
                  President Trump, which critics argued contributed to a local case surge.
                </p>

                <h3 id="social-policy" className="text-xl font-semibold mb-3">
                  Social and Legislative Policy
                </h3>
                <p className="mb-4 leading-relaxed">
                  During her governorship, Noem signed several high-profile pieces of legislation:
                </p>
                <ul className="list-disc ml-6 mb-4 space-y-2 leading-relaxed text-gray-800">
                  <li>
                    <strong>Legislation restricting transgender athletes</strong> in girls&apos; and
                    women&apos;s school sports (2022), making South Dakota one of the first states
                    to enact such a law.
                  </li>
                  <li>
                    <strong>Near-total abortion ban</strong> following the Supreme Court&apos;s
                    Dobbs decision in June 2022, which returned abortion regulation to states.
                  </li>
                  <li>
                    <strong>Tax policy reform</strong> aimed at eliminating the state grocery tax
                    and maintaining South Dakota&apos;s status as a no-income-tax state.
                  </li>
                  <li>
                    <strong>Permitless carry</strong> legislation allowing South Dakota residents
                    to carry a concealed handgun without a permit.
                  </li>
                </ul>
              </section>

              {/* DHS Secretary */}
              <section id="dhs-secretary" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">
                  Secretary of Homeland Security (2025–present)
                </h2>

                <h3 id="confirmation" className="text-xl font-semibold mb-3">
                  Senate Confirmation
                </h3>
                <p className="mb-4 leading-relaxed">
                  President Trump nominated Noem as Secretary of Homeland Security in November 2024.
                  She was confirmed by the Senate on <strong>January 25, 2025</strong>, by a vote
                  of <strong>59–34</strong>, a notably bipartisan margin for a national security
                  post. Several Democratic senators voted for confirmation, citing her executive
                  experience as governor and her stated commitment to border security operations.
                </p>

                <h3 id="dhs-priorities" className="text-xl font-semibold mb-3">
                  Priorities and Actions
                </h3>
                <p className="mb-4 leading-relaxed">
                  Since taking over DHS, Noem has prioritized:
                </p>
                <ul className="list-disc ml-6 mb-4 space-y-2 leading-relaxed text-gray-800">
                  <li>
                    <strong>Border enforcement operations</strong> — expanded coordination between
                    Customs and Border Protection (CBP), Immigration and Customs Enforcement (ICE),
                    and U.S. military assets deployed to the southern border.
                  </li>
                  <li>
                    <strong>Deportation operations</strong> — Noem has overseen a significant
                    increase in interior enforcement operations and deportation flights under the
                    Trump administration&apos;s immigration agenda.
                  </li>
                  <li>
                    <strong>Cybersecurity</strong> — continued development of CISA (Cybersecurity
                    and Infrastructure Security Agency) capabilities for critical infrastructure
                    protection.
                  </li>
                  <li>
                    <strong>FEMA reform</strong> — Noem has signaled support for proposals to
                    restructure or significantly reduce FEMA&apos;s role in disaster response,
                    arguing that states should hold primary responsibility for preparedness and
                    recovery.
                  </li>
                </ul>

                <h3 id="dhs-shutdown" className="text-xl font-semibold mb-3">
                  DHS Partial Funding Lapse (2026)
                </h3>
                <p className="mb-4 leading-relaxed">
                  In January 2026, following Congress&apos;s failure to pass a full-year
                  appropriations bill, DHS entered a partial funding lapse. Noem confirmed in
                  written Congressional testimony that FEMA had been directed to limit operations
                  to &ldquo;bare minimum, life-saving activities,&rdquo; pausing non-essential
                  preparedness grant disbursements.
                </p>
                <p className="mb-4 leading-relaxed">
                  The lapse drew significant attention in the context of the{' '}
                  <Link
                    href="/world-cup/news/host-cities-security-funding-frozen-dhs-shutdown"
                    className="text-blue-600 hover:underline"
                  >
                    2026 FIFA World Cup
                  </Link>
                  , where all 11 U.S. host cities testified before the House Homeland Security
                  Committee on February 25, 2026, that nearly <strong>$900 million</strong> in
                  approved security grants were frozen. The funding covers overtime for security
                  personnel, counter-drone systems, cybersecurity infrastructure, and venue
                  hardening, with the tournament opening <strong>107 days away</strong>.
                </p>
              </section>

              {/* Controversies */}
              <section id="controversies" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">
                  Controversies
                </h2>

                <h3 className="text-xl font-semibold mb-3">
                  &ldquo;No Going Back&rdquo; Memoir (2024)
                </h3>
                <p className="mb-4 leading-relaxed">
                  In her 2024 memoir <em>No Going Back</em>, Noem disclosed that she had shot and
                  killed her 14-month-old dog Cricket after the dog, she wrote, proved difficult
                  to train as a hunting dog and had &ldquo;ruined&rdquo; a pheasant hunt. The
                  passage drew swift and widespread condemnation from across the political spectrum,
                  including from prominent Republicans, and briefly became a focal point in coverage
                  of her vice-presidential prospects. Noem defended the account as an example of
                  the hard decisions required in farm and ranch life.
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  False Claim Regarding Kim Jong Un Meeting
                </h3>
                <p className="mb-4 leading-relaxed">
                  The same memoir contained a claim that Noem had met with <strong>North Korean
                  leader Kim Jong Un</strong>. The claim was quickly disputed and could not be
                  corroborated; Noem subsequently acknowledged the passage contained an error. The
                  episode intensified questions about her foreign policy credentials during the
                  Senate confirmation proceedings.
                </p>

                <h3 className="text-xl font-semibold mb-3">
                  COVID Pandemic Performance
                </h3>
                <p className="mb-4 leading-relaxed">
                  South Dakota&apos;s decision not to lock down generated lasting debate about the
                  tradeoffs between economic continuity and public health outcomes. The state
                  recorded disproportionately high per-capita death rates during certain phases
                  of the pandemic, a record that critics raised during her DHS nomination hearings.
                  Supporters argued the economic and liberty costs of lockdowns justified the
                  approach.
                </p>
              </section>

              {/* Personal Life */}
              <section id="personal" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">
                  Personal Life
                </h2>
                <p className="mb-4 leading-relaxed">
                  Noem married <strong>Bryon Noem</strong> in 1992. They have three children:
                  Kassidy, Kennedy, and Booker. The family maintains agricultural operations in
                  South Dakota. Noem is a Methodist Christian and has spoken publicly about faith
                  as a guiding force in her political decisions. She lists hunting, farming, and
                  fitness among her personal pursuits.
                </p>
              </section>

              {/* See Also */}
              <section id="seealso" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">
                  See Also
                </h2>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/trump" className="text-blue-600 hover:underline">
                      Trump Administration: Full policy and executive action coverage
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/world-cup/news/host-cities-security-funding-frozen-dhs-shutdown"
                      className="text-blue-600 hover:underline"
                    >
                      U.S. World Cup Host Cities Warn of Security Funding Crisis Due to DHS Partial Shutdown
                    </Link>
                  </li>
                  <li>
                    <Link href="/world-cup" className="text-blue-600 hover:underline">
                      2026 FIFA World Cup: Full coverage hub
                    </Link>
                  </li>
                  <li>
                    <Link href="/news" className="text-blue-600 hover:underline">
                      News Hub
                    </Link>
                  </li>
                </ul>
              </section>

            </main>

            {/* Sidebar Infobox */}
            <aside className="lg:col-span-4 order-1 lg:order-2">
              <div className="bg-white border border-gray-200 shadow-sm overflow-hidden sticky top-6">
                {/* Dark header */}
                <div className="bg-gray-900 px-4 py-3">
                  <h3 className="font-black text-xs uppercase tracking-widest text-center text-white">
                    Kristi Noem
                  </h3>
                </div>

                {/* Accent bar placeholder (no official image) */}
                <div className="border-b-2 border-red-500 bg-gray-100 flex items-center justify-center py-10">
                  <span className="text-gray-400 text-sm italic">Official portrait</span>
                </div>

                {/* Data rows */}
                <dl className="divide-y divide-gray-100">
                  {[
                    { label: 'Born', value: 'November 30, 1971, Watertown, South Dakota' },
                    { label: 'Title', value: 'U.S. Secretary of Homeland Security' },
                    { label: 'Assumed Office', value: 'January 25, 2025' },
                    { label: 'President', value: 'Donald Trump (2nd term)' },
                    { label: 'Previous Role', value: '33rd Governor of South Dakota (2019–2025)' },
                    { label: 'Prior Role', value: 'U.S. Representative, South Dakota at-large (2011–2019)' },
                    { label: 'Party', value: 'Republican' },
                    { label: 'Education', value: 'B.S. Political Science, South Dakota State University (2012)' },
                    { label: 'Spouse', value: 'Bryon Noem (m. 1992)' },
                    { label: 'Children', value: '3' },
                    { label: 'Religion', value: 'Methodist' },
                    {
                      label: 'Dept. Budget',
                      value: '$97.3 billion (FY2025 requested)',
                    },
                    { label: 'DHS Employees', value: '~260,000' },
                    {
                      label: 'Confirmation Vote',
                      value: '59–34 (January 25, 2025)',
                    },
                  ].map((row, i) => (
                    <div key={i} className="px-4 py-2.5 flex gap-3">
                      <dt className="text-[11px] font-bold text-gray-400 uppercase tracking-wide min-w-[90px] pt-0.5 shrink-0">
                        {row.label}
                      </dt>
                      <dd className="text-sm text-gray-900 font-medium leading-snug">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
}
