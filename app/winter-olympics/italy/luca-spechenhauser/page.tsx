import type { Metadata } from 'next';
import { ArticlePage, Section, InfoBox, DataTable, Notice } from '@/components/ArticlePage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Luca Spechenhauser Wins Short Track 1500m - Italy Strikes Gold on Home Ice | ObjectWire',
  description: 'Italian short track star Luca Spechenhauser wins the men\'s 1500m final at Milan Cortina 2026, delivering a home country gold medal in front of ecstatic Italian fans.',
  keywords: ['Luca Spechenhauser', 'short track', '1500m gold', 'Winter Olympics 2026', 'Milan Cortina', 'Italy', 'home gold', 'speed skating', 'Bormio'],
  openGraph: {
    title: 'Luca Spechenhauser Wins 1500m Gold for Italy on Home Ice',
    description: 'Italian hero delivers short track gold at Milan Cortina 2026 in front of home crowd',
    type: 'article',
    publishedTime: '2026-02-14T22:00:00Z',
    authors: ['ObjectWire Sports'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spechenhauser - Italy\'s Home Ice Hero',
    description: 'Short track 1500m gold for Italy at Milan Cortina 2026',
  }
};

const tableOfContents = [
  { id: 'home-ice-glory', label: 'Home Ice Glory' },
  { id: 'rising-star', label: 'Rising Star' },
  { id: 'international-success', label: 'International Success' },
  { id: 'olympic-moment', label: 'Olympic Moment' },
];

const infoBoxItems = [
  { label: 'Full Name', value: 'Luca Spechenhauser' },
  { label: 'Born', value: 'December 14, 2000 (age 25)' },
  { label: 'Birthplace', value: 'Bormio, Italy' },
  { label: 'Sport', value: 'Short Track Speed Skating' },
  { label: 'Club', value: 'CS Carabinieri' },
  { label: 'National Team', value: '🇮🇹 Italy' },
];

const relatedLinks = [
  { href: '/winter-olympics/italy-first-gold-lollobrigida', label: 'Italy\'s First Gold', description: 'Francesca Lollobrigida\'s historic victory' },
  { href: '/winter-olympics', label: 'All Winter Olympics', description: 'Milan Cortina 2026 news and profiles' },
];

export default function LucaSpechenhauserProfile() {
  return (
    <ArticlePage
      title="Luca Spechenhauser"
      subtitle="Home ice hero — Italian short track star delivers 1500m gold for the host nation at Milan Cortina 2026"
      category="Italy • Short Track"
      lastUpdated="February 14, 2026"
      backLink={{ href: '/winter-olympics', label: 'Back to Winter Olympics' }}
      infoBox={{ title: 'Luca Spechenhauser', items: infoBoxItems }}
      tableOfContents={tableOfContents}
      relatedLinks={relatedLinks}
    >
      <Section id="home-ice-glory" title="Home Ice Glory">
        <Notice type="note">
          <strong>GOLD MEDAL:</strong> Luca Spechenhauser wins the men's 1500m short track final at Milan Cortina 2026, delivering a home country gold for Italy in front of thousands of ecstatic fans.
        </Notice>

        <p>
          When <strong>Luca Spechenhauser</strong> crossed the finish line first in the men's 1500m short track final, the roar from the Italian crowd shook the venue to its foundations. The 25-year-old from Bormio had just delivered what every host nation dreams of: Olympic gold on home ice.
        </p>
        <p>
          For Italy, a nation that has invested heavily in short track speed skating over the past decade, Spechenhauser's victory represents the culmination of a long-term development program. For the athlete himself, born in the Alpine resort town that sits in the heart of Italian winter sports country, it's the fulfillment of a childhood dream.
        </p>
      </Section>

      <Section id="rising-star" title="Rising Star">
        <p>
          Spechenhauser was born on December 14, 2000, in <strong>Bormio</strong> — a town synonymous with Italian winter sports. Growing up surrounded by skiing and skating culture, he gravitated toward short track speed skating, attracted by the tactical racing and wheel-to-wheel action that defines the sport.
        </p>
        <p>
          He rose through the Italian junior ranks and made his senior international debut while still a teenager. By 2021, he was representing Italy at the <strong>World Short Track Speed Skating Championships</strong> in Dordrecht, where he helped the Italian men's relay team to a bronze medal.
        </p>
        <p>
          His individual breakthrough came at the <strong>2024 World Championships</strong> in Rotterdam, where he claimed bronze in the 1000m — serving notice that he could compete with the world's best.
        </p>
      </Section>

      <Section id="international-success" title="International Success">
        <p>
          The 2025-26 season saw Spechenhauser emerge as one of short track's rising stars. At the <strong>2025 World Championships</strong> in Beijing, he won gold in the mixed 2000m relay alongside his Italian teammates. At the <strong>2026 European Championships</strong> in Tilburg, just weeks before the Olympics, he claimed gold in the 5000m relay and silver in the 1000m.
        </p>
        <p>
          These results positioned him as a medal contender heading into the home Olympics — though few predicted he would deliver gold in the individual 1500m, one of short track's most prestigious and unpredictable events.
        </p>

        <DataTable
          headers={['Competition', 'Year', 'Event', 'Result']}
          rows={[
            ['Winter Olympics', '2026', 'Mixed 2000m Relay', '🥇 Gold'],
            ['Winter Olympics', '2026', '1500m', '🥇 Gold'],
            ['World Championships', '2025', 'Mixed 2000m Relay', '🥇 Gold'],
            ['World Championships', '2024', '1000m', '🥉 Bronze'],
            ['World Championships', '2023', '5000m Relay', '🥇 Gold'],
            ['European Championships', '2026', '5000m Relay', '🥇 Gold'],
            ['European Championships', '2026', '1000m', '🥈 Silver'],
          ]}
        />
      </Section>

      <Section id="olympic-moment" title="Olympic Moment">
        <p>
          The men's 1500m final at Milan Cortina 2026 will be remembered as one of the defining moments of the Games. With Italian flags waving throughout the arena and the crowd chanting his name, Spechenhauser navigated the tactical chaos of short track racing with remarkable composure.
        </p>
        <p>
          Short track's 1500m is notoriously difficult to control — 13.5 laps around a 111.12-meter oval track, with athletes jockeying for position, blocking, and surging. One wrong move can send a skater sliding into the boards or result in disqualification.
        </p>
        <p>
          Spechenhauser positioned himself perfectly throughout, avoiding the crashes and penalties that befell some of his rivals, before unleashing a devastating final sprint that left no doubt about the winner. As he crossed the line, arms raised, the Italian anthem was already beginning to build in the stands.
        </p>
        <p>
          Combined with his earlier <strong>mixed relay gold</strong>, Spechenhauser leaves Milan Cortina 2026 as a double Olympic champion — and a national hero.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
          <h4 className="font-bold text-lg mb-2">Milan Cortina 2026 Results</h4>
          <ul className="space-y-2">
            <li><strong>Mixed 2000m Relay:</strong> 🥇 Gold</li>
            <li><strong>Men's 1500m:</strong> 🥇 Gold</li>
          </ul>
        </div>
      </Section>

      <section className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-xl font-bold mb-4">Sources</h2>
        <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
          <li>Il Messaggero — "Italy's Triumph and Trials in Short Track"</li>
          <li>ISU Short Track — Official results and athlete profiles</li>
          <li>Italian Olympic Committee (CONI) — Milan Cortina 2026 selection announcements</li>
        </ol>
      </section>
    </ArticlePage>
  );
}
