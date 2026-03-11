import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';

export const metadata: Metadata = {
  title: "Top Spanish YouTubers 2026 — Ibai, AuronPlay, ElRubius & More | ObjectWire",
  description: "Complete guide to the biggest Spanish-language YouTubers and streamers of 2026. Rankings, profiles, subscriber counts, and content breakdowns for Spain's top creators.",
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/spanish',
  },
  keywords: [
    'Spanish YouTubers',
    'Ibai Llanos',
    'AuronPlay',
    'ElRubius',
    'TheGrefg',
    'Vegetta777',
    'Alana Flores',
    'Spanish streamers',
    'top Spanish creators',
    'YouTube España',
  ],
  openGraph: {
    title: "Top Spanish YouTubers 2026 | ObjectWire",
    description: "Rankings and profiles of the biggest Spanish-language YouTube creators — from Ibai Llanos to Alana Flores.",
    type: "article",
    url: "https://www.objectwire.org/youtube/spanish",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Spanish YouTubers 2026 — Ibai, AuronPlay, ElRubius & More",
    description: "Full rankings and profiles of Spain's biggest YouTube creators.",
  },
};

export default function SpanishYouTubersPage() {
  const breadcrumbItems = [
    { name: 'Home', item: '/' },
    { name: 'YouTube', item: '/youtube' },
    { name: 'Top Spanish YouTubers', item: '/youtube/spanish' },
  ];

  return (
    <>
      <NewsArticleSchema
        title="Top Spanish YouTubers 2026 — Rankings & Profiles"
        description="Comprehensive rankings and profiles of the most influential Spanish-language YouTubers and streamers, led by Ibai Llanos."
        author="ObjectWire Editorial Team"
        publishedTime="2026-03-11T00:00:00Z"
        modifiedTime="2026-03-11T00:00:00Z"
        articleUrl="https://www.objectwire.org/youtube/spanish"
        section="Entertainment"
        keywords={['Spanish YouTubers', 'Ibai Llanos', 'AuronPlay', 'ElRubius', 'Alana Flores', 'Spain streaming']}
      />

      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-4 max-w-6xl">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Wikipedia-Style Header */}
        <header className="border-b border-gray-200 pb-6 mb-6">
          <div className="container mx-auto px-4 max-w-6xl">
            <h1 className="text-4xl font-serif mb-2">Top Spanish YouTubers</h1>
            <p className="text-sm text-gray-500 italic">
              Rankings of the most subscribed and influential Spanish-language creators on YouTube, as of 2026.
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-6xl pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Main Content */}
            <main className="lg:col-span-8">

              {/* Lead Paragraph */}
              <p className="text-lg leading-relaxed mb-6">
                <strong>Spanish-language YouTube</strong> has grown into one of the most vibrant creator ecosystems on the platform, with channels routinely commanding tens of millions of subscribers. Spain, Mexico, Argentina, and Latin America collectively form the world's second-largest YouTube language community. Creators from this scene have pioneered massive live-streaming events, charity boxing spectacles, and gaming content that has influenced the global creator economy. This article profiles the most prominent Spanish-speaking YouTubers ranked by subscriber count, cultural impact, and platform influence.
              </p>

              {/* Table of Contents */}
              <nav className="bg-gray-50 border border-gray-200 p-4 mb-8 rounded-lg">
                <h2 className="font-bold text-gray-900 mb-3 border-b border-gray-300 pb-2">Contents</h2>
                <ol className="space-y-1 text-sm">
                  <li><a href="#overview" className="text-blue-600 hover:underline">1 Overview</a></li>
                  <li><a href="#rankings" className="text-blue-600 hover:underline">2 Rankings Table</a></li>
                  <li><a href="#ibai" className="text-blue-600 hover:underline">3 Ibai Llanos — #1</a></li>
                  <li><a href="#auronplay" className="text-blue-600 hover:underline">4 AuronPlay — #2</a></li>
                  <li><a href="#elrubius" className="text-blue-600 hover:underline">5 ElRubius — #3</a></li>
                  <li><a href="#thegrefg" className="text-blue-600 hover:underline">6 TheGrefg — #4</a></li>
                  <li><a href="#vegetta" className="text-blue-600 hover:underline">7 Vegetta777 — #5</a></li>
                  <li><a href="#alana" className="text-blue-600 hover:underline">8 Alana Flores — #6</a></li>
                  <li><a href="#willyrex" className="text-blue-600 hover:underline">9 Willyrex — #7</a></li>
                  <li><a href="#impact" className="text-blue-600 hover:underline">10 Cultural Impact</a></li>
                  <li><a href="#seealso" className="text-blue-600 hover:underline">11 See Also</a></li>
                  <li><a href="#references" className="text-blue-600 hover:underline">12 References</a></li>
                </ol>
              </nav>

              {/* Overview */}
              <section id="overview" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Overview</h2>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold w-1/3">Language</th>
                        <td className="p-3">Spanish</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Primary Markets</th>
                        <td className="p-3">Spain, Mexico, Argentina, Latin America</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Top Creator</th>
                        <td className="p-3">Ibai Llanos (streaming, sports, entertainment)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Combined Subscribers (Top 7)</th>
                        <td className="p-3">300+ million</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Peak Event</th>
                        <td className="p-3">La Velada del Año IV — 3.4M+ concurrent viewers</td>
                      </tr>
                      <tr>
                        <th className="bg-gray-50 p-3 text-left font-semibold">Content Genres</th>
                        <td className="p-3">Gaming, Live Streaming, Vlogs, Sports, Comedy, Lifestyle</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mb-4 leading-relaxed">
                  The Spanish-language creator space on YouTube began its rapid ascent in the early 2010s, driven largely by Minecraft and FIFA gaming content. Channels such as <strong>Vegetta777</strong> and <strong>ElRubius</strong> were among the first to cross the 10-million subscriber milestone within the Spanish-speaking world. Through the late 2010s and into the 2020s, the ecosystem diversified significantly — live-streaming culture on Twitch and YouTube Live, esports commentary, and large-scale entertainment events became defining characteristics of the scene.
                </p>
                <p className="leading-relaxed">
                  Spain emerged as a particularly influential node, with creators like <strong>Ibai Llanos</strong> and <strong>AuronPlay</strong> translating their Twitch audiences into massive YouTube presences. Today, top Spanish creators regularly out-perform their English-language peers in watch-time per subscriber, a metric that speaks to the deep communal loyalty of Spanish-speaking audiences online.
                </p>
              </section>

              {/* Rankings Table */}
              <section id="rankings" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Rankings Table</h2>

                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-300">
                        <th className="p-3 text-left font-semibold">Rank</th>
                        <th className="p-3 text-left font-semibold">Creator</th>
                        <th className="p-3 text-left font-semibold">Handle</th>
                        <th className="p-3 text-left font-semibold">Subscribers</th>
                        <th className="p-3 text-left font-semibold">Primary Content</th>
                        <th className="p-3 text-left font-semibold">Country</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 bg-yellow-50">
                        <td className="p-3 font-bold text-yellow-700">1</td>
                        <td className="p-3 font-semibold">
                          <a href="#ibai" className="text-blue-600 hover:underline">Ibai Llanos</a>
                        </td>
                        <td className="p-3">
                          <a href="https://www.youtube.com/@IbaiLlanos" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@IbaiLlanos</a>
                        </td>
                        <td className="p-3">17M+</td>
                        <td className="p-3">Streaming, Sports, Interviews</td>
                        <td className="p-3">Spain</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-bold text-gray-500">2</td>
                        <td className="p-3 font-semibold">
                          <a href="#auronplay" className="text-blue-600 hover:underline">AuronPlay</a>
                        </td>
                        <td className="p-3">@AuronPlay</td>
                        <td className="p-3">30M+</td>
                        <td className="p-3">Comedy, Reactions, Gaming</td>
                        <td className="p-3">Spain</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-bold text-gray-500">3</td>
                        <td className="p-3 font-semibold">
                          <a href="#elrubius" className="text-blue-600 hover:underline">ElRubius</a>
                        </td>
                        <td className="p-3">@elrubiusOMG</td>
                        <td className="p-3">40M+</td>
                        <td className="p-3">Gaming, Entertainment, Vlogs</td>
                        <td className="p-3">Spain / Norway</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-bold text-gray-500">4</td>
                        <td className="p-3 font-semibold">
                          <a href="#thegrefg" className="text-blue-600 hover:underline">TheGrefg</a>
                        </td>
                        <td className="p-3">@TheGrefg</td>
                        <td className="p-3">18M+</td>
                        <td className="p-3">Fortnite, Gaming</td>
                        <td className="p-3">Spain</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-bold text-gray-500">5</td>
                        <td className="p-3 font-semibold">
                          <a href="#vegetta" className="text-blue-600 hover:underline">Vegetta777</a>
                        </td>
                        <td className="p-3">@Vegetta777</td>
                        <td className="p-3">34M+</td>
                        <td className="p-3">Minecraft, Gaming</td>
                        <td className="p-3">Spain</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-bold text-gray-500">6</td>
                        <td className="p-3 font-semibold">
                          <a href="#alana" className="text-blue-600 hover:underline">Alana Flores</a>
                        </td>
                        <td className="p-3">
                          <a href="https://www.youtube.com/@alanafloresf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@alanafloresf</a>
                        </td>
                        <td className="p-3">Rising</td>
                        <td className="p-3">Lifestyle, Entertainment</td>
                        <td className="p-3">Spain</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-gray-500">7</td>
                        <td className="p-3 font-semibold">
                          <a href="#willyrex" className="text-blue-600 hover:underline">Willyrex</a>
                        </td>
                        <td className="p-3">@Willyrex</td>
                        <td className="p-3">18M+</td>
                        <td className="p-3">Gaming, Minecraft, Challenges</td>
                        <td className="p-3">Spain</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 italic">
                  Subscriber figures approximate as of early 2026. Rankings reflect a composite of subscriber count, cultural influence, and platform presence.
                </p>
              </section>

              {/* Ibai Llanos */}
              <section id="ibai" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">
                  1. Ibai Llanos
                </h2>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6 float-right ml-6 w-72 hidden md:block text-sm">
                  <p className="font-semibold text-center border-b border-gray-200 pb-2 mb-3">Ibai Llanos</p>
                  <table className="w-full text-xs">
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <th className="py-1.5 pr-2 text-left text-gray-600 font-medium">Full Name</th>
                        <td className="py-1.5">Ibai Llanos Garatea</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <th className="py-1.5 pr-2 text-left text-gray-600 font-medium">Born</th>
                        <td className="py-1.5">March 26, 1995 <br />Bilbao, Spain</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <th className="py-1.5 pr-2 text-left text-gray-600 font-medium">YouTube</th>
                        <td className="py-1.5">
                          <a href="https://www.youtube.com/@IbaiLlanos" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@IbaiLlanos</a>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <th className="py-1.5 pr-2 text-left text-gray-600 font-medium">Subscribers</th>
                        <td className="py-1.5">17M+</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <th className="py-1.5 pr-2 text-left text-gray-600 font-medium">Active Since</th>
                        <td className="py-1.5">2012</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <th className="py-1.5 pr-2 text-left text-gray-600 font-medium">Platform</th>
                        <td className="py-1.5">YouTube, Twitch</td>
                      </tr>
                      <tr>
                        <th className="py-1.5 pr-2 text-left text-gray-600 font-medium">Known For</th>
                        <td className="py-1.5">La Velada del Año, Kings League, G3 esports</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mb-4 leading-relaxed">
                  <strong>Ibai Llanos Garatea</strong> (born March 26, 1995, in Bilbao, Spain) is widely considered the most culturally significant Spanish-speaking content creator of his generation. Beginning his career as an esports commentator for League of Legends in the Spanish LVP scene, Ibai built his reputation through an unscripted, charismatic presenting style that resonated far beyond gaming audiences. He is the <strong>number-one ranked Spanish YouTuber</strong> on this list by virtue of his cross-platform dominance and unparalleled influence on Spanish internet culture.
                </p>

                <h3 className="text-lg font-semibold mb-3">Career Origins</h3>
                <p className="mb-4 leading-relaxed">
                  From 2015 to 2020, Ibai served as a commentator and analyst for the <em>Liga de Videojuegos Profesional</em> (LVP), Spain's premier esports organisation. His natural wit and rapid improvisational commentary attracted a devoted following on Twitch, eventually making him the most-watched Spanish-language streamer on the platform. He was famously let go from his LVP role in late 2020, a moment that catalysed the rapid expansion of his independent career.
                </p>

                <h3 className="text-lg font-semibold mb-3">La Velada del Año</h3>
                <p className="mb-4 leading-relaxed">
                  Ibai's most iconic creation is <strong>La Velada del Año</strong>, an annual charity boxing event featuring content creators, musicians, and internet personalities. The event, first held in 2021, has grown into one of the largest live-streaming spectacles in internet history. La Velada del Año IV in 2024 attracted over <strong>3.4 million concurrent viewers</strong> on Twitch, breaking the platform's record for the most-watched Spanish-language broadcast. The event blends boxing bouts with live music performances, creating a format unlike anything else in creator entertainment.
                </p>

                <h3 className="text-lg font-semibold mb-3">Kings League</h3>
                <p className="mb-4 leading-relaxed">
                  In 2023, Ibai co-founded the <strong>Kings League</strong> alongside former FC Barcelona striker Gerard Piqué. The seven-a-side football league features teams captained by prominent content creators and professional athletes, with matches broadcast exclusively on Twitch and YouTube. The format broke records for live-streaming sports viewership and has since expanded into the <em>Queens League</em> (a women's edition) and international versions. The Kings League represents one of the most successful intersections of creator culture and traditional sports to date.
                </p>

                <h3 className="text-lg font-semibold mb-3">G3 Esports</h3>
                <p className="leading-relaxed">
                  Ibai co-owns <strong>G3 esports</strong> (formerly KOI), a professional esports organisation that competes in League of Legends and other titles. The organisation reflects his enduring connection to the competitive gaming world that launched his career, while leveraging his massive audience to elevate the profile of Spanish esports globally.
                </p>
              </section>

              {/* AuronPlay */}
              <section id="auronplay" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">2. AuronPlay</h2>

                <p className="mb-4 leading-relaxed">
                  <strong>Raúl Álvarez Genes</strong>, known online as <strong>AuronPlay</strong> (born November 2, 1988, in Barcelona), is one of the most subscribed Spanish-language YouTubers with over <strong>30 million subscribers</strong>. He built his career on irreverent comedy, criticism of other internet content, and reaction videos — a format he helped pioneer in Spain before it became mainstream globally. His long-running series reading bizarre social media posts ("Trolleando Twitter") became a signature format imitated by countless creators.
                </p>
                <p className="mb-4 leading-relaxed">
                  AuronPlay transitioned heavily into live-streaming on Twitch from 2019 onwards, becoming one of the platform's top Spanish-language broadcasters. He appeared in Ibai's <strong>La Velada del Año</strong> events as both a competitor and commentator, and co-participated in some of the largest collaborative streams in Spanish internet history. His willingness to engage in long-form improvisational content distinguishes him from creators who rely on tightly produced videos.
                </p>
                <p className="leading-relaxed">
                  Despite his massive subscriber count, AuronPlay is notable for prioritising live content over uploaded videos, a strategic shift that reflects broader industry trends toward real-time audience engagement.
                </p>
              </section>

              {/* ElRubius */}
              <section id="elrubius" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">3. ElRubius</h2>

                <p className="mb-4 leading-relaxed">
                  <strong>Rubén Doblas Gundersen</strong>, known as <strong>ElRubius</strong> (born February 13, 1990, in Málaga, Spain, to a Spanish mother and Norwegian father), is the single most subscribed Spanish-language YouTuber by raw subscriber count with over <strong>40 million subscribers</strong>. He is broadly credited as the pioneer who proved that a Spanish-speaking creator could compete at the very top tier of global YouTube metrics.
                </p>
                <p className="mb-4 leading-relaxed">
                  His channel, <strong>elrubiusOMG</strong>, rose to prominence through gaming content — primarily Minecraft "Let's Plays" — combined with sketch comedy, anime-inspired aesthetics, and self-deprecating humour. ElRubius was among the first creators globally to experiment with real-location dramatic sketches blending live action with game-world references, a format showcased in his "Virtual Hero" animated Netflix series.
                </p>
                <p className="leading-relaxed">
                  In 2019, ElRubius relocated to Norway, citing mental health challenges associated with the intensity of Spanish public attention. He has been transparent about anxiety and burnout, becoming an inadvertent advocate for creator wellbeing. Despite reduced upload frequency compared to his peak years, his subscriber base has remained remarkably stable, testifying to the enduring loyalty of his audience.
                </p>
              </section>

              {/* TheGrefg */}
              <section id="thegrefg" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">4. TheGrefg</h2>

                <p className="mb-4 leading-relaxed">
                  <strong>David Cánovas Martínez</strong>, known as <strong>TheGrefg</strong> (born August 24, 1997, in Cartagena, Spain), is the dominant force in Spanish-language gaming content, particularly within the <strong>Fortnite</strong> ecosystem. His channel has amassed over <strong>18 million subscribers</strong> and his Twitch streams regularly chart among the most-watched Spanish-language broadcasts.
                </p>
                <p className="mb-4 leading-relaxed">
                  TheGrefg's crowning achievement in the global gaming arena came in January 2021 when <strong>Epic Games</strong> made him the first Spanish creator to receive his own personalised in-game Fortnite skin — the "TheGrefg" Icon Series skin. The reveal stream attracted an <strong>all-time Twitch record of 2.4 million concurrent viewers</strong> at the time, cementing his status as a genuinely global gaming figure rather than merely a regional one.
                </p>
                <p className="leading-relaxed">
                  He also captains a team in Ibai's <strong>Kings League</strong>, reinforcing the tight-knit nature of the top tier of the Spanish creator ecosystem, where major creators frequently collaborate on projects that amplify each other's audiences.
                </p>
              </section>

              {/* Vegetta777 */}
              <section id="vegetta" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">5. Vegetta777</h2>

                <p className="mb-4 leading-relaxed">
                  <strong>Samuel de Luque Batuecas</strong>, known as <strong>Vegetta777</strong> (born November 10, 1990, in Spain), is one of the founding figures of Spanish YouTube gaming culture with over <strong>34 million subscribers</strong>. His long-running collaborative Minecraft series with <strong>Willyrex</strong> — particularly the "Planeta Vegetta" world-building series — is among the most-watched Minecraft content in the Spanish language ever produced.
                </p>
                <p className="mb-4 leading-relaxed">
                  Vegetta777's content is characterised by a family-friendly, high-energy style. His audience skews younger than most of his contemporaries, and he has historically maintained one of the highest upload frequencies among top-tier Spanish YouTubers, regularly posting multiple times per week over a career spanning more than a decade.
                </p>
                <p className="leading-relaxed">
                  Beyond YouTube, Vegetta777 has authored several illustrated novels based on his gaming adventures and been involved in branded merchandise and gaming peripherals. He represents the archetype of the Spanish "old guard" YouTuber — established long before Twitch streaming dominance — who has successfully maintained relevance into the 2020s.
                </p>
              </section>

              {/* Alana Flores */}
              <section id="alana" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">6. Alana Flores</h2>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6 float-right ml-6 w-72 hidden md:block text-sm">
                  <p className="font-semibold text-center border-b border-gray-200 pb-2 mb-3">Alana Flores</p>
                  <table className="w-full text-xs">
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <th className="py-1.5 pr-2 text-left text-gray-600 font-medium">Known As</th>
                        <td className="py-1.5">Alinta / Alana Flores</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <th className="py-1.5 pr-2 text-left text-gray-600 font-medium">YouTube</th>
                        <td className="py-1.5">
                          <a href="https://www.youtube.com/@alanafloresf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@alanafloresf</a>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <th className="py-1.5 pr-2 text-left text-gray-600 font-medium">Status</th>
                        <td className="py-1.5">Rising Creator</td>
                      </tr>
                      <tr>
                        <th className="py-1.5 pr-2 text-left text-gray-600 font-medium">Content</th>
                        <td className="py-1.5">Lifestyle, Entertainment</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mb-4 leading-relaxed">
                  <strong>Alana Flores</strong>, also known to her audience as <strong>Alinta</strong>, is one of the most compelling rising voices in Spanish-language YouTube. Operating under the handle{' '}
                  <a href="https://www.youtube.com/@alanafloresf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@alanafloresf</a>, she has cultivated an engaged community through a blend of lifestyle, entertainment, and personality-driven content that distinguishes her from the gaming-heavy top of the Spanish creator rankings.
                </p>
                <p className="mb-4 leading-relaxed">
                  Alana's content approach emphasises authenticity and direct connection with her audience. In an ecosystem historically dominated by male gaming creators, she represents the growing diversification of Spanish YouTube into broader lifestyle, fashion, commentary, and entertainment categories — a shift that mirrors global trends as the platform matures beyond its gaming-first identity.
                </p>
                <p className="leading-relaxed">
                  Her cross-platform presence and the loyal, interactivity-focused nature of her community position Alana Flores as one to watch closely as the next generation of Spanish creators takes centre stage. She joins a growing cohort of Spanish-language women creators reshaping expectations of what constitutes "top" content in the space.
                </p>
              </section>

              {/* Willyrex */}
              <section id="willyrex" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">7. Willyrex</h2>

                <p className="mb-4 leading-relaxed">
                  <strong>Guillermo Díaz</strong>, known as <strong>Willyrex</strong> (born March 13, 1992, in Spain), is the longtime creative partner of Vegetta777 and one of the foundational figures of Spanish gaming YouTube. With over <strong>18 million subscribers</strong>, his channel has spanned Minecraft, Call of Duty, Fortnite, and challenge content over more than a decade of continuous uploads.
                </p>
                <p className="leading-relaxed">
                  Willyrex and Vegetta777's collaborative series defined a generation of Spanish-speaking young gamers in the early-to-mid 2010s. More recently, Willyrex has diversified his content into lifestyle and personal vlogs, maintaining his connection with an audience that grew up watching his gaming videos and has now followed him into adulthood.
                </p>
              </section>

              {/* Cultural Impact */}
              <section id="impact" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Cultural Impact</h2>

                <p className="mb-4 leading-relaxed">
                  The influence of top Spanish YouTubers extends well beyond view counts. Events like <strong>La Velada del Año</strong> and the <strong>Kings League</strong> have demonstrated that Spanish-language creators can build entertainment properties capable of competing with — and in some metrics surpassing — traditional broadcasters. Music artists like <strong>Bizarrap</strong> and <strong>Duki</strong> have used La Velada's stage to debut tracks that subsequently charted internationally, illustrating how creator events have become genuine cultural launches.
                </p>
                <p className="mb-4 leading-relaxed">
                  The Spanish creator ecosystem is also notable for its <strong>collaborative density</strong>. Unlike the fragmented and sometimes rivalrous English-language creator space, top Spanish YouTubers frequently appear in each other's content, co-own business ventures together, and participate in shared events. This network effect amplifies individual creators and reinforces the community's overall size and loyalty.
                </p>
                <p className="leading-relaxed">
                  Brands operating in Spanish-speaking markets have increasingly shifted advertising budgets toward creator partnerships, recognising that figures like Ibai Llanos and AuronPlay deliver engaged audiences that traditional television cannot match for the under-35 demographic. The commercial maturation of the Spanish creator economy — with its own agencies, management firms, and event infrastructure — marks it as one of the most developed creator industries globally.
                </p>
              </section>

              {/* See Also */}
              <section id="seealso" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">See Also</h2>
                <ul className="list-disc list-inside space-y-1 text-blue-600 text-sm">
                  <li><Link href="/youtube" className="hover:underline">YouTube — Platform Overview</Link></li>
                  <li><Link href="/youtube/sidemen" className="hover:underline">The Sidemen — British YouTube Group</Link></li>
                  <li><Link href="/youtube/logan-paul" className="hover:underline">Logan Paul</Link></li>
                  <li><Link href="/entertainment" className="hover:underline">Entertainment</Link></li>
                </ul>
              </section>

              {/* References */}
              <section id="references" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">References</h2>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                  <li>
                    Ibai Llanos — Official YouTube Channel:{' '}
                    <a href="https://www.youtube.com/@IbaiLlanos" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      youtube.com/@IbaiLlanos
                    </a>
                  </li>
                  <li>
                    Alana Flores — Official YouTube Channel:{' '}
                    <a href="https://www.youtube.com/@alanafloresf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      youtube.com/@alanafloresf
                    </a>
                  </li>
                  <li>La Velada del Año IV — Twitch concurrent viewer data, August 2024.</li>
                  <li>TheGrefg Fortnite Icon Series skin reveal — Twitch record, January 2021.</li>
                  <li>Kings League official statistics — kings-league.sport, 2023–2026.</li>
                  <li>Socialblade Spanish-language YouTube rankings — socialblade.com, accessed March 2026.</li>
                </ol>
              </section>

            </main>

            {/* Right Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-6 space-y-6">

                {/* Quick Nav Box */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
                  <h3 className="font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">
                    Top Spanish YouTubers
                  </h3>
                  <ol className="space-y-2">
                    {[
                      { rank: '🥇', name: 'Ibai Llanos', id: 'ibai', handle: '@IbaiLlanos' },
                      { rank: '🥈', name: 'AuronPlay', id: 'auronplay', handle: '@AuronPlay' },
                      { rank: '🥉', name: 'ElRubius', id: 'elrubius', handle: '@elrubiusOMG' },
                      { rank: '4', name: 'TheGrefg', id: 'thegrefg', handle: '@TheGrefg' },
                      { rank: '5', name: 'Vegetta777', id: 'vegetta', handle: '@Vegetta777' },
                      { rank: '6', name: 'Alana Flores', id: 'alana', handle: '@alanafloresf' },
                      { rank: '7', name: 'Willyrex', id: 'willyrex', handle: '@Willyrex' },
                    ].map((creator) => (
                      <li key={creator.id} className="flex items-center gap-2">
                        <span className="text-base w-8 shrink-0">{creator.rank}</span>
                        <div>
                          <a href={`#${creator.id}`} className="text-blue-600 hover:underline font-medium">
                            {creator.name}
                          </a>
                          <p className="text-xs text-gray-500">{creator.handle}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Key Facts */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
                  <h3 className="font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">Key Facts</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <span className="font-medium">Most subscribed:</span> ElRubius (40M+)
                    </li>
                    <li>
                      <span className="font-medium">Most culturally influential:</span> Ibai Llanos
                    </li>
                    <li>
                      <span className="font-medium">Record stream peak:</span> La Velada del Año IV — 3.4M concurrent
                    </li>
                    <li>
                      <span className="font-medium">Largest live gaming reveal:</span> TheGrefg Fortnite skin — 2.4M concurrent
                    </li>
                    <li>
                      <span className="font-medium">Language community rank:</span> 2nd largest on YouTube
                    </li>
                  </ul>
                </div>

                {/* Related Pages */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
                  <h3 className="font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">Related</h3>
                  <ul className="space-y-1.5">
                    <li>
                      <Link href="/youtube" className="text-blue-600 hover:underline">YouTube Platform</Link>
                    </li>
                    <li>
                      <Link href="/youtube/sidemen" className="text-blue-600 hover:underline">The Sidemen (UK)</Link>
                    </li>
                    <li>
                      <Link href="/youtube/logan-paul" className="text-blue-600 hover:underline">Logan Paul</Link>
                    </li>
                    <li>
                      <Link href="/entertainment" className="text-blue-600 hover:underline">Entertainment Hub</Link>
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
