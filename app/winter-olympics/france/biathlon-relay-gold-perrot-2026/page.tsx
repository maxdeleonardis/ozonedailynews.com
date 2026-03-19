import type { Metadata } from 'next';
import NewsArticle from '@/components/NewsArticle';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import Link from 'next/link';

const publishDate = '2026-02-17T13:00:00Z';

export const metadata: Metadata = {
  title: 'France Wins Biathlon Men\'s Relay Gold in Dramatic Comeback at Milano Cortina 2026 | ObjectWire',
  description: 'France stormed from nearly a minute behind to win men\'s biathlon relay gold at Milano Cortina 2026. Emilien Perrot\'s anchor leg powered the comeback over Norway and Sweden in one of the most dramatic races of the Games.',
  keywords: [
    'France biathlon relay gold', 'Emilien Perrot', 'biathlon Milano Cortina 2026',
    'men\'s biathlon relay', 'Winter Olympics 2026', 'France medal record',
    'biathlon dramatic comeback', 'Norway silver biathlon', 'Sweden biathlon bronze',
  ],
  openGraph: {
    title: 'France Storms Back from a Minute Down to Win Biathlon Relay Gold at Milano Cortina 2026',
    description: 'Emilien Perrot anchors a dramatic French comeback from nearly a minute behind Norway to claim men\'s relay gold — a historic moment for French Winter Olympics history.',
    type: 'article',
    publishedTime: publishDate,
    authors: ['ObjectWire Olympic Bureau'],
    url: 'https://www.objectwire.org/winter-olympics/france/biathlon-relay-gold-perrot-2026',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'France Wins Biathlon Relay Gold in Stunning Comeback | Milano Cortina 2026',
    description: 'Perrot anchors one of the most dramatic relay finishes in Winter Olympic history to bring France its biathlon gold.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/france/biathlon-relay-gold-perrot-2026',
  },
};

export default function FranceBiathlonRelayGoldPage() {
  return (
    <>
      <NewsArticleSchema
        title="France Wins Biathlon Men's Relay Gold in Dramatic Comeback at Milano Cortina 2026"
        description="France stormed from nearly a minute behind to win men's biathlon relay gold at Milano Cortina 2026. Emilien Perrot's anchor leg powered the comeback over Norway and Sweden in one of the most dramatic races of the Games."
        publishedTime={publishDate}
        modifiedTime={publishDate}
        author="ObjectWire Olympic Bureau"
        authorUrl="https://www.objectwire.org/team"
        articleUrl="https://www.objectwire.org/winter-olympics/france/biathlon-relay-gold-perrot-2026"
        section="Sports"
        keywords={['France', 'biathlon', 'relay', 'gold medal', 'Perrot', 'Milano Cortina 2026', 'Winter Olympics', 'comeback']}
      />

      <NewsArticle
        title="France Storms Back from a Minute Down to Win Biathlon Relay Gold at Milano Cortina 2026"
        subtitle="Emilien Perrot delivers one of the great anchor legs in relay history as France completes an almost impossible comeback over Norway and Sweden"
        category="Winter Olympics"
        categoryColor="blue"
        publishDate="February 17, 2026"
        readTime="6 min read"
        breaking={true}
        author={{
          name: 'ObjectWire Olympic Bureau',
          role: 'Olympics Coverage',
          authorSlug: 'team',
        }}
        tags={['France', 'Biathlon', 'Relay Gold', 'Perrot', 'Milano Cortina 2026', 'Dramatic Comeback', 'Norway', 'Sweden']}
      >
        <p>
          <strong>ANTHOLZ-ANTERSELVA, ITALY</strong> — It looked impossible with three legs complete. France trailed Norway by nearly a full minute — a deficit that, in biathlon relay terms, is almost insurmountable. Then Emilien Perrot clicked into his bindings, pushed off into the Italian cold, and proceeded to deliver one of the most extraordinary anchor legs in the history of the <Link href="/winter-olympics" className="text-blue-600 hover:underline">Winter Olympic Games</Link>.
        </p>
        <p>
          France won the men&apos;s biathlon 4x7.5km relay gold medal on Monday in a stunning reversal that left the packed standing areas at the Südtirol Arena in disbelief. Norway, which had led for most of the race, had to settle for silver. Sweden claimed bronze. France — which entered the anchor leg with almost no mathematical chance of winning — left with Olympic gold and a story that will be retold for generations in French winter sport.
        </p>

        <h2>How an Impossible Comeback Happened</h2>
        <p>
          Biathlon relay is a format that punishes accumulated error ruthlessly. Each skier completes two shooting stages — one prone, one standing — with five shots at each. Miss a target and you either use a reserve round (costing time) or ski a 150-meter penalty loop (costing more). A team a minute behind entering the anchor leg has almost certainly paid for too many mistakes to claw back.
        </p>
        <p>
          France had not been clean. Multiple shooting errors across the opening three legs had stacked up the deficit that everyone watching assumed was decisive. Norway&apos;s anchor Sturla Holm Lægreid — one of the best biathletes in the world — led out with the kind of margin that typically ends races before they begin.
        </p>
        <p>
          What happened next defied conventional biathlon logic. Perrot skied at a pace that analysts described afterward as &quot;beyond his known physical ceiling.&quot; He hit all ten shots — something he would need to do and then some. Lægreid, aware of the situation but perhaps not the scale of Perrot&apos;s charge, began to tighten under pressure. Two penalty loops later, the gap had evaporated. By the final stadium loop, Perrot had not just caught Norway — he was ahead.
        </p>
        <p>
          He crossed the finish line with his arms raised, screaming into the mountain air. France had won.
        </p>
        <p>
          &quot;I don&apos;t know what happened out there,&quot; Perrot said, doubled over to catch his breath. &quot;At some point I stopped thinking about the gap and just skied. I just skied as hard as I&apos;ve ever skied in my life. I didn&apos;t look back. I just went.&quot;
        </p>

        <h2>A Record Medal Haul for French Winter Olympic History</h2>
        <p>
          The biathlon relay gold contributes to what is shaping up as France&apos;s best Winter Olympic performance in history by total medal count. The French national team arrived in Italy with high expectations across multiple disciplines — alpine skiing, freestyle, cross-country, and biathlon — and has largely delivered, with this relay gold representing one of the most prestigious single results of the campaign.
        </p>
        <p>
          France has a proud biathlon tradition, with single-event stars and relay squads that have periodically challenged Norway&apos;s dominance. But relay gold at the Olympic level at this particular moment in the competition calendar carries extraordinary weight, and the French federations were quick to celebrate a result that exceeded even optimistic expectations when the race began.
        </p>

        <h2>Norway Takes Silver Despite a Lead That Seemed Unassailable</h2>
        <p>
          For <Link href="/winter-olympics/norway" className="text-blue-600 hover:underline">Norway</Link>, the silver is a disappointing result from a position of apparent strength. The Norwegians continue to top the overall medal standings at Milano Cortina 2026, and their biathlon program — historically one of the world&apos;s strongest — has delivered multiple medals across the Games. But the men&apos;s relay will sting: a gold that seemed safely in hand was surrendered on the final leg due to a combination of Perrot&apos;s exceptional performance and Lægreid&apos;s uncharacteristic penalty-loop errors under pressure.
        </p>
        <p>
          Norway entered these Games with the intent of dominating biathlon as they have for years. They remain the sport&apos;s most successful nation at the Olympic level, and their overall medal count here is among their best. But relay gold — the most team-oriented achievement in the sport — escaped them on Monday.
        </p>

        <h2>Sweden Claims Bronze</h2>
        <p>
          Sweden&apos;s relay team performed consistently enough to secure bronze, a result that reflects their status as a reliable biathlon relay nation without quite reaching France&apos;s dramatic heights or Norway&apos;s typical dominance. The Swedes crossed the line third in a race where the remarkable chain of events at the front of the field rather overshadowed their solid, professional performance.
        </p>

        <h2>The Biathlon Relay Format</h2>
        <p>
          The 4x7.5km men&apos;s relay requires four athletes per nation, each completing a 7.5km loop with two shooting stages. Teams start simultaneously and race all at once — unlike individual and sprint formats — making the visual drama of relay racing some of the most compelling in Winter Olympic sports. The Südtirol Arena, with its purpose-built standing area and mountain backdrop, regularly produces some of the most atmospheric biathlon atmospheres in the world.
        </p>
        <p>
          Monday&apos;s race will stand as one of the defining relay performances in the modern era of the sport, driven entirely by a single athlete&apos;s refusal to accept a result that the numbers suggested was inevitable.
        </p>

        <h2>Related Winter Olympics Coverage</h2>
        <ul>
          <li><Link href="/winter-olympics" className="text-blue-600 hover:underline">Milano Cortina 2026 — Full Coverage Hub</Link></li>
          <li><Link href="/winter-olympics/norway" className="text-blue-600 hover:underline">Norway Leads Overall Medal Standings</Link></li>
          <li><Link href="/winter-olympics/usa/elana-meyers-taylor-bobsled-gold" className="text-blue-600 hover:underline">Elana Meyers Taylor Wins Historic Monobob Gold</Link></li>
          <li><Link href="/winter-olympics/georgia/first-winter-olympic-medal-figure-skating" className="text-blue-600 hover:underline">Georgia Wins First Ever Winter Olympic Medal</Link></li>
        </ul>
      </NewsArticle>
    </>
  );
}
