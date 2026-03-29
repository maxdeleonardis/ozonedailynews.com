import type { Article } from '../../content/types';

const article: Article = {
  title: 'Alfansa | Finance & Markets Reporter | ObjectWire',
  slug: 'authors-alfansa',
  category: 'Reference',
  status: 'published',
  published_at: '2026-03-11',

  excerpt: 'Alfansa is a Finance & Markets Reporter and Anime & Gaming Editor at ObjectWire, covering markets, payments, fintech, My Hero Academia, and gaming culture.',
  tags: ['Finance', 'Markets', 'Anime', 'Gaming', 'ObjectWire', 'Author'],
  topic_tag: 'Author Profile',
  category_color: '#10b981',

  author_name: 'ObjectWire Editorial',
  author_role: 'Editorial',
  author_slug: 'objectwire-editorial',

  image_url: '',
  image_alt: 'Alfansa, ObjectWire Finance & Markets Reporter',

  content: [
    {
      id: 'html1',
      type: 'html',
      content: `
<div class="grid md:grid-cols-3 gap-8">
  <div class="md:col-span-2">
    <!-- Anime-themed banner -->
    <div class="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg p-6 mb-8 text-white">
      <p class="text-3xl font-extrabold tracking-tight">PLUS ULTRA</p>
      <p class="text-sm opacity-80 mt-1">Finance &amp; Markets Reporter · Anime &amp; Gaming Editor</p>
    </div>

    <h2 class="text-2xl font-bold mb-4 text-gray-900">About Alfansa</h2>
    <p class="mb-4 text-gray-700 leading-relaxed">
      Alfansa is a <strong>Finance &amp; Markets Reporter</strong> and <strong>Anime &amp; Gaming Editor</strong> at ObjectWire. Her financial coverage focuses on payments infrastructure, fintech disruption, market events, and the intersection of emerging technology with capital markets, bringing the same analytical depth to Wall Street that she brings to the gaming world.
    </p>
    <p class="mb-4 text-gray-700 leading-relaxed">
      On the finance beat, Alfansa covers breaking market events, sector selloffs, and structural shifts in industries being reshaped by AI and digital finance. Her reporting on the February 2026 payments sector selloff, driven by an AI disruption note and tariff uncertainty, drew significant readership across ObjectWire's finance audience.
    </p>
    <p class="mb-6 text-gray-700 leading-relaxed">
      Alfansa also leads ObjectWire's <strong>Anime &amp; Gaming coverage</strong>, heading the My Hero Academia franchise desk across its manga/anime universe and video game catalogue. She covers My Hero Ultra Rumble season by season and contributes broader seasonal anime commentary, approaching every beat with the conviction that it deserves rigorous editorial standards.
    </p>

    <h3 class="text-xl font-bold mb-3 mt-8 text-gray-900">Coverage Areas</h3>
    <div class="grid grid-cols-2 gap-4 mb-8">
      <div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p class="font-semibold text-gray-900 mb-1">Finance &amp; Markets</p>
        <p class="text-sm text-gray-600">Market events, sector selloffs, macroeconomic trends</p>
      </div>
      <div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p class="font-semibold text-gray-900 mb-1">Fintech &amp; Payments</p>
        <p class="text-sm text-gray-600">Payments infrastructure, digital finance, AI disruption</p>
      </div>
      <div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p class="font-semibold text-gray-900 mb-1">My Hero Academia</p>
        <p class="text-sm text-gray-600">Manga, anime, Ultra Rumble, franchise coverage</p>
      </div>
      <div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p class="font-semibold text-gray-900 mb-1">Gaming &amp; Anime</p>
        <p class="text-sm text-gray-600">Seasonal anime, gaming culture, industry news</p>
      </div>
    </div>

    <h3 class="text-xl font-bold mb-3 mt-8 text-gray-900">Selected Work</h3>
    <ul class="space-y-3 mb-8">
      <li class="border-l-4 border-emerald-500 pl-4">
        <a href="/copyright/news/mastercard-ai-disruption-selloff" class="text-blue-600 hover:underline font-medium">Mastercard Shares Drop Below $500 as AI Disruption Note Shakes Payments Sector</a>
        <p class="text-sm text-gray-500 mt-0.5">Finance · February 2026</p>
      </li>
      <li class="border-l-4 border-purple-500 pl-4">
        <a href="/video-games/mha" class="text-blue-600 hover:underline font-medium">My Hero Academia — Complete Franchise Hub</a>
        <p class="text-sm text-gray-500 mt-0.5">Anime &amp; Gaming</p>
      </li>
      <li class="border-l-4 border-purple-500 pl-4">
        <a href="/video-games/mha/ultra-rumble/season-15" class="text-blue-600 hover:underline font-medium">My Hero Ultra Rumble — Season 15 Breakdown</a>
        <p class="text-sm text-gray-500 mt-0.5">Gaming · 2026</p>
      </li>
    </ul>
  </div>

  <!-- Sidebar -->
  <aside class="md:col-span-1">
    <div class="sticky top-6 space-y-6">
      <!-- Profile card -->
      <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
        <p class="font-bold text-center border-b border-gray-200 pb-2 mb-3 text-gray-900">Alfansa</p>
        <table class="w-full text-xs">
          <tbody>
            <tr class="border-b border-gray-100">
              <th class="py-1.5 pr-2 text-left text-gray-600 font-medium">Role</th>
              <td class="py-1.5">Finance &amp; Markets Reporter</td>
            </tr>
            <tr class="border-b border-gray-100">
              <th class="py-1.5 pr-2 text-left text-gray-600 font-medium">Also</th>
              <td class="py-1.5">Anime &amp; Gaming Editor</td>
            </tr>
            <tr class="border-b border-gray-100">
              <th class="py-1.5 pr-2 text-left text-gray-600 font-medium">Location</th>
              <td class="py-1.5">Austin, TX</td>
            </tr>
            <tr class="border-b border-gray-100">
              <th class="py-1.5 pr-2 text-left text-gray-600 font-medium">Outlet</th>
              <td class="py-1.5">ObjectWire</td>
            </tr>
            <tr>
              <th class="py-1.5 pr-2 text-left text-gray-600 font-medium align-top">Beats</th>
              <td class="py-1.5">Finance, Crypto, Anime, Gaming</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- MHA Coverage -->
      <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
        <h3 class="font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">MHA Coverage</h3>
        <ul class="space-y-1.5 text-gray-700">
          <li><a href="/video-games/mha" class="text-blue-600 hover:underline">MHA Franchise Hub</a></li>
          <li><a href="/video-games/mha/ultra-rumble/season-15" class="text-blue-600 hover:underline">Ultra Rumble Season 15</a></li>
          <li><a href="/video-games/mha/ultra-rumble/season-15/strike-overhaul" class="text-blue-600 hover:underline">Overhaul Skill Guide</a></li>
          <li><a href="/video-games/mha/alls-justice" class="text-blue-600 hover:underline">All's Justice Mode Guide</a></li>
        </ul>
      </div>

      <!-- Editorial Standards -->
      <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
        <p class="text-gray-600">All reporting follows ObjectWire's <a href="/editorial-standards" class="text-blue-600 hover:underline">editorial standards</a>. Submit corrections via <a href="/corrections" class="text-blue-600 hover:underline">our corrections page</a>.</p>
      </div>
    </div>
  </aside>
</div>
      `,
    } as any,
  ],
};

export default article;
