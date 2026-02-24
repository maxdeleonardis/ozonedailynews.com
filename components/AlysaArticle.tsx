'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { Breadcrumb } from '@/components/Breadcrumb';

// ─── Static data ──────────────────────────────────────────────────────────────

const infoboxRows = [
  { label: 'Full Name',       value: 'Alysa Liu' },
  { label: 'Born',            value: 'August 8, 2005' },
  { label: 'Age',             value: '20 years old' },
  { label: 'Origin',          value: 'Fremont, California, USA' },
  { label: 'Nationality',     value: 'American (Chinese-American)' },
  { label: 'Discipline',      value: "Ladies' Singles Figure Skating" },
  { label: 'Olympic Gold',    value: '2026 Milano Cortina' },
  { label: 'Score',           value: '233.17 pts (Olympic gold)' },
  { label: 'US Champion',     value: '2019, 2020, 2026' },
  { label: 'Grand Prix Final',value: 'Champion 2024-25' },
  { label: 'Signature Jump',  value: 'Triple Axel' },
  { label: 'Status',          value: 'Active (2026)' },
];

const timeline = [
  { year: '2005', event: 'Born August 8 in Fremont, California. Chinese-American heritage.' },
  { year: '2015', event: 'Begins competing in figure skating; rapid progression through junior ranks.' },
  { year: '2019', event: 'Wins first U.S. Championship at age 13, the youngest U.S. champion in history.' },
  { year: '2020', event: 'Defends U.S. Championship title at age 14.' },
  { year: '2022', event: 'Left off Team USA for Beijing 2022 Olympics. Begins full technical rebuild.' },
  { year: '2023', event: 'Returns to competition with overhauled programs and refined artistry.' },
  { year: '2024', event: 'Grand Prix Final champion 2024-25 season; named U.S. team favorite for 2026.' },
  { year: '2026', event: 'Wins third U.S. Championship in January 2026.' },
  { year: '2026', event: 'Wins Olympic gold at Milano Cortina on 233.17 points, ending a 20-year American medal drought.' },
];

const podium = [
  { medal: '🥇', skater: 'Alysa Liu',       country: 'USA',         score: '233.17' },
  { medal: '🥈', skater: 'You Young',        country: 'South Korea', score: '228.44' },
  { medal: '🥉', skater: 'Kaori Sakamoto',   country: 'Japan',       score: '224.92' },
];

const roadToGold = [
  { label: '2022 Omission',   detail: 'Left off Team USA for Beijing Olympics. Publicly controversial decision that became her greatest motivation.' },
  { label: '2022-24 Rebuild', detail: 'Full technical and artistic overhaul. Rebuilt from the ice up with a new coaching philosophy.' },
  { label: '2024-25 Season',  detail: 'Grand Prix Final champion. Established as the overwhelming favorite heading into the 2026 cycle.' },
  { label: 'January 2026',    detail: 'Wins third U.S. Championship title, arriving in Milan as the top American contender.' },
];

const ARTICLE_URL = 'https://www.objectwire.org/winter-olympics/usa/alysa-liu';
const HERO_IMAGE  = '/winter-olympics/b7e3a3821e924c2c81fb95df11f52884~tplv-jj85edgx6n-image-origin.jpeg';

// ─── Component ────────────────────────────────────────────────────────────────

export function AlysaArticle() {
  return (
    <>
      <NewsArticleSchema
        title="Alysa Liu - Olympic Gold Medalist, Figure Skater | Milano Cortina 2026"
        description="Full biography of Alysa Liu, 2026 Olympic gold medalist in women's singles figure skating and three-time U.S. Champion."
        author="ObjectWire Olympic Bureau"
        publishedTime="2026-02-19T18:00:00Z"
        modifiedTime="2026-02-20T10:00:00Z"
        articleUrl={ARTICLE_URL}
        section="Winter Olympics"
        keywords={['Alysa Liu', 'figure skating', "women's singles", 'Olympic gold', 'Milano Cortina 2026', 'Team USA']}
      />

      {/* TikTok embed script */}
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />

      <div className="min-h-screen bg-[#faf9f6]">

        {/* ── Breadcrumb ──────────────────────────────────────────── */}
        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <Breadcrumb
              items={[
                { name: 'Home',           item: '/' },
                { name: 'Winter Olympics', item: '/winter-olympics' },
                { name: 'Team USA',        item: '/winter-olympics/usa' },
                { name: 'Alysa Liu',       item: '/winter-olympics/usa/alysa-liu' },
              ]}
            />
          </div>
        </div>

        {/* ── Hero Banner ─────────────────────────────────────────── */}
        <header style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 45%, #b45309 100%)' }}>
          <div className="max-w-5xl mx-auto px-4 py-14">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">

              {/* Thumbnail */}
              <div
                className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-xl overflow-hidden border-4 shrink-0"
                style={{ borderColor: 'rgba(255,255,255,0.3)' }}
              >
                <Image
                  src={HERO_IMAGE}
                  alt="Alysa Liu - Olympic gold medalist at Milano Cortina 2026"
                  fill
                  className="object-cover object-top"
                  sizes="144px"
                  priority
                />
              </div>

              <div className="flex-1">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.7rem', fontWeight: 800, padding: '3px 12px', borderRadius: 999, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Winter Olympics 2026
                  </span>
                  <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.7rem', fontWeight: 600, padding: '3px 12px', borderRadius: 999, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    Team USA · Figure Skating · Gold
                  </span>
                  <span style={{ background: '#b45309', color: '#fff', fontSize: '0.7rem', fontWeight: 800, padding: '3px 12px', borderRadius: 999, letterSpacing: '0.06em' }}>
                    🥇 Olympic Champion
                  </span>
                </div>

                {/* Title */}
                <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '0.5rem' }}>
                  Alysa Liu
                  <span style={{ display: 'block', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', fontWeight: 400, color: 'rgba(255,255,255,0.8)', marginTop: '0.4rem' }}>
                    Olympic Gold Medalist · Women&apos;s Figure Skating · Milano Cortina 2026
                  </span>
                </h1>

                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '600px', marginBottom: '1.2rem' }}>
                  California-born Chinese-American figure skater who ended a 20-year American medal drought
                  in women&apos;s singles with a breathtaking 233.17-point performance in Milan, Italy.
                  The youngest U.S. Champion in history, reborn as an Olympic gold medalist.
                </p>

                {/* Hero CTA buttons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  <Link href="/winter-olympics"
                    style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    🏅 Olympics Hub
                  </Link>
                  <Link href="/winter-olympics/usa"
                    style={{ background: '#1e3a5f', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    🇺🇸 Team USA
                  </Link>
                  <Link href="/winter-olympics/usa/ilia-malinin"
                    style={{ background: '#b45309', color: '#fff', padding: '8px 18px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    ⛸ Ilia Malinin Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── Main grid ───────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* ── ARTICLE BODY ──────────────────────────────────── */}
            <article className="lg:col-span-2 space-y-12">

              {/* Who Is Alysa Liu? */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">
                  Who Is Alysa Liu?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    <strong>Alysa Liu</strong> is an American competitive figure skater, born on{' '}
                    <strong>August 8, 2005</strong>, in <strong>Fremont, California</strong>. Of Chinese-American
                    heritage, she is a three-time U.S. Champion and the <strong>2026 Olympic gold medalist</strong>{' '}
                    in women&apos;s singles figure skating at the{' '}
                    <Link href="/winter-olympics" className="text-blue-600 hover:underline">
                      Milano Cortina Winter Olympics
                    </Link>.
                  </p>
                  <p>
                    She first made history in <strong>2019</strong>, winning the U.S. Championship at just{' '}
                    <strong>13 years old</strong>, making her the{' '}
                    <strong>youngest U.S. Champion in the event&apos;s history</strong>. She defended the
                    title in 2020, cementing an early reputation as arguably the most talented young female
                    figure skater in the United States in a generation.
                  </p>
                  <p>
                    After a painful omission from the 2022 Beijing Olympics team, Liu underwent a full
                    athletic and artistic rebuild that ultimately produced the most dominant stretch of her
                    career. Her 2026 gold medal, delivered with a total score of <strong>233.17 points</strong>,
                    ended a <strong>20-year American medal drought</strong> in the women&apos;s singles
                    figure skating event at the Olympic Games.
                  </p>
                </div>
              </section>

              {/* Going Viral / TikTok */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">
                  Gold Medalist - Going Viral
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                  Alysa Liu&apos;s Olympic gold sparked a wave of reaction content across social media.
                  This fan-made tribute spread rapidly across TikTok in the days following her win at
                  Milano Cortina.
                </p>
                <div className="flex justify-center">
                  <blockquote
                    className="tiktok-embed"
                    cite="https://www.tiktok.com/@breezoiscrazy/video/7608837069921668383"
                    data-video-id="7608837069921668383"
                    style={{ maxWidth: '605px', minWidth: '325px', width: '100%' }}
                  >
                    <section>
                      <a target="_blank" rel="noopener noreferrer" title="@breezoiscrazy"
                        href="https://www.tiktok.com/@breezoiscrazy?refer=embed">
                        @breezoiscrazy
                      </a>{' '}
                      Gold medalist!!! Champ&#127; |{' '}
                      <a title="alysaliu" target="_blank" rel="noopener noreferrer"
                        href="https://www.tiktok.com/tag/alysaliu?refer=embed">#alysaliu</a>{' '}
                      <a title="figureskating" target="_blank" rel="noopener noreferrer"
                        href="https://www.tiktok.com/tag/figureskating?refer=embed">#figureskating</a>{' '}
                      <a title="2026olympics" target="_blank" rel="noopener noreferrer"
                        href="https://www.tiktok.com/tag/2026olympics?refer=embed">#2026olympics</a>{' '}
                      <a title="edit" target="_blank" rel="noopener noreferrer"
                        href="https://www.tiktok.com/tag/edit?refer=embed">#edit</a>{' '}
                      <a target="_blank" rel="noopener noreferrer" title="original sound - BRËËZO"
                        href="https://www.tiktok.com/music/original-sound-7608837114402261791?refer=embed">
                        &#9836; original sound - BRËËZO
                      </a>
                    </section>
                  </blockquote>
                </div>
              </section>

              {/* The Gold Medal Performance */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">
                  The Olympic Gold Medal Performance
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Skating last in the final group at the <strong>Mediolanum Forum</strong> in Milan on
                    February 19, 2026, Liu delivered a free skate to Beethoven&apos;s{' '}
                    <em>Moonlight Sonata</em> that will be remembered as one of the great performances
                    in the event&apos;s Olympic history.
                  </p>
                  <p>
                    Her opening <strong>triple Axel</strong> was textbook. From there, she strung together
                    seven triple jumps and one triple-triple combination without a single fall, downgrade,
                    or wobble. Her free skate score of <strong>156.44</strong> was a personal best by nearly
                    four points. Her program components score was the highest of the night, with multiple
                    judges awarding <strong>9.25 and above</strong>.
                  </p>
                  <p>
                    When her scores confirmed the gold medal, Liu collapsed into the arms of her coaching
                    team. The arena, packed with thousands of American fans who had traveled to Milan, erupted.
                  </p>
                  <p>
                    &quot;I just told myself: this is what you trained for,&quot; Liu said. &quot;There was
                    no noise when I was on that ice. Just the music and me.&quot;
                  </p>
                </div>

                {/* Podium table */}
                <div className="not-prose mt-6 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ background: '#0f172a', color: '#fff' }}>
                        <th className="px-4 py-3 text-left font-semibold">Medal</th>
                        <th className="px-4 py-3 text-left font-semibold">Skater</th>
                        <th className="px-4 py-3 text-left font-semibold">Country</th>
                        <th className="px-4 py-3 text-left font-semibold">Score</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {podium.map((row) => (
                        <tr key={row.skater} className="even:bg-gray-50">
                          <td className="px-4 py-2.5 text-lg">{row.medal}</td>
                          <td className="px-4 py-2.5 font-semibold text-gray-900">{row.skater}</td>
                          <td className="px-4 py-2.5 text-gray-600">{row.country}</td>
                          <td className="px-4 py-2.5 font-bold text-gray-900">{row.score}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Early Life & Career */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">
                  Early Life &amp; Career
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Alysa Liu was born on <strong>August 8, 2005</strong>, in{' '}
                    <strong>Fremont, California</strong>, to a Chinese-American family. She began figure
                    skating as a young child and rapidly progressed through the junior ranks, demonstrating
                    a rare combination of natural athleticism, technical fearlessness, and artistic instinct.
                  </p>
                  <p>
                    At just <strong>13 years old</strong> in <strong>2019</strong>, Liu won the U.S. Figure
                    Skating Championships, becoming the{' '}
                    <strong>youngest U.S. Champion in the event&apos;s history</strong>. She repeated the
                    feat in <strong>2020</strong>, one of only a handful of champions to defend the U.S.
                    title in back-to-back years at that age.
                  </p>
                  <p>
                    Her signature element is the <strong>triple Axel</strong>, one of figure
                    skating&apos;s most demanding jumps and one that only a small number of women in the
                    world can execute reliably in competition. Her consistent and technically clean triple
                    Axel has been a cornerstone of her competitive programs throughout her career.
                  </p>
                </div>
              </section>

              {/* Beijing Omission & Rebuild */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">
                  The Beijing Omission &amp; The Rebuild
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    In one of the more controversial selection decisions in recent U.S. figure skating
                    history, Liu was{' '}
                    <strong>left off the Team USA roster for the 2022 Beijing Winter Olympics</strong>
                    {' '}following the U.S. Championships selection event. The decision drew significant
                    public debate, given her record as a two-time national champion and her trajectory as
                    one of the sport&apos;s brightest young performers.
                  </p>
                  <p>
                    What followed was a quiet, disciplined rebuild. Liu overhauled her technical program,
                    deepened her artistic presentation, and returned to competition with a more complete
                    version of herself as a skater. She later described the Beijing omission as the
                    catalyst for the growth that made her an Olympic champion.
                  </p>
                  <p>
                    &quot;Not making Beijing was the most painful thing that ever happened to me
                    athletically,&quot; she said after her gold medal. &quot;And it was the best thing
                    that ever happened to me. I came back a different skater.&quot;
                  </p>
                </div>

                {/* Road to Gold callout */}
                <div className="not-prose mt-6 bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">
                    Road to Gold: Turning Points
                  </h3>
                  <div className="space-y-3">
                    {roadToGold.map((c) => (
                      <div key={c.label} className="flex gap-3 text-sm">
                        <span className="text-blue-600 font-bold shrink-0">→</span>
                        <div>
                          <span className="font-semibold text-gray-900">{c.label}: </span>
                          <span className="text-gray-600">{c.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Why She Matters */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">
                  Why Alysa Liu Matters for American Figure Skating
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Liu&apos;s gold medal is not just a personal achievement. It represents a fundamental
                    shift in the global landscape of women&apos;s figure skating. The sport&apos;s center
                    of gravity had moved decisively to Asia, with Japan, South Korea, and China collecting
                    the last five Olympic gold medals in the women&apos;s event. American programs had
                    quietly accepted a reduced role on the podium.
                  </p>
                  <p>
                    At <strong>20 years old</strong>, Liu has multiple Olympic cycles ahead of her.
                    U.S. Figure Skating president Ramsey Baker described her gold as &quot;a
                    transformational moment for the sport in this country&quot; and validation of the
                    federation&apos;s investment in elite athlete development programs launched after the
                    2022 Beijing cycle.
                  </p>
                  <p>
                    The women&apos;s figure skating final at Milano Cortina 2026 drew what NBC Sports
                    estimated to be the largest American television audience of the Games, over{' '}
                    <strong>22 million viewers</strong> across linear and streaming platforms.
                  </p>
                  <p>
                    &quot;I want this to be the beginning of something,&quot; Liu said. &quot;Not just
                    for me, but for every little girl who puts on skates in America and dreams about this
                    moment.&quot;
                  </p>
                </div>
              </section>

              {/* Celebrity Support */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">
                  Celebrity Support &amp; Mainstream Crossover
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    In the days before competition, Liu received what may be the most unconventional
                    pre-Olympic send-offs in figure skating history. <strong>Madonna</strong> posted on
                    social media calling Liu &quot;a true artist on ice,&quot; while{' '}
                    <strong>Taylor Swift</strong> posted a story wishing her &quot;all the magic&quot;
                    before the short program.
                  </p>
                  <p>
                    The dual celebrity endorsements ignited the internet. Search interest in Liu spiked
                    by over <strong>800 percent</strong> in the week leading up to competition, and her
                    social media following doubled. The moment transformed her from a known commodity in
                    figure skating circles into a genuine mainstream sports celebrity heading into the
                    most-watched event of the Games.
                  </p>
                </div>
              </section>

            </article>

            {/* ── SIDEBAR ───────────────────────────────────────── */}
            <aside className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">

                {/* Infobox */}
                <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div style={{ background: 'linear-gradient(135deg, #0f172a, #1e3a5f, #b45309)', padding: '0' }}>
                    <div className="relative w-full h-56">
                      <Image
                        src={HERO_IMAGE}
                        alt="Alysa Liu at the 2026 Winter Olympics"
                        fill
                        className="object-cover object-top"
                        sizes="300px"
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.90) 0%, transparent 50%)' }} />
                      <div style={{ position: 'absolute', bottom: '10px', left: '14px', right: '14px' }}>
                        <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', margin: 0 }}>
                          Alysa Liu
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.7rem', margin: '2px 0 0' }}>
                          Olympic Gold Medalist · Milano Cortina 2026
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-100 text-sm">
                    {infoboxRows.map((row) => (
                      <div key={row.label} className="flex px-4 py-2.5 gap-2">
                        <span className="text-gray-500 w-24 shrink-0 text-xs">{row.label}</span>
                        <span className="font-medium text-gray-800 text-xs">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gold medal callout */}
                <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">
                    🥇 Olympic Champion
                  </h3>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                    Alysa Liu won gold at the <strong>2026 Winter Olympics</strong> in Milano Cortina
                    with a score of <strong>233.17 points</strong>, ending a 20-year American medal
                    drought in women&apos;s singles figure skating.
                  </p>
                  <Link
                    href="/winter-olympics"
                    className="block text-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-xs py-2.5 px-4 rounded-lg transition-colors"
                  >
                    Full Olympics Coverage
                  </Link>
                </div>

                {/* Career Timeline */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">
                    Career Timeline
                  </h3>
                  <div className="space-y-3">
                    {timeline.map((t) => (
                      <div key={t.year + t.event.slice(0, 12)} className="flex gap-3 text-xs">
                        <span className="text-blue-700 font-bold w-10 shrink-0">{t.year}</span>
                        <span className="text-gray-600 leading-relaxed">{t.event}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Coverage */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">
                    Related Coverage
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="/winter-olympics" className="text-blue-600 hover:underline">Milano Cortina 2026 Hub</Link></li>
                    <li><Link href="/winter-olympics/usa" className="text-blue-600 hover:underline">Team USA Medal Results</Link></li>
                    <li><Link href="/winter-olympics/usa/ilia-malinin" className="text-blue-600 hover:underline">Ilia Malinin Profile</Link></li>
                    <li><Link href="/winter-olympics/usa/elana-meyers-taylor-bobsled-gold" className="text-blue-600 hover:underline">Elana Meyers Taylor Gold</Link></li>
                    <li><Link href="/winter-olympics/usa/hannah-bilka" className="text-blue-600 hover:underline">Hannah Bilka - Hockey Gold</Link></li>
                    <li><Link href="/winter-olympics/mikaela-shiffrin" className="text-blue-600 hover:underline">Mikaela Shiffrin</Link></li>
                  </ul>
                </div>

                {/* Article meta */}
                <div className="text-xs text-gray-400 space-y-1 px-1">
                  <p>Published: February 19, 2026</p>
                  <p>Updated: February 20, 2026</p>
                  <p>Author: ObjectWire Olympic Bureau</p>
                  <p>Category: Winter Olympics · Figure Skating</p>
                </div>

              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlysaArticle;
