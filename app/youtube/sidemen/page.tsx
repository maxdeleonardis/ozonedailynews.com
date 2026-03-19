import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema, OrganizationSchema } from '@/components/NewsArticleSchema';

export const metadata: Metadata = {
  title: "The Sidemen - British YouTube Entertainment Group | ObjectWire",
  description: "Comprehensive profile of The Sidemen, the UK's biggest YouTube group featuring KSI, Miniminter, Zerkaa, TBJZL, Behzinga, Vikkstar123, and W2S. History, members, business ventures, and charity work.",
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/sidemen',
  },
  keywords: ['Sidemen', 'KSI', 'Miniminter', 'Zerkaa', 'TBJZL', 'Behzinga', 'Vikkstar123', 'W2S', 'UK YouTubers', 'Sidemen Charity Match', 'YouTube group'],
};

export default function SidemenWikiPage() {
  const breadcrumbItems = [
    { name: 'Home', item: '/' },
    { name: 'YouTube', item: '/youtube' },
    { name: 'Sidemen', item: '/youtube/sidemen' },
  ];

  return (
    <>
      {/* SEO Schemas */}
      <NewsArticleSchema
        title="The Sidemen - British YouTube Entertainment Group"
        description="Comprehensive profile of The Sidemen, the UK's biggest YouTube group. History, members, business ventures, charity work, and cultural impact."
        author="Alfansa - ObjectWire Editorial"
        publishedTime="2026-02-19"
        modifiedTime="2026-02-19"
        articleUrl="https://www.objectwire.org/youtube/sidemen"
        section="Entertainment"
        keywords={['Sidemen', 'KSI', 'Miniminter', 'YouTube', 'UK YouTubers', 'Sidemen Charity Match']}
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
            <h1 className="text-4xl font-serif mb-2">The Sidemen</h1>
      
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-6xl pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content - Wikipedia Style */}
            <main className="lg:col-span-8">
              {/* Lead Paragraph */}
              <p className="text-lg leading-relaxed mb-6">
                <strong>The Sidemen</strong> are a British <Link href="/youtube" className="text-blue-600 hover:underline">YouTube</Link> entertainment group consisting of seven members: <strong>JJ Olatunji (KSI)</strong>, <strong>Simon Minter (Miniminter)</strong>, <strong>Josh Bradley (Zerkaa)</strong>, <strong>Tobi Brown (TBJZL)</strong>, <strong>Ethan Payne (Behzinga)</strong>, <strong>Vikram Barn (Vikkstar123)</strong>, and <strong>Harry Lewis (W2S)</strong>. Formed in <strong>October 2013</strong>, the group has become one of the most successful content collectives in digital media history, amassing over <strong>140 million combined subscribers</strong> across their individual and group channels.
              </p>

              {/* Table of Contents */}
              <nav className="bg-gray-50 border border-gray-200 p-4 mb-8 rounded-lg">
                <h2 className="font-bold text-gray-900 mb-3 border-b border-gray-300 pb-2">Contents</h2>
                <ol className="space-y-1 text-sm">
                  <li><a href="#overview" className="text-blue-600 hover:underline">1 Overview</a></li>
                  <li><a href="#history" className="text-blue-600 hover:underline">2 History and Formation</a></li>
                  <li><a href="#members" className="text-blue-600 hover:underline">3 Members</a></li>
                  <li><a href="#content" className="text-blue-600 hover:underline">4 Content and Series</a></li>
                  <li><a href="#charity" className="text-blue-600 hover:underline">5 Charity Football Match</a></li>
                  <li><a href="#business" className="text-blue-600 hover:underline">6 Business Ventures</a></li>
                  <li><a href="#impact" className="text-blue-600 hover:underline">7 Cultural Impact</a></li>
                  <li><a href="#controversies" className="text-blue-600 hover:underline">8 Controversies</a></li>
                  <li><a href="#statistics" className="text-blue-600 hover:underline">9 Statistics</a></li>
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
                        <th className="bg-gray-50 p-3 text-left font-semibold w-1/3">Origin</th>
                        <td className="p-3">London, United Kingdom</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Formed</th>
                        <td className="p-3">October 19, 2013</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Members</th>
                        <td className="p-3">7 (KSI, Miniminter, Zerkaa, TBJZL, Behzinga, Vikkstar123, W2S)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Combined Subscribers</th>
                        <td className="p-3">140+ million</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Main Channel</th>
                        <td className="p-3">Sidemen (20+ million subscribers)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Content Type</th>
                        <td className="p-3">Challenges, Gaming, Football, Entertainment</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Known For</th>
                        <td className="p-3">Sidemen Sundays, Charity Match, XIX Vodka</td>
                      </tr>
                      <tr>
                        <th className="bg-gray-50 p-3 text-left font-semibold">Website</th>
                        <td className="p-3">
                          <a href="https://www.sidemenclothing.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">sidemenclothing.com</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* History Section */}
              <section id="history" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">History and Formation</h2>
                
                <h3 className="text-lg font-semibold mb-3">Origins (2013)</h3>
                <p className="mb-4 leading-relaxed">
                  The Sidemen formed on <strong>October 19, 2013</strong>, initially as a group of friends who connected through the FIFA gaming community on YouTube. The original members met while creating gaming content, primarily focused on FIFA Ultimate Team and football-related videos.
                </p>

                <h3 className="text-lg font-semibold mb-3">Name Origin</h3>
                <p className="mb-4 leading-relaxed">
                  The name "Sidemen" originated as a self-deprecating joke. In football terminology, a "side-man" refers to a substitute or less prominent player. The group initially considered themselves secondary to the more established YouTube gaming creators of the era, though they would eventually surpass many of their contemporaries in popularity.
                </p>

                <h3 className="text-lg font-semibold mb-3">Evolution of Content</h3>
                <p className="mb-4 leading-relaxed">
                  What began as gaming videos evolved into high-production entertainment content. The group's breakthrough came with collaborative challenges and the introduction of "Sidemen Sundays"—weekly videos featuring all seven members in elaborate competitions, challenges, and comedic sketches.
                </p>

                <h3 className="text-lg font-semibold mb-3">Business Empire Growth</h3>
                <p className="leading-relaxed">
                  By 2016, the Sidemen had established themselves as more than content creators, launching business ventures including clothing lines, alcohol brands, and restaurant chains. Their annual Charity Football Match, beginning in 2016, would become one of the largest creator-led charitable events globally.
                </p>
              </section>

              {/* Members Section */}
              <section id="members" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Members</h2>
                
                <p className="mb-4 leading-relaxed">
                  The Sidemen consist of seven core members, each maintaining successful individual YouTube channels alongside their group content.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-300">
                        <th className="p-3 text-left font-semibold">Alias</th>
                        <th className="p-3 text-left font-semibold">Real Name</th>
                        <th className="p-3 text-left font-semibold">Subscribers</th>
                        <th className="p-3 text-left font-semibold">Focus</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">KSI</td>
                        <td className="p-3">JJ Olatunji</td>
                        <td className="p-3">24M+</td>
                        <td className="p-3">Boxing, Music, Entertainment</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">W2S</td>
                        <td className="p-3">Harry Lewis</td>
                        <td className="p-3">16M+</td>
                        <td className="p-3">FIFA, Gaming, Challenges</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Miniminter</td>
                        <td className="p-3">Simon Minter</td>
                        <td className="p-3">10M+</td>
                        <td className="p-3">FIFA, Vlogs, Challenges</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Vikkstar123</td>
                        <td className="p-3">Vikram Barn</td>
                        <td className="p-3">8M+</td>
                        <td className="p-3">Minecraft, Warzone, Gaming</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">TBJZL</td>
                        <td className="p-3">Tobi Brown</td>
                        <td className="p-3">5M+</td>
                        <td className="p-3">FIFA, Lifestyle, Vlogs</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Behzinga</td>
                        <td className="p-3">Ethan Payne</td>
                        <td className="p-3">4.9M+</td>
                        <td className="p-3">Fitness, Lifestyle, Podcasts</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Zerkaa</td>
                        <td className="p-3">Josh Bradley</td>
                        <td className="p-3">4.7M+</td>
                        <td className="p-3">GTA RP, FIFA, Gaming</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold mb-3">Individual Profiles</h3>
                
                <h4 className="font-semibold text-gray-900 mb-2"><Link href="/youtube/sidemen/ksi" className="text-blue-600 hover:underline">KS I (JJ Olatunji)</Link></h4>
                <p className="mb-4 leading-relaxed">
                  The most prominent member, <Link href="/youtube/sidemen/ksi" className="text-blue-600 hover:underline">KSI</Link> has expanded beyond YouTube into professional boxing, music (reaching number one on the UK charts), and acting. His boxing matches against Logan Paul drew massive pay-per-view audiences and helped legitimize influencer boxing as an entertainment category. With 24M+ subscribers, he's built a business empire including PRIME Hydration.
                </p>

                <h4 className="font-semibold text-gray-900 mb-2"><Link href="/youtube/sidemen/miniminter" className="text-blue-600 hover:underline">Miniminter (Simon Minter)</Link></h4>
                <p className="mb-4 leading-relaxed">
                  Known for his consistency and chemistry with the group, <Link href="/youtube/sidemen/miniminter" className="text-blue-600 hover:underline">Miniminter</Link> maintains one of the most regularly updated channels with daily uploads since 2013. His content spans FIFA gameplay, real-life football challenges, and vlogs documenting his life and relationship with fellow creator Talia Mar.
                </p>

                <h4 className="font-semibold text-gray-900 mb-2"><Link href="/youtube/sidemen/zerkaa" className="text-blue-600 hover:underline">Zerkaa (Josh Bradley)</Link></h4>
                <p className="mb-4 leading-relaxed">
                  Often called the "dad" of the group due to his mature demeanor, <Link href="/youtube/sidemen/zerkaa" className="text-blue-600 hover:underline">Zerkaa</Link> has found significant success in GTA RP (Grand Theft Auto roleplay) content. He also co-hosts the popular "What's Good" podcast with Miniminter and is the unofficial leader of the Sidemen.
                </p>

                <h4 className="font-semibold text-gray-900 mb-2"><Link href="/youtube/sidemen/tbjzl" className="text-blue-600 hover:underline">TBJZL (Tobi Brown)</Link></h4>
                <p className="mb-4 leading-relaxed">
                  Known for his positive energy and athletic abilities, <Link href="/youtube/sidemen/tbjzl" className="text-blue-600 hover:underline">TBJZL</Link> frequently excels in physical challenges. His channel features FIFA content, lifestyle vlogs, and collaborations with other creators. His infectious laugh and genuine personality have made him a fan favorite.
                </p>

                <h4 className="font-semibold text-gray-900 mb-2"><Link href="/youtube/sidemen/behzinga" className="text-blue-600 hover:underline">Behzinga (Ethan Payne)</Link></h4>
                <p className="mb-4 leading-relaxed">
                  <Link href="/youtube/sidemen/behzinga" className="text-blue-600 hover:underline">Behzinga's</Link> documented fitness transformation (20kg+ weight loss) and mental health advocacy have made him an inspiration to many viewers. His content emphasizes authenticity and personal growth alongside entertainment, with partnerships with mental health charities.
                </p>

                <h4 className="font-semibold text-gray-900 mb-2"><Link href="/youtube/sidemen/vikkstar" className="text-blue-600 hover:underline">Vikkstar123 (Vikram Barn)</Link></h4>
                <p className="mb-4 leading-relaxed">
                  A versatile gamer known for Minecraft content and Call of Duty: Warzone expertise, <Link href="/youtube/sidemen/vikkstar" className="text-blue-600 hover:underline">Vikkstar</Link> has transitioned into successful entrepreneurship with a business portfolio exceeding £15 million. He co-owns the esports organization Luminosity Gaming and has competed professionally in battle royale tournaments.
                </p>

                <h4 className="font-semibold text-gray-900 mb-2"><Link href="/youtube/sidemen/w2s" className="text-blue-600 hover:underline">W2S (Harry Lewis)</Link></h4>
                <p className="leading-relaxed">
                  Known for his chaotic energy and unpredictable content, <Link href="/youtube/sidemen/w2s" className="text-blue-600 hover:underline">W2S</Link> has built a massive following (16.7M+ subscribers - the second-most subscribed Sidemen) through FIFA pack openings and rage compilations. His high-energy style contrasts with the more measured approaches of other members.
                </p>
              </section>

              {/* Content Section */}
              <section id="content" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Content and Series</h2>
                
                <h3 className="text-lg font-semibold mb-3">Sidemen Sundays</h3>
                <p className="mb-4 leading-relaxed">
                  The flagship content series, <strong>Sidemen Sundays</strong>, features weekly collaborative videos released every Sunday on the main Sidemen channel. These high-production videos regularly achieve 10-20 million views and include formats such as:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li><strong>$10,000 vs $100 Challenges:</strong> Comparing luxury and budget experiences (holidays, meals, hotels, gifts)</li>
                  <li><strong>Hide and Seek:</strong> Elaborate hide and seek games in massive locations including stadiums, mansions, and cities</li>
                  <li><strong>Among Us in Real Life:</strong> Physical recreations of popular video games</li>
                  <li><strong>Tinder IRL:</strong> Dating show formats with celebrity guests</li>
                  <li><strong>Total Wipeout:</strong> Physical challenge competitions</li>
                  <li><strong>Pro vs Amateur:</strong> Testing skills against professionals in various fields</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">MoreSidemen</h3>
                <p className="mb-4 leading-relaxed">
                  The <strong>MoreSidemen</strong> secondary channel features behind-the-scenes content, podcasts, Reddit reactions, and additional videos. With over 8 million subscribers, it serves as a more casual, unfiltered look at the group dynamic.
                </p>

                <h3 className="text-lg font-semibold mb-3">Sidemen Reacts</h3>
                <p className="leading-relaxed">
                  A reaction channel where members provide commentary on viral videos, internet trends, and fan-submitted content. This format requires lower production resources while maintaining audience engagement between main channel uploads.
                </p>
              </section>

              {/* Charity Section */}
              <section id="charity" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Sidemen Charity Football Match</h2>
                
                <p className="mb-4 leading-relaxed">
                  Since 2016, the Sidemen have hosted an annual <strong>Charity Football Match</strong>, which has become one of the largest creator-led charitable events globally. The matches pit the Sidemen and their friends against teams of other YouTube creators, celebrities, and professional footballers.
                </p>

                <h3 className="text-lg font-semibold mb-3">Impact and Reach</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold w-1/3">Funds Raised</th>
                        <td className="p-3">Over £10 million for various charities</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Venues</th>
                        <td className="p-3">London Stadium, The Valley, St Mary's Stadium</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Attendance</th>
                        <td className="p-3">Sold-out crowds of 20,000-60,000</td>
                      </tr>
                      <tr>
                        <th className="bg-gray-50 p-3 text-left font-semibold">Broadcast</th>
                        <td className="p-3">Millions of live viewers on YouTube</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold mb-3">Notable Participants</h3>
                <p className="leading-relaxed">
                  The charity matches have featured appearances from professional footballers, musicians, actors, and fellow content creators. Previous events have included players such as Yousef Erakat (FouseyTube), Logan Paul, and various British football personalities.
                </p>
              </section>

              {/* Business Section */}
              <section id="business" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Business Ventures</h2>
                
                <p className="mb-4 leading-relaxed">
                  The Sidemen have diversified beyond content creation into multiple business verticals, demonstrating sophisticated understanding of brand monetization.
                </p>

                <h3 className="text-lg font-semibold mb-3">Sides Restaurant</h3>
                <p className="mb-4 leading-relaxed">
                  <strong>Sides</strong> is the Sidemen's fast-casual restaurant chain specializing in fried chicken and sides. Launched in 2021, the chain has expanded to multiple locations across the UK. The concept focuses on delivery-friendly menu items that align with the group's brand identity.
                </p>

                <h3 className="text-lg font-semibold mb-3">XIX Vodka</h3>
                <p className="mb-4 leading-relaxed">
                  Named after the group's founding date (19th October, or XIX in Roman numerals), <strong>XIX Vodka</strong> is a premium vodka brand launched in 2022. The product has achieved significant commercial success in the UK spirits market, competing with established brands through direct-to-consumer marketing and the Sidemen's substantial promotional reach.
                </p>

                <h3 className="text-lg font-semibold mb-3">Sidemen Clothing</h3>
                <p className="mb-4 leading-relaxed">
                  The official merchandise line, <strong>Sidemen Clothing</strong>, sells apparel, accessories, and collectibles. Limited-edition drops frequently sell out within hours, demonstrating exceptional brand loyalty among their fanbase.
                </p>

                <h3 className="text-lg font-semibold mb-3">Best (Restaurant)</h3>
                <p className="leading-relaxed">
                  The Sidemen also operate <strong>Best</strong>, a fine-dining restaurant concept in London that has received positive reviews for its elevated take on comfort food.
                </p>
              </section>

              {/* Impact Section */}
              <section id="impact" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Cultural Impact</h2>
                
                <h3 className="text-lg font-semibold mb-3">YouTube Pioneer Status</h3>
                <p className="mb-4 leading-relaxed">
                  The Sidemen represent a generation of YouTube creators who transitioned gaming content into mainstream entertainment. Their success helped legitimize YouTube as a viable career path and demonstrated the platform's potential for group collaboration.
                </p>

                <h3 className="text-lg font-semibold mb-3">Influence on Creator Economy</h3>
                <p className="mb-4 leading-relaxed">
                  The group's business model—combining content creation with direct-to-consumer brands—has been widely emulated. Their approach to merchandise, alcohol brands, and hospitality ventures serves as a blueprint for creator-led entrepreneurship.
                </p>

                <h3 className="text-lg font-semibold mb-3">UK Youth Culture</h3>
                <p className="leading-relaxed">
                  The Sidemen have become fixtures of British youth culture, with their catchphrases, inside jokes, and cultural references permeating social media discourse among younger demographics. Their charity work and mental health advocacy have also contributed positively to public conversations.
                </p>
              </section>

              {/* Controversies Section */}
              <section id="controversies" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Controversies</h2>
                
                <h3 className="text-lg font-semibold mb-3">Early Content and Evolution</h3>
                <p className="mb-4 leading-relaxed">
                  Like many creators who began their careers in the early 2010s, some Sidemen members faced criticism for content from their early YouTube careers that would be considered inappropriate by contemporary standards. The group has generally acknowledged this evolution and expressed regret for past content.
                </p>

                <h3 className="text-lg font-semibold mb-3">KSI Boxing Controversies</h3>
                <p className="mb-4 leading-relaxed">
                  KSI's boxing career, while commercially successful, has generated criticism regarding the quality of opposition, event pricing, and the broader trend of influencer boxing. However, these events have undeniably drawn massive audiences and generated substantial revenue.
                </p>

                <h3 className="text-lg font-semibold mb-3">Business Disputes</h3>
                <p className="leading-relaxed">
                  The departure of former collaborator and editor <strong>Stephen Tries</strong> from associated projects generated public discussion about creator business relationships. The Sidemen have generally maintained privacy regarding internal business matters.
                </p>
              </section>

              {/* Statistics Section */}
              <section id="statistics" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Statistics</h2>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-300">
                        <th className="p-3 text-left font-semibold">Metric</th>
                        <th className="p-3 text-left font-semibold">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Combined Subscribers</td>
                        <td className="p-3">140+ million</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Main Channel Subscribers</td>
                        <td className="p-3">20+ million</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">MoreSidemen Subscribers</td>
                        <td className="p-3">8+ million</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Years Active</td>
                        <td className="p-3">12+ years (since 2013)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Charity Funds Raised</td>
                        <td className="p-3">£10+ million</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Sidemen Sundays Videos</td>
                        <td className="p-3">300+</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Business Verticals</td>
                        <td className="p-3">4+ (Clothing, Vodka, Restaurant, Food)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* See Also Section */}
              <section id="seealso" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">See Also</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Sidemen Members</h3>
                    <ul className="space-y-1">
                      <li><Link href="/youtube/sidemen/ksi" className="text-blue-600 hover:underline">KSI (JJ Olatunji)</Link></li>
                      <li><Link href="/youtube/sidemen/miniminter" className="text-blue-600 hover:underline">Miniminter (Simon Minter)</Link></li>
                      <li><Link href="/youtube/sidemen/zerkaa" className="text-blue-600 hover:underline">Zerkaa (Josh Bradley)</Link></li>
                      <li><Link href="/youtube/sidemen/tbjzl" className="text-blue-600 hover:underline">TBJZL (Tobi Brown)</Link></li>
                      <li><Link href="/youtube/sidemen/behzinga" className="text-blue-600 hover:underline">Behzinga (Ethan Payne)</Link></li>
                      <li><Link href="/youtube/sidemen/vikkstar" className="text-blue-600 hover:underline">Vikkstar123 (Vikram Barn)</Link></li>
                      <li><Link href="/youtube/sidemen/w2s" className="text-blue-600 hover:underline">W2S (Harry Lewis)</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Related Content</h3>
                    <ul className="space-y-1">
                      <li><Link href="/youtube/sidemen/inside-uk" className="text-blue-600 hover:underline">Inside — Netflix Documentary</Link></li>
                      <li><Link href="/youtube/sidemen/charity-match" className="text-blue-600 hover:underline">Sidemen Charity Match</Link></li>
                      <li><Link href="/youtube" className="text-blue-600 hover:underline">YouTube Platform</Link></li>
                      <li><Link href="/netflix" className="text-blue-600 hover:underline">Netflix</Link></li>
                      <li><Link href="/creator-economy" className="text-blue-600 hover:underline">Creator Economy</Link></li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* References Section */}
              <section id="references" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">References</h2>
                <ol className="text-sm text-gray-600 space-y-2">
                  <li>"The Sidemen Official Website." <em>Sidemen Clothing</em>, sidemenclothing.com.</li>
                  <li>"Sidemen YouTube Channel." <em>YouTube</em>, youtube.com/@Sidemen.</li>
                  <li>"KSI YouTube Statistics." <em>Social Blade</em>, socialblade.com/youtube/user/KSIOlajidebt.</li>
                  <li>"Sidemen Charity Match History." <em>Wikipedia</em>, en.wikipedia.org/wiki/Sidemen.</li>
                  <li>"XIX Vodka Official." <em>XIX Vodka</em>, xixvodka.com.</li>
                  <li>"Sides Restaurant." <em>Sides</em>, sides.co.uk.</li>
                  <li>"The Rise of the Sidemen." <em>Business Insider</em>, businessinsider.com.</li>
                  <li>"Sidemen: The YouTube Group Taking Over." <em>Forbes</em>, forbes.com.</li>
                </ol>
              </section>
            </main>

            {/* Wikipedia-Style Info Box Sidebar */}
            <aside className="lg:col-span-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden sticky top-4">
                <div className="bg-gray-100 p-3 border-b border-gray-200">
                  <h2 className="font-bold text-center text-gray-900">The Sidemen</h2>
                </div>
                
                <div className="p-4 space-y-4 text-sm">
                  {/* Logo Placeholder */}
                  <div className="bg-white border border-gray-200 p-4 text-center">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-600 via-black to-yellow-500 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-white font-bold text-xl">SDMN</span>
                    </div>
                    <p className="text-xs text-gray-500">Sidemen Logo</p>
                  </div>

                  {/* Quick Facts */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Quick Facts</h3>
                    <dl className="space-y-2">
                      <div>
                        <dt className="text-gray-500 text-xs">Formed</dt>
                        <dd>October 19, 2013</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">Origin</dt>
                        <dd>London, United Kingdom</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">Members</dt>
                        <dd>7</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">Combined Subs</dt>
                        <dd>140+ million</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">Main Channel</dt>
                        <dd>20+ million</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">Years Active</dt>
                        <dd>12+ years</dd>
                      </div>
                    </dl>
                  </div>

                  {/* Members */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Members</h3>
                    <ul className="space-y-1 text-xs">
                      <li>• <Link href="/youtube/sidemen/ksi" className="text-blue-600 hover:underline">KSI (JJ Olatunji)</Link></li>
                      <li>• <Link href="/youtube/sidemen/miniminter" className="text-blue-600 hover:underline">Miniminter (Simon Minter)</Link></li>
                      <li>• <Link href="/youtube/sidemen/w2s" className="text-blue-600 hover:underline">W2S (Harry Lewis)</Link></li>
                      <li>• <Link href="/youtube/sidemen/vikkstar" className="text-blue-600 hover:underline">Vikkstar123 (Vikram Barn)</Link></li>
                      <li>• <Link href="/youtube/sidemen/tbjzl" className="text-blue-600 hover:underline">TBJZL (Tobi Brown)</Link></li>
                      <li>• <Link href="/youtube/sidemen/behzinga" className="text-blue-600 hover:underline">Behzinga (Ethan Payne)</Link></li>
                      <li>• <Link href="/youtube/sidemen/zerkaa" className="text-blue-600 hover:underline">Zerkaa (Josh Bradley)</Link></li>
                    </ul>
                  </div>

                  {/* Known For */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Known For</h3>
                    <ul className="space-y-1 text-xs">
                      <li>• Sidemen Sundays</li>
                      <li>• Charity Football Match</li>
                      <li>• XIX Vodka</li>
                      <li>• Sides Restaurant</li>
                    </ul>
                  </div>

                  {/* Website */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Website</h3>
                    <a href="https://www.sidemenclothing.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs">
                      sidemenclothing.com
                    </a>
                  </div>

                  {/* Related Links */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Related</h3>
                    <ul className="space-y-1">
                      <li>
                        <Link href="/youtube/sidemen/ksi" className="text-blue-600 hover:underline text-xs">KSI Profile</Link>
                      </li>
                      <li>
                        <Link href="/youtube/sidemen/miniminter" className="text-blue-600 hover:underline text-xs">Miniminter Profile</Link>
                      </li>
                      <li>
                        <Link href="/youtube/sidemen/zerkaa" className="text-blue-600 hover:underline text-xs">Zerkaa Profile</Link>
                      </li>
                      <li>
                        <Link href="/youtube/sidemen/vikkstar" className="text-blue-600 hover:underline text-xs">Vikkstar Profile</Link>
                      </li>
                      <li>
                        <Link href="/youtube/sidemen/inside-uk" className="text-blue-600 hover:underline text-xs">Inside Netflix Doc</Link>
                      </li>
                      <li>
                        <Link href="/sidemen/charity-match" className="text-blue-600 hover:underline text-xs">Charity Match</Link>
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
