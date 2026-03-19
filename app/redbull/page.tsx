import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema, OrganizationSchema } from '@/components/NewsArticleSchema';

export const metadata: Metadata = {
  title: "Red Bull GmbH - Global Energy Drink Company & Sports Empire | ObjectWire",
  description: "Comprehensive profile of Red Bull GmbH, the Austrian energy drink giant. Explore the company history, products, sports empire including F1 teams and football clubs, financials, and global operations.",
  alternates: {
    canonical: 'https://www.objectwire.org/redbull',
  },
  keywords: ['Red Bull', 'Red Bull GmbH', 'energy drink', 'Dietrich Mateschitz', 'Formula 1', 'RB Leipzig', 'extreme sports', 'Krating Daeng'],
};

export default function RedBullWikiPage() {
  const breadcrumbItems = [
    { name: 'Home', item: '/' },
    { name: 'Red Bull', item: '/redbull' },
  ];

  return (
    <>
      {/* SEO Schemas */}
      <NewsArticleSchema
        title="Red Bull GmbH - Global Energy Drink Company & Sports Empire"
        description="Comprehensive profile of Red Bull GmbH, the Austrian energy drink giant founded in 1984. Explore company history, products, sports empire, and global operations."
        author="Alfansa - ObjectWire Editorial"
        publishedTime="2026-02-19"
        modifiedTime="2026-02-19"
        articleUrl="https://www.objectwire.org/redbull"
        section="Business"
        keywords={['Red Bull', 'energy drink', 'Dietrich Mateschitz', 'Formula 1', 'extreme sports']}
      />
      <OrganizationSchema />

      <div className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 pt-4 max-w-6xl">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Wikipedia-Style Header */}
        <header className="border-b border-gray-200 pb-6 mb-6">
          <div className="container mx-auto px-4 max-w-6xl">
            <h1 className="text-4xl font-serif mb-2">Red Bull GmbH</h1>
            <p className="text-gray-600 italic">
              From ObjectWire, the verification-first intelligence platform
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-6xl pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content - Wikipedia Style */}
            <main className="lg:col-span-8">
              {/* Lead Paragraph */}
              <p className="text-lg leading-relaxed mb-6">
                <strong>Red Bull GmbH</strong> is an Austrian multinational private company known for its <Link href="/energy-drinks" className="text-blue-600 hover:underline">energy drink</Link> of the same name, as well as its extensive sports sponsorships and ownership of professional sports teams. Founded in <strong>1984</strong> by <strong>Dietrich Mateschitz</strong> and <strong>Chaleo Yoovidhya</strong>, the company transformed a Thai energy tonic into a global phenomenon, creating the energy drink category and building one of the world's most recognizable brands through unconventional marketing and extreme sports associations.
              </p>

              {/* Table of Contents */}
              <nav className="bg-gray-50 border border-gray-200 p-4 mb-8 rounded-lg">
                <h2 className="font-bold text-gray-900 mb-3 border-b border-gray-300 pb-2">Contents</h2>
                <ol className="space-y-1 text-sm">
                  <li><a href="#overview" className="text-blue-600 hover:underline">1 Overview</a></li>
                  <li><a href="#history" className="text-blue-600 hover:underline">2 History and Founding</a></li>
                  <li><a href="#founders" className="text-blue-600 hover:underline">3 Founders</a></li>
                  <li><a href="#products" className="text-blue-600 hover:underline">4 Products</a></li>
                  <li><a href="#sports" className="text-blue-600 hover:underline">5 Sports Empire</a></li>
                  <li><a href="#structure" className="text-blue-600 hover:underline">6 Corporate Structure</a></li>
                  <li><a href="#marketing" className="text-blue-600 hover:underline">7 Marketing Strategy</a></li>
                  <li><a href="#controversies" className="text-blue-600 hover:underline">8 Controversies</a></li>
                  <li><a href="#financials" className="text-blue-600 hover:underline">9 Financials</a></li>
                  <li><a href="#seealso" className="text-blue-600 hover:underline">10 See Also</a></li>
                  <li><a href="#references" className="text-blue-600 hover:underline">11 References</a></li>
                </ol>
              </nav>

              {/* Overview Section */}
              <section id="overview" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Overview</h2>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold w-1/3">Type</th>
                        <td className="p-3">Private GmbH (Limited Liability Company)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Industry</th>
                        <td className="p-3">Beverages, Sports, Media</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Founded</th>
                        <td className="p-3">1984 (Product launched April 1, 1987)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Founders</th>
                        <td className="p-3">Dietrich Mateschitz, Chaleo Yoovidhya</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Headquarters</th>
                        <td className="p-3">Fuschl am See, Salzburg, Austria</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Area Served</th>
                        <td className="p-3">170+ countries worldwide</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Key Products</th>
                        <td className="p-3">Red Bull Energy Drink, Sugarfree, Editions</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Owner</th>
                        <td className="p-3">Yoovidhya family (~51%), Mateschitz heirs (~49%)</td>
                      </tr>
                      <tr>
                        <th className="bg-gray-50 p-3 text-left font-semibold">Website</th>
                        <td className="p-3">
                          <a href="https://www.redbull.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">redbull.com</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* History Section */}
              <section id="history" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">History and Founding</h2>
                
                <p className="mb-4 leading-relaxed">
                  Red Bull's origin story begins not in Austria, but in <strong>Thailand</strong>. In 1976, Thai businessman <strong>Chaleo Yoovidhya</strong> created <strong>Krating Daeng</strong> (กระทิงแดง), which translates to "Red Gaur" (a large wild bovine native to South Asia). The drink was formulated as a tonic for truck drivers, laborers, and other workers needing to stay alert during long shifts.
                </p>

                <h3 className="text-lg font-semibold mb-3">The Meeting of Minds (1982)</h3>
                <p className="mb-4 leading-relaxed">
                  The pivotal moment came in 1982 when <strong>Dietrich Mateschitz</strong>, an Austrian marketing executive working for Blendax (a German toothpaste company), traveled to Thailand for business. Suffering from jet lag, he tried Krating Daeng and claimed it cured his exhaustion. Recognizing the product's potential for Western markets, Mateschitz sought out Chaleo Yoovidhya to propose a partnership.
                </p>

                <h3 className="text-lg font-semibold mb-3">Partnership and Launch (1984-1987)</h3>
                <p className="mb-4 leading-relaxed">
                  In <strong>1984</strong>, Mateschitz and Yoovidhya founded <strong>Red Bull GmbH</strong> in Fuschl am See, Austria. Each partner invested <strong>$500,000</strong> for a 49% stake, with 2% allocated to Yoovidhya's son, Chalerm. This structure ensured neither founder had outright control while keeping the company private.
                </p>

                <p className="mb-4 leading-relaxed">
                  Mateschitz spent three years adapting the formula for Western tastes—making it carbonated, less sweet, and creating the distinctive slim can design. On <strong>April 1, 1987</strong>, Red Bull Energy Drink launched in Austria, effectively creating the energy drink category in Western markets.
                </p>

                <h3 className="text-lg font-semibold mb-3">Global Expansion</h3>
                <p className="mb-4 leading-relaxed">
                  From its Austrian launch, Red Bull expanded methodically: Hungary (1992), Germany and the UK (1994), the United States (1997), and eventually to over <strong>170 countries</strong>. The company resisted traditional advertising, instead building the brand through extreme sports sponsorships, event marketing, and word-of-mouth.
                </p>

                <h3 className="text-lg font-semibold mb-3">Founder Deaths and Succession</h3>
                <p className="leading-relaxed">
                  <strong>Chaleo Yoovidhya</strong> passed away in <strong>March 2012</strong> at age 88. <strong>Dietrich Mateschitz</strong> died in <strong>October 2022</strong> at age 78 from cancer. Ownership transferred to their respective heirs: the Yoovidhya family retained approximately 51% through T.C. Pharmaceutical, while Mark Mateschitz (Dietrich's son) inherited approximately 49%.
                </p>
              </section>

              {/* Founders Section */}
              <section id="founders" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Founders</h2>
                
                <h3 className="text-lg font-semibold mb-3">Dietrich Mateschitz (1944–2022)</h3>
                <p className="mb-4 leading-relaxed">
                  Born in Styria, Austria, Mateschitz was the marketing genius who transformed a Thai tonic into a global brand. Before Red Bull, he worked in marketing for Unilever and Blendax. Known for his reclusive nature and obsession with brand control, Mateschitz:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li>Developed the Western formula and carbonation process</li>
                  <li>Created the "Red Bull Gives You Wings" positioning</li>
                  <li>Pioneered extreme sports marketing</li>
                  <li>Maintained strict private ownership to avoid shareholder pressure</li>
                  <li>Built a fortune estimated at $27 billion at his death</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">Chaleo Yoovidhya (1923–2012)</h3>
                <p className="leading-relaxed">
                  A Thai entrepreneur of ethnic Chinese descent, Yoovidhya founded T.C. Pharmaceutical in 1956. He created Krating Daeng in 1976 as a medicinal tonic. Though less visible than Mateschitz internationally, his family maintained significant control through their 51% stake and T.C. Pharmaceutical, which continues to produce Krating Daeng in Thailand.
                </p>
              </section>

              {/* Products Section */}
              <section id="products" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Products</h2>
                
                <h3 className="text-lg font-semibold mb-3">Red Bull Energy Drink</h3>
                <p className="mb-4 leading-relaxed">
                  The flagship product contains caffeine, taurine, B-vitamins (B3, B5, B6, B12), sucrose and glucose, alpine water, and citric acid. A standard 250ml can contains approximately 80mg of caffeine—roughly equivalent to a cup of coffee.
                </p>

                <h3 className="text-lg font-semibold mb-3">Product Variants</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li><strong>Red Bull Sugarfree:</strong> Zero-calorie version using artificial sweeteners</li>
                  <li><strong>Red Bull Zero:</strong> Another zero-sugar variant</li>
                  <li><strong>Red Bull Editions:</strong> Flavored versions including Blueberry, Coconut Berry, Peach-Nectarine, Watermelon, and others</li>
                  <li><strong>Organics by Red Bull:</strong> Organic soda line (discontinued in many markets)</li>
                  <li><strong>Red Bull Simply Cola:</strong> Cola with natural caffeine (limited markets)</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">Production</h3>
                <p className="leading-relaxed">
                  Red Bull operates production facilities in Austria (headquarters), Thailand, and regional plants worldwide. The company uses a decentralized manufacturing model to reduce shipping costs and ensure freshness.
                </p>
              </section>

              {/* Sports Empire Section */}
              <section id="sports" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Sports Empire</h2>
                
                <p className="mb-4 leading-relaxed">
                  Red Bull's sports involvement goes far beyond sponsorship—it owns entire teams, venues, and media operations. This vertical integration creates authentic brand association while generating content and revenue.
                </p>

                <h3 className="text-lg font-semibold mb-3">Formula 1</h3>
                <p className="mb-4 leading-relaxed">
                  Red Bull owns <strong>two Formula 1 teams</strong>—a unique arrangement in the sport:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li>
                    <strong>Oracle Red Bull Racing:</strong> Acquired from Jaguar in 2005. Based in Milton Keynes, UK. Winners of multiple Constructors' and Drivers' Championships (2010-2013, 2022-2024). Current drivers include Max Verstappen.
                  </li>
                  <li>
                    <strong>Visa Cash App RB (Racing Bulls):</strong> Formerly Toro Rosso (2006-2019) and AlphaTauri (2020-2023). Acquired from Minardi in 2005. Serves as a junior team and technology testbed, based in Faenza, Italy.
                  </li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  This dual-team ownership has drawn criticism from competitors, particularly McLaren CEO Zak Brown, who argues it creates conflicts of interest and an unfair "A/B team" dynamic.
                </p>

                <h3 className="text-lg font-semibold mb-3">Football (Soccer)</h3>
                <p className="mb-4 leading-relaxed">
                  Red Bull operates a multi-club ownership model under "Red Bull Football":
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li><strong>RB Leipzig (Germany):</strong> Founded in 2009, promoted to Bundesliga in 2016. Finished as league runners-up multiple times, reached Champions League semi-finals (2020).</li>
                  <li><strong>FC Red Bull Salzburg (Austria):</strong> Acquired in 2005. Dominant Austrian Bundesliga force, perennial Champions League qualifier.</li>
                  <li><strong>New York Red Bulls (USA):</strong> MLS franchise since 1995 (acquired full control in 2006).</li>
                  <li><strong>Red Bull Bragantino (Brazil):</strong> Acquired in 2019, rising force in Brazilian football.</li>
                  <li><strong>FC Liefering (Austria):</strong> Farm team for Salzburg.</li>
                  <li><strong>RB Leipzig II, Red Bull Ghana (development):</strong> Various academy and development setups.</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">Ice Hockey</h3>
                <p className="mb-4 leading-relaxed">
                  <strong>EC Red Bull Salzburg:</strong> Austrian ice hockey club competing in the ICE Hockey League. Multiple-time Austrian champions.
                </p>

                <h3 className="text-lg font-semibold mb-3">Extreme Sports & Events</h3>
                <p className="mb-4 leading-relaxed">
                  Red Bull has created or sponsors hundreds of extreme sports events and athletes worldwide:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li><strong>Red Bull Stratos (2012):</strong> Felix Baumgartner's record-breaking space jump—$65 million video production</li>
                  <li><strong>Red Bull Rampage:</strong> Premier freeride mountain biking event</li>
                  <li><strong>Red Bull Cliff Diving World Series</strong></li>
                  <li><strong>Red Bull X-Fighters:</strong> Freestyle motocross</li>
                  <li><strong>Red Bull Air Race</strong> (operated 2003–2019)</li>
                  <li><strong>Red Bull Crashed Ice</strong> (ice cross downhill)</li>
                  <li><strong>Red Bull BC One:</strong> Breakdancing world championship</li>
                  <li><strong>Red Bull Music Academy</strong> (operated 1998–2019)</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">Cycling</h3>
                <p className="leading-relaxed">
                  <strong>Red Bull–Bora–Hansgrohe:</strong> UCI WorldTour professional cycling team, competing in Tour de France and other major races.
                </p>
              </section>

              {/* Corporate Structure Section */}
              <section id="structure" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Corporate Structure</h2>
                
                <h3 className="text-lg font-semibold mb-3">Ownership</h3>
                <p className="mb-4 leading-relaxed">
                  Red Bull GmbH is a <strong>privately held GmbH</strong> (Gesellschaft mit beschränkter Haftung)—the Austrian equivalent of an LLC. The company has never gone public and maintains strict founder/family control:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li><strong>Yoovidhya family:</strong> ~51% (through T.C. Pharmaceutical and various holding structures)</li>
                  <li><strong>Mateschitz family:</strong> ~49% (inherited by Mark Mateschitz after his father's death)</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  The 2% difference (Chalerm Yoovidhya's stake) proved decisive in control, giving the Thai family majority voting power.
                </p>

                <h3 className="text-lg font-semibold mb-3">Headquarters</h3>
                <p className="mb-4 leading-relaxed">
                  The company's headquarters is located in <strong>Fuschl am See</strong>, a lakeside village near Salzburg, Austria. The campus includes modern office buildings, production facilities, and the Hangar-7 aviation museum housing Mateschitz's private aircraft collection.
                </p>

                <h3 className="text-lg font-semibold mb-3">Global Operations</h3>
                <p className="leading-relaxed">
                  Red Bull operates through regional subsidiaries and distribution partnerships in 170+ countries. Major markets include the United States, Germany, UK, France, Japan, Brazil, and emerging markets in Africa and Southeast Asia.
                </p>
              </section>

              {/* Marketing Strategy Section */}
              <section id="marketing" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Marketing Strategy</h2>
                
                <h3 className="text-lg font-semibold mb-3">"Gives You Wings"</h3>
                <p className="mb-4 leading-relaxed">
                  Red Bull's marketing revolutionized the beverage industry. Instead of traditional advertising, Mateschitz invested heavily in <strong>event marketing, extreme sports, and content creation</strong>. The strategy:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li>Associate the brand with high-energy, adventurous activities</li>
                  <li>Create owned media (Red Bull TV, Red Bull Media House)</li>
                  <li>Sponsor athletes and events rather than buying TV commercials</li>
                  <li>Generate word-of-mouth through spectacular stunts</li>
                  <li>Maintain premium pricing to reinforce brand positioning</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">Media Empire</h3>
                <p className="mb-4 leading-relaxed">
                  <strong>Red Bull Media House</strong>, established in 2007, produces films, magazines, digital content, and operates Red Bull TV. The media arm transforms marketing from a cost center into a revenue-generating business while ensuring brand message control.
                </p>

                <h3 className="text-lg font-semibold mb-3">Distribution Innovation</h3>
                <p className="leading-relaxed">
                  Red Bull pioneered placement in non-traditional venues—nightclubs, gyms, convenience stores, and gas stations—rather than competing for supermarket shelf space. The distinctive slim can and blue-silver color scheme created instant visual recognition.
                </p>
              </section>

              {/* Controversies Section */}
              <section id="controversies" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Controversies</h2>
                
                <h3 className="text-lg font-semibold mb-3">Formula 1 Dual Team Ownership</h3>
                <p className="mb-4 leading-relaxed">
                  Red Bull's ownership of two F1 teams has generated ongoing controversy. Critics, including McLaren Racing CEO Zak Brown, argue the arrangement creates:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li>Unfair information sharing between "A team" and "B team"</li>
                  <li>Voting bloc influence in F1 governance</li>
                  <li>Reduced grid diversity as smaller teams struggle to compete</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  The FIA has investigated the relationship multiple times but has not found conclusive evidence of rule violations.
                </p>

                <h3 className="text-lg font-semibold mb-3">Health Concerns</h3>
                <p className="mb-4 leading-relaxed">
                  Energy drinks face ongoing scrutiny regarding health effects, particularly on young people. Concerns include:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li>High caffeine content and cardiovascular effects</li>
                  <li>Mixing with alcohol (popular in nightlife culture)</li>
                  <li>Marketing to minors (despite self-imposed age restrictions)</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  Some countries have banned or restricted energy drink sales to minors. Red Bull maintains its products are safe when consumed as directed and in moderation.
                </p>

                <h3 className="text-lg font-semibold mb-3">RB Leipzig Fan Culture</h3>
                <p className="mb-4 leading-relaxed">
                  RB Leipzig's rapid rise through German football has been controversial among traditional fans. The club's corporate ownership structure and minimal membership numbers (allowing Red Bull to maintain control) conflict with Germany's 50+1 fan ownership rule. This has made Leipzig a target of opposition fan protests.
                </p>

                <h3 className="text-lg font-semibold mb-3">Post-Mateschitz Power Struggles</h3>
                <p className="leading-relaxed">
                  Following Dietrich Mateschitz's death in 2022, tensions emerged between the Yoovidhya and Mateschitz families over control. The February 2024 sacking of long-serving F1 Team Principal Christian Horner (amid internal investigations) highlighted governance challenges in the post-founder era.
                </p>
              </section>

              {/* Financials Section */}
              <section id="financials" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Financials</h2>
                
                <p className="mb-4 leading-relaxed">
                  As a private company, Red Bull does not disclose detailed financial statements. However, available data indicates massive scale:
                </p>

                <h3 className="text-lg font-semibold mb-3">Estimated Performance</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold w-1/3">Annual Revenue (est.)</th>
                        <td className="p-3">€10+ billion</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Cans Sold Annually</th>
                        <td className="p-3">12+ billion</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Employees Worldwide</th>
                        <td className="p-3">13,000+</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Market Position</th>
                        <td className="p-3">Global energy drink market leader (~40-43% share)</td>
                      </tr>
                      <tr>
                        <th className="bg-gray-50 p-3 text-left font-semibold">Mateschitz Net Worth</th>
                        <td className="p-3">$27 billion (at time of death, 2022)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold mb-3">Competitive Position</h3>
                <p className="leading-relaxed">
                  Red Bull dominates the global energy drink market with approximately 40-43% market share. Main competitors include Monster Energy (Coca-Cola owned), Rockstar (PepsiCo), and various regional brands. Despite competition, Red Bull maintains premium pricing and brand cachet that competitors struggle to match.
                </p>
              </section>

              {/* See Also Section */}
              <section id="seealso" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">See Also</h2>
                <div className="columns-2 gap-8">
                  <ul>
                    <li><Link href="/energy-drinks" className="text-blue-600 hover:underline">Energy Drink Industry</Link></li>
                    <li><Link href="/formula-1" className="text-blue-600 hover:underline">Formula 1</Link></li>
                    <li><Link href="/rb-leipzig" className="text-blue-600 hover:underline">RB Leipzig</Link></li>
                    <li><Link href="/max-verstappen" className="text-blue-600 hover:underline">Max Verstappen</Link></li>
                  </ul>
                  <ul>
                    <li><Link href="/extreme-sports" className="text-blue-600 hover:underline">Extreme Sports</Link></li>
                    <li><Link href="/beverage-industry" className="text-blue-600 hover:underline">Beverage Industry</Link></li>
                    <li><Link href="/monster-energy" className="text-blue-600 hover:underline">Monster Energy</Link></li>
                    <li><Link href="/coca-cola" className="text-blue-600 hover:underline">Coca-Cola</Link></li>
                  </ul>
                </div>
              </section>

              {/* References Section */}
              <section id="references" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">References</h2>
                <ol className="text-sm text-gray-600 space-y-2">
                  <li>"Who Owns Red Bull GmbH? The Full Ownership Breakdown." <em>Ecreee</em>, February 2026, web.ecreee.org.</li>
                  <li>"Red Bull." <em>Wikipedia</em>, en.wikipedia.org/wiki/Red_Bull.</li>
                  <li>"The Story Of How Red Bull Turned To Be A Global Brand Leader." <em>Naturality</em>, naturality.io.</li>
                  <li>"The Untold Story of Red Bull: From Thai Energy Booster to Global Icon." <em>Phable</em>, phable.io.</li>
                  <li>"Q&A | When was Red Bull founded?" <em>Red Bull Official</em>, redbull.com.</li>
                  <li>"Red Bull Company: Giving Wiiings to People & Ideas." <em>Red Bull Official</em>, redbull.com.</li>
                  <li>"The Surprising Origin Story of the Red Bull Brand." <em>C-Suite Network</em>, c-suitenetwork.com.</li>
                  <li>"History of Red Bull: Giving Wiiings Since 1987." <em>Red Bull Official</em>, redbull.com.</li>
                  <li>"F1 team ownership: who are the different teams owned by?" <em>Autosport</em>, autosport.com.</li>
                  <li>"Explained: Who owns each Formula 1 team." <em>Planet F1</em>, planetf1.com.</li>
                </ol>
              </section>
            </main>

            {/* Wikipedia-Style Info Box Sidebar */}
            <aside className="lg:col-span-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden sticky top-4">
                <div className="bg-gray-100 p-3 border-b border-gray-200">
                  <h2 className="font-bold text-center text-gray-900">Red Bull GmbH</h2>
                </div>
                
                <div className="p-4 space-y-4 text-sm">
                  {/* Logo Placeholder */}
                  <div className="bg-white border border-gray-200 p-4 text-center">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-yellow-500 rounded-full flex items-center justify-center mb-2">
                      <span className="text-white font-bold text-3xl">⚡</span>
                    </div>
                    <p className="text-xs text-gray-500">Red Bull Logo</p>
                  </div>

                  {/* Quick Facts */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Quick Facts</h3>
                    <dl className="space-y-2">
                      <div>
                        <dt className="text-gray-500 text-xs">Type</dt>
                        <dd>Private GmbH</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">Founded</dt>
                        <dd>1984 (Product: 1987)</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">Founders</dt>
                        <dd>Mateschitz & Yoovidhya</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">HQ</dt>
                        <dd>Fuschl am See, Austria</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">Countries</dt>
                        <dd>170+</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">Ownership</dt>
                        <dd>Private (51% / 49%)</dd>
                      </div>
                    </dl>
                  </div>

                  {/* F1 Teams */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">F1 Teams Owned</h3>
                    <ul className="space-y-1 text-xs">
                      <li>• Oracle Red Bull Racing</li>
                      <li>• Visa Cash App RB</li>
                    </ul>
                  </div>

                  {/* Football Clubs */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Football Clubs</h3>
                    <ul className="space-y-1 text-xs">
                      <li>• RB Leipzig (Germany)</li>
                      <li>• FC Red Bull Salzburg (Austria)</li>
                      <li>• New York Red Bulls (USA)</li>
                      <li>• Red Bull Bragantino (Brazil)</li>
                    </ul>
                  </div>

                  {/* Website */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Website</h3>
                    <a href="https://www.redbull.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs">
                      redbull.com
                    </a>
                  </div>

                  {/* Related Links */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Related</h3>
                    <ul className="space-y-1">
                      <li>
                        <Link href="/formula-1" className="text-blue-600 hover:underline text-xs">Formula 1</Link>
                      </li>
                      <li>
                        <Link href="/rb-leipzig" className="text-blue-600 hover:underline text-xs">RB Leipzig</Link>
                      </li>
                      <li>
                        <Link href="/max-verstappen" className="text-blue-600 hover:underline text-xs">Max Verstappen</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-gray-50 py-8">
          <div className="container mx-auto px-4 max-w-6xl text-center text-sm text-gray-600">
            <p>
              This article is part of <Link href="/" className="text-blue-600 hover:underline">ObjectWire</Link>'s business coverage.
              Last updated: February 19, 2026.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
