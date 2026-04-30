import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticle } from '@/components/articles/NewsArticle';

// Inline article — no Supabase sync. Content lives in the codebase.
export const dynamic = 'force-dynamic';

const SLUG = '/world-cup/world-cup-2026-schedule-dates';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'World Cup 2026 Schedule | Dates, Groups, Host Cities, Final',
  description:
    'FIFA World Cup 2026 full schedule: group stage June 11, final July 19 at MetLife Stadium. 48 teams, 104 matches, 16 host cities across USA, Canada, and Mexico.',
  keywords: [
    'World Cup 2026 schedule',
    'FIFA World Cup 2026 dates',
    'World Cup 2026 group stage',
    'World Cup 2026 final date',
    'World Cup 2026 host cities',
    'FIFA World Cup 2026 USA',
    'World Cup 2026 kickoff date',
    'MetLife Stadium World Cup final',
    'World Cup 2026 Mexico City',
    'World Cup 2026 Los Angeles',
    'World Cup 2026 48 teams',
    'World Cup 2026 bracket',
    'FIFA 2026 schedule calendar',
    'World Cup 2026 Canada',
    'World Cup 2026 opening match',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'FIFA World Cup 2026 Schedule | Full Dates, Groups, Cities',
    description:
      'Full FIFA World Cup 2026 schedule. Opens June 11 in Mexico. Final July 19 at MetLife Stadium, New Jersey. 48 teams, 104 matches, 16 cities across USA, Canada, and Mexico.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-04-29T15:00:00Z',
    modifiedTime: '2026-04-29T15:00:00Z',
    section: 'Sports',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'FIFA World Cup 2026 schedule host cities USA Canada Mexico' }],
    tags: ['World Cup 2026', 'FIFA', 'Soccer', 'USA 2026', 'MetLife Stadium'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Cup 2026 Schedule | Opens June 11 | Final July 19',
    description:
      '48 teams. 104 matches. 16 cities across USA, Canada, Mexico. Group stage opens June 11. Final at MetLife Stadium, New Jersey on July 19.',
    images: [OG_IMAGE],
  },
};

export default function WorldCup2026SchedulePage() {
  return (
    <NewsArticle
      title="World Cup 2026 Schedule | Dates, Groups, Host Cities, and Final"
      subtitle="FIFA World Cup 2026 runs June 11 to July 19 across 16 cities in the United States, Canada, and Mexico"
      category="Sports"
      categoryColor="green"
      topicTag="sports"
      publishDate="April 29, 2026"
      readTime="6 min read"
      author={{ name: 'ObjectWire Sports Desk', authorSlug: 'objectwire-sports-desk' }}
      tags={['World Cup 2026', 'FIFA', 'Soccer', 'USA', 'Canada', 'Mexico', 'MetLife Stadium']}
      thumbnail={{ src: OG_IMAGE, alt: 'FIFA World Cup 2026 schedule' }}
      slug="world-cup-world-cup-2026-schedule-dates"
      url={SLUG}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'World Cup', item: '/world-cup' },
        { name: 'Schedule and Dates', item: SLUG },
      ]}
      moreFromHub={[
        { slug: 'world-cup', title: 'FIFA World Cup 2026 | Complete Hub', url: '/world-cup', publishDate: 'March 2026', category: 'Sports' },
        { slug: 'world-cup-news-2026-world-cup-48-team-field-complete-italy-out', title: 'World Cup 2026 | 48-Team Field Complete After Italy Exit', url: '/world-cup/news/2026-world-cup-48-team-field-complete-italy-out', publishDate: 'March 2026', category: 'Sports' },
        { slug: 'world-cup-news-host-cities-security-funding-frozen-dhs-shutdown', title: 'World Cup 2026 | Host Cities Security Funding Frozen by DHS Shutdown', url: '/world-cup/news/host-cities-security-funding-frozen-dhs-shutdown', publishDate: 'March 2026', category: 'Sports' },
        { slug: 'world-cup-news-fifa-world-cup-2026-final-halftime-show-chris-martin', title: 'World Cup 2026 Final Halftime Show | Chris Martin Confirmed', url: '/world-cup/news/fifa-world-cup-2026-final-halftime-show-chris-martin', publishDate: 'March 2026', category: 'Sports' },
      ]}
      moreFromHubLabel="World Cup 2026 Coverage"
      moreFromHubHref="/world-cup"
    >
      <div className="prose prose-lg max-w-none">

        <p>
          FIFA World Cup 2026 runs from <strong>June 11 to July 19, 2026</strong>. The tournament is the first
          to use the expanded 48-team format, up from 32, and the first co-hosted by three nations. The United
          States (11 cities), Canada (2 cities), and Mexico (3 cities) share the 16-venue host structure.
          The final will be played at <strong>MetLife Stadium</strong> in East Rutherford, New Jersey on{' '}
          <strong>July 19, 2026</strong>.
        </p>

        <p>
          The opening match kicks off <strong>June 11</strong> in Mexico City at Estadio Azteca, the only venue
          in the world to host a World Cup final twice (1970 and 1986). Mexico secured the honor after extensive
          lobbying for the symbolic opening slot ahead of the centennial tournament. FIFA confirmed the venue
          and schedule in late 2024.
        </p>

        <h2 id="schedule-overview">Tournament Schedule | Key Dates</h2>

        <table>
          <thead>
            <tr>
              <th>Round</th>
              <th>Dates</th>
              <th>Matches</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Group Stage</strong></td>
              <td>June 11 – July 2, 2026</td>
              <td>72 matches (16 groups of 3 teams)</td>
            </tr>
            <tr>
              <td><strong>Round of 32</strong></td>
              <td>July 4–7, 2026</td>
              <td>16 matches</td>
            </tr>
            <tr>
              <td><strong>Round of 16</strong></td>
              <td>July 8–12, 2026</td>
              <td>8 matches</td>
            </tr>
            <tr>
              <td><strong>Quarter-finals</strong></td>
              <td>July 13–14, 2026</td>
              <td>4 matches</td>
            </tr>
            <tr>
              <td><strong>Semi-finals</strong></td>
              <td>July 16–17, 2026</td>
              <td>2 matches</td>
            </tr>
            <tr>
              <td><strong>Third-place match</strong></td>
              <td>July 18, 2026</td>
              <td>1 match</td>
            </tr>
            <tr>
              <td><strong>Final</strong></td>
              <td>July 19, 2026</td>
              <td>MetLife Stadium, New Jersey</td>
            </tr>
          </tbody>
        </table>

        <h2 id="format-change">Format Change | 48 Teams, New Round of 32</h2>

        <p>
          The 2026 World Cup is the first tournament under the expanded 48-team format approved by FIFA in
          2017. The 16-group format (each with 3 teams) replaces the previous 8-group structure (each with
          4 teams). The top two teams from each group, plus 8 best third-placed teams, advance to a new
          Round of 32 before the Round of 16. Total matches increase from 64 to <strong>104</strong>.
        </p>

        <p>
          Critics of the expanded format argued it would dilute quality. FIFA responded that 16 more nations
          qualifying, particularly from Africa, Asia, and CONCACAF, increases global participation without
          compromising the knockout rounds. All 48 qualifying teams and groups were confirmed following
          the{' '}
          <Link href="/world-cup/news/2026-world-cup-48-team-field-complete-italy-out" className="text-blue-600 hover:text-blue-800 underline">
            completion of the 48-team field in March 2026
          </Link>.
        </p>

        <h2 id="host-cities-usa">USA Host Cities | 11 Venues</h2>

        <p>
          The United States hosts the most matches and the final. The 11 American host venues span coast to
          coast, with the semi-finals and final concentrated in the Northeast.
        </p>

        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Stadium</th>
              <th>Capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>New York / New Jersey</strong></td>
              <td>MetLife Stadium — <em>Final venue</em></td>
              <td>82,500</td>
            </tr>
            <tr>
              <td><strong>Los Angeles</strong></td>
              <td>SoFi Stadium</td>
              <td>70,240</td>
            </tr>
            <tr>
              <td><strong>Dallas</strong></td>
              <td>AT&amp;T Stadium</td>
              <td>80,000</td>
            </tr>
            <tr>
              <td><strong>San Francisco Bay Area</strong></td>
              <td>Levi&apos;s Stadium</td>
              <td>68,500</td>
            </tr>
            <tr>
              <td><strong>Miami</strong></td>
              <td>Hard Rock Stadium</td>
              <td>65,326</td>
            </tr>
            <tr>
              <td><strong>Seattle</strong></td>
              <td>Lumen Field</td>
              <td>69,000</td>
            </tr>
            <tr>
              <td><strong>Kansas City</strong></td>
              <td>Arrowhead Stadium</td>
              <td>76,416</td>
            </tr>
            <tr>
              <td><strong>Houston</strong></td>
              <td>NRG Stadium</td>
              <td>72,220</td>
            </tr>
            <tr>
              <td><strong>Atlanta</strong></td>
              <td>Mercedes-Benz Stadium</td>
              <td>71,000</td>
            </tr>
            <tr>
              <td><strong>Philadelphia</strong></td>
              <td>Lincoln Financial Field</td>
              <td>69,796</td>
            </tr>
            <tr>
              <td><strong>Boston</strong></td>
              <td>Gillette Stadium</td>
              <td>65,878</td>
            </tr>
          </tbody>
        </table>

        <h2 id="host-cities-canada-mexico">Canada and Mexico Host Cities</h2>

        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>City</th>
              <th>Stadium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Canada</strong></td>
              <td>Toronto</td>
              <td>BMO Field (expanded for 2026)</td>
            </tr>
            <tr>
              <td><strong>Canada</strong></td>
              <td>Vancouver</td>
              <td>BC Place</td>
            </tr>
            <tr>
              <td><strong>Mexico</strong></td>
              <td>Mexico City</td>
              <td>Estadio Azteca — <em>Opening match June 11</em></td>
            </tr>
            <tr>
              <td><strong>Mexico</strong></td>
              <td>Guadalajara</td>
              <td>Estadio Akron</td>
            </tr>
            <tr>
              <td><strong>Mexico</strong></td>
              <td>Monterrey</td>
              <td>Estadio BBVA</td>
            </tr>
          </tbody>
        </table>

        <h2 id="us-transit">Fan Travel | Getting Between Cities</h2>

        <p>
          Unlike previous World Cups in single-nation hosts, 2026 requires fans following their national team
          through the tournament to travel between three countries. FIFA has coordinated with airlines and
          Amtrak to facilitate cross-city travel. The{' '}
          <Link href="/world-cup/news/2026-world-cup-us-transit-prices-fans-outraged" className="text-blue-600 hover:text-blue-800 underline">
            US transit pricing for World Cup 2026 has drawn criticism
          </Link>{' '}
          from fan groups, who flagged surge pricing on intercity routes. Domestic flights between US host cities
          are the primary inter-venue travel option, with direct routes from Los Angeles, Dallas, Miami, and
          Atlanta to MetLife / Newark Liberty.
        </p>

        <h2 id="halftime-show">Final Halftime Show | Chris Martin Confirmed</h2>

        <p>
          Coldplay frontman Chris Martin is confirmed to perform at the World Cup 2026 Final halftime show at
          MetLife Stadium on July 19. Full details in{' '}
          <Link href="/world-cup/news/fifa-world-cup-2026-final-halftime-show-chris-martin" className="text-blue-600 hover:text-blue-800 underline">
            FIFA World Cup 2026 Final Halftime Show | Chris Martin Confirmed
          </Link>.
        </p>

        <p>
          For full tournament coverage including controversies, team news, and match previews, see the{' '}
          <Link href="/world-cup" className="text-blue-600 hover:text-blue-800 underline">
            FIFA World Cup 2026 hub
          </Link>.
        </p>

      </div>
    </NewsArticle>
  );
}
