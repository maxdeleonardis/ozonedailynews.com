import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { Breadcrumb } from '@/components/Breadcrumb';
import { SEOWrapper } from '@/components/SEOWrapper';

const SLUG = '/influencer/news/logan-paul-sells-pokemon-card-16-million';

export const metadata: Metadata = {
  title: 'Logan Paul Sells 1/1 Pikachu Illustrator for $16 Million — Record Auction | ObjectWire',
  description:
    'Logan Paul has sold his ultra-rare 1/1 Pikachu Illustrator PSA 9 Pokémon card at auction for $16 million, setting a new world record. Full story, card history, and what it means for the collectibles market.',
  keywords: [
    'Logan Paul Pokemon card',
    'Pikachu Illustrator',
    'Logan Paul sells Pokemon card',
    '$16 million Pokemon card',
    'most expensive Pokemon card',
    'Pikachu Illustrator PSA 9',
    'Logan Paul auction',
    'Pokemon card record',
    '1/1 Pikachu',
    'Logan Paul collectibles',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/influencer/news/logan-paul-sells-pokemon-card-16-million',
  },
  openGraph: {
    title: 'Logan Paul Sells 1/1 Pikachu Illustrator for $16 Million — Record Auction',
    description:
      'Logan Paul sells the world\'s rarest Pokémon card for $16 million at auction — nearly tripling the $5.275M he paid in 2022. Full breakdown of the iconic Pikachu Illustrator sale.',
    type: 'article',
    url: 'https://www.objectwire.org/influencer/news/logan-paul-sells-pokemon-card-16-million',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    section: 'Influencer',
    tags: ['Logan Paul', 'Pokemon', 'Pikachu Illustrator', 'Auction', 'Collectibles', 'Record'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logan Paul Sells Pikachu Illustrator (1/1) for $16M — World Record',
    description:
      'The most expensive Pokémon card ever sold. Logan Paul flips his $5.275M Pikachu Illustrator for $16 million at auction.',
  },
};

export default function LoganPaulPokemonCardPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Logan Paul Sells 1/1 Pikachu Illustrator for $16 Million — Record Auction"
        description="Logan Paul sells the world's rarest Pokémon card for $16 million, setting a new world record for the most expensive Pokémon card ever sold."
        author="ObjectWire Editorial"
        publishedTime="2026-02-18T10:00:00Z"
        modifiedTime="2026-02-18T10:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Influencer"
        keywords={['Logan Paul', 'Pikachu Illustrator', 'Pokemon card', '$16 million', 'world record auction']}
      />

      <div className="min-h-screen bg-[#faf9f6]">

        {/* Breadcrumb */}
        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <Breadcrumb
              items={[
                { name: 'Home', item: '/' },
                { name: 'Influencer', item: '/influencer' },
                { name: 'News', item: '/influencer' },
                { name: 'Logan Paul — $16M Pokémon Card', item: SLUG },
              ]}
            />
          </div>
        </div>

        {/* Hero */}
        <header style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 50%, #eab308 100%)' }}>
          <div className="max-w-5xl mx-auto px-4 py-14">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Thumbnail */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-xl overflow-hidden border-4 shrink-0" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
                <Image
                  src="/youtube/logan-paul.PNG"
                  alt="Logan Paul"
                  fill
                  className="object-cover object-top"
                  sizes="144px"
                  priority
                />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.7rem', fontWeight: 800, padding: '3px 12px', borderRadius: 999, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    BREAKING
                  </span>
                  <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '0.7rem', fontWeight: 600, padding: '3px 12px', borderRadius: 999, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    POKÉMON · COLLECTIBLES
                  </span>
                  <span style={{ background: '#eab308', color: '#1a1a1a', fontSize: '0.7rem', fontWeight: 800, padding: '3px 12px', borderRadius: 999, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    WORLD RECORD
                  </span>
                </div>

                <h1 style={{ color: '#fff', fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '0.75rem' }}>
                  Logan Paul Sells 1/1 Pikachu Illustrator for $16 Million
                  <span style={{ display: 'block', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', fontWeight: 400, color: 'rgba(255,255,255,0.8)', marginTop: '0.5rem' }}>
                    Record-breaking auction sets new high for the most expensive Pokémon card ever sold
                  </span>
                </h1>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', marginBottom: '1.2rem' }}>
                  <span>February 18, 2026</span>
                  <span>·</span>
                  <span>ObjectWire Editorial</span>
                  <span>·</span>
                  <span>Influencer · Collectibles</span>
                </div>

                {/* Key stat pill */}
                <div style={{ display: 'inline-flex', background: 'rgba(234,179,8,0.2)', border: '1px solid rgba(234,179,8,0.4)', borderRadius: '12px', padding: '10px 20px', gap: '24px' }}>
                  <div>
                    <p style={{ color: '#fde047', fontWeight: 700, fontSize: '1.4rem', margin: 0 }}>$16M</p>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem', margin: 0 }}>Sale Price</p>
                  </div>
                  <div>
                    <p style={{ color: '#86efac', fontWeight: 700, fontSize: '1.4rem', margin: 0 }}>~3×</p>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem', margin: 0 }}>Return on $5.275M</p>
                  </div>
                  <div>
                    <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.4rem', margin: 0 }}>1/1</p>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem', margin: 0 }}>One of One</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Layout */}
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* ═══ ARTICLE BODY ═══ */}
            <article className="lg:col-span-2 space-y-10">

              {/* Lead */}
              <section>
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl font-semibold text-gray-800 leading-relaxed border-l-4 border-yellow-400 pl-5 py-1 bg-yellow-50 rounded-r-lg">
                    Logan Paul has sold his iconic <strong>1/1 Pikachu Illustrator PSA 9</strong> Pokémon card
                    at auction for <strong>$16 million</strong> — the highest price ever paid for a Pokémon
                    card and one of the largest single-item collectibles sales in history.
                  </p>
                  <p>
                    The sale caps a remarkable investment journey for the YouTube star, entrepreneur,
                    and WWE performer. Paul originally purchased the card in 2022 for $5.275 million,
                    itself a world record at the time. Over three years, the card&apos;s value nearly tripled,
                    generating a profit of approximately $10.7 million on a single collectible.
                  </p>
                </div>
              </section>

              {/* YouTube Short Embed */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  Watch: Logan Paul on the $16M Sale
                </h2>
                <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 bg-black" style={{ aspectRatio: '9/16', maxWidth: '360px' }}>
                  <iframe
                    src="https://www.youtube.com/embed/DOAcv9Cqssw"
                    title="Logan Paul Pikachu Illustrator $16M Sale"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    style={{ border: 'none', display: 'block' }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Source:{' '}
                  <a href="https://youtube.com/shorts/DOAcv9Cqssw?si=Sq0iDW_3H2NhResv" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    youtube.com/shorts/DOAcv9Cqssw
                  </a>
                </p>
              </section>

              {/* The Card */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  What Is the Pikachu Illustrator?
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    The <strong>Pikachu Illustrator</strong> is widely considered the rarest and most
                    valuable Pokémon card in existence. Originally distributed in 1998 as a prize to
                    winners of an illustration contest held in Japan by CoroCoro Comics magazine,
                    only <strong>39 copies</strong> were ever produced — with just a handful graded
                    at a high level by PSA.
                  </p>
                  <p>
                    The card features unique artwork depicting Pikachu drawing other Pokémon, and
                    bears the text &quot;Illustrator&quot; in place of the standard &quot;Trainer&quot;
                    designation. PSA 9 (Mint) specimens are extraordinarily rare, making Logan Paul&apos;s
                    copy one of the finest known examples.
                  </p>
                  <p>
                    Unlike standard Pokémon cards released for competitive play, the Pikachu Illustrator
                    was never sold commercially — its exclusivity derives entirely from its origins as
                    a contest prize, frozen in time from a 1998 Japan-exclusive publication.
                  </p>
                </div>

                <div className="mt-5 bg-indigo-50 border border-indigo-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Card Profile</h3>
                  <div className="grid sm:grid-cols-2 gap-y-2 gap-x-4 text-sm">
                    {[
                      { key: 'Card Name', val: 'Pikachu Illustrator' },
                      { key: 'Year', val: '1998' },
                      { key: 'Origin', val: 'CoroCoro Comics Contest (Japan)' },
                      { key: 'Total Produced', val: '39 copies' },
                      { key: 'Logan\'s Grade', val: 'PSA 9 (Mint)' },
                      { key: 'Unique Status', val: '1 of 1 at PSA 9 grade (effectively)' },
                      { key: 'Purchase (2022)', val: '$5,275,000' },
                      { key: 'Sale (2025)', val: '$16,000,000' },
                    ].map((r) => (
                      <div key={r.key} className="flex gap-2">
                        <span className="text-gray-500 shrink-0 w-36 text-xs">{r.key}:</span>
                        <span className="font-semibold text-gray-900 text-xs">{r.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Logan at WrestleMania */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  The WrestleMania Moment
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    Paul famously wore the Pikachu Illustrator card around his neck inside a custom
                    case at <strong>WrestleMania 38</strong> in 2022, days after acquiring it.
                    The stunt generated enormous media coverage, bringing mainstream awareness to
                    both his Pokémon collection and the broader collectibles market.
                  </p>
                  <p>
                    The moment crystallized Paul&apos;s unique approach to personal branding: the
                    intersection of internet culture, elite athleticism, and high-value collecting.
                    For many, the WrestleMania appearance was their first introduction to the concept
                    of a single Pokémon card being worth millions of dollars.
                  </p>
                </div>
              </section>

              {/* Market Impact */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  Market Impact &amp; Collectibles Context
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p>
                    The $16 million sale cements the Pikachu Illustrator as a blue-chip asset in the
                    collectibles world, comparable in status to rare sports cards, fine art, and
                    vintage watches. Industry analysts note that Logan Paul&apos;s high-profile buying
                    and selling of the card added legitimacy to Pokémon cards as serious investments —
                    a perception shift that has had ripple effects across the entire graded card market.
                  </p>
                  <p>
                    The identity of the buyer has not been publicly disclosed. Auction insiders
                    describe the level of interest as &quot;extraordinary,&quot; with competitive bidding
                    from collectors across North America, Europe, and Asia.
                  </p>
                </div>

                <div className="mt-4 grid sm:grid-cols-3 gap-3">
                  {[
                    { label: 'Purchase Year', val: '2022', sub: '$5.275M paid' },
                    { label: 'Sale Year', val: '2025', sub: '$16M received' },
                    { label: 'Profit', val: '~$10.7M', sub: 'Gross gain' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm">
                      <p className="text-2xl font-black text-indigo-700">{s.val}</p>
                      <p className="text-xs font-semibold text-gray-700 mt-0.5">{s.label}</p>
                      <p className="text-xs text-gray-400">{s.sub}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Interlinks */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  Related Coverage
                </h2>
                <div className="space-y-3">
                  <Link href="/youtube/logan-paul" className="block">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                        <Image src="/youtube/logan-paul.PNG" alt="Logan Paul" fill className="object-cover object-top" sizes="48px" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">Logan Paul — Full Profile</p>
                        <p className="text-xs text-gray-500">Career overview, PRIME, WWE, Impaulsive, and more</p>
                        <p className="text-xs text-indigo-600 mt-0.5">objectwire.org/youtube/logan-paul →</p>
                      </div>
                    </div>
                  </Link>

                  <Link href="/influencer/steve-will-do-it-kicked-of-logan-paul-s-podcast-making-an-official-return-to-youtube" className="block">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                      <p className="font-bold text-gray-900 text-sm">SteveWillDoIt Removed from Impaulsive — Returns to YouTube</p>
                      <p className="text-xs text-gray-500 mt-0.5">Inside the shakeup at Logan Paul&apos;s Impaulsive podcast</p>
                      <p className="text-xs text-indigo-600 mt-0.5">objectwire.org/influencer/steve-will-do-it-kicked-of... →</p>
                    </div>
                  </Link>
                </div>
              </section>

            </article>

            {/* ═══ SIDEBAR ═══ */}
            <aside className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">

                {/* Article Info */}
                <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #4338ca, #eab308)', padding: '12px 16px', textAlign: 'center' }}>
                    <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', margin: 0 }}>Logan Paul</h2>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.7rem', margin: '2px 0 0' }}>Pikachu Illustrator Sale</p>
                  </div>
                  <div className="divide-y divide-gray-100 text-sm">
                    {[
                      { label: 'Card', value: 'Pikachu Illustrator (1/1)' },
                      { label: 'Grade', value: 'PSA 9' },
                      { label: 'Buyer', value: 'Undisclosed' },
                      { label: 'Sale Price', value: '$16,000,000' },
                      { label: 'Purchase', value: '$5,275,000 (2022)' },
                      { label: 'Profit', value: '~$10.7M gross' },
                      { label: 'Record', value: 'Most expensive card ever' },
                    ].map((row) => (
                      <div key={row.label} className="flex px-4 py-2.5 gap-2">
                        <span className="text-gray-500 w-24 shrink-0 text-xs">{row.label}</span>
                        <span className="font-medium text-gray-800 text-xs">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Logan Paul Profile Link */}
                <Link href="/youtube/logan-paul" className="block">
                  <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-300 shrink-0">
                        <Image src="/youtube/logan-paul.PNG" alt="Logan Paul" fill className="object-cover object-top" sizes="40px" />
                      </div>
                      <div>
                        <p className="font-bold text-indigo-900 text-sm">Logan Paul</p>
                        <p className="text-xs text-indigo-600">@LoganPaul</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600">Full profile: YouTube, WWE, PRIME Hydration, Impaulsive, collectibles</p>
                    <p className="text-xs text-indigo-600 font-semibold mt-1">View Full Profile →</p>
                  </div>
                </Link>

                {/* More Influencer News */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">More Influencer News</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/influencer/steve-will-do-it-kicked-of-logan-paul-s-podcast-making-an-official-return-to-youtube" className="text-blue-600 hover:underline text-xs">
                        → SteveWillDoIt Kicked From Impaulsive
                      </Link>
                    </li>
                    <li><Link href="/influencer" className="text-blue-600 hover:underline text-xs">→ Influencer Hub</Link></li>
                    <li><Link href="/youtube" className="text-blue-600 hover:underline text-xs">→ YouTube Coverage</Link></li>
                    <li><Link href="/entertainment" className="text-blue-600 hover:underline text-xs">→ Entertainment News</Link></li>
                  </ul>
                </div>

                {/* Tags */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Logan Paul', 'Pokémon', 'Pikachu Illustrator', 'Auction', 'Collectibles', 'World Record', 'WWE', 'PRIME', 'Impaulsive'].map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Meta */}
                <div className="text-xs text-gray-400 space-y-1 px-1">
                  <p>Published: February 18, 2026</p>
                  <p>Author: ObjectWire Editorial</p>
                  <p>Category: Influencer · Collectibles</p>
                </div>

              </div>
            </aside>
          </div>
        </div>
      </div>
    </SEOWrapper>
  );
}
