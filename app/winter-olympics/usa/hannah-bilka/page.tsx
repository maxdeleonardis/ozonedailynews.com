import type { Metadata } from 'next';
import { 
  ArticlePage, 
  Section, 
  InfoBox, 
  TableOfContents,
  DataTable,
  RelatedLinks,
  Quote,
  Notice
} from '@/components/ArticlePage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hannah Bilka - Team USA Ice Hockey | From Texas to the Olympics | ObjectWire',
  description: 'Profile of Hannah Bilka, the Coppell, Texas native who defied the odds to become an Olympic ice hockey star. From playing on boys\' teams in Dallas to scoring against Canada at Milan Cortina 2026.',
  keywords: ['Hannah Bilka', 'Team USA', 'ice hockey', 'Winter Olympics', 'Milan Cortina 2026', 'Coppell Texas', 'womens hockey', 'PWHL', 'Seattle Torrent'],
  openGraph: {
    title: 'Hannah Bilka - From Texas to Team USA Olympic Ice Hockey',
    description: 'How a girl from Coppell, Texas became one of America\'s brightest hockey stars at Milan Cortina 2026',
    type: 'article',
    publishedTime: '2026-02-14T22:00:00Z',
    authors: ['ObjectWire Sports'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hannah Bilka - Texas to Team USA',
    description: 'The remarkable journey of Coppell\'s Hannah Bilka to Olympic ice hockey glory',
  }
};

const tableOfContents = [
  { id: 'early-life', label: 'Early Life in Texas' },
  { id: 'path-to-elite', label: 'Path to Elite Hockey' },
  { id: 'college-career', label: 'College Career' },
  { id: 'professional-career', label: 'Professional Career' },
  { id: 'international', label: 'International Career' },
  { id: 'olympics-2026', label: '2026 Winter Olympics' },
  { id: 'legacy', label: 'Legacy & Impact' },
];

const infoBoxItems = [
  { label: 'Full Name', value: 'Hannah Bilka' },
  { label: 'Born', value: 'March 24, 2001 (age 24)' },
  { label: 'Birthplace', value: 'Coppell, Texas, USA' },
  { label: 'Height', value: '5 ft 5 in (165 cm)' },
  { label: 'Position', value: 'Forward' },
  { label: 'Shoots', value: 'Left' },
  { label: 'Current Team', value: 'Seattle Torrent (PWHL)' },
  { label: 'National Team', value: '🇺🇸 United States' },
  { label: 'College', value: 'Boston College, Ohio State' },
];

const relatedLinks = [
  { 
    href: '/winter-olympics/usa', 
    label: 'Team USA Winter Olympics Coverage',
    description: 'Complete coverage of American athletes at Milan Cortina 2026'
  },
  { 
    href: '/winter-olympics/mikaela-shiffrin', 
    label: 'Mikaela Shiffrin Profile',
    description: 'The greatest alpine skier in World Cup history'
  },
  { 
    href: '/winter-olympics/chloe-kim-historic-three-peat-bid', 
    label: 'Chloe Kim Three-Peat Bid',
    description: 'Snowboarding icon pursues third consecutive gold'
  },
  { 
    href: '/winter-olympics', 
    label: 'All Winter Olympics Coverage',
    description: 'Complete Milan Cortina 2026 news and profiles'
  },
];

export default function HannahBilkaProfile() {
  return (
    <ArticlePage
      title="Hannah Bilka"
      subtitle="From the hockey rinks of Texas to stunning the world on Olympic ice — how Coppell's own became one of America's brightest stars at Milan Cortina 2026"
      category="Team USA • Ice Hockey"
      lastUpdated="February 14, 2026"
      backLink={{ href: '/winter-olympics/usa', label: 'Back to Team USA' }}
      infoBox={{
        title: 'Hannah Bilka',
        items: infoBoxItems,
      }}
      tableOfContents={tableOfContents}
      relatedLinks={relatedLinks}
    >
      <Section id="early-life" title="Early Life in Texas">
        <p>
          Hannah Bilka was born on March 24, 2001, in <strong>Coppell, Texas</strong> — a Dallas suburb not exactly known as a hockey hotbed. In a state where Friday night lights mean football and ice is something you put in sweet tea, Bilka discovered her passion for hockey by watching her older brother Anthony play.
        </p>
        <p>
          The <strong>2010 Winter Olympics</strong> proved to be a turning point. Watching Team USA compete on the world stage ignited a fire in the young Texan that would carry her from local rinks to the Olympic Games themselves.
        </p>
        <Quote source="Hannah Bilka, on growing up in Texas">
          "There weren't a lot of girls playing hockey in Dallas when I was young. I had to play on boys' teams just to get ice time and competitive games."
        </Quote>
        <p>
          Growing up in a non-traditional hockey market meant Bilka faced challenges most elite players never encounter. With limited opportunities for girls' hockey in the Dallas-Fort Worth area, she played on <strong>boys' teams</strong> alongside fellow Texas native Ally Simpson — both of whom would go on to represent the United States at the highest levels.
        </p>
        <p>
          The lack of visibility in smaller hockey markets created recruitment challenges. Unlike players from hockey hotbeds like Minnesota or Massachusetts, Bilka had to be proactive in her college recruitment, personally emailing coaches since scouts were unfamiliar with players competing in boys' tournaments in Texas.
        </p>
      </Section>

      <Section id="path-to-elite" title="Path to Elite Hockey">
        <p>
          At just <strong>14 years old</strong>, Bilka made a decision that would define her career: she left home in Coppell to attend <strong>Shattuck-St. Mary's</strong>, an elite boarding school in Faribault, Minnesota, renowned for producing NHL and Olympic talent.
        </p>
        <p>
          The sacrifice was immense — leaving family, friends, and the only home she'd known to pursue a dream in a sport Texas barely acknowledged. But the gamble paid off. At Shattuck-St. Mary's, she developed alongside future college and professional stars, honing her skills against top-tier competition daily.
        </p>
        <p>
          During her time at Shattuck-St. Mary's, Bilka helped lead the Sabres to a <strong>Tier 1 U19 national championship in 2018</strong> and a runner-up finish in 2019. She also played lacrosse and ultimate frisbee, demonstrating the athletic versatility that would serve her well on the ice.
        </p>
        <Notice type="info">
          Shattuck-St. Mary's hockey program has produced numerous NHL players including Sidney Crosby, Zach Parise, Jonathan Toews, and Amanda Kessel.
        </Notice>
      </Section>

      <Section id="college-career" title="College Career">
        <h3 className="text-xl font-bold mt-6 mb-4">Boston College (2019-2023)</h3>
        <p>
          Bilka's college career began at <strong>Boston College</strong>, where she immediately established herself as one of the nation's premier players. Her freshman season in 2019-20 was nothing short of dominant:
        </p>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li><strong>37 points</strong> (14 goals, 23 assists) in 34 games</li>
          <li>Led all rookies nationally in points per game (1.13)</li>
          <li>Led all rookies in assists per game (0.71)</li>
          <li>126 shots on goal — first among freshmen</li>
        </ul>
        <p>
          The performance earned her the <strong>Women's Hockey Commissioners Association National Rookie of the Year</strong> award — the highest individual honor for a first-year player in college hockey. She was also named Hockey East Rookie of the Year and earned All-Rookie Team honors.
        </p>
        <p>
          By her senior year, Bilka was named <strong>team captain</strong>, leading the Eagles while continuing to rank among the nation's top scorers. Her four seasons at Boston College produced consistent excellence, with All-Star honors in each year.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">Ohio State (2023-24)</h3>
        <p>
          For her graduate season, Bilka transferred to <strong>Ohio State University</strong>, pursuing a master's degree in sport management while competing for the Buckeyes. The move proved transformative.
        </p>
        <p>
          She led Ohio State in scoring with <strong>48 points</strong> (22 goals, 26 assists) in 39 games, powering the Buckeyes to the program's first-ever <strong>NCAA National Championship</strong>. In the championship game against Wisconsin, Bilka assisted on the game-winning goal — a fitting capstone to her college career.
        </p>

        <DataTable
          headers={['Season', 'Team', 'GP', 'G', 'A', 'Pts']}
          rows={[
            ['2019-20', 'Boston College', '34', '14', '23', '37'],
            ['2020-21', 'Boston College', '19', '7', '9', '16'],
            ['2021-22', 'Boston College', '34', '16', '17', '33'],
            ['2022-23', 'Boston College', '34', '12', '29', '41'],
            ['2023-24', 'Ohio State', '39', '22', '26', '48'],
            ['Total', '', '160', '71', '104', '175'],
          ]}
        />
      </Section>

      <Section id="professional-career" title="Professional Career">
        <h3 className="text-xl font-bold mt-6 mb-4">Boston Fleet (2024-25)</h3>
        <p>
          Bilka was selected <strong>fourth overall</strong> by PWHL Boston in the 2024 PWHL Draft, signing a three-year contract with the Fleet. Her rookie professional season showed flashes of brilliance — 11 points (5 goals, 6 assists) in 16 games — before an injury during the Rivalry Series cut her season short.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">Seattle Torrent (2025-present)</h3>
        <p>
          In June 2025, Bilka was selected <strong>third overall</strong> by the expansion Seattle Torrent in the PWHL Expansion Draft, reuniting her with legendary forward <strong>Hilary Knight</strong> — a player she'd first met at age 14 at a USA Hockey select camp.
        </p>
        <p>
          The reunion proved electric. Deployed on Seattle's top line alongside Knight and Alex Carpenter, Bilka has become a cornerstone of the franchise's inaugural season. On November 28, 2025, she was part of the historic home opener at Climate Pledge Arena that drew <strong>16,014 fans</strong> — a record for professional women's hockey in the United States.
        </p>
        <Quote source="Seattle Torrent GM Meghan Turner">
          "Hannah's lightning-quick skating and creative offensive instincts complement the veteran stars perfectly. She's a key piece of this franchise's future."
        </Quote>
      </Section>

      <Section id="international" title="International Career">
        <p>
          Bilka's international resume showcases consistent excellence across all levels of competition:
        </p>

        <h3 className="text-xl font-bold mt-6 mb-4">Youth Career</h3>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li><strong>2018 IIHF U18 World Championship:</strong> 🥇 Gold Medal (Dmitrov, Russia)</li>
          <li><strong>2019 IIHF U18 World Championship:</strong> 🥈 Silver Medal (Obihiro, Japan)</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">Senior World Championships</h3>
        <p>
          At the 2022 World Championship in Denmark — her first senior international tournament — Bilka was placed on the <strong>first line alongside Hilary Knight</strong>, fulfilling a dream she'd held since meeting Knight as a teenager. She finished the tournament with <strong>12 points</strong> (5 goals, 7 assists) in 7 games, ranking third overall in scoring.
        </p>
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li><strong>2022 World Championship:</strong> 🥈 Silver Medal — 12 points in 7 games</li>
          <li><strong>2023 World Championship:</strong> 🥇 Gold Medal — 7 points in 7 games</li>
          <li><strong>2024 World Championship:</strong> 🥈 Silver Medal — 4 points in 7 games</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">Rivalry Series Dominance</h3>
        <p>
          In the 2024-25 USA-Canada Rivalry Series, Bilka was deployed on a line with Taylor Heise and Abbey Murphy. Team USA swept all four games of the December 2025 series, outscoring Canada <strong>24-7</strong>. Following the sweep, analysts identified Bilka as a lock for the Olympic roster, with her line described as "one of the team's established top-six forward combinations."
        </p>
      </Section>

      <Section id="olympics-2026" title="2026 Winter Olympics">
        <Notice type="note">
          <strong>BREAKING:</strong> On February 10, 2026, Bilka scored two goals in Team USA's historic 5-0 victory over Canada — the first time Canada has ever been shut out in women's Olympic ice hockey.
        </Notice>

        <p>
          On January 2, 2026, Bilka was officially named to <strong>Team USA's roster for the Milan Cortina Winter Olympics</strong> — the culmination of a journey that began watching the 2010 Games on TV in Coppell, Texas.
        </p>
        <p>
          Her Olympic debut has exceeded even the highest expectations. In Team USA's final preliminary round game against archrival Canada on February 10, 2026, Bilka delivered a <strong>two-goal performance</strong> that powered the Americans to a dominant 5-0 victory.
        </p>
        <p>
          The shutout was historic: <strong>the first time Canada has ever been blanked in women's Olympic ice hockey</strong>. For a kid from Texas who once had to email college coaches because no scouts knew her name, the moment represented the ultimate validation.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h4 className="font-bold text-lg mb-2">2026 Olympics Stats (Through Preliminary Round)</h4>
          <ul className="space-y-1">
            <li><strong>Games:</strong> 3</li>
            <li><strong>Goals:</strong> 2</li>
            <li><strong>Assists:</strong> TBD</li>
            <li><strong>Key Moment:</strong> Two goals vs. Canada in 5-0 shutout (Feb 10)</li>
          </ul>
        </div>

        <p>
          With Team USA advancing to the knockout rounds as the top seed, Bilka and her teammates now have their sights set on gold — a medal that would cap one of the most improbable journeys in American hockey history.
        </p>
      </Section>

      <Section id="legacy" title="Legacy & Impact">
        <p>
          Beyond her on-ice achievements, Bilka has remained committed to <strong>growing girls' hockey in Texas</strong>. She returns home during summers to work with youth programs and camps, serving as living proof that geography doesn't have to limit dreams.
        </p>
        <Quote source="Hannah Bilka, on Texas hockey development">
          "When I was young, there weren't many options for girls. Now there are actual girls' hockey organizations in Dallas. Young players don't have to leave home like I did. That means everything to me."
        </Quote>
        <p>
          Her journey from Coppell to the Olympics represents more than individual achievement — it's a roadmap for young athletes in non-traditional hockey markets. Every shift she takes in Milan Cortina carries the dreams of Texas kids who never thought hockey was for them.
        </p>
        <p>
          At 24 years old, with an Olympic roster spot secured and years of elite hockey ahead of her, Hannah Bilka is just getting started. But her story is already complete enough to inspire: a Texas girl who believed in herself when no one else had a reason to, and proved that heart can overcome any map.
        </p>
      </Section>

      {/* Medal Record */}
      <section className="my-12 bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold">Medal Record</h2>
        </div>
        <div className="p-6">
          <DataTable
            headers={['Competition', 'Year', 'Location', 'Result']}
            rows={[
              ['IIHF U18 World Championship', '2018', 'Russia', '🥇 Gold'],
              ['IIHF U18 World Championship', '2019', 'Japan', '🥈 Silver'],
              ['IIHF Women\'s World Championship', '2022', 'Denmark', '🥈 Silver'],
              ['IIHF Women\'s World Championship', '2023', 'Canada', '🥇 Gold'],
              ['IIHF Women\'s World Championship', '2024', 'USA', '🥈 Silver'],
              ['NCAA Championship', '2024', 'USA', '🏆 Champion'],
            ]}
          />
        </div>
      </section>

      {/* Sources */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-xl font-bold mb-4">Sources</h2>
        <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
          <li>USA Hockey — Official Team USA roster announcement, January 2, 2026</li>
          <li>The Ice Garden — "From Texas With Love: Hannah Bilka's Path to the PWHL", November 2024</li>
          <li>Boston College Athletics — Player biography and statistics</li>
          <li>Ohio State Athletics — 2024 NCAA Championship coverage</li>
          <li>PWHL Official — Seattle Torrent expansion draft, June 2025</li>
          <li>IIHF — World Championship statistics and records</li>
          <li>WLWT Cincinnati — "Former Ohio State star leads U.S. hockey squad to win over Canada", February 10, 2026</li>
          <li>USA Hockey — "US shuts out Canada, 5-0, to close Olympic Winter Games preliminary round", February 10, 2026</li>
        </ol>
      </section>
    </ArticlePage>
  );
}
