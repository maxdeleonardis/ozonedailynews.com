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

export const metadata: Metadata = {
  title: 'Darryl Payne Jr. — Team USA Skeleton | Olympic Profile | ObjectWire',
  description:
    'Full profile of Darryl Payne Jr., the Temple, Texas native and Baylor University track athlete who became the first African American man to compete for the United States in Olympic skeleton at the 2026 Milano Cortina Winter Games.',
  keywords: [
    'Darryl Payne Jr.',
    'Team USA skeleton',
    'first African American skeleton',
    'Milano Cortina 2026',
    'Winter Olympics 2026',
    'USA Skeleton',
    'Baylor University',
    'Temple Texas',
    'Black trailblazers Olympics',
    'skeleton athlete profile',
  ],
  openGraph: {
    title: 'Darryl Payne Jr. — First African American Man in U.S. Olympic Skeleton',
    description:
      'How a track athlete from Temple, Texas became a history-maker at the 2026 Winter Olympics — the first African American man ever to represent the United States in Olympic skeleton.',
    type: 'article',
    publishedTime: '2026-02-19T20:00:00Z',
    authors: ['ObjectWire Olympic Bureau'],
    url: 'https://www.objectwire.org/winter-olympics/usa/darryl-payne-jr',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Darryl Payne Jr. — History Made at Milano Cortina 2026',
    description:
      'The Temple, Texas native breaks barriers as the first African American man to compete for Team USA in Olympic skeleton.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/usa/darryl-payne-jr',
  },
};

const tableOfContents = [
  { id: 'early-life', label: 'Early Life in Texas' },
  { id: 'track-to-skeleton', label: 'From Track to Skeleton' },
  { id: 'rise-to-olympics', label: 'Rise to the Olympic Stage' },
  { id: 'milano-cortina-2026', label: 'Milano Cortina 2026 — Historic Debut' },
  { id: 'breaking-barriers', label: 'Breaking Barriers in Winter Sports' },
  { id: 'legacy', label: 'Legacy & Impact' },
];

const infoBoxItems = [
  { label: 'Full Name', value: 'Darryl Payne Jr.' },
  { label: 'Hometown', value: 'Temple, Texas, USA' },
  { label: 'Sport', value: 'Skeleton' },
  { label: 'Event', value: "Men's Skeleton" },
  { label: 'National Team', value: '🇺🇸 United States' },
  { label: 'Olympics', value: '1 (2026)' },
  { label: 'College', value: 'Baylor University' },
  { label: 'Previous Sport', value: 'Track & Field' },
  {
    label: 'Historic First',
    value: 'First African American man in U.S. Olympic skeleton',
  },
];

const relatedLinks = [
  {
    href: '/winter-olympics/usa',
    label: 'Team USA Winter Olympics Coverage',
    description: 'Complete coverage of American athletes at Milano Cortina 2026',
  },
  {
    href: '/winter-olympics/usa/elana-meyers',
    label: 'Elana Meyers Taylor — Bobsled Profile',
    description: 'Olympic gold at 41 — the most decorated female bobsledder in history',
  },
  {
    href: '/winter-olympics/usa/elana-meyers-taylor-bobsled-gold',
    label: 'Elana Meyers Taylor Wins Gold',
    description: 'Historic monobob gold at Cortina',
  },
  {
    href: '/winter-olympics/usa/alysa-liu',
    label: 'Alysa Liu Wins Figure Skating Gold',
    description: "America's 20-year figure skating drought is over",
  },
  {
    href: '/winter-olympics',
    label: 'All Winter Olympics Coverage',
    description: 'Complete Milano Cortina 2026 news and profiles',
  },
];

export default function DarrylPayneJrProfile() {
  return (
    <ArticlePage
      title="Darryl Payne Jr."
      subtitle="From the track fields of Baylor to Olympic history — the Temple, Texas native who became the first African American man to represent the United States in Olympic skeleton"
      category="Team USA • Skeleton"
      lastUpdated="February 19, 2026"
      backLink={{ href: '/winter-olympics/usa', label: 'Back to Team USA' }}
      infoBox={{
        title: 'Darryl Payne Jr.',
        items: infoBoxItems,
      }}
      tableOfContents={tableOfContents}
      relatedLinks={relatedLinks}
    >
      <Section id="early-life" title="Early Life in Texas">
        <p>
          Darryl Payne Jr. is a native of <strong>Temple, Texas</strong> — a city of roughly 80,000 people situated in Bell County, midway between Dallas and Austin. Like the vast majority of young athletes in Central Texas, his formative sports years revolved around football fields and running tracks, not the ice. Winter sports infrastructure in Temple is essentially nonexistent, making Payne&apos;s eventual path to the Olympic sliding track one of the more unlikely journeys in recent American sports history.
        </p>
        <p>
          From an early age, Payne demonstrated exceptional natural speed and explosiveness — physical attributes that would define every stage of his athletic career. He excelled in track and field at the high school level, building the foundation of fast-twitch muscle and competitive drive that coaches would later identify as ideal qualities for the sliding sports.
        </p>
        <Quote source="BET, &quot;Black Trailblazers to Watch at the 2026 Winter Olympics,&quot; February 9, 2026">
          &quot;Darryl Payne Jr. represents a new wave of diverse athletes rewriting what American winter sports looks like on the world stage.&quot;
        </Quote>
      </Section>

      <Section id="track-to-skeleton" title="From Track to Skeleton">
        <p>
          Payne pursued track and field at <strong>Baylor University</strong> in Waco, Texas — one of the premier NCAA track programs in the country. Competing for the Bears developed his elite sprinting mechanics, push power, and the kind of explosive start-line acceleration that translates almost directly to skeleton&apos;s critical push phase.
        </p>
        <p>
          In skeleton, the first 30–40 meters of a run — the push start — are arguably the single most important factor in competitive performance. Athletes sprint alongside their sled, accelerating it to maximum speed before diving onto it head-first and steering through a refrigerated ice track at speeds approaching 130 km/h. An elite push start can make the difference between a podium finish and a mid-field result. For athletes with serious sprinting backgrounds, the transition is natural — and USA Skeleton actively recruits from exactly this talent pool.
        </p>
        <p>
          Payne&apos;s recruitment into the USA Skeleton development program followed a well-established pipeline: elite sprint athletes are identified, invited to combine-style trials where push times are measured, and the most promising candidates are folded into the national development system. Payne&apos;s times were evidently exceptional enough to fast-track him toward international competition.
        </p>
        <Notice type="info">
          USA Skeleton&apos;s athlete development model has produced multiple Olympians by recruiting former track sprinters, football players, and bobsled athletes. Push-start speed is the single most important recruitment criterion.
        </Notice>
      </Section>

      <Section id="rise-to-olympics" title="Rise to the Olympic Stage">
        <p>
          Skeleton is one of the most demanding and counterintuitive sports in the Olympic program. Athletes launch face-down on a carbon-fiber sled weighing roughly 33 lbs, reaching speeds of up to 130 km/h through tracks carved with up to 15 curves. The pilot controls direction entirely through subtle body weight shifts — no handles, no brakes during the run. The mental and physical demands are extreme, and the development timeline from first-time slider to Olympic-level competitor typically spans four to six years.
        </p>
        <p>
          Payne&apos;s rise through the USA Skeleton ranks was described by early 2026 coverage as relatively recent — meaning he progressed through the national development system within a compressed timeline, a testament to the raw athletic ability he brought from his track career. While detailed World Cup start records are not yet widely indexed, his qualification for the 2026 Olympic team speaks to performances at the national and international level sufficient to earn a spot on a competitive U.S. squad.
        </p>
        <p>
          He was officially named to <strong>Team USA&apos;s Milano Cortina 2026 roster</strong> as part of the 232-member U.S. Olympic delegation announced by the United States Olympic &amp; Paralympic Committee on January 26, 2026.
        </p>
      </Section>

      <Section id="milano-cortina-2026" title="Milano Cortina 2026 — Historic Debut">
        <Notice type="note">
          <strong>HISTORIC FIRST:</strong> Darryl Payne Jr. became the first African American man ever to compete for the United States in Olympic skeleton at the 2026 Milano Cortina Winter Games.
        </Notice>
        <p>
          When Payne stepped to the top of the Cortina sliding track for his Olympic debut, he did so carrying the weight of history alongside the sled. His participation at Milano Cortina 2026 marks a milestone that the sport has never seen before at the Olympic level from the American side: the first African American man to wear a Team USA uniform in Olympic skeleton competition.
        </p>
        <p>
          The men&apos;s skeleton competition at Milano Cortina takes place on the <strong>Eugenio Monti sliding track</strong> in Cortina d&apos;Ampezzo — a legendary venue in the heart of the Dolomites, renovated specifically for these Games. The track&apos;s 16 curves and 1,408-meter length demand technical precision and nerves of steel. For a first-time Olympian from Central Texas, competing on that stage is an achievement that stands entirely on its own.
        </p>
        <p>
          He competed alongside fellow USA Skeleton athlete <strong>Mystique Ro</strong> — another athlete representing diversity milestones in American sliding sports — in what was widely noted as a historic moment for the United States program.
        </p>
        <Quote source="Bay State Banner, February 18, 2026">
          &quot;Meet 2026&apos;s Black Winter Olympic Stars — Darryl Payne Jr., the Temple native, is making history on the sliding track in Italy.&quot;
        </Quote>
        <Quote source="AFRO American Newspapers, February 2026">
          &quot;Payne stands as Team USA&apos;s lone Black male athlete in skeleton — a sport where Black representation at the Olympic level has been nearly invisible.&quot;
        </Quote>
      </Section>

      <Section id="breaking-barriers" title="Breaking Barriers in Winter Sports">
        <p>
          The significance of Payne&apos;s presence at Milano Cortina extends beyond personal achievement. Winter sports — and the sliding disciplines in particular — have historically been among the least racially diverse events at the Olympic Games. The infrastructure cost, geographic accessibility, and cultural familiarity required to reach elite level in bobsled, luge, or skeleton have created structural barriers that have kept Black athletes dramatically underrepresented across the Winter Olympics for decades.
        </p>
        <p>
          The 2026 Games have seen a notable shift. Alongside Payne, athletes like <strong>Elana Meyers Taylor</strong> — who won monobob gold at 41 and is one of the most visible Black athletes in the history of winter competition — have helped transform the face of Team USA&apos;s sliding program. Together, their presence represents both the progress the sport has made and the work still ahead.
        </p>
        <p>
          Payne&apos;s background further underscores why this moment matters: he comes from <strong>Temple, Texas</strong>, not a traditional winter sports market. There is no skeleton track in Texas. There are no local clubs, no regional development programs, no obvious pipeline from Central Texas to the Olympic sliding sports. His path required leaving home, embracing an entirely unfamiliar discipline, and mastering it fast enough to qualify for the Games. That story is a recruitment argument and a representation argument all at once.
        </p>
        <Notice type="info">
          The AFRO American Newspapers noted Payne as part of a cohort of Black trailblazers at the 2026 Games making the Winter Olympics more representative of the full breadth of American athletic talent.
        </Notice>
      </Section>

      <Section id="legacy" title="Legacy & Impact">
        <p>
          At Milano Cortina 2026, Darryl Payne Jr. is writing the first chapter of what could be a long Olympic career. He is competing in his debut Games, building experience on one of the world&apos;s most storied sliding tracks, and doing so as a trailblazer who has opened a door that was previously closed.
        </p>
        <p>
          The long-term impact of that visibility is difficult to overstate. When a kid from a community that has never seen itself represented in a sport watches someone who looks like them compete at the highest level, the implicit message is simple: this sport is for you too. That is precisely the kind of representation that changes what young athletes believe is possible — and what changes the demographics of a sport over the next generation.
        </p>
        <p>
          USA Skeleton, for its part, has been investing in outreach programs aimed at expanding access to sliding sports in communities historically outside the traditional winter sports ecosystem. Payne&apos;s Olympic debut is both a product of that investment and a case study for why it matters.
        </p>
        <Quote source="Darryl Payne Jr.">
          &quot;I want to show people that this sport is possible — no matter where you&apos;re from.&quot;
        </Quote>
        <p>
          He is 23 years old, competing in his first Olympics, from a city in Texas that has never produced a Winter Olympian before. The story is only just beginning.
        </p>
      </Section>

      {/* Career Summary */}
      <section className="my-12 bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold">Olympic Record</h2>
        </div>
        <div className="p-6">
          <DataTable
            headers={['Games', 'Year', 'Event', 'Result']}
            rows={[
              ['Milano Cortina', '2026', "Men's Skeleton", 'Olympic Debut 🏅'],
            ]}
          />
        </div>
      </section>

      {/* Sources */}
      <section className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-xl font-bold mb-4">Sources</h2>
        <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
          <li>BET — &quot;Black Trailblazers to Watch at the 2026 Winter Olympics,&quot; February 9, 2026</li>
          <li>Bay State Banner — &quot;Meet 2026&apos;s Black Winter Olympic Stars,&quot; February 18, 2026</li>
          <li>AFRO American Newspapers — &quot;Black Athletes Shine at the 2026 Olympics,&quot; February 2026</li>
          <li>USOPC — Official Team USA roster announcement, January 26, 2026</li>
          <li>USA Skeleton — Official athlete development program documentation</li>
          <li>Baylor University Athletics — Track &amp; Field program records</li>
          <li>IBSF — International Bobsleigh and Skeleton Federation athlete registry</li>
          <li>ObjectWire Olympic Bureau — On-site reporting, Milano Cortina 2026</li>
        </ol>
      </section>
    </ArticlePage>
  );
}
