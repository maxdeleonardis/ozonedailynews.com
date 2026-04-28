import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const s = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function main() {
  const hubs = [
    {
      slug: 'open-ai',
      title: 'OpenAI News | ChatGPT, GPT-5, AI Research 2026',
      subtitle: 'Verified coverage of OpenAI, ChatGPT, GPT-5, Sora, and the latest AI research developments',
      category: 'Tech',
      url: '/open-ai',
      content_html: `<div class="prose prose-lg max-w-none">
<h2>OpenAI Coverage</h2>
<p>ObjectWire News covers the latest OpenAI developments including ChatGPT updates, GPT-5 capabilities, Sora video generation, AI safety research, and enterprise deployments. All reporting is source-verified with primary references.</p>
</div>`,
    },
    {
      slug: 'elon-musk',
      title: 'Elon Musk News | Tesla, SpaceX, xAI, DOGE 2026',
      subtitle: 'Verified coverage of Elon Musk across Tesla, SpaceX, xAI, X (Twitter), and US policy',
      category: 'Tech',
      url: '/elon-musk',
      content_html: `<div class="prose prose-lg max-w-none">
<h2>Elon Musk Coverage</h2>
<p>ObjectWire News covers Elon Musk's business empire including Tesla manufacturing, SpaceX orbital missions, xAI research, X platform developments, and his role in US government policy. All reporting is source-verified.</p>
</div>`,
    },
  ];

  for (const hub of hubs) {
    const { error } = await s.from('article_pages').upsert(hub, { onConflict: 'slug' });
    if (error) {
      console.log(`❌ FAILED  ${hub.slug}: ${error.message}`);
    } else {
      console.log(`✅ UPSERTED ${hub.slug}`);
    }
  }
}

main().catch(console.error);
