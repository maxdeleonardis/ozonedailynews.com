import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import { SEOWrapper } from '@/components/SEOWrapper';

const SLUG = '/influencer';

export const metadata: Metadata = {
  title: 'Influencer Hub â€” Profiles, News & Culture | ObjectWire',
  description:
    'ObjectWire\'s Influencer Hub: in-depth Wikipedia-style profiles, breaking news, and cultural coverage of the biggest names in content creation â€” fitness, YouTube, golf, and beyond.',
  keywords: [
    'influencer profiles',
    'influencer news 2026',
    'Logan Paul',
    'Tren Twins',
    'Bryson DeChambeau',
    'Iman Gadzhi',
    'MrBeast',
    'Diamond Gym',
    'fitness influencers',
    'content creators 2026',
    'influencer hub',
    'ObjectWire influencer',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/influencer',
  },
  openGraph: {
    title: 'Influencer Hub â€” Profiles, News & Culture | ObjectWire',
    description:
      'In-depth profiles and breaking news covering the biggest influencers across fitness, YouTube, golf, and online culture. Updated 2026.',
    type: 'website',
    url: 'https://www.objectwire.org/influencer',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Influencer Hub | ObjectWire',
    description:
      'Profiles, news, and cultural coverage of the biggest names in content creation â€” ObjectWire Influencer Hub.',
  },
};

export default function InfluencerHubPage() {
  return (
    <SEOWrapper slug={SLUG}>
      <NewsArticleSchema
        title="Influencer Hub â€” Profiles, News & Culture"
        description="ObjectWire's Influencer Hub: in-depth profiles and breaking news covering the biggest names in content creation, fitness, YouTube, and online culture."
        author="ObjectWire Editorial"
        publishedTime="2026-02-20T00:00:00Z"
        modifiedTime="2026-02-20T00:00:00Z"
        articleUrl={`https://www.objectwire.org${SLUG}`}
        section="Influencer"
        keywords={['influencer', 'content creator', 'Logan Paul', 'Tren Twins', 'MrBeast', 'Bryson DeChambeau']}
      />

      <div className="min-h-screen bg-[#faf9f6]">

        {/* Breadcrumb */}
        <div className="border-b border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <Breadcrumb
              items={[
                { name: 'Home', item: '/' },
                { name: 'Influencer', item: '/influencer' },
              ]}
            />
          </div>
        </div>

        {/* Newspaper-style masthead */}
        <header className="border-b-4 border-gray-900 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="text-center mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 border border-gray-300 px-3 py-1 rounded-full">
                ObjectWire Â· Influencer
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 text-center tracking-tight leading-none mb-4">
              Influencer Hub
            </h1>
            <p className="text-center text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              In-depth profiles, breaking news, and cultural coverage of the biggest names in content creation â€” fitness, YouTube, golf, and beyond.
            </p>
            <p className="text-center text-xs text-gray-400 mt-3">ObjectWire Editorial Â· Updated February 2026</p>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Profiles Published', value: '8+' },
              { label: 'Categories Covered', value: 'Fitness, Golf, YouTube' },
              { label: 'Latest Update', value: 'Feb 20, 2026' },
              { label: 'Coverage Style', value: 'Wikipedia / OAT' },
            ].map((s) => (
              <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-5 text-center shadow-sm">
                <p className="text-2xl font-black text-gray-900 mb-1">{s.value}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Featured Profiles */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-gray-900 flex items-center gap-2">
              <span>â­</span> Featured Profiles
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { href: '/influencer/tren-twins', emoji: 'ðŸ’ª', title: 'Tren Twins â€” Christian & Michael Gaiera', desc: 'Michigan-born identical twins who built a fitness empire on raw authenticity, massive physiques, and the kind of manic gym-floor energy the internet couldn\'t look away from. YoungLA athletes.', badge: 'Profile' },
                { href: '/influencer/bryson-dechambeau', emoji: 'â›³', title: 'Bryson DeChambeau â€” The Mad Scientist', desc: '2Ã— US Open champion, LIV Golf star, and the most analytically-driven golfer alive. Physics degree, 40 lbs of muscle, 320+ yard drives, and a YouTube channel to document all of it.', badge: 'Profile' },
                { href: '/influencer/iman-gadzhi', emoji: 'ðŸ’¼', title: 'Iman Gadzhi â€” Digital Marketing Entrepreneur', desc: 'From high school dropout to multi-millionaire. The Russian-British entrepreneur behind IAG Media and Educate â€” one of the most referenced names in the online business world.', badge: 'Profile' },
                { href: '/influencer/diamond-gym', emoji: 'ðŸ‹ï¸', title: 'Diamond Gym â€” Maplewood, NJ', desc: 'The private strength gym in New Jersey that became a destination for elite fitness influencers. Logan Paul, the Tren Twins, and a wave of serious athletes have all walked through its doors.', badge: 'Profile' },
              ].map((c) => (
                <Link key={c.href} href={c.href} className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow group">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl shrink-0">{c.emoji}</span>
                    <div>
                      <span className="inline-block text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 px-2 py-0.5 rounded mb-2">{c.badge}</span>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 mb-1">{c.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Latest News */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-gray-900 flex items-center gap-2">
              <span>ðŸ—žï¸</span> Latest News
            </h2>
            <div className="space-y-4">

              <Link href="/influencer/diamond-gym/prime" className="block bg-white border-2 border-red-400 rounded-xl p-5 hover:shadow-md transition-shadow group">
                <div className="flex items-start gap-4">
                  <span className="text-3xl shrink-0">ðŸ¥¤</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-black uppercase tracking-wider bg-red-600 text-white px-2 py-0.5 rounded animate-pulse">Breaking</span>
                      <span className="text-xs text-gray-400">Feb 20, 2026 Â· Fitness Â· Business</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-700 mb-1">PRIME x Diamond Gym: Logan Paul&apos;s Brand Becomes Official Hydration Sponsor of &ldquo;The World&apos;s Most Dangerous Gym&rdquo;</h3>
                    <p className="text-sm text-gray-500">A Special Edition TTD Prime bottle, Prime Protein Shakes, and a strategic pivot toward hardcore bodybuilding credibility.</p>
                  </div>
                </div>
              </Link>

              <Link href="/influencer/news/logan-paul-sells-pokemon-card-16-million" className="block bg-white border-2 border-purple-300 rounded-xl p-5 hover:shadow-md transition-shadow group">
                <div className="flex items-start gap-4">
                  <span className="text-3xl shrink-0">ðŸƒ</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-black uppercase tracking-wider bg-purple-600 text-white px-2 py-0.5 rounded">Historic</span>
                      <span className="text-xs text-gray-400">Feb 18, 2026 Â· Collectibles</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 mb-1">Logan Paul Sells 1/1 Pikachu Illustrator for $16 Million â€” Record Auction</h3>
                    <p className="text-sm text-gray-500">The world&apos;s rarest PokÃ©mon card changes hands for $16M â€” nearly tripling the $5.275M Paul paid in 2022.</p>
                  </div>
                </div>
              </Link>

              <Link href="/influencer/mrbeast-launches-beast-games-season-2-casting" className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow group">
                <div className="flex items-start gap-4">
                  <span className="text-3xl shrink-0">ðŸŽ®</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 px-2 py-0.5 rounded">New</span>
                      <span className="text-xs text-gray-400">Feb 2026 Â· YouTube</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 mb-1">MrBeast Launches Beast Games Season 2 â€” Casting Open</h3>
                    <p className="text-sm text-gray-500">The most-subscribed YouTuber in history opens casting for the second season of Beast Games.</p>
                  </div>
                </div>
              </Link>

              <Link href="/influencer/steve-will-do-it-kicked-of-logan-paul-s-podcast-making-an-official-return-to-youtube" className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow group">
                <div className="flex items-start gap-4">
                  <span className="text-3xl shrink-0">ðŸŽ™ï¸</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 px-2 py-0.5 rounded">News</span>
                      <span className="text-xs text-gray-400">Feb 2026 Â· Podcast</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 mb-1">SteveWillDoIt Removed From Impaulsive â€” Returns to YouTube</h3>
                    <p className="text-sm text-gray-500">The Impaulsive co-host is out of Logan Paul&apos;s podcast and making an official return to solo content.</p>
                  </div>
                </div>
              </Link>

            </div>
          </section>

          {/* Fitness & Gym Culture */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-gray-900 flex items-center gap-2">
              <span>ðŸ‹ï¸</span> Fitness &amp; Gym Culture
            </h2>
            <p className="text-gray-600 mb-5 leading-relaxed">
              From viral bodybuilders to elite-level athletes who&apos;ve turned the gym floor into a content studio â€” ObjectWire covers the intersection of fitness, performance, and online culture.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { href: '/influencer/tren-twins', emoji: 'ðŸ’ª', title: 'Tren Twins', desc: 'Christian & Michael Gaiera â€” YoungLA athletes, viral fitness duo, Michigan-born bodybuilders.' },
                { href: '/influencer/diamond-gym', emoji: 'ðŸ‹ï¸', title: 'Diamond Gym, Maplewood NJ', desc: "The notorious 'World's Most Dangerous Gym' â€” destination for the biggest names in fitness content." },
                { href: '/clothing/young-la', emoji: 'ðŸ‘•', title: 'YoungLA', desc: 'The fitness apparel brand powering the Tren Twins and a generation of serious gym athletes.' },
                { href: '/influencer/diamond-gym/prime', emoji: 'ðŸ¥¤', title: 'PRIME x Diamond Gym', desc: "Logan Paul's PRIME Hydration becomes the official sponsor of Diamond Gym. Special Edition TTD bottle drops." },
              ].map((c) => (
                <Link key={c.href} href={c.href} className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl shrink-0">{c.emoji}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 group-hover:text-blue-700 mb-1">{c.title}</h3>
                      <p className="text-sm text-gray-500">{c.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* All Profiles Grid */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-gray-900 flex items-center gap-2">
              <span>ðŸ§‘â€ðŸ’»</span> All Profiles
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: '/influencer/tren-twins', emoji: 'ðŸ’ª', label: 'Tren Twins', sub: 'Christian & Michael Gaiera' },
                { href: '/influencer/bryson-dechambeau', emoji: 'â›³', label: 'Bryson DeChambeau', sub: '2Ã— US Open Champion' },
                { href: '/influencer/iman-gadzhi', emoji: 'ðŸ’¼', label: 'Iman Gadzhi', sub: 'IAG Media Â· Educate' },
                { href: '/influencer/diamond-gym', emoji: 'ðŸ‹ï¸', label: 'Diamond Gym', sub: 'Maplewood, NJ' },
                { href: '/influencer/nick-shirley', emoji: 'ðŸ“±', label: 'Nick Shirley', sub: 'Content Creator' },
                { href: '/influencer/serge-gatari', emoji: 'ðŸ“ˆ', label: 'Serge Gatari', sub: 'Entrepreneur' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow group">
                  <div className="text-3xl mb-2">{item.emoji}</div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-700 text-sm mb-0.5">{item.label}</h3>
                  <p className="text-xs text-gray-400">{item.sub}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Partnerships Table */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-gray-900 flex items-center gap-2">
              <span>ðŸ¤</span> Notable Partnerships &amp; Crossovers
            </h2>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="px-4 py-3 text-left font-semibold">Influencer / Entity</th>
                      <th className="px-4 py-3 text-left font-semibold">Brand / Partner</th>
                      <th className="px-4 py-3 text-left font-semibold">Deal / Context</th>
                      <th className="px-4 py-3 text-left font-semibold">Coverage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { entity: 'Tren Twins', brand: 'YoungLA', deal: 'Flagship brand athletes â€” fitness apparel', href: '/influencer/tren-twins' },
                      { entity: 'Logan Paul', brand: 'PRIME Hydration', deal: 'Co-founder with KSI â€” $1.2B+ in revenue', href: '/youtube/logan-paul' },
                      { entity: 'Diamond Gym Ã— PRIME', brand: 'PRIME / TTD Athletics', deal: 'Official hydration sponsor + Special Edition TTD bottle', href: '/influencer/diamond-gym/prime' },
                      { entity: 'Bryson DeChambeau', brand: 'LIV Golf', deal: 'Signed 2022 â€” most high-profile PGA Tour defection', href: '/influencer/bryson-dechambeau' },
                    ].map((row) => (
                      <tr key={row.entity} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-bold text-gray-900">{row.entity}</td>
                        <td className="px-4 py-3 text-gray-600">{row.brand}</td>
                        <td className="px-4 py-3 text-gray-600">{row.deal}</td>
                        <td className="px-4 py-3"><Link href={row.href} className="text-blue-600 hover:underline font-semibold">â†’ Read</Link></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Explore More */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-gray-900 flex items-center gap-2">
              <span>ðŸ”—</span> Explore ObjectWire
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { href: '/youtube', emoji: 'ðŸ“º', label: 'YouTube Hub', sub: 'Creators & Channels' },
                { href: '/news', emoji: 'ðŸ“°', label: 'Latest News', sub: 'Breaking stories' },
                { href: '/clothing/young-la', emoji: 'ðŸ‘•', label: 'YoungLA', sub: 'Fitness Apparel' },
                { href: '/entertainment', emoji: 'ðŸŽ¬', label: 'Entertainment', sub: 'Culture & Media' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow group">
                  <div className="text-3xl mb-2">{item.emoji}</div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-700 text-sm mb-0.5">{item.label}</h3>
                  <p className="text-xs text-gray-400">{item.sub}</p>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </div>
    </SEOWrapper>
  );
}
