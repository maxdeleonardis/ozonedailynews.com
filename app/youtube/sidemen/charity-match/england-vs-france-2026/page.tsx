import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

export const dynamic = 'force-dynamic';

const SLUG = '/youtube/sidemen/charity-match/england-vs-france-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://www.objectwire.org/influncer/sdmn_charitymatch_26.webp';

export const metadata: Metadata = {
  title: 'Sidemen England vs France 2026 | Eleven All-Stars 2 Rumors',
  description: 'Sidemen England vs France charity match rumors: May 24, 2026 date, Rayan Cherki ringer report, Erling Haaland wildcard speculation, and full rumored lineups.',
  keywords: [
    'Sidemen England vs France 2026',
    'Eleven All-Stars 2',
    'Sidemen charity match France',
    'AmineMaTue charity match',
    'Rayan Cherki creator football',
    'Erling Haaland Sidemen',
    'KSI England France charity match',
    'Sidemen France match May 2026',
    'Squeezie charity match',
    'Inoxtag charity match',
    'Sidemen away match France',
    'Jynxzi England team 2026',
    'ChrisMD Sidemen France 2026',
    'creator football 2026',
    'Miniminter France match',
    'Sidemen charity match sequel',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Sidemen England vs France 2026 | Eleven All-Stars 2 Rumors',
    description: 'May 24, 2026 rumored date. Rayan Cherki ringer reports. Erling Haaland wildcard speculation. Full rumored squads for the Sidemen Away match in France.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Entertainment Desk'],
    publishedTime: '2026-04-28T12:00:00Z',
    modifiedTime: '2026-04-28T12:00:00Z',
    section: 'Entertainment',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Sidemen England vs France 2026 charity match' }],
    tags: ['Sidemen', 'KSI', 'Creator Football', 'Eleven All-Stars'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sidemen England vs France 2026 | May 24 Rumored',
    description: 'Rayan Cherki ringer rumors. Erling Haaland wildcard. AmineMaTue leading France. Full rumored lineups for Eleven All-Stars 2.',
    images: [OG_IMAGE],
  },
};

export default function SidemenEnglandVsFrance2026Page() {
  return (
    <NewsArticle
      title="Sidemen England vs France 2026 | Eleven All-Stars 2 Rumors"
      subtitle="May 24 date, Rayan Cherki ringer reports, and Erling Haaland wildcard speculation"
      category="Entertainment"
      categoryColor="red"
      topicTag="entertainment"
      publishDate="April 28, 2026"
      readTime="5 min read"
      author={{ name: 'ObjectWire Entertainment Desk', authorSlug: 'objectwire-entertainment-desk' }}
      tags={['Sidemen', 'KSI', 'Creator Football', 'Eleven All-Stars', 'AmineMaTue', 'Charity Match']}
      thumbnail={{ src: '/influncer/sdmn_charitymatch_26.webp', alt: 'Sidemen charity match 2026' }}
      slug="youtube-sidemen-charity-match-england-vs-france-2026"
      url={SLUG}
    >
      <div className="prose prose-lg max-w-none">

        {/* TikTok embed — floated right on desktop, stacked on mobile */}
        <div className="lg:float-right lg:ml-8 lg:mb-6 lg:w-80 w-full mb-6 clear-right not-prose">
          <div className="rounded-xl overflow-hidden shadow-lg bg-black">
            <iframe
              src="https://www.tiktok.com/embed/v2/7633151372741020951"
              width="100%"
              height="570"
              allowFullScreen
              allow="encrypted-media"
              style={{ border: 0, display: 'block' }}
              title="Sidemen England vs France 2026 TikTok"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            via <a href="https://www.tiktok.com/@samham/video/7633151372741020951" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">@samham on TikTok</a>
          </p>
        </div>

        <p>
          Buzz around a <strong>Sidemen England vs France</strong> charity match, often referred to as the <strong>Eleven All-Stars 2</strong>,
          is reaching a fever pitch across the creator football community. A rumored <strong>May 24, 2026</strong> date is circulating widely,
          and with the Sidemen just wrapping their sold-out Wembley match on April 18, the "Away" leg in France is shaping up as
          the direct sequel to the landmark{' '}
          <a href="https://www.youtube.com/watch?v=bOvxR6NHgcs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">2022 Stade Jean-Bouin showdown</a>.
          Here is the full breakdown of the rumors and potential lineups based on current chatter in the creator community.
        </p>

        <p>
          For context on where this all started, see our coverage of the{' '}
          <Link href="/youtube/sidemen/charity-match-results-2026" className="text-blue-600 hover:text-blue-800 underline">
            Sidemen Charity Match 2026 results
          </Link>{' '}
          and the{' '}
          <Link href="/youtube/sidemen/charity-match/2026-lineup-max-fosh-willne" className="text-blue-600 hover:text-blue-800 underline">
            full Wembley lineup confirmed ahead of April 18
          </Link>.
          AmineMaTue played for Sidemen FC at Wembley, widely understood as a scouting trip before returning to lead France.
        </p>

        <h2 id="match-format">Eleven All-Stars 2 | Date, Venue, Format</h2>

        <p>
          The match is being discussed as a <strong>90-minute international creator clash</strong> between
          AmineMaTue's French Eleven and a Sidemen-led England squad, following the format of the original 2022 event.
          The rumored details:
        </p>

        <ul>
          <li><strong>Date:</strong> Sunday, May 24, 2026 (rumored, not yet officially confirmed)</li>
          <li><strong>Venue:</strong> Stade de France or Parc des Princes, Paris (following the 2022 match at Stade Jean-Bouin)</li>
          <li><strong>Format:</strong> 90 minutes, standard 11-a-side, full charity match production</li>
          <li><strong>Organizer:</strong> AmineMaTue leads the French side; Sidemen organize England's squad</li>
        </ul>

        <p>
          No official announcement has been made as of April 28, 2026. All details are based on creator community
          speculation and indirect signals from the participants' social media activity. Check the{' '}
          <Link href="/youtube/sidemen/charity-match" className="text-blue-600 hover:text-blue-800 underline">
            Sidemen Charity Match hub
          </Link>{' '}
          for confirmed updates as they break.
        </p>

        <h2 id="france-lineup">France Rumored Lineup | AmineMaTue, Cherki, Squeezie</h2>

        <p>
          The French side, led by Amine, is rumored to be stacking their squad with professional-tier talent and high-profile
          crossover stars, aiming to avenge their narrow showing in recent UK-based games.
        </p>

        <ul>
          <li>
            <strong>AmineMaTue (Captain):</strong> The mastermind behind the original event. He played for Sidemen FC in April
            to scout the competition and is now returning to lead his home nation.
          </li>
          <li>
            <strong>Squeezie:</strong> The biggest YouTuber in France and a lock for the wing based on his 2022 performance.
          </li>
          <li>
            <strong>Rayan Cherki:</strong> The Manchester City playmaker and French U21 star is the biggest rumor in this match.
            Having scored and celebrated goals like Erling Haaland in the Premier League this season, his participation would
            give France a genuine pro-level ringer. No confirmation exists, but the buzz is significant.
          </li>
          <li>
            <strong>2022 Veterans:</strong> Returns from Inoxtag, Billy (RebeuDeter), and Michou are expected to provide
            the core chemistry from the original match.
          </li>
        </ul>

        <blockquote>
          If Cherki plays even 15 minutes, it changes the entire dynamic of the match.
        </blockquote>

        <h2 id="england-lineup">England Rumored Lineup | Haaland Wildcard, KSI, Jynxzi</h2>

        <p>
          The England-side rumors are headlined by one name above all others: Erling Haaland. With the Premier League season
          wrapping before May 24, fan speculation is running wild about a potential guest appearance from the Norwegian striker
          who featured in a Sidemen video earlier this year.
        </p>

        <ul>
          <li>
            <strong>Erling Haaland (Wildcard rumor):</strong> No confirmation exists, but fan expectation is at its highest
            since the concept of celebrity ringers entered the creator football conversation. His Sidemen YouTube appearance
            earlier in 2026 has fueled the speculation significantly.
          </li>
          <li>
            <strong>KSI and Miniminter:</strong> After competing on opposite sides at Wembley in April, the two are expected
            to reunite to lead England's attack in France.
          </li>
          <li>
            <strong>ChrisMD:</strong> Following a dominant performance at the April 18 match, he is a near-lock for the
            starting XI.
          </li>
          <li>
            <strong>Jynxzi:</strong> After winning MVP honors at Wembley, rumors suggest he may guest for England to maintain
            the North American audience connection the Sidemen built in 2026.
          </li>
        </ul>

        <h2 id="stakes">The Stakes | Creator Football's England vs France Rivalry</h2>

        <p>
          The tension for this match is higher than a standard charity game. During the March 2026 draft, Sidemen's Josh (Zerkaa)
          joked that England was looking "pretty Brexit" while selecting AmineMaTue for the Wembley squad. The France match is the
          official response: a French-hosted mega-event designed to prove that the French creator community can out-produce and
          out-play the UK on home soil.
        </p>

        <p>
          It also raises the stakes for charity. The{' '}
          <Link href="/youtube/sidemen/charity-match-results-2026" className="text-blue-600 hover:text-blue-800 underline">
            April 18 Wembley match raised an estimated £6.2M
          </Link>,
          setting a benchmark. A France-hosted event with Stade de France capacity (80,000+) and potential pro-player
          appearances could push that figure significantly higher.
        </p>

        <h2 id="what-to-watch">What to Watch | Pro Ringer Rule, Ticketing, Broadcast</h2>

        <ul>
          <li>
            <strong>The pro ringer rule:</strong> Keep an eye on the official announcement regarding Rayan Cherki.
            If a current Premier League or Ligue 1 player is formally confirmed, it will be the first time
            the creator football format has officially sanctioned a first-team professional as a participant.
          </li>
          <li>
            <strong>Ticketing:</strong> If the May 24 date is confirmed, tickets are expected to go live in the
            first week of May and will likely sell out in under 10 minutes based on demand patterns from the 2022 event.
          </li>
          <li>
            <strong>Broadcast:</strong> The 2022 match streamed live on YouTube. A similar setup is expected,
            with AmineMaTue and the Sidemen's channels co-streaming the event.
          </li>
          <li>
            <strong>Official announcement:</strong> Watch AmineMaTue's YouTube and TikTok channels for the
            first official confirmation. All details here are based on community speculation as of April 28, 2026.
          </li>
        </ul>

        <p>
          Follow the{' '}
          <Link href="/youtube/sidemen" className="text-blue-600 hover:text-blue-800 underline">
            Sidemen hub on ObjectWire
          </Link>{' '}
          for lineup confirms, ticketing links, and match-day coverage as they are announced.
        </p>

      </div>
    </NewsArticle>
  );
}
