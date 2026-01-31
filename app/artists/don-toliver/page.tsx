import type { Metadata } from 'next';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import {
  DynamicNewsArticle,
  CaseOverview,
  StatisticsBox,
  ProcessDiagram,
  ArticleQuote,
} from '@/components/DynamicNewsArticle';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Don Toliver - Artist Profile, Discography & Latest Music | ObjectWire',
  description: 'Complete guide to Don Toliver: biography, discography, collaborations with Travis Scott and Kanye West, and latest album OCTANE review.',
  keywords: [
    'Don Toliver',
    'Cactus Jack',
    'Travis Scott',
    'Kanye West',
    'OCTANE album',
    'Hip Hop',
    'R&B',
    'Houston rapper',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/artists/don-toliver',
  },
  openGraph: {
    type: 'profile',
    title: 'Don Toliver - Artist Profile',
    description: 'Houston\'s melodic trap pioneer: biography, discography, and latest releases.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Don Toliver - Artist Profile',
    description: 'Complete guide to Don Toliver\'s music, collaborations, and latest album OCTANE.',
  },
};

export default function DonToliverPage() {
  return (
    <>
      <NewsArticleSchema
        title="Don Toliver - Artist Profile"
        description="Comprehensive profile of Don Toliver, Houston rapper and Cactus Jack artist."
        author="ObjectWire Music Desk"
        authorUrl="https://objectwire.org/team"
        publishedTime="2026-01-30T16:00:00Z"
        modifiedTime="2026-01-30T16:00:00Z"
        articleUrl="https://objectwire.org/artists/don-toliver"
        section="Music"
        keywords={['Don Toliver', 'Hip Hop', 'Music', 'Artist Profile']}
      />

      <DynamicNewsArticle
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/artists', label: 'Artists' },
        ]}
        categories={[
          { label: 'ARTIST PROFILE', color: 'purple' },
          { label: 'HIP HOP', color: 'red' },
        ]}
        readTime="8 min read"
        title="Don Toliver"
        subtitle="Houston's Melodic Trap Pioneer | Cactus Jack Records"
        author={{
          name: 'ObjectWire Music Desk',
          department: 'Music & Entertainment',
          initials: 'OW',
        }}
        publishDate="January 30, 2026"
        updatedDate="January 30, 2026"
        heroImage={{
          src: '/images/artists/don-toliver-hero.jpg',
          alt: 'Don Toliver performing live',
          caption: 'Don Toliver has become one of hip-hop\'s most distinctive voices',
          credit: 'ObjectWire Music',
        }}
        relatedArticles={[
          {
            href: '/artists/don-toliver/octane-review-features',
            category: 'ALBUM REVIEW',
            categoryColor: 'text-purple-600',
            title: 'OCTANE Album Review - Features & Track Analysis',
          },
          {
            href: '/artists',
            category: 'ARTISTS',
            categoryColor: 'text-blue-600',
            title: 'All Artist Profiles',
          },
        ]}
        timeline={[
          { date: 'June 12, 1994', description: 'Born in Houston, Texas' },
          { date: '2017', description: 'Breakout with "Diva" and "I Gotta"' },
          { date: '2018', description: 'Signed to Cactus Jack Records', highlight: true },
          { date: '2019', description: 'Featured on Travis Scott\'s "HIGHEST IN THE ROOM"' },
          { date: '2020', description: 'Debut album "Heaven or Hell" released', highlight: true },
          { date: '2021', description: '"Life of a Don" sophomore album' },
          { date: '2023', description: '"Love Sick" third studio album' },
          { date: '2026', description: 'OCTANE album released', highlight: true },
        ]}
        documents={[
          {
            href: 'https://www.instagram.com/dontoliver/',
            label: 'Instagram @dontoliver',
            icon: '📱',
          },
          {
            href: 'https://open.spotify.com/artist/4Gso3d4CscCijv0lmajZWs',
            label: 'Spotify',
            icon: '🎵',
          },
          {
            href: 'https://music.apple.com/us/artist/don-toliver/1018012020',
            label: 'Apple Music',
            icon: '🎧',
          },
          {
            href: 'https://www.youtube.com/@DonToliver',
            label: 'YouTube',
            icon: '📺',
          },
        ]}
        sources={[
          {
            number: 1,
            url: 'https://www.billboard.com/',
            title: 'Billboard',
            description: 'Chart performance and music industry coverage',
          },
          {
            number: 2,
            url: 'https://pitchfork.com/',
            title: 'Pitchfork',
            description: 'Music criticism and artist profiles',
          },
          {
            number: 3,
            url: 'https://www.complex.com/',
            title: 'Complex',
            description: 'Hip-hop culture and artist interviews',
          },
        ]}
        showCorrections={true}
        showEditorialStandards={true}
      >
        {/* Artist Info Box */}
        <CaseOverview
          title="ARTIST INFO"
          color="purple"
          items={[
            { label: 'Real Name:', value: 'Caleb Zackery Toliver' },
            { label: 'Born:', value: 'June 12, 1994 (31 years old)' },
            { label: 'Origin:', value: 'Houston, Texas, United States' },
            { label: 'Label:', value: 'Cactus Jack Records / Atlantic Records' },
            { label: 'Genres:', value: 'Hip hop, R&B, Trap, Pop rap' },
            { label: 'Active:', value: '2017–present' },
          ]}
        />

        {/* Introduction */}
        <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none">
          <strong>Caleb Zackery "Don" Toliver</strong> is an American rapper, singer, and songwriter from Houston, Texas, who has emerged as one of the most distinctive voices in modern hip-hop. Known for his melodic flow, autotuned vocals, and genre-blending sound, Toliver rose to prominence after being featured on{' '}
          <strong>Travis Scott's</strong> 2019 hit "CAN'T SAY" from the album <em>ASTROWORLD</em>. He is currently signed to Scott's <strong>Cactus Jack Records</strong> and Atlantic Records.
        </p>

        <p>
          Toliver's music seamlessly blends elements of trap, R&B, and psychedelic hip-hop, creating a signature sound that has influenced the current wave of melodic rappers. His ability to craft infectious hooks and atmospheric production has made him a sought-after collaborator, working with artists like{' '}
          <strong>Kanye West</strong>, <strong>Travis Scott</strong>, <strong>Young Thug</strong>, and <strong>The Weeknd</strong>.
        </p>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg my-8 shadow-xl">
          <h3 className="text-3xl font-bold mb-4">🔥 LATEST RELEASE</h3>
          <h2 className="text-5xl font-black mb-2">OCTANE</h2>
          <p className="text-xl mb-4 opacity-90">Don Toliver's latest album featuring Ye, Travis Scott & Young Thug</p>
          <div className="flex gap-4 items-center">
            <div className="text-4xl font-black">8/10</div>
            <div>
              <div className="text-sm opacity-75">ObjectWire Score</div>
              <div className="text-xs opacity-60">Solid production, star-studded features</div>
            </div>
          </div>
          <Link 
            href="/artists/don-toliver/octane-review-features"
            className="inline-block mt-4 bg-white text-purple-600 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Read Full Album Review →
          </Link>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 border-b-4 border-purple-600 pb-2">
          Biography
        </h2>

        <h3 className="text-xl font-bold mt-6 mb-3 text-purple-600">Early Life & Career Beginnings</h3>

        <p>
          Born <strong>Caleb Zackery Toliver</strong> on June 12, 1994, in Houston, Texas, Don Toliver grew up immersed in the city's rich hip-hop culture. He began making music in his late teens, initially releasing tracks on SoundCloud under the name <strong>Don Toliver</strong>.
        </p>

        <p>
          His early work caught the attention of Houston's underground rap scene, leading to collaborations with local producers and artists. In 2017, Toliver released his debut mixtape <em>Donny Womack</em>, which showcased his unique melodic approach and laid the foundation for his signature sound.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3 text-purple-600">Breakthrough & Cactus Jack Era (2018-2020)</h3>

        <p>
          Toliver's big break came in 2018 when he signed to <strong>Travis Scott's Cactus Jack Records</strong>, a subsidiary of Epic Records. His appearance on Travis Scott's <em>ASTROWORLD</em> album, particularly on the track <strong>"CAN'T SAY"</strong>, introduced him to a global audience.
        </p>

        <ArticleQuote
          quote="I wanted to create something that felt like Houston but also pushed the sound forward. Travis believed in that vision."
          author="Don Toliver"
          title="On signing to Cactus Jack Records, 2019"
        />

        <p>
          In March 2020, Toliver released his debut studio album <strong>"Heaven or Hell"</strong>, which debuted at No. 7 on the Billboard 200. The album featured hit singles like{' '}
          <strong>"No Idea"</strong> and <strong>"After Party"</strong>, both of which went viral on TikTok and achieved platinum certification. The project solidified Toliver's status as one of hip-hop's rising stars.
        </p>

        <StatisticsBox
          title="STREAMING STATS"
          color="purple"
          stats={[
            { value: '40M+', label: 'Monthly Spotify Listeners' },
            { value: '5B+', label: 'Total Streams' },
            { value: '4', label: 'Studio Albums' },
            { value: '15+', label: 'Chart Entries' },
          ]}
        />

        <h3 className="text-xl font-bold mt-6 mb-3 text-purple-600">Continued Success (2021-Present)</h3>

        <p>
          Toliver's second album <strong>"Life of a Don"</strong> arrived in October 2021, debuting at No. 3 on the Billboard 200. The project featured collaborations with{' '}
          <strong>Travis Scott</strong>, <strong>Kali Uchis</strong>, <strong>Baby Keem</strong>, and <strong>HVN</strong>, showcasing Toliver's growing influence and versatility.
        </p>

        <p>
          In 2023, he released his third studio album <strong>"Love Sick"</strong>, which further experimented with R&B influences and featured artists like{' '}
          <strong>Future</strong>, <strong>WizKid</strong>, and <strong>Charlie Wilson</strong>. The album debuted at No. 4 on the Billboard 200 and spawned the hit single <strong>"Private Landing"</strong>.
        </p>

        <p>
          Most recently, in 2026, Toliver dropped <strong>"OCTANE"</strong>, his most ambitious project yet, featuring heavyweights like{' '}
          <Link href="/artists/don-toliver/octane-review-features" className="text-purple-600 hover:underline font-bold">
            Kanye West (Ye), Travis Scott, and Young Thug
          </Link>.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6 border-b-4 border-purple-600 pb-2">
          Discography
        </h2>

        <ProcessDiagram
          title="STUDIO ALBUMS"
          color="purple"
          steps={[
            {
              title: 'Heaven or Hell (2020)',
              description: 'Debut album featuring "No Idea" and "After Party". Peaked at #7 on Billboard 200. Certified Gold.',
            },
            {
              title: 'Life of a Don (2021)',
              description: 'Sophomore album with Travis Scott, Kali Uchis, Baby Keem. Peaked at #3 on Billboard 200.',
            },
            {
              title: 'Love Sick (2023)',
              description: 'Third album exploring R&B influences. Featured Future, WizKid, Charlie Wilson. Peaked at #4.',
            },
            {
              title: 'OCTANE (2026)',
              description: 'Latest album with star features: Ye, Travis Scott, Young Thug. ObjectWire Score: 8/10.',
            },
          ]}
        />

        <h3 className="text-xl font-bold mt-8 mb-4 text-purple-600">Notable Mixtapes & EPs</h3>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="border-2 border-purple-500 p-4 rounded-lg hover:bg-purple-50 transition-colors">
            <h4 className="font-bold text-lg">Donny Womack (2017)</h4>
            <p className="text-sm text-gray-600 mt-2">Debut mixtape that established his melodic trap sound</p>
          </div>

          <div className="border-2 border-purple-500 p-4 rounded-lg hover:bg-purple-50 transition-colors">
            <h4 className="font-bold text-lg">Playa Familia (2024)</h4>
            <p className="text-sm text-gray-600 mt-2">Collaborative project with Charlie Wilson exploring funk influences</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 border-b-4 border-purple-600 pb-2">
          Hit Singles & Chart Performance
        </h2>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold mb-4">🎵 Top Tracks</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-white rounded border-l-4 border-purple-600">
              <div>
                <h4 className="font-bold">"No Idea"</h4>
                <p className="text-sm text-gray-600">Heaven or Hell (2020)</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold">💿 2× Platinum</div>
                <div className="text-xs text-gray-500">Billboard Hot 100: #29</div>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 bg-white rounded border-l-4 border-pink-600">
              <div>
                <h4 className="font-bold">"After Party"</h4>
                <p className="text-sm text-gray-600">Heaven or Hell (2020)</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold">💿 Platinum</div>
                <div className="text-xs text-gray-500">TikTok Viral Hit</div>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 bg-white rounded border-l-4 border-purple-600">
              <div>
                <h4 className="font-bold">"What You Need"</h4>
                <p className="text-sm text-gray-600">Life of a Don (2021)</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold">💿 Gold</div>
                <div className="text-xs text-gray-500">Billboard Hot 100: #62</div>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 bg-white rounded border-l-4 border-pink-600">
              <div>
                <h4 className="font-bold">"Private Landing" (feat. Justin Bieber)</h4>
                <p className="text-sm text-gray-600">Love Sick (2023)</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold">💿 Platinum</div>
                <div className="text-xs text-gray-500">Billboard Hot 100: #18</div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 border-b-4 border-purple-600 pb-2">
          Notable Collaborations
        </h2>

        <p>
          Don Toliver's collaborative work has been a significant part of his success, working with some of the biggest names in music:
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-8">
          <div className="border-2 border-black p-5 bg-gradient-to-br from-yellow-50 to-orange-50">
            <h4 className="font-black text-lg mb-2">🔥 TRAVIS SCOTT</h4>
            <ul className="text-sm space-y-1">
              <li>• "CAN'T SAY" (ASTROWORLD)</li>
              <li>• "HIGHEST IN THE ROOM" Remix</li>
              <li>• "ESCAPE PLAN"</li>
              <li>• "MAFIA"</li>
              <li>• Multiple OCTANE features</li>
            </ul>
          </div>

          <div className="border-2 border-black p-5 bg-gradient-to-br from-purple-50 to-pink-50">
            <h4 className="font-black text-lg mb-2">🎤 KANYE WEST (YE)</h4>
            <ul className="text-sm space-y-1">
              <li>• "Moon" (DONDA)</li>
              <li>• "Heaven and Hell" (DONDA)</li>
              <li>• "Ok Ok Pt 2" (DONDA)</li>
              <li>• OCTANE features</li>
            </ul>
          </div>

          <div className="border-2 border-black p-5 bg-gradient-to-br from-green-50 to-blue-50">
            <h4 className="font-black text-lg mb-2">🐍 YOUNG THUG</h4>
            <ul className="text-sm space-y-1">
              <li>• "Ski" (So Much Fun)</li>
              <li>• "Real Love"</li>
              <li>• OCTANE collaborations</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4 text-purple-600">Other Major Features</h3>

        <ul className="grid md:grid-cols-2 gap-2 mb-8">
          <li className="flex items-center gap-2">
            <span className="text-purple-600">▶</span>
            <strong>Internet Money</strong> - "Lemonade" (2020)
          </li>
          <li className="flex items-center gap-2">
            <span className="text-purple-600">▶</span>
            <strong>Eminem</strong> - "Use This Gospel (Remix)" (2021)
          </li>
          <li className="flex items-center gap-2">
            <span className="text-purple-600">▶</span>
            <strong>Jack Harlow</strong> - "Nail Tech" Remix (2022)
          </li>
          <li className="flex items-center gap-2">
            <span className="text-purple-600">▶</span>
            <strong>Kali Uchis</strong> - "Drugs N Hella Melodies" (2021)
          </li>
          <li className="flex items-center gap-2">
            <span className="text-purple-600">▶</span>
            <strong>Future</strong> - "Way Bigger" (2023)
          </li>
          <li className="flex items-center gap-2">
            <span className="text-purple-600">▶</span>
            <strong>The Weeknd</strong> - "One Right Now" (2021)
          </li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6 border-b-4 border-purple-600 pb-2">
          Musical Style & Influence
        </h2>

        <p>
          Don Toliver's sound is characterized by its <strong>melodic trap</strong> foundation, heavily processed vocals with autotune, and atmospheric production. His music often features:
        </p>

        <ul className="list-disc pl-6 space-y-2 my-6">
          <li><strong>Autotuned Melodies</strong> — Extensive use of vocal effects creating a signature sound</li>
          <li><strong>Psychedelic Production</strong> — Spacey, reverb-heavy beats influenced by Houston's chopped and screwed tradition</li>
          <li><strong>Genre Blending</strong> — Seamless fusion of trap, R&B, pop, and alternative hip-hop</li>
          <li><strong>Hook-Driven Songwriting</strong> — Catchy, memorable choruses that dominate tracks</li>
          <li><strong>Emotional Range</strong> — Balancing party anthems with introspective, romantic material</li>
        </ul>

        <ArticleQuote
          quote="Don Toliver has one of the most unique voices in hip-hop right now. He's like Travis Scott's little brother, but with his own distinct flavor."
          author="Complex Magazine"
          title="Review of Life of a Don, 2021"
        />

        <h2 className="text-3xl font-bold mt-12 mb-6 border-b-4 border-purple-600 pb-2">
          Awards & Recognition
        </h2>

        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-yellow-600 p-6 my-6">
          <h3 className="text-xl font-bold mb-4">🏆 Accolades</h3>
          <ul className="space-y-2">
            <li><strong>2020</strong> — Billboard Music Awards: Top Streaming Songs Chart (Artist)</li>
            <li><strong>2021</strong> — Grammy Nomination: Best Melodic Rap Performance ("Moon" with Kanye West & Kid Cudi)</li>
            <li><strong>2021</strong> — XXL Freshman Class</li>
            <li><strong>2022</strong> — BET Hip Hop Awards: Best Collaboration ("Way Bigger" with Future)</li>
            <li><strong>2023</strong> — MTV Video Music Awards: Best Hip-Hop Video nomination</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 border-b-4 border-purple-600 pb-2">
          Latest Release: OCTANE
        </h2>

        <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 p-8 rounded-xl border-4 border-purple-600 my-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-4xl font-black mb-2">OCTANE</h3>
              <p className="text-lg text-gray-700">Don Toliver's fourth studio album</p>
              <p className="text-sm text-gray-600 mt-1">Released: January 2026</p>
            </div>
            <div className="text-center bg-white rounded-lg p-4 shadow-lg">
              <div className="text-5xl font-black text-purple-600">8</div>
              <div className="text-sm text-gray-600">/10</div>
              <div className="text-xs text-gray-500 mt-1">ObjectWire</div>
            </div>
          </div>

          <div className="bg-white/80 rounded-lg p-6 mb-4">
            <h4 className="font-bold mb-3 text-lg">Featured Artists:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-600 text-white px-4 py-2 rounded-full font-bold">Ye (Kanye West)</span>
              <span className="bg-orange-600 text-white px-4 py-2 rounded-full font-bold">Travis Scott</span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-full font-bold">Young Thug</span>
              <span className="bg-pink-600 text-white px-4 py-2 rounded-full">Future</span>
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full">Metro Boomin</span>
            </div>
          </div>

          <div className="bg-white/80 rounded-lg p-6">
            <h4 className="font-bold mb-2">Why it's solid:</h4>
            <ul className="space-y-2 text-sm">
              <li>✅ <strong>Star-studded features</strong> elevate every track</li>
              <li>✅ <strong>Production quality</strong> is top-tier throughout</li>
              <li>✅ <strong>Cohesive sound</strong> while experimenting with new styles</li>
              <li>✅ <strong>Replay value</strong> with infectious hooks and melodies</li>
              <li>⚠️ Some tracks feel like feature-heavy rather than Don's spotlight</li>
            </ul>
          </div>

          <Link 
            href="/artists/don-toliver/octane-review-features"
            className="block text-center mt-6 bg-purple-600 text-white font-black text-lg px-8 py-4 rounded-full hover:bg-purple-700 transition-all transform hover:scale-105"
          >
            📝 READ FULL OCTANE REVIEW & TRACK BREAKDOWN →
          </Link>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 border-b-4 border-purple-600 pb-2">
          Social Media & Streaming
        </h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="border-2 border-purple-500 rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h4 className="font-bold text-xl mb-4">🎵 Listen Now</h4>
            <div className="space-y-3">
              <a 
                href="https://open.spotify.com/artist/4Gso3d4CscCijv0lmajZWs" 
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-colors text-center"
              >
                Spotify →
              </a>
              <a 
                href="https://music.apple.com/us/artist/don-toliver/1018012020" 
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-3 px-4 rounded-lg hover:from-pink-600 hover:to-red-600 transition-colors text-center"
              >
                Apple Music →
              </a>
              <a 
                href="https://www.youtube.com/@DonToliver" 
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors text-center"
              >
                YouTube →
              </a>
            </div>
          </div>

          <div className="border-2 border-purple-500 rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h4 className="font-bold text-xl mb-4">📱 Follow</h4>
            <div className="space-y-3">
              <a 
                href="https://www.instagram.com/dontoliver/" 
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors text-center"
              >
                Instagram @dontoliver →
              </a>
              <a 
                href="https://twitter.com/dontoliverr" 
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-sky-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-sky-600 transition-colors text-center"
              >
                Twitter/X @dontoliverr →
              </a>
              <a 
                href="https://www.tiktok.com/@dontoliver" 
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-black text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors text-center"
              >
                TikTok @dontoliver →
              </a>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 border-b-4 border-purple-600 pb-2">
          Related Coverage
        </h2>

        <div className="grid md:grid-cols-1 gap-4 my-6">
          <Link href="/artists/don-toliver/octane-review-features" className="block border-4 border-purple-600 p-6 hover:bg-purple-50 transition-colors rounded-lg">
            <span className="text-xs font-bold text-purple-600">ALBUM REVIEW ★★★★☆</span>
            <h4 className="font-bold text-2xl mt-2">OCTANE: Track-by-Track Review & Features Analysis</h4>
            <p className="text-gray-600 mt-3">
              Deep dive into Don Toliver's latest project featuring Ye, Travis Scott, and Young Thug. Exploring production, features, and why it earned an 8/10.
            </p>
            <span className="text-purple-600 font-bold text-sm mt-4 inline-block">Read Full Review →</span>
          </Link>
        </div>

      </DynamicNewsArticle>
    </>
  );
}
