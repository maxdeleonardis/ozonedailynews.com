import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';
import { NewsArticleSchema } from '@/components/articles/NewsArticleSchema';
import { SourcesInterlink } from '@/components/articles/SourcesInterlink';

export const revalidate = 86400;

const SLUG = '/creator/bryson-dechambeau';
const ARTICLE_URL = `https://www.owire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Bryson DeChambeau | 2-Time US Open Champion, LIV Golf Star',
  description:
    'Full profile of Bryson DeChambeau: 2-time US Open champion (2020, 2024), LIV Golf star, physics-driven swing analyst, and YouTube creator with 1M+ subscribers.',
  keywords: [
    'Bryson DeChambeau',
    'Bryson DeChambeau LIV Golf',
    'Bryson DeChambeau US Open',
    'Bryson DeChambeau 2024',
    'Bryson DeChambeau 2026',
    'The Mad Scientist golf',
    'Bryson DeChambeau body transformation',
    'Bryson DeChambeau YouTube',
    'Bryson DeChambeau Steph Curry',
    'Bryson DeChambeau single length irons',
    'LIV Golf 2026',
    'Bryson DeChambeau net worth',
    'Bryson DeChambeau age',
    'Bryson DeChambeau career wins',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Bryson DeChambeau | 2-Time US Open Champion & LIV Golf Star',
    description:
      'From NCAA phenom to 2-time US Open champion and LIV Golf icon. Physics-based swing, 40-lb body transformation, 320-yard drives, and a growing YouTube presence.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Editorial'],
    publishedTime: '2026-04-15T10:00:00Z',
    modifiedTime: '2026-05-06T10:00:00Z',
    section: 'Creator',
    tags: ['Bryson DeChambeau', 'LIV Golf', 'US Open', 'Golf', 'Sports'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bryson DeChambeau | 2-Time US Open Champion, LIV Golf Star',
    description:
      'Career, body transformation, LIV Golf move, YouTube content, and the Steph Curry challenge. Full profile on OzoneNews.',
  },
};

export default function BrysonDeChambauPage() {
  return (
    <>
      <NewsArticleSchema
        title="Bryson DeChambeau | 2-Time US Open Champion, LIV Golf Star"
        description="Full profile of Bryson DeChambeau: 2-time US Open champion (2020, 2024), LIV Golf Crushers GC, physics-based swing, YouTube creator with 1M+ subscribers."
        author="OzoneNews Editorial"
        publishedTime="2026-04-15T10:00:00Z"
        modifiedTime="2026-05-06T10:00:00Z"
        articleUrl={ARTICLE_URL}
        section="Creator"
        keywords={['Bryson DeChambeau', 'LIV Golf', 'US Open champion', 'golf', '2-time US Open']}
      />
      <NewsArticle
      title="Bryson DeChambeau | 2-Time US Open Champion, LIV Golf Star"
      subtitle="The Mad Scientist of golf: physics degree, 40-lb bulk, and two Majors"
      category="Creator"
      categoryColor="blue"
      topicTag="sports"
      publishDate="April 15, 2026"
      readTime="7 min read"
      author={{ name: 'OzoneNews Editorial', role: 'Sports Desk' }}
      tags={['Bryson DeChambeau', 'LIV Golf', 'US Open', 'Golf', 'Sports']}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Creator', item: '/creator' },
        { name: 'Bryson DeChambeau', item: SLUG },
      ]}
      slug="creator-bryson-dechambeau"
      url={SLUG}
    >
      <p>
        <strong>Bryson DeChambeau</strong> is an American professional golfer born on September 10, 1993, in Modesto, California. He is the only player in golf history to win the NCAA individual championship, the US Amateur, and the US Open within a 12-month span. Known as <em>The Mad Scientist</em> for his physics-based approach to the game, DeChambeau holds a degree in physics from Southern Methodist University and applies biomechanical and mathematical principles to every aspect of his swing, equipment, and course strategy.
      </p>
      <p>
        DeChambeau is a two-time US Open champion, capturing the title in 2020 at Winged Foot and again in 2024 at Pinehurst No. 2. He defected from the PGA Tour to{' '}
        <Link href="/creator" className="text-blue-600 hover:text-blue-800 underline">LIV Golf</Link>{' '}
        in 2022 and has since become one of the Saudi-backed league's most prominent ambassadors. His YouTube channel, which documents his golf experimentation and high-profile challenges, crossed 1 million subscribers in 2024.
      </p>

      <h2>Bryson DeChambeau Career | Wins, Majors, Statistics</h2>
      <p>
        DeChambeau turned professional in 2016 after a dominant college career at SMU. He won the NCAA Division I individual championship in 2015 and the US Amateur in 2015 as well, becoming just the fifth player ever to win both in the same year. He was named PGA Tour Rookie of the Year in 2017.
      </p>
      <p>
        His first PGA Tour victory came at the 2017 John Deere Classic. Between 2017 and 2022, he accumulated eight PGA Tour victories, including his first Major at the 2020 US Open at Winged Foot, where he overpowered the course with a strategy built entirely around distance, averaging 325 yards off the tee. The win was polarizing, with critics arguing it exposed course design vulnerabilities, and supporters calling it the most calculated Major victory in decades.
      </p>
      <p>
        DeChambeau joined LIV Golf in June 2022, one of the highest-profile departures from the PGA Tour alongside Phil Mickelson and Dustin Johnson. Under his LIV deal, he plays for Crushers GC. The move drew significant media attention given the scale of the guaranteed contracts, reportedly in the range of $100 million or more over multiple years.
      </p>

      <h2>2024 US Open at Pinehurst | Second Major Win</h2>
      <p>
        DeChambeau's second US Open title came at Pinehurst No. 2 in June 2024, defeating Rory McIlroy by one stroke in one of the most dramatic finishes in Major championship history. McIlroy missed a short par putt on the 72nd hole, handing DeChambeau the title. The victory was watched globally and cemented DeChambeau's legacy as a Major-winning elite even outside the PGA Tour structure.
      </p>
      <p>
        The win restarted the debate around LIV Golf player eligibility for the Official World Golf Ranking. DeChambeau's Pinehurst performance, achieved outside the OWGR-sanctioned framework that LIV operates under at times, added complexity to ongoing negotiations between the PGA Tour, LIV Golf, and the OWGR board.
      </p>

      <h2>Bryson DeChambeau Body Transformation | 40 Pounds in 6 Months</h2>
      <p>
        In 2020, DeChambeau underwent one of the most dramatic physical transformations in professional sports history. Over approximately six months during the COVID-19 PGA Tour shutdown, he added roughly 40 pounds of muscle, taking his weight from approximately 205 to 240 pounds through a disciplined program of heavy weightlifting and high-calorie eating, reportedly consuming 3,500 to 4,500 calories per day.
      </p>
      <p>
        The transformation was widely documented on social media and resulted in immediate increases in his driving distance. After the bulk, his average driving distance jumped from around 301 yards to over 320 yards, placing him among the longest hitters on tour. Critics questioned whether the additional weight would degrade his short game and longevity. Supporters credited the approach as a calculated biomechanical decision backed by years of studying the relationship between club head speed and distance.
      </p>
      <p>
        The transformation coincided directly with his 2020 US Open victory, lending it significant credibility as a performance-first decision rather than a cosmetic one.
      </p>

      <h2>Bryson DeChambeau YouTube | Content, Steph Curry Golf Challenge</h2>
      <p>
        Outside competitive golf, DeChambeau has built a YouTube presence documenting his analytical approach to the sport. His channel features swing analysis, club testing, experimental course play, and high-profile challenge videos. The most-viewed series involves celebrity golf challenges, most notably his ongoing work with NBA champion Steph Curry.
      </p>
      <p>
        The Bryson DeChambeau and Steph Curry golf series became a breakout format, drawing millions of views by pairing professional-level analytical commentary with Curry's natural athleticism and competitive personality. The videos are produced at a high level by golf content standards and helped DeChambeau establish a creator identity separate from his tournament career.
      </p>
      <p>
        His channel passed 1 million subscribers in 2024, making him one of the few active Major champions with a significant creator footprint. The content positions him alongside{' '}
        <Link href="/creator/mrbeast" className="text-blue-600 hover:text-blue-800 underline">other major creators</Link>{' '}
        who blend professional achievement with direct audience building.
      </p>

      <h2>Bryson DeChambeau LIV Golf 2026 | Crushers GC</h2>
      <p>
        As of 2026, DeChambeau remains one of LIV Golf's anchor players. He competes for Crushers GC and serves as a de facto spokesperson for the league's legitimacy argument, given that his 2024 US Open win came while he was a LIV player. He has been vocal about wanting LIV events to receive full OWGR points, a position that would significantly affect player rankings and future Major qualification pathways.
      </p>
      <p>
        His relationship with the PGA Tour remains formally suspended, as is the case for all LIV defectors. The proposed merger framework between the PGA Tour and LIV Golf, which was in negotiation as of 2025 and 2026, would potentially allow players like DeChambeau to compete in both structures, though no final agreement had been reached as of May 2026.
      </p>
      <p>
        For more creator profiles in golf and sports, see the{' '}
        <Link href="/creator" className="text-blue-600 hover:text-blue-800 underline">Creator hub</Link>{' '}
        or the{' '}
        <Link href="/golf" className="text-blue-600 hover:text-blue-800 underline">Golf hub</Link>.
      </p>

      <SourcesInterlink
        accentColor="blue"
        internalLinks={[
          { href: '/influencer', label: 'Influencer Hub', description: 'All creator profiles on OzoneNews' },
          { href: '/influencer/bryson-dechambeau/kalshi', label: 'Bryson x Kalshi Partnership', description: 'First official Kalshi athlete partner, $159K prediction market' },
          { href: '/influencer/mrbeast', label: 'MrBeast Profile', description: 'Most-subscribed solo YouTube creator' },
        ]}
      />
    </NewsArticle>
    </>
  );
}
