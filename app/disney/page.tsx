import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema, OrganizationSchema } from '@/components/NewsArticleSchema';

export const metadata: Metadata = {
  title: "The Walt Disney Company - Entertainment Conglomerate | ObjectWire",
  description: "Comprehensive profile of The Walt Disney Company, the world's largest entertainment conglomerate. History, business segments, leadership, theme parks, streaming, and corporate developments.",
  alternates: {
    canonical: 'https://www.objectwire.org/disney',
  },
  keywords: ['Disney', 'Walt Disney Company', 'Disney Parks', 'Disney+', 'Bob Iger', 'Josh D\'Amaro', 'Marvel', 'Pixar', 'Star Wars', 'ESPN'],
};

export default function DisneyWikiPage() {
  const breadcrumbItems = [
    { name: 'Home', item: '/' },
    { name: 'Disney', item: '/disney' },
  ];

  return (
    <>
      {/* SEO Schemas */}
      <NewsArticleSchema
        title="The Walt Disney Company - Entertainment Conglomerate"
        description="Comprehensive profile of The Walt Disney Company. History, business segments, leadership, theme parks, streaming services, and corporate developments."
        author="Alfansa - ObjectWire Editorial"
        publishedTime="2026-02-19"
        modifiedTime="2026-02-19"
        articleUrl="https://www.objectwire.org/disney"
        section="Entertainment"
        keywords={['Disney', 'Walt Disney Company', 'Disney+', 'Marvel', 'Pixar', 'theme parks']}
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
            <h1 className="text-4xl font-serif mb-2">The Walt Disney Company</h1>
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
                <strong>The Walt Disney Company</strong>, commonly known as <strong>Disney</strong>, is an American multinational mass media and entertainment conglomerate headquartered in <Link href="/burbank-california" className="text-blue-600 hover:underline">Burbank, California</Link>. Founded in <strong>1923</strong> by brothers <strong>Walt</strong> and <strong>Roy Disney</strong> as the <strong>Disney Brothers Cartoon Studio</strong>, the company has evolved from a small animation studio into the world's largest entertainment empire, encompassing film studios, television networks, theme parks, streaming services, and consumer products. Disney's portfolio includes iconic brands such as <Link href="/marvel" className="text-blue-600 hover:underline">Marvel</Link>, <Link href="/pixar" className="text-blue-600 hover:underline">Pixar</Link>, <Link href="/star-wars" className="text-blue-600 hover:underline">Star Wars</Link>, <Link href="/espn" className="text-blue-600 hover:underline">ESPN</Link>, and <Link href="/abc" className="text-blue-600 hover:underline">ABC</Link>.
              </p>

              {/* Table of Contents */}
              <nav className="bg-gray-50 border border-gray-200 p-4 mb-8 rounded-lg">
                <h2 className="font-bold text-gray-900 mb-3 border-b border-gray-300 pb-2">Contents</h2>
                <ol className="space-y-1 text-sm">
                  <li><a href="#overview" className="text-blue-600 hover:underline">1 Overview</a></li>
                  <li><a href="#history" className="text-blue-600 hover:underline">2 History</a></li>
                  <li><a href="#leadership" className="text-blue-600 hover:underline">3 Leadership</a></li>
                  <li><a href="#segments" className="text-blue-600 hover:underline">4 Business Segments</a></li>
                  <li><a href="#parks" className="text-blue-600 hover:underline">5 Disney Parks and Resorts</a></li>
                  <li><a href="#streaming" className="text-blue-600 hover:underline">6 Streaming and Entertainment</a></li>
                  <li><a href="#gaming" className="text-blue-600 hover:underline">7 Gaming and Digital</a></li>
                  <li><a href="#financials" className="text-blue-600 hover:underline">8 Financials</a></li>
                  <li><a href="#controversies" className="text-blue-600 hover:underline">9 Controversies</a></li>
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
                        <td className="p-3">Public (NYSE: DIS)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Industry</th>
                        <td className="p-3">Mass Media, Entertainment</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Founded</th>
                        <td className="p-3">October 16, 1923 (as Disney Brothers Cartoon Studio)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Founders</th>
                        <td className="p-3">Walt Disney, Roy O. Disney</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Headquarters</th>
                        <td className="p-3">Burbank, California, United States</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Area Served</th>
                        <td className="p-3">Worldwide</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Key People</th>
                        <td className="p-3">Bob Iger (CEO), Josh D'Amaro (Incoming CEO, March 2026)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Employees</th>
                        <td className="p-3">~200,000 (2025)</td>
                      </tr>
                      <tr>
                        <th className="bg-gray-50 p-3 text-left font-semibold">Website</th>
                        <td className="p-3">
                          <a href="https://www.thewaltdisneycompany.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">thewaltdisneycompany.com</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* History Section */}
              <section id="history" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">History</h2>
                
                <h3 className="text-lg font-semibold mb-3">Founding and Early Years (1923–1937)</h3>
                <p className="mb-4 leading-relaxed">
                  The Walt Disney Company was founded on <strong>October 16, 1923</strong>, by brothers Walt and Roy Disney as the <strong>Disney Brothers Cartoon Studio</strong>. Their first major success came with the creation of <strong>Oswald the Lucky Rabbit</strong> in 1927, though they lost the rights to this character in a contract dispute with Universal Pictures.
                </p>
                <p className="mb-4 leading-relaxed">
                  In response, Walt Disney created <strong>Mickey Mouse</strong> in 1928, debuting in "Steamboat Willie," one of the first cartoons with synchronized sound. Mickey Mouse became an international phenomenon, establishing Disney as a major force in animation.
                </p>

                <h3 className="text-lg font-semibold mb-3">Golden Age of Animation (1937–1966)</h3>
                <p className="mb-4 leading-relaxed">
                  Disney released its first feature-length animated film, <strong>Snow White and the Seven Dwarfs</strong>, in 1937. This was followed by a series of classics including <em>Pinocchio</em> (1940), <em>Fantasia</em> (1940), <em>Dumbo</em> (1941), and <em>Bambi</em> (1942). The company also began producing live-action films and nature documentaries.
                </p>
                <p className="mb-4 leading-relaxed">
                  In <strong>1955</strong>, Walt Disney opened <strong>Disneyland</strong> in Anaheim, California—the first theme park of its kind. This marked Disney's expansion beyond film and television into experiential entertainment. Plans for Walt Disney World in Florida were underway when Walt Disney passed away in 1966.
                </p>

                <h3 className="text-lg font-semibold mb-3">Post-Walt Era and Expansion (1966–1984)</h3>
                <p className="mb-4 leading-relaxed">
                  Following Walt's death, his brother Roy O. Disney oversaw the completion of Walt Disney World, which opened in 1971. The company continued to produce animated classics and expanded its theme park operations internationally with Tokyo Disneyland (1983).
                </p>

                <h3 className="text-lg font-semibold mb-3">The Eisner Era and Renaissance (1984–2005)</h3>
                <p className="mb-4 leading-relaxed">
                  Under CEO <strong>Michael Eisner</strong>, Disney experienced a creative and financial renaissance. The "Disney Renaissance" produced animated hits like <em>The Little Mermaid</em> (1989), <em>Beauty and the Beast</em> (1991), <em>Aladdin</em> (1992), and <em>The Lion King</em> (1994). The company expanded aggressively, acquiring Capital Cities/ABC in 1995 for $19 billion.
                </p>

                <h3 className="text-lg font-semibold mb-3">The Iger Era and Major Acquisitions (2005–2020, 2022–present)</h3>
                <p className="mb-4 leading-relaxed">
                  <strong>Bob Iger</strong> became CEO in 2005 and oversaw Disney's transformation into a global entertainment behemoth through strategic acquisitions:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li><strong>Pixar Animation Studios:</strong> Acquired in 2006 for $7.4 billion</li>
                  <li><strong>Marvel Entertainment:</strong> Acquired in 2009 for $4 billion</li>
                  <li><strong>Lucasfilm:</strong> Acquired in 2012 for $4.06 billion (including Star Wars)</li>
                  <li><strong>21st Century Fox:</strong> Acquired in 2019 for $71.3 billion</li>
                </ul>
                <p className="leading-relaxed">
                  Iger stepped down in 2020, was replaced by Bob Chapek, but returned in November 2022 after Chapek's controversial tenure. In February 2025, Disney announced that <strong>Josh D'Amaro</strong> would succeed Iger as CEO effective March 2026.
                </p>
              </section>

              {/* Leadership Section */}
              <section id="leadership" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Leadership</h2>
                
                <h3 className="text-lg font-semibold mb-3">Bob Iger (Current CEO)</h3>
                <p className="mb-4 leading-relaxed">
                  <strong>Robert Iger</strong> has served as Disney's CEO during two periods: 2005–2020 and 2022–present. During his first tenure, he orchestrated the acquisitions of Pixar, Marvel, Lucasfilm, and 21st Century Fox, transforming Disney into the world's largest entertainment company. He returned in November 2022 after Bob Chapek's departure.
                </p>

                <h3 className="text-lg font-semibold mb-3">Josh D'Amaro (Incoming CEO)</h3>
                <p className="mb-4 leading-relaxed">
                  In February 2025, Disney announced that <strong>Josh D'Amaro</strong> would become CEO effective March 2026. D'Amaro currently serves as Chairman of Disney Parks, Experiences and Products, a position he has held since 2020. He joined Disney in 1998 at Disneyland and has spent his entire career with the company.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-300">
                        <th className="p-3 text-left font-semibold">CEO</th>
                        <th className="p-3 text-left font-semibold">Tenure</th>
                        <th className="p-3 text-left font-semibold">Key Achievements</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-3">Walt Disney</td>
                        <td className="p-3">1923–1966</td>
                        <td className="p-3">Founded company, created Mickey Mouse, opened Disneyland</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3">Michael Eisner</td>
                        <td className="p-3">1984–2005</td>
                        <td className="p-3">Disney Renaissance, acquired ABC, expanded parks globally</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3">Bob Iger (1st term)</td>
                        <td className="p-3">2005–2020</td>
                        <td className="p-3">Acquired Pixar, Marvel, Lucasfilm, Fox; launched Disney+</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3">Bob Chapek</td>
                        <td className="p-3">2020–2022</td>
                        <td className="p-3">Led through pandemic; controversial tenure</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3">Bob Iger (2nd term)</td>
                        <td className="p-3">2022–2026</td>
                        <td className="p-3">Restructuring, cost-cutting, strategic refocus</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Josh D'Amaro</td>
                        <td className="p-3">2026–</td>
                        <td className="p-3">Incoming CEO (current Parks Chairman)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold mb-3">Josh D'Amaro's Vision</h3>
                <p className="leading-relaxed">
                  D'Amaro has articulated a vision focused on digital transformation and reaching younger audiences through gaming platforms. Notable initiatives include the $1.5 billion investment in Epic Games (makers of Fortnite) and exploring film premieres within gaming environments. He has also emphasized technology-enhanced park experiences and expanding Disney's presence in virtual spaces.
                </p>
              </section>

              {/* Business Segments Section */}
              <section id="segments" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Business Segments</h2>
                
                <p className="mb-4 leading-relaxed">
                  Disney operates through three primary business segments, reorganized in 2023 to reflect the company's strategic priorities:
                </p>

                <h3 className="text-lg font-semibold mb-3">Disney Entertainment</h3>
                <p className="mb-4 leading-relaxed">
                  The entertainment division encompasses film studios, television networks, and streaming services. It includes:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li><strong>Studios:</strong> Walt Disney Pictures, Pixar, Marvel Studios, Lucasfilm, 20th Century Studios, Searchlight Pictures</li>
                  <li><strong>Streaming:</strong> Disney+, Hulu, ESPN+, Star+ (international)</li>
                  <li><strong>Television:</strong> ABC, Disney Channel, FX, National Geographic</li>
                  <li><strong>Content libraries:</strong> Disney's extensive catalog of films and television programming</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">Disney Experiences</h3>
                <p className="mb-4 leading-relaxed">
                  This segment includes theme parks, resorts, cruise lines, and consumer products:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li><strong>Parks:</strong> Disneyland Resort (California), Walt Disney World Resort (Florida), Disneyland Paris, Hong Kong Disneyland, Shanghai Disney Resort, Tokyo Disney Resort (licensed)</li>
                  <li><strong>Cruise Line:</strong> Fleet of five ships with three additional ships on order</li>
                  <li><strong>Consumer Products:</strong> Licensing, retail, publishing, and games</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">ESPN</h3>
                <p className="leading-relaxed">
                  ESPN operates as a standalone segment, reflecting its importance and distinct business model. The sports network includes multiple cable channels, ESPN+, and holds rights to major sporting events including NFL, NBA, MLB, and college sports. Disney has announced plans to launch a flagship ESPN direct-to-consumer streaming service in 2025.
                </p>
              </section>

              {/* Parks Section */}
              <section id="parks" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Disney Parks and Resorts</h2>
                
                <p className="mb-4 leading-relaxed">
                  Disney's parks and resorts division is one of the world's largest theme park operators, with locations across North America, Europe, and Asia.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-300">
                        <th className="p-3 text-left font-semibold">Resort</th>
                        <th className="p-3 text-left font-semibold">Location</th>
                        <th className="p-3 text-left font-semibold">Opened</th>
                        <th className="p-3 text-left font-semibold">Parks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Disneyland Resort</td>
                        <td className="p-3">Anaheim, California</td>
                        <td className="p-3">1955</td>
                        <td className="p-3">2 (Disneyland, Disney California Adventure)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Walt Disney World</td>
                        <td className="p-3">Orlando, Florida</td>
                        <td className="p-3">1971</td>
                        <td className="p-3">4 (Magic Kingdom, EPCOT, Hollywood Studios, Animal Kingdom)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Tokyo Disney Resort</td>
                        <td className="p-3">Urayasu, Japan</td>
                        <td className="p-3">1983</td>
                        <td className="p-3">2 (Tokyo Disneyland, DisneySea)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Disneyland Paris</td>
                        <td className="p-3">Marne-la-Vallée, France</td>
                        <td className="p-3">1992</td>
                        <td className="p-3">2 (Disneyland Park, Walt Disney Studios)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Hong Kong Disneyland</td>
                        <td className="p-3">Penny's Bay, Hong Kong</td>
                        <td className="p-3">2005</td>
                        <td className="p-3">1</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Shanghai Disney Resort</td>
                        <td className="p-3">Pudong, Shanghai</td>
                        <td className="p-3">2016</td>
                        <td className="p-3">1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold mb-3">Disney Cruise Line</h3>
                <p className="leading-relaxed">
                  Disney Cruise Line operates five ships: Disney Magic, Disney Wonder, Disney Dream, Disney Fantasy, and Disney Wish. Three additional ships (Disney Treasure, Disney Destiny, and Disney Adventure) are scheduled to join the fleet through 2026. The cruise line is known for family-oriented experiences and Disney character interactions at sea.
                </p>
              </section>

              {/* Streaming Section */}
              <section id="streaming" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Streaming and Entertainment</h2>
                
                <h3 className="text-lg font-semibold mb-3">Disney+</h3>
                <p className="mb-4 leading-relaxed">
                  <strong>Disney+</strong> launched in November 2019 and quickly became one of the largest streaming services globally. The platform hosts content from Disney, Pixar, Marvel, Star Wars, and National Geographic. As of late 2024, Disney+ has over 150 million subscribers worldwide.
                </p>

                <h3 className="text-lg font-semibold mb-3">Content Strategy</h3>
                <p className="mb-4 leading-relaxed">
                  Disney's content strategy emphasizes franchise expansion and direct-to-streaming releases. Major successes include <em>The Mandalorian</em> (Star Wars), <em>WandaVision</em> and <em>Loki</em> (Marvel), and live-action remakes of animated classics. However, the company has faced challenges with streaming profitability, leading to content cost reductions and price increases.
                </p>

                <h3 className="text-lg font-semibold mb-3">Hulu and ESPN+</h3>
                <p className="leading-relaxed">
                  Disney acquired full control of <strong>Hulu</strong> through the 21st Century Fox acquisition and the 2023 buyout of Comcast's stake. Hulu serves as Disney's adult-oriented streaming platform, complementing the family-focused Disney+. <strong>ESPN+</strong> provides sports streaming content, including exclusive UFC events, boxing, and college sports.
                </p>
              </section>

              {/* Gaming Section */}
              <section id="gaming" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Gaming and Digital</h2>
                
                <h3 className="text-lg font-semibold mb-3">Epic Games Partnership</h3>
                <p className="mb-4 leading-relaxed">
                  In February 2024, Disney announced a <strong>$1.5 billion investment</strong> in Epic Games, the creator of Fortnite. This partnership aims to create an "entertainment universe" where Disney's intellectual properties can be experienced within Fortnite and potentially other platforms. Josh D'Amaro has floated the possibility of premiering Disney films within Fortnite, allowing players to watch movies together in virtual spaces.
                </p>

                <h3 className="text-lg font-semibold mb-3">Gaming History</h3>
                <p className="mb-4 leading-relaxed">
                  Disney has had a complex relationship with gaming. The company once owned multiple game development studios (including LucasArts) but largely exited game publishing in 2016. Since then, Disney has licensed its IP to third-party developers, resulting in successful titles like <em>Star Wars Jedi: Fallen Order</em> (EA) and <em>Marvel's Spider-Man</em> (Sony).
                </p>

                <h3 className="text-lg font-semibold mb-3">Future Vision</h3>
                <p className="leading-relaxed">
                  Under Josh D'Amaro's leadership, Disney is expected to increase its focus on gaming and digital experiences. The company aims to meet younger audiences in the platforms where they spend time, including Fortnite, Roblox, and other gaming environments. This includes virtual experiences, in-game items, and potentially exclusive digital content premieres.
                </p>
              </section>

              {/* Financials Section */}
              <section id="financials" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Financials</h2>
                
                <p className="mb-4 leading-relaxed">
                  Disney is one of the world's largest media companies by revenue and market capitalization.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-300">
                        <th className="p-3 text-left font-semibold">Metric (FY2024)</th>
                        <th className="p-3 text-left font-semibold">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Revenue</td>
                        <td className="p-3">~$90 billion</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Net Income</td>
                        <td className="p-3">~$5 billion</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Market Cap</td>
                        <td className="p-3">~$200 billion (varies)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Employees</td>
                        <td className="p-3">~200,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Disney+ Subscribers</td>
                        <td className="p-3">150+ million</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold mb-3">Stock Performance</h3>
                <p className="leading-relaxed">
                  Disney stock (NYSE: DIS) has experienced volatility in recent years. The stock reached all-time highs above $200 in 2021 but declined significantly during the streaming wars and economic uncertainty. Recent restructuring efforts and the announcement of Josh D'Amaro as incoming CEO have influenced investor sentiment.
                </p>
              </section>

              {/* Controversies Section */}
              <section id="controversies" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Controversies</h2>
                
                <h3 className="text-lg font-semibold mb-3">Political and Social Issues</h3>
                <p className="mb-4 leading-relaxed">
                  Disney has faced political controversies, particularly regarding LGBTQ+ content in children's programming and the company's response to Florida's "Don't Say Gay" legislation in 2022. These issues led to public disputes with Florida Governor Ron DeSantis and the revocation of Disney's special tax district status (later reinstated with modifications).
                </p>

                <h3 className="text-lg font-semibold mb-3">Bob Chapek Tenure</h3>
                <p className="mb-4 leading-relaxed">
                  Bob Chapek's tenure as CEO (2020–2022) was marked by controversy, including handling of the Scarlett Johansson <em>Black Widow</em> lawsuit, the Florida political conflict, and concerns about declining park experience quality. His management style alienated some creative talent and contributed to his replacement by returning CEO Bob Iger.
                </p>

                <h3 className="text-lg font-semibold mb-3">Streaming Profitability</h3>
                <p className="leading-relaxed">
                  Disney's aggressive investment in streaming has faced scrutiny from investors concerned about profitability. The company has implemented cost-cutting measures, including layoffs affecting 7,000 employees in 2023, and price increases across its streaming platforms to improve financial performance.
                </p>
              </section>

              {/* See Also Section */}
              <section id="seealso" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">See Also</h2>
                <div className="columns-2 gap-8">
                  <ul>
                    <li><Link href="/disney/josh-damaro" className="text-blue-600 hover:underline">Josh D'Amaro</Link></li>
                    <li><Link href="/marvel" className="text-blue-600 hover:underline">Marvel Entertainment</Link></li>
                    <li><Link href="/pixar" className="text-blue-600 hover:underline">Pixar Animation Studios</Link></li>
                    <li><Link href="/star-wars" className="text-blue-600 hover:underline">Star Wars</Link></li>
                  </ul>
                  <ul>
                    <li><Link href="/espn" className="text-blue-600 hover:underline">ESPN</Link></li>
                    <li><Link href="/netflix" className="text-blue-600 hover:underline">Netflix</Link></li>
                    <li><Link href="/streaming-wars" className="text-blue-600 hover:underline">Streaming Wars</Link></li>
                    <li><Link href="/entertainment" className="text-blue-600 hover:underline">Entertainment Industry</Link></li>
                  </ul>
                </div>
              </section>

              {/* References Section */}
              <section id="references" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">References</h2>
                <ol className="text-sm text-gray-600 space-y-2">
                  <li>"The Walt Disney Company." <em>Wikipedia</em>, en.wikipedia.org/wiki/The_Walt_Disney_Company.</li>
                  <li>"Disney's Incoming CEO Floats Premiering Films in Fortnite." <em>ObjectWire</em>, 11 Feb. 2026.</li>
                  <li>"Josh D'Amaro Biography." <em>ObjectWire</em>, objectwire.org/disney/josh-damaro.</li>
                  <li>"The Walt Disney Company Fact Sheet." <em>Disney Corporate</em>, thewaltdisneycompany.com.</li>
                  <li>"Disney Reports Q4 and Full Year Earnings." <em>Disney Investor Relations</em>, 2024.</li>
                  <li>"Disney to Invest $1.5 Billion in Epic Games." <em>Epic Games News</em>, Feb. 2024.</li>
                  <li>"Disney+ Subscriber Statistics." <em>Variety</em>, variety.com.</li>
                  <li>"Bob Iger Returns as Disney CEO." <em>CNBC</em>, Nov. 2022.</li>
                </ol>
              </section>
            </main>

            {/* Wikipedia-Style Info Box Sidebar */}
            <aside className="lg:col-span-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden sticky top-4">
                <div className="bg-gray-100 p-3 border-b border-gray-200">
                  <h2 className="font-bold text-center text-gray-900">The Walt Disney Company</h2>
                </div>
                
                <div className="p-4 space-y-4 text-sm">
                  {/* Logo Placeholder */}
                  <div className="bg-white border border-gray-200 p-4 text-center">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-white font-bold text-3xl">D</span>
                    </div>
                    <p className="text-xs text-gray-500">Disney Logo</p>
                  </div>

                  {/* Quick Facts */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Quick Facts</h3>
                    <dl className="space-y-2">
                      <div>
                        <dt className="text-gray-500 text-xs">Type</dt>
                        <dd>Public (NYSE: DIS)</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">Founded</dt>
                        <dd>October 16, 1923</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">Founders</dt>
                        <dd>Walt & Roy Disney</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">HQ</dt>
                        <dd>Burbank, California</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">CEO</dt>
                        <dd>Bob Iger</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">Incoming CEO</dt>
                        <dd>Josh D'Amaro (Mar 2026)</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">Employees</dt>
                        <dd>~200,000</dd>
                      </div>
                    </dl>
                  </div>

                  {/* Major Properties */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Major Properties</h3>
                    <ul className="space-y-1 text-xs">
                      <li>• Walt Disney Pictures</li>
                      <li>• Pixar Animation</li>
                      <li>• Marvel Studios</li>
                      <li>• Lucasfilm / Star Wars</li>
                      <li>• 20th Century Studios</li>
                      <li>• ESPN</li>
                      <li>• ABC</li>
                      <li>• Hulu</li>
                    </ul>
                  </div>

                  {/* Business Segments */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Segments</h3>
                    <ul className="space-y-1 text-xs">
                      <li>• Disney Entertainment</li>
                      <li>• Disney Experiences</li>
                      <li>• ESPN</li>
                    </ul>
                  </div>

                  {/* Streaming */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Streaming</h3>
                    <ul className="space-y-1 text-xs">
                      <li>• Disney+ (150M+ subs)</li>
                      <li>• Hulu</li>
                      <li>• ESPN+</li>
                    </ul>
                  </div>

                  {/* Website */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Website</h3>
                    <a href="https://www.thewaltdisneycompany.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs">
                      thewaltdisneycompany.com
                    </a>
                  </div>

                  {/* Related Links */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Related</h3>
                    <ul className="space-y-1">
                      <li>
                        <Link href="/disney/josh-damaro" className="text-blue-600 hover:underline text-xs">Josh D'Amaro</Link>
                      </li>
                      <li>
                        <Link href="/marvel" className="text-blue-600 hover:underline text-xs">Marvel</Link>
                      </li>
                      <li>
                        <Link href="/pixar" className="text-blue-600 hover:underline text-xs">Pixar</Link>
                      </li>
                      <li>
                        <Link href="/streaming-wars" className="text-blue-600 hover:underline text-xs">Streaming Wars</Link>
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
              This article is part of <Link href="/" className="text-blue-600 hover:underline">ObjectWire</Link>'s entertainment coverage.
              Last updated: February 19, 2026.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
