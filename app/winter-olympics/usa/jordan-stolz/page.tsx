import type { Metadata } from 'next';
import { ArticlePage, Section, InfoBox, DataTable, Notice } from '@/components/ArticlePage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Jordan Stolz Wins 500m Gold - The Milwaukee Missile Strikes Olympic Glory | ObjectWire',
  description: 'Jordan Stolz claims speed skating 500m gold at Milan Cortina 2026 with an Olympic record 33.77 seconds. The Wisconsin native becomes the first American to win the event since Joey Cheek in 2006.',
  keywords: ['Jordan Stolz', 'speed skating', '500m gold', 'Winter Olympics 2026', 'Milan Cortina', 'Team USA', 'Olympic record', 'Milwaukee Missile', 'Wisconsin'],
  openGraph: {
    title: 'Jordan Stolz Wins 500m Gold - Milwaukee Missile Strikes Olympic Glory',
    description: 'Wisconsin\'s Jordan Stolz wins 500m speed skating gold with Olympic record at Milan Cortina 2026',
    type: 'article',
    publishedTime: '2026-02-14T22:00:00Z',
    authors: ['ObjectWire Sports'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jordan Stolz - 500m Olympic Gold',
    description: 'The Milwaukee Missile claims speed skating glory at Milan Cortina 2026',
  }
};

const tableOfContents = [
  { id: 'olympic-triumph', label: 'Olympic Triumph' },
  { id: 'rise-to-stardom', label: 'Rise to Stardom' },
  { id: 'world-domination', label: 'World Domination' },
  { id: 'milan-cortina', label: 'Milan Cortina 2026' },
  { id: 'legacy', label: 'Legacy' },
];

const infoBoxItems = [
  { label: 'Full Name', value: 'Jordan Stolz' },
  { label: 'Nickname', value: 'The Milwaukee Missile' },
  { label: 'Born', value: 'May 21, 2004 (age 21)' },
  { label: 'Birthplace', value: 'Kewaskum, Wisconsin, USA' },
  { label: 'Height', value: '6 ft 0¾ in (185 cm)' },
  { label: 'Events', value: '500m, 1000m, 1500m, Mass Start' },
  { label: 'Club', value: 'US Speedskating' },
  { label: 'Coach', value: 'Bob de Jong' },
];

const relatedLinks = [
  { href: '/winter-olympics/usa/hannah-bilka', label: 'Hannah Bilka Profile', description: 'Texas native starring for Team USA ice hockey' },
  { href: '/winter-olympics/usa', label: 'Team USA Coverage', description: 'Complete coverage of American athletes' },
  { href: '/winter-olympics', label: 'All Winter Olympics', description: 'Milan Cortina 2026 news and profiles' },
];

export default function JordanStolzProfile() {
  return (
    <ArticlePage
      title="Jordan Stolz"
      subtitle="The Milwaukee Missile strikes Olympic gold — Wisconsin's speed skating prodigy wins 500m with an Olympic record, the first American victory in the event since 2006"
      category="Team USA • Speed Skating"
      lastUpdated="February 14, 2026"
      backLink={{ href: '/winter-olympics/usa', label: 'Back to Team USA' }}
      infoBox={{ title: 'Jordan Stolz', items: infoBoxItems }}
      tableOfContents={tableOfContents}
      relatedLinks={relatedLinks}
    >
      <Section id="olympic-triumph" title="Olympic Triumph">
        <Notice type="note">
          <strong>GOLD MEDAL:</strong> Jordan Stolz wins the men's 500m speed skating final with an Olympic record time of 33.77 seconds — the first American gold in this event since Joey Cheek at Turin 2006.
        </Notice>

        <p>
          On February 14, 2026, <strong>Jordan Stolz</strong> cemented his status as the world's dominant speed skater by capturing Olympic gold in the men's 500 meters at Milan Cortina. The 21-year-old from Kewaskum, Wisconsin, blazed across the ice in <strong>33.77 seconds</strong>, setting a new Olympic record and delivering America's first gold medal in the event in two decades.
        </p>
        <p>
          The victory capped a remarkable Olympic debut that had already seen Stolz claim gold in the 1000 meters just three days earlier with another Olympic record (1:06.28). With two gold medals in two events, both in record time, Stolz has announced himself as the face of American speed skating for years to come.
        </p>
      </Section>

      <Section id="rise-to-stardom" title="Rise to Stardom">
        <p>
          Stolz's journey to Olympic glory began in the most American of ways: watching the <strong>2010 Vancouver Olympics</strong> on TV as a 5-year-old. Inspired by Apolo Anton Ohno and Shani Davis, he convinced his father Dirk to buy him skates. The elder Stolz, a police officer of German descent, was so enthusiastic that he installed outdoor lighting at the family's backyard pond so Jordan and his sister Hannah could skate at all hours.
        </p>
        <p>
          Wisconsin isn't exactly a speed skating hotbed, but Stolz made it work. He rose through the ranks of the <strong>Wisconsin Speed Skating Club</strong>, and by 16, he was already winning national titles. At the 2021 US Championships, he won the 500m with a time of 34.99 seconds — the first time he'd broken 35 seconds — and set a national junior record.
        </p>
        <p>
          His international breakthrough came at the <strong>2022 Beijing Olympics</strong>, where at just 17 years old, he became the third-youngest American male to compete in Olympic long track speed skating. Though he finished 13th in the 500m and 14th in the 1000m, the experience proved invaluable.
        </p>
      </Section>

      <Section id="world-domination" title="World Domination">
        <p>
          The 2022-23 season marked Stolz's arrival as a dominant force. At the <strong>2023 World Single Distances Championships</strong> in Heerenveen, he won gold in the 500m, 1000m, and 1500m — becoming the <strong>first male skater ever</strong> to win three individual gold medals at a single World Championship.
        </p>
        <p>
          He was just 18 years old. And he was only getting started.
        </p>
        <p>
          The following season, Stolz repeated the feat at the 2024 World Championships in Calgary, again sweeping all three distances. In January 2024, he set the <strong>world record in the 1000 meters</strong> with a blistering 1:05.37 at Salt Lake City. At the 2024 World Allround Championships, he became the youngest male champion in 46 years, breaking Eric Heiden's record from 1978.
        </p>

        <DataTable
          headers={['Season', 'Achievement']}
          rows={[
            ['2022-23', 'First male to win 3 individual golds at World Championships'],
            ['2023-24', 'World record 1000m (1:05.37); World Allround champion'],
            ['2024-25', '18-race World Cup winning streak; Triple World Cup trophy winner'],
            ['2025-26', 'Double Olympic gold (500m, 1000m); Olympic records in both'],
          ]}
        />
      </Section>

      <Section id="milan-cortina" title="Milan Cortina 2026">
        <p>
          Stolz arrived at Milan Cortina as the overwhelming favorite, having won 16 races during the 2025-26 World Cup season. He'd already clinched the 500m, 1000m, and 1500m World Cup trophies for the second consecutive year before the Olympics even began.
        </p>
        <p>
          In the <strong>1000m on February 11</strong>, he delivered with an Olympic record time of 1:06.28, validating his status as the world's best. He'd saved the blades from his 2024 world record race specifically for this moment.
        </p>
        <p>
          Three days later, in the <strong>500m on February 14</strong>, he was even better. His 33.77 seconds shattered the Olympic record and gave the United States its first gold in the event since Joey Cheek's victory at Turin 2006 — exactly 20 years prior.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h4 className="font-bold text-lg mb-2">Milan Cortina 2026 Results</h4>
          <ul className="space-y-2">
            <li><strong>1000m:</strong> 🥇 Gold — 1:06.28 (Olympic Record)</li>
            <li><strong>500m:</strong> 🥇 Gold — 33.77 (Olympic Record)</li>
            <li><strong>1500m:</strong> TBD</li>
            <li><strong>Mass Start:</strong> TBD</li>
          </ul>
        </div>
      </Section>

      <Section id="legacy" title="Legacy">
        <p>
          At just 21 years old, Stolz has already accumulated a resume that rivals the all-time greats. He holds the <strong>world record in the 1000 meters</strong> (1:05.37) and the <strong>big combination</strong> (144.740 points), and now has two Olympic gold medals to his name.
        </p>
        <p>
          His personal habits have become the stuff of legend: he eats pizza every day before training, his favorite restaurants are Jimmy John's and Texas Roadhouse, and during summers he travels to Alaska with his family to fish halibut and salmon and hunt moose.
        </p>
        <p>
          But on the ice, there's nothing casual about Jordan Stolz. He's the most dominant American speed skater since Eric Heiden, and at 21, he's likely only scratching the surface of what he can achieve.
        </p>
      </Section>

      <section className="my-12 bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold">Career Highlights</h2>
        </div>
        <div className="p-6">
          <DataTable
            headers={['Achievement', 'Year', 'Details']}
            rows={[
              ['Olympic Gold', '2026', '500m & 1000m (Olympic records in both)'],
              ['World Record', '2024', '1000m: 1:05.37 (Salt Lake City)'],
              ['World Record', '2024', 'Big Combination: 144.740 points'],
              ['World Allround Champion', '2024', 'Youngest male champion in 46 years'],
              ['World Single Distances', '2023, 2024', 'Triple gold both years (500m, 1000m, 1500m)'],
              ['World Cup Streak', '2025', '18 consecutive wins (record)'],
            ]}
          />
        </div>
      </section>

      <section className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-xl font-bold mb-4">Sources</h2>
        <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
          <li>NBC Olympics — Jordan Stolz athlete profile</li>
          <li>US Speedskating — Official results and biography</li>
          <li>ISU Speed Skating — World records and World Cup standings</li>
          <li>The Guardian — "US teen Jordan Stolz is first man to win three individual golds"</li>
          <li>ESPN — "American Jordan Stolz breaks men's 1,000-meter world record"</li>
        </ol>
      </section>
    </ArticlePage>
  );
}
