import type { Metadata } from 'next';
import NewsArticle from '@/components/NewsArticle';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import Link from 'next/link';

const publishDate = '2026-02-17T17:00:00Z';

export const metadata: Metadata = {
  title: 'Jens Luraas Oftebro Wins Second Gold in Nordic Combined at Milano Cortina 2026 | ObjectWire',
  description: 'Norway\'s Jens Luraas Oftebro claimed his second gold medal of the Milano Cortina 2026 Winter Olympics with a dominant performance in Nordic combined, surging past the field in the 10km cross-country leg.',
  keywords: [
    'Jens Luraas Oftebro', 'Nordic combined gold', 'Norway Winter Olympics',
    'Milano Cortina 2026', 'Nordic combined 2026', 'Norway gold medal',
    'Winter Olympics 2026', 'cross-country skiing', 'ski jumping', 'Norwegian dominance',
  ],
  openGraph: {
    title: 'Oftebro Wins Second Nordic Combined Gold at Milano Cortina 2026',
    description: 'Norway\'s Jens Luraas Oftebro cements his status as the Games\' dominant Nordic combined athlete with a second gold medal and a powerful 10km finish.',
    type: 'article',
    publishedTime: publishDate,
    authors: ['ObjectWire Olympic Bureau'],
    url: 'https://www.objectwire.org/winter-olympics/norway/oftebro-second-nordic-combined-gold',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oftebro Wins Second Gold in Nordic Combined | Milano Cortina 2026',
    description: 'Norway\'s dominant Nordic combined athlete delivers another commanding victory at the Winter Olympics.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/norway/oftebro-second-nordic-combined-gold',
  },
};

export default function OftebroSecondNordicCombinedGoldPage() {
  return (
    <>
      <NewsArticleSchema
        title="Jens Luraas Oftebro Wins Second Gold in Nordic Combined at Milano Cortina 2026"
        description="Norway's Jens Luraas Oftebro claimed his second gold medal of the Milano Cortina 2026 Winter Olympics with a dominant performance in Nordic combined, surging past the field in the 10km cross-country leg."
        publishedTime={publishDate}
        modifiedTime={publishDate}
        author="ObjectWire Olympic Bureau"
        authorUrl="https://www.objectwire.org/team"
        articleUrl="https://www.objectwire.org/winter-olympics/norway/oftebro-second-nordic-combined-gold"
        section="Sports"
        keywords={['Oftebro', 'Nordic combined', 'Norway', 'gold medal', 'Milano Cortina 2026', 'Winter Olympics', 'skiing']}
      />

      <NewsArticle
        title="Oftebro Wins Second Nordic Combined Gold at Milano Cortina 2026"
        subtitle="Norway's Jens Luraas Oftebro cements his place as the Games' most dominant individual athlete with a second gold — powered by a late surge in the 10km cross-country leg that no rival could match"
        category="Winter Olympics"
        categoryColor="blue"
        publishDate="February 17, 2026"
        readTime="5 min read"
        author={{
          name: 'ObjectWire Olympic Bureau',
          role: 'Olympics Coverage',
          authorSlug: 'team',
        }}
        tags={['Norway', 'Nordic Combined', 'Oftebro', 'Olympic Gold', 'Milano Cortina 2026', 'Cross-Country Skiing', 'Ski Jumping']}
      >
        <p>
          <strong>VAL DI FIEMME, ITALY</strong> — Jens Luraas Oftebro has been the most complete Nordic combined athlete at these Games, and on Monday he proved it again. The Norwegian claimed his second gold medal at the <Link href="/winter-olympics" className="text-blue-600 hover:underline">Milano Cortina 2026 Winter Olympics</Link> in the individual Gundersen event, closing a commanding gap in the 10km cross-country leg to surge past rivals who had held brief leading positions and cross the finish line with the clinical efficiency that has defined his entire campaign in Italy.
        </p>
        <p>
          Oftebro now stands as the undisputed star of Nordic combined at these Games — two starts, two golds — and his performance across both events has reinforced Norway&apos;s long-standing stranglehold on a discipline that the country essentially invented and has dominated at the Olympic level for over a century.
        </p>

        <h2>How the Race Unfolded</h2>
        <p>
          Nordic combined&apos;s Gundersen format determines the cross-country starting order from ski jumping scores: the better you jump, the earlier you start. Oftebro&apos;s jumping performance in the morning session placed him among the leaders at the start of the 10km race, though not so far ahead that he could simply coast to victory.
        </p>
        <p>
          The early leaders — a German athlete and Japan&apos;s Ryota Yamamoto — pushed the pace through the first half of the course, hoping to build a gap large enough to hold off whatever Oftebro would bring in the final kilometers. The Norwegian was methodical in the early laps, settling into a controlled rhythm and conserving what would become a devastating late surge.
        </p>
        <p>
          With roughly four kilometers remaining, Oftebro shifted gears. The change in pace was unmistakable — his stride rate increased, his upper body relaxed, and the gap to the leaders began to close with a geometric efficiency that left television commentators reaching for superlatives. By the two-kilometer mark he had pulled even. By the final kilometer, he was ahead and accelerating.
        </p>
        <p>
          He crossed the line alone, raising his poles to the crowd gathered at the Val di Fiemme stadium.
        </p>
        <p>
          &quot;I knew I had it in the last few kilometers,&quot; Oftebro said. &quot;I felt strong. I just had to execute. When I passed the German guy I didn&apos;t look back. I just skied to the finish.&quot;
        </p>

        <h2>A Double Gold Campaign That Defines These Games</h2>
        <p>
          Oftebro&apos;s first gold came earlier in the Milano Cortina program, and the degree of difficulty in defending that level of performance — with competitors analyzing your racing style and jumping technique between events — is considerable. He managed it with apparent ease.
        </p>
        <p>
          At 24 years old, Oftebro is already establishing himself as one of the all-time Norwegian figures in a discipline where the bar for greatness is set extraordinarily high. His jumping is technically sophisticated, his cross-country speed is world-class, and his competitive composure — particularly in the final kilometers of races — has been unflappable across both events in Italy.
        </p>
        <p>
          The double gold places him among Milan 2026&apos;s most decorated individual athletes and contributes significantly to <Link href="/winter-olympics/norway" className="text-blue-600 hover:underline">Norway&apos;s</Link> lead atop the overall medal standings. Norway entered Day 11 as the clear table leader and this result deepens that advantage.
        </p>

        <h2>Nordic Combined and the Women&apos;s Event Controversy</h2>
        <p>
          Oftebro&apos;s victory was also the backdrop for renewed debate about the continued absence of women&apos;s Nordic combined from the Olympic program — a controversy that has followed the Games for years and intensified during Milano Cortina 2026.
        </p>
        <p>
          Women&apos;s Nordic combined made its Olympic debut as a demonstration event during these Games, with several athletes and national federations using the media attention around the men&apos;s gold medal races to call for full inclusion alongside the men&apos;s program at future Olympics. The advocacy has been prominent and public, with protests staged near the Val di Fiemme venue.
        </p>
        <p>
          Oftebro himself addressed the issue briefly in his post-race press conference: &quot;The women&apos;s athletes work just as hard as we do. They deserve to be at the Olympics. It&apos;s pretty simple.&quot;
        </p>
        <p>
          The IOC and FIS — the international ski federation — have yet to confirm a timeline for women&apos;s Nordic combined&apos;s full Olympic inclusion, despite growing pressure from athletes, coaches, and fan communities across the sport.
        </p>

        <h2>Norway&apos;s Dominant Overall Campaign</h2>
        <p>
          This latest gold continues what has been an exceptional Games for <Link href="/winter-olympics/norway" className="text-blue-600 hover:underline">Norway</Link> — a country whose Winter Olympic success is so consistent that it often understates the quality of individual performances within it. The Norwegians won six medals in a single day earlier in the competition window and have maintained their lead at the top of the standings despite competitive challenges from Italy, the USA, and Germany.
        </p>
        <p>
          Nordic combined — along with cross-country skiing and biathlon — represents one of the disciplines where Norway&apos;s sporting culture provides the deepest competitive foundation. Children grow up on skis. The sport&apos;s culture is embedded at every level of Norwegian society. Oftebro is the latest expression of that culture performing at its highest level on the world&apos;s largest stage.
        </p>

        <h2>Related Winter Olympics Coverage</h2>
        <ul>
          <li><Link href="/winter-olympics" className="text-blue-600 hover:underline">Milano Cortina 2026 — Full Coverage Hub</Link></li>
          <li><Link href="/winter-olympics/norway" className="text-blue-600 hover:underline">Norway at Milano Cortina 2026 — Medal Tracker</Link></li>
          <li><Link href="/winter-olympics/france/biathlon-relay-gold-perrot-2026" className="text-blue-600 hover:underline">France Wins Biathlon Relay Gold in Dramatic Comeback</Link></li>
          <li><Link href="/winter-olympics/usa/elana-meyers-taylor-bobsled-gold" className="text-blue-600 hover:underline">Elana Meyers Taylor Wins Historic Monobob Gold</Link></li>
          <li><Link href="/winter-olympics/georgia/first-winter-olympic-medal-figure-skating" className="text-blue-600 hover:underline">Georgia Wins First Ever Winter Olympic Medal</Link></li>
        </ul>
      </NewsArticle>
    </>
  );
}
