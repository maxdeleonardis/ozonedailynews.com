import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage } from '@/components/articles/ArticlePage';
import { Breadcrumb } from '@/components/nav/Breadcrumb';

const SLUG = 'redbull';
const PAGE_URL = 'https://www.objectwire.org/redbull';
const IMAGE_URL = 'https://images.unsplash.com/photo-1613218222876-954978a4404e?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Red Bull GmbH | ObjectWire',
  description: 'Red Bull GmbH is the world\'s leading energy drink company, selling 12B+ cans annually across 170+ countries. Full profile of products, F1 teams, football clubs, and financials.',
  keywords: [
    'Red Bull',
    'Red Bull GmbH',
    'energy drink',
    'Dietrich Mateschitz',
    'Chaleo Yoovidhya',
    'Formula 1',
    'Red Bull Racing',
    'RB Leipzig',
    'Max Verstappen',
    'extreme sports',
    'Krating Daeng',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: 'article',
    title: 'Red Bull GmbH | ObjectWire',
    description: 'Full company profile of Red Bull GmbH. Energy drinks, F1 teams, football clubs, extreme sports empire, and corporate structure.',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    images: [{ url: IMAGE_URL, width: 1200, height: 675, alt: 'Red Bull energy drink can' }],
    publishedTime: '2026-02-21T15:00:00Z',
    section: 'Sports',
    tags: ['Red Bull', 'Formula 1', 'RB Leipzig', 'Energy Drinks'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Red Bull GmbH | ObjectWire',
    description: 'Full profile of Red Bull GmbH, the world\'s leading energy drink company and sports empire.',
    images: [IMAGE_URL],
  },
};

export default function RedBullWikiPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: 'Home', item: '/' },
          { name: 'Sports', item: '/sports' },
          { name: 'Red Bull', item: '/redbull' },
        ]}
      />
      <ArticlePage
        title="Red Bull GmbH"
        subtitle="Austrian multinational private company, creator of the world's leading energy drink and global sports empire"
        category="Sports"
        lastUpdated="March 2026"
        slug={SLUG}
        url="/redbull"
        backLink={{ href: '/sports', label: 'Sports Hub' }}
        infoBox={{
          title: 'Red Bull GmbH',
          image: {
            src: IMAGE_URL,
            alt: 'Red Bull energy drink can',
            caption: 'Photo by Jesper Brouwers / Unsplash.',
          },
          sections: [
            {
              heading: 'Company Overview',
              items: [
                { label: 'Type', value: 'Private GmbH (Limited Liability Company)' },
                { label: 'Industry', value: 'Beverages, Sports, Media' },
                { label: 'Founded', value: '1984 (Product launched April 1, 1987)' },
                { label: 'Founders', value: 'Dietrich Mateschitz, Chaleo Yoovidhya' },
                { label: 'Headquarters', value: 'Fuschl am See, Salzburg, Austria' },
                { label: 'Markets', value: '170+ countries worldwide' },
                { label: 'Employees', value: '13,000+' },
                { label: 'Revenue', value: '€10B+ (est.)' },
                { label: 'Cans Sold', value: '12B+ annually' },
                { label: 'Market Share', value: '~40-43% global energy drink market' },
              ],
            },
            {
              heading: 'Ownership',
              items: [
                { label: 'Yoovidhya family', value: '~51% (via T.C. Pharmaceutical)' },
                { label: 'Mateschitz family', value: '~49% (Mark Mateschitz)' },
              ],
            },
            {
              heading: 'F1 Teams',
              list: [
                'Oracle Red Bull Racing (Milton Keynes, UK)',
                'Visa Cash App RB / Racing Bulls (Faenza, Italy)',
              ],
            },
            {
              heading: 'Football Clubs',
              list: [
                'RB Leipzig (Germany)',
                'FC Red Bull Salzburg (Austria)',
                'New York Red Bulls (USA)',
                'Red Bull Bragantino (Brazil)',
              ],
            },
            {
              heading: 'Links',
              links: [
                { href: 'https://www.redbull.com', label: 'redbull.com', external: true },
                { href: '/formula-1', label: 'Formula 1' },
              ],
            },
          ],
        }}
        tableOfContents={[
          { id: 'overview', label: 'Overview' },
          { id: 'history', label: 'History and Founding' },
          { id: 'founders', label: 'Founders' },
          { id: 'products', label: 'Products' },
          { id: 'sports', label: 'Sports Empire' },
          { id: 'structure', label: 'Corporate Structure' },
          { id: 'marketing', label: 'Marketing Strategy' },
          { id: 'controversies', label: 'Controversies' },
          { id: 'financials', label: 'Financials' },
        ]}
        relatedLinks={[
          { href: '/formula-1', label: 'Formula 1' },
          { href: '/entertainment', label: 'Entertainment Hub' },
        ]}
      >
        {/* ── Overview ──────────────────────────────────────────── */}
        <section id="overview" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">Overview</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>Red Bull GmbH</strong> is an Austrian multinational private company known for its energy drink of the same name, as well as its extensive sports sponsorships and ownership of professional sports teams. Founded in 1984 by Dietrich Mateschitz and Chaleo Yoovidhya, the company transformed a Thai energy tonic into a global phenomenon, creating the energy drink category and building one of the world&apos;s most recognizable brands through unconventional marketing and extreme sports associations.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            Red Bull sells over <strong>12 billion cans annually</strong> across 170+ countries and commands approximately 40-43% of the global energy drink market. Beyond beverages, the company owns two Formula 1 teams, multiple professional football clubs, an ice hockey team, a cycling squad, and produces its own media content through Red Bull Media House.
          </p>
          <p className="text-gray-800 leading-relaxed">
            The company is privately held and has never gone public. Ownership is split between the Yoovidhya family of Thailand (~51%) and the Mateschitz family of Austria (~49%), following the deaths of both founders.
          </p>
        </section>

        {/* ── History ───────────────────────────────────────────── */}
        <section id="history" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">History and Founding</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            Red Bull&apos;s origin story begins not in Austria, but in Thailand. In 1976, Thai businessman <strong>Chaleo Yoovidhya</strong> created <em>Krating Daeng</em> (กระทิงแดง), which translates to &ldquo;Red Gaur.&rdquo; The drink was formulated as a tonic for truck drivers, laborers, and other workers needing to stay alert during long shifts.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            The pivotal moment came in <strong>1982</strong> when Dietrich Mateschitz, an Austrian marketing executive working for Blendax, traveled to Thailand for business. Suffering from jet lag, he tried Krating Daeng and claimed it cured his exhaustion. Recognizing the product&apos;s potential for Western markets, Mateschitz sought out Yoovidhya to propose a partnership.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            In <strong>1984</strong>, Mateschitz and Yoovidhya founded Red Bull GmbH in Fuschl am See, Austria. Each partner invested $500,000 for a 49% stake, with 2% allocated to Yoovidhya&apos;s son, Chalerm. Mateschitz spent three years adapting the formula for Western tastes, making it carbonated, less sweet, and creating the distinctive slim can design.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            On <strong>April 1, 1987</strong>, Red Bull Energy Drink launched in Austria, effectively creating the energy drink category in Western markets. The company expanded methodically: Hungary (1992), Germany and the UK (1994), the United States (1997), and eventually to over 170 countries.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Red Bull resisted traditional advertising, instead building the brand through extreme sports sponsorships, event marketing, and word-of-mouth. This guerrilla approach defined the company&apos;s identity and became a case study in modern marketing.
          </p>
        </section>

        {/* ── Founders ──────────────────────────────────────────── */}
        <section id="founders" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">Founders</h2>

          <h3 className="text-lg font-black mb-2">Dietrich Mateschitz (1944-2022)</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            Born in Styria, Austria, Mateschitz was the marketing genius who transformed a Thai tonic into a global brand. Before Red Bull, he worked in marketing for Unilever and Blendax. Known for his reclusive nature and obsession with brand control, Mateschitz developed the Western formula and carbonation process, created the &ldquo;Red Bull Gives You Wings&rdquo; positioning, pioneered extreme sports marketing, and maintained strict private ownership to avoid shareholder pressure. His fortune was estimated at <strong>$27 billion</strong> at the time of his death in October 2022.
          </p>

          <h3 className="text-lg font-black mb-2">Chaleo Yoovidhya (1923-2012)</h3>
          <p className="text-gray-800 leading-relaxed">
            A Thai entrepreneur of ethnic Chinese descent, Yoovidhya founded T.C. Pharmaceutical in 1956. He created Krating Daeng in 1976 as a medicinal tonic. Though less visible than Mateschitz internationally, his family maintained significant control through their 51% stake. Yoovidhya passed away in March 2012 at age 88. Following both founders&apos; deaths, ownership transferred to their respective heirs: the Yoovidhya family retained ~51% through T.C. Pharmaceutical, while Mark Mateschitz inherited ~49%.
          </p>
        </section>

        {/* ── Products ──────────────────────────────────────────── */}
        <section id="products" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">Products</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            The flagship <strong>Red Bull Energy Drink</strong> contains caffeine, taurine, B-vitamins (B3, B5, B6, B12), sucrose and glucose, alpine water, and citric acid. A standard 250ml can contains approximately 80mg of caffeine, roughly equivalent to a cup of coffee.
          </p>

          <div className="bg-gray-50 border border-gray-200 p-5 mb-5 rounded">
            <h3 className="font-black text-base mb-3">Product Variants</h3>
            <ul className="space-y-1 text-sm text-gray-800">
              <li><strong>Red Bull Sugarfree</strong> - Zero-calorie version using artificial sweeteners</li>
              <li><strong>Red Bull Zero</strong> - Another zero-sugar variant</li>
              <li><strong>Red Bull Editions</strong> - Flavored versions including Blueberry, Coconut Berry, Peach-Nectarine, Watermelon</li>
              <li><strong>Organics by Red Bull</strong> - Organic soda line (discontinued in many markets)</li>
              <li><strong>Red Bull Simply Cola</strong> - Cola with natural caffeine (limited markets)</li>
            </ul>
          </div>

          <p className="text-gray-800 leading-relaxed">
            Red Bull operates production facilities in Austria (headquarters), Thailand, and regional plants worldwide. The company uses a decentralized manufacturing model to reduce shipping costs and ensure freshness.
          </p>
        </section>

        {/* ── Sports Empire ─────────────────────────────────────── */}
        <section id="sports" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">Sports Empire</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            Red Bull&apos;s sports involvement goes far beyond sponsorship. It owns entire teams, venues, and media operations. This vertical integration creates authentic brand association while generating content and revenue.
          </p>

          <h3 className="text-lg font-black mb-2">Formula 1</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            Red Bull owns two <Link href="/formula-1" className="text-blue-600 hover:underline">Formula 1</Link> teams, a unique arrangement in the sport. <strong>Oracle Red Bull Racing</strong>, acquired from Jaguar in 2005 and based in Milton Keynes, UK, has won multiple Constructors&apos; and Drivers&apos; Championships (2010-2013, 2022-2024), with current star driver Max Verstappen. <strong>Visa Cash App RB (Racing Bulls)</strong>, formerly Toro Rosso and AlphaTauri, serves as a junior team and technology testbed based in Faenza, Italy.
          </p>

          <h3 className="text-lg font-black mb-2">Football</h3>
          <div className="bg-gray-50 border border-gray-200 p-5 mb-5 rounded">
            <h3 className="font-black text-base mb-3">Red Bull Football Clubs</h3>
            <ul className="space-y-2 text-sm text-gray-800">
              {[
                ['RB Leipzig', 'Germany', 'Founded 2009. Bundesliga force, Champions League semi-finalists (2020).'],
                ['FC Red Bull Salzburg', 'Austria', 'Acquired 2005. Dominant in Austrian Bundesliga, perennial CL qualifier.'],
                ['New York Red Bulls', 'USA', 'MLS franchise since 1995, full Red Bull control from 2006.'],
                ['Red Bull Bragantino', 'Brazil', 'Acquired 2019, rising force in Brazilian football.'],
              ].map(([club, country, desc]) => (
                <li key={club} className="flex gap-3">
                  <span className="font-black text-black shrink-0 w-44">{club}</span>
                  <span className="text-gray-500 shrink-0 w-16 text-xs pt-0.5">{country}</span>
                  <span className="text-gray-700">{desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <h3 className="text-lg font-black mb-2">Extreme Sports and Events</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            Red Bull has created or sponsors hundreds of extreme sports events and athletes worldwide, including <strong>Red Bull Stratos</strong> (Felix Baumgartner&apos;s 2012 record-breaking space jump, a $65M production), <strong>Red Bull Rampage</strong> (freeride mountain biking), <strong>Red Bull Cliff Diving World Series</strong>, <strong>Red Bull Crashed Ice</strong>, and <strong>Red Bull BC One</strong> (breakdancing world championship).
          </p>

          <h3 className="text-lg font-black mb-2">Cycling</h3>
          <p className="text-gray-800 leading-relaxed">
            <strong>Red Bull-Bora-Hansgrohe</strong> competes as a UCI WorldTour professional cycling team in the Tour de France and other major races.
          </p>
        </section>

        {/* ── Corporate Structure ───────────────────────────────── */}
        <section id="structure" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">Corporate Structure</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            Red Bull GmbH is a privately held <em>Gesellschaft mit beschränkter Haftung</em>, the Austrian equivalent of an LLC. The company has never gone public and maintains strict founder/family control. The Yoovidhya family holds ~51% through T.C. Pharmaceutical, while the Mateschitz family holds ~49% (inherited by Mark Mateschitz after his father&apos;s death in 2022). The 2% difference, originally Chalerm Yoovidhya&apos;s stake, gives the Thai family majority voting power.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            The company&apos;s headquarters is located in <strong>Fuschl am See</strong>, a lakeside village near Salzburg, Austria. The campus includes modern office buildings, production facilities, and the Hangar-7 aviation museum housing Mateschitz&apos;s private aircraft collection.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Red Bull operates through regional subsidiaries and distribution partnerships in 170+ countries. Major markets include the United States, Germany, UK, France, Japan, Brazil, and emerging markets in Africa and Southeast Asia.
          </p>
        </section>

        {/* ── Marketing ─────────────────────────────────────────── */}
        <section id="marketing" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">Marketing Strategy</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            Red Bull&apos;s marketing revolutionized the beverage industry. Instead of traditional advertising, Mateschitz invested heavily in event marketing, extreme sports, and content creation. The strategy associates the brand with high-energy, adventurous activities, sponsors athletes and events rather than buying TV commercials, and generates word-of-mouth through spectacular stunts while maintaining premium pricing to reinforce brand positioning.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>Red Bull Media House</strong>, established in 2007, produces films, magazines, digital content, and operates Red Bull TV. The media arm transforms marketing from a cost center into a revenue-generating business while ensuring brand message control.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Red Bull pioneered placement in non-traditional venues, including nightclubs, gyms, convenience stores, and gas stations, rather than competing for supermarket shelf space. The distinctive slim can and blue-silver color scheme created instant visual recognition worldwide.
          </p>
        </section>

        {/* ── Controversies ─────────────────────────────────────── */}
        <section id="controversies" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">Controversies</h2>

          <h3 className="text-lg font-black mb-2">Formula 1 Dual Team Ownership</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            Red Bull&apos;s ownership of two F1 teams has generated ongoing controversy. Critics, including McLaren Racing CEO Zak Brown, argue the arrangement creates unfair information sharing between the &ldquo;A team&rdquo; and &ldquo;B team,&rdquo; voting bloc influence in F1 governance, and reduced grid diversity. The FIA has investigated the relationship multiple times but has not found conclusive evidence of rule violations.
          </p>

          <h3 className="text-lg font-black mb-2">Health Concerns</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            Energy drinks face ongoing scrutiny regarding health effects, particularly on young people. Concerns include high caffeine content and cardiovascular effects, mixing with alcohol in nightlife culture, and marketing to minors. Some countries have banned or restricted energy drink sales to minors. Red Bull maintains its products are safe when consumed as directed.
          </p>

          <h3 className="text-lg font-black mb-2">RB Leipzig Fan Culture Backlash</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            RB Leipzig&apos;s rapid rise through German football has been controversial among traditional fans. The club&apos;s corporate ownership structure and minimal membership numbers conflict with Germany&apos;s 50+1 fan ownership rule, making Leipzig a target of opposition fan protests.
          </p>

          <h3 className="text-lg font-black mb-2">Post-Mateschitz Power Struggles</h3>
          <p className="text-gray-800 leading-relaxed">
            Following Dietrich Mateschitz&apos;s death in 2022, tensions emerged between the Yoovidhya and Mateschitz families over control. The February 2024 sacking of long-serving F1 Team Principal Christian Horner amid internal investigations highlighted governance challenges in the post-founder era.
          </p>
        </section>

        {/* ── Financials ────────────────────────────────────────── */}
        <section id="financials" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">Financials</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            As a private company, Red Bull does not disclose detailed financial statements. However, available data indicates massive scale.
          </p>

          <div className="bg-gray-50 border border-gray-200 p-5 mb-5 rounded">
            <h3 className="font-black text-base mb-3">Estimated Performance</h3>
            <ul className="space-y-1 text-sm text-gray-800">
              <li><strong>Annual Revenue:</strong> €10+ billion</li>
              <li><strong>Cans Sold:</strong> 12+ billion annually</li>
              <li><strong>Employees:</strong> 13,000+</li>
              <li><strong>Market Position:</strong> Global energy drink leader (~40-43% share)</li>
              <li><strong>Mateschitz Net Worth:</strong> $27 billion (at time of death, 2022)</li>
            </ul>
          </div>

          <p className="text-gray-800 leading-relaxed">
            Red Bull dominates the global energy drink market with approximately 40-43% market share. Main competitors include Monster Energy (Coca-Cola owned), Rockstar (PepsiCo), and various regional brands. Despite competition, Red Bull maintains premium pricing and brand cachet that competitors struggle to match.
          </p>
        </section>
      </ArticlePage>
    </>
  );
}
