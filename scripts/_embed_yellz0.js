const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function main() {
  const { data, error } = await sb
    .from('creator_articles')
    .select('content_html')
    .eq('slug', 'influencer/yellz0')
    .single();

  if (error) { console.error(error.message); return; }

  // Find a good insertion point — after the "Rise to Fame" section
  const html = data.content_html;
  const marker = '</section>\n\n<section class="mt-10">\n  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Content Style and Brand</h2>';

  const youtubeEmbed = `</section>

<section class="mt-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Featured Video</h2>
  <div class="prose prose-lg max-w-none">
    <div class="relative w-full overflow-hidden rounded-xl shadow-lg" style="padding-bottom:56.25%">
      <iframe
        src="https://www.youtube.com/embed/PNa7V8DQ1E0"
        title="Yellz0 Featured Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="absolute inset-0 w-full h-full rounded-xl"
        style="border:0"
      ></iframe>
    </div>
  </div>
</section>

<section class="mt-10">
  <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-900 pb-2">Content Style and Brand</h2>`;

  if (!html.includes(marker)) {
    console.error('Could not find insertion marker');
    console.log('Looking for:', marker.slice(0, 100));
    // Show all h2s
    const h2s = html.match(/<h2[^>]*>.*?<\/h2>/g);
    console.log('H2s found:', h2s);
    return;
  }

  const updated = html.replace(marker, youtubeEmbed);

  const { error: updateErr } = await sb
    .from('creator_articles')
    .update({ content_html: updated, schema_modified_time: new Date().toISOString() })
    .eq('slug', 'influencer/yellz0');

  if (updateErr) { console.error('Update error:', updateErr.message); return; }
  console.log('SUCCESS: YouTube embed added to Yellz0 article');
}

main();
