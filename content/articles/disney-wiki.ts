import type { Article } from '../../content/types';

const article: Article = {
  title: 'The Walt Disney Company | Entertainment Conglomerate | OzoneNews',
  slug: 'disney',
  category: 'Entertainment',
  status: 'published',
  published_at: '2026-02-19',

  excerpt: 'Comprehensive profile of The Walt Disney Company, the world\'s largest entertainment conglomerate. History, business segments, leadership, theme parks, streaming, and corporate developments.',
  tags: ['Disney', 'Entertainment', 'Streaming', 'Theme Parks', 'Marvel', 'Pixar', 'Star Wars', 'Bob Iger', 'Josh D\'Amaro'],
  topic_tag: 'Company Profile',
  category_color: '#6366f1',

  author_name: 'OzoneNews Editorial',
  author_role: 'Company Profiles & Analysis',
  author_slug: 'OzoneNews-editorial',

  content: [
    {
      id: 'html1',
      type: 'html',
      content: `
<div class="grid md:grid-cols-3 gap-8">
  <div class="md:col-span-2 prose prose-lg max-w-none">
    <p>
      <strong>The Walt Disney Company</strong>, commonly known as <strong>Disney</strong>, is an American multinational mass media and entertainment conglomerate headquartered in <strong>Burbank, California</strong>. Founded in 1923 by brothers <strong>Walt</strong> and <strong>Roy Disney</strong> as the Disney Brothers Cartoon Studio, the company has grown into the <strong>world's largest entertainment conglomerate</strong> by revenue, operating film studios, theme parks, television networks, streaming platforms, and consumer products divisions across six continents.
    </p>

    <!-- TOC -->
    <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 my-6 text-sm">
      <p class="font-bold mb-2">Contents</p>
      <ol class="list-decimal list-inside space-y-1 text-blue-600">
        <li><a href="#history">History</a></li>
        <li><a href="#leadership">Leadership &amp; CEO Succession</a></li>
        <li><a href="#segments">Business Segments</a></li>
        <li><a href="#parks">Parks &amp; Experiences</a></li>
        <li><a href="#streaming">Streaming</a></li>
        <li><a href="#gaming">Gaming &amp; Digital</a></li>
        <li><a href="#financials">Financials</a></li>
      </ol>
    </div>

    <h2 id="history" class="text-2xl font-bold mt-10 mb-4">History</h2>
    <h3 class="text-xl font-semibold mb-3">Founding &amp; Early Years (1923–1937)</h3>
    <p>Disney was founded on October 16, 1923 when Walt Disney and his brother Roy established the Disney Brothers Cartoon Studio. After losing the rights to Oswald the Lucky Rabbit, Walt created <strong>Mickey Mouse</strong>, who debuted in <em>Steamboat Willie</em> (1928) — one of the first synchronized sound cartoons.</p>

    <h3 class="text-xl font-semibold mb-3 mt-6">Golden Age (1937–1966)</h3>
    <p>The studio released <strong>Snow White and the Seven Dwarfs</strong> (1937), the first full-length cel-animated feature film, followed by classics including Fantasia, Bambi, Cinderella, and Sleeping Beauty. <strong>Disneyland</strong> opened in Anaheim, California in 1955.</p>

    <h3 class="text-xl font-semibold mb-3 mt-6">Post-Walt Era (1966–1984)</h3>
    <p>After Walt Disney's death in 1966, the company continued expanding: <strong>Walt Disney World</strong> opened in Orlando in 1971, and <strong>Tokyo Disneyland</strong> opened in 1983.</p>

    <h3 class="text-xl font-semibold mb-3 mt-6">Eisner Era &amp; Disney Renaissance (1984–2005)</h3>
    <p>Under CEO Michael Eisner, Disney experienced a creative renaissance with <em>The Little Mermaid</em>, <em>Beauty and the Beast</em>, <em>Aladdin</em>, and <em>The Lion King</em>. Disney acquired <strong>ABC</strong> and launched <strong>ESPN</strong> as a major sports property.</p>

    <h3 class="text-xl font-semibold mb-3 mt-6">Iger Era &amp; Acquisitions (2005–Present)</h3>
    <p>Under Bob Iger, Disney executed a series of transformative acquisitions:</p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Pixar</strong> — $7.4 billion (2006)</li>
      <li><strong>Marvel Entertainment</strong> — $4 billion (2009)</li>
      <li><strong>Lucasfilm</strong> — $4.06 billion (2012)</li>
      <li><strong>21st Century Fox</strong> — $71.3 billion (2019)</li>
    </ul>
    <p><strong>Disney+</strong> launched in November 2019. After a brief CEO tenure by Bob Chapek (2020–2022), Iger returned and plans to hand leadership to <strong>Josh D'Amaro</strong> in March 2026.</p>

    <h2 id="leadership" class="text-2xl font-bold mt-10 mb-4">Leadership &amp; CEO Succession</h2>
    <p><strong>Bob Iger</strong> served as CEO from 2005 to 2020, returned in late 2022, and announced <strong>Josh D'Amaro</strong> as his successor effective March 2026. D'Amaro, currently Chairman of Disney Parks, Experiences &amp; Products, joined Disney in 1998 and has led the parks division since 2020.</p>
    <p class="mt-3">D'Amaro's vision centers on <strong>digital transformation</strong>, including the $1.5 billion Epic Games partnership, gaming platform integration, and the potential to premiere films inside Fortnite.</p>

    <table class="w-full text-sm border border-gray-200 rounded mt-6">
      <thead class="bg-gray-100">
        <tr><th class="p-2 text-left">CEO</th><th class="p-2 text-left">Tenure</th></tr>
      </thead>
      <tbody>
        <tr class="border-t"><td class="p-2">Walt Disney</td><td class="p-2">1923–1966</td></tr>
        <tr class="border-t"><td class="p-2">Roy E. Disney / Card Walker</td><td class="p-2">1966–1984</td></tr>
        <tr class="border-t"><td class="p-2">Michael Eisner</td><td class="p-2">1984–2005</td></tr>
        <tr class="border-t"><td class="p-2">Bob Iger</td><td class="p-2">2005–2020, 2022–2026</td></tr>
        <tr class="border-t"><td class="p-2">Bob Chapek</td><td class="p-2">2020–2022</td></tr>
        <tr class="border-t"><td class="p-2 font-semibold">Josh D'Amaro</td><td class="p-2">March 2026–present</td></tr>
      </tbody>
    </table>

    <h2 id="segments" class="text-2xl font-bold mt-10 mb-4">Business Segments</h2>
    <h3 class="text-xl font-semibold mb-3">Disney Entertainment</h3>
    <p><strong>Studios:</strong> Walt Disney Pictures, Pixar, Marvel Studios, Lucasfilm, 20th Century Studios, Searchlight Pictures. <strong>Streaming:</strong> Disney+, Hulu, ESPN+, Star+. <strong>Television:</strong> ABC, Disney Channel, FX, National Geographic.</p>

    <h3 class="text-xl font-semibold mb-3 mt-6">Disney Experiences</h3>
    <p>Six resort destinations worldwide, Disney Cruise Line (5 ships, 3 incoming), and consumer products.</p>

    <h3 class="text-xl font-semibold mb-3 mt-6">ESPN</h3>
    <p>Standalone segment covering NFL, NBA, MLB, college sports, and a direct-to-consumer streaming service launched in 2025.</p>

    <h2 id="parks" class="text-2xl font-bold mt-10 mb-4">Parks &amp; Experiences</h2>
    <table class="w-full text-sm border border-gray-200 rounded">
      <thead class="bg-gray-100">
        <tr><th class="p-2 text-left">Resort</th><th class="p-2 text-left">Opened</th><th class="p-2 text-left">Location</th><th class="p-2 text-left">Parks</th></tr>
      </thead>
      <tbody>
        <tr class="border-t"><td class="p-2">Disneyland</td><td class="p-2">1955</td><td class="p-2">Anaheim, CA</td><td class="p-2">2</td></tr>
        <tr class="border-t"><td class="p-2">Walt Disney World</td><td class="p-2">1971</td><td class="p-2">Orlando, FL</td><td class="p-2">4</td></tr>
        <tr class="border-t"><td class="p-2">Tokyo Disney</td><td class="p-2">1983</td><td class="p-2">Tokyo, Japan</td><td class="p-2">2</td></tr>
        <tr class="border-t"><td class="p-2">Disneyland Paris</td><td class="p-2">1992</td><td class="p-2">Paris, France</td><td class="p-2">2</td></tr>
        <tr class="border-t"><td class="p-2">Hong Kong Disneyland</td><td class="p-2">2005</td><td class="p-2">Hong Kong</td><td class="p-2">1</td></tr>
        <tr class="border-t"><td class="p-2">Shanghai Disney</td><td class="p-2">2016</td><td class="p-2">Shanghai, China</td><td class="p-2">1</td></tr>
      </tbody>
    </table>

    <h2 id="streaming" class="text-2xl font-bold mt-10 mb-4">Streaming</h2>
    <p><strong>Disney+</strong> launched November 2019 and has grown to over <strong>150 million subscribers</strong>. Key content includes <em>The Mandalorian</em>, <em>WandaVision</em>, <em>Loki</em>, and live-action remakes. Disney gained full ownership of <strong>Hulu</strong> through the Fox acquisition and 2023 Comcast buyout.</p>

    <h2 id="gaming" class="text-2xl font-bold mt-10 mb-4">Gaming &amp; Digital</h2>
    <p>In February 2024, Disney invested <strong>$1.5 billion in Epic Games</strong> to build an "entertainment universe" connected to Fortnite. After closing LucasArts in 2016 and shifting to a licensing model (producing hits like <em>Jedi: Fallen Order</em> and <em>Spider-Man</em>), the Epic deal marks Disney's re-entry into interactive entertainment at scale.</p>

    <h2 id="financials" class="text-2xl font-bold mt-10 mb-4">Financials</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
      <div class="bg-gray-50 border border-gray-200 rounded p-3 text-center">
        <p class="text-xl font-bold text-gray-900">~$90B</p>
        <p class="text-xs text-gray-500">Revenue</p>
      </div>
      <div class="bg-gray-50 border border-gray-200 rounded p-3 text-center">
        <p class="text-xl font-bold text-gray-900">~$200B</p>
        <p class="text-xs text-gray-500">Market Cap</p>
      </div>
      <div class="bg-gray-50 border border-gray-200 rounded p-3 text-center">
        <p class="text-xl font-bold text-gray-900">~200K</p>
        <p class="text-xs text-gray-500">Employees</p>
      </div>
      <div class="bg-gray-50 border border-gray-200 rounded p-3 text-center">
        <p class="text-xl font-bold text-gray-900">150M+</p>
        <p class="text-xs text-gray-500">Disney+ Subs</p>
      </div>
    </div>

    <hr class="my-8 border-gray-200" />
    <div class="text-sm text-gray-500">
      <p class="font-semibold text-gray-700 mb-2">REFERENCES</p>
      <ul class="list-decimal list-inside space-y-1">
        <li>The Walt Disney Company, Corporate website (thewaltdisneycompany.com)</li>
        <li>Wikipedia, The Walt Disney Company</li>
        <li>Variety, "Josh D'Amaro Named Disney CEO Successor" (2026)</li>
        <li>Epic Games, Disney $1.5B Investment Announcement (February 2024)</li>
        <li>CNBC, Disney Financial Reporting</li>
      </ul>
    </div>
  </div>

  <!-- Sidebar -->
  <aside class="md:col-span-1">
    <div class="sticky top-6 space-y-6">
      <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
        <p class="font-bold text-center border-b border-gray-200 pb-2 mb-3">The Walt Disney Company</p>
        <table class="w-full text-xs">
          <tbody>
            <tr class="border-b border-gray-100">
              <th class="py-1.5 pr-2 text-left text-gray-600 font-medium">Type</th>
              <td class="py-1.5">Public (NYSE: DIS)</td>
            </tr>
            <tr class="border-b border-gray-100">
              <th class="py-1.5 pr-2 text-left text-gray-600 font-medium">Industry</th>
              <td class="py-1.5">Mass Media / Entertainment</td>
            </tr>
            <tr class="border-b border-gray-100">
              <th class="py-1.5 pr-2 text-left text-gray-600 font-medium">Founded</th>
              <td class="py-1.5">October 16, 1923</td>
            </tr>
            <tr class="border-b border-gray-100">
              <th class="py-1.5 pr-2 text-left text-gray-600 font-medium align-top">Founders</th>
              <td class="py-1.5">Walt Disney, Roy O. Disney</td>
            </tr>
            <tr class="border-b border-gray-100">
              <th class="py-1.5 pr-2 text-left text-gray-600 font-medium">HQ</th>
              <td class="py-1.5">Burbank, CA</td>
            </tr>
            <tr class="border-b border-gray-100">
              <th class="py-1.5 pr-2 text-left text-gray-600 font-medium">CEO</th>
              <td class="py-1.5">Josh D'Amaro (Mar 2026)</td>
            </tr>
            <tr class="border-b border-gray-100">
              <th class="py-1.5 pr-2 text-left text-gray-600 font-medium">Employees</th>
              <td class="py-1.5">~200,000</td>
            </tr>
            <tr>
              <th class="py-1.5 pr-2 text-left text-gray-600 font-medium">Website</th>
              <td class="py-1.5"><a href="https://thewaltdisneycompany.com" class="text-blue-600 hover:underline text-xs">thewaltdisneycompany.com</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Major Properties -->
      <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
        <h3 class="font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">Major Properties</h3>
        <ul class="space-y-1.5 text-gray-700">
          <li class="font-semibold">Marvel Studios</li>
          <li class="font-semibold">Pixar</li>
          <li class="font-semibold">Lucasfilm / Star Wars</li>
          <li>20th Century Studios</li>
          <li>ESPN</li>
          <li>ABC</li>
          <li>National Geographic</li>
          <li>Hulu</li>
        </ul>
      </div>

      <!-- Related Coverage -->
      <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
        <h3 class="font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">Related</h3>
        <ul class="space-y-1.5">
          <li><a href="/disney/josh-damaro" class="text-blue-600 hover:underline">Josh D'Amaro Profile</a></li>
          <li><a href="/disney/news/disney-execs-pleased-avengers-doomsday-mcu-box-office-slump" class="text-blue-600 hover:underline">Avengers: Doomsday</a></li>
          <li><a href="/disney/news/incoming-ceo-floats-premiering-films-in-fortnite" class="text-blue-600 hover:underline">Films in Fortnite</a></li>
          <li><a href="/entertainment/hulu" class="text-blue-600 hover:underline">Hulu</a></li>
        </ul>
      </div>
    </div>
  </aside>
</div>
      `,
    } as any,
  ],
};

export default article;
