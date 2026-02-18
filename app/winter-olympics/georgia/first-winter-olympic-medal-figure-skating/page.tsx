import type { Metadata } from 'next';
import NewsArticle from '@/components/NewsArticle';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import Link from 'next/link';

const publishDate = '2026-02-17T15:00:00Z';

export const metadata: Metadata = {
  title: 'Georgia Wins First Ever Winter Olympic Medal in Pairs Figure Skating | Milano Cortina 2026 | ObjectWire',
  description: 'Anastasia Metelkina and Luka Berulava made history at Milano Cortina 2026 by winning Georgia\'s first-ever Winter Olympic medal — a silver in pairs figure skating that has sent a nation into celebration.',
  keywords: [
    'Georgia Winter Olympics', 'first Winter Olympic medal', 'Metelkina Berulava',
    'pairs figure skating', 'Milano Cortina 2026', 'Georgia silver medal',
    'Winter Olympics history', 'figure skating 2026', 'historic medal',
  ],
  openGraph: {
    title: 'Georgia Wins Its First Ever Winter Olympic Medal in Pairs Figure Skating',
    description: 'Anastasia Metelkina and Luka Berulava win pairs figure skating silver — a historic first Winter Olympic medal for Georgia at Milano Cortina 2026.',
    type: 'article',
    publishedTime: publishDate,
    authors: ['ObjectWire Olympic Bureau'],
    url: 'https://www.objectwire.org/winter-olympics/georgia/first-winter-olympic-medal-figure-skating',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Georgia Wins First Ever Winter Olympic Medal — Pairs Figure Skating Silver',
    description: 'Metelkina and Berulava make history for a nation at Milano Cortina 2026.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/georgia/first-winter-olympic-medal-figure-skating',
  },
};

export default function GeorgiaFirstWinterMedalPage() {
  return (
    <>
      <NewsArticleSchema
        title="Georgia Wins First Ever Winter Olympic Medal in Pairs Figure Skating | Milano Cortina 2026"
        description="Anastasia Metelkina and Luka Berulava made history at Milano Cortina 2026 by winning Georgia's first-ever Winter Olympic medal — a silver in pairs figure skating that has sent a nation into celebration."
        publishedTime={publishDate}
        modifiedTime={publishDate}
        author="ObjectWire Olympic Bureau"
        authorUrl="https://www.objectwire.org/team"
        articleUrl="https://www.objectwire.org/winter-olympics/georgia/first-winter-olympic-medal-figure-skating"
        section="Sports"
        keywords={['Georgia', 'Winter Olympics', 'first medal', 'figure skating', 'pairs', 'Metelkina', 'Berulava', 'Milano Cortina 2026']}
      />

      <NewsArticle
        title="Georgia Wins Its First Ever Winter Olympic Medal in Pairs Figure Skating"
        subtitle="Anastasia Metelkina and Luka Berulava deliver silver in a performance that makes history for a nation — one of the most emotional moments of Milano Cortina 2026"
        category="Winter Olympics"
        categoryColor="purple"
        publishDate="February 17, 2026"
        readTime="6 min read"
        author={{
          name: 'ObjectWire Olympic Bureau',
          role: 'Olympics Coverage',
          authorSlug: 'team',
        }}
        tags={['Georgia', 'Figure Skating', 'Pairs', 'Historic First Medal', 'Milano Cortina 2026', 'Metelkina', 'Berulava']}
      >
        <p>
          <strong>MILAN, ITALY</strong> — When Anastasia Metelkina and Luka Berulava stepped off the ice at the Mediolanum Forum on Monday, they did so as the most decorated Winter Olympians in the history of their country. The pairs figure skating silver medal they won at the <Link href="/winter-olympics" className="text-blue-600 hover:underline">Milano Cortina 2026 Winter Olympics</Link> is Georgia&apos;s first-ever Winter Olympic medal — a milestone that prompted spontaneous celebrations in Tbilisi and tears from the athletes, their coaches, and an entire nation watching from home.
        </p>
        <p>
          Georgia has competed at the Winter Olympics since 1994. For 32 years, the country&apos;s athletes stood on the start line, the ice, the slope — and never reached the podium. On Monday evening in Milan, Metelkina and Berulava ended that wait in the most elegant fashion possible: a pairs figure skating program that combined technical precision with genuine artistry, earning scores that placed them second behind China&apos;s defending champions.
        </p>

        <h2>A Performance Built on Years of Sacrifice</h2>
        <p>
          Metelkina and Berulava are a relatively young pair by international pairs skating standards, but their free skating program on Monday carried the confidence of athletes who knew exactly what was at stake and chose to channel that pressure into performance rather than fear. Their long program, skated to a sweeping orchestral arrangement, featured several high-difficulty elements that required sustained technical delivery under the most intense conditions either had experienced.
        </p>
        <p>
          Their side-by-side triple jumps were executed cleanly, their throw jumps landed with power and control, and the pair&apos;s lifts — always a signature strength — were held with the kind of stability that reads to judges as mastery. When the scores posted and it became clear they had secured the silver medal position, both skaters collapsed into each other&apos;s arms at center ice.
        </p>
        <p>
          &quot;We didn&apos;t come here just to compete,&quot; Berulava said. &quot;We came to win something. We wanted to bring Georgia something it had never had. Tonight, we did that.&quot;
        </p>

        <h2>32 Years of Winter Olympic History — and Now a Medal</h2>
        <p>
          Georgia first competed at a Winter Olympics in Lillehammer 1994, the year the country made its international debut following independence from the Soviet Union. In the three decades since, Georgian athletes have competed in alpine skiing, biathlon, cross-country skiing, luge, and figure skating without reaching the podium.
        </p>
        <p>
          The country&apos;s Olympic success has historically come in the Summer Games — Georgia has been a consistent medal-winner in wrestling, judo, and weightlifting, disciplines with deep cultural roots in the Caucasus region. But winter sport has represented an uncrossed frontier, until now.
        </p>
        <p>
          The silver medal will be received in Georgia with the same fervor as a gold in a larger winter sports nation. The country&apos;s president issued a statement within minutes of the result being confirmed, declaring Monday a day of national pride. Georgian television was broadcasting live reaction shots from Tbilisi — crowds gathered in squares, flags waving, strangers embracing.
        </p>

        <h2>How Metelkina and Berulava Got Here</h2>
        <p>
          The pair train primarily in Europe, where they have had access to coaches and facilities that Georgia itself cannot yet provide at the Olympic development level. Their path has required the kind of logistical and financial sacrifices common among athletes from smaller winter sports nations — a patchwork of funding, travel, and training arrangements that demands as much resilience off the ice as on it.
        </p>
        <p>
          They first began competing internationally as a pair several years ago and have steadily climbed the Grand Prix standings, showing flashes of medal-level potential at European Championships. Milano Cortina 2026 represented their first Olympic Games together, and they chose the biggest stage of their lives to produce their defining performance.
        </p>
        <p>
          Metelkina, who handles the athleticism of the pair&apos;s jumps and throw elements with impressive consistency, praised her partner&apos;s steadiness throughout the competition week. &quot;Luka kept me calm every day. Even when I was nervous, he was steady. That steadiness got us here.&quot;
        </p>

        <h2>Gold to China, Bronze Goes to the United States</h2>
        <p>
          The gold medal in pairs figure skating went to China&apos;s dominant pairing, who delivered a technically superior program that reaffirmed their status as the world&apos;s best. China has been a perennial powerhouse in pairs skating, and their win at Milano Cortina continues a remarkable run of Olympic success in the discipline.
        </p>
        <p>
          The bronze medal was claimed by an American pair, adding to <Link href="/winter-olympics/usa" className="text-blue-600 hover:underline">Team USA&apos;s</Link> growing medal count at these Games. The American performance was strong but ultimately fell short of Georgia&apos;s inspired free skating in what judges scored as a tight contest for the silver position.
        </p>

        <h2>A Historic Weekend of &quot;First Ever&quot; Milestones</h2>
        <p>
          Georgia&apos;s silver is part of a broader narrative at <Link href="/winter-olympics" className="text-blue-600 hover:underline">Milano Cortina 2026</Link> that has seen multiple nations win their first-ever Winter Olympic medals in the same competition window. Brazil also claimed its first Winter Olympic medal and gold earlier in the Games — a remarkable coincidence that has framed these Games as an expansion of the global winter sports community.
        </p>
        <p>
          The International Olympic Committee has pointed to both achievements as evidence that the sport development investments made in emerging winter sports nations over the past decade are beginning to bear fruit at the Olympic level — a shift that, if sustained, could reshape the competitive landscape of future Games.
        </p>

        <h2>What This Medal Means for Georgian Sport</h2>
        <p>
          Georgia&apos;s sporting culture runs deep — the country punches well above its weight in combat sports at the Summer Olympics, and ice hockey has a passionate if small following. But winter sport funding and infrastructure have always lagged, making this medal not just an athletic achievement but a political and cultural argument for investment in the country&apos;s winter program.
        </p>
        <p>
          For Metelkina and Berulava, the immediate future involves a return to competition on the Grand Prix circuit — but as Olympic silver medalists, a status that changes everything from sponsorship possibilities to scheduling priority to how the world perceives Georgian figure skating.
        </p>
        <p>
          &quot;This is just the beginning,&quot; Metelkina said quietly, still in tears, her silver medal around her neck. &quot;We want to come back. We want more.&quot;
        </p>

        <h2>Related Winter Olympics Coverage</h2>
        <ul>
          <li><Link href="/winter-olympics" className="text-blue-600 hover:underline">Milano Cortina 2026 — Full Coverage Hub</Link></li>
          <li><Link href="/winter-olympics/italy/speedskating-team-pursuit-gold-2026" className="text-blue-600 hover:underline">Italy Stuns USA in Speedskating Team Pursuit</Link></li>
          <li><Link href="/winter-olympics/usa/elana-meyers-taylor-bobsled-gold" className="text-blue-600 hover:underline">Elana Meyers Taylor Wins Historic Monobob Gold</Link></li>
          <li><Link href="/winter-olympics/norway" className="text-blue-600 hover:underline">Norway Leads Overall Medal Standings</Link></li>
        </ul>
      </NewsArticle>
    </>
  );
}
