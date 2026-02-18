import type { Metadata } from 'next';
import NewsArticle from '@/components/NewsArticle';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import Link from 'next/link';

const publishDate = '2026-02-17T16:00:00Z';

export const metadata: Metadata = {
  title: 'Italy Stuns USA in Men\'s Team Pursuit Speedskating for Gold | Milano Cortina 2026 | ObjectWire',
  description: 'Italy defeated the world-record-holding United States team in men\'s team pursuit speedskating at Milano Cortina 2026, claiming gold in a stunning home-crowd upset — their first gold in the event since Turin 2006.',
  keywords: [
    'Italy speedskating', 'team pursuit gold', 'Milano Cortina 2026', 'men\'s team pursuit',
    'Winter Olympics 2026', 'Italy first gold since 2006', 'USA speedskating', 'Olympic upset',
    'home crowd gold', 'Italian Winter Olympics',
  ],
  openGraph: {
    title: 'Italy Stuns World-Record USA Team in Speedskating Team Pursuit for Olympic Gold',
    description: 'Host nation Italy shocks the defending world-record-holding Americans in men\'s team pursuit speedskating — first Italian gold in the event since Turin 2006.',
    type: 'article',
    publishedTime: publishDate,
    authors: ['ObjectWire Olympic Bureau'],
    url: 'https://www.objectwire.org/winter-olympics/italy/speedskating-team-pursuit-gold-2026',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Italy Stuns USA for Speedskating Team Pursuit Gold at Milano Cortina 2026',
    description: 'Host nation pulls off one of the biggest upsets of the Games, defeating the world-record-holding USA squad.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/italy/speedskating-team-pursuit-gold-2026',
  },
};

export default function ItalySpeedskatingTeamPursuitPage() {
  return (
    <>
      <NewsArticleSchema
        title="Italy Stuns USA in Men's Team Pursuit Speedskating for Gold | Milano Cortina 2026"
        description="Italy defeated the world-record-holding United States team in men's team pursuit speedskating at Milano Cortina 2026, claiming gold in a stunning home-crowd upset — their first gold in the event since Turin 2006."
        publishedTime={publishDate}
        modifiedTime={publishDate}
        author="ObjectWire Olympic Bureau"
        authorUrl="https://www.objectwire.org/team"
        articleUrl="https://www.objectwire.org/winter-olympics/italy/speedskating-team-pursuit-gold-2026"
        section="Sports"
        keywords={['Italy speedskating', 'team pursuit', 'Milano Cortina 2026', 'Winter Olympics', 'Olympic gold', 'USA speedskating']}
      />

      <NewsArticle
        title="Italy Stuns World-Record USA Team in Speedskating Team Pursuit for Olympic Gold"
        subtitle="Host nation delivers one of the greatest upsets of Milano Cortina 2026, beating the Americans in front of a roaring home crowd — Italy's first team pursuit gold since Turin 2006"
        category="Winter Olympics"
        categoryColor="green"
        publishDate="February 17, 2026"
        readTime="6 min read"
        breaking={true}
        author={{
          name: 'ObjectWire Olympic Bureau',
          role: 'Olympics Coverage',
          authorSlug: 'team',
        }}
        tags={['Italy', 'Speedskating', 'Team Pursuit', 'Olympic Gold', 'Milano Cortina 2026', 'Team USA', 'Olympic Upset']}
      >
        <p>
          <strong>MILAN, ITALY</strong> — The Oval Lingotto erupted on Monday evening as Italy&apos;s men&apos;s speedskating team delivered one of the defining moments of the <Link href="/winter-olympics" className="text-blue-600 hover:underline">Milano Cortina 2026 Winter Olympics</Link> — a stunning gold medal in the team pursuit that knocked out the world-record-holding United States squad and sent an entire host nation into celebration.
        </p>
        <p>
          The Italians crossed the line ahead of the Americans in a race that silenced the heavily favored U.S. team and gave Italy its first Olympic gold in the men&apos;s team pursuit since the home Games in Turin twenty years ago. The moment was met with a thunderous roar from the capacity crowd inside the Oval — many of whom had waited two decades for exactly this scene.
        </p>

        <h2>The Race That Shocked the Oval</h2>
        <p>
          The final matchup was widely expected to be a formality for the Americans, who had set a world record earlier in the competition and arrived at the gold medal race as the overwhelming favorite. The United States squad — deep, fast, and riding a wave of momentum — had posted times that no team had approached in recent international competition.
        </p>
        <p>
          Italy had other ideas. From the opening laps, the Italian trío skated with a controlled aggression that immediately signaled this would not be a comfortable night for the Americans. Executing a near-perfect rotation strategy — each skater cycling to the front and peeling away at precise intervals — they maintained a relentless pace that allowed no gaps to form and gave the USA team nothing to take advantage of.
        </p>
        <p>
          As the bell signaled the final lap, the Italians held a narrow lead. The crowd rose to its feet. The Americans surged, but Italy held on, crossing the line first to claim gold in a race that will be replayed in Italian sports highlights for years to come.
        </p>
        <p>
          &quot;We knew it was possible,&quot; said one of the Italian skaters in the aftermath. &quot;We had a perfect race. We knew if we had a perfect race, we could beat anyone. Tonight we had a perfect race.&quot;
        </p>

        <h2>Twenty Years in the Making</h2>
        <p>
          The last time Italy won Olympic gold in the men&apos;s team pursuit was at the 2006 Turin Winter Games — also held on home ice. The symmetry was not lost on anyone inside the Oval Lingotto, the same iconic venue that hosted Turin&apos;s speedskating competitions two decades ago, now repurposed as the centerpiece of Milano Cortina 2026&apos;s long-track program.
        </p>
        <p>
          Italian speedskating has deep roots but has often played second fiddle internationally in the team pursuit format, where the Netherlands, Norway, and more recently the United States have dominated. That era of dominance was interrupted — at least for one unforgettable evening — by the host nation.
        </p>
        <p>
          The victory adds significant weight to Italy&apos;s medal haul at these Games. Entering Day 11, the Italians sit second overall in the medal standings, bolstered by home-crowd performances across multiple disciplines. The speedskating gold is among the most prestigious they have collected.
        </p>

        <h2>USA Takes Silver in a Race They Expected to Win</h2>
        <p>
          For the United States, the silver medal is a painful result — particularly after setting a world record earlier in the competition. The Americans had been the fastest team in the world heading into finals day, and the expectation was a gold that would add to <Link href="/winter-olympics/usa" className="text-blue-600 hover:underline">Team USA&apos;s</Link> medal count in a major way.
        </p>
        <p>
          Instead, they were outlasted by an Italian team that executed a tactically superior race. The U.S. skaters acknowledged the defeat with measured grace, crediting Italy&apos;s performance while clearly processing the disappointment of losing a gold they had seemed certain to win.
        </p>
        <p>
          The bronze medal was claimed by the Netherlands, who defeated Japan in the third-place race — a result more in line with pre-competition expectations, given the Dutch long-track pedigree.
        </p>

        <h2>The Team Pursuit Format Explained</h2>
        <p>
          The men&apos;s team pursuit features three skaters per nation racing simultaneously over eight laps of the 400-meter oval, with teams starting on opposite sides of the ice. The goal is either to catch the opposing team or, failing that, for your third skater to cross the finish line faster than the opposing team&apos;s third skater.
        </p>
        <p>
          The tactical complexity is considerable: teams must decide how to rotate the lead — the front skater creates a windbreak for those behind — without any skater dying too early or holding back too much. Italy&apos;s rotation on Monday was described by analysts as textbook-level execution, the kind of performance that comes from months of fine-tuned preparation for a single race.
        </p>

        <h2>A Milestone Evening for the Host Nation</h2>
        <p>
          Italy&apos;s team pursuit gold caps an exceptional run at their own Games. The host nation has consistently outperformed pre-competition medal projections, and the Oval Lingotto has been a particular stronghold — delivering gold-medal moments that create the kind of home-crowd memories that define an Olympic Games for a generation of fans.
        </p>
        <p>
          With several days of competition still remaining at <Link href="/winter-olympics" className="text-blue-600 hover:underline">Milano Cortina 2026</Link>, Italy is well-positioned to close these Games atop or near the top of the host-nation legacy board. Monday&apos;s speedskating team pursuit gold — earned in the same arena that hosted their glory two decades ago — will be remembered as the emotional center of the entire fortnight.
        </p>

        <h2>Related Winter Olympics Coverage</h2>
        <ul>
          <li><Link href="/winter-olympics" className="text-blue-600 hover:underline">Milano Cortina 2026 — Full Coverage Hub</Link></li>
          <li><Link href="/winter-olympics/usa" className="text-blue-600 hover:underline">Team USA at Milano Cortina 2026</Link></li>
          <li><Link href="/winter-olympics/norway" className="text-blue-600 hover:underline">Norway Leads Overall Medal Standings</Link></li>
          <li><Link href="/winter-olympics/usa/elana-meyers-taylor-bobsled-gold" className="text-blue-600 hover:underline">Elana Meyers Taylor Wins Historic Monobob Gold</Link></li>
        </ul>
      </NewsArticle>
    </>
  );
}
