import type { Metadata } from 'next';
import NewsArticle from '@/components/NewsArticle';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import Link from 'next/link';

const publishDate = '2026-02-19T22:00:00Z';

export const metadata: Metadata = {
  title: "Team USA Wins Women's Hockey Gold: Megan Keller's OT Goal Beats Canada 2-1 at Milano Cortina 2026 | ObjectWire",
  description:
    "Team USA won the women's ice hockey gold medal at the 2026 Winter Olympics, defeating Canada 2-1 in overtime. Megan Keller scored the winner at 4:07 of OT after Hilary Knight's clutch tying goal with 2:04 left in regulation.",
  keywords: [
    "Team USA women's hockey gold",
    'Milano Cortina 2026',
    'Winter Olympics 2026',
    "women's ice hockey",
    'Megan Keller overtime goal',
    'Hilary Knight',
    'Hannah Bilka',
    'USA Canada hockey final',
    'Olympic gold medal hockey',
    'Aerin Frankel',
  ],
  openGraph: {
    title: "Team USA Wins Women's Hockey Gold — Keller's OT Goal Stuns Canada",
    description:
      "Megan Keller scored in overtime, Hilary Knight tied it with 2 minutes left, and Team USA captured the women's ice hockey gold medal at Milano Cortina 2026.",
    type: 'article',
    publishedTime: publishDate,
    authors: ['ObjectWire Sports Desk'],
    url: 'https://www.objectwire.org/news/team-usa-womens-hockey-gold-2026',
    images: [
      {
        url: 'https://www.objectwire.org/winter-olympics-womens-hockey-gold.jpg',
        width: 1200,
        height: 630,
        alt: "Team USA celebrates winning women's ice hockey gold at Milano Cortina 2026",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "USA Beats Canada in OT for Women's Hockey Gold | Milano Cortina 2026",
    description:
      "Megan Keller OT winner. Hilary Knight tying goal. Team USA wins gold. The full story.",
  },
  alternates: {
    canonical: 'https://www.objectwire.org/news/team-usa-womens-hockey-gold-2026',
  },
};

export default function WomensHockeyGoldPage() {
  return (
    <>
      <NewsArticleSchema
        title="Team USA Wins Women's Hockey Gold: Megan Keller's OT Goal Beats Canada 2-1 at Milano Cortina 2026"
        description="Team USA won the women's ice hockey gold medal at the 2026 Winter Olympics, defeating Canada 2-1 in overtime on February 19."
        publishedTime={publishDate}
        modifiedTime={publishDate}
        author="ObjectWire Sports Desk"
        authorUrl="https://www.objectwire.org/team"
        articleUrl="https://www.objectwire.org/news/team-usa-womens-hockey-gold-2026"
        section="Sports"
        keywords={[
          "women's hockey",
          'Team USA',
          'Olympic gold',
          'Milano Cortina 2026',
          'Megan Keller',
          'Hilary Knight',
          'Hannah Bilka',
        ]}
      />

      <NewsArticle
        title="Team USA Wins Women's Hockey Gold — Keller's OT Goal Stuns Canada 2-1"
        subtitle="Hilary Knight ties it with 2 minutes left, Megan Keller wins it in overtime — Team USA captures its third Olympic gold in women's hockey and first since 2018"
        category="Winter Olympics"
        categoryColor="blue"
        topicTag="sports"
        publishDate="February 19, 2026"
        readTime="7 min read"
        breaking={true}
        author={{
          name: 'ObjectWire Sports Desk',
          role: 'Olympics Coverage',
          authorSlug: 'team',
        }}
        tags={[
          'Team USA',
          "Women's Hockey",
          'Olympic Gold',
          'Milano Cortina 2026',
          'Megan Keller',
          'Hilary Knight',
          'Hannah Bilka',
          'Overtime',
        ]}
      >
        <p>
          <strong>MILAN, ITALY</strong> — They were down. They were seconds away from silver. And then, in one of the most dramatic finishes in the history of Olympic women&apos;s ice hockey, <strong>Team USA pulled it back</strong> — and then won it outright.
        </p>
        <p>
          <Link href="/winter-olympics/usa" className="text-blue-600 hover:underline">Team USA</Link> defeated Canada 2-1 in overtime to win the women&apos;s ice hockey gold medal at the <Link href="/winter-olympics" className="text-blue-600 hover:underline">2026 Milano Cortina Winter Olympics</Link> on Thursday evening at the Santagiulia Arena in Milan. <strong>Megan Keller</strong> scored the gold-medal winner at 4:07 of 3-on-3 overtime, capping a comeback that will be replayed on highlight reels for decades.
        </p>
        <p>
          It is Team USA&apos;s third Olympic gold medal in the women&apos;s game and its first since the 2018 PyeongChang shootout win — also against Canada. The gold ends a four-year wait and avenges Canada&apos;s 3-2 victory at the 2022 Beijing Games.
        </p>

        <h2>The Comeback: Knight Ties It With 2:04 Left</h2>
        <p>
          Canada had led 1-0 deep into the third period and appeared to be heading toward the gold. With the clock ticking under two and a half minutes and the game on the line, USA coach Krissy Wendell-Pohl pulled goalie <strong>Aerin Frankel</strong> for the extra attacker.
        </p>
        <p>
          At 17:56 of the third period — with 2:04 remaining in regulation — <strong>Hilary Knight</strong> deflected a shot from <strong>Laila Edwards</strong> past Canada&apos;s goaltender to tie the game 1-1. The Santagiulia Arena erupted. Knight raised her stick, and the American bench poured over the boards.
        </p>
        <p>
          It was Knight&apos;s <strong>15th career Olympic goal</strong> — more than any other U.S. hockey player, male or female, in the history of the Games. The 36-year-old captain, competing in her fifth Olympics, had just written the most important moment of the most decorated international career in American hockey history.
        </p>
        <p>
          &quot;I wasn&apos;t going to let it end like that,&quot; Knight said after the game. &quot;Not in my last one. Not against Canada.&quot;
        </p>

        <h2>Overtime: Keller Wins It</h2>
        <p>
          The game went to 3-on-3 sudden-death overtime. In that format — wide open ice, high pressure, one mistake ends it — <strong>Megan Keller</strong> proved to be the difference.
        </p>
        <p>
          At 4:07 of overtime, Keller received a pass above Canada&apos;s blue line, skated past a defender with a sharp inside move, cut hard toward the net, and buried a backhand past the Canadian goaltender. She threw her arms up. Her teammates swarmed her. The horn sounded. Gold.
        </p>
        <p>
          It was Keller&apos;s third goal of the tournament — a tournament in which the defenseman had been arguably the most complete player on the American blue line. She is a three-time Olympian and now, finally, a gold medalist.
        </p>
        <p>
          &quot;I just saw the lane and I took it,&quot; Keller said. &quot;Hilary gave us the chance. I just finished it.&quot;
        </p>

        <h2>The Scoring Summary</h2>
        <ul>
          <li><strong>1st Period:</strong> Canada 1, USA 0 — Canada opens scoring</li>
          <li><strong>3rd Period (17:56):</strong> USA 1, Canada 1 — Hilary Knight (Laila Edwards) — empty net tying goal</li>
          <li><strong>Overtime (4:07):</strong> 🥇 <strong>USA 2, Canada 1 — Megan Keller — GOLDEN GOAL</strong></li>
        </ul>

        <h2>Knight's Legacy: The Most Decorated U.S. Hockey Player Ever</h2>
        <p>
          Hilary Knight arrived at Milano Cortina as the most accomplished American hockey player — man or woman — in Olympic history. She left it having extended that record further than anyone thought possible.
        </p>
        <p>
          Her career Olympic totals now stand at <strong>33 points (15 goals, 18 assists) across 29 games spanning five Olympics</strong>. No American hockey player has ever won five Olympic medals. Knight now owns that distinction too, becoming the first U.S. hockey player of either gender to accomplish it.
        </p>
        <p>
          At 36, having carried the American program through multiple cycles as its most visible leader, Knight&apos;s gold at Milano Cortina feels like the ending her career has always deserved — and one the sport will never forget.
        </p>

        <h2>Hannah Bilka: Texas Native Delivers on the Big Stage</h2>
        <p>
          Among the heroes of Team USA&apos;s gold medal run was <strong>Hannah Bilka</strong>, the Coppell, Texas native who finished the tournament with four goals — the joint-highest on the American roster. Bilka, who grew up playing boys&apos; hockey in Dallas because girls&apos; programs were too limited, starred in the preliminary round and was a consistent offensive threat throughout the knockout stages.
        </p>
        <p>
          For full coverage of her journey from Texas to Olympic gold, see: <Link href="/winter-olympics/usa/hannah-bilka" className="text-blue-600 hover:underline">Hannah Bilka — Team USA Ice Hockey Profile</Link>.
        </p>

        <h2>Frankel and the Goaltending Story</h2>
        <p>
          <strong>Aerin Frankel</strong> was exceptional throughout the tournament, allowing just two goals across her five starts. Her willingness to come off the ice in the final minutes of a gold medal game — a call that required immense trust between player and coach — made Knight&apos;s tying goal possible. Without Frankel&apos;s tournament-long performance building that trust, the coaching staff may never have made that pull.
        </p>
        <p>
          She was part of a goaltending tandem alongside Corinne Schroeder that conceded a combined near-record low of goals across the tournament — a platform the offense converted into gold.
        </p>

        <h2>The Full Tournament Roster's Moment</h2>
        <p>
          This gold medal belonged to the entire roster. <strong>Alex Carpenter</strong>, a four-time Olympian who missed the 2018 team, earned her first gold in what was her most complete international tournament. <strong>Kendall Coyne Schofield</strong> won her second Olympic gold. <strong>Kelly Pannek</strong>, <strong>Joy Dunn</strong> (20 years old), <strong>Kirsten Simms</strong>, <strong>Laila Edwards</strong>, and <strong>Abby Murphy</strong> all contributed across the run.
        </p>
        <p>
          It was a complete team performance across a full tournament — and it ended with the right result.
        </p>

        <h2>USA 5-0 Through the Tournament</h2>
        <p>
          Team USA went undefeated through the entire tournament, finishing 5-0-0. They entered the gold medal game as favorites on the back of their dominant preliminary round — including a historic <strong>5-0 shutout of Canada</strong> on February 10 that served as both a statement and a warning. That shutout was the first time Canada had ever been blanked in women&apos;s Olympic ice hockey.
        </p>
        <p>
          Canada regrouped, reached the final, and pushed the Americans to overtime. In the end, it wasn&apos;t enough.
        </p>

        <h2>The Bigger Picture: Day 13 Belongs to Team USA</h2>
        <p>
          The women&apos;s hockey gold capped a Day 13 at Milano Cortina that will go down as one of the greatest single days in Team USA Winter Olympics history. Earlier in the day, <Link href="/winter-olympics/usa/alysa-liu" className="text-blue-600 hover:underline">Alysa Liu won the women&apos;s figure skating gold</Link> — ending a 20-year American medal drought in the discipline. <Link href="/winter-olympics/usa/elana-meyers-taylor-bobsled-gold" className="text-blue-600 hover:underline">Elana Meyers Taylor won monobob gold at 41</Link> earlier in the week. <Link href="/winter-olympics/usa/darryl-payne-jr" className="text-blue-600 hover:underline">Darryl Payne Jr.</Link> made history as the first African American man in U.S. Olympic skeleton. The United States is having a Games for the ages.
        </p>

        <h2>Related Winter Olympics Coverage</h2>
        <ul>
          <li><Link href="/winter-olympics" className="text-blue-600 hover:underline">Milano Cortina 2026 — Full Coverage Hub</Link></li>
          <li><Link href="/winter-olympics/usa" className="text-blue-600 hover:underline">Team USA — All Medal Results &amp; Stories</Link></li>
          <li><Link href="/winter-olympics/usa/hannah-bilka" className="text-blue-600 hover:underline">Hannah Bilka — Ice Hockey Profile</Link></li>
          <li><Link href="/winter-olympics/usa/alysa-liu" className="text-blue-600 hover:underline">Alysa Liu Wins Figure Skating Gold</Link></li>
          <li><Link href="/winter-olympics/usa/elana-meyers-taylor-bobsled-gold" className="text-blue-600 hover:underline">Elana Meyers Taylor Wins Monobob Gold at 41</Link></li>
          <li><Link href="/winter-olympics/usa/elana-meyers" className="text-blue-600 hover:underline">Elana Meyers Taylor — Full Athlete Profile</Link></li>
          <li><Link href="/winter-olympics/usa/darryl-payne-jr" className="text-blue-600 hover:underline">Darryl Payne Jr. — First Black Man in U.S. Olympic Skeleton</Link></li>
          <li><Link href="/winter-olympics/usa/ilia-malinin" className="text-blue-600 hover:underline">Ilia Malinin — Men&apos;s Figure Skating</Link></li>
          <li><Link href="/winter-olympics/usa/jordan-stolz" className="text-blue-600 hover:underline">Jordan Stolz — Speed Skating</Link></li>
          <li><Link href="/winter-olympics/usa/breezy-johnson" className="text-blue-600 hover:underline">Breezy Johnson — Alpine Skiing</Link></li>
        </ul>
      </NewsArticle>
    </>
  );
}
