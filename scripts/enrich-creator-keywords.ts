/**
 * enrich-creator-keywords.ts
 * Expands schema_keywords on each creator article to 16-20 long-tail variants
 * for SEO depth (age, height, net worth, platform handle, location, niche).
 */

import { createClient } from '@supabase/supabase-js';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const KEYWORDS: Record<string, string[]> = {
  'influencer-abby-berner': [
    'Abby Berner', 'Abby Berner age', 'Abby Berner age 2026', 'Abby Berner height',
    'Abby Berner net worth', 'Abby Berner net worth 2026', 'Abby Berner TikTok',
    'Abby Berner Instagram', 'Abby Berner Snapchat', 'Abby Berner Telegram',
    'Abby Berner OnlyFans', 'Abby Berner real name', 'Abby Berner biography',
    'Abby Berner fitness model', 'Abby Berner workout', 'Abby Berner boyfriend',
    'Abby Berner tattoos', 'US fitness creator TikTok', 'Abby Berner Kansas',
    'Abby Berner social media',
  ],
  'influencer-lean-beef-patty': [
    'Lean Beef Patty', 'Lean Beef Patty age', 'Lean Beef Patty age 2026',
    'Lean Beef Patty height', 'Lean Beef Patty net worth', 'Lean Beef Patty real name',
    'Victoria Waldrip', 'Victoria Waldrip Lean Beef Patty', 'Lean Beef Patty TikTok',
    'Lean Beef Patty Instagram', 'Lean Beef Patty YouTube', 'Lean Beef Patty Snapchat',
    'Lean Beef Patty Telegram', 'Lean Beef Patty workout', 'Lean Beef Patty diet',
    'Lean Beef Patty anime', 'female bodybuilding creator', 'Lean Beef Patty 2026',
    'Lean Beef Patty bodybuilding', 'leanbeefpatty TikTok',
  ],
  'influencer-bufalika': [
    'Bufalika', 'Bufalika age', 'Bufalika net worth', 'Bufalika OnlyFans',
    'Bufalika Instagram', 'Bufalika TikTok', 'Bufalika Telegram',
    'Bufalika real name', 'Bufalika biography', 'Bufalika 2026',
    'Bufalika earnings', 'Bufalika model', 'Bufalika lifestyle creator',
    'Bufalika Brazilian model', 'Bufalika social media', 'Bufalika fans',
    'OnlyFans creator Bufalika', 'Bufalika net worth 2026',
  ],
  'influencer-mika-lafuente': [
    'Mika Lafuente', 'Mika Lafuente age', 'Mika Lafuente age 2026',
    'Mika Lafuente height', 'Mika Lafuente net worth', 'Mika Lafuente Instagram',
    'Mika Lafuente TikTok', 'Mika Lafuente Snapchat', 'Mika Lafuente Telegram',
    'Mika Lafuente Bryce Hall', 'Mika Lafuente Argentina', 'Mika Lafuente boyfriend',
    'Mika Lafuente real name', 'Mika Lafuente biography', 'Mika Lafuente 2026',
    'Argentine American model', 'Mika Lafuente OnlyFans', 'Mika Lafuente Miami',
    'mikalafuente TikTok', 'Mika Lafuente influencer',
  ],
  'influencer-colleen-sheehan': [
    'Colleen Sheehan', 'colleen.333', 'Colleen Sheehan age', 'Colleen Sheehan age 2026',
    'Colleen Sheehan height', 'Colleen Sheehan net worth', 'Colleen Sheehan Instagram',
    'Colleen Sheehan TikTok', 'Colleen Sheehan real name', 'Colleen Sheehan Boston',
    'Colleen Sheehan biography', 'Colleen Sheehan 2026', 'colleen.333 Instagram',
    'colleen.333 TikTok', 'colleen 333 model', 'Boston influencer model',
    'cosplay fashion creator', 'festival influencer Instagram',
    'Colleen Sheehan boyfriend', 'Colleen Sheehan Massachusetts',
  ],
  'influencer-miranda-marie': [
    'Miranda Marie', 'itsmirandahmarie', 'mirandahhmarie', 'Miranda Marie age',
    'Miranda Marie age 2026', 'Miranda Marie height', 'Miranda Marie net worth',
    'Miranda Marie Instagram', 'Miranda Marie TikTok', 'Miranda Marie Twitch',
    'Miranda Marie OFTV', 'Miranda Marie Florida', 'Miranda Marie biography',
    'Miranda Marie 2026', 'Raccoon Island Miami', 'Miranda Marie wildlife',
    'Florida nature creator', 'itsmirandahmarie Instagram', 'OFTV Miranda Marie',
    'Miranda Marie Facebook',
  ],
  'influencer-megan-marie': [
    'Megan Marie', 'meganmariiee', 'megmariiee', 'Megan Marie McCarthy',
    'Megan Marie age', 'Megan Marie age 2026', 'Megan Marie net worth',
    'Megan Marie OnlyFans', 'Megan Marie Instagram', 'Megan Marie Reddit',
    'Megan Marie real name', 'Megan Marie biography', 'Megan Marie 2026',
    'meganmariiee OnlyFans', 'meganmariiee Instagram', 'megmariiee OnlyFans',
    'Megan Marie linktree', 'OnlyFans creator Megan', 'meganmariiee Reddit',
    'Megan McCarthy creator',
  ],
  'influencer-leah-davies': [
    'Leah Davies', 'Leah Davies DJ', 'lleahdavies', 'lleahdavies DJ',
    'Leah Davies TikTok', 'Leah Davies Instagram', 'Leah Davies SoundCloud',
    'Leah Davies Resident Advisor', 'Leah Davies age', 'Leah Davies age 2026',
    'Leah Davies UK DJ', 'Leah Davies house DJ', 'Leah Davies Pull Up Recordings',
    'Leah Davies bookings', 'Leah Davies Spotify', 'UK house DJ TikTok',
    'UK female DJ 2026', 'lleahdavies TikTok', 'lleahdavies Instagram',
    'rising UK house DJ',
  ],
};

async function main() {
  console.log(`🎯  Enriching keywords on ${Object.keys(KEYWORDS).length} creator articles…\n`);
  let ok = 0;
  for (const [slug, keywords] of Object.entries(KEYWORDS)) {
    const { error } = await supabase
      .from('creator_articles')
      .update({ schema_keywords: keywords })
      .eq('slug', slug);
    if (error) {
      console.error(`  ❌ ${slug}: ${error.message}`);
    } else {
      console.log(`  ✅ ${slug.padEnd(37)} → ${keywords.length} keywords`);
      ok++;
    }
  }
  console.log(`\n✨  ${ok}/${Object.keys(KEYWORDS).length} updated.`);
}

main();
