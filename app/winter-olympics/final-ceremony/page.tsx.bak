import type { Metadata } from 'next';
import Link from 'next/link';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Hub } from '@/components/Hub';

const publishDate = '2026-02-19T22:00:00Z';

export const metadata: Metadata = {
  title: 'Winter Olympics 2026 Closing Ceremony: Everything You Need to Know | ObjectWire',
  description:
    'The 2026 Milano Cortina Winter Olympics closing ceremony takes place February 22 at the Verona Arena. Date, time, performers, how to watch, the Olympic flag handoff to 2030 French Alps, and a full look back at the greatest moments of the Games.',
  keywords: [
    'Winter Olympics 2026 closing ceremony',
    'Milano Cortina 2026 closing',
    'Verona Arena ceremony',
    'Olympics closing ceremony February 22',
    'Beauty in Action',
    'Roberto Bolle',
    'Achille Lauro',
    '2030 French Alps Olympics',
    'Olympic flag handoff',
    'how to watch closing ceremony',
  ],
  openGraph: {
    title: 'Winter Olympics 2026 Closing Ceremony — Date, Time, Performers & How to Watch',
    description:
      'Everything you need to know about the Milano Cortina 2026 closing ceremony at the Verona Arena on February 22 — performers, flag handoff to 2030, medal highlights, and how to watch live.',
    type: 'article',
    publishedTime: publishDate,
    authors: ['ObjectWire Olympic Bureau'],
    url: 'https://www.objectwire.org/winter-olympics/final-ceremony',
    images: [
      {
        url: 'https://www.objectwire.org/winter-olympics-2026-og.jpg',
        width: 1200,
        height: 630,
        alt: '2026 Milano Cortina Winter Olympics Closing Ceremony at the Verona Arena',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Winter Olympics 2026 Closing Ceremony — Everything You Need to Know',
    description:
      'Feb 22 · Verona Arena · 2:30 PM ET · Roberto Bolle, Achille Lauro, Olympic flag to France. The full guide.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/final-ceremony',
  },
};

export default function ClosingCeremonyPage() {
  return (
    <>
      <NewsArticleSchema
        title="Winter Olympics 2026 Closing Ceremony: Everything You Need to Know"
        description="The 2026 Milano Cortina Winter Olympics closing ceremony takes place February 22 at the Verona Arena. Date, time, performers, flag handoff to 2030 French Alps, and how to watch."
        publishedTime={publishDate}
        modifiedTime={publishDate}
        author="ObjectWire Olympic Bureau"
        authorUrl="https://www.objectwire.org/team"
        articleUrl="https://www.objectwire.org/winter-olympics/final-ceremony"
        section="Sports"
        keywords={[
          'Winter Olympics 2026',
          'closing ceremony',
          'Milano Cortina',
          'Verona Arena',
          '2030 French Alps',
          'Olympic flag handoff',
        ]}
      />

      <Hub
        badge="WINTER OLYMPICS 2026"
        title="Closing Ceremony"
        subtitle="Verona Arena · Sunday, February 22, 2026 · Everything You Need to Know"
        meta={
          <>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇮🇹</span>
              <span>Arena di Verona, Italy</span>
            </div>
            <div className="hidden md:block">•</div>
            <div>2:30 PM ET · Live on NBC &amp; Peacock</div>
            <div className="hidden md:block">•</div>
            <div>🏔️ Handoff to French Alps 2030</div>
          </>
        }
      >
        <Breadcrumb
          items={[
            { name: 'Home', item: '/' },
            { name: 'Winter Olympics 2026', item: '/winter-olympics' },
            { name: 'Closing Ceremony', item: '/winter-olympics/final-ceremony' },
          ]}
        />
        {/* ── At a Glance ─────────────────────────────────────────────── */}
        <Hub.InfoGrid
          title="At a Glance"
          icon="📋"
          columns={4}
          items={[
            { label: '📅 Date', value: 'Sunday, February 22, 2026' },
            { label: '⏰ Live', value: '2:30 PM ET / 8:30 PM CET' },
            { label: '📺 Replay', value: '9:00 PM ET on NBC' },
            { label: '📍 Venue', value: 'Arena di Verona, Italy' },
            { label: '🎭 Theme', value: '"Beauty in Action"' },
            { label: '🎬 Director', value: 'Alfredo Accatino' },
            { label: '🎫 Tickets', value: 'From €950 via Olympics.com' },
            { label: '🏔️ Next Games', value: '2030 French Alps · Feb 1–17' },
          ]}
        />

        {/* ── Venue ───────────────────────────────────────────────────── */}
        <Hub.Section title="Where Is the Closing Ceremony?" icon="🏛️">
          <Hub.Prose>
            <p>
              The closing ceremony will be held at the <strong className="text-gray-900">Arena di Verona</strong> — the breathtaking Roman amphitheater in the heart of Verona, Italy, dating back to 30 AD and seating nearly 22,000 people. Roughly two hours from Milan and three hours from Cortina d&apos;Ampezzo, Verona is among the most iconic settings in all of European culture.
            </p>
            <p>
              The choice of the Verona Arena is a deliberate, powerful statement. The venue has hosted world-class opera performances — most famously <em>Aida</em> — for over a century. Staging the Olympic closing ceremony inside it elevates the farewell to something closer to theater than sport, connecting the Games to thousands of years of Italian history in a single visual image.
            </p>
            <p>
              It is a striking contrast to the opening ceremony at <strong className="text-gray-900">Stadio Giuseppe Meazza (San Siro)</strong> in Milan on February 6 — with dual Olympic cauldrons lit at the <em>Arco della Pace</em> in Milan and <em>Piazza Dibona</em> in Cortina d&apos;Ampezzo, reflecting the Games&apos; unprecedented dual-city format.
            </p>
          </Hub.Prose>
        </Hub.Section>

        {/* ── How to Watch ─────────────────────────────────────────────── */}
        <Hub.Section title="How to Watch" icon="📺" variant="highlight">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { emoji: '📡', label: 'NBC Live', value: '2:30 PM ET — February 22' },
              { emoji: '🦚', label: 'Peacock Streaming', value: 'NBCOlympics.com · live + on-demand' },
              { emoji: '🌍', label: 'Prime-time Replay', value: 'NBC 9:00 PM ET · BBC · CBC · RAI · Eurosport' },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <div className="text-3xl mb-2">{item.emoji}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.label}</h3>
                <p className="text-sm text-gray-600">{item.value}</p>
              </div>
            ))}
          </div>
        </Hub.Section>

        {/* ── Theme ────────────────────────────────────────────────────── */}
        <Hub.Section title='The Theme: "Beauty in Action"' icon="🎭">
          <Hub.Prose>
            <p>
              The ceremony&apos;s creative concept, <em>Beauty in Action</em>, was developed by artistic director <strong className="text-gray-900">Alfredo Accatino</strong> and celebrates Italian cultural identity through music, visual art, and storytelling — while carrying a pointed message about climate change and the existential threat rising temperatures pose to the future of winter sport.
            </p>
            <p>
              It is a theme that resonates with unusual force at these Games. Milano Cortina 2026 took place against the backdrop of ongoing debates about snowpack reliability across the Alpine region, and several events required additional artificial snow. The closing ceremony will not shy away from that context.
            </p>
          </Hub.Prose>
        </Hub.Section>

        {/* ── Performers ───────────────────────────────────────────────── */}
        <Hub.Section title="Performers" icon="🎤">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                emoji: '🩰',
                name: 'Roberto Bolle',
                role: 'La Scala Ballet · Principal Dancer',
                desc: 'The greatest Italian ballet dancer of his generation, performing at the Verona Arena for the world.',
              },
              {
                emoji: '🎸',
                name: 'Achille Lauro',
                role: 'Singer-Songwriter · Rome',
                desc: 'Provocateur, Sanremo regular, and one of Italy\'s most internationally recognized pop and rock voices.',
              },
              {
                emoji: '🎬',
                name: 'Benedetta Porcaroli',
                role: 'Actress · Presenter',
                desc: 'Star of Baby and The School for Good and Evil — serving as storyteller and host throughout the ceremony.',
              },
              {
                emoji: '🎧',
                name: 'Gabry Ponte',
                role: 'DJ / Producer · Eiffel 65',
                desc: 'Co-creator of Blue (Da Ba Dee) and one of Europe\'s biggest electronic producers, anchoring the ceremonial soundscape.',
              },
            ].map((p) => (
              <div key={p.name} className="bg-white rounded-lg p-6 border border-gray-200 flex gap-4">
                <div className="text-4xl shrink-0">{p.emoji}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{p.name}</h3>
                  <p className="text-sm text-blue-600 mb-2">{p.role}</p>
                  <p className="text-sm text-gray-600">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Hub.Section>

        {/* ── What Happens ─────────────────────────────────────────────── */}
        <Hub.Section title="What Happens During the Ceremony" icon="📋">
          <div className="space-y-3">
            {[
              { emoji: '🚶', step: 'Athlete Parade', desc: 'All nations enter together — not by country — celebrating the unity of the Olympic movement.' },
              { emoji: '🥇', step: 'Final Medal Presentations', desc: 'Any remaining Day 16 medals awarded on the floor of the Verona Arena.' },
              { emoji: '🔥', step: 'Cauldrons Extinguished', desc: 'The two Olympic flames — one in Milan, one in Cortina — ceremonially extinguished.' },
              { emoji: '🏳️', step: 'Olympic Flag Lowering', desc: 'The five-ring flag formally lowered from the mast inside the Arena.' },
              { emoji: '🇫🇷', step: 'Flag Handoff to 2030', desc: 'The Olympic flag passed to the French Alps 2030 organizing committee — the symbolic torch pass.' },
              { emoji: '🎭', step: 'Artistic Performances', desc: 'Roberto Bolle, Achille Lauro, Gabry Ponte, and Benedetta Porcaroli throughout.' },
              { emoji: '🎙️', step: 'Official Closing Declaration', desc: 'IOC President Thomas Bach formally declares the Games closed.' },
            ].map((item, i) => (
              <div key={item.step} className="flex gap-4 bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <span>{item.emoji}</span> {item.step}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Hub.Section>

        {/* ── 2030 Handoff ─────────────────────────────────────────────── */}
        <Hub.Section title="The 2030 Handoff: French Alps Next" icon="🏔️" variant="card">
          <Hub.Prose>
            <p>
              At Verona on February 22, Milano Cortina 2026 will formally hand the Winter Olympic flag to <strong className="text-gray-900">the French Alps</strong>, host of the <strong className="text-gray-900">2030 Winter Games</strong> — scheduled for <strong className="text-gray-900">February 1–17, 2030</strong>.
            </p>
            <p>
              The 2030 Games span the southeastern French Alps — centered on Provence-Alpes-Côte d&apos;Azur and Auvergne-Rhône-Alpes — and mark France&apos;s return to Winter Olympic hosting for the first time since the 1992 Albertville Games. The mayor of the French Alps host region will receive the flag on the floor of the Verona Arena.
            </p>
          </Hub.Prose>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-gray-50 rounded-lg px-6 py-3 text-gray-900 font-semibold">
              🇫🇷 French Alps 2030
            </div>
            <div className="bg-gray-50 rounded-lg px-6 py-3 text-gray-700">
              Feb 1–17, 2030
            </div>
            <div className="bg-gray-50 rounded-lg px-6 py-3 text-gray-700">
              First French Winter Games since Albertville 1992
            </div>
          </div>
        </Hub.Section>

        {/* ── Team USA Recap ───────────────────────────────────────────── */}
        <Hub.Section title="Team USA — A Historic Games" icon="🇺🇸">
          <div className="space-y-3 mb-6">
            <Hub.Card
              href="/winter-olympics/usa/alysa-liu"
              emoji="🥇"
              title="Alysa Liu — Women's Figure Skating Gold"
              description="The first American women's singles medal in 20 years. A breathtaking free skate at the Mediolanum Forum on Day 13."
              badge="Gold"
              badgeStyle="historic"
              meta="Figure Skating · Day 13"
            />
            <Hub.Card
              href="/news/team-usa-womens-hockey-gold-2026"
              emoji="🥇"
              title="Women's Ice Hockey — Gold Medal"
              description="Hilary Knight's tying goal with 2:04 left. Megan Keller's OT winner. A 2-1 victory over Canada that will live in American hockey history."
              badge="Gold"
              badgeStyle="historic"
              meta="Ice Hockey · Day 16"
            />
            <Hub.Card
              href="/winter-olympics/usa/elana-meyers-taylor-bobsled-gold"
              emoji="🥇"
              title="Elana Meyers Taylor — Monobob Gold at 41"
              description="Oldest bobsled champion in history. Olympic gold at 41, with her son Nico's flag photo going viral worldwide."
              badge="Gold"
              badgeStyle="historic"
              meta="Bobsled · Day 14"
            />
            <Hub.Card
              href="/winter-olympics/usa/darryl-payne-jr"
              emoji="🏅"
              title="Darryl Payne Jr. — Historic Skeleton Debut"
              description="The Temple, Texas native became the first African American man to compete for the U.S. in Olympic skeleton."
              meta="Skeleton · Historic milestone"
            />
          </div>
          <div className="text-center">
            <Link href="/winter-olympics/usa" className="inline-block text-blue-400 hover:text-blue-300 font-semibold">
              View All Team USA Results →
            </Link>
          </div>
        </Hub.Section>

        {/* ── Medal Table ──────────────────────────────────────────────── */}
        <Hub.Section title="Final Medal Table" icon="🥇">
          <Hub.Table
            columns={[
              { key: 'rank', label: 'Rank' },
              { key: 'country', label: 'Country' },
              { key: 'gold', label: '🥇 Gold', align: 'center', bold: true },
              { key: 'silver', label: '🥈 Silver', align: 'center' },
              { key: 'bronze', label: '🥉 Bronze', align: 'center' },
              { key: 'total', label: 'Total', align: 'center', bold: true },
            ]}
            rows={[
              { rank: '1', country: <span className="flex items-center gap-2"><span className="text-2xl">🇳🇴</span>Norway</span>, gold: '16', silver: '8', bronze: '6', total: '30' },
              { rank: '2', country: <span className="flex items-center gap-2"><span className="text-2xl">🇺🇸</span>United States</span>, gold: '14', silver: '13', bronze: '11', total: '38' },
              { rank: '3', country: <span className="flex items-center gap-2"><span className="text-2xl">🇮🇹</span>Italy (Host)</span>, gold: '12', silver: '13', bronze: '11', total: '36' },
              { rank: '4', country: <span className="flex items-center gap-2"><span className="text-2xl">🇩🇪</span>Germany</span>, gold: '8', silver: '6', bronze: '5', total: '19' },
              { rank: '5', country: <span className="flex items-center gap-2"><span className="text-2xl">🇨🇭</span>Switzerland</span>, gold: '7', silver: '5', bronze: '4', total: '16' },
            ]}
            footer={
              <Link href="/winter-olympics/medal-count" className="text-blue-400 hover:text-blue-300 font-semibold">
                View Full Official Standings →
              </Link>
            }
          />
          <p className="text-gray-400 text-sm mt-4">* Final standings pending IOC confirmation after closing ceremony.</p>
        </Hub.Section>

        {/* ── More Stories ─────────────────────────────────────────────── */}
        <Hub.Section title="More Games to Remember" icon="📰">
          <div className="space-y-3">
            <Hub.Card href="/winter-olympics/lindsey-vonn" emoji="⛷️" title="Lindsey Vonn" description="One of the most-watched storylines of the entire Games." meta="Alpine Skiing" />
            <Hub.Card href="/winter-olympics/mikaela-shiffrin" emoji="🎿" title="Mikaela Shiffrin" description="The greatest alpine skier in World Cup history added to her Olympic legacy at Cortina." meta="Alpine Skiing" />
            <Hub.Card href="/winter-olympics/chloe-kim-historic-three-peat-bid" emoji="🏂" title="Chloe Kim's Three-Peat Bid" description="Snowboarding's most iconic figure in pursuit of a third consecutive halfpipe gold." meta="Snowboarding" />
            <Hub.Card href="/winter-olympics/swiss-skier-von-allmen-wins-third-gold" emoji="🥇" title="Von Allmen Wins Third Gold" description="One of the most dominant individual Alpine performances at these Games." badge="Historic" badgeStyle="historic" meta="Alpine Skiing" />
          </div>
        </Hub.Section>

        {/* ── Goodbye section ──────────────────────────────────────────── */}
        <Hub.Section variant="highlight">
          <Hub.Prose>
            <p>
              The <strong className="text-gray-900">2026 Winter Olympics</strong> spanned two cities, dozens of mountain venues, and more than 2,900 athletes from over 90 nations. Games shaped by a dual-host format tried for the first time, cauldrons lit simultaneously in a major city and a mountain village, events staged from the Dolomite peaks to the Lombardy plains.
            </p>
            <p>
              Games shaped by people. By a 41-year-old from Georgia crying on the finish ice in Cortina. By a 21-year-old from California landing a triple axel in front of 22 million viewers. By a team pulling off a comeback in overtime in Milan. By a kid from Temple, Texas, racing head-first down an Olympic track for the first time and making history doing it.
            </p>
            <p className="text-gray-900 font-bold text-xl">
              When the cauldrons go dark on February 22, inside the Verona Arena where opera has echoed for two thousand years, the 2026 Winter Olympics will be over. The memories will not be.
            </p>
            <p className="text-blue-600 font-semibold text-lg">See you in the French Alps. 2030. 🏔️🇫🇷</p>
          </Hub.Prose>
        </Hub.Section>

        {/* ── Full Coverage Links ───────────────────────────────────────── */}
        <Hub.Section title="Full Winter Olympics Coverage" icon="🔗">
          <Hub.LinkGrid
            columns={3}
            items={[
              { href: '/winter-olympics', emoji: '🏔️', label: 'Coverage Hub', sub: 'All Games news & results' },
              { href: '/winter-olympics/usa', emoji: '🇺🇸', label: 'Team USA', sub: 'All results & athlete stories' },
              { href: '/winter-olympics/usa/alysa-liu', emoji: '⛸️', label: 'Alysa Liu', sub: "Women's Figure Skating Gold" },
              { href: '/news/team-usa-womens-hockey-gold-2026', emoji: '🏒', label: "Women's Hockey Gold", sub: 'Full match report' },
              { href: '/winter-olympics/usa/elana-meyers-taylor-bobsled-gold', emoji: '🛷', label: 'Elana Meyers Taylor', sub: 'Monobob Gold at 41' },
              { href: '/winter-olympics/usa/elana-meyers', emoji: '🏅', label: 'Elana Meyers Profile', sub: 'Full athlete profile' },
              { href: '/winter-olympics/usa/hannah-bilka', emoji: '🏒', label: 'Hannah Bilka', sub: 'Ice Hockey Profile' },
              { href: '/winter-olympics/usa/darryl-payne-jr', emoji: '🛷', label: 'Darryl Payne Jr.', sub: 'Historic Skeleton Debut' },
              { href: '/winter-olympics/usa/ilia-malinin', emoji: '⛸️', label: 'Ilia Malinin', sub: "Men's Figure Skating" },
              { href: '/winter-olympics/norway', emoji: '🇳🇴', label: 'Norway', sub: 'Medal standings & coverage' },
              { href: '/winter-olympics/italy', emoji: '🇮🇹', label: 'Italy', sub: 'Host nation coverage' },
              { href: '/winter-olympics/mikaela-shiffrin', emoji: '🎿', label: 'Mikaela Shiffrin', sub: 'Full coverage' },
            ]}
          />
        </Hub.Section>

      </Hub>
    </>
  );
}
