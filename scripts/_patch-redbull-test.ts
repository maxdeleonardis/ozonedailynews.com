/**
 * One-shot script: patch articlepage-test in Supabase to match
 * the /redbull page 1:1 — full sidebar sections + Overview table in content.
 *
 * Run: npx tsx scripts/_patch-redbull-test.ts
 */
import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

// ── Sidebar: grouped sections matching the /redbull page exactly ─────────────
const info_box = {
  title: 'Red Bull GmbH',
  image: {
    src: '',
    alt: 'Red Bull logo',
    caption: 'Red Bull Logo',
  },
  sections: [
    {
      heading: 'Quick Facts',
      items: [
        { label: 'Type', value: 'Private GmbH' },
        { label: 'Founded', value: '1984 (Product: 1987)' },
        { label: 'Founders', value: 'Mateschitz & Yoovidhya' },
        { label: 'HQ', value: 'Fuschl am See, Austria' },
        { label: 'Countries', value: '170+' },
        { label: 'Ownership', value: 'Private (51% / 49%)' },
      ],
    },
    {
      heading: 'F1 Teams Owned',
      list: ['Oracle Red Bull Racing', 'Visa Cash App RB'],
    },
    {
      heading: 'Football Clubs',
      list: [
        'RB Leipzig (Germany)',
        'FC Red Bull Salzburg (Austria)',
        'New York Red Bulls (USA)',
        'Red Bull Bragantino (Brazil)',
      ],
    },
    {
      heading: 'Website',
      text: 'redbull.com',
      href: 'https://www.redbull.com',
    },
    {
      heading: 'Related',
      links: [
        { href: '/formula-1', label: 'Formula 1' },
        { href: '/rb-leipzig', label: 'RB Leipzig' },
        { href: '/max-verstappen', label: 'Max Verstappen' },
      ],
    },
  ],
};

// ── TOC matching /redbull exactly ─────────────────────────────────────────────
const table_of_contents = [
  { id: 'overview', label: 'Overview' },
  { id: 'history', label: 'History and Founding' },
  { id: 'founders', label: 'Founders' },
  { id: 'products', label: 'Products' },
  { id: 'sports', label: 'Sports Empire' },
  { id: 'structure', label: 'Corporate Structure' },
  { id: 'marketing', label: 'Marketing Strategy' },
  { id: 'controversies', label: 'Controversies' },
  { id: 'financials', label: 'Financials' },
  { id: 'seealso', label: 'See Also' },
  { id: 'references', label: 'References' },
];

// ── Related links ─────────────────────────────────────────────────────────────
const related_links = [
  { href: '/energy-drinks', label: 'Energy Drink Industry', description: 'Market overview and analysis' },
  { href: '/formula-1', label: 'Formula 1', description: 'ObjectWire Formula 1 coverage' },
  { href: '/rb-leipzig', label: 'RB Leipzig', description: 'Red Bull football club, Germany' },
  { href: '/max-verstappen', label: 'Max Verstappen', description: 'Red Bull Racing F1 champion' },
  { href: '/extreme-sports', label: 'Extreme Sports', description: 'Red Bull-sponsored events and athletes' },
  { href: '/beverage-industry', label: 'Beverage Industry', description: 'Global beverage market coverage' },
  { href: '/monster-energy', label: 'Monster Energy', description: 'Main competitor analysis' },
  { href: '/coca-cola', label: 'Coca-Cola', description: 'Monster Energy parent company' },
];

// ── Content HTML matching /redbull exactly ────────────────────────────────────
const content_html = `
<p class="text-lg leading-relaxed mb-6">
  <strong>Red Bull GmbH</strong> is an Austrian multinational private company known for its
  <a href="/energy-drinks" class="text-blue-600 hover:underline">energy drink</a> of the same name,
  as well as its extensive sports sponsorships and ownership of professional sports teams.
  Founded in <strong>1984</strong> by <strong>Dietrich Mateschitz</strong> and
  <strong>Chaleo Yoovidhya</strong>, the company transformed a Thai energy tonic into a global
  phenomenon, creating the energy drink category and building one of the world's most recognizable
  brands through unconventional marketing and extreme sports associations.
</p>

<section id="overview" class="mb-10 scroll-mt-20">
  <h2 class="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Overview</h2>
  <div class="overflow-x-auto mb-6">
    <table class="w-full border-collapse border border-gray-300 text-sm">
      <tbody>
        <tr class="border-b border-gray-200">
          <th class="bg-gray-50 p-3 text-left font-semibold w-1/3">Type</th>
          <td class="p-3">Private GmbH (Limited Liability Company)</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="bg-gray-50 p-3 text-left font-semibold">Industry</th>
          <td class="p-3">Beverages, Sports, Media</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="bg-gray-50 p-3 text-left font-semibold">Founded</th>
          <td class="p-3">1984 (Product launched April 1, 1987)</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="bg-gray-50 p-3 text-left font-semibold">Founders</th>
          <td class="p-3">Dietrich Mateschitz, Chaleo Yoovidhya</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="bg-gray-50 p-3 text-left font-semibold">Headquarters</th>
          <td class="p-3">Fuschl am See, Salzburg, Austria</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="bg-gray-50 p-3 text-left font-semibold">Area Served</th>
          <td class="p-3">170+ countries worldwide</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="bg-gray-50 p-3 text-left font-semibold">Key Products</th>
          <td class="p-3">Red Bull Energy Drink, Sugarfree, Editions</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="bg-gray-50 p-3 text-left font-semibold">Owner</th>
          <td class="p-3">Yoovidhya family (~51%), Mateschitz heirs (~49%)</td>
        </tr>
        <tr>
          <th class="bg-gray-50 p-3 text-left font-semibold">Website</th>
          <td class="p-3"><a href="https://www.redbull.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">redbull.com</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section id="history" class="mb-10 scroll-mt-20">
  <h2 class="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">History and Founding</h2>
  <p class="mb-4 leading-relaxed">
    Red Bull's origin story begins not in Austria, but in <strong>Thailand</strong>. In 1976,
    Thai businessman <strong>Chaleo Yoovidhya</strong> created <strong>Krating Daeng</strong>
    (กระทิงแดง), which translates to "Red Gaur" (a large wild bovine native to South Asia).
    The drink was formulated as a tonic for truck drivers, laborers, and other workers needing
    to stay alert during long shifts.
  </p>
  <h3 class="text-lg font-semibold mb-3">The Meeting of Minds (1982)</h3>
  <p class="mb-4 leading-relaxed">
    The pivotal moment came in 1982 when <strong>Dietrich Mateschitz</strong>, an Austrian
    marketing executive working for Blendax (a German toothpaste company), traveled to Thailand
    for business. Suffering from jet lag, he tried Krating Daeng and claimed it cured his
    exhaustion. Recognizing the product's potential for Western markets, Mateschitz sought out
    Chaleo Yoovidhya to propose a partnership.
  </p>
  <h3 class="text-lg font-semibold mb-3">Partnership and Launch (1984–1987)</h3>
  <p class="mb-4 leading-relaxed">
    In <strong>1984</strong>, Mateschitz and Yoovidhya founded <strong>Red Bull GmbH</strong> in
    Fuschl am See, Austria. Each partner invested <strong>$500,000</strong> for a 49% stake,
    with 2% allocated to Yoovidhya's son, Chalerm. This structure ensured neither founder had
    outright control while keeping the company private.
  </p>
  <p class="mb-4 leading-relaxed">
    Mateschitz spent three years adapting the formula for Western tastes—making it carbonated,
    less sweet, and creating the distinctive slim can design. On <strong>April 1, 1987</strong>,
    Red Bull Energy Drink launched in Austria, effectively creating the energy drink category
    in Western markets.
  </p>
  <h3 class="text-lg font-semibold mb-3">Global Expansion</h3>
  <p class="mb-4 leading-relaxed">
    From its Austrian launch, Red Bull expanded methodically: Hungary (1992), Germany and the
    UK (1994), the United States (1997), and eventually to over <strong>170 countries</strong>.
    The company resisted traditional advertising, instead building the brand through extreme
    sports sponsorships, event marketing, and word-of-mouth.
  </p>
  <h3 class="text-lg font-semibold mb-3">Founder Deaths and Succession</h3>
  <p class="leading-relaxed">
    <strong>Chaleo Yoovidhya</strong> passed away in <strong>March 2012</strong> at age 88.
    <strong>Dietrich Mateschitz</strong> died in <strong>October 2022</strong> at age 78 from cancer.
    Ownership transferred to their respective heirs: the Yoovidhya family retained approximately
    51% through T.C. Pharmaceutical, while Mark Mateschitz (Dietrich's son) inherited
    approximately 49%.
  </p>
</section>

<section id="founders" class="mb-10 scroll-mt-20">
  <h2 class="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Founders</h2>
  <h3 class="text-lg font-semibold mb-3">Dietrich Mateschitz (1944–2022)</h3>
  <p class="mb-4 leading-relaxed">
    Born in Styria, Austria, Mateschitz was the marketing genius who transformed a Thai tonic
    into a global brand. Before Red Bull, he worked in marketing for Unilever and Blendax.
    Known for his reclusive nature and obsession with brand control, Mateschitz:
  </p>
  <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
    <li>Developed the Western formula and carbonation process</li>
    <li>Created the "Red Bull Gives You Wings" positioning</li>
    <li>Pioneered extreme sports marketing</li>
    <li>Maintained strict private ownership to avoid shareholder pressure</li>
    <li>Built a fortune estimated at $27 billion at his death</li>
  </ul>
  <h3 class="text-lg font-semibold mb-3">Chaleo Yoovidhya (1923–2012)</h3>
  <p class="leading-relaxed">
    A Thai entrepreneur of ethnic Chinese descent, Yoovidhya founded T.C. Pharmaceutical in 1956.
    He created Krating Daeng in 1976 as a medicinal tonic. Though less visible than Mateschitz
    internationally, his family maintained significant control through their 51% stake and T.C.
    Pharmaceutical, which continues to produce Krating Daeng in Thailand.
  </p>
</section>

<section id="products" class="mb-10 scroll-mt-20">
  <h2 class="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Products</h2>
  <h3 class="text-lg font-semibold mb-3">Red Bull Energy Drink</h3>
  <p class="mb-4 leading-relaxed">
    The flagship product contains caffeine, taurine, B-vitamins (B3, B5, B6, B12), sucrose and
    glucose, alpine water, and citric acid. A standard 250ml can contains approximately 80mg of
    caffeine—roughly equivalent to a cup of coffee.
  </p>
  <h3 class="text-lg font-semibold mb-3">Product Variants</h3>
  <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
    <li><strong>Red Bull Sugarfree:</strong> Zero-calorie version using artificial sweeteners</li>
    <li><strong>Red Bull Zero:</strong> Another zero-sugar variant</li>
    <li><strong>Red Bull Editions:</strong> Flavored versions including Blueberry, Coconut Berry, Peach-Nectarine, Watermelon, and others</li>
    <li><strong>Organics by Red Bull:</strong> Organic soda line (discontinued in many markets)</li>
    <li><strong>Red Bull Simply Cola:</strong> Cola with natural caffeine (limited markets)</li>
  </ul>
  <h3 class="text-lg font-semibold mb-3">Production</h3>
  <p class="leading-relaxed">
    Red Bull operates production facilities in Austria (headquarters), Thailand, and regional
    plants worldwide. The company uses a decentralized manufacturing model to reduce shipping
    costs and ensure freshness.
  </p>
</section>

<section id="sports" class="mb-10 scroll-mt-20">
  <h2 class="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Sports Empire</h2>
  <p class="mb-4 leading-relaxed">
    Red Bull's sports involvement goes far beyond sponsorship—it owns entire teams, venues, and
    media operations. This vertical integration creates authentic brand association while
    generating content and revenue.
  </p>
  <h3 class="text-lg font-semibold mb-3">Formula 1</h3>
  <p class="mb-4 leading-relaxed">
    Red Bull owns <strong>two Formula 1 teams</strong>—a unique arrangement in the sport:
  </p>
  <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
    <li><strong>Oracle Red Bull Racing:</strong> Acquired from Jaguar in 2005. Based in Milton Keynes, UK. Winners of multiple Constructors' and Drivers' Championships (2010–2013, 2022–2024). Current drivers include Max Verstappen.</li>
    <li><strong>Visa Cash App RB (Racing Bulls):</strong> Formerly Toro Rosso (2006–2019) and AlphaTauri (2020–2023). Acquired from Minardi in 2005. Serves as a junior team and technology testbed, based in Faenza, Italy.</li>
  </ul>
  <p class="mb-4 leading-relaxed">
    This dual-team ownership has drawn criticism from competitors, particularly McLaren CEO Zak
    Brown, who argues it creates conflicts of interest and an unfair "A/B team" dynamic.
  </p>
  <h3 class="text-lg font-semibold mb-3">Football (Soccer)</h3>
  <p class="mb-4 leading-relaxed">Red Bull operates a multi-club ownership model under "Red Bull Football":</p>
  <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
    <li><strong>RB Leipzig (Germany):</strong> Founded in 2009, promoted to Bundesliga in 2016. Finished as league runners-up multiple times, reached Champions League semi-finals (2020).</li>
    <li><strong>FC Red Bull Salzburg (Austria):</strong> Acquired in 2005. Dominant Austrian Bundesliga force, perennial Champions League qualifier.</li>
    <li><strong>New York Red Bulls (USA):</strong> MLS franchise since 1995 (acquired full control in 2006).</li>
    <li><strong>Red Bull Bragantino (Brazil):</strong> Acquired in 2019, rising force in Brazilian football.</li>
    <li><strong>FC Liefering (Austria):</strong> Farm team for Salzburg.</li>
    <li><strong>RB Leipzig II, Red Bull Ghana (development):</strong> Various academy and development setups.</li>
  </ul>
  <h3 class="text-lg font-semibold mb-3">Ice Hockey</h3>
  <p class="mb-4 leading-relaxed">
    <strong>EC Red Bull Salzburg:</strong> Austrian ice hockey club competing in the ICE Hockey
    League. Multiple-time Austrian champions.
  </p>
  <h3 class="text-lg font-semibold mb-3">Extreme Sports &amp; Events</h3>
  <p class="mb-4 leading-relaxed">
    Red Bull has created or sponsors hundreds of extreme sports events and athletes worldwide:
  </p>
  <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
    <li><strong>Red Bull Stratos (2012):</strong> Felix Baumgartner's record-breaking space jump—$65 million video production</li>
    <li><strong>Red Bull Rampage:</strong> Premier freeride mountain biking event</li>
    <li><strong>Red Bull Cliff Diving World Series</strong></li>
    <li><strong>Red Bull X-Fighters:</strong> Freestyle motocross</li>
    <li><strong>Red Bull Air Race</strong> (operated 2003–2019)</li>
    <li><strong>Red Bull Crashed Ice</strong> (ice cross downhill)</li>
    <li><strong>Red Bull BC One:</strong> Breakdancing world championship</li>
    <li><strong>Red Bull Music Academy</strong> (operated 1998–2019)</li>
  </ul>
  <h3 class="text-lg font-semibold mb-3">Cycling</h3>
  <p class="leading-relaxed">
    <strong>Red Bull–Bora–Hansgrohe:</strong> UCI WorldTour professional cycling team,
    competing in Tour de France and other major races.
  </p>
</section>

<section id="structure" class="mb-10 scroll-mt-20">
  <h2 class="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Corporate Structure</h2>
  <h3 class="text-lg font-semibold mb-3">Ownership</h3>
  <p class="mb-4 leading-relaxed">
    Red Bull GmbH is a <strong>privately held GmbH</strong> (Gesellschaft mit beschränkter
    Haftung)—the Austrian equivalent of an LLC. The company has never gone public and maintains
    strict founder/family control:
  </p>
  <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
    <li><strong>Yoovidhya family:</strong> ~51% (through T.C. Pharmaceutical and various holding structures)</li>
    <li><strong>Mateschitz family:</strong> ~49% (inherited by Mark Mateschitz after his father's death)</li>
  </ul>
  <p class="mb-4 leading-relaxed">
    The 2% difference (Chalerm Yoovidhya's stake) proved decisive in control, giving the Thai
    family majority voting power.
  </p>
  <h3 class="text-lg font-semibold mb-3">Headquarters</h3>
  <p class="mb-4 leading-relaxed">
    The company's headquarters is located in <strong>Fuschl am See</strong>, a lakeside village
    near Salzburg, Austria. The campus includes modern office buildings, production facilities,
    and the Hangar-7 aviation museum housing Mateschitz's private aircraft collection.
  </p>
  <h3 class="text-lg font-semibold mb-3">Global Operations</h3>
  <p class="leading-relaxed">
    Red Bull operates through regional subsidiaries and distribution partnerships in 170+
    countries. Major markets include the United States, Germany, UK, France, Japan, Brazil,
    and emerging markets in Africa and Southeast Asia.
  </p>
</section>

<section id="marketing" class="mb-10 scroll-mt-20">
  <h2 class="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Marketing Strategy</h2>
  <h3 class="text-lg font-semibold mb-3">"Gives You Wings"</h3>
  <p class="mb-4 leading-relaxed">
    Red Bull's marketing revolutionized the beverage industry. Instead of traditional
    advertising, Mateschitz invested heavily in <strong>event marketing, extreme sports,
    and content creation</strong>. The strategy:
  </p>
  <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
    <li>Associate the brand with high-energy, adventurous activities</li>
    <li>Create owned media (Red Bull TV, Red Bull Media House)</li>
    <li>Sponsor athletes and events rather than buying TV commercials</li>
    <li>Generate word-of-mouth through spectacular stunts</li>
    <li>Maintain premium pricing to reinforce brand positioning</li>
  </ul>
  <h3 class="text-lg font-semibold mb-3">Media Empire</h3>
  <p class="mb-4 leading-relaxed">
    <strong>Red Bull Media House</strong>, established in 2007, produces films, magazines,
    digital content, and operates Red Bull TV. The media arm transforms marketing from a cost
    center into a revenue-generating business while ensuring brand message control.
  </p>
  <h3 class="text-lg font-semibold mb-3">Distribution Innovation</h3>
  <p class="leading-relaxed">
    Red Bull pioneered placement in non-traditional venues—nightclubs, gyms, convenience
    stores, and gas stations—rather than competing for supermarket shelf space. The distinctive
    slim can and blue-silver color scheme created instant visual recognition.
  </p>
</section>

<section id="controversies" class="mb-10 scroll-mt-20">
  <h2 class="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Controversies</h2>
  <h3 class="text-lg font-semibold mb-3">Formula 1 Dual Team Ownership</h3>
  <p class="mb-4 leading-relaxed">
    Red Bull's ownership of two F1 teams has generated ongoing controversy. Critics, including
    McLaren Racing CEO Zak Brown, argue the arrangement creates:
  </p>
  <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
    <li>Unfair information sharing between "A team" and "B team"</li>
    <li>Voting bloc influence in F1 governance</li>
    <li>Reduced grid diversity as smaller teams struggle to compete</li>
  </ul>
  <p class="mb-4 leading-relaxed">
    The FIA has investigated the relationship multiple times but has not found conclusive
    evidence of rule violations.
  </p>
  <h3 class="text-lg font-semibold mb-3">Health Concerns</h3>
  <p class="mb-4 leading-relaxed">
    Energy drinks face ongoing scrutiny regarding health effects, particularly on young people.
    Concerns include:
  </p>
  <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
    <li>High caffeine content and cardiovascular effects</li>
    <li>Mixing with alcohol (popular in nightlife culture)</li>
    <li>Marketing to minors (despite self-imposed age restrictions)</li>
  </ul>
  <p class="mb-4 leading-relaxed">
    Some countries have banned or restricted energy drink sales to minors. Red Bull maintains
    its products are safe when consumed as directed and in moderation.
  </p>
  <h3 class="text-lg font-semibold mb-3">RB Leipzig Fan Culture</h3>
  <p class="mb-4 leading-relaxed">
    RB Leipzig's rapid rise through German football has been controversial among traditional
    fans. The club's corporate ownership structure and minimal membership numbers (allowing Red
    Bull to maintain control) conflict with Germany's 50+1 fan ownership rule. This has made
    Leipzig a target of opposition fan protests.
  </p>
  <h3 class="text-lg font-semibold mb-3">Post-Mateschitz Power Struggles</h3>
  <p class="leading-relaxed">
    Following Dietrich Mateschitz's death in 2022, tensions emerged between the Yoovidhya and
    Mateschitz families over control. The February 2024 sacking of long-serving F1 Team
    Principal Christian Horner (amid internal investigations) highlighted governance challenges
    in the post-founder era.
  </p>
</section>

<section id="financials" class="mb-10 scroll-mt-20">
  <h2 class="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Financials</h2>
  <p class="mb-4 leading-relaxed">
    As a private company, Red Bull does not disclose detailed financial statements. However,
    available data indicates massive scale:
  </p>
  <h3 class="text-lg font-semibold mb-3">Estimated Performance</h3>
  <div class="overflow-x-auto mb-6">
    <table class="w-full border-collapse border border-gray-300 text-sm">
      <tbody>
        <tr class="border-b border-gray-200">
          <th class="bg-gray-50 p-3 text-left font-semibold w-1/3">Annual Revenue (est.)</th>
          <td class="p-3">€10+ billion</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="bg-gray-50 p-3 text-left font-semibold">Cans Sold Annually</th>
          <td class="p-3">12+ billion</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="bg-gray-50 p-3 text-left font-semibold">Employees Worldwide</th>
          <td class="p-3">13,000+</td>
        </tr>
        <tr class="border-b border-gray-200">
          <th class="bg-gray-50 p-3 text-left font-semibold">Market Position</th>
          <td class="p-3">Global energy drink market leader (~40–43% share)</td>
        </tr>
        <tr>
          <th class="bg-gray-50 p-3 text-left font-semibold">Mateschitz Net Worth</th>
          <td class="p-3">$27 billion (at time of death, 2022)</td>
        </tr>
      </tbody>
    </table>
  </div>
  <h3 class="text-lg font-semibold mb-3">Competitive Position</h3>
  <p class="leading-relaxed">
    Red Bull dominates the global energy drink market with approximately 40–43% market share.
    Main competitors include Monster Energy (Coca-Cola owned), Rockstar (PepsiCo), and various
    regional brands. Despite competition, Red Bull maintains premium pricing and brand cachet
    that competitors struggle to match.
  </p>
</section>

<section id="seealso" class="mb-10 scroll-mt-20">
  <h2 class="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">See Also</h2>
  <div class="columns-2 gap-8">
    <ul>
      <li><a href="/energy-drinks" class="text-blue-600 hover:underline">Energy Drink Industry</a></li>
      <li><a href="/formula-1" class="text-blue-600 hover:underline">Formula 1</a></li>
      <li><a href="/rb-leipzig" class="text-blue-600 hover:underline">RB Leipzig</a></li>
      <li><a href="/max-verstappen" class="text-blue-600 hover:underline">Max Verstappen</a></li>
    </ul>
    <ul>
      <li><a href="/extreme-sports" class="text-blue-600 hover:underline">Extreme Sports</a></li>
      <li><a href="/beverage-industry" class="text-blue-600 hover:underline">Beverage Industry</a></li>
      <li><a href="/monster-energy" class="text-blue-600 hover:underline">Monster Energy</a></li>
      <li><a href="/coca-cola" class="text-blue-600 hover:underline">Coca-Cola</a></li>
    </ul>
  </div>
</section>

<section id="references" class="mb-10 scroll-mt-20">
  <h2 class="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">References</h2>
  <ol class="text-sm text-gray-600 space-y-2">
    <li>"Who Owns Red Bull GmbH? The Full Ownership Breakdown." <em>Ecreee</em>, February 2026, web.ecreee.org.</li>
    <li>"Red Bull." <em>Wikipedia</em>, en.wikipedia.org/wiki/Red_Bull.</li>
    <li>"The Story Of How Red Bull Turned To Be A Global Brand Leader." <em>Naturality</em>, naturality.io.</li>
    <li>"The Untold Story of Red Bull: From Thai Energy Booster to Global Icon." <em>Phable</em>, phable.io.</li>
    <li>"Q&amp;A | When was Red Bull founded?" <em>Red Bull Official</em>, redbull.com.</li>
    <li>"Red Bull Company: Giving Wiiings to People &amp; Ideas." <em>Red Bull Official</em>, redbull.com.</li>
    <li>"The Surprising Origin Story of the Red Bull Brand." <em>C-Suite Network</em>, c-suitenetwork.com.</li>
    <li>"History of Red Bull: Giving Wiiings Since 1987." <em>Red Bull Official</em>, redbull.com.</li>
    <li>"F1 team ownership: who are the different teams owned by?" <em>Autosport</em>, autosport.com.</li>
    <li>"Explained: Who owns each Formula 1 team." <em>Planet F1</em>, planetf1.com.</li>
  </ol>
</section>
`.trim();

async function main() {
  console.log('Patching articlepage-test in Supabase...');

  const { error } = await sb
    .from('article_pages')
    .upsert({
      slug: 'articlepage-test',
      title: 'Red Bull GmbH',
      subtitle: 'Austrian multinational energy drink company and global sports empire',
      category: 'Business',
      last_updated: 'February 19, 2026',
      url: '/articlepage/test',
      info_box: info_box,
      table_of_contents: table_of_contents,
      content_html: content_html,
      related_links: related_links,
      back_link: { href: '/', label: 'Home' },
    }, { onConflict: 'slug' });

  if (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }

  console.log('✓ articlepage-test patched successfully');
}

main();
