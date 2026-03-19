import type { Article } from '../../content/types';

const article: Article = {
  title: 'About ObjectWire',
  slug: 'about',
  category: 'Reference',
  status: 'published',
  published_at: '2026-01-01',

  excerpt: 'ObjectWire is a verification-first intelligence platform that provides cited business and technology analysis.',
  tags: ['ObjectWire', 'About', 'Mission', 'Intelligence Platform'],

  author_name: 'ObjectWire Editorial',
  author_role: 'Editorial',
  author_slug: 'objectwire-editorial',
  category_color: '#6b7280',

  content: [
    {
      id: 'html1',
      type: 'html',
      content: `
<div class="max-w-4xl mx-auto">
  <!-- Hero -->
  <div class="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg p-10 mb-10">
    <h2 class="text-3xl font-bold mb-3">Precision Intelligence</h2>
    <p class="text-lg text-gray-300">For professionals who demand verified, source-cited reporting.</p>
  </div>

  <h2 class="text-2xl font-bold mb-4">Our Mission</h2>
  <p class="mb-4 text-gray-700 leading-relaxed">
    ObjectWire is a <strong>verification-first intelligence platform</strong> that provides cited business and technology analysis. We operate as a credibility engine, not a content aggregator. Every piece of content published undergoes rigorous verification using primary sources and custom language model processing specifically trained for fact-checking and citation validation.
  </p>
  <p class="mb-8 text-gray-700 leading-relaxed">
    Our mission is to reveal truth through transparent verification methodology and documented claims.
  </p>

  <h2 class="text-2xl font-bold mb-4">What We Provide</h2>
  <div class="grid md:grid-cols-2 gap-4 mb-10">
    <div class="bg-gray-50 border border-gray-200 rounded-lg p-5">
      <h3 class="font-bold text-gray-900 mb-2">Verified Intelligence</h3>
      <p class="text-sm text-gray-600">Every claim is traced to a primary source. No rumor aggregation, no unattributed takes.</p>
    </div>
    <div class="bg-gray-50 border border-gray-200 rounded-lg p-5">
      <h3 class="font-bold text-gray-900 mb-2">Event-Driven Reporting</h3>
      <p class="text-sm text-gray-600">Real-time coverage of market events, product launches, policy shifts, and security incidents.</p>
    </div>
    <div class="bg-gray-50 border border-gray-200 rounded-lg p-5">
      <h3 class="font-bold text-gray-900 mb-2">Structured Content</h3>
      <p class="text-sm text-gray-600">Wiki-style reference pages alongside news reporting. Deep profiles, timeline context, and structured analysis.</p>
    </div>
    <div class="bg-gray-50 border border-gray-200 rounded-lg p-5">
      <h3 class="font-bold text-gray-900 mb-2">API Access</h3>
      <p class="text-sm text-gray-600">Programmatic access to verified intelligence for integration with your workflows and dashboards.</p>
    </div>
  </div>

  <h2 class="text-2xl font-bold mb-4">Editorial Standards</h2>
  <p class="mb-6 text-gray-700 leading-relaxed">
    All content undergoes verification using primary sources, fact-checking, and citation validation before publication. Our editorial team holds every article to the same standard regardless of topic.
    <a href="/editorial-standards" class="text-blue-600 hover:underline ml-1">Read our editorial standards →</a>
  </p>

  <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
  <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
    <ul class="space-y-2 text-gray-700">
      <li><strong>Email:</strong> jack@objectwire.org</li>
      <li><strong>Phone:</strong> (575) 495-0323</li>
      <li><strong>Location:</strong> Austin, TX 78702</li>
    </ul>
  </div>
</div>
      `,
    } as any,
  ],
};

export default article;
