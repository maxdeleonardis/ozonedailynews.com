import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/copyright/news/letitia-james-sues-counter-strike';
const AUTHOR_NAME = 'Alfansa';
const AUTHOR_URL = 'https://www.objectwire.org/authors/alfansa';

export const metadata: Metadata = {
  title: "NY AG Letitia James Sues Valve Over Counter-Strike Loot Boxes -- Gabe Newell Responds 'GL HF' | ObjectWire",
  description:
    "New York Attorney General Letitia James has filed a lawsuit against Valve Corporation, alleging that Counter-Strike 2 loot boxes constitute illegal gambling under New York law. Valve CEO Gabe Newell responded in two words: GL HF.",
  keywords: [
    'Letitia James Valve lawsuit 2026',
    'Counter-Strike loot box lawsuit New York',
    'Valve Corporation loot box illegal gambling',
    'NY AG Valve Counter-Strike 2 loot boxes',
    'Gabe Newell GL HF lawsuit response',
    'Counter-Strike skins gambling lawsuit',
    'Valve loot box New York law',
    'CS2 skins market billion dollar value',
    'Letitia James gaming lawsuit',
    'loot box illegal gambling United States',
    'Counter-Strike weapon skins real money',
    'Valve gambling regulation 2026',
    'Dota 2 Team Fortress 2 loot box lawsuit',
    'CS2 skin market $1 million',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "NY AG Letitia James Sues Valve Over Loot Boxes -- Gabe Newell Responds 'GL HF'",
    description:
      "New York's AG alleges Counter-Strike 2 loot boxes are illegal gambling. Some CS skins have sold for over $1 million. The broader skins market is worth billions. Gabe Newell's official response: 'GL HF'.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: '2026-02-25T20:00:00Z',
    modifiedTime: '2026-02-25T20:00:00Z',
    section: 'Law',
    tags: [
      'Valve', 'Counter-Strike 2', 'Loot Boxes', 'Letitia James',
      'New York AG', 'Gambling', 'Gaming Law', 'Gabe Newell',
      'CS2', 'Skins Market', 'Video Game Regulation',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "NY AG Sues Valve Over CS2 Loot Boxes. Gabe Newell Responds: 'GL HF'",
    description:
      "Letitia James says Counter-Strike loot boxes are illegal gambling. Some skins sell for over $1M. The skins market is worth billions. Valve CEO Gabe Newell's full statement: GL HF.",
  },
};

export default function LetitiaJamesValveLawsuitPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="NY AG Letitia James Sues Valve Over Counter-Strike Loot Boxes -- Gabe Newell Responds 'GL HF'"
        description="New York Attorney General Letitia James has filed a lawsuit against Valve Corporation alleging Counter-Strike 2 loot boxes constitute illegal gambling under New York law. Valve CEO Gabe Newell responded with two words: GL HF."
        author={AUTHOR_NAME}
        authorUrl={AUTHOR_URL}
        publishedTime="2026-02-25T20:00:00Z"
        modifiedTime="2026-02-25T20:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Law"
        keywords={[
          'Letitia James Valve lawsuit loot boxes 2026',
          'Counter-Strike 2 loot box illegal gambling New York',
          'Valve Corporation gambling lawsuit NY AG',
          'Gabe Newell GL HF response lawsuit',
          'CS2 weapon skins $1 million market value',
          'loot box regulation United States gaming',
          'Counter-Strike skins billion dollar market',
          'Valve loot box chance-based gambling',
          'New York gambling law video games',
          'Dota 2 Team Fortress 2 loot box suit',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Copyright & Law', item: '/copyright' },
              { name: 'NY AG Sues Valve Over CS2 Loot Boxes', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="NY AG Letitia James Sues Valve Over Counter-Strike Loot Boxes -- Gabe Newell Responds 'GL HF'"
        subtitle="New York Attorney General Letitia James has filed suit against Valve Corporation, alleging Counter-Strike 2 loot boxes constitute illegal gambling under New York law. Some CS skins have sold for over $1 million. Valve CEO Gabe Newell issued a two-word response."
        category="Law"
        categoryColor="blue"
        topicTag="investigations"
        publishDate="February 25, 2026"
        readTime="5 min read"
        breaking={true}
        thumbnail={{
          src: '/influncer/valve-ceo-Gabe-Newell.PNG',
          alt: 'Valve CEO Gabe Newell',
        }}
        author={{
          name: AUTHOR_NAME,
          role: 'Finance & Markets Reporter',
          authorSlug: 'alfansa',
        }}
        tags={[
          'Valve', 'Counter-Strike 2', 'Loot Boxes', 'Letitia James',
          'New York AG', 'Gambling', 'Gaming Law', 'Gabe Newell',
          'CS2', 'Skins Market', 'Video Game Regulation', 'Breaking News',
        ]}
      >

        {/* Lede */}
        <p>
          New York Attorney General <strong>Letitia James</strong> has filed a lawsuit against{' '}
          <Link href="/video-games" className="text-blue-600 font-medium hover:underline">
            Valve Corporation
          </Link>
          , the developer of <strong>Counter-Strike 2</strong>, Team Fortress 2, and Dota 2,
          alleging that its loot box systems amount to <strong>illegal gambling under New York
          law</strong>. The complaint argues that selling access to chance-based containers with
          prizes that carry real-world monetary value crosses the line from game mechanic to
          unlicensed wagering.
        </p>
        <p>
          In response, Valve CEO <strong>Gabe Newell</strong> issued a statement. In full, it reads:
        </p>

        {/* Gabe's response -- the main event */}
        <HighlightBox type="key-point" color="orange">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            BREAKING -- Valve CEO Gabe Newell's Official Response to the Lawsuit
          </p>
          <p className="text-5xl font-black text-gray-900 tracking-tight">"GL HF"</p>
          <p className="text-sm text-gray-500 mt-2 italic">-- Gabe Newell, CEO, Valve Corporation</p>
        </HighlightBox>

        {/* What the lawsuit says */}
        <h2>What the Lawsuit Says</h2>
        <p>
          The complaint filed by the New York AG's office centers on how Valve structures and
          monetizes loot boxes across its game titles. According to the filing:
        </p>
        <ul>
          <li>
            Valve sells access to loot boxes that give players a <strong>chance-based
            opportunity</strong> to obtain rare in-game items -- including weapon skins and
            cosmetics -- that can carry <strong>significant real-world monetary value</strong>.
          </li>
          <li>
            James characterizes the mechanism as <strong>"quintessential gambling"</strong> because
            players pay money for a randomized outcome where the prize can be converted into cash
            or traded on third-party marketplaces.
          </li>
          <li>
            The suit specifically highlights that some <strong>Counter-Strike weapon skins have sold
            for more than $1 million</strong> on the secondary market, making the prizes
            meaningfully valuable by any legal standard.
          </li>
          <li>
            The broader Counter-Strike skins market is estimated to be worth{' '}
            <strong>billions of dollars</strong>, with active trading on platforms including Steam's
            own Community Market and external third-party sites.
          </li>
        </ul>

        <HighlightBox type="key-point" color="blue">
          New York law defines gambling as staking or risking something of value upon the outcome
          of a contest of chance. The AG's theory: buying a loot box is staking money on a chance
          outcome. The skin you receive has monetary value. Therefore, loot boxes are gambling.
          Valve does not hold a New York gambling license.
        </HighlightBox>

        {/* The Legal Theory */}
        <h2>The Legal Theory: Chance, Value, Conversion</h2>
        <p>
          The lawsuit's core argument tracks three elements that New York courts have used to
          define gambling:
        </p>

        <div className="not-prose space-y-4 my-6">
          {[
            {
              step: '1',
              title: 'Consideration',
              detail: 'Players spend real money -- either directly or through Steam Wallet funds purchased with real currency -- to open a loot box.',
              color: 'border-blue-500 bg-blue-50',
              dot: 'bg-blue-500',
            },
            {
              step: '2',
              title: 'Chance',
              detail: 'The contents of the loot box are determined entirely by a random number generator. Skill, strategy, and knowledge play no role in the outcome.',
              color: 'border-orange-500 bg-orange-50',
              dot: 'bg-orange-500',
            },
            {
              step: '3',
              title: 'Prize With Monetary Value',
              detail: 'The items received -- particularly Counter-Strike weapon skins -- are tradeable and sellable on Steam\'s market and third-party exchanges for real money, some reaching six- and seven-figure prices.',
              color: 'border-green-500 bg-green-50',
              dot: 'bg-green-500',
            },
          ].map((item) => (
            <div key={item.step} className={`border-l-4 ${item.color} rounded-r-xl p-5 shadow-sm`}>
              <div className="flex items-start gap-3">
                <div className={`w-6 h-6 ${item.dot} rounded-full flex items-center justify-center text-white font-black text-xs shrink-0 mt-0.5`}>
                  {item.step}
                </div>
                <div>
                  <h3 className="font-black text-gray-900 text-base leading-tight mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skins Market Size */}
        <h2>The Scale of the Skins Market</h2>
        <p>
          The lawsuit draws attention to the scale of the market Valve has built around tradeable
          in-game items:
        </p>

        <div className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-red-700">$1M+</div>
            <div className="text-xs text-gray-500 font-semibold mt-1 uppercase tracking-wide">
              Top CS2 Skin Sale Price (Reported)
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-blue-700">Billions</div>
            <div className="text-xs text-gray-500 font-semibold mt-1 uppercase tracking-wide">
              Estimated CS Skins Market Value
            </div>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
            <div className="text-2xl font-black text-orange-700">3 Titles</div>
            <div className="text-xs text-gray-500 font-semibold mt-1 uppercase tracking-wide">
              Named in Suit: CS2, TF2, Dota 2
            </div>
          </div>
        </div>

        <p>
          Valve operates the <strong>Steam Community Market</strong>, which facilitates the
          buying and selling of in-game items with Steam Wallet funds. Third-party platforms allow
          conversion of skins to real currency entirely outside Valve's direct ecosystem. The AG's
          office argues that the existence of these conversion pathways -- regardless of whether
          Valve operates them directly -- establishes the real-money prize element required under
          New York gambling law.
        </p>

        {/* Gabe Newell Response Section */}
        <h2>Gabe Newell's Response, Annotated</h2>
        <p>
          Valve has not filed a formal legal response to the complaint as of February 25, 2026.
          However, CEO Gabe Newell issued a public statement in response to the lawsuit filing.
          The statement, reproduced in full:
        </p>

        <blockquote>
          "GL HF"
        </blockquote>

        <p>
          For the unfamiliar: <strong>GL HF</strong> is gaming shorthand for{' '}
          <em>Good Luck, Have Fun</em> -- a phrase typically exchanged between opponents at the
          start of a competitive match. It is the gaming equivalent of a pre-fight handshake. It
          contains no legal admissions, no factual denials, and no policy commitments. It is
          also, in context, one of the funnier legal responses in recent tech history.
        </p>
        <p>
          Whether Valve's legal team shares Newell's apparent confidence remains to be seen. Valve
          will be required to file a formal answer to the complaint in New York state court within
          the applicable response window. GL HF will not be sufficient at that stage.
        </p>

        {/* Broader Context */}
        <h2>Broader Context: Loot Boxes and Gambling Law</h2>
        <p>
          The New York lawsuit is part of a broader global reckoning with loot box mechanics in
          video games. Several countries have already moved to classify or restrict loot boxes:
        </p>
        <ul>
          <li>
            <strong>Belgium and the Netherlands</strong> banned certain loot box implementations
            in 2018-2019, forcing EA, Valve, and other publishers to disable the mechanic for
            users in those jurisdictions.
          </li>
          <li>
            <strong>China</strong> requires publishers to disclose the probability rates of
            obtaining items from loot boxes -- a regulation Valve complies with in that market.
          </li>
          <li>
            <strong>United Kingdom</strong> conducted a Gambling Commission review; as of 2026,
            loot boxes remain unregulated as gambling in the UK, though the debate continues.
          </li>
          <li>
            <strong>United States</strong> has seen multiple state-level proposals but no federal
            loot box legislation to date. The New York AG filing is the most prominent U.S.
            government action against the practice yet.
          </li>
        </ul>
        <p>
          If James prevails in New York, the ruling could create a legal template for other states
          to follow -- or force Valve to restructure its loot box economy platform-wide to avoid
          triggering similar actions in other jurisdictions.
        </p>

        {/* Summary Table */}
        <h2>Lawsuit at a Glance</h2>
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-900 text-white text-left">
                <th className="px-4 py-3 font-semibold">Detail</th>
                <th className="px-4 py-3 font-semibold">Information</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { label: 'Plaintiff', value: 'New York Attorney General Letitia James' },
                { label: 'Defendant', value: 'Valve Corporation' },
                { label: 'Filing Date', value: 'February 25, 2026' },
                { label: 'Jurisdiction', value: 'New York State' },
                { label: 'Core Allegation', value: 'Loot boxes constitute illegal gambling under New York law' },
                { label: 'Games Named', value: 'Counter-Strike 2, Team Fortress 2, Dota 2' },
                { label: 'Key Evidence', value: 'CS2 skins selling for $1M+; skins market worth billions' },
                { label: 'Legal Theory', value: 'Consideration + chance + prize with monetary value = gambling' },
                { label: 'Valve Response', value: '"GL HF" -- Gabe Newell, CEO' },
                { label: 'Formal Legal Response', value: 'Pending (not yet filed as of Feb 25, 2026)' },
              ].map((row) => (
                <tr key={row.label} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-700 text-xs">{row.label}</td>
                  <td className="px-4 py-3 text-gray-900 font-bold text-xs">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Related Coverage */}
        <h2>Related Coverage</h2>
        <ul>
          <li>
            <Link href="/video-games" className="text-blue-600 hover:underline font-medium">
              Video Games -- Industry news, regulation, and publisher coverage
            </Link>
          </li>
          <li>
            <Link href="/copyright" className="text-blue-600 hover:underline font-medium">
              Copyright & Law -- Tech and media legal coverage
            </Link>
          </li>
          <li>
            <Link href="/news" className="text-blue-600 hover:underline font-medium">
              ObjectWire News -- Breaking coverage
            </Link>
          </li>
          <li>
            <Link href="/trump" className="text-blue-600 hover:underline font-medium">
              Trump -- Federal policy and regulatory environment
            </Link>
          </li>
          <li>
            <Link href="/finance" className="text-blue-600 hover:underline font-medium">
              Finance -- Secondary markets, asset valuation, and trading
            </Link>
          </li>
        </ul>

      </NewsArticle>
    </SEOWrapper>
  );
}
