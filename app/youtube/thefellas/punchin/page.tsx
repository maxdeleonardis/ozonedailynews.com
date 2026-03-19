import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';

export const metadata: Metadata = {
  title: "Punchin' Podcast — Danny Aarons & Tennessee Thresher | ObjectWire",
  description: "Complete profile of Punchin' — the weekly couple podcast hosted by Danny Aarons and Tennessee Thresher on The Fellas Studios network. Episodes, topics, style, and how to listen.",
  alternates: {
    canonical: 'https://www.objectwire.org/youtube/thefellas/punchin',
  },
  keywords: [
    "Punchin' podcast",
    'Danny Aarons',
    'Tennessee Thresher',
    'The Fellas Studios',
    'UK couple podcast',
    'comedy podcast',
    'relationship podcast',
    'UK YouTubers podcast',
  ],
  openGraph: {
    title: "Punchin' Podcast — Danny Aarons & Tennessee Thresher | ObjectWire",
    description: "Full profile of Punchin', the candid weekly couple podcast hosted by Danny Aarons and Tennessee Thresher on The Fellas Studios network.",
    type: "article",
    url: "https://www.objectwire.org/youtube/thefellas/punchin",
  },
  twitter: {
    card: "summary_large_image",
    title: "Punchin' Podcast — Danny Aarons & Tennessee Thresher",
    description: "Weekly couple comedy podcast from The Fellas Studios. Relationships, parenting, games, guests and more.",
  },
};

export default function PunchinPage() {
  const breadcrumbItems = [
    { name: 'Home', item: '/' },
    { name: 'YouTube', item: '/youtube' },
    { name: 'The Fellas Studios', item: '/youtube/thefellas' },
    { name: "Punchin'", item: '/youtube/thefellas/punchin' },
  ];

  return (
    <>
      <NewsArticleSchema
        title="Punchin' — Danny Aarons & Tennessee Thresher Podcast"
        description="Comprehensive profile of Punchin', the weekly couple podcast hosted by Danny Aarons and Tennessee Thresher on The Fellas Studios network. Covers format, topics, notable episodes, and how to listen."
        author="ObjectWire Editorial Team"
        publishedTime="2026-03-11T00:00:00Z"
        modifiedTime="2026-03-11T00:00:00Z"
        articleUrl="https://www.objectwire.org/youtube/thefellas/punchin"
        section="Entertainment"
        keywords={[
          "Punchin' podcast",
          'Danny Aarons',
          'Tennessee Thresher',
          'The Fellas Studios',
          'couple podcast',
          'UK comedy podcast',
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
            <h1 className="text-4xl font-serif mb-2">Punchin'</h1>
            <p className="text-sm text-gray-500 italic">
              Weekly couple podcast hosted by Danny Aarons and Tennessee Thresher, produced by{' '}
              <Link href="/youtube/thefellas" className="text-blue-600 hover:underline">
                The Fellas Studios
              </Link>
              .
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-6xl pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* ── Main Content ── */}
            <main className="lg:col-span-8">

              {/* Lead */}
              <p className="text-lg leading-relaxed mb-6">
                <strong>Punchin'</strong> is a weekly comedy podcast hosted by <strong>Danny Aarons</strong>{' '}
                and <strong>Tennessee Thresher</strong>, produced under the{' '}
                <Link href="/youtube/thefellas" className="text-blue-600 hover:underline">
                  The Fellas Studios
                </Link>{' '}
                network. It is the first podcast the two hosts have recorded together as a couple, and the
                show's identity is built on that dynamic — candid, unscripted conversation between two
                partners who bring their relationship, their social circle, and their day-to-day lives
                directly into the recording. Episodes drop weekly, typically on Wednesdays, and run for
                approximately one hour.
              </p>

              {/* Table of Contents */}
              <nav className="bg-gray-50 border border-gray-200 p-4 mb-8 rounded-lg">
                <h2 className="font-bold text-gray-900 mb-3 border-b border-gray-300 pb-2">Contents</h2>
                <ol className="space-y-1 text-sm">
                  <li><a href="#overview" className="text-blue-600 hover:underline">1 Overview</a></li>
                  <li><a href="#hosts" className="text-blue-600 hover:underline">2 Hosts</a>
                    <ol className="pl-4 mt-1 space-y-0.5">
                      <li><a href="#danny" className="text-blue-600 hover:underline">2.1 Danny Aarons</a></li>
                      <li><a href="#tennessee" className="text-blue-600 hover:underline">2.2 Tennessee Thresher</a></li>
                    </ol>
                  </li>
                  <li><a href="#format" className="text-blue-600 hover:underline">3 Format &amp; Style</a></li>
                  <li><a href="#topics" className="text-blue-600 hover:underline">4 Topics &amp; Themes</a></li>
                  <li><a href="#episodes" className="text-blue-600 hover:underline">5 Notable Episodes &amp; Moments</a></li>
                  <li><a href="#guests" className="text-blue-600 hover:underline">6 Guest Appearances</a></li>
                  <li><a href="#network" className="text-blue-600 hover:underline">7 The Fellas Studios Network</a></li>
                  <li><a href="#listen" className="text-blue-600 hover:underline">8 How to Listen</a></li>
                  <li><a href="#seealso" className="text-blue-600 hover:underline">9 See Also</a></li>
                  <li><a href="#references" className="text-blue-600 hover:underline">10 References</a></li>
                </ol>
              </nav>

              {/* Overview */}
              <section id="overview" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Overview</h2>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold w-1/3">Podcast</th>
                        <td className="p-3">Punchin'</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Hosts</th>
                        <td className="p-3">Danny Aarons &amp; Tennessee Thresher</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Network</th>
                        <td className="p-3">
                          <Link href="/youtube/thefellas" className="text-blue-600 hover:underline">
                            The Fellas Studios
                          </Link>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Release Schedule</th>
                        <td className="p-3">Weekly — typically Wednesdays</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Episode Length</th>
                        <td className="p-3">~1 hour</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Format</th>
                        <td className="p-3">Couple-hosted; conversation, games, listener Q&amp;A, guest episodes</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Genre</th>
                        <td className="p-3">Comedy / Lifestyle / Relationships</td>
                      </tr>
                      <tr>
                        <th className="bg-gray-50 p-3 text-left font-semibold">Origin</th>
                        <td className="p-3">United Kingdom</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mb-4 leading-relaxed">
                  The title is a nod to the British colloquialism <em>"punching above your weight"</em> in a
                  romantic context — suggesting one partner is considered an unlikely match for the other. The
                  phrase, well-established in UK slang, gives the show an immediately recognisable and playful
                  identity that signals its tone before a single episode has been heard.
                </p>
                <p className="leading-relaxed">
                  Punchin' sits within a wider category of UK "couple content" that has grown significantly
                  in the podcast space throughout the 2020s. By placing an authentic romantic partnership at
                  the centre of the show rather than treating it as a backdrop, Danny and Tennessee have
                  created a format that feels genuinely distinct from standard entertainment podcasts — closer
                  to an extended, unfiltered conversation between two people the audience feels they know.
                </p>
              </section>

              {/* Hosts */}
              <section id="hosts" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Hosts</h2>

                <div id="danny" className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Danny Aarons</h3>
                  <p className="mb-4 leading-relaxed">
                    <strong>Danny Aarons</strong> is a British YouTube creator and content personality who
                    built his following through a combination of challenge content, vlogs, and collaborative
                    videos within the UK creator ecosystem. He is known for an energetic, self-aware comedic
                    style and has featured in content across multiple creator networks, making him a
                    familiar face to audiences well beyond his own subscriber base.
                  </p>
                  <p className="leading-relaxed">
                    Punchin' marks Danny's first venture into co-hosted long-form audio content as one half
                    of a presenting couple, and represents a natural evolution for a creator whose on-screen
                    personality has always been rooted in candid, personality-led entertainment rather than
                    tightly scripted production.
                  </p>
                </div>

                <div id="tennessee">
                  <h3 className="text-xl font-semibold mb-3">Tennessee Thresher</h3>
                  <p className="mb-4 leading-relaxed">
                    <strong>Tennessee Thresher</strong> co-hosts Punchin' as Danny's partner, and her
                    presence gives the show its essential double-act dynamic. Rather than serving as a
                    secondary voice, Tennessee brings her own perspective, stories, and reactions to every
                    episode — frequently providing the counterpoint to Danny's energy and grounding
                    discussions in her own experiences.
                  </p>
                  <p className="leading-relaxed">
                    Her willingness to discuss personal topics — from pregnancy and parenting to social media
                    observations — with honesty and humour establishes her as an equal co-host in the truest
                    sense, and is central to the show's identity as authentic couple content rather than a
                    presenter-and-guest dynamic with a partner as recurring guest.
                  </p>
                </div>
              </section>

              {/* Format & Style */}
              <section id="format" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Format &amp; Style</h2>

                <p className="mb-4 leading-relaxed">
                  Punchin' is comedy-leaning with honest, playful banter at its core. The show deliberately
                  avoids an overly scripted feel — episodes have the texture of a conversation that has been
                  given space to develop naturally, rather than a presentation working through a prepared
                  agenda.
                </p>

                <h3 className="text-lg font-semibold mb-3">Episode Structure</h3>
                <p className="mb-4 leading-relaxed">
                  While individual episodes vary, the show consistently incorporates a mix of:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6 text-sm text-gray-800 leading-relaxed">
                  <li>
                    <strong>Open conversation segments</strong> — unscripted discussion of whatever is on
                    the hosts' minds that week, from relationship dynamics to cultural observations.
                  </li>
                  <li>
                    <strong>Weekly wins &amp; losses</strong> — a recurring feature where each host shares
                    personal highlights and lowlights from their week, providing a consistent anchor across
                    episodes.
                  </li>
                  <li>
                    <strong>Listener Q&amp;A and games</strong> — audience participation segments where
                    questions submitted by listeners become the basis for discussion, debate, or comedic
                    challenges between the hosts.
                  </li>
                  <li>
                    <strong>Guest episodes</strong> — friends, fellow creators, and occasional familiar
                    faces join the duo, shifting the dynamic and broadening the conversation.
                  </li>
                  <li>
                    <strong>Serious chat breaks</strong> — within otherwise light episodes, the hosts are
                    unafraid to shift into more sincere territory, particularly around parenting, family,
                    and personal growth.
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">Tone</h3>
                <p className="leading-relaxed">
                  The overriding tone is defined by what the hosts describe as "authentic couple talk" —
                  nothing feels performed for an audience in the way polished broadcast content might.
                  The disagreements are real, the enthusiasm is genuine, and the segments that veer into
                  silliness do so organically rather than by design. This positions Punchin' within a podcast
                  tradition that prizes parasocial intimacy — the feeling that the audience is a fly on the
                  wall rather than a recipient of produced content.
                </p>
              </section>

              {/* Topics & Themes */}
              <section id="topics" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Topics &amp; Themes</h2>

                <p className="mb-4 leading-relaxed">
                  Punchin' covers a wide range of subjects, unified by the domestic and interpersonal lens
                  through which Danny and Tennessee approach everything. Key recurring themes include:
                </p>

                <div className="space-y-4">
                  <div className="border-l-4 border-gray-300 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Life &amp; Relationships</h3>
                    <p className="text-sm leading-relaxed text-gray-700">
                      Navigating couple life, playful debates about everyday decisions, and the dynamics of
                      being in a public-facing relationship. The hosts discuss both the ordinary tensions of
                      cohabiting and the specific pressures that come with sharing elements of a personal
                      life with an online audience.
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-300 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Parenting &amp; Family</h3>
                    <p className="text-sm leading-relaxed text-gray-700">
                      Episodes include candid discussion of pregnancy stories, baby updates, parenting
                      dilemmas, and the experience of building a family life alongside active content careers.
                      This thread gives the show a longitudinal quality — listeners follow the hosts through
                      real life events as they unfold.
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-300 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Weekly Wins &amp; Losses</h3>
                    <p className="text-sm leading-relaxed text-gray-700">
                      A regular segment in which both hosts reflect on personal highlights and lowlights
                      from the preceding week. The segment functions as a light debrief that keeps the show
                      grounded in real time and prevents it from feeling timeless or generic.
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-300 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Listener Questions &amp; Games</h3>
                    <p className="text-sm leading-relaxed text-gray-700">
                      Audience participation is a consistent feature. Listener-submitted questions become
                      the basis for discussion, creating a feedback loop between the hosts and their
                      community that reinforces the show's intimate feel.
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-300 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Culture &amp; Current Weirdness</h3>
                    <p className="text-sm leading-relaxed text-gray-700">
                      Commentary on internet culture, social media trends, ongoing public dramas, and the
                      particular oddness of living a partially public life. Episodes often incorporate
                      reactions to news and viral moments from the week.
                    </p>
                  </div>

                  <div className="border-l-4 border-gray-300 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Travel, Events &amp; Daily Chaos</h3>
                    <p className="text-sm leading-relaxed text-gray-700">
                      Stories from trips, weddings, social occasions, and the general unpredictability of
                      life provide regular episode material — giving the show a diary-like quality across
                      its run.
                    </p>
                  </div>
                </div>
              </section>

              {/* Notable Episodes */}
              <section id="episodes" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">
                  Notable Episodes &amp; Moments
                </h2>

                <p className="mb-4 leading-relaxed">
                  While Punchin' operates primarily as a conversational podcast without scripted set-pieces,
                  certain episodes and recurring segments have stood out to the show's audience:
                </p>

                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-300">
                        <th className="p-3 text-left font-semibold">Topic / Moment</th>
                        <th className="p-3 text-left font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Christmas Traditions Debate</td>
                        <td className="p-3">The hosts debate competing Christmas traditions and run a quiz segment — a recurring low-stakes argument format that has become a fan favourite.</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Travel &amp; Wedding Stories</td>
                        <td className="p-3">Episodes drawing on real experiences from trips abroad and attending weddings, providing genuine narrative material rather than hypothetical discussion.</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Big Beno Guest Episode</td>
                        <td className="p-3">A guest appearance from <strong>Big Beno</strong> covering topics including his Locked In experiences and life following the show, bringing a different energy to the usual couple-dynamic format.</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Parenting &amp; Pregnancy Updates</td>
                        <td className="p-3">Ongoing conversations about pregnancy, baby milestones, and parenting dilemmas — a thread running through the show's history that gives it real emotional continuity.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Daily Chaos Segments</td>
                        <td className="p-3">Unplanned, in-the-moment recaps of whatever has gone wrong (or unexpectedly right) in the hosts' week — often the episodes' most memorable passages.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Guests */}
              <section id="guests" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Guest Appearances</h2>

                <p className="mb-4 leading-relaxed">
                  Guest episodes are a recurring feature of Punchin', with friends, fellow content creators,
                  and occasional public figures appearing alongside the hosts. Guests typically integrate
                  into the show's existing conversational flow rather than being interviewed in a formal
                  broadcast sense — the format remains the same, the ensemble simply expands for the episode.
                </p>
                <p className="mb-4 leading-relaxed">
                  Notable guest appearances have included <strong>Big Beno</strong>, who discussed his
                  experiences on the television series <em>Locked In</em> and life following the show.
                  The choice to invite guests whose stories have a narrative dimension — rather than purely
                  platform-driven celebrity appearances — is consistent with the show's overall emphasis on
                  substance alongside entertainment.
                </p>
                <p className="leading-relaxed">
                  As a show on the{' '}
                  <Link href="/youtube/thefellas" className="text-blue-600 hover:underline">
                    Fellas Studios
                  </Link>{' '}
                  network, Punchin' also benefits from natural cross-network guest traffic — hosts from
                  other network shows have appeared, and Danny and Tennessee have reciprocated on other
                  programmes, building audience crossover across the catalogue.
                </p>
              </section>

              {/* Network Context */}
              <section id="network" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">
                  The Fellas Studios Network
                </h2>

                <p className="mb-4 leading-relaxed">
                  Punchin' is one of thirteen-plus shows produced under the{' '}
                  <Link href="/youtube/thefellas" className="text-blue-600 hover:underline">
                    The Fellas Studios
                  </Link>{' '}
                  network, co-founded by{' '}
                  <strong>Calfreezy (Callum Airey)</strong> and{' '}
                  <strong>TheBurntChip (Joshua Larkin)</strong>. The network's catalogue spans comedy,
                  sport, lifestyle, culture, and history — and Punchin' occupies the lifestyle and
                  relationships segment alongside other personality-led shows such as{' '}
                  <em>Saving Grace</em> (hosted by GK Barry) and <em>Family Ties</em>.
                </p>

                <p className="leading-relaxed">
                  For a full overview of every show in the network, see the{' '}
                  <Link href="/youtube/thefellas" className="text-blue-600 hover:underline">
                    The Fellas Studios
                  </Link>{' '}
                  main page.
                </p>
              </section>

              {/* How to Listen */}
              <section id="listen" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">How to Listen</h2>

                <p className="mb-4 leading-relaxed">
                  Punchin' releases new episodes weekly. The show is available across all major podcast
                  platforms and on YouTube as part of The Fellas Studios network.
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-3">Available On</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 mt-0.5">▸</span>
                      <span>
                        <strong>YouTube</strong> — via The Fellas Studios channel
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 mt-0.5">▸</span>
                      <span>
                        <strong>Spotify</strong> — search "Punchin' Podcast"
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 mt-0.5">▸</span>
                      <span>
                        <strong>Apple Podcasts</strong> — search "Punchin' Danny Aarons"
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 mt-0.5">▸</span>
                      <span>
                        <strong>All major podcast apps</strong> — search "Punchin'"
                      </span>
                    </li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-4 italic">
                    New episodes drop weekly, typically on Wednesdays.
                  </p>
                </div>
              </section>

              {/* See Also */}
              <section id="seealso" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">See Also</h2>
                <ul className="list-disc list-inside space-y-1 text-blue-600 text-sm">
                  <li>
                    <Link href="/youtube/thefellas" className="hover:underline">
                      The Fellas Studios — Full Network Overview
                    </Link>
                  </li>
                  <li>
                    <Link href="/youtube/sidemen" className="hover:underline">
                      The Sidemen
                    </Link>
                  </li>
                  <li>
                    <Link href="/youtube" className="hover:underline">
                      YouTube — Platform Overview
                    </Link>
                  </li>
                  <li>
                    <Link href="/entertainment" className="hover:underline">
                      Entertainment Hub
                    </Link>
                  </li>
                </ul>
              </section>

              {/* References */}
              <section id="references" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">References</h2>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                  <li>Punchin' — The Fellas Studios network catalogue, 2026.</li>
                  <li>Danny Aarons — YouTube creator profile, The Fellas Studios.</li>
                  <li>Tennessee Thresher — co-host, Punchin' podcast.</li>
                  <li>Big Beno guest episode — Punchin' podcast, The Fellas Studios.</li>
                  <li>
                    The Fellas Studios — network overview:{' '}
                    <Link href="/youtube/thefellas" className="text-blue-600 hover:underline">
                      objectwire.org/youtube/thefellas
                    </Link>
                  </li>
                </ol>
              </section>

            </main>

            {/* ── Right Sidebar ── */}
            <aside className="lg:col-span-4">
              <div className="sticky top-6 space-y-6">

                {/* Podcast Infobox */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
                  <p className="font-bold text-center border-b border-gray-200 pb-2 mb-3">Punchin'</p>
                  <table className="w-full text-xs">
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <th className="py-1.5 pr-2 text-left text-gray-600 font-medium align-top">Hosts</th>
                        <td className="py-1.5">Danny Aarons<br />&amp; Tennessee Thresher</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <th className="py-1.5 pr-2 text-left text-gray-600 font-medium">Network</th>
                        <td className="py-1.5">
                          <Link href="/youtube/thefellas" className="text-blue-600 hover:underline">
                            The Fellas Studios
                          </Link>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <th className="py-1.5 pr-2 text-left text-gray-600 font-medium">Schedule</th>
                        <td className="py-1.5">Weekly (Wednesdays)</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <th className="py-1.5 pr-2 text-left text-gray-600 font-medium">Length</th>
                        <td className="py-1.5">~1 hour</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <th className="py-1.5 pr-2 text-left text-gray-600 font-medium">Genre</th>
                        <td className="py-1.5">Comedy / Lifestyle / Relationships</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <th className="py-1.5 pr-2 text-left text-gray-600 font-medium">Origin</th>
                        <td className="py-1.5">United Kingdom</td>
                      </tr>
                      <tr>
                        <th className="py-1.5 pr-2 text-left text-gray-600 font-medium align-top">Notable Guest</th>
                        <td className="py-1.5">Big Beno</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Quick Topics */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
                  <h3 className="font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">
                    What They Talk About
                  </h3>
                  <ul className="space-y-1.5 text-gray-700 text-xs">
                    {[
                      'Couple life & relationships',
                      'Parenting & family',
                      'Weekly wins & losses',
                      'Listener Q&A & games',
                      'Guest appearances',
                      'Internet culture & current events',
                      'Travel, weddings & daily chaos',
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-1.5">
                        <span className="text-gray-400 mt-0.5 shrink-0">▸</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Other Fellas Studios Shows */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
                  <h3 className="font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">
                    Also on The Fellas Studios
                  </h3>
                  <ul className="space-y-1.5 text-xs text-gray-700">
                    <li>The Fellas <span className="text-gray-400">— Calfreezy &amp; TheBurntChip</span></li>
                    <li>Saving Grace <span className="text-gray-400">— GK Barry</span></li>
                    <li>The Bach &amp; Arthur Podcast <span className="text-gray-400">— Italian Bach &amp; ArthurTV</span></li>
                    <li>Pitch Side <span className="text-gray-400">— Theo Baker et al.</span></li>
                    <li>DEEP IT! <span className="text-gray-400">— Adeola Patronne &amp; Mariam Musa</span></li>
                    <li>Family Ties <span className="text-gray-400">— Tobi, Manny &amp; Jed</span></li>
                  </ul>
                  <Link
                    href="/youtube/thefellas"
                    className="inline-block mt-3 text-xs text-blue-600 hover:underline"
                  >
                    View all network shows →
                  </Link>
                </div>

                {/* Related */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
                  <h3 className="font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">Related</h3>
                  <ul className="space-y-1.5">
                    <li>
                      <Link href="/youtube/thefellas" className="text-blue-600 hover:underline">
                        The Fellas Studios
                      </Link>
                    </li>
                    <li>
                      <Link href="/youtube/sidemen" className="text-blue-600 hover:underline">
                        The Sidemen
                      </Link>
                    </li>
                    <li>
                      <Link href="/youtube" className="text-blue-600 hover:underline">
                        YouTube Platform
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
