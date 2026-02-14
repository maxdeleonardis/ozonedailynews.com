import type { Metadata } from 'next';
import { ArticlePage, Section, InfoBox, DataTable, Notice, Quote } from '@/components/ArticlePage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Janine Flock Wins Skeleton Gold - Austria\'s Veteran Finally Claims Olympic Glory | ObjectWire',
  description: 'Janine Flock captures women\'s skeleton gold at Milan Cortina 2026 at age 36. Austria\'s greatest skeleton racer finally wins the Olympic title that eluded her for over a decade.',
  keywords: ['Janine Flock', 'skeleton', 'gold medal', 'Winter Olympics 2026', 'Milan Cortina', 'Austria', 'womens skeleton', 'Hall in Tirol', 'IBSF'],
  openGraph: {
    title: 'Janine Flock Finally Wins Olympic Gold at 36',
    description: 'Austria\'s skeleton legend captures elusive Olympic title at Milan Cortina 2026',
    type: 'article',
    publishedTime: '2026-02-14T22:00:00Z',
    authors: ['ObjectWire Sports'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Janine Flock - Olympic Skeleton Gold',
    description: 'Austrian veteran wins gold at Milan Cortina 2026 after four Olympic appearances',
  }
};

const tableOfContents = [
  { id: 'long-awaited-gold', label: 'Long-Awaited Gold' },
  { id: 'austrian-pioneer', label: 'Austrian Pioneer' },
  { id: 'near-misses', label: 'Near Misses' },
  { id: 'redemption', label: 'Redemption at Milan Cortina' },
];

const infoBoxItems = [
  { label: 'Full Name', value: 'Janine Flock' },
  { label: 'Born', value: 'July 25, 1989 (age 36)' },
  { label: 'Birthplace', value: 'Hall in Tirol, Austria' },
  { label: 'Height', value: '175 cm (5 ft 9 in)' },
  { label: 'Weight', value: '63 kg (139 lb)' },
  { label: 'Sport', value: 'Skeleton' },
  { label: 'National Team', value: '🇦🇹 Austria' },
];

const relatedLinks = [
  { href: '/winter-olympics', label: 'All Winter Olympics', description: 'Milan Cortina 2026 news and profiles' },
];

export default function JanineFlockProfile() {
  return (
    <ArticlePage
      title="Janine Flock"
      subtitle="At 36 years old, Austria's skeleton legend finally claims the Olympic gold that eluded her for over a decade — a triumph of perseverance at Milan Cortina 2026"
      category="Austria • Skeleton"
      lastUpdated="February 14, 2026"
      backLink={{ href: '/winter-olympics', label: 'Back to Winter Olympics' }}
      infoBox={{ title: 'Janine Flock', items: infoBoxItems }}
      tableOfContents={tableOfContents}
      relatedLinks={relatedLinks}
    >
      <Section id="long-awaited-gold" title="Long-Awaited Gold">
        <Notice type="note">
          <strong>GOLD MEDAL:</strong> Janine Flock wins women's skeleton gold at Milan Cortina 2026, completing four heats of flawless racing to finally capture the Olympic title at age 36.
        </Notice>

        <p>
          When <strong>Janine Flock</strong> crossed the finish line after her fourth and final run at Milan Cortina 2026, the scoreboard confirmed what she'd waited over a decade to see: <strong>1st place</strong>. The 36-year-old Austrian, widely regarded as the best women's skeleton racer her country has ever produced, had finally won Olympic gold.
        </p>
        <p>
          It was a victory that transcended sport — a testament to perseverance, longevity, and the belief that dreams don't expire just because you've been chasing them for years. For Flock, who first competed at the Olympics in 2014 and had come heartbreakingly close in 2018, this was redemption.
        </p>
        <Quote source="Janine Flock, after winning gold">
          "I've been doing this for so long. I've had the highs, I've had the lows. But I always believed that if I kept working, my moment would come. Today was my moment."
        </Quote>
      </Section>

      <Section id="austrian-pioneer" title="Austrian Pioneer">
        <p>
          Born July 25, 1989, in <strong>Hall in Tirol</strong> — a small town in the Austrian Alps — Flock discovered skeleton as a young athlete and quickly showed extraordinary aptitude for the head-first, 130-km/h discipline. Austria was not traditionally a skeleton powerhouse, which meant Flock had to forge her own path to the top.
        </p>
        <p>
          In February 2015, she made history by becoming the <strong>first Austrian woman to win an overall World Cup skeleton title</strong>. The victory announced Austria's arrival as a skeleton nation and established Flock as a pioneer in her sport.
        </p>
        <p>
          At the <strong>2016 World Championships</strong> in Igls, Austria — competing on home ice — she claimed silver in the individual event and bronze in the mixed team event. The 2020 World Championships brought another bronze. Combined with four European Championship golds (2014, 2016, 2019, 2025), Flock assembled one of the most impressive resumes in skeleton history.
        </p>
        <p>
          The IBSF media guide calls her "the best woman skeleton racer in Austrian history." After Milan Cortina 2026, no one can argue.
        </p>
      </Section>

      <Section id="near-misses" title="Near Misses">
        <p>
          Flock's Olympic journey began at <strong>Sochi 2014</strong>, where she finished ninth as a 24-year-old still learning the international circuit. It was a solid debut, but the podium seemed far away.
        </p>
        <p>
          Four years later at <strong>PyeongChang 2018</strong>, Flock arrived as one of the favorites. She had won the World Cup overall title, dominated the European Championships, and was in the form of her life. But the Olympic pressure is different, and she finished fourth — just off the podium by the smallest of margins.
        </p>
        <p>
          "Fourth is the hardest place," Flock said at the time. "You're so close you can taste the medal. But you go home with nothing."
        </p>
        <p>
          At <strong>Beijing 2022</strong>, now 32 years old, she competed again but couldn't recapture her previous form, finishing outside the medals. Many wondered if the Olympic dream had passed her by.
        </p>

        <DataTable
          headers={['Olympics', 'Year', 'Age', 'Finish']}
          rows={[
            ['Sochi', '2014', '24', '9th'],
            ['PyeongChang', '2018', '28', '4th'],
            ['Beijing', '2022', '32', 'Outside medals'],
            ['Milan Cortina', '2026', '36', '🥇 Gold'],
          ]}
        />
      </Section>

      <Section id="redemption" title="Redemption at Milan Cortina">
        <p>
          At 36, Flock could have retired. She'd won everything else — World Cup titles, European Championships, World Championship medals. Only Olympic gold remained elusive. But she wasn't ready to quit.
        </p>
        <p>
          The 2024-25 season showed she still had speed. At the <strong>2025 European Championships</strong> in Lillehammer, she won gold — her fourth European title. She was selected for her fourth Olympics with one more chance to achieve what had always escaped her.
        </p>
        <p>
          At Milan Cortina 2026, Flock was near-perfect. Over four heats of racing, she combined the experience of a veteran with the precision of a champion. Each run was clean, fast, and controlled. When the final standings were posted, there was no one ahead of her.
        </p>
        <p>
          The Austrian flag rose, the anthem played, and Janine Flock finally had the medal she'd spent half her life pursuing.
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <h4 className="font-bold text-lg mb-2">Milan Cortina 2026 Results</h4>
          <ul className="space-y-2">
            <li><strong>Women's Skeleton:</strong> 🥇 Gold (4 heats)</li>
          </ul>
        </div>
      </Section>

      <section className="my-12 bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold">Career Highlights</h2>
        </div>
        <div className="p-6">
          <DataTable
            headers={['Achievement', 'Year', 'Location']}
            rows={[
              ['Olympic Gold', '2026', 'Milan Cortina'],
              ['World Championship Silver', '2016', 'Igls (home)'],
              ['World Championship Bronze', '2020', 'Altenberg'],
              ['World Cup Overall Title', '2015', 'First Austrian woman'],
              ['European Championship Gold', '2014, 2016, 2019, 2025', 'Multiple'],
            ]}
          />
        </div>
      </section>

      <section className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-xl font-bold mb-4">Sources</h2>
        <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
          <li>IBSF — International Bobsleigh and Skeleton Federation athlete profiles</li>
          <li>The Guardian — "Janine Flock is first Austrian woman to win overall skeleton World Cup title"</li>
          <li>Austrian Olympic Committee — Milan Cortina 2026 results</li>
          <li>Olympics.com — Athlete biography and Olympic history</li>
        </ol>
      </section>
    </ArticlePage>
  );
}
