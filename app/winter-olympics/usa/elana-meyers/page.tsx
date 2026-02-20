import type { Metadata } from 'next';
import {
  ArticlePage,
  Section,
  InfoBox,
  TableOfContents,
  DataTable,
  RelatedLinks,
  Quote,
  Notice,
} from '@/components/ArticlePage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Elana Meyers Taylor — Team USA Bobsled | Olympic Profile | ObjectWire',
  description:
    'Full profile of Elana Meyers Taylor, the 41-year-old American bobsled legend who won Olympic gold at Milano Cortina 2026 — becoming the oldest Olympic bobsled champion in history and the most decorated female bobsledder of all time.',
  keywords: [
    'Elana Meyers Taylor',
    'Team USA bobsled',
    'women\'s monobob',
    'Milano Cortina 2026',
    'Winter Olympics 2026',
    'oldest Olympic bobsled champion',
    'most decorated female bobsledder',
    'Olympic gold medal',
    'bobsled athlete profile',
    'American bobsled history',
  ],
  openGraph: {
    title: 'Elana Meyers Taylor — The Most Decorated Female Bobsledder in Olympic History',
    description:
      'How a college softball player from Georgia became a five-time Olympian, a gold medalist at 41, and the greatest female bobsled pilot in the history of the sport.',
    type: 'article',
    publishedTime: '2026-02-17T14:00:00Z',
    authors: ['ObjectWire Olympic Bureau'],
    url: 'https://www.objectwire.org/winter-olympics/usa/elana-meyers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elana Meyers Taylor — Olympic Gold at 41, Legend for Life',
    description:
      'Five Olympics. Four medals. One gold that rewrote history. The complete story of Elana Meyers Taylor.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/usa/elana-meyers',
  },
};

const tableOfContents = [
  { id: 'early-life', label: 'Early Life & Softball Career' },
  { id: 'switch-to-bobsled', label: 'The Switch to Bobsled' },
  { id: 'olympic-career', label: 'Olympic Career' },
  { id: 'milano-cortina-2026', label: 'Milano Cortina 2026 — Gold at 41' },
  { id: 'records-legacy', label: 'Records & Historic Firsts' },
  { id: 'personal-life', label: 'Personal Life & Advocacy' },
  { id: 'medal-record', label: 'Medal Record' },
];

const infoBoxItems = [
  { label: 'Full Name', value: 'Elana Meyers Taylor' },
  { label: 'Born', value: 'October 24, 1984 (age 41)' },
  { label: 'Birthplace', value: 'Douglasville, Georgia, USA' },
  { label: 'Sport', value: 'Bobsled' },
  { label: 'Events', value: 'Monobob, Two-Woman Bobsled' },
  { label: 'Role', value: 'Pilot' },
  { label: 'National Team', value: '🇺🇸 United States' },
  { label: 'Olympics', value: '5 (2010, 2014, 2018, 2022, 2026)' },
  { label: 'Olympic Medals', value: '4 (1 Gold, 2 Silver, 1 Bronze)' },
  { label: 'College', value: 'George Washington University' },
  { label: 'Previous Sport', value: 'Softball (outfielder/pitcher)' },
];

const relatedLinks = [
  {
    href: '/winter-olympics/usa/elana-meyers-taylor-bobsled-gold',
    label: 'Elana Wins Gold — Full Match Report',
    description: 'Complete coverage of her historic monobob gold medal run at Cortina',
  },
  {
    href: '/winter-olympics/usa',
    label: 'Team USA Winter Olympics Coverage',
    description: 'Complete coverage of American athletes at Milano Cortina 2026',
  },
  {
    href: '/winter-olympics/usa/alysa-liu',
    label: 'Alysa Liu Wins Figure Skating Gold',
    description: "America's 20-year figure skating medal drought ends in Milan",
  },
  {
    href: '/winter-olympics/usa/hannah-bilka',
    label: 'Hannah Bilka — Ice Hockey Profile',
    description: 'From Coppell, Texas to Olympic gold with Team USA hockey',
  },
  {
    href: '/winter-olympics',
    label: 'All Winter Olympics Coverage',
    description: 'Complete Milano Cortina 2026 news and athlete profiles',
  },
];

export default function ElanaMeyersTaylorProfile() {
  return (
    <ArticlePage
      title="Elana Meyers Taylor"
      subtitle="Five Olympics. Four medals. A gold at 41 that made history — the complete story of the greatest female bobsledder in Olympic history"
      category="Team USA • Bobsled"
      lastUpdated="February 17, 2026"
      backLink={{ href: '/winter-olympics/usa', label: 'Back to Team USA' }}
      infoBox={{
        title: 'Elana Meyers Taylor',
        items: infoBoxItems,
      }}
      tableOfContents={tableOfContents}
      relatedLinks={relatedLinks}
    >
      <Section id="early-life" title="Early Life & Softball Career">
        <p>
          Elana Meyers Taylor was born on October 24, 1984, in <strong>Douglasville, Georgia</strong> — a suburb west of Atlanta — and grew up as a multi-sport athlete with an exceptional natural gift for power and explosiveness. She was not a winter sports kid. She was a softball player, and a very good one.
        </p>
        <p>
          At <strong>George Washington University</strong> in Washington, D.C., Meyers Taylor was a standout pitcher and outfielder for the Colonials, earning All-Atlantic 10 honors and building the combination of fast-twitch muscle fiber, coordination, and competitive mentality that would later define a completely different career. She graduated in 2006 with a degree in exercise science.
        </p>
        <Quote source="Elana Meyers Taylor, on her athletic roots">
          &quot;Softball gave me everything — the explosiveness, the mental toughness, the ability to perform under pressure. I just ended up using it on a very different kind of field.&quot;
        </Quote>
        <p>
          Her transition from softball diamond to sliding track is one of the more unlikely origin stories in American Olympic history — a chain of events set in motion by a USA Bobsled &amp; Skeleton recruitment program specifically designed to identify explosive college athletes from non-traditional winter sports backgrounds.
        </p>
      </Section>

      <Section id="switch-to-bobsled" title="The Switch to Bobsled">
        <p>
          In 2007, Meyers Taylor attended a <strong>USA Bobsled talent identification camp</strong> and immediately stood out. Her push times — the critical sprint at the start of a bobsled run that largely determines a team&apos;s competitive fate — were elite from day one. Coaches described her as &quot;a once-in-a-decade physical specimen for the push track.&quot;
        </p>
        <p>
          She began her bobsled career as a <strong>brakeman</strong> — the rear-seat athlete responsible for the push start and the brake at the finish — before transitioning to <strong>pilot</strong>, the driver who steers the sled through the track&apos;s curves. The move to pilot is the harder, more demanding role: it requires years of technical refinement, an intuitive feel for ice conditions, and the nerve to make micro-adjustments at speeds exceeding 130 km/h.
        </p>
        <p>
          Meyers Taylor mastered it. Within two years of picking up the sport, she was competing at World Cup level. Within three, she was bound for her first Olympics.
        </p>
        <Notice type="info">
          USA Bobsled&apos;s athlete recruitment program has produced several world-class pilots by targeting explosive college athletes from track, football, and softball backgrounds. Meyers Taylor is widely considered the program&apos;s greatest success story.
        </Notice>
      </Section>

      <Section id="olympic-career" title="Olympic Career">
        <h3 className="text-xl font-bold mt-6 mb-4">Vancouver 2010 — The Debut</h3>
        <p>
          Meyers Taylor made her Olympic debut at the <strong>2010 Vancouver Games</strong>, competing as a brakeman in the two-woman bobsled alongside pilot Erin Pac. The pair finished fourth — agonizingly outside the medals — but the experience cemented Meyers Taylor&apos;s commitment to the sport and, specifically, to becoming a pilot herself.
        </p>
        <p>
          She spent the next four years overhauling her technical game, working with coaches who had developed some of the fastest European pilots in the sport. The results at Sochi would justify every hour of that work.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">Sochi 2014 — First Medal, New Identity</h3>
        <p>
          As the <strong>pilot</strong> of the USA-1 sled at Sochi 2014, Meyers Taylor won the <strong>silver medal</strong> in two-woman bobsled — her first Olympic medal and the first of what would become an unprecedented collection. She finished behind Canada&apos;s Kaillie Humphries, who took gold, but the silver announced Meyers Taylor as a legitimate world-class pilot.
        </p>
        <p>
          Between Sochi and PyeongChang, she won multiple World Championship medals and established herself as the most consistent American bobsled pilot of her generation — male or female.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">PyeongChang 2018 — The Bronze</h3>
        <p>
          At the <strong>2018 PyeongChang Games</strong>, competing in a uniquely challenging two-woman bobsled field that included Germany&apos;s Mariama Jamanka (gold) and Canada&apos;s Phylicia George (silver), Meyers Taylor won the <strong>bronze medal</strong>. Three Olympics, three medals — a feat no American female bobsledder had ever achieved.
        </p>
        <p>
          She was 33 years old. Most observers assumed her legacy was essentially complete. She had other ideas.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">Beijing 2022 — Silver While Pregnant</h3>
        <p>
          The Beijing Games produced what many consider the defining moment of Meyers Taylor&apos;s career — not because of what she won, but because of the circumstances under which she competed. She arrived at Beijing 2022 <strong>pregnant</strong>, competing in the inaugural women&apos;s monobob event with the knowledge that her son would be born just months after the Games concluded.
        </p>
        <p>
          She won <strong>silver</strong>. Kaillie Humphries — now competing for the United States after switching national federations — took gold. The result was bittersweet for Meyers Taylor, but the sheer act of competing at an Olympic Games while pregnant and finishing on the podium is without modern precedent in bobsled history.
        </p>
        <Quote source="Elana Meyers Taylor, after the Beijing silver medal ceremony">
          &quot;I competed for two now. This one is for him.&quot;
        </Quote>
        <p>
          Her son, Nico, was born in the spring of 2022. He traveled to Italy for her fifth and most triumphant Games.
        </p>
      </Section>

      <Section id="milano-cortina-2026" title="Milano Cortina 2026 — Gold at 41">
        <Notice type="note">
          <strong>RESULT:</strong> Elana Meyers Taylor won the women&apos;s monobob gold medal at the 2026 Winter Olympics on February 17, 2026 — the oldest Olympic bobsled champion in the history of the sport.
        </Notice>
        <p>
          Coming into Milano Cortina, the questions about Meyers Taylor centered not on her ability but on her age. At 41, she was the oldest competitor in the women&apos;s monobob field by a significant margin. Some analysts picked her for a podium — perhaps silver behind the rising German Laura Nolte — but almost no one predicted she would dominate the event from first run to last.
        </p>
        <p>
          She dominated the event from first run to last.
        </p>
        <p>
          On the demanding <strong>Cortina sliding track</strong> — 16 curves, 1,408 meters of ice carved into the Dolomites — Meyers Taylor posted the fastest time in three of the four competitive heats. Her third-run clocking shattered the existing track record. Germany&apos;s Laura Nolte (silver) and Canada&apos;s Christine de Bruin (bronze) never found an answer.
        </p>
        <p>
          When her final run confirmed the gold, she collapsed on the finish ice and wept. Her son Nico, watching from the stands with family, was photographed in a moment that went viral worldwide: a three-year-old holding a tiny American flag, watching his mother become an Olympic champion.
        </p>
        <Quote source="Elana Meyers Taylor, at the post-competition press conference">
          &quot;I&apos;ve been studying this track for two years. Every curve. Every push start variation. I came here knowing every inch of it, and today it all came together. I did this for Nico. I did this for every kid who thinks their window has closed. It hasn&apos;t.&quot;
        </Quote>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h4 className="font-bold text-lg mb-3">Monobob Final Results — Cortina, February 17, 2026</h4>
          <ul className="space-y-2 text-sm">
            <li>🥇 <strong>Elana Meyers Taylor (USA)</strong> — Track record set in Heat 3</li>
            <li>🥈 <strong>Laura Nolte (GER)</strong></li>
            <li>🥉 <strong>Christine de Bruin (CAN)</strong></li>
          </ul>
        </div>

        <p>
          For the full match report and run-by-run breakdown, see:{' '}
          <Link href="/winter-olympics/usa/elana-meyers-taylor-bobsled-gold" className="text-blue-600 hover:underline">
            Elana Meyers Taylor Wins Monobob Gold at 41: Oldest Olympic Bobsled Champion in History
          </Link>.
        </p>
      </Section>

      <Section id="records-legacy" title="Records & Historic Firsts">
        <p>
          Meyers Taylor&apos;s career has rewritten the record books at virtually every stage. The Milano Cortina gold capped a collection of firsts that no other female bobsled athlete has come close to matching:
        </p>
        <ul className="list-disc pl-6 my-4 space-y-3">
          <li>
            <strong>Most Olympic medals by a female bobsledder — ever:</strong> Four medals across four consecutive Games (2014, 2018, 2022, 2026)
          </li>
          <li>
            <strong>Oldest Olympic bobsled champion in history:</strong> At 41 years and 3 months, she surpasses Swiss pilot Beat Hefti (gold, Sochi 2014, age 38)
          </li>
          <li>
            <strong>Oldest American woman to win Winter Olympic gold</strong> in any discipline since 1952
          </li>
          <li>
            <strong>First woman to medal at five consecutive Olympics</strong> in sliding sports
          </li>
          <li>
            <strong>First athlete in any sport</strong> to compete at an Olympics while pregnant and finish on the podium (Beijing 2022 silver)
          </li>
        </ul>

        <DataTable
          headers={['Games', 'Year', 'Event', 'Medal']}
          rows={[
            ['Vancouver', '2010', 'Two-Woman Bobsled (brakeman)', '4th'],
            ['Sochi', '2014', "Two-Woman Bobsled (pilot)", '🥈 Silver'],
            ['PyeongChang', '2018', "Two-Woman Bobsled (pilot)", '🥉 Bronze'],
            ['Beijing', '2022', "Women's Monobob (pilot)", '🥈 Silver'],
            ['Milano Cortina', '2026', "Women's Monobob (pilot)", '🥇 Gold ✅'],
          ]}
        />
      </Section>

      <Section id="personal-life" title="Personal Life & Advocacy">
        <p>
          Meyers Taylor married former NFL player and bobsled brakeman <strong>Nic Taylor</strong> in 2014 — a dual-athlete household that has navigated the demands of elite sport together across multiple Olympic cycles. Their son <strong>Nico</strong> was born in spring 2022, months after the Beijing Games.
        </p>
        <p>
          Beyond competition, Meyers Taylor has been one of the most visible advocates for <strong>diversity in winter sports</strong>. As one of the most prominent Black athletes in the history of the Winter Olympics — a Games that has historically struggled with racial representation — she has used every platform available to her to make the sport more welcoming and visible to communities that rarely see themselves on the sliding track.
        </p>
        <Quote source="Elana Meyers Taylor, after winning gold at Milano Cortina 2026">
          &quot;I want kids who look like me to see this and know the door is open. This sport is for everyone. These Games are for everyone.&quot;
        </Quote>
        <p>
          She has partnered with youth sports organizations, spoken at schools across the country, and maintained an active public presence specifically aimed at drawing underrepresented communities into winter sports pipelines. USA Bobsled credits her visibility as a direct factor in increased diversity across its development programs throughout the 2020s.
        </p>
        <p>
          She has also been open about the physical and emotional cost of competing across five Olympic cycles — the injuries, the recovery protocols, the mental load of balancing elite training with pregnancy and motherhood, and the quiet resilience required to keep pushing when retirement would have been the easier choice.
        </p>
        <Notice type="info">
          Meyers Taylor has been a board member of the Women&apos;s Sports Foundation and an ambassador for multiple youth athletic development programs focused on expanding access to winter sports for underrepresented communities.
        </Notice>
      </Section>

      {/* Medal Record */}
      <section id="medal-record" className="my-12 bg-gray-50 border border-gray-200 rounded-lg overflow-hidden scroll-mt-20">
        <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold">Olympic Medal Record</h2>
        </div>
        <div className="p-6">
          <DataTable
            headers={['Games', 'Year', 'Event', 'Result']}
            rows={[
              ['Vancouver', '2010', 'Two-Woman Bobsled', '4th Place'],
              ['Sochi', '2014', 'Two-Woman Bobsled', '🥈 Silver'],
              ['PyeongChang', '2018', 'Two-Woman Bobsled', '🥉 Bronze'],
              ['Beijing', '2022', "Women's Monobob", '🥈 Silver'],
              ['Milano Cortina', '2026', "Women's Monobob", '🥇 Gold'],
            ]}
          />
        </div>
      </section>

      {/* Sources */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-xl font-bold mb-4">Sources</h2>
        <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
          <li>USA Bobsled &amp; Skeleton — Official athlete biography</li>
          <li>International Bobsled &amp; Skeleton Federation (IBSF) — Career statistics and records</li>
          <li>Austin American-Statesman — &quot;After nearly retiring, Texas bobsledder Elana Meyers Taylor wins Olympic gold at 41&quot;, February 17, 2026</li>
          <li>NBC Olympics — Milano Cortina 2026 monobob results and post-race interviews</li>
          <li>George Washington University Athletics — Player biography archive</li>
          <li>Women&apos;s Sports Foundation — Board member profiles</li>
          <li>ObjectWire Olympic Bureau — On-site reporting, Cortina, February 17, 2026</li>
        </ol>
      </section>
    </ArticlePage>
  );
}
