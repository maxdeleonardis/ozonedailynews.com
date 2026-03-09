import type { Metadata } from 'next';
import Link from 'next/link';
import JackArticle, {
  JackCaseOverview,
  JackStats,
  JackVideo,
  JackCallout,
  JackSection,
} from '@/components/JackArticle';

// ============================================================
// CONSTANTS
// ============================================================
const SLUG = '/video-games/racing/polyphony-gran-turismo';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/entertainment/gran_turismo.PNG';

// ============================================================
// METADATA
// ============================================================
export const metadata: Metadata = {
  title:
    'Gran Turismo 7 Review & Polyphony Digital Now Hiring for Next Gran Turismo | ObjectWire',
  description:
    'Gran Turismo 7 remains the benchmark racing simulator on PlayStation — 2 million active players in December 2025. Polyphony Digital posted 18 job openings March 2, 2026, signaling next-gen Gran Turismo development for PlayStation 6.',
  keywords: [
    'Gran Turismo 7 review',
    'Polyphony Digital hiring 2026',
    'Gran Turismo 8 PlayStation 6',
    'Gran Turismo 7 gameplay',
    'Kazunori Yamauchi new game',
    'Gran Turismo 100 million sales',
    'Polyphony Digital jobs 2026',
    'best racing game PlayStation 5',
    'Gran Turismo 7 car list',
    'GT7 VR review',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Gran Turismo 7 Review — And Why Polyphony Digital Is Hiring for the Next One',
    description:
      'GT7 still sets the standard for sim racing. Polyphony Digital just posted 18 jobs for next-gen Gran Turismo development — and Kazunori Yamauchi wants builders who create the future through art and technology.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-02T12:00:00Z',
    modifiedTime: '2026-03-02T12:00:00Z',
    section: 'Gaming',
    tags: [
      'Gran Turismo', 'Polyphony Digital', 'Gran Turismo 7', 'PlayStation',
      'Racing Games', 'Simulation', 'Kazunori Yamauchi', 'PlayStation 6', 'Gaming',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gran Turismo 7 Review + Polyphony Digital Is Hiring for What Comes Next',
    description:
      '100M series sales. 2M GT7 active players. 18 new job openings. Kazunori Yamauchi is building the next lap.',
    images: [IMAGE_URL],
  },
};

// ============================================================
// PAGE
// ============================================================
export default function PolyphonyGranTurismoPage() {
  return (
    <JackArticle
      layout="news"
      categories={[
        { label: 'GAME REVIEW', color: 'blue' },
        { label: 'RACING', color: 'gray' },
      ]}
      publishDate="March 2, 2026"
      publishDateISO="2026-03-02T12:00:00Z"
      modifiedDateISO="2026-03-02T12:00:00Z"
      readTime="8 min read"
      title="Gran Turismo 7 Review — The Gold Standard of Sim Racing, and Why Polyphony Digital Is Already Building the Next One"
      subtitle="Gran Turismo 7 delivers the most complete sim racing experience on PlayStation. Four years after launch, it still holds 2 million active players. Now Polyphony Digital is hiring for next-gen Gran Turismo — and Kazunori Yamauchi is looking for people who want to create the future through art and technology."
      heroImage={{
        src: IMAGE_URL,
        alt: 'Gran Turismo 7 — Polyphony Digital, PlayStation 4 and PlayStation 5',
        caption: 'Gran Turismo 7 launched March 4, 2022 on PlayStation 4 and PlayStation 5. Developed by Polyphony Digital.',
        credit: 'Sony Interactive Entertainment / Polyphony Digital',
      }}
      breadcrumbs={[
        { href: '/', label: 'Home' },
        { href: '/video-games', label: 'Video Games' },
        { href: '/video-games/racing', label: 'Racing' },
        { href: SLUG, label: 'Gran Turismo / Polyphony Digital' },
      ]}
      author={{
        name: 'ObjectWire Gaming Desk',
        department: 'Gaming Correspondent',
      }}
      articleUrl={ARTICLE_URL}
      description="Gran Turismo 7 review, franchise sales history, and Polyphony Digital's 18 new job openings signaling next-gen Gran Turismo development for PlayStation 6."
      section="Gaming"
      keywords={[
        'Gran Turismo 7', 'Polyphony Digital', 'racing game review',
        'Gran Turismo hiring 2026', 'PlayStation 6 racing game',
      ]}
      relatedArticles={[
        {
          href: '/video-games',
          category: 'VIDEO GAMES',
          categoryColor: 'text-blue-600',
          title: 'ObjectWire Video Games Coverage',
        },
        {
          href: '/video-games/gta-6',
          category: 'UPCOMING',
          categoryColor: 'text-orange-600',
          title: 'GTA 6 — Release Date, Price & Everything We Know',
        },
        {
          href: '/video-games/Digital-Foundry',
          category: 'TECH ANALYSIS',
          categoryColor: 'text-gray-600',
          title: 'Digital Foundry — Game Tech Previews',
        },
      ]}
      timeline={[
        { date: '1997', description: 'Gran Turismo launches on PlayStation — first entry in the series.' },
        { date: 'March 4, 2022', description: 'Gran Turismo 7 launches on PS4 and PS5.', highlight: true },
        { date: 'June 25, 2025', description: 'Gran Turismo series surpasses 100 million units sold worldwide.', highlight: true },
        { date: 'December 21, 2025', description: 'GT7 reports 2 million+ active players.' },
        { date: 'March 2, 2026', description: '18 new job openings posted on Polyphony Digital\'s careers page for next Gran Turismo production.', highlight: true },
      ]}
      documents={[
        { href: 'https://www.gran-turismo.com', label: 'Gran Turismo Official Website', icon: '🏁' },
        { href: 'https://www.polyphony.co.jp/en/recruit/', label: 'Polyphony Digital — Careers Portal', icon: '💼' },
      ]}
      showCorrections
      showEditorialStandards
      footerTagline="When a racing series passes 100 million sales and posts 18 jobs for the next lap, the pit crew assembles before the checkered flag."
      footerLinks={[
        { href: '/video-games', label: 'Video Games' },
        { href: '/video-games/racing', label: 'Racing' },
      ]}
    >

      {/* ── Lede ─────────────────────────────────────────────── */}
      <p>
        <strong>Gran Turismo 7</strong> is not just a racing game. It is the most detailed
        automotive catalog ever assembled in interactive form — 450+ cars at launch, growing to
        500+ through free updates, each modeled with obsessive accuracy across exterior geometry,
        cockpit detail, engine audio, and tire physics. Four years after its March 4, 2022
        launch, it still holds <strong>over 2 million active players</strong> as of December
        2025. The Gran Turismo series has sold over{' '}
        <strong>100 million units worldwide</strong> as of June 25, 2025.
      </p>
      <p>
        Then on <strong>March 2, 2026</strong>, Polyphony Digital posted{' '}
        <strong>18 new job openings</strong> on its careers page explicitly referencing
        &ldquo;the production of Gran Turismo.&rdquo; Studio founder{' '}
        <strong>Kazunori Yamauchi</strong> accompanied the listings with a personal message to
        prospective hires. The next chapter of the franchise is in motion — and if you want to
        be part of it, this article tells you exactly how.
      </p>

      {/* ── Quick Facts ──────────────────────────────────────── */}
      <JackCaseOverview
        title="GRAN TURISMO AT A GLANCE"
        accentColor="blue"
        items={[
          { label: 'Franchise Sales:', value: '100+ million units worldwide (as of June 25, 2025)' },
          { label: 'Latest Title:', value: 'Gran Turismo 7 — launched March 4, 2022 on PS4 and PS5' },
          { label: 'Active Players (GT7):', value: '2 million+ as of December 21, 2025' },
          { label: 'Cars in GT7:', value: '500+ across launch and free post-launch updates' },
          { label: 'Developer:', value: 'Polyphony Digital (Sony Interactive Entertainment subsidiary)' },
          { label: 'Studio Founder:', value: 'Kazunori Yamauchi — also the series creator and director' },
          { label: 'New Job Openings:', value: '18 postings on Polyphony Digital careers (March 2, 2026)' },
          { label: 'Next Project:', value: 'Next-gen Gran Turismo, widely linked to PlayStation 6' },
        ]}
      />

      <JackStats
        title="KEY NUMBERS"
        accentColor="blue"
        stats={[
          { value: '100M+', label: 'Series Units Sold' },
          { value: '2M+', label: 'GT7 Active Players' },
          { value: '500+', label: 'Cars in GT7' },
          { value: '18', label: 'New Job Openings' },
        ]}
      />

      {/* ── Video ────────────────────────────────────────────── */}
      <JackVideo
        videoId="nnB6r43huNQ"
        title="Gran Turismo 7 — Official Trailer"
        caption="Gran Turismo 7 official trailer. Published by PlayStation on YouTube."
        provider="youtube"
      />

      {/* ── Section 1: Review ────────────────────────────────── */}
      <JackSection number={1} title="Gran Turismo 7 Review — The Best Sim Racer on PlayStation" accentColor="blue">
        <p>
          Gran Turismo 7 launched on March 4, 2022, with a deliberate return to the franchise&apos;s
          roots after the more esports-focused Gran Turismo Sport. It brought back a proper
          single-player career mode — the <strong>GT Café</strong> menu book structure —
          alongside the largest car roster in the series, fully persistent car saves, a
          livery editor, and one of the most sonically accurate audio engines in any racing
          game. The PS5 version targets <strong>4K at 60 fps</strong> and includes full{' '}
          <strong>PlayStation VR2</strong> support across every track and car in the game.
        </p>

        <h3>Physics and Driving Feel</h3>
        <p>
          The driving model sits between hardcore simulation and accessible arcade, using
          Polyphony Digital&apos;s <strong>Phy Engine</strong> — refined across 25+ years of
          Gran Turismo development. Tire deformation, weight transfer, aerodynamic downforce,
          and surface grip vary meaningfully between vehicles. A standard hatchback handles
          nothing like a Group 3 race car, and neither feels like a shortcut to mastery.
          Traction control, ABS, and stability management can be dialed down individually,
          rewarding drivers who learn to manage throttle and braking inputs at the limit.
        </p>
        <p>
          The addition of <strong>PSVR2 support</strong> in 2023 fundamentally changed how
          depth perception works in the game. Braking points become intuitive in VR in a way
          that no TV setup fully replicates. For PlayStation owners with a headset, GT7 is the
          most immersive racing experience available on any platform.
        </p>

        <h3>Car Roster and Authenticity</h3>
        <p>
          GT7 shipped with 420 cars and has grown past 500 through free monthly additions.
          Each car features an official <strong>scanned interior</strong>, calibrated engine
          sounds recorded directly from the source vehicles, and handling data developed in
          collaboration with manufacturers. The <strong>Car Café menus</strong> provide short
          histories and racing context for each acquisition, turning collecting into a form of
          automotive education.
        </p>
        <p>
          Manufacturer representation spans everyday road cars, vintage classics, concept
          vehicles, and full race machinery across GT3, Group B, and Formula categories.
          Notable additions post-launch include the Ferrari 296 GT3, Lamborghini Huracán GT3
          Evo, and Porsche Vision GT concept.
        </p>

        <JackCallout accentColor="blue" label="GT7 Verdict">
          Gran Turismo 7 is the most complete simulation of car culture on PlayStation —
          covering acquisition, tuning, livery, racing, and VR immersion within a single
          coherent package. Its 2 million active players in December 2025 reflect a game that
          rewards long-term investment rather than a viral moment.
        </JackCallout>

        <h3>Content, Career Mode, and Live Service</h3>
        <p>
          The GT Café mode unlocks cars through curated menus organized by era, country, and
          manufacturer, creating a loose narrative thread through the collection process.
          License tests, circuit experience events, and multiplayer Sport Mode fill the
          competitive layer. The game&apos;s <strong>live service calendar</strong> rotates
          limited-time events monthly, pairing new cars with targeted race challenges.
        </p>
        <p>
          The primary criticism at launch centered on a controversial post-launch update that
          reduced credit payouts and increased car purchase costs, pushing players toward
          microtransactions. Polyphony partially walked this back following significant
          community backlash, increasing event payouts and adding high-value races. The
          controversy has faded for most active players, though it remains a mark on GT7&apos;s
          launch history.
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="px-4 py-3 text-left font-semibold">Title</th>
                <th className="px-4 py-3 text-left font-semibold">Platform</th>
                <th className="px-4 py-3 text-right font-semibold">Metacritic</th>
                <th className="px-4 py-3 text-right font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                { title: 'Gran Turismo 7', platform: 'PS4 / PS5 (2022)', score: '87', notes: 'PSVR2 support added 2023' },
                { title: 'Gran Turismo Sport', platform: 'PS4 (2017)', score: '75', notes: 'Esports-first, limited offline' },
                { title: 'Gran Turismo 6', platform: 'PS3 (2013)', score: '81', notes: 'Final PS3 entry' },
                { title: 'Gran Turismo 5', platform: 'PS3 (2010)', score: '84', notes: '1,000+ car roster' },
                { title: 'Gran Turismo 4', platform: 'PS2 (2004)', score: '89', notes: 'Series critical peak pre-GT7' },
              ].map(({ title, platform, score, notes }, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 border-b border-gray-100 font-medium">{title}</td>
                  <td className="px-4 py-3 border-b border-gray-100 text-gray-600">{platform}</td>
                  <td className="px-4 py-3 border-b border-gray-100 text-right font-bold">{score}</td>
                  <td className="px-4 py-3 border-b border-gray-100 text-right text-gray-600 text-xs">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </JackSection>

      {/* ── Section 2: Polyphony Hiring ──────────────────────── */}
      <JackSection number={2} title="Polyphony Digital Is Hiring — 18 Openings for Next Gran Turismo" accentColor="blue">
        <p>
          On <strong>March 2, 2026</strong>, Polyphony Digital listed{' '}
          <strong>18 job openings</strong> on its Greenhouse-powered careers board. Every
          posting specifies recruitment for &ldquo;the production of Gran Turismo,&rdquo;
          covering roles in game testing, CG art, project management, programming, UI design,
          and audio.
        </p>

        <JackCaseOverview
          title="OPEN ROLES AT POLYPHONY DIGITAL (MARCH 2026)"
          accentColor="blue"
          items={[
            { label: 'Game Tester:', value: 'Tests race events recreated in Gran Turismo, including real-world GT and Formula categories.' },
            { label: 'Sound Design Assistant:', value: 'Supports audio production for Gran Turismo — engine recordings, environmental audio, UI sounds.' },
            { label: 'CG Artist:', value: 'Creates 3D car models and environment animations.' },
            { label: 'Project Manager:', value: 'Oversees development timelines and cross-team coordination across Gran Turismo production.' },
            { label: 'Technical Artist:', value: 'Bridges art and engineering pipelines for Gran Turismo features.' },
            { label: 'UI Designer:', value: 'Designs menus, HUD elements, and interface flows.' },
            { label: 'Front-End Engineer:', value: 'Develops gran-turismo.com web properties.' },
            { label: 'Content Writer:', value: 'Produces in-game and web content for Gran Turismo.' },
            { label: 'Software Engineer:', value: 'Core game systems and platform engineering.' },
          ]}
        />

        <p>
          Openings target a mix of experience levels — part-time positions, new graduates, and
          experienced hires. Applications go through{' '}
          <a
            href="https://www.polyphony.co.jp/en/recruit/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Polyphony Digital&apos;s English recruitment portal
          </a>
          . The postings appeared alongside a message from Kazunori Yamauchi and have been
          linked by multiple outlets to next-gen Gran Turismo development targeting PlayStation 6.
        </p>
      </JackSection>

      {/* ── Section 3: Yamauchi Message ──────────────────────── */}
      <JackSection number={3} title="Kazunori Yamauchi's Message to Prospective Hires" accentColor="blue">
        <p>
          Above the careers listings, Polyphony Digital placed a personal statement from studio
          founder and Gran Turismo creator <strong>Kazunori Yamauchi</strong>:
        </p>

        <JackCallout accentColor="blue" label="Kazunori Yamauchi — Polyphony Digital Careers Page">
          &ldquo;We have continued to produce the Gran Turismo series for over 25 years now.
          We are proud to have brought ideas of the future into reality over the years through
          art and technology. But we still think there is much more to be done to provide the
          best experience for our players. For those of you who have that unending urge to
          create, to &lsquo;create the future through art and technology&rsquo;, we await your
          passion, skill, and ideas at Polyphony Digital.&rdquo;
        </JackCallout>

        <p>
          The phrase <em>&ldquo;create the future through art and technology&rdquo;</em> appears
          both in the body of the message and as a standalone headline above the job listings.
          The framing is consistent with Yamauchi&apos;s long-standing philosophy that Gran
          Turismo is as much an art project as a sports title — a belief that has shaped the
          franchise&apos;s focus on vehicular fidelity, museum-quality car histories, and
          real-world automotive partnerships since 1997.
        </p>
      </JackSection>

      {/* ── Section 4: How to Apply ──────────────────────────── */}
      <JackSection number={4} title="How to Apply to Polyphony Digital" accentColor="blue">
        <p>
          All 18 open positions are listed on Polyphony Digital&apos;s{' '}
          <a
            href="https://www.polyphony.co.jp/en/recruit/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            English-language careers page
          </a>
          , powered by Greenhouse. Applications are accepted directly through the portal, which
          supports both Japanese and English submissions for most roles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="border-l-4 border-blue-600 bg-blue-50 p-4">
            <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">
              What Polyphony Looks For
            </p>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>Passion for automotive culture and motorsport</li>
              <li>Portfolio demonstrating craft (art, code, audio, or design)</li>
              <li>Experience with game engines (Unreal, Unity, proprietary)</li>
              <li>Willingness to relocate to Tokyo, Japan</li>
              <li>Alignment with Yamauchi&apos;s &ldquo;art and technology&rdquo; ethos</li>
            </ul>
          </div>
          <div className="border-l-4 border-gray-600 bg-gray-50 p-4">
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">
              Open Hire Types
            </p>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>Experienced hires (mid-to-senior level)</li>
              <li>New graduate positions</li>
              <li>Part-time roles (testing, content, web)</li>
              <li>Contract positions for specific production phases</li>
            </ul>
          </div>
        </div>

        <JackCallout accentColor="blue" label="Application Portal">
          Direct link: <strong>polyphony.co.jp/en/recruit/</strong> — Greenhouse-powered
          English portal. Applications are processed by Polyphony Digital&apos;s Tokyo
          headquarters. Relocation support varies by role; confirm with the recruiting team
          during the interview process.
        </JackCallout>
      </JackSection>

      {/* ── Section 5: Franchise History ─────────────────────── */}
      <JackSection number={5} title="Gran Turismo Franchise History and Sales Milestones" accentColor="blue">

        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="px-4 py-3 text-left font-semibold">Title</th>
                <th className="px-4 py-3 text-left font-semibold">Platform</th>
                <th className="px-4 py-3 text-right font-semibold">Year</th>
              </tr>
            </thead>
            <tbody>
              {[
                { title: 'Gran Turismo', platform: 'PlayStation', year: '1997' },
                { title: 'Gran Turismo 2', platform: 'PlayStation', year: '1999' },
                { title: 'Gran Turismo 3: A-Spec', platform: 'PlayStation 2', year: '2001' },
                { title: 'Gran Turismo 4', platform: 'PlayStation 2', year: '2004' },
                { title: 'Gran Turismo 5', platform: 'PlayStation 3', year: '2010' },
                { title: 'Gran Turismo 6', platform: 'PlayStation 3', year: '2013' },
                { title: 'Gran Turismo Sport', platform: 'PlayStation 4', year: '2017' },
                { title: 'Gran Turismo 7', platform: 'PlayStation 4 / 5', year: '2022' },
              ].map(({ title, platform, year }, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 border-b border-gray-100 font-medium">{title}</td>
                  <td className="px-4 py-3 border-b border-gray-100 text-gray-600">{platform}</td>
                  <td className="px-4 py-3 border-b border-gray-100 text-right">{year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Sales milestones: the series crossed <strong>90 million units by December 2022</strong>{' '}
          and <strong>100 million units by June 25, 2025</strong>. Gaps between mainline releases
          averaged <strong>4–5 years</strong> from GT4 onward. If that cadence holds, the next
          numbered title — targeting PlayStation 6 — would arrive between 2026 and 2028.
        </p>

        <p>
          Reports from Insider Gaming and Eurogamer on March 2, 2026, directly link the 18
          new job openings to next-generation Gran Turismo development. PlayStation Studios
          has ramped hiring across multiple teams following project cancellations elsewhere in
          the SIE portfolio.
        </p>

        <JackCallout accentColor="blue" label="What the Hiring Signals">
          Eighteen simultaneous openings across art, engineering, QA, and project management
          represent a full production onboarding wave — not a maintenance hire for GT7 updates.
          The openings, paired with Yamauchi&apos;s personal recruitment message, indicate that
          the next Gran Turismo has moved from pre-production into active staffing.
        </JackCallout>
      </JackSection>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <h2>Frequently Asked Questions</h2>
      <div className="space-y-4 my-6">
        {[
          {
            q: 'Is Gran Turismo 7 worth buying in 2026?',
            a: 'Yes. GT7 is the most complete sim racing experience on PlayStation, with 500+ cars, full PSVR2 support, and an active live service that continues adding free content. Its 2 million active players as of December 2025 confirm sustained demand.',
          },
          {
            q: 'Is Gran Turismo 8 confirmed?',
            a: 'Not officially. The 18 Polyphony Digital job openings on March 2, 2026, all reference "production of Gran Turismo," which multiple outlets have reported as evidence of next-gen Gran Turismo development for PlayStation 6.',
          },
          {
            q: 'How do I apply to work at Polyphony Digital?',
            a: 'Applications for all 18 open roles go through Polyphony Digital\'s Greenhouse-powered English careers portal at polyphony.co.jp/en/recruit/. Openings include game tester, CG artist, UI designer, project manager, and software engineer positions.',
          },
          {
            q: 'How many cars are in Gran Turismo 7?',
            a: 'GT7 launched with 420 cars and has grown past 500 through free monthly updates as of early 2026.',
          },
          {
            q: 'How many copies has Gran Turismo sold?',
            a: 'The Gran Turismo series has sold over 100 million units worldwide as of June 25, 2025. The previous milestone was 90 million units in December 2022.',
          },
        ].map(({ q, a }, i) => (
          <div key={i} className="border border-gray-200 p-4">
            <p className="font-semibold text-sm mb-1">{q}</p>
            <p className="text-sm text-gray-700">{a}</p>
          </div>
        ))}
      </div>

    </JackArticle>
  );
}
