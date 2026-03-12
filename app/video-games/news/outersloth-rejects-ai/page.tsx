import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox } from '@/components/NewsArticle';

const SLUG = '/video-games/news/outersloth-rejects-ai';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title:
    'Outersloth Rejects 100% of Generative AI Pitches — GDC Festival of Gaming 2026 | ObjectWire',
  description:
    'Outersloth, the indie fund founded by Among Us creator Innersloth, confirmed at GDC 2026 it has rejected 100% of generative AI submissions. Of ~3,400 pitches received, 30% of the rejected pile were AI-classified. The fund also published its full contract publicly.',
  keywords: [
    'Outersloth rejects generative AI pitches',
    'Outersloth GDC 2026 Festival of Gaming',
    'Innersloth Among Us indie fund',
    'Outersloth Victoria Tran Forest Willard',
    'Outersloth 3400 submissions rejection rate',
    'indie game fund generative AI policy',
    'Outersloth contract public developer transparency',
    'Outersloth funded games Venba Unpacking',
    'GDC 2026 indie gaming AI controversy',
    'Outersloth $19 million 24 games',
    'indie game fund AI rejection 100 percent',
    'Outersloth soul criteria game selection',
    'Among Us profits indie reinvestment fund',
    'GDC Festival of Gaming 2026 indie session',
  ],
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: 'Outersloth Rejects 100% of Generative AI Pitches at GDC 2026',
    description:
      '"I really like a game that has soul. I don\'t know how to graph that... but we know it when we see it." Outersloth has rejected every single GenAI pitch it has received, out of ~3,400 total submissions.',
    type: 'article',
    url: CANONICAL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-12T00:00:00Z',
    modifiedTime: '2026-03-12T00:00:00Z',
    section: 'Video Games',
    tags: [
      'Outersloth',
      'Innersloth',
      'Among Us',
      'Generative AI',
      'Indie Games',
      'GDC 2026',
      'Video Games',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Outersloth Has Rejected 100% of Every AI Game Pitch It Has Ever Received',
    description:
      '3,400 submissions. 50% rejected outright. 30% of those were GenAI. 0% of AI pitches funded. Victoria Tran: "I really like a game that has soul."',
  },
};

export default function OuterslothRejectsAIPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Outersloth Rejects 100% of Generative AI Pitches at GDC Festival of Gaming 2026"
        description="Outersloth, the indie fund founded by Innersloth of Among Us, confirmed it has rejected every single generative AI pitch it has received — roughly 30% of all rejected submissions. The fund also published its full contract publicly at GDC 2026."
        author="ObjectWire Gaming Desk"
        authorUrl="https://www.objectwire.org/team"
        publishedTime="2026-03-12T00:00:00Z"
        modifiedTime="2026-03-12T00:00:00Z"
        articleUrl={CANONICAL}
        section="Video Games"
        keywords={[
          'Outersloth GDC 2026',
          'generative AI indie game rejection',
          'Outersloth soul criteria',
          'Innersloth indie fund',
          'Outersloth contract public',
        ]}
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'Video Games', item: '/video-games' },
              { name: 'News', item: '/video-games/news' },
              { name: 'Outersloth Rejects AI', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="Outersloth Rejects 100% of Generative AI Pitches at GDC Festival of Gaming"
        subtitle="The indie fund backed by Among Us profits has processed ~3,400 submissions since 2022. Roughly 30% of rejected pitches were classified as generative AI submissions. Not one has been funded."
        category="GDC 2026"
        categoryColor="green"
        topicTag="gaming"
        publishDate="March 12, 2026"
        readTime="5 min read"
        breaking={false}
        trending
        author={{
          name: 'ObjectWire Gaming Desk',
          role: 'Video Games & Technology',
          authorSlug: 'team',
        }}
        tags={[
          'Outersloth',
          'Innersloth',
          'Among Us',
          'Generative AI',
          'Indie Games',
          'GDC 2026',
          'Video Games',
          'Indie Fund',
        ]}
        url={SLUG}
      >
        {/* Lede */}
        <p>
          <strong>SAN FRANCISCO, CA</strong> — In a standout session at the{' '}
          <Link href="/events/gdc-2026" className="text-green-700 font-medium hover:underline">
            GDC Festival of Gaming
          </Link>{' '}
          on Monday, March 9, 2026,{' '}
          <strong>Outersloth</strong> — the indie game fund founded by{' '}
          <em>Among Us</em> creator <strong>Innersloth</strong> — sent a clear message to the
          industry: &ldquo;soul&rdquo; cannot be generated.
        </p>
        <p>
          Communications Director <strong>Victoria Tran</strong> and CEO{' '}
          <strong>Forest Willard</strong> shared the stage to reflect on four years of funding,
          revealing a striking rejection rate for projects leaning on generative AI. Since the
          fund&apos;s inception in 2022, Outersloth has received roughly{' '}
          <strong>3,400 pitches</strong> — and has funded <strong>0% of the ones that
          relied on generative AI</strong>.
        </p>

        <HighlightBox type="key-point" color="green">
          <strong>The Numbers:</strong> ~3,400 total pitches &bull; ~50% (1,700) rejected
          immediately &bull; ~30% of the rejected pile were GenAI submissions &bull;
          100% of GenAI pitches declined &bull; $19,161,040 invested across 24 funded games.
        </HighlightBox>

        {/* The Filter */}
        <h2>No Room for the Robots</h2>
        <p>
          Outersloth&apos;s filter is notoriously tight even before AI enters the equation.
          Of the approximately 3,400 submissions received as of February 2026, roughly{' '}
          <strong>50% — or about 1,700 pitches</strong> — were rejected immediately at the
          first review stage. Of those rejected, approximately <strong>30% were
          classified as GenAI submissions</strong>: games where generative AI was not merely
          a background production tool but a core part of the pitch, the art pipeline, or
          the gameplay concept itself.
        </p>
        <p>
          Tran&apos;s criteria for what passes that filter is deliberately difficult to
          operationalize. &ldquo;I really like a game that has soul,&rdquo; she told the{' '}
          <Link href="/events/gdc-2026" className="text-green-700 font-medium hover:underline">
            GDC 2026
          </Link>{' '}
          audience. &ldquo;I don&apos;t know how to graph that... but we know it when we
          see it.&rdquo;
        </p>

        <HighlightBox type="quote" color="green">
          &ldquo;I really like a game that has soul. I don&apos;t know how to graph
          that... but we know it when we see it.&rdquo;
          <div className="text-sm mt-3 text-gray-600 font-normal">
            — Victoria Tran, Communications Director, Outersloth
          </div>
        </HighlightBox>

        {/* Submission Funnel */}
        <h2>The Submission Funnel</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm text-sm">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="text-left px-5 py-3 font-semibold">Stage</th>
                <th className="text-center px-5 py-3 font-semibold">Count</th>
                <th className="text-left px-5 py-3 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  stage: 'Total submissions received',
                  count: '~3,400',
                  note: 'Since fund inception in 2022 through February 2026',
                },
                {
                  stage: 'Immediately rejected (first pass)',
                  count: '~1,700 (50%)',
                  note: 'Does not advance past initial review',
                },
                {
                  stage: 'GenAI-classified among rejected',
                  count: '~510 (30% of rejected)',
                  note: '100% of these declined — no exceptions',
                },
                {
                  stage: 'Developers who secured a deal',
                  count: '~48 (~1.4%)',
                  note: 'Slightly above industry standard; still highly competitive',
                },
                {
                  stage: 'Games fully funded',
                  count: '24',
                  note: '$19,161,040 total allocated',
                },
              ].map((row, i) => (
                <tr key={row.stage} className={i % 2 === 0 ? 'bg-white' : 'bg-green-50'}>
                  <td className="px-5 py-3 font-medium text-gray-900">{row.stage}</td>
                  <td className="px-5 py-3 text-center font-black text-green-700">{row.count}</td>
                  <td className="px-5 py-3 text-gray-600 text-xs">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          The <strong>1.4% deal rate</strong> Tran cited is slightly better than the broader
          games publishing industry, where unsolicited pitch acceptance rates hover near 1%
          or below at most mid-tier publishers — but it still means 98.6% of developers who
          approach Outersloth leave empty-handed.
        </p>

        {/* Among Us Wealth */}
        <h2>Sharing the <em>Among Us</em> Wealth</h2>
        <p>
          Since its quiet inception in 2022, Outersloth has become one of the most
          developer-friendly funding vehicles in the indie scene, reinvesting the massive
          profits from <em>Among Us</em> — the 2018 social deduction game that became a
          global phenomenon during the pandemic — back into original creative ventures with
          no corporate overhead.
        </p>
        <p>
          <strong>Innersloth&apos;s</strong> flagship title has generated hundreds of
          millions of dollars in revenue and continues earning through cosmetics and seasonal
          updates. Rather than reinvesting into a second large-scale in-house production,
          the team chose a distributed model: fund dozens of small games with the same
          creative ambition <em>Among Us</em> embodied.
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-6">
          {[
            {
              value: '$19.16M',
              label: 'Total invested',
              note: 'Across 24 funded games since 2022',
              color: 'border-green-400 bg-green-50',
              textColor: 'text-green-700',
            },
            {
              value: '24',
              label: 'Games funded',
              note: 'Including Venba, Unpacking, and Summer Game Fest 2025 titles',
              color: 'border-emerald-400 bg-emerald-50',
              textColor: 'text-emerald-700',
            },
            {
              value: '1.4%',
              label: 'Deal rate',
              note: 'Of developers who pitch, slightly above industry standard',
              color: 'border-teal-400 bg-teal-50',
              textColor: 'text-teal-700',
            },
          ].map((item) => (
            <div key={item.label} className={`border-2 rounded-xl p-5 ${item.color}`}>
              <div className={`text-3xl font-black mb-1 ${item.textColor}`}>{item.value}</div>
              <div className="font-semibold text-gray-800 text-sm mb-1">{item.label}</div>
              <div className="text-xs text-gray-500">{item.note}</div>
            </div>
          ))}
        </div>

        <p>
          The portfolio of funded titles reads like a recent highlight reel of indie
          breakout success:{' '}
          <strong>Venba</strong> (2023 narrative cooking game, widely praised for its
          immigrant family storytelling),{' '}
          <strong>Unpacking</strong> (the BAFTA-winning zen puzzle game about moving house),
          and multiple titles featured at Summer Game Fest 2025.
        </p>

        {/* Contract Goes Public */}
        <h2>The &ldquo;Outersloth Contract&rdquo; Goes Public</h2>
        <p>
          In a move toward radical transparency, Outersloth officially published its full
          standard contract and terms on <strong>March 9, 2026</strong> — the same day as
          the GDC session. The decision was framed directly as a challenge to what Tran
          and Willard described as &ldquo;predatory&rdquo; publishing practices across
          the broader industry.
        </p>
        <p>
          By making its contracts public, Outersloth is setting a developer-friendly
          baseline that other publishers and funds can be measured against — and giving
          developers a reference point when negotiating with funds that have not disclosed
          their terms. The move follows a growing industry push for publishing contract
          transparency that accelerated after several high-profile disputes between
          developers and mid-tier publishers in 2024–2025.
        </p>

        <HighlightBox type="stat" color="green">
          <strong>Why This Matters:</strong> Most indie publishing contracts are never made
          public. Developers — especially first-timers — have no baseline for what
          &ldquo;normal&rdquo; looks like. Outersloth&apos;s public contract gives the
          entire ecosystem a documented reference point for revenue splits, IP ownership,
          reversion rights, and exit clauses.
        </HighlightBox>

        {/* The AI Question */}
        <h2>The Broader AI Tension at GDC 2026</h2>
        <p>
          Outersloth&apos;s blanket rejection of AI pitches arrives in a week where
          generative AI&apos;s role in game development is the dominant conversation at{' '}
          <Link href="/events/gdc-2026" className="text-green-700 font-medium hover:underline">
            GDC 2026
          </Link>
          . Earlier in the week,{' '}
          <Link
            href="/video-games/game-of-the-year-2026-Clair-Obscur"
            className="text-green-700 font-medium hover:underline"
          >
            Sandfall Interactive revealed that Clair Obscur: Expedition 33
          </Link>{' '}
          — the most awarded game in history — used AI for background asset efficiency,
          yet was stripped of two Indie Game Awards wins over exactly that controversy. The
          Indie Game Awards&apos; decision and Outersloth&apos;s funding policy are now
          the two clearest institutional signals in the industry that generative AI usage
          carries reputational and competitive cost, not just ethical scrutiny.
        </p>
        <p>
          The distinction Tran draws is not between &ldquo;AI was used&rdquo; and
          &ldquo;AI was not used&rdquo; — it is between games where a human creative
          vision drives every meaningful decision and games where AI is the substitute
          for that vision. &ldquo;Soul,&rdquo; in Outersloth&apos;s framework, is not
          a vibe. It is a functional filter.
        </p>

        {/* Related */}
        <div className="grid md:grid-cols-2 gap-4 my-6">
          {[
            {
              href: '/events/gdc-2026',
              title: 'GDC 2026 — Full Coverage',
              desc: 'All sessions, awards, and announcements from the Game Developers Conference 2026 in San Francisco.',
              emoji: '🎮',
            },
            {
              href: '/video-games/game-of-the-year-2026-Clair-Obscur',
              title: 'Clair Obscur: Built by 4 Programmers — Most Awarded Game Ever',
              desc: '95% Blueprint scripting, under $10M, 436 GOTY wins. The AI controversy that cost Sandfall two awards.',
              emoji: '🏆',
            },
            {
              href: '/video-games',
              title: 'ObjectWire Video Games Hub',
              desc: 'Full gaming coverage — releases, news, esports, and industry analysis.',
              emoji: '🕹️',
            },
            {
              href: '/events/gdc-2026/valve-steam-machine-steam-frame-compatibility-gdc-2026',
              title: 'Valve at GDC 2026 — Steam Machine & Steam Frame',
              desc: 'Valve outlined compatibility standards and launch targets for its 2026 hardware lineup.',
              emoji: '🖥️',
            },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="block border border-gray-200 rounded-xl p-4 hover:border-green-400 hover:bg-green-50 transition-colors group"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">{card.emoji}</span>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-green-700 text-sm mb-1">
                    {card.title}
                  </div>
                  <div className="text-xs text-gray-500 leading-relaxed">{card.desc}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <HighlightBox type="quote" color="green">
          When a fund built on <em>Among Us</em> profits rejects 100% of AI pitches and
          publishes its contracts in public, the only thing left to generate is the
          pressure on every other publisher to explain why they haven&apos;t done the same.
        </HighlightBox>

      </NewsArticle>
    </SEOWrapper>
  );
}
