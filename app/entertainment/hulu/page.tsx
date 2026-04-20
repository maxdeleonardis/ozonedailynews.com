import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage, InfoBox } from '@/components/articles/ArticlePage';
import { Breadcrumb } from '@/components/nav/Breadcrumb';

const SLUG = 'hulu-streaming-wiki';
const ARTICLE_URL = 'https://www.objectwire.org/entertainment/hulu';
const IMAGE_URL = 'https://www.objectwire.org/entertainment/hulu.PNG';

export const metadata: Metadata = {
  title: 'Hulu | Streaming Platform Wiki, Subscribers, Plans 2026',
  description:
    'Hulu is an American subscription streaming service owned by The Walt Disney Company. With 50M+ subscribers, it offers next-day TV, Hulu Originals, live',
  keywords: [
    'Hulu streaming service',
    'Hulu originals 2026',
    'Hulu subscribers',
    'Hulu vs Netflix',
    'Hulu live TV',
    'Disney Hulu',
    'Hulu shows 2026',
    'streaming platforms 2026',
    'Hulu price',
    'Hulu wiki',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Hulu | Streaming Platform Wiki, Subscribers, Plans 2026',
    description:
      'Complete wiki profile of Hulu: history, ownership, subscriber stats, Originals, live TV bundle, and competitive position in the streaming wars.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [{ url: IMAGE_URL, width: 1200, height: 675, alt: 'Hulu streaming service' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hulu | Streaming Platform Wiki, 50M+ Subscribers',
    description: 'Hulu wiki: 50M+ subscribers, next-day TV, Originals, live sports, and Disney Bundle pricing.',
  },
};

export default function HuluWikiPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: 'Home', item: '/' },
          { name: 'Entertainment', item: '/entertainment' },
          { name: 'Hulu', item: '/entertainment/hulu' },
        ]}
      />
      <ArticlePage
        title="Hulu"
        subtitle="American subscription streaming service owned by The Walt Disney Company"
        category="Entertainment"
        lastUpdated="March 2026"
        slug={SLUG}
        url="/entertainment/hulu"
        backLink={{ href: '/entertainment', label: 'Entertainment Hub' }}
        infoBox={{
          title: 'Hulu',
          image: { src: '/entertainment/hulu.PNG', alt: 'Hulu logo', caption: 'Hulu' },
          sections: [
            {
              heading: 'Quick Facts',
              items: [
                { label: 'Founded', value: 'March 12, 2007' },
                { label: 'Headquarters', value: 'Santa Monica, California' },
                { label: 'Owner', value: 'The Walt Disney Company (100%)' },
                { label: 'Subscribers', value: '50M+ (2025)' },
                { label: 'CEO', value: 'Joe Earley' },
                { label: 'Revenue', value: '~$5B+ annually' },
                { label: 'Countries', value: 'United States, Japan' },
              ],
            },
            {
              heading: 'Plans',
              items: [
                { label: 'Ad-supported', value: '$7.99/mo' },
                { label: 'No Ads', value: '$17.99/mo' },
                { label: 'Live TV + Hulu', value: '$82.99/mo' },
                { label: 'Disney Bundle', value: '$14.99/mo' },
              ],
            },
            {
              heading: 'Links',
              links: [
                { href: 'https://www.hulu.com', label: 'Hulu.com', external: true },
                { href: '/entertainment', label: 'Entertainment Hub' },
                { href: '/disney', label: 'Disney+' },
                { href: '/entertainment/hbomax', label: 'HBO / Max' },
                { href: '/netflix', label: 'Netflix' },
              ],
            },
          ],
        }}
        tableOfContents={[
          { id: 'overview', label: 'Overview' },
          { id: 'history', label: 'History' },
          { id: 'disney', label: 'Disney Acquisition' },
          { id: 'originals', label: 'Hulu Originals' },
          { id: 'live-tv', label: 'Hulu + Live TV' },
          { id: 'bundle', label: 'Disney Bundle' },
          { id: 'competition', label: 'Competition' },
          { id: 'news', label: 'Recent News' },
        ]}
        relatedLinks={[
          { href: '/entertainment', label: 'Entertainment Hub' },
          { href: '/netflix', label: 'Netflix Wiki' },
          { href: '/disney', label: 'Disney+' },
          { href: '/entertainment/hbomax', label: 'HBO / Max' },
          { href: '/apple', label: 'Apple TV+' },
          { href: '/entertainment/news/conan-obrien-hosting-98th-oscars-abc-hulu', label: 'Oscars 2026 on Hulu' },
        ]}
      >
        {/* â”€â”€ Overview â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section id="overview" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">Overview</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>Hulu</strong> is an American subscription video on-demand streaming service owned and operated by
            The Walt Disney Company. It is one of the largest streaming platforms in the United States, offering a
            library of current-season TV, movies, originals, and â€” uniquely among major streamers â€” a live TV tier
            that competes directly with traditional cable.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            As of 2025, Hulu has surpassed <strong>50 million subscribers</strong>, making it the third-largest
            subscription streaming service in the US behind Netflix and Amazon Prime Video. Its dual positioning as
            both a next-day TV destination and an originals platform gives it a distinct competitive identity.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Hulu is available in the United States and Japan (as a separate service), and is deeply integrated into
            Disney&apos;s broader streaming strategy as part of the Disney Bundle alongside Disney+ and ESPN+.
          </p>
        </section>

        {/* â”€â”€ History â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section id="history" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">History</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            Hulu was founded in <strong>2007</strong> as a joint venture between News Corporation (Fox), NBC Universal,
            and later Disney and Time Warner. It launched publicly in March 2008 as a free, ad-supported platform
            offering next-day access to broadcast TV shows â€” a direct response to the rise of piracy and the lack of
            legal streaming options at the time.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            The paid subscription tier <strong>Hulu Plus</strong> launched in 2010, offering mobile access and a larger
            library. The service rebranded to simply &ldquo;Hulu&rdquo; in 2017 as the platform matured and its
            original content strategy took shape.
          </p>
          <p className="text-gray-800 leading-relaxed">
            In <strong>2017</strong>, Hulu launched its live TV product, becoming one of the first streaming services
            to offer a comprehensive cable-replacement bundle. This positioned Hulu differently from Netflix and became
            a key growth driver through 2019â€“2022.
          </p>
        </section>

        {/* â”€â”€ Disney acquisition â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section id="disney" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">Disney Acquisition</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            Disney&apos;s path to full Hulu ownership was gradual. When Disney acquired 21st Century Fox in
            <strong> March 2019</strong>, it inherited Fox&apos;s 30% stake in Hulu, pushing Disney&apos;s ownership
            to 60%. Comcast (NBCUniversal) retained a 33% stake, with AT&T holding the remainder.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            In <strong>November 2023</strong>, Disney struck a deal to buy Comcast&apos;s remaining 33% stake for a
            minimum of $8.61 billion, with final valuation settled at approximately <strong>$8.61 billion</strong>.
            Disney completed this acquisition in early 2024, making Hulu a wholly owned subsidiary.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Disney CEO Bob Iger has described Hulu as a critical pillar of the company&apos;s streaming future,
            particularly for general entertainment content that sits outside the Disney+ brand identity. The integration
            of Hulu content into Disney+ internationally began in 2023 under the &ldquo;Star&rdquo; brand in select markets.
          </p>
        </section>

        {/* â”€â”€ Originals â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section id="originals" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">Hulu Originals</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            Hulu&apos;s original content strategy has produced several critically acclaimed series and films. Unlike
            Netflix, which produces across all genres at massive scale, Hulu has focused on prestige drama, limited
            series, and targeted comedies.
          </p>

          <div className="bg-gray-50 border border-gray-200 p-5 mb-5 rounded">
            <h3 className="font-black text-base mb-3">Notable Originals</h3>
            <ul className="space-y-2 text-sm text-gray-800">
              {[
                ['The Handmaid\'s Tale', '2017â€“2024', 'Emmy-winning dystopian drama. 6 seasons.'],
                ['Only Murders in the Building', '2021â€“present', 'Comedy mystery with Steve Martin, Martin Short, Selena Gomez.'],
                ['The Bear', '2022â€“present', 'Critically acclaimed culinary drama. Emmy winner.'],
                ['ShÅgun', '2024', 'Emmy-sweeping historical epic. Co-produced with FX.'],
                ['Shogun', '2024', '18 Emmy wins â€” most for any series in a single year.'],
                ['Mike & Nick & Nick & Alice', '2026', 'R-rated time-loop comedy starring Vince Vaughn and James Marsden. April release.'],
              ].map(([title, year, desc]) => (
                <li key={title} className="flex gap-3">
                  <span className="font-black text-black shrink-0 w-48">{title}</span>
                  <span className="text-gray-500 shrink-0 w-16 font-mono text-xs pt-0.5">{year}</span>
                  <span className="text-gray-700">{desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-gray-800 leading-relaxed">
            Hulu&apos;s FX partnership has been particularly prolific. All FX series are available on Hulu in the US,
            and many originals are co-produced under the &ldquo;FX on Hulu&rdquo; banner, giving Hulu access to FX&apos;s
            prestige brand and talent relationships.
          </p>
        </section>

        {/* â”€â”€ Live TV â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section id="live-tv" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">Hulu + Live TV</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>Hulu + Live TV</strong> is a virtual MVPD (multichannel video programming distributor) offering
            90+ live channels including ABC, CBS, NBC, Fox, CNN, ESPN, and regional sports networks. At{' '}
            <strong>$82.99/month</strong> (2026), it includes unlimited DVR, Disney+, and ESPN+ in the base package.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            The Live TV product is one of Hulu&apos;s key differentiators. While Netflix, Disney+, and Apple TV+ offer
            no live linear programming, Hulu competes directly with YouTube TV, Sling, and FuboTV for cord-cutters who
            still want live sports and news.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Hulu + Live TV carries ABC, which broadcasts the Academy Awards and other major events â€” the 2026 Oscars
            were available to stream live on Hulu the same night as broadcast.
          </p>
        </section>

        {/* â”€â”€ Disney Bundle â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section id="bundle" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">The Disney Bundle</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            Disney&apos;s streaming bundle â€” <strong>Disney+, Hulu, and ESPN+</strong> â€” is Disney&apos;s primary
            strategy to compete with Netflix at scale. The bundle undercuts individual subscription pricing and reduces
            churn by cross-promoting content across services.
          </p>
          <div className="grid grid-cols-3 gap-3 my-5 text-center text-sm">
            {[
              { name: 'Disney+', desc: 'Marvel, Star Wars, Pixar', color: 'bg-blue-700 text-white' },
              { name: 'Hulu', desc: 'TV, Originals, FX', color: 'bg-green-600 text-white' },
              { name: 'ESPN+', desc: 'Sports, UFC, NHL', color: 'bg-red-600 text-white' },
            ].map((s) => (
              <div key={s.name} className={`${s.color} p-4 rounded`}>
                <div className="font-black text-base">{s.name}</div>
                <div className="text-xs opacity-80 mt-1">{s.desc}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-800 leading-relaxed">
            The Duo Basic bundle (Disney+ with ads + Hulu with ads) starts at <strong>$9.99/mo</strong>, while the
            Trio Premium (all three, no ads) costs <strong>$24.99/mo</strong> â€” significantly below the combined
            individual pricing of ~$38/mo.
          </p>
        </section>

        {/* â”€â”€ Competition â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section id="competition" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">Competitive Position</h2>

          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-3 py-2 text-left font-black">Platform</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-black">Subscribers</th>
                  <th className="border border-gray-200 px-3 py-2 text-left font-black">Key Advantage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Netflix', '~270M global', 'Global scale, deepest content library'],
                  ['Amazon Prime Video', '~200M included', 'Prime bundle, Thursday Night Football'],
                  ['Hulu', '50M+ US', 'Next-day TV, FX Originals, Live TV tier'],
                  ['Disney+', '~154M global', 'Marvel, Star Wars, family content'],
                  ['Apple TV+', '~25M', 'Highest per-show spend, zero ads'],
                  ['HBO / Max', '~95M global', 'Prestige HBO brand, Warner films'],
                ].map(([p, s, k]) => (
                  <tr key={p} className={p === 'Hulu' ? 'bg-green-50 font-semibold' : ''}>
                    <td className="border border-gray-200 px-3 py-2">{p}</td>
                    <td className="border border-gray-200 px-3 py-2 font-mono text-xs">{s}</td>
                    <td className="border border-gray-200 px-3 py-2 text-gray-700">{k}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* â”€â”€ Recent news â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section id="news" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">Recent News</h2>
          <div className="space-y-3">
            <Link
              href="/entertainment/news/conan-obrien-hosting-98th-oscars-abc-hulu"
              className="flex flex-col gap-1 p-4 border-2 border-black hover:bg-gray-50 transition-colors group"
            >
              <span className="text-[9px] font-black tracking-widest uppercase text-red-600">AWARDS Â· MAR 2026</span>
              <span className="font-black leading-snug group-hover:underline">Conan O&apos;Brien to Host the 98th Academy Awards on ABC &amp; Hulu</span>
            </Link>
            <Link
              href="/entertainment/apple-tv/spring-2026-premiere-schedule-imperfect-women-for-all-mankind-outcome-margos-got-money-troubles"
              className="flex flex-col gap-1 p-4 border-2 border-black hover:bg-gray-50 transition-colors group"
            >
              <span className="text-[9px] font-black tracking-widest uppercase text-red-600">STREAMING Â· MAR 2026</span>
              <span className="font-black leading-snug group-hover:underline">Hulu Original Mike &amp; Nick &amp; Nick &amp; Alice â€” Vince Vaughn Time-Travel Comedy Trailer</span>
            </Link>
          </div>
        </section>
      </ArticlePage>
    </>
  );
}

