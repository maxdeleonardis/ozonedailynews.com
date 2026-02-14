import type { Metadata } from 'next';
import { ArticlePage, Section, InfoBox, DataTable, Notice, Quote } from '@/components/ArticlePage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Domen Prevc Wins Large Hill Gold - Slovenia\'s Flying Family Soars at Olympics | ObjectWire',
  description: 'Domen Prevc captures ski jumping large hill gold at Milan Cortina 2026. The world record holder and Four Hills champion leads Slovenia\'s famous flying family to Olympic glory.',
  keywords: ['Domen Prevc', 'ski jumping', 'large hill gold', 'Winter Olympics 2026', 'Milan Cortina', 'Slovenia', 'world record', 'Four Hills Tournament', 'Prevc family'],
  openGraph: {
    title: 'Domen Prevc Wins Large Hill Gold - Slovenia\'s Flying Family Soars',
    description: 'World record holder Domen Prevc captures ski jumping gold at Milan Cortina 2026',
    type: 'article',
    publishedTime: '2026-02-14T22:00:00Z',
    authors: ['ObjectWire Sports'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Domen Prevc - Ski Jumping Olympic Gold',
    description: 'Slovenia\'s world record holder wins large hill at Milan Cortina 2026',
  }
};

const tableOfContents = [
  { id: 'golden-flight', label: 'Golden Flight' },
  { id: 'flying-family', label: 'The Flying Family' },
  { id: 'rise-to-dominance', label: 'Rise to Dominance' },
  { id: 'world-record', label: 'World Record Holder' },
  { id: 'olympic-glory', label: 'Olympic Glory' },
];

const infoBoxItems = [
  { label: 'Full Name', value: 'Domen Prevc' },
  { label: 'Born', value: 'June 4, 1999 (age 26)' },
  { label: 'Birthplace', value: 'Kranj, Slovenia' },
  { label: 'Height', value: '1.77 m (5 ft 10 in)' },
  { label: 'Club', value: 'SK Triglav Kranj' },
  { label: 'Personal Best', value: '254.5 m (World Record)' },
  { label: 'National Team', value: '🇸🇮 Slovenia' },
];

const relatedLinks = [
  { href: '/winter-olympics', label: 'All Winter Olympics', description: 'Milan Cortina 2026 news and profiles' },
];

export default function DomenPrevcProfile() {
  return (
    <ArticlePage
      title="Domen Prevc"
      subtitle="The world record holder soars to Olympic gold — Slovenia's youngest Prevc brother captures the large hill title at Milan Cortina 2026"
      category="Slovenia • Ski Jumping"
      lastUpdated="February 14, 2026"
      backLink={{ href: '/winter-olympics', label: 'Back to Winter Olympics' }}
      infoBox={{ title: 'Domen Prevc', items: infoBoxItems }}
      tableOfContents={tableOfContents}
      relatedLinks={relatedLinks}
    >
      <Section id="golden-flight" title="Golden Flight">
        <Notice type="note">
          <strong>GOLD MEDAL:</strong> Domen Prevc wins the men's large hill individual ski jumping competition at Milan Cortina 2026, adding Olympic gold to his World Championship title and world record.
        </Notice>

        <p>
          <strong>Domen Prevc</strong> has spent years chasing the ultimate prize in ski jumping, and at Milan Cortina 2026, he finally captured it. The 26-year-old Slovenian, already the world record holder and reigning Four Hills Tournament champion, delivered two masterful jumps to claim Olympic gold in the men's large hill individual competition.
        </p>
        <p>
          For Slovenia, a small nation of just 2 million people that has produced an outsized number of ski jumping legends, Prevc's victory represents another chapter in a remarkable sporting tradition. And for the Prevc family — four siblings who all compete at the highest level of the sport — it's the crowning achievement of an unprecedented dynasty.
        </p>
      </Section>

      <Section id="flying-family" title="The Flying Family">
        <p>
          The Prevc family of <strong>Dolenja Vas</strong>, Slovenia, has produced something unprecedented in ski jumping history: four siblings who all compete on the World Cup circuit. Domen's older brother <strong>Peter</strong> is a former overall World Cup champion and Olympic medalist. Brother <strong>Cene</strong> also competes internationally. And sister <strong>Nika</strong> is one of the top women's ski jumpers in the world.
        </p>
        <p>
          Their father Božidar, who owns a furniture business, is also an international ski jumping referee. Growing up, the Prevc children had ski jumping in their blood — and they've translated that heritage into extraordinary success.
        </p>
        <Quote source="On the Prevc family legacy">
          "In Slovenia, we say the Prevc family doesn't walk — they fly. Four children, all world-class ski jumpers. It's never happened before in our sport."
        </Quote>
        <p>
          In 2015, Domen and Peter became the <strong>first brothers to share a World Cup podium</strong>, with Domen taking second behind Peter in Engelberg, Switzerland. That moment announced Domen's arrival as a force in his own right — not just Peter Prevc's younger brother, but a champion in the making.
        </p>
      </Section>

      <Section id="rise-to-dominance" title="Rise to Dominance">
        <p>
          Born June 4, 1999, in <strong>Kranj</strong>, Domen Prevc made his World Cup debut as a 16-year-old in November 2015 and immediately showed he belonged. Just four starts into his career, he reached the podium. And by November 2016, he had won his first World Cup event — claiming victory in Ruka, Finland, to take over the yellow bib as World Cup overall leader.
        </p>
        <p>
          That 2016-17 season saw Domen win four World Cup events before he turned 18. He was the sport's next great prodigy, following in the flight path of his brother Peter while carving out his own legacy.
        </p>
        <p>
          The 2024-25 and 2025-26 seasons marked Domen's emergence as the world's best. He won the <strong>FIS Ski Flying World Cup title</strong> in 2025, then captured the prestigious <strong>Four Hills Tournament</strong> in the 2025-26 season — one of ski jumping's most coveted prizes.
        </p>

        <DataTable
          headers={['Achievement', 'Year', 'Details']}
          rows={[
            ['World Record', '2025', '254.5 m at Planica (March 30, 2025)'],
            ['Four Hills Champion', '2025-26', 'Won prestigious tournament'],
            ['World Championship Gold', '2025', 'Individual Large Hill (Trondheim)'],
            ['Ski Flying World Cup', '2025', 'Overall title winner'],
            ['Olympic Gold', '2026', 'Large Hill Individual'],
            ['Olympic Gold', '2026', 'Mixed Team Normal Hill'],
          ]}
        />
      </Section>

      <Section id="world-record" title="World Record Holder">
        <p>
          On March 30, 2025, at the legendary <strong>Letalnica bratov Gorišek</strong> in Planica, Slovenia, Domen Prevc launched himself into history. His flight of <strong>254.5 meters</strong> broke the world record, making him the longest-flying ski jumper in the sport's history.
        </p>
        <p>
          The Planica ski flying hill — named "the hill of the Gorišek brothers" after its designers — has been the site of numerous world records. For a Slovenian to hold the record on home soil is a source of immense national pride.
        </p>
        <p>
          At the <strong>2025 Nordic World Ski Championships</strong> in Trondheim, Prevc converted his form into gold, winning the individual large hill title. He also claimed silver in the team large hill and bronze in the mixed team event, announcing himself as the man to beat heading into the Olympic season.
        </p>
      </Section>

      <Section id="olympic-glory" title="Olympic Glory">
        <p>
          The 2025-26 season saw Prevc reach unprecedented heights. He won <strong>20 World Cup events</strong> — an extraordinary total — including victories in Wisła, Klingenthal, Engelberg, Oberstdorf, Garmisch-Partenkirchen, Sapporo, and Willingen. His Four Hills Tournament victory came with wins at Oberstdorf and Garmisch-Partenkirchen, two of the competition's most prestigious hills.
        </p>
        <p>
          At Milan Cortina 2026, Prevc delivered when it mattered most. In the <strong>large hill individual final</strong>, his two jumps combined technical excellence with the kind of distance that only the world record holder can achieve. The result was never seriously in doubt after his first jump put him in commanding position.
        </p>
        <p>
          Earlier in the Games, Prevc had already claimed gold in the <strong>mixed team normal hill</strong> event alongside his Slovenian teammates — including sister Nika, making the Prevc family Olympic champions together.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h4 className="font-bold text-lg mb-2">Milan Cortina 2026 Results</h4>
          <ul className="space-y-2">
            <li><strong>Large Hill Individual:</strong> 🥇 Gold</li>
            <li><strong>Mixed Team Normal Hill:</strong> 🥇 Gold</li>
          </ul>
        </div>

        <p>
          With two Olympic gold medals, a world record, a World Championship title, and a Four Hills Tournament victory all within 12 months, Domen Prevc has established himself as one of the greatest ski jumpers in history. And at 26, he's likely far from finished.
        </p>
      </Section>

      <section className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-xl font-bold mb-4">Sources</h2>
        <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
          <li>FIS Ski Jumping — Official results and athlete biography</li>
          <li>RTV Slovenija — "Fantastičen finale: Prevc do svetovnega rekorda"</li>
          <li>International Ski Federation — World Cup standings and records</li>
          <li>Eurosport — Domen Prevc player profile</li>
        </ol>
      </section>
    </ArticlePage>
  );
}
