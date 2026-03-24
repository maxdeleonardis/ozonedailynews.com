/**
 * One-shot script: seed the articles table with a newsarticle-test row
 * so that /newsarticle/test renders via NewsArticleDB.
 *
 * Run: npx tsx --env-file=.env.local scripts/_seed-newsarticle-test.ts
 */
import { createClient } from '@supabase/supabase-js';

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const content_html = `
<p class="text-lg leading-relaxed mb-6">
  This is a live end-to-end verification article for the <strong>NewsArticle</strong> component
  pipeline. It confirms that <code>NewsArticleDB</code> correctly fetches content from the
  <code>articles</code> Supabase table and renders it via the <code>NewsArticle</code> display
  component — including hero images, author cards, tags, reaction bars, and comments.
</p>

<h2 class="text-2xl font-bold mb-3 mt-8">What This Page Tests</h2>
<ul class="list-disc list-inside space-y-2 mb-6 ml-4">
  <li>✅ <strong>DB fetch</strong> — <code>NewsArticleDB</code> reads slug <code>newsarticle-test</code> from <code>articles</code> table</li>
  <li>✅ <strong>Component render</strong> — <code>NewsArticle</code> displays title, subtitle, category, author, hero image, tags</li>
  <li>✅ <strong>Dynamic route</strong> — <code>export const dynamic = 'force-dynamic'</code> ensures fresh reads</li>
  <li>✅ <strong>Content HTML</strong> — <code>dangerouslySetInnerHTML</code> injects this body content</li>
  <li>✅ <strong>SEO metadata</strong> — title, description, og:image, canonical URL all set</li>
</ul>

<h2 class="text-2xl font-bold mb-3 mt-8">Component Architecture</h2>
<p class="mb-4 leading-relaxed">
  The <strong>NewsArticle</strong> component is designed for fast-moving news: breaking stories,
  influencer coverage, entertainment, technology announcements, and trending topics. It features:
</p>
<ul class="list-disc list-inside space-y-2 mb-6 ml-4">
  <li><strong>Hero image</strong> with caption and photo credit</li>
  <li><strong>Topic tag badge</strong> with color-coded category icons</li>
  <li><strong>Breaking / Trending / Exclusive</strong> flag badges</li>
  <li><strong>Author card</strong> with avatar, role, bio, and Twitter link</li>
  <li><strong>Inline newsletter signup</strong></li>
  <li><strong>ReactionBar</strong> — emoji reactions synced to Supabase</li>
  <li><strong>DiscordComments</strong> — embedded comment section</li>
</ul>

<h2 class="text-2xl font-bold mb-3 mt-8">Pipeline Flow</h2>
<ol class="list-decimal list-inside space-y-2 mb-6 ml-4">
  <li>Author writes full article in <code>app/newsarticle/test/page.tsx</code> using <code>&lt;NewsArticle&gt;</code> components</li>
  <li><code>npm run wiki:migrate</code> extracts content to Supabase <code>articles</code> table</li>
  <li><code>npm run wiki:trim</code> replaces the file with a <code>&lt;NewsArticleDB&gt;</code> stub</li>
  <li>Page renders dynamically from DB on every request</li>
</ol>

<h2 class="text-2xl font-bold mb-3 mt-8">Status</h2>
<p class="leading-relaxed">
  If you can read this page at <strong>/newsarticle/test</strong>, the pipeline is working correctly.
  The <code>articles</code> table row with <code>slug = "newsarticle-test"</code> exists and is
  being served via <code>NewsArticleDB</code>.
</p>
`.trim();

async function main() {
  console.log('Seeding newsarticle-test in articles table...');

  const { error } = await sb
    .from('articles')
    .upsert({
      slug: 'newsarticle-test',
      title: 'NewsArticle Component — Pipeline Verification',
      subtitle: 'End-to-end test confirming NewsArticleDB fetches from Supabase and renders correctly',
      category: 'Technology',
      category_color: 'blue',
      topic_tag: 'technology',
      publish_date: 'March 23, 2026',
      read_time: '2 min read',
      author_name: 'ObjectWire Editorial',
      author_role: 'Editorial Team',
      author_bio: 'The ObjectWire editorial team covers technology, news, and culture.',
      trending: false,
      breaking: false,
      exclusive: false,
      tags: ['pipeline', 'test', 'newsarticle', 'supabase', 'objectwire'],
      url: '/newsarticle/test',
      content_html,
    }, { onConflict: 'slug' });

  if (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }

  console.log('✓ newsarticle-test seeded successfully');
}

main();
