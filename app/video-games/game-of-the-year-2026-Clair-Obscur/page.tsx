import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/video-games/game-of-the-year-2026-Clair-Obscur';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title:
    'Clair Obscur: Expedition 33 Built by Just 4 Programmers — Most Awarded Game in History | ObjectWire',
  description:
    'At GDC 2026, Sandfall Interactive revealed that 95% of Clair Obscur: Expedition 33 was built using Unreal Engine 5 Blueprints by a team of four programmers. The game has now surpassed Elden Ring with 436 GOTY awards — the most in history.',
  keywords: [
    'Clair Obscur Expedition 33 GDC 2026',
    'Sandfall Interactive Blueprint scripting',
    'Clair Obscur most awarded game history',
    'Unreal Engine 5 Blueprint game development',
    'Clair Obscur 436 GOTY awards',
    'Tom Guillermin Florian Torres GDC talk',
    'Clair Obscur vs Elden Ring GOTY record',
    'indie game of the year 2025',
    'Unreal Engine Blueprint production 2026',
    'Clair Obscur The Game Awards 2025 wins',
    'Sandfall Interactive four programmers',
    'Clair Obscur AI controversy Indie Game Awards',
    'GDC 2026 developer talk programming',
    'Blueprint scripting vs C++ Unreal Engine',
  ],
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: 'Clair Obscur Was Built by 4 Programmers — And Just Became the Most Awarded Game Ever',
    description:
      '95% Blueprint, 4 programmers, under $10M budget. Sandfall Interactive\'s GDC 2026 talk revealed how Clair Obscur: Expedition 33 beat Elden Ring\'s all-time GOTY record with 436 wins.',
    type: 'article',
    url: CANONICAL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-17T18:00:00Z',
    modifiedTime: '2026-03-17T18:00:00Z',
    section: 'Video Games',
    tags: [
      'Clair Obscur',
      'GDC 2026',
      'Sandfall Interactive',
      'Unreal Engine 5',
      'Game of the Year',
      'Indie Games',
      'Video Games',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clair Obscur: 4 Programmers, 95% Blueprint, Most Awarded Game in History',
    description:
      '436 GOTY wins. 9 TGA awards in one night. Built by 4 programmers using Unreal Engine Blueprints. Sandfall\'s GDC 2026 talk left the Moscone Center in a "collective murmur of shock."',
  },
};

export default function ClairObscurGOTY2026Page() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Clair Obscur: Expedition 33 Built by Just 4 Programmers — Most Awarded Game in History"
        description="At GDC 2026, Sandfall Interactive revealed that 95% of Clair Obscur: Expedition 33 was built using Unreal Engine 5 Blueprints by a team of four programmers. The game has surpassed Elden Ring with 436 GOTY awards."
        author="ObjectWire Gaming Desk"
        authorUrl="https://www.objectwire.org/team"
        publishedTime="2026-03-17T18:00:00Z"
        modifiedTime="2026-03-17T18:00:00Z"
        articleUrl={CANONICAL}
        section="Video Games"
        keywords={[
          'Clair Obscur GDC 2026',
          'most awarded game history',
          'Sandfall Interactive Blueprint',
          'Unreal Engine 5 indie game',
          'Clair Obscur GOTY record',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Video Games', item: '/video-games' },
              { name: 'Clair Obscur: Expedition 33 — GDC 2026', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Clair Obscur Devs Reveal GOTY Giant Built by Just 4 Programmers"
        subtitle="At GDC 2026 in San Francisco, Sandfall Interactive's CTO confirmed that 95% of the record-breaking RPG was scripted entirely in Unreal Engine 5 Blueprints — and the studio has now officially surpassed Elden Ring as the most awarded game in history."
        category="GDC 2026"
        categoryColor="purple"
        topicTag="gaming"
        publishDate="March 17, 2026"
        readTime="6 min read"
        breaking={false}
        trending
        author={{
          name: 'ObjectWire Gaming Desk',
          role: 'Video Games & Technology',
          authorSlug: 'team',
        }}
        tags={[
          'Clair Obscur',
          'GDC 2026',
          'Sandfall Interactive',
          'Unreal Engine 5',
          'Game of the Year',
          'Indie Games',
          'Blueprint',
          'Fortnite Engine',
        ]}
        url={SLUG}
      >
        {/* Lede */}
        <p>
          <strong>SAN FRANCISCO, CA</strong> — In a session that left the Moscone West convention
          center in what attendees described as a{' '}
          <em>&ldquo;collective murmur of shock,&rdquo;</em>{' '}
          <strong>Sandfall Interactive</strong> pulled back the curtain on the technical wizardry
          behind 2025&apos;s most decorated game. During their{' '}
          <Link href="/events/gdc-2026" className="text-purple-600 font-medium hover:underline">
            GDC 2026
          </Link>{' '}
          talk titled{' '}
          <em>&ldquo;Delivering a Wide Scope of Features &amp; Content When You Only Have Four
          Programmers,&rdquo;</em>{' '}
          CTO <strong>Tom Guillermin</strong> and Senior Gameplay Programmer{' '}
          <strong>Florian Torres</strong> revealed that the hyper-polished RPG{' '}
          <strong>Clair Obscur: Expedition 33</strong> was built almost entirely without
          traditional C++ coding.
        </p>

        <HighlightBox type="key-point" color="purple">
          <strong>The Headline Numbers:</strong> 95% Blueprint scripting &bull; 4 programmers &bull;
          under $10M budget &bull; 436 all-time GOTY wins (new record) &bull; 9 TGA wins in a
          single night.
        </HighlightBox>

        {/* Gameplay Video */}
        <h2>Watch: Clair Obscur — Expedition 33 Gameplay</h2>
        <div className="my-6 rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <div className="bg-gray-900 text-white px-4 py-3 flex items-center gap-3">
            <span className="text-xl">▶️</span>
            <span className="font-bold text-sm">YouTube</span>
            <span className="text-white/60 text-sm">Clair Obscur: Expedition 33 — Gameplay</span>
          </div>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/NWgQcKESOg0"
              title="Clair Obscur: Expedition 33 — Gameplay"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Blueprint Revolution */}
        <h2>The &ldquo;Blueprint&rdquo; Revolution</h2>
        <p>
          The French studio confirmed that <strong>95% of the core gameplay logic</strong> — from
          the bombastic turn-based combat to the intricate world-map features — was implemented
          using <strong>Unreal Engine 5&apos;s visual Blueprint scripting system</strong>. The same
          engine used in{' '}
          <Link href="/fortnite" className="text-purple-600 font-medium hover:underline">
            Fortnite
          </Link>{' '}
          and, increasingly,{' '}
          <Link href="/entertainment/news/fortnite-moves-into-movies" className="text-purple-600 font-medium hover:underline">
            over 153 film and TV productions in 2025 alone
          </Link>
          .
        </p>
        <p>
          Blueprints is Unreal Engine&apos;s node-based visual scripting system — a flowchart-style
          interface where logic is built by connecting function blocks rather than writing code
          character by character. For years, the conventional wisdom in professional game development
          held that Blueprints were fine for prototyping but would buckle under the demands of a
          full commercial production. Sandfall has disproved that.
        </p>

        <div className="border border-gray-200 rounded-xl overflow-hidden my-6">
          <div className="bg-violet-700 text-white px-5 py-3 font-semibold text-sm">
            How Sandfall Built Clair Obscur — The Key Pillars
          </div>
          <div className="divide-y divide-gray-100">
            {[
              {
                label: 'Scripting Method',
                value: '95% Unreal Engine 5 Blueprints — almost no hand-written C++',
              },
              {
                label: 'Team Size (Programming)',
                value: 'Started with 1 programmer; grew to 4 during final 3 years of production',
              },
              {
                label: 'Total Studio Size',
                value: 'Fewer than 40 people across all disciplines',
              },
              {
                label: 'Budget',
                value: 'Under $10 million (estimated)',
              },
              {
                label: 'Philosophy',
                value: '"Vanilla-first" — push native UE5 tools to their limits before building bespoke systems',
              },
              {
                label: '"Recipe" Approach',
                value: 'Blueprint nodes as a shared language — artists and designers script their own effects directly',
              },
            ].map((row, i) => (
              <div
                key={row.label}
                className={`flex flex-col md:flex-row md:items-center gap-1 md:gap-4 px-5 py-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-purple-50'}`}
              >
                <div className="md:w-56 font-semibold text-violet-800 shrink-0">{row.label}</div>
                <div className="text-gray-800">{row.value}</div>
              </div>
            ))}
          </div>
        </div>

        <HighlightBox type="quote" color="purple">
          &ldquo;We&apos;re not much for coding. Our philosophy is based on the reality of
          limited bandwidth. Programmers create the building blocks — the Blueprint nodes —
          and we let the designers play with them.&rdquo;
          <div className="text-sm mt-3 text-gray-600 font-normal">
            — Tom Guillermin, CTO of Sandfall Interactive, GDC 2026
          </div>
        </HighlightBox>

        {/* Record-Breaking Accolades */}
        <h2>Record-Breaking Accolades — The Most Awarded Game in History</h2>
        <p>
          The technical revelation adds another layer of legend to a game that has already
          decimated the record books. Following its dominant run through the 2025 Game Awards,
          Clair Obscur has officially become the <strong>most awarded game in history</strong>.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm text-sm">
            <thead>
              <tr className="bg-violet-700 text-white">
                <th className="text-left px-5 py-3 font-semibold">Award Milestone</th>
                <th className="text-center px-5 py-3 font-semibold">Stat</th>
                <th className="text-left px-5 py-3 font-semibold">Context</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  milestone: 'TGA Single Night',
                  stat: '9 Wins',
                  context: 'Surpassed Baldur\'s Gate 3 (6) for most wins in a single night',
                },
                {
                  milestone: 'All-Time GOTY Record',
                  stat: '436 Awards',
                  context: 'Overtook Elden Ring (429) for the most GOTY wins ever',
                },
                {
                  milestone: 'Player Choice Record',
                  stat: '125 Wins',
                  context: 'New world record, surpassing The Last of Us Part II',
                },
                {
                  milestone: 'GDCA 2026 Nominations',
                  stat: '8 Noms',
                  context: 'Leads all games in nominations at this week\'s GDC Awards',
                },
              ].map((row, i) => (
                <tr key={row.milestone} className={i % 2 === 0 ? 'bg-white' : 'bg-purple-50'}>
                  <td className="px-5 py-3 font-semibold text-gray-900">{row.milestone}</td>
                  <td className="px-5 py-3 text-center font-black text-violet-700 text-base">{row.stat}</td>
                  <td className="px-5 py-3 text-gray-700">{row.context}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Why the Industry is Stunned */}
        <h2>Why the Industry Is Stunned</h2>
        <p>
          For years, the consensus among veteran developers was that visual scripting like
          Blueprints was ideal for &ldquo;prototyping&rdquo; but unsuitable for shipping
          high-performance, complex games at scale. Clair Obscur has dismantled that argument
          on two fronts simultaneously.
        </p>
        <p>
          <strong>Performance:</strong> The game delivers a <strong>30+ hour epic</strong> with
          visuals that competed directly with Death Stranding 2 and Ghost of Yōtei — both
          developed by studios with many times the headcount and budget. The
          &ldquo;performance lag&rdquo; myth associated with Blueprint scripting does not
          appear in the shipped product.
        </p>
        <p>
          <strong>Accessibility:</strong> The talk is being hailed across the{' '}
          <Link href="/events/gdc-2026" className="text-purple-600 font-medium hover:underline">
            GDC 2026
          </Link>{' '}
          floor as a &ldquo;liberation&rdquo; for indie developers. A budget under $10 million
          and a team of fewer than 40 people yielding not just a viable commercial product but
          the <em>most decorated game in industry history</em> represents a fundamental
          recalibration of what small studios can achieve when they fully commit to engine-native
          tooling.
        </p>

        <HighlightBox type="stat" color="blue">
          <strong>The Efficiency Case:</strong> At under $10M budget and 4 programmers,
          Clair Obscur: Expedition 33 achieved a cost-per-GOTY-award ratio that no AAA studio
          has ever approached. Elden Ring&apos;s 429 awards came from a FromSoftware production
          reportedly valued at over $100M. The gap in resource efficiency is unprecedented.
        </HighlightBox>

        {/* The AI Asterisk */}
        <h2>The AI Asterisk</h2>
        <p>
          The success hasn&apos;t been without friction. The game was recently{' '}
          <strong>stripped of two wins from the Indie Game Awards</strong> following controversy
          over its alleged use of generative AI in certain background assets. While Sandfall has
          integrated AI for efficiency, the studio maintains that the &ldquo;soul&rdquo; of the
          game — its art direction, narrative, character performances, and music — is entirely
          human-led.
        </p>
        <p>
          The controversy reflects a broader industry tension playing out prominently at{' '}
          <Link href="/events/gdc-2026" className="text-purple-600 font-medium hover:underline">
            GDC 2026
          </Link>{' '}
          this week: as generative AI becomes a production tool of convenience, award bodies,
          players, and fellow developers are still negotiating what constitutes acceptable use.
          The Indie Game Awards&apos; decision to strip wins signals at least one corner of the
          awards ecosystem drawing a clear line.
        </p>

        {/* GDC Context */}
        <h2>GDC 2026 Context</h2>
        <p>
          The Sandfall session was one of the most-attended programming talks at the{' '}
          <Link href="/events/gdc-2026" className="text-purple-600 font-medium hover:underline">
            Game Developers Conference 2026
          </Link>
          , running March 17–21 at the Moscone Center in San Francisco. The GDC Awards ceremony
          — where Clair Obscur leads with 8 nominations — takes place on{' '}
          <strong>Friday, March 21</strong>. For full conference coverage, including the Valve
          session on{' '}
          <Link
            href="/events/gdc-2026/valve-steam-machine-steam-frame-compatibility-gdc-2026"
            className="text-purple-600 font-medium hover:underline"
          >
            Steam Machine and Steam Frame compatibility standards
          </Link>
          , see ObjectWire&apos;s{' '}
          <Link href="/events/gdc-2026" className="text-purple-600 font-medium hover:underline">
            GDC 2026 hub
          </Link>
          .
        </p>

        {/* Related links grid */}
        <div className="grid md:grid-cols-2 gap-4 my-6">
          {[
            {
              href: '/events/gdc-2026',
              title: 'GDC 2026 — Full Coverage',
              desc: 'All sessions, awards, announcements, and analysis from the Game Developers Conference 2026 in San Francisco.',
              emoji: '🎮',
            },
            {
              href: '/events/gdc-2026/valve-steam-machine-steam-frame-compatibility-gdc-2026',
              title: 'Valve at GDC 2026 — Steam Machine & Steam Frame',
              desc: 'Valve outlined compatibility standards and 2026 launch targets for Steam Machine and Steam Frame VR at a GDC session attended by 450 developers.',
              emoji: '🖥️',
            },
            {
              href: '/video-games',
              title: 'ObjectWire Video Games Hub',
              desc: 'Full coverage of gaming news, releases, reviews, and industry trends.',
              emoji: '🕹️',
            },
            {
              href: '/entertainment/news/fortnite-moves-into-movies',
              title: 'Unreal Engine in Hollywood — 153 Productions in 2025',
              desc: 'The same engine powering Clair Obscur now runs virtual production stages at ILM, Netflix, and Warner Bros.',
              emoji: '🎬',
            },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="block border border-gray-200 rounded-xl p-4 hover:border-violet-400 hover:bg-violet-50 transition-colors group"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">{card.emoji}</span>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-violet-700 text-sm mb-1">
                    {card.title}
                  </div>
                  <div className="text-xs text-gray-500 leading-relaxed">{card.desc}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <HighlightBox type="quote" color="purple">
          When a $10 million budget and four programmers beat the entire AAA industry to become
          the most awarded game in history, the only question left is what the other 99% of
          the budget was buying.
        </HighlightBox>

      </NewsArticle>
    </SEOWrapper>
  );
}
