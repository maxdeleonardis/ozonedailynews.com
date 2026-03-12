import type { Article } from '../../content/types';

const article: Article = {
  title: 'Authors & Contributors | ObjectWire',
  slug: 'authors',
  category: 'Reference',
  status: 'published',
  published_at: '2026-01-01',

  excerpt: 'Meet the journalists, reporters, and editors behind ObjectWire — covering finance, markets, science, technology, anime, gaming, investigations, and breaking news.',
  tags: ['ObjectWire', 'Authors', 'Journalists', 'Team'],

  author_name: 'ObjectWire Editorial',
  author_role: 'Editorial',
  author_slug: 'objectwire-editorial',
  category_color: '#6b7280',

  content: [
    {
      id: 'html1',
      type: 'html',
      content: `
<div class="max-w-5xl mx-auto">
  <!-- Header -->
  <div class="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg p-8 mb-10">
    <h2 class="text-3xl font-bold mb-2">Authors &amp; Contributors</h2>
    <p class="text-gray-300">The journalists, reporters, and editors behind ObjectWire's coverage.</p>
  </div>

  <!-- Author Grid -->
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

    <!-- Alfansa -->
    <a href="/authors/alfansa" class="block group">
      <div class="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <div class="bg-gradient-to-r from-emerald-500 to-teal-600 h-24 flex items-end p-4">
          <div class="bg-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold text-emerald-600 shadow-md -mb-6">A</div>
        </div>
        <div class="p-4 pt-8">
          <p class="font-bold text-gray-900">Alfansa</p>
          <p class="text-xs text-gray-500 mb-2">Finance &amp; Markets Reporter · Anime &amp; Gaming Editor</p>
          <p class="text-sm text-gray-600 mb-3">Covers payments infrastructure, fintech disruption, market events, My Hero Academia, and gaming culture.</p>
          <div class="flex flex-wrap gap-1 mb-3">
            <span class="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded">Finance</span>
            <span class="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded">Markets</span>
            <span class="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded">Anime</span>
            <span class="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded">Gaming</span>
          </div>
          <p class="text-xs text-gray-400">Austin, TX</p>
        </div>
      </div>
    </a>

    <!-- Conan Boyle -->
    <a href="/authors/conan-boyle" class="block group">
      <div class="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <div class="bg-gradient-to-r from-purple-600 to-blue-600 h-24 flex items-end p-4">
          <div class="bg-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold text-purple-600 shadow-md -mb-6">C</div>
        </div>
        <div class="p-4 pt-8">
          <p class="font-bold text-gray-900">Conan Boyle</p>
          <p class="text-xs text-gray-500 mb-2">Founding Writer &amp; Science Journalist</p>
          <p class="text-sm text-gray-600 mb-3">NCSU journalism graduate specialising in biotechnology, CRISPR gene editing, medical research breakthroughs, and emerging technologies.</p>
          <div class="flex flex-wrap gap-1 mb-3">
            <span class="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded">Science</span>
            <span class="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded">Biotech</span>
            <span class="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded">CRISPR</span>
          </div>
          <p class="text-xs text-gray-400">Austin, TX</p>
        </div>
      </div>
    </a>

    <!-- Jack Sterling -->
    <a href="/authors/jack-sterling" class="block group">
      <div class="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <div class="bg-gradient-to-r from-slate-500 to-blue-500 h-24 flex items-end p-4">
          <div class="bg-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold text-slate-600 shadow-md -mb-6">J</div>
        </div>
        <div class="p-4 pt-8">
          <p class="font-bold text-gray-900">Jack Sterling</p>
          <p class="text-xs text-gray-500 mb-2">Journalist &amp; Reporter</p>
          <p class="text-sm text-gray-600 mb-3">General assignment coverage: breaking news, investigations, politics, and business.</p>
          <div class="flex flex-wrap gap-1 mb-3">
            <span class="text-xs bg-slate-50 text-slate-700 px-2 py-0.5 rounded">News</span>
            <span class="text-xs bg-slate-50 text-slate-700 px-2 py-0.5 rounded">Investigations</span>
            <span class="text-xs bg-slate-50 text-slate-700 px-2 py-0.5 rounded">Politics</span>
          </div>
        </div>
      </div>
    </a>
  </div>

  <!-- Editorial Commitment -->
  <div class="bg-gray-50 border border-gray-200 rounded-lg p-6 text-sm text-gray-600">
    <h3 class="font-bold text-gray-900 mb-2">Editorial Commitment</h3>
    <p class="mb-3">Every author at ObjectWire follows the same editorial standards: verification-first, primary-source-cited reporting. No content is published without rigorous fact-checking.</p>
    <div class="flex gap-4">
      <a href="/editorial-standards" class="text-blue-600 hover:underline">Editorial Standards</a>
      <a href="/corrections" class="text-blue-600 hover:underline">Corrections</a>
      <a href="/about" class="text-blue-600 hover:underline">About ObjectWire</a>
    </div>
  </div>
</div>
      `,
    } as any,
  ],
};

export default article;
