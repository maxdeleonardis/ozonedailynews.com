import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';
import NewsArticle, { HighlightBox, TagsSection } from '@/components/NewsArticle';

const SLUG = '/winter-olympics/news/malinin-fair-play-award-milano-cortina-2026-wrap-up';

export const metadata: Metadata = {
  title: 'Malinin Wins Milano Cortina 2026 Fair Play Award After Heartbreaking 8th-Place Finish | ObjectWire',
  description: 'American figure skater Ilia Malinin received the Milano Cortina 2026 Fair Play Award for congratulating surprise gold medalist Mikhail Shaidorov after falling from first to eighth. A full wrap-up of the 2026 Winter Olympics.',
  keywords: [
    'Ilia Malinin Fair Play Award 2026',
    'Milano Cortina 2026 Fair Play Award',
    'Malinin 8th place Olympics',
    'Mikhail Shaidorov Kazakhstan gold',
    'Milano Cortina 2026 Winter Olympics recap',
    '2026 Winter Olympics wrap up',
    'Malinin Quad God Olympics',
    'Kazakhstan first figure skating gold',
    'Milano Cortina 2026 results',
    'Winter Olympics 2026 highlights',
    'IOC Fair Play Award history',
    'Eugenio Monti Fair Play',
  ],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'Malinin Wins Fair Play Award After Heartbreaking Olympic Collapse',
    description: 'The Quad God fell from 1st to 8th, then embraced the surprise gold medalist. The IOC honored him with the Milano Cortina 2026 Fair Play Award.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Alfanasa'],
    publishedTime: '2026-03-05T20:00:00Z',
    modifiedTime: '2026-03-05T20:00:00Z',
    section: 'Sports',
    tags: ['Winter Olympics', 'Ilia Malinin', 'Fair Play Award', 'Figure Skating', 'Milano Cortina 2026'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Malinin Wins Milano Cortina 2026 Fair Play Award',
    description: 'Fell from 1st to 8th. Embraced the winner. Won the award that matters beyond medals.',
  },
};

export default function MalininFairPlayPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Malinin Wins Milano Cortina 2026 Fair Play Award After Heartbreaking 8th-Place Finish"
        description="American figure skater Ilia Malinin received the Fair Play Award for his sportsmanship after falling from first to eighth place in the men's free skate."
        author="Alfanasa"
        publishedTime="2026-03-05T20:00:00Z"
        modifiedTime="2026-03-05T20:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Sports"
        keywords={['Ilia Malinin', 'Fair Play Award', 'Milano Cortina 2026', 'Figure Skating', 'Winter Olympics']}
      />

      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Breadcrumb items={[
            { name: 'Home', item: '/' },
            { name: 'Winter Olympics', item: '/winter-olympics' },
            { name: 'News', item: '/winter-olympics/news' },
          ]} />
        </div>
      </div>

      <NewsArticle
        title="Malinin Awarded Milano Cortina 2026 Fair Play Award Following Heartbreaking Olympic Upset"
        subtitle="The American figure skater fell from first to eighth in the men's free skate, then immediately embraced surprise gold medalist Mikhail Shaidorov of Kazakhstan. The IOC honored him with the highest sportsmanship award of the Games."
        category="Sports"
        categoryColor="red"
        topicTag="sports"
        publishDate="March 5, 2026"
        readTime="7 min read"
        author={{ name: 'Alfanasa', role: 'Sports Reporter' }}
        tags={['Winter Olympics', 'Ilia Malinin', 'Fair Play Award', 'Figure Skating', 'Milano Cortina 2026']}
      >

        <p>
          American figure skating star <Link href="/winter-olympics/usa/ilia-malinin" className="text-blue-600 hover:underline">Ilia Malinin</Link> was officially named the recipient of the Milano Cortina 2026 Fair Play Award on Thursday in a ceremony at Cortina d&apos;Ampezzo. The honor recognizes Malinin&apos;s grace following one of the most stunning collapses in Olympic history, a moment where the &ldquo;Quad God&rdquo; traded a potential gold medal for a display of sportsmanship that IOC President Kirsty Coventry said generated the highest fan-voting engagement in Olympic history, surpassing even the Paris 2024 Summer Games.
        </p>

        <p>
          The award also marks a symbolic homecoming. The inaugural Fair Play Award was presented 62 years ago in 1964 at these same Italian mountains, when bobsledder Eugenio Monti famously loaned a bolt to his British rivals so they could compete. Malinin&apos;s embrace of surprise gold medalist Mikhail Shaidorov of Kazakhstan carries a different weight but the same principle: competition matters less than the people in it.
        </p>

        <HighlightBox type="stat" color="blue">
          <strong>From 1st to 8th:</strong> Malinin entered the free skate with a five-point lead after the short program. His free skate score of 156.33 was only the 15th best of the night, dropping him to 8th place overall.
        </HighlightBox>

        <h2>The Collapse: From Coronation to 8th Place</h2>

        <p>
          On February 13, the Milano Ice Skating Arena was prepared for an Olympic coronation. <Link href="/winter-olympics/usa/malinin-surges-into-lead-olympic-figure-skating" className="text-blue-600 hover:underline">Malinin had surged into a commanding five-point lead</Link> after a brilliant short program that showcased why he earned the &ldquo;Quad God&rdquo; nickname. What followed in the free skate was four minutes that shocked the figure skating world. Facing enormous pressure as the overwhelming favorite, Malinin struggled through his program, popping his signature Quad Axel into a single jump and suffering two major falls. His free skate score of 156.33 was only the 15th best of the night, sending him plummeting from the top of the leaderboard to a final finish of 8th place.
        </p>

        <p>
          Despite being visibly shell-shocked and fighting back tears in the kiss-and-cry area, Malinin did something that defined the entire Games. He immediately sought out the unlikely victor, Mikhail Shaidorov, to offer a warm embrace and heartfelt congratulations. The moment was captured on broadcast cameras and replayed across every network covering the Olympics. Malinin later said: &ldquo;Congratulating Mikhail wasn&apos;t about the results. It was about the shared journey we take as athletes. Knowing that fans worldwide connected with that moment means more to me than any medal.&rdquo;
        </p>

        <h2>Shaidorov Makes History for Kazakhstan</h2>

        <p>
          While the world processed Malinin&apos;s heartbreak, Mikhail Shaidorov wrote a chapter of Olympic history that his country had never seen. The 21-year-old climbed from 5th place after the short program to claim gold with a career-best score of 291.58. The victory marked Kazakhstan&apos;s first-ever Olympic gold medal in figure skating and the nation&apos;s first Winter Olympics gold medal since 1994. Shaidorov&apos;s ascent from relative obscurity to Olympic champion embodied the unpredictability that makes the Games compelling, and Malinin&apos;s immediate recognition of that achievement gave the moment its emotional depth.
        </p>

        <h2>Milano Cortina 2026: The Defining Moments</h2>

        <p>
          Malinin&apos;s Fair Play Award ceremony provides a fitting bookend to a Winter Olympics that delivered historic performances, unexpected outcomes, and emotional narratives across nearly every discipline. The Games opened with <Link href="/winter-olympics/italy-first-gold-lollobrigida" className="text-blue-600 hover:underline">Italy&apos;s Francesca Lollobrigida setting an Olympic record</Link> to win the host nation&apos;s first gold medal in speed skating, setting an electric tone for the home crowd.
        </p>

        <p>
          <Link href="/winter-olympics/usa/breezy-johnson" className="text-blue-600 hover:underline">Breezy Johnson captured Team USA&apos;s first gold</Link> in the women&apos;s downhill, a redemption story after years of injuries kept her from previous Games. <Link href="/winter-olympics/lindsey-vonn" className="text-blue-600 hover:underline">Lindsey Vonn</Link> competed in what appears to be her final Olympics, with her <Link href="/winter-olympics/lindsey-vonn-training-downhill" className="text-blue-600 hover:underline">third-fastest training time</Link> before the downhill reminding the sport of what she still brought to the mountain. <Link href="/winter-olympics/mikaela-shiffrin" className="text-blue-600 hover:underline">Mikaela Shiffrin</Link> added to her legacy as the most decorated alpine skier in World Cup history during her fourth Olympic appearance.
        </p>

        <p>
          On ice, <Link href="/winter-olympics/usa/jordan-stolz" className="text-blue-600 hover:underline">Jordan Stolz</Link> delivered dominant performances in speed skating for Team USA, while <Link href="/winter-olympics/usa/elana-meyers-taylor-bobsled-gold" className="text-blue-600 hover:underline">Elana Meyers Taylor claimed bobsled gold</Link> to cement her status as one of the greatest American winter athletes. The <Link href="/winter-olympics/usa-sweeps-gold-silver-in-womens-moguls" className="text-blue-600 hover:underline">USA swept gold and silver in women&apos;s moguls</Link>, and American athletes <Link href="/winter-olympics/usa/team-usa-wins-five-medals-across-five-sports" className="text-blue-600 hover:underline">won five medals across five different sports</Link> on a single day.
        </p>

        <p>
          Beyond the American delegation, <Link href="/winter-olympics/swiss-skier-von-allmen-wins-third-gold" className="text-blue-600 hover:underline">Switzerland&apos;s Franjo von Allmen won three gold medals</Link> in alpine skiing to join the all-time greats. Norway&apos;s <Link href="/winter-olympics/norway/oftebro-second-nordic-combined-gold" className="text-blue-600 hover:underline">Jens Oftebro claimed a second Nordic combined gold</Link>. <Link href="/winter-olympics/georgia/first-winter-olympic-medal-figure-skating" className="text-blue-600 hover:underline">Georgia won its first-ever Winter Olympic medal</Link> in pairs figure skating through Anastasia Metelkina and Luka Berulava. <Link href="/winter-olympics/chloe-kim-historic-three-peat-bid" className="text-blue-600 hover:underline">Chloe Kim&apos;s bid for a historic halfpipe three-peat</Link> captivated snowboard fans. France&apos;s <Link href="/winter-olympics/france/biathlon-relay-gold-perrot-2026" className="text-blue-600 hover:underline">biathlon relay team claimed gold</Link> behind a surging home continent crowd.
        </p>

        <h2>The Games by the Numbers</h2>

        <p>
          Milano Cortina 2026 featured 116 medal events across 16 sports and seven disciplines, with athletes from 91 nations competing across venues in Milan, Cortina d&apos;Ampezzo, Bormio, Livigno, and Anterselva. Norway led the overall medal count, continuing its dominance in cross-country skiing and biathlon. The United States posted a strong all-around showing with medals in alpine, freestyle, figure skating, speed skating, and bobsled. Host nation Italy delivered passionate home-crowd performances, particularly in the opening days.
        </p>

        <p>
          The <Link href="/winter-olympics/final-ceremony" className="text-blue-600 hover:underline">closing ceremony</Link> at San Siro stadium in Milan officially handed the Olympic flag forward, closing a Games that overcame years of venue construction delays and budget concerns to deliver what IOC President Coventry called &ldquo;a Winter Olympics worthy of the mountains that hosted them.&rdquo;
        </p>

        <h2>The Fair Play Award&apos;s Place in Olympic History</h2>

        <p>
          The Fair Play Award has been presented at every Olympics since Eugenio Monti received it at Innsbruck in 1964. Monti, an Italian bobsledder, noticed that British rival Tony Nash had a broken bolt on his sled before a run. Rather than let Nash withdraw, Monti removed a bolt from his own bobsled and handed it to the British team. Nash went on to win gold. Monti won nothing that day but won the public&apos;s admiration permanently. The award was created to honor that act, and every recipient since carries the weight of that original gesture.
        </p>

        <p>
          Malinin&apos;s moment carries a different texture. He did not sacrifice equipment or a tangible advantage. He sacrificed composure in a moment of devastation, choosing to celebrate another athlete&apos;s achievement instead of retreating into his own disappointment. For a 21-year-old who entered the arena expecting gold and left with 8th place, that choice registered with millions of viewers, enough to generate the highest fan-voting numbers the IOC has ever recorded for the award.
        </p>

        <p className="text-sm text-gray-500 mt-6 italic">
          When the Quad God falls to 8th and his first instinct is to embrace the winner, the award that follows is not consolation. It is confirmation that the mountains remember sportsmanship longer than scores.
        </p>

        <h2>Related Coverage</h2>
        <ul>
          <li><Link href="/winter-olympics" className="text-blue-600 hover:underline font-medium">Milano Cortina 2026 Winter Olympics Hub &rarr;</Link></li>
          <li><Link href="/winter-olympics/usa/ilia-malinin" className="text-blue-600 hover:underline font-medium">Ilia Malinin Profile &rarr;</Link></li>
          <li><Link href="/winter-olympics/usa/malinin-surges-into-lead-olympic-figure-skating" className="text-blue-600 hover:underline font-medium">Malinin Surges Into Lead After Short Program &rarr;</Link></li>
          <li><Link href="/winter-olympics/final-ceremony" className="text-blue-600 hover:underline font-medium">Milano Cortina 2026 Closing Ceremony &rarr;</Link></li>
          <li><Link href="/winter-olympics/usa/breezy-johnson" className="text-blue-600 hover:underline font-medium">Breezy Johnson: Team USA First Gold &rarr;</Link></li>
          <li><Link href="/winter-olympics/swiss-skier-von-allmen-wins-third-gold" className="text-blue-600 hover:underline font-medium">Von Allmen Wins Third Gold &rarr;</Link></li>
          <li><Link href="/winter-olympics/georgia/first-winter-olympic-medal-figure-skating" className="text-blue-600 hover:underline font-medium">Georgia Wins First Winter Olympic Medal &rarr;</Link></li>
        </ul>

        <TagsSection tags={['Winter Olympics', 'Milano Cortina 2026', 'Ilia Malinin', 'Fair Play Award', 'Figure Skating', 'Mikhail Shaidorov', 'Kazakhstan', 'Team USA', 'Sportsmanship', 'IOC', 'Olympics Recap']} />
      </NewsArticle>
    </SEOWrapper>
  );
}
