import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';

export const metadata: Metadata = {
  title: "The Fellas Studios — Podcast Network, Founders & Shows 2026 | ObjectWire",
  description: "Complete profile of The Fellas Studios — the UK podcast network founded by Calfreezy and TheBurntChip. Covers all shows including The Fellas, Saving Grace, Pitch Side, DEEP IT! and more.",
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/thefellas',
  },
  keywords: [
    'The Fellas Studios',
    'The Fellas Podcast',
    'Calfreezy',
    'TheBurntChip',
    'Callum Airey',
    'Joshua Larkin',
    'GK Barry',
    'ArthurTV',
    'Saving Grace',
    'Pitch Side podcast',
    'UK podcast network',
    'UK YouTubers',
  ],
  openGraph: {
    title: "The Fellas Studios — UK Podcast Network | ObjectWire",
    description: "Full profile of The Fellas Studios: founders, flagship show, and every podcast in the network from Saving Grace to The History Diaries.",
    type: "article",
    url: "https://www.objectwire.org/youtube/thefellas",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Fellas Studios — Podcast Network, Founders & Shows 2026",
    description: "Complete guide to The Fellas Studios UK podcast network, founded by Calfreezy and TheBurntChip.",
  },
};

export default function TheFellasPage() {
  const breadcrumbItems = [
    { name: 'Home', item: '/' },
    { name: 'YouTube', item: '/youtube' },
    { name: 'The Fellas Studios', item: '/youtube/thefellas' },
  ];

  return (
    <>
      <NewsArticleSchema
        title="The Fellas Studios — Podcast Network, Founders & Shows"
        description="Comprehensive profile of The Fellas Studios, the UK creator podcast network founded by Calfreezy (Callum Airey) and TheBurntChip (Joshua Larkin), hosting shows including The Fellas, Saving Grace, Pitch Side, and more."
        author="ObjectWire Editorial Team"
        publishedTime="2026-03-11T00:00:00Z"
        modifiedTime="2026-03-11T00:00:00Z"
        articleUrl="https://www.objectwire.org/youtube/thefellas"
        section="Entertainment"
        keywords={[
          'The Fellas Studios',
          'Calfreezy',
          'TheBurntChip',
          'GK Barry',
          'UK podcast',
          'ArthurTV',
          'Saving Grace',
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
            <h1 className="text-4xl font-serif mb-2">The Fellas Studios</h1>
            <p className="text-sm text-gray-500 italic">
              British creator-led podcast network founded by Calfreezy and TheBurntChip.
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-6xl pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* ── Main Content ── */}
            <main className="lg:col-span-8">

              {/* Lead */}
              <p className="text-lg leading-relaxed mb-6">
                <strong>The Fellas Studios</strong> is a British creator-led podcast network co-founded by{' '}
                <strong>Callum Airey</strong> (known online as <strong>Calfreezy</strong>) and{' '}
                <strong>Joshua Larkin</strong> (known as <strong>TheBurntChip</strong> or <strong>Chip</strong>).
                The network produces and hosts a growing roster of podcast shows, with the flagship programme —{' '}
                <em>The Fellas</em> — hosted by the two founders themselves. Beyond the flagship, The Fellas
                Studios operates as a full production network distributing titles spanning sport, comedy,
                lifestyle, entertainment, and culture, featuring some of the United Kingdom's most prominent
                content creators, athletes, and broadcasters.
              </p>

              {/* Table of Contents */}
              <nav className="bg-gray-50 border border-gray-200 p-4 mb-8 rounded-lg">
                <h2 className="font-bold text-gray-900 mb-3 border-b border-gray-300 pb-2">Contents</h2>
                <ol className="space-y-1 text-sm">
                  <li><a href="#overview" className="text-blue-600 hover:underline">1 Overview</a></li>
                  <li><a href="#founders" className="text-blue-600 hover:underline">2 Founders</a>
                    <ol className="pl-4 mt-1 space-y-0.5">
                      <li><a href="#calfreezy" className="text-blue-600 hover:underline">2.1 Calfreezy (Callum Airey)</a></li>
                      <li><a href="#burntchip" className="text-blue-600 hover:underline">2.2 TheBurntChip (Joshua Larkin)</a></li>
                    </ol>
                  </li>
                  <li><a href="#flagship" className="text-blue-600 hover:underline">3 The Fellas — Flagship Podcast</a></li>
                  <li><a href="#network" className="text-blue-600 hover:underline">4 Network Shows</a></li>
                  <li><a href="#shows-detail" className="text-blue-600 hover:underline">5 Individual Show Profiles</a></li>
                  <li><a href="#impact" className="text-blue-600 hover:underline">6 Cultural Impact</a></li>
                  <li><a href="#seealso" className="text-blue-600 hover:underline">7 See Also</a></li>
                  <li><a href="#references" className="text-blue-600 hover:underline">8 References</a></li>
                </ol>
              </nav>

              {/* Overview */}
              <section id="overview" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Overview</h2>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold w-1/3">Type</th>
                        <td className="p-3">Podcast Network / Creator Studio</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Founded By</th>
                        <td className="p-3">Callum Airey (Calfreezy) &amp; Joshua Larkin (TheBurntChip)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Origin</th>
                        <td className="p-3">United Kingdom</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Flagship Show</th>
                        <td className="p-3">The Fellas (hosted by Calfreezy &amp; TheBurntChip)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Active Shows</th>
                        <td className="p-3">13+ across the network</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Notable Guests</th>
                        <td className="p-3">ArthurTV, Behzinga, Vikkstar123, Peter Crouch</td>
                      </tr>
                      <tr>
                        <th className="bg-gray-50 p-3 text-left font-semibold">Content Genres</th>
                        <td className="p-3">Comedy, Sport, Lifestyle, Entertainment, Culture</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mb-4 leading-relaxed">
                  The Fellas Studios sits within a broader wave of UK creator-led media businesses that have emerged
                  throughout the early-to-mid 2020s. Rather than operating as a single-show outlet, the network
                  functions as a production and distribution umbrella — giving established creators and emerging
                  voices a platform to host shows under a shared brand identity, with production support and
                  cross-promotional reach derived from the founders' existing audiences.
                </p>
                <p className="leading-relaxed">
                  The network's catalogue spans a wide tonal and thematic range: from football-focused talk shows
                  and creator commentary to female-led lifestyle podcasts and history programming. This breadth
                  reflects an intentional strategy to attract advertisers across multiple demographics while
                  anchoring the network's credibility in entertainment and sports culture.
                </p>
              </section>

              {/* Founders */}
              <section id="founders" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Founders</h2>

                {/* Calfreezy */}
                <div id="calfreezy" className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Calfreezy — Callum Airey</h3>

                  <p className="mb-4 leading-relaxed">
                    <strong>Callum Airey</strong>, widely known as <strong>Calfreezy</strong>, is a British
                    YouTuber and content creator who rose to prominence within the broader UK YouTube ecosystem
                    of the early 2010s. He is closely associated with the{' '}
                    <Link href="/youtube/sidemen" className="text-blue-600 hover:underline">Sidemen</Link>{' '}
                    extended friendship group, frequently appearing in collaborative content with members
                    including KSI, Miniminter, and W2S, though he is not an official Sidemen member himself.
                  </p>
                  <p className="mb-4 leading-relaxed">
                    Calfreezy built his YouTube following through gaming content, FIFA pack openings, challenges,
                    and vlogs. His charismatic, conversational style — well-suited to long-form audio — translated
                    naturally into podcasting, making him an ideal co-host for The Fellas. As co-founder of The
                    Fellas Studios, he has expanded his career from solo content creation into network
                    entrepreneurship, overseeing a roster of shows that extend well beyond his personal brand.
                  </p>
                </div>

                {/* TheBurntChip */}
                <div id="burntchip" className="mb-4">
                  <h3 className="text-xl font-semibold mb-3">TheBurntChip — Joshua Larkin</h3>

                  <p className="mb-4 leading-relaxed">
                    <strong>Joshua Larkin</strong>, known online as <strong>TheBurntChip</strong> (also credited
                    simply as <strong>Chip</strong>), is a British content creator whose YouTube presence spans
                    gaming, comedy, and vlog content. Like Calfreezy, he is an established figure in the UK
                    creator community with deep ties to the extended network of creators surrounding the Sidemen
                    universe.
                  </p>
                  <p className="leading-relaxed">
                    TheBurntChip's comedic sensibility and willingness to engage in candid, unscripted discussion
                    make him a strong counterpart to Calfreezy on the flagship podcast. Together, the two founders
                    share chemistry built over years of collaborative content, which gives The Fellas its
                    distinctive double-act dynamic. Alongside Calfreezy, Larkin has used the studio to create
                    infrastructure supporting other creators who might otherwise produce shows independently
                    without production backing.
                  </p>
                </div>
              </section>

              {/* Flagship */}
              <section id="flagship" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">
                  The Fellas — Flagship Podcast
                </h2>

                <p className="mb-4 leading-relaxed">
                  <strong>The Fellas</strong> is the network's flagship podcast, hosted by Calfreezy and
                  TheBurntChip. The show follows a freewheeling conversational format — discussing internet
                  culture, football, creator news, personal anecdotes, and topical commentary — interspersed
                  with guest episodes featuring prominent figures from the UK YouTube and wider entertainment
                  world.
                </p>

                <h3 className="text-lg font-semibold mb-3">Format</h3>
                <p className="mb-4 leading-relaxed">
                  Episodes alternate between duo-hosted discussions and guest-format episodes. The duo's natural
                  rapport and self-aware humour carry the show's identity, while guest appearances broaden its
                  reach and introduce it to the guest's own audience base.
                </p>

                <h3 className="text-lg font-semibold mb-3">Notable Guests</h3>
                <p className="mb-4 leading-relaxed">
                  The Fellas has featured a wide range of guests drawn from the UK creator ecosystem and beyond.
                  Notable appearances have included:
                </p>
                <ul className="list-disc list-inside space-y-1 mb-4 text-sm text-gray-800">
                  <li>
                    <Link href="/youtube/sidemen/arthur-tv" className="text-blue-600 hover:underline"><strong>ArthurTV</strong></Link>{' '}— British creator and co-host of{' '}
                    <em>The Bach &amp; Arthur Podcast</em> within the network
                  </li>
                  <li>
                    <Link href="/youtube/sidemen/behzinga" className="text-blue-600 hover:underline"><strong>Behzinga (Ethan Payne)</strong></Link>{' '}— Sidemen member and fitness advocate; see also{' '}
                    <Link href="/youtube/sidemen" className="text-blue-600 hover:underline">The Sidemen</Link>
                  </li>
                  <li>
                    <Link href="/youtube/sidemen/vikkstar" className="text-blue-600 hover:underline"><strong>Vikkstar123 (Vikram Barn)</strong></Link>{' '}— Sidemen member and esports entrepreneur
                  </li>
                  <li>
                    <strong>Peter Crouch</strong> — Former England and Liverpool footballer; broadcaster and
                    creator of the acclaimed{' '}
                    <em>That Peter Crouch Podcast</em>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  The guest roster reflects the network's positioning at the intersection of UK YouTube culture
                  and the broader sports-entertainment media landscape — an audience segment Fellas Studios
                  consistently targets across its entire catalogue.
                </p>
              </section>

              {/* Network Shows */}
              <section id="network" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Network Shows</h2>

                <p className="mb-4 leading-relaxed">
                  In addition to the flagship programme, The Fellas Studios produces and hosts the following
                  shows as part of its network. Each show operates with its own distinct identity, hosts, and
                  target audience while benefiting from shared production infrastructure and cross-promotional
                  reach.
                </p>

                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-300">
                        <th className="p-3 text-left font-semibold">Show</th>
                        <th className="p-3 text-left font-semibold">Host(s)</th>
                        <th className="p-3 text-left font-semibold">Genre</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 bg-yellow-50">
                        <td className="p-3 font-semibold">The Fellas</td>
                        <td className="p-3">Calfreezy &amp; TheBurntChip</td>
                        <td className="p-3">Flagship — Entertainment / Culture</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-semibold">Saving Grace</td>
                        <td className="p-3">GK Barry (Grace Keeling)</td>
                        <td className="p-3">Lifestyle / Comedy</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-semibold">The Bach &amp; Arthur Podcast</td>
                        <td className="p-3">Italian Bach &amp; ArthurTV</td>
                        <td className="p-3">Comedy / Entertainment</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-semibold">Pitch Side</td>
                        <td className="p-3">Theo Baker, Tom Garratt &amp; Ollie Palmer</td>
                        <td className="p-3">Football / Sport</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-semibold">DEEP IT!</td>
                        <td className="p-3">Adeola Patronne &amp; Mariam Musa</td>
                        <td className="p-3">Culture / Commentary</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-semibold">Punchin'</td>
                        <td className="p-3">Danny Aarons &amp; Tennessee Thresher</td>
                        <td className="p-3">Entertainment / Dating Culture</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-semibold">Family Ties</td>
                        <td className="p-3">Tobi, Manny &amp; Jed</td>
                        <td className="p-3">Lifestyle / Comedy</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-semibold">Ami Charlize's Private Story</td>
                        <td className="p-3">Ami Charlize</td>
                        <td className="p-3">Lifestyle / Entertainment</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-semibold">Dad v Girls After Hours</td>
                        <td className="p-3">Sarah &amp; Joel</td>
                        <td className="p-3">Comedy / Family</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-semibold">Not My Bagg</td>
                        <td className="p-3">Joe &amp; George Baggs</td>
                        <td className="p-3">Comedy / Lifestyle</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-semibold">Back Side</td>
                        <td className="p-3">Theo Baker, Reev, Tom Garratt &amp; Lewis Bowden</td>
                        <td className="p-3">Football / Sport</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-semibold">The Club</td>
                        <td className="p-3">Rory Jennings, Adam McKola &amp; Buvey</td>
                        <td className="p-3">Entertainment / Commentary</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">The History Diaries</td>
                        <td className="p-3">Katie Kennedy</td>
                        <td className="p-3">History / Education</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Individual Show Profiles */}
              <section id="shows-detail" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">
                  Individual Show Profiles
                </h2>

                {/* Saving Grace */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">Saving Grace</h3>
                  <p className="text-sm text-gray-500 mb-3">Hosted by <strong>GK Barry (Grace Keeling)</strong></p>
                  <p className="leading-relaxed">
                    <strong>Saving Grace</strong> is hosted by <strong>Grace Keeling</strong>, the British
                    content creator and media personality known as <strong>GK Barry</strong>. Grace built her
                    following through TikTok and YouTube comedy content before transitioning into podcasting.
                    Saving Grace is one of the network's most high-profile titles, drawing on GK Barry's
                    established fanbase and her candid, conversational approach to discussion. The show covers
                    relationships, social media culture, personal experience, and lifestyle topics, and has
                    featured a notable range of celebrity and creator guests.
                  </p>
                </div>

                {/* The Bach & Arthur */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">The Bach &amp; Arthur Podcast</h3>
                  <p className="text-sm text-gray-500 mb-3">Hosted by <strong>Italian Bach &amp; ArthurTV</strong></p>
                  <p className="leading-relaxed">
                    <Link href="/youtube/sidemen/italian-bach" className="text-blue-600 hover:underline"><strong>Italian Bach</strong></Link>{' '}and{' '}
                    <Link href="/youtube/sidemen/arthur-tv" className="text-blue-600 hover:underline"><strong>ArthurTV</strong></Link>{' '}co-host this comedy and
                    entertainment-focused programme. ArthurTV is a well-known British creator who has also
                    appeared as a guest on the flagship{' '}
                    <em>The Fellas</em> podcast and maintains ties to the extended Sidemen creator network.
                    The show blends observational humour with pop culture commentary, leveraging the chemistry
                    between two creators with complementary comedic styles.
                  </p>
                </div>

                {/* Pitch Side */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">Pitch Side</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Hosted by <strong>Theo Baker, Tom Garratt &amp; Ollie Palmer</strong>
                  </p>
                  <p className="leading-relaxed">
                    <strong>Pitch Side</strong> is a football-focused podcast hosted by creator and football
                    content specialist <strong>Theo Baker</strong>, alongside <strong>Tom Garratt</strong> and
                    former professional goalkeeper <strong>Ollie Palmer</strong>. The show brings together
                    creator-world perspectives on the sport with insight from a former professional, bridging
                    the gap between YouTube football culture and traditional football media. Theo Baker also
                    co-hosts the related title <em>Back Side</em> within the same network.
                  </p>
                </div>

                {/* DEEP IT! */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">DEEP IT!</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Hosted by <strong>Adeola Patronne &amp; Mariam Musa</strong>
                  </p>
                  <p className="leading-relaxed">
                    <strong>DEEP IT!</strong> is hosted by <strong>Adeola Patronne</strong> and{' '}
                    <strong>Mariam Musa</strong>. The show takes a deeper, more reflective tone than many of
                    the network's other titles — exploring cultural identity, social issues, and personal
                    growth. It represents The Fellas Studios' commitment to housing a genuinely diverse range
                    of voices and perspectives within a single network.
                  </p>
                </div>

                {/* Punchin' */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">Punchin'</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Hosted by <strong>Danny Aarons &amp; Tennessee Thresher</strong>
                  </p>
                  <p className="leading-relaxed">
                    <strong>Punchin'</strong> is hosted by <strong>Danny Aarons</strong> and{' '}
                    <strong>Tennessee Thresher</strong>. The show takes aim at dating culture, relationships,
                    and the kinds of candid conversations about modern romance that have proven consistently
                    popular in the UK podcast landscape. The title is a nod to the British colloquialism
                    "punching above your weight" in a romantic context.
                  </p>
                </div>

                {/* Family Ties */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">Family Ties</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Hosted by <strong>Tobi, Manny &amp; Jed</strong>
                  </p>
                  <p className="leading-relaxed">
                    <strong>Family Ties</strong> is a lifestyle and comedy podcast hosted by{' '}
                    <strong>Tobi</strong>, <strong>Manny</strong>, and <strong>Jed</strong>. The trio-format
                    show explores friendship dynamics, personal stories, and humorous takes on everyday life.
                    Its warmth and group chemistry position it as one of the more accessible, broadly
                    appealing titles on the network.
                  </p>
                </div>

                {/* Ami Charlize's Private Story */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">Ami Charlize's Private Story</h3>
                  <p className="text-sm text-gray-500 mb-3">Hosted by <strong>Ami Charlize</strong></p>
                  <p className="leading-relaxed">
                    <strong>Ami Charlize's Private Story</strong> is a solo-hosted lifestyle and entertainment
                    show by <strong>Ami Charlize</strong>. The "private story" framing — borrowed from the
                    concept of a close-friends-only Instagram story — signals the show's tone: intimate,
                    unfiltered, and direct. It targets an audience seeking genuine personality-led content
                    rather than polished broadcast-style production.
                  </p>
                </div>

                {/* Dad v Girls After Hours */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">Dad v Girls After Hours</h3>
                  <p className="text-sm text-gray-500 mb-3">Hosted by <strong>Sarah &amp; Joel</strong></p>
                  <p className="leading-relaxed">
                    <strong>Dad v Girls After Hours</strong> is hosted by <strong>Sarah</strong> and{' '}
                    <strong>Joel</strong>. The show's "after hours" framing suggests extended, less-filtered
                    conversation beyond what a standard broadcast format would include — exploring the
                    comedic and sometimes contentious generational and gender dynamics at its core.
                  </p>
                </div>

                {/* Not My Bagg */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">Not My Bagg</h3>
                  <p className="text-sm text-gray-500 mb-3">Hosted by <strong>Joe &amp; George Baggs</strong></p>
                  <p className="leading-relaxed">
                    <strong>Not My Bagg</strong> is co-hosted by brothers <strong>Joe</strong> and{' '}
                    <strong>George Baggs</strong>. The show features the duo's observations on life, culture,
                    and the things that simply are not "their bag" — a comedic framing device that allows broad
                    topical commentary delivered through a personal, sibling-duo lens.
                  </p>
                </div>

                {/* Back Side */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">Back Side</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Hosted by <strong>Theo Baker, Reev, Tom Garratt &amp; Lewis Bowden</strong>
                  </p>
                  <p className="leading-relaxed">
                    <strong>Back Side</strong> is a football-themed companion show to <em>Pitch Side</em>,
                    expanding the network's football content slate with a four-host format.{' '}
                    <strong>Theo Baker</strong> appears on both football shows, providing continuity across
                    the network's sports output. The larger ensemble cast allows for more debate-driven
                    discussion and factional banter — a format that performs well with football audiences.
                  </p>
                </div>

                {/* The Club */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">The Club</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Hosted by <strong>Rory Jennings, Adam McKola &amp; Buvey</strong>
                  </p>
                  <p className="leading-relaxed">
                    <strong>The Club</strong> features <strong>Rory Jennings</strong>,{' '}
                    <strong>Adam McKola</strong>, and <strong>Buvey</strong> in a trio-format entertainment
                    and commentary podcast. The show's title evokes a sense of community and insider
                    perspective — a recurring theme among the network's entertainment-focused titles.
                  </p>
                </div>

                {/* The History Diaries */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">The History Diaries</h3>
                  <p className="text-sm text-gray-500 mb-3">Hosted by <strong>Katie Kennedy</strong></p>
                  <p className="leading-relaxed">
                    <strong>The History Diaries</strong> is hosted by <strong>Katie Kennedy</strong> and
                    stands as the network's most distinctly educational title. The show explores historical
                    events, figures, and periods in an accessible, creator-style format — demonstrating The
                    Fellas Studios' appetite for content that goes beyond typical entertainment podcasts into
                    genuinely informative territory. It brings a younger, digitally-native audience to
                    history content that might otherwise struggle to reach them through traditional media.
                  </p>
                </div>
              </section>

              {/* Cultural Impact */}
              <section id="impact" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Cultural Impact</h2>

                <p className="mb-4 leading-relaxed">
                  The Fellas Studios is reflective of a broader structural shift in UK media, where individual
                  content creators have begun building multi-show networks rather than remaining solo
                  operators. The network model — pioneered in the US by companies like Barstool Sports and
                  adopted in the UK by outfits such as Fellas Studios — allows for shared overhead costs,
                  cross-promotional audience growth, and the ability to attract advertising partners seeking
                  scale rather than individual shows.
                </p>
                <p className="mb-4 leading-relaxed">
                  For Calfreezy and TheBurntChip, founding the studio represents a career evolution from
                  on-camera talent to media entrepreneurs — a trajectory increasingly common among top-tier
                  UK creators who have built audiences large enough to support business infrastructure. The
                  studio positions them as commissioning editors and network operators, not just presenters.
                </p>
                <p className="leading-relaxed">
                  The diversity of the network's roster — spanning sport, comedy, lifestyle, culture, and
                  history — also reflects a mature content strategy: rather than building a monoculture
                  around one demographic, Fellas Studios has deliberately assembled a multi-genre slate
                  capable of attracting sponsorship from a wide range of brand categories. This is consistent
                  with how the most commercially successful UK podcast networks have operated.
                </p>
              </section>

              {/* See Also */}
              <section id="seealso" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">See Also</h2>
                <ul className="list-disc list-inside space-y-1 text-blue-600 text-sm">
                  <li>
                    <Link href="/youtube/sidemen" className="hover:underline">
                      The Sidemen — British YouTube Group
                    </Link>
                  </li>
                  <li>
                    <Link href="/youtube/sidemen/arthur-tv" className="hover:underline">ArthurTV</Link>
                  </li>
                  <li>
                    <Link href="/youtube/sidemen/behzinga" className="hover:underline">Behzinga</Link>
                  </li>
                  <li>
                    <Link href="/youtube/sidemen/vikkstar" className="hover:underline">Vikkstar123</Link>
                  </li>
                  <li>
                    <Link href="/youtube/sidemen/italian-bach" className="hover:underline">Italian Bach</Link>
                  </li>
                  <li>
                    <Link href="/youtube" className="hover:underline">YouTube — Platform Overview</Link>
                  </li>
                  <li>
                    <Link href="/youtube/mat-armstrong" className="hover:underline">Mat Armstrong</Link>
                  </li>
                  <li>
                    <Link href="/entertainment" className="hover:underline">Entertainment Hub</Link>
                  </li>
                </ul>
              </section>

              {/* References */}
              <section id="references" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">References</h2>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                  <li>The Fellas Studios — official podcast network catalogue, 2026.</li>
                  <li>
                    Calfreezy — YouTube Channel:{' '}
                    <a
                      href="https://www.youtube.com/@Calfreezy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      youtube.com/@Calfreezy
                    </a>
                  </li>
                  <li>
                    TheBurntChip — YouTube Channel:{' '}
                    <a
                      href="https://www.youtube.com/@TheBurntChip"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      youtube.com/@TheBurntChip
                    </a>
                  </li>
                  <li>GK Barry — Saving Grace podcast, The Fellas Studios network.</li>
                  <li>Theo Baker, Tom Garratt &amp; Ollie Palmer — Pitch Side podcast, The Fellas Studios network.</li>
                  <li>Katie Kennedy — The History Diaries, The Fellas Studios network.</li>
                </ol>
              </section>

            </main>

            {/* ── Right Sidebar ── */}
            <aside className="lg:col-span-4">
              <div className="sticky top-6 space-y-6">

                {/* Founders Infobox */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
                  <p className="font-bold text-center border-b border-gray-200 pb-2 mb-3">The Fellas Studios</p>
                  <table className="w-full text-xs">
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <th className="py-1.5 pr-2 text-left text-gray-600 font-medium align-top">Founded by</th>
                        <td className="py-1.5">Callum Airey<br />(Calfreezy)<br />&amp; Joshua Larkin<br />(TheBurntChip)</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <th className="py-1.5 pr-2 text-left text-gray-600 font-medium">Origin</th>
                        <td className="py-1.5">United Kingdom</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <th className="py-1.5 pr-2 text-left text-gray-600 font-medium">Flagship</th>
                        <td className="py-1.5">The Fellas Podcast</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <th className="py-1.5 pr-2 text-left text-gray-600 font-medium">Total Shows</th>
                        <td className="py-1.5">13+</td>
                      </tr>
                      <tr>
                        <th className="py-1.5 pr-2 text-left text-gray-600 font-medium align-top">Genres</th>
                        <td className="py-1.5">Comedy, Sport, Lifestyle, Culture, History</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* All Shows Quick List */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
                  <h3 className="font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">
                    Network Shows
                  </h3>
                  <ul className="space-y-1.5 text-gray-700">
                    {[
                      { name: 'The Fellas', sub: 'Calfreezy & TheBurntChip', flagship: true },
                      { name: 'Saving Grace', sub: 'GK Barry' },
                      { name: 'The Bach & Arthur Podcast', sub: 'Italian Bach & ArthurTV' },
                      { name: 'Pitch Side', sub: 'Theo Baker, Tom Garratt & Ollie Palmer' },
                      { name: 'DEEP IT!', sub: 'Adeola Patronne & Mariam Musa' },
                      { name: "Punchin'", sub: 'Danny Aarons & Tennessee Thresher' },
                      { name: 'Family Ties', sub: 'Tobi, Manny & Jed' },
                      { name: "Ami Charlize's Private Story", sub: 'Ami Charlize' },
                      { name: 'Dad v Girls After Hours', sub: 'Sarah & Joel' },
                      { name: 'Not My Bagg', sub: 'Joe & George Baggs' },
                      { name: 'Back Side', sub: 'Theo Baker, Reev, Tom Garratt & Lewis Bowden' },
                      { name: 'The Club', sub: 'Rory Jennings, Adam McKola & Buvey' },
                      { name: 'The History Diaries', sub: 'Katie Kennedy' },
                    ].map((show) => (
                      <li key={show.name} className={show.flagship ? 'font-semibold' : ''}>
                        <span className={show.flagship ? 'text-gray-900' : 'text-gray-800'}>
                          {show.name}
                        </span>
                        <p className="text-xs text-gray-500">{show.sub}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Related */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
                  <h3 className="font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">Related</h3>
                  <ul className="space-y-1.5">
                    <li>
                      <Link href="/youtube/sidemen" className="text-blue-600 hover:underline">
                        The Sidemen
                      </Link>
                    </li>
                    <li>
                      <Link href="/youtube/sidemen/arthur-tv" className="text-blue-600 hover:underline">
                        ArthurTV
                      </Link>
                    </li>
                    <li>
                      <Link href="/youtube/sidemen/behzinga" className="text-blue-600 hover:underline">
                        Behzinga
                      </Link>
                    </li>
                    <li>
                      <Link href="/youtube/sidemen/vikkstar" className="text-blue-600 hover:underline">
                        Vikkstar123
                      </Link>
                    </li>
                    <li>
                      <Link href="/youtube/sidemen/italian-bach" className="text-blue-600 hover:underline">
                        Italian Bach
                      </Link>
                    </li>
                    <li>
                      <Link href="/youtube" className="text-blue-600 hover:underline">
                        YouTube Platform
                      </Link>
                    </li>
                    <li>
                      <Link href="/youtube/mat-armstrong" className="text-blue-600 hover:underline">
                        Mat Armstrong
                      </Link>
                    </li>
                    <li>
                      <Link href="/entertainment" className="text-blue-600 hover:underline">
                        Entertainment Hub
                      </Link>
                    </li>
                  </ul>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
}
