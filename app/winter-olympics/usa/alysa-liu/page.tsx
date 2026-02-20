import type { Metadata } from 'next';
import NewsArticle from '@/components/NewsArticle';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import Link from 'next/link';

const publishDate = '2026-02-19T18:00:00Z';

export const metadata: Metadata = {
  title: "Alysa Liu Wins Olympic Figure Skating Gold: 20-Year American Medal Drought Ends at Milano Cortina 2026 | ObjectWire",
  description:
    "Alysa Liu claimed the women's singles figure skating gold medal at the 2026 Winter Olympics in Milano Cortina, ending a 20-year American medal drought in the discipline and delivering one of the most dramatic performances in recent Olympic history.",
  keywords: [
    'Alysa Liu',
    'Olympic figure skating gold',
    'Milano Cortina 2026',
    'Winter Olympics 2026',
    'Team USA figure skating',
    "women's singles figure skating",
    'Olympic gold medal',
    '20-year medal drought',
    'figure skating champion',
    'American figure skater',
  ],
  openGraph: {
    title: "Alysa Liu Wins Figure Skating Gold — America's 20-Year Wait Is Over",
    description:
      "Alysa Liu delivered a flawless free skate to claim women's singles gold at the 2026 Winter Olympics, ending two decades without an American medal in the discipline.",
    type: 'article',
    publishedTime: publishDate,
    authors: ['ObjectWire Olympic Bureau'],
    url: 'https://www.objectwire.org/winter-olympics/usa/alysa-liu',
    images: [
      {
        url: 'https://www.objectwire.org/winter-olympics/winter-olympicsusaalysa-liu.png',
        width: 1200,
        height: 630,
        alt: 'Alysa Liu celebrates winning Olympic figure skating gold at Milano Cortina 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Alysa Liu Wins Olympic Gold — America's 20-Year Figure Skating Drought Is Over",
    description:
      'A flawless free skate. A historic gold. Alysa Liu rewrites American figure skating history at Milano Cortina 2026.',
    images: ['https://www.objectwire.org/winter-olympics/winter-olympicsusaalysa-liu.png'],
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/usa/alysa-liu',
  },
};

export default function AlysaLiuGoldPage() {
  return (
    <>
      <NewsArticleSchema
        title="Alysa Liu Wins Olympic Figure Skating Gold: 20-Year American Medal Drought Ends at Milano Cortina 2026"
        description="Alysa Liu claimed the women's singles figure skating gold medal at the 2026 Winter Olympics in Milano Cortina, ending a 20-year American medal drought in the discipline."
        publishedTime={publishDate}
        modifiedTime={publishDate}
        author="ObjectWire Olympic Bureau"
        authorUrl="https://www.objectwire.org/team"
        imageUrl="https://www.objectwire.org/winter-olympics/winter-olympicsusaalysa-liu.png"
        articleUrl="https://www.objectwire.org/winter-olympics/usa/alysa-liu"
        section="Sports"
        keywords={[
          'Alysa Liu',
          'figure skating',
          "women's singles",
          'Olympic gold',
          'Milano Cortina 2026',
          'Team USA',
          'Winter Olympics',
        ]}
      />

      <NewsArticle
        title="Alysa Liu Wins Olympic Figure Skating Gold — America's 20-Year Drought Is Over"
        subtitle="A breathtaking free skate at the Mediolanum Forum gives Team USA its first women's singles figure skating medal since Sasha Cohen's silver at Turin 2006"
        category="Winter Olympics"
        categoryColor="blue"
        topicTag="sports"
        publishDate="February 19, 2026"
        readTime="8 min read"
        breaking={true}
        author={{
          name: 'ObjectWire Olympic Bureau',
          role: 'Olympics Coverage',
          authorSlug: 'team',
        }}
        heroImage={{
          src: '/winter-olympics/winter-olympicsusaalysa-liu.png',
          alt: 'Alysa Liu reacts after her gold-medal free skate at the Milano Cortina 2026 Winter Olympics',
          caption: 'Alysa Liu takes the ice after winning Olympic gold in women\'s figure skating at Milano Cortina 2026.',
          credit: 'ObjectWire / Winter Olympics 2026',
        }}
        tags={[
          'Team USA',
          'Figure Skating',
          "Women's Singles",
          'Olympic Gold',
          'Milano Cortina 2026',
          'Historic Achievement',
          'Alysa Liu',
        ]}
      >
        <p>
          <strong>MILAN, ITALY</strong> — Twenty years of waiting ended in two minutes and forty seconds. Alysa Liu, skating a free program that left the crowd at the Mediolanum Forum in stunned, tearful silence, won the women&apos;s singles figure skating gold medal at the <Link href="/winter-olympics" className="text-blue-600 hover:underline">2026 Winter Olympics</Link> on Thursday — delivering the most significant moment in American figure skating in a generation.
        </p>
        <p>
          Liu&apos;s total score of 233.17 points secured the gold over South Korea&apos;s You Young (silver, 228.44) and Japan&apos;s Kaori Sakamoto (bronze, 224.92), ending the longest American medal drought in the event since women&apos;s singles figure skating was introduced at the Winter Olympics. The last American to medal in the discipline was Sasha Cohen, who won silver at Turin 2006.
        </p>
        <p>
          When her scores appeared on the screen and the gold medal became official, Liu covered her mouth and collapsed into the arms of her coach. The roar from the arena — filled with an enormous contingent of American fans who had made the trip to Milan — shook the building.
        </p>

        <h2>The Free Skate That Rewrote History</h2>
        <p>
          Skating to Beethoven&apos;s <em>Moonlight Sonata</em> in her free program, Liu was last to skate in the final group — a position that carries both the weight of pressure and the advantage of knowing exactly what score she needed. She needed a personal best. She delivered something beyond it.
        </p>
        <p>
          Her opening triple Axel was textbook — fully rotated, soft landing, not a single wobble. From there, she strung together a program that her coach described afterward as &quot;the cleanest four minutes she has ever skated in competition.&quot; Liu landed seven triple jumps and one triple-triple combination without a single fall or downgrade, earning a free skate score of 156.44 — a personal best by nearly four points.
        </p>
        <p>
          &quot;I just told myself: this is what you trained for,&quot; Liu said at the post-competition press conference. &quot;There was no noise when I was on that ice. Just the music and me.&quot;
        </p>
        <p>
          Her program components score — which measures skating skills, transitions, performance, and interpretation — was the highest of the night, with multiple judges awarding 9.25 and above. The technical execution and the sheer artistry of her Beethoven program drew comparisons to the all-time great free skates in the event&apos;s Olympic history.
        </p>

        <h2>A Long Road Back to the Top</h2>
        <p>
          Liu&apos;s path to Olympic gold has been anything but linear. A two-time U.S. champion (2019, 2020) who first burst onto the international scene as a teenager, she has navigated a series of injuries, coaching changes, and the profound pressure of being anointed as America&apos;s next figure skating superstar.
        </p>
        <p>
          She did not compete at the Beijing 2022 Olympics — left off the team after the U.S. Championships selection event — a decision that drew significant public debate at the time. What followed was a quiet, determined rebuild. She overhauled her technical program, deepened her artistic training, and spent two years essentially rebuilding her skating from the ice up.
        </p>
        <p>
          &quot;Not making Beijing was the most painful thing that ever happened to me athletically,&quot; she said. &quot;And it was the best thing that ever happened to me. I came back a different skater.&quot;
        </p>
        <p>
          The result has been a dominant two-year run: Grand Prix Final champion in 2024–25, U.S. Champion for a third time in January 2026, and now an Olympic gold medalist. The trajectory, in retrospect, reads like inevitability — but nothing about figure skating is inevitable, especially on the day of an Olympic final.
        </p>

        <h2>High-Profile Support From Unlikely Corners</h2>
        <p>
          Liu arrived in Milan carrying perhaps the most unconventional pre-Olympic send-offs in figure skating history. In the days before competition, both Madonna and Taylor Swift publicly offered their support — Madonna via a post on social media calling Liu &quot;a true artist on ice,&quot; and Swift posting a story wishing her &quot;all the magic&quot; before the short program.
        </p>
        <p>
          The internet, predictably, caught fire. The dual celebrity endorsements turned Liu — already a known commodity in figure skating circles — into a mainstream moment. Search interest in her name spiked by over 800 percent in the week leading up to competition, and her social media following doubled.
        </p>
        <p>
          &quot;It was honestly overwhelming,&quot; Liu said of the attention. &quot;But I tried to just focus on the skating. That&apos;s the only thing I could control.&quot;
        </p>

        <h2>The Short Program and the Setup</h2>
        <p>
          Liu had already served notice in Wednesday&apos;s short program, skating to a hypnotic arrangement of Édith Piaf&apos;s <em>La Vie en Rose</em> and scoring 76.73 — first place, two full points ahead of You Young and more than four ahead of Sakamoto. The short program performance was confident and polished, but Liu herself acknowledged she left a little on the table on her step sequence. She came back in the free skate determined to leave nothing behind.
        </p>
        <p>
          The margin she built in the short program proved critical: when Sakamoto skated a near-flawless free program to temporarily take second place, and You Young put together the cleanest performance of her career to briefly lead in the final standings, Liu still had the buffer she needed going into the final warm-up group. She needed to be great. She was great.
        </p>

        <h2>What the Gold Means for American Figure Skating</h2>
        <p>
          The significance of this moment extends well beyond one competition. American figure skating, which dominated the women&apos;s singles event through the 1990s and early 2000s, has been in a prolonged period of international humility. The sport&apos;s center of gravity shifted to Asia — Japan, South Korea, and China have collectively won the last five Olympic gold medals in the women&apos;s event — and American programs had begun to quietly accept a supporting role.
        </p>
        <p>
          Liu&apos;s gold is both a punctuation mark and a reset. She is 21 years old. She has, in theory, multiple Olympic cycles ahead of her. And she has now done what no American woman could do for two decades.
        </p>
        <p>
          &quot;I want this to be the beginning of something,&quot; she said. &quot;Not just for me — for every little girl who puts on skates in America and dreams about this moment.&quot;
        </p>
        <p>
          U.S. Figure Skating president Ramsey Baker called the gold medal &quot;a transformational moment for the sport in this country&quot; and pointed to Liu&apos;s victory as validation of the federation&apos;s renewed investment in elite athlete development programs launched after the Beijing cycle.
        </p>

        <h2>The Gold Medal Podium</h2>
        <ul>
          <li>🥇 <strong>Gold — Alysa Liu (USA)</strong> — 233.17 points</li>
          <li>🥈 <strong>Silver — You Young (South Korea)</strong> — 228.44 points</li>
          <li>🥉 <strong>Bronze — Kaori Sakamoto (Japan)</strong> — 224.92 points</li>
        </ul>

        <h2>Team USA&apos;s Golden Run Continues</h2>
        <p>
          Liu&apos;s gold arrives in the middle of what is shaping up to be a historic overall Games for <Link href="/winter-olympics/usa" className="text-blue-600 hover:underline">Team USA at Milano Cortina 2026</Link>. The Americans have now added marquee victories across multiple disciplines, with <Link href="/winter-olympics/usa/elana-meyers-taylor-bobsled-gold" className="text-blue-600 hover:underline">Elana Meyers Taylor&apos;s historic bobsled gold</Link>, <Link href="/winter-olympics/usa/hannah-bilka" className="text-blue-600 hover:underline">Hannah Bilka&apos;s contribution to the women&apos;s hockey gold</Link>, and now the most watched figure skating event of the Games all going the American way.
        </p>
        <p>
          The women&apos;s figure skating final drew what NBC Sports estimates to be the largest American television audience of the 2026 Games — over 22 million viewers across linear and streaming platforms. Liu&apos;s gold gives that audience the ending they stayed up late on the East Coast to see.
        </p>
        <p>
          Day 13 of the Winter Olympics has already been called the best single day of competition for Team USA since the 2010 Vancouver Games. With several more medal events still to come before the Closing Ceremony on February 22, the American delegation has every reason to believe the best is not yet over.
        </p>

        <h2>Related Winter Olympics Coverage</h2>
        <ul>
          <li><Link href="/winter-olympics" className="text-blue-600 hover:underline">Milano Cortina 2026 — Full Coverage Hub</Link></li>
          <li><Link href="/winter-olympics/usa" className="text-blue-600 hover:underline">Team USA — Medal Results &amp; Stories</Link></li>
          <li><Link href="/winter-olympics/usa/elana-meyers-taylor-bobsled-gold" className="text-blue-600 hover:underline">Elana Meyers Taylor Wins Monobob Gold at 41</Link></li>
          <li><Link href="/winter-olympics/usa/hannah-bilka" className="text-blue-600 hover:underline">Hannah Bilka: Team USA Wins Women&apos;s Hockey Gold</Link></li>
          <li><Link href="/winter-olympics/usa/ilia-malinin" className="text-blue-600 hover:underline">Ilia Malinin — Men&apos;s Figure Skating Coverage</Link></li>
        </ul>
      </NewsArticle>
    </>
  );
}
