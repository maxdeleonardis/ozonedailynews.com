import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import { VideoSchema } from '@/components/VideoSchema';
import NewsArticle, { HighlightBox, Timeline, TagsSection, RelatedStories } from '@/components/NewsArticle';

const SLUG = '/youtube/sidemen/ksi/dagenham-redbridge';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/entertainment/ksi%20buys%20club.PNG';

export const metadata: Metadata = {
  title:
    'KSI Becomes Co-Owner of Dagenham & Redbridge FC — Vows to Take Club to Premier League | ObjectWire',
  description:
    'KSI (JJ Olatunji) acquired a 20% stake in Dagenham & Redbridge FC on March 3, 2026, becoming co-owner of the National League South club. The Sidemen founder vowed to take the Daggers to the Premier League, calling it a full-circle moment referencing his Race to Division One YouTube series.',
  keywords: [
    'KSI Dagenham Redbridge co-owner',
    'KSI buys football club 2026',
    'Dagenham Redbridge new owner',
    'KSI Premier League vow',
    'Sidemen football club',
    'JJ Olatunji Dagenham Redbridge',
    'Happy Fan Group Dagenham',
    'Andy Carroll Dagenham Redbridge',
    'KSI Race to Division One',
    'National League South ownership',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'KSI Becomes Co-Owner of Dagenham & Redbridge FC — Vows Premier League Push',
    description:
      'KSI acquired a 20% stake in Dagenham & Redbridge FC on March 3, 2026. The YouTube star vowed to take the sixth-tier club to the Premier League, calling it a full-circle moment.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-03T14:00:00Z',
    modifiedTime: '2026-03-03T14:00:00Z',
    section: 'YouTube',
    tags: [
      'KSI', 'Dagenham & Redbridge', 'Sidemen', 'Football', 'Non-League Football',
      'YouTube', 'Premier League', 'Andy Carroll', 'Happy Fan Group',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KSI Becomes Co-Owner of Dagenham & Redbridge FC',
    description:
      'The Sidemen founder acquired a 20% stake in sixth-tier Dagenham & Redbridge and vowed to take them to the Premier League.',
    images: [IMAGE_URL],
  },
};

export default function KSIDagenhamRedbridgePage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="KSI Becomes Co-Owner of Dagenham & Redbridge FC — Vows to Take Club to Premier League"
        description="KSI (JJ Olatunji) acquired a 20% stake in Dagenham & Redbridge FC on March 3, 2026, becoming co-owner of the National League South club. The Sidemen founder vowed to take the Daggers to the Premier League."
        author="ObjectWire Sports Desk"
        authorUrl="https://www.objectwire.org/team"
        publishedTime="2026-03-03T14:00:00Z"
        modifiedTime="2026-03-03T14:00:00Z"
        imageUrl={IMAGE_URL}
        articleUrl={ARTICLE_URL}
        section="YouTube"
        keywords={[
          'KSI Dagenham Redbridge owner 2026',
          'KSI buys football club',
          'Dagenham Redbridge new ownership',
          'Sidemen football',
          'Andy Carroll Dagenham',
        ]}
      />

      <VideoSchema
        videoId="4UbskAuKQbs"
        name="KSI Announces Dagenham & Redbridge FC Co-Ownership"
        description="KSI (JJ Olatunji) announces his acquisition of a 20% stake in Dagenham & Redbridge FC, vowing to take the club to the Premier League."
        uploadDate="2026-03-03T14:00:00Z"
      />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb
            items={[
              { name: 'Home', item: '/' },
              { name: 'YouTube', item: '/youtube' },
              { name: 'Sidemen', item: '/youtube/sidemen' },
              { name: 'KSI', item: '/youtube/sidemen/ksi' },
              { name: 'Dagenham & Redbridge', item: SLUG },
            ]}
          />
        </div>
      </div>

      <NewsArticle
        title="KSI Becomes Co-Owner of Dagenham & Redbridge FC — Vows to Take Sixth-Tier Club to the Premier League"
        subtitle="The Sidemen founder acquired a 20% stake in the National League South club on March 3, 2026, calling the move a &lsquo;full-circle moment&rsquo; referencing his Race to Division One FIFA series. Former Premier League striker Andy Carroll also joined as a shareholder five days earlier."
        category="YouTube"
        categoryColor="red"
        topicTag="sports"
        publishDate="March 3, 2026"
        readTime="6 min read"
        trending
        author={{
          name: 'ObjectWire Sports Desk',
          role: 'Sports Reporter',
        }}
        thumbnail={{
          src: '/entertainment/ksi buys club.PNG',
          alt: 'KSI announced as co-owner of Dagenham & Redbridge FC — March 3, 2026',
        }}
        tags={[
          'KSI', 'Dagenham & Redbridge', 'Sidemen', 'Football', 'Non-League Football',
          'YouTube', 'Premier League', 'Andy Carroll', 'Happy Fan Group',
          'National League South', 'JJ Olatunji',
        ]}
      >

        {/* YouTube Embed */}
        <div className="not-prose my-6">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/4UbskAuKQbs"
              title="KSI Announces Dagenham & Redbridge FC Co-Ownership"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center italic">
            KSI announces his co-ownership of Dagenham &amp; Redbridge FC. Published March 3, 2026.
          </p>
        </div>

        {/* Lede */}
        <p>
          <strong>KSI</strong> (real name <strong>Olajide &ldquo;JJ&rdquo; Olatunji</strong>) confirmed on{' '}
          <strong>March 3, 2026</strong>, that he has acquired a <strong>20% stake</strong> in{' '}
          <strong>Dagenham &amp; Redbridge FC</strong>, a club currently competing in the{' '}
          <strong>National League South</strong> — the sixth tier of English football. The 32-year-old{' '}
          <Link href="/youtube/sidemen" className="text-red-600 font-medium hover:underline">Sidemen</Link>{' '}
          founder announced the deal in a YouTube video, declaring his intention to take the Daggers{' '}
          &ldquo;all the way to the Premier League.&rdquo;
        </p>
        <p>
          KSI described the acquisition as a <strong>&ldquo;full-circle moment,&rdquo;</strong>{' '}
          referencing his popular FIFA YouTube series <em>Race to Division One</em>, which helped
          build his early audience. &ldquo;I&apos;ve always dreamed of owning a football club,&rdquo;
          KSI said. &ldquo;Now I get to do it for real — and Dagenham is the perfect place to start.&rdquo;
        </p>

        <HighlightBox type="key-point" color="orange">
          <strong>At a Glance:</strong> KSI acquired a 20% stake in Dagenham &amp; Redbridge FC
          &bull; Announced March 3, 2026 &bull; Club competes in National League South (6th tier)
          &bull; KSI vows to take the Daggers to the Premier League &bull; Andy Carroll became
          shareholder February 28, 2026 &bull; First match as owner: Saturday vs. Dorking Wanderers
          at Victoria Road.
        </HighlightBox>

        {/* The Deal */}
        <h2>The Ownership Structure</h2>
        <p>
          The deal is part of a broader takeover by <strong>Happy Fan Group Ltd</strong>, a
          U.S.-based investment vehicle led by <strong>John Grabowski</strong>. The consortium
          installed former professional footballer <strong>Anwar Uddin</strong> as chairman
          following the conclusion of the takeover. KSI&apos;s 20% holding makes him the most
          prominent individual investor in the group.
        </p>
        <p>
          Former{' '}
          <strong>Premier League striker Andy Carroll</strong> — who plays for Dagenham &amp;
          Redbridge in the current squad — also became a shareholder on{' '}
          <strong>February 28, 2026</strong>, five days before KSI&apos;s announcement. Carroll,
          37, joined the club as a player in 2024 after spells at Newcastle United, Liverpool,
          and West Ham United, and has now taken an ownership stake while continuing to play.
        </p>

        {/* Club Background */}
        <h2>About Dagenham &amp; Redbridge FC</h2>
        <p>
          Dagenham &amp; Redbridge is a professional football club based in{' '}
          <strong>Dagenham, East London</strong>, playing home matches at{' '}
          <strong>Victoria Road</strong> (capacity: 6,078). The club was formed in 1992 through
          the merger of Dagenham FC and Redbridge Forest FC. The Daggers spent four seasons in
          the Football League (League Two) between 2007 and 2011, reaching a high point of 7th
          in League Two in their debut season.
        </p>
        <p>
          The club was <strong>relegated to the National League South</strong> at the end of the
          2024–25 season, dropping to the sixth tier of English football for the first time since
          2000. The relegation created an opportunity for new ownership to come in at a lower
          valuation, with the Happy Fan Group completing its takeover during the 2025–26 campaign.
        </p>

        {/* Timeline */}
        <h2>Timeline of Events</h2>

        <Timeline
          events={[
            {
              time: '2024–25 Season End',
              title: 'Relegation to National League South',
              description:
                'Dagenham & Redbridge relegated from the National League to the National League South — the sixth tier of English football.',
            },
            {
              time: '2025',
              title: 'Happy Fan Group Takeover',
              description:
                'U.S.-based Happy Fan Group Ltd, led by John Grabowski, completes the takeover of the club. Anwar Uddin appointed as chairman.',
            },
            {
              time: 'February 28, 2026',
              title: 'Andy Carroll Becomes Shareholder',
              description:
                'Former Liverpool and West Ham striker Andy Carroll, currently playing for Dagenham, becomes a shareholder in the club.',
            },
            {
              time: 'March 3, 2026',
              title: 'KSI Announces 20% Stake',
              description:
                'KSI announces his acquisition of a 20% stake via YouTube video, vowing to take the Daggers to the Premier League.',
            },
            {
              time: 'This Saturday',
              title: 'First Match as Owner',
              description:
                'KSI\'s first match as co-owner: Dagenham & Redbridge vs. Dorking Wanderers at Victoria Road.',
            },
          ]}
        />

        {/* The Premier League Pledge */}
        <h2>The Premier League Pledge</h2>
        <p>
          KSI&apos;s stated ambition to reach the Premier League would require the club to earn{' '}
          <strong>six promotions</strong> from its current position in the National League South.
          The path would be:
        </p>
        <ol>
          <li><strong>National League South → National League</strong> (Tier 5)</li>
          <li><strong>National League → League Two</strong> (Tier 4)</li>
          <li><strong>League Two → League One</strong> (Tier 3)</li>
          <li><strong>League One → Championship</strong> (Tier 2)</li>
          <li><strong>Championship → Premier League</strong> (Tier 1)</li>
        </ol>
        <p>
          While ambitious, there is recent precedent for rapid climbs through the English pyramid.{' '}
          <strong>Wrexham AFC</strong>, co-owned by Hollywood actors Ryan Reynolds and Rob McElhenney
          since 2020, earned back-to-back promotions from the National League to League One. KSI
          acknowledged the Wrexham comparison: &ldquo;What Ryan and Rob have done is incredible.
          But I&apos;m not here to copy anyone — I want to write our own story.&rdquo;
        </p>

        <HighlightBox type="quote" color="orange">
          &ldquo;I&apos;ve always dreamed of owning a football club. Now I get to do it for
          real — and Dagenham is the perfect place to start. We&apos;re going all the way to the
          Premier League.&rdquo; — <strong>KSI, March 3, 2026</strong>
        </HighlightBox>

        {/* Content Creator Club Ownership Trend */}
        <h2>Content Creators in Football — A Growing Trend</h2>
        <p>
          KSI joins a growing wave of high-profile digital and entertainment figures investing in
          lower-league English football clubs:
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm text-sm">
            <thead>
              <tr className="bg-red-600 text-white">
                <th className="text-left px-5 py-3 font-semibold">Owner(s)</th>
                <th className="text-left px-5 py-3 font-semibold">Club</th>
                <th className="text-left px-5 py-3 font-semibold">Tier at Purchase</th>
                <th className="text-left px-5 py-3 font-semibold">Current Tier</th>
              </tr>
            </thead>
            <tbody>
              {[
                { owner: 'Ryan Reynolds & Rob McElhenney', club: 'Wrexham AFC', tier: '5 (National League)', current: '3 (League One)' },
                { owner: 'KSI (JJ Olatunji)', club: 'Dagenham & Redbridge', tier: '6 (National League South)', current: '6 (National League South)' },
                { owner: 'Andy Carroll (player-owner)', club: 'Dagenham & Redbridge', tier: '6 (National League South)', current: '6 (National League South)' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-5 py-3 font-medium text-gray-900">{row.owner}</td>
                  <td className="px-5 py-3 text-gray-700">{row.club}</td>
                  <td className="px-5 py-3 text-gray-600">{row.tier}</td>
                  <td className="px-5 py-3 text-gray-600">{row.current}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* What's Next */}
        <h2>What Comes Next</h2>
        <p>
          KSI confirmed he will attend <strong>Saturday&apos;s match against Dorking Wanderers</strong>{' '}
          at Victoria Road — his first game as co-owner. He indicated plans to leverage his{' '}
          <strong>24 million YouTube subscribers</strong> and social media reach to boost the
          club&apos;s global visibility, merchandise sales, and matchday attendance.
        </p>
        <p>
          The broader question is whether KSI and the Happy Fan Group can replicate the Wrexham
          model: combining celebrity attention with sustained financial investment to turn a
          non-league club into a serious footballing project. With Andy Carroll providing on-pitch
          experience and KSI providing off-pitch audience reach, the ownership group is structured
          to attack both fronts simultaneously.
        </p>

        <p>
          For more on KSI and the Sidemen, visit the{' '}
          <Link href="/youtube/sidemen/ksi" className="text-red-600 font-medium hover:underline">
            KSI profile page
          </Link>{' '}
          and the{' '}
          <Link href="/youtube/sidemen" className="text-red-600 font-medium hover:underline">
            Sidemen coverage hub
          </Link>
          .
        </p>
      </NewsArticle>
    </SEOWrapper>
  );
}
