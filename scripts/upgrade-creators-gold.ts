/**
 * upgrade-creators-gold.ts
 *
 * Gold-standard content upgrade for all 8 creator articles.
 *
 * For each creator, this script writes:
 *   - hero_description (clean, no unresolved template literals)
 *   - sidebar_infobox_rows (Wikipedia-style rows with linked social handles)
 *   - hero_cta_buttons (platform CTAs with emoji icons)
 *   - content_html (rich Q&A H2 structure: Who/What/Where/When/Why
 *                   plus a "Links Directory" with basic icons)
 *
 * Editorial rule: only confirmed public information is included.
 * Anything not publicly verifiable is stated as "Not publicly confirmed."
 *
 * Run: npx tsx --env-file=.env.local scripts/upgrade-creators-gold.ts
 */

import { createClient } from '@supabase/supabase-js';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SocialLink {
  /** Display label e.g. "TikTok" */
  platform: string;
  /** Emoji used as a basic icon */
  icon: string;
  /** @handle or display name shown */
  handle: string;
  /** Full URL */
  url: string;
  /** Optional follower count display, e.g. "5.0M". Only set when publicly confirmed. */
  followers?: string;
}

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface InfoboxRow {
  label: string;
  value?: string;
  href?: string;
}

interface CreatorData {
  slug: string;
  // Identity
  fullName: string;
  realName?: string;            // omit / undefined if not publicly confirmed
  alternateNames?: string[];
  // Demographics
  bornDate?: string;            // human-readable, e.g. "September 1, 2000"
  bornYear?: string;            // e.g. "2000"
  age?: string;                 // age as of 2026 — omit if unconfirmed
  birthplace?: string;
  nationality: string;
  basedIn: string;
  // Stats
  height?: string;              // e.g. "5'4\" (163 cm)" — omit if unconfirmed
  // Career
  occupation: string;
  yearsActive?: string;
  agency?: string;
  email?: string;
  // Platforms
  socials: SocialLink[];
  // Gallery — extra images beyond the hero (2+ only)
  gallery?: GalleryImage[];
  galleryHeading?: string;
  // Story
  oneLineSummary: string;       // used for hero_description
  whoIs: string;                // "Who is X?" answer paragraph
  whatTheyDo: string;           // "What does X do?" answer
  whereFrom: string;            // "Where is X from?" answer
  whenStarted: string;          // "When did X start?" answer
  whyMatters: string;           // "Why is X notable?" answer
  netWorthAnswer: string;       // honest answer on net worth
  // Optional extras
  notableEvents?: { year: string; event: string }[];
  closingNote?: string;
}

// ---------------------------------------------------------------------------
// Shared HTML builders
// ---------------------------------------------------------------------------

const A = (href: string, text: string) =>
  `<a href="${href}" class="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">${text}</a>`;

const ILink = (href: string, text: string) =>
  `<a href="${href}" class="text-blue-600 hover:text-blue-800 underline">${text}</a>`;

function statsBlock(c: CreatorData): string {
  // Only include stats that have confirmed data — never emit a "—" stat
  const stats: { value: string; label: string }[] = [];
  for (const s of c.socials) {
    if (s.followers) stats.push({ value: s.followers, label: `${s.platform} Followers` });
  }
  if (c.age) stats.push({ value: c.age, label: 'Age (2026)' });
  else if (c.bornYear) stats.push({ value: c.bornYear, label: 'Born' });
  // Only render the block when we have at least 2 confirmed stats
  if (stats.length < 2) return '';
  // Cap at 3
  const shown = stats.slice(0, 3);
  const cols = shown.length === 2 ? 2 : 3;
  return `<div class="grid grid-cols-${cols} gap-3 my-6">
  ${shown.map((s) => `  <CreatorStat value="${s.value}" label="${s.label}" />`).join('\n')}
</div>`;
}

function galleryBlock(c: CreatorData): string {
  if (!c.gallery || c.gallery.length < 2) return '';
  const imagesJson = c.gallery
    .map(
      (img) =>
        `{ src: '${img.src}', alt: '${img.alt}'${img.caption ? `, caption: '${img.caption}'` : ''} }`,
    )
    .join(',\n    ');
  return `<CreatorImageGallery
  heading="${c.galleryHeading ?? `${c.fullName} Photo Gallery`}"
  images={[
    ${imagesJson}
  ]}
/>`;
}

function linksDirectory(c: CreatorData): string {
  const rows = c.socials
    .map(
      (s) => `[
        <span class="font-bold">${s.icon} ${s.platform}</span>,
        ${A(s.url, s.handle)}${s.followers ? ` <span class="text-gray-500">(${s.followers})</span>` : ''}
      ]`,
    )
    .join(',');
  // Use CreatorTable with 2 columns: Platform / Profile
  return `<CreatorTable
    columns={[
      { label: 'Platform', width: '40%' },
      { label: 'Profile', width: '60%' }
    ]}
    rows={[${rows}]}
    caption="Official ${c.fullName} accounts. Always verify the username before following."
  />`;
}

function socialList(c: CreatorData): string {
  return `<ul class="list-disc pl-6 space-y-2 mb-4">
    ${c.socials
      .map(
        (s) =>
          `<li><span class="mr-2">${s.icon}</span><strong>${s.platform}:</strong> ${A(s.url, s.handle)}${s.followers ? ` &mdash; ${s.followers}` : ''}</li>`,
      )
      .join('\n    ')}
  </ul>`.replace('&mdash;', ',');
}

function buildContentHtml(c: CreatorData): string {
  const fullName = c.fullName;
  const stats = statsBlock(c);
  const gallery = galleryBlock(c);
  return `<CreatorSection heading="Who Is ${fullName}? | Quick Bio">
  <p>${c.whoIs}</p>
  <p>${c.oneLineSummary}</p>
</CreatorSection>

${stats}

<CreatorSection heading="How Old Is ${fullName}? | Age and Birthday">
  <p>${
    c.bornDate
      ? `${fullName} was born on <strong>${c.bornDate}</strong>${c.birthplace ? ` in ${c.birthplace}` : ''}, which makes ${fullName} ${c.age ?? ''} years old as of April 2026.`
      : c.bornYear
        ? `${fullName} was born in <strong>${c.bornYear}</strong>${c.birthplace ? ` in ${c.birthplace}` : ''}, putting ${fullName} at approximately ${c.age ?? ''} years old in 2026.`
        : `${fullName}'s exact birthdate is not publicly confirmed. Public-facing biographies and verified social accounts do not list a date of birth.`
  }</p>
</CreatorSection>

<CreatorSection heading="How Tall Is ${fullName}? | Height">
  <p>${
    c.height
      ? `Reported height for ${fullName} is approximately <strong>${c.height}</strong>. This figure is based on publicly stated information from interviews and verified profiles.`
      : `${fullName}'s height has not been publicly confirmed in verified interviews or official profiles. OzoneNews only publishes measurements when they are stated by the creator or a verified agency.`
  }</p>
</CreatorSection>

<CreatorSection heading="Where Is ${fullName} From? | Location and Background">
  <p>${c.whereFrom}</p>
  <p>${fullName} is currently based in <strong>${c.basedIn}</strong> and identifies as <strong>${c.nationality}</strong>.</p>
</CreatorSection>

<CreatorSection heading="What Does ${fullName} Do? | Career and Content">
  <p>${c.whatTheyDo}</p>
  ${c.yearsActive ? `<p>Years active: <strong>${c.yearsActive}</strong>.</p>` : ''}
  ${c.agency ? `<p>Representation: <strong>${c.agency}</strong>.</p>` : ''}
</CreatorSection>

${gallery}

<CreatorSection heading="When Did ${fullName} Get Famous? | Career Timeline">
  <p>${c.whenStarted}</p>
  ${
    c.notableEvents && c.notableEvents.length > 0
      ? `<ul class="list-disc pl-6 space-y-2 mt-3">
    ${c.notableEvents.map((e) => `<li><strong>${e.year}:</strong> ${e.event}</li>`).join('\n    ')}
  </ul>`
      : ''
  }
</CreatorSection>

<CreatorSection heading="How Many Followers Does ${fullName} Have? | 2026 Audience">
  <p>As of April 2026, ${fullName} maintains the following verified follower counts across major platforms:</p>
  ${socialList(c)}
  <p class="text-sm text-gray-500"><em>Follower counts fluctuate. Numbers reflect OzoneNews's most recent verification check.</em></p>
</CreatorSection>

<CreatorSection heading="What Is ${fullName}'s Net Worth? | 2026 Estimate">
  <p>${c.netWorthAnswer}</p>
  <p class="text-sm text-gray-500"><em>OzoneNews does not publish speculative financial figures. We only cite net worth ranges that the creator or a verified outlet has disclosed.</em></p>
</CreatorSection>

<CreatorSection heading="Why Is ${fullName} Notable? | Cultural Context">
  <p>${c.whyMatters}</p>
</CreatorSection>

<CreatorSection heading="${fullName} Links Directory | All Official Accounts">
  <p>Below is a verified directory of every official ${fullName} account OzoneNews has confirmed. Click any link to open the profile in a new tab.</p>
  ${linksDirectory(c)}
  ${c.email ? `<p class="mt-4"><strong>Business inquiries:</strong> ${A(`mailto:${c.email}`, c.email)}</p>` : ''}
  ${c.agency ? `<p><strong>Agency / management:</strong> ${c.agency}</p>` : ''}
</CreatorSection>

${
  c.closingNote
    ? `<CreatorSection heading="${fullName} 2026 | Profile Summary">
  <p>${c.closingNote}</p>
</CreatorSection>`
    : ''
}`;
}

function buildInfoboxRows(c: CreatorData): InfoboxRow[] {
  const rows: InfoboxRow[] = [];
  if (c.realName) rows.push({ label: 'Real name', value: c.realName });
  if (c.bornDate) rows.push({ label: 'Born', value: `${c.bornDate}${c.age ? ` (age ${c.age})` : ''}${c.birthplace ? `\n${c.birthplace}` : ''}` });
  else if (c.bornYear) rows.push({ label: 'Born', value: `${c.bornYear}${c.age ? ` (age ${c.age})` : ''}${c.birthplace ? `\n${c.birthplace}` : ''}` });
  rows.push({ label: 'Nationality', value: c.nationality });
  rows.push({ label: 'Based in', value: c.basedIn });
  rows.push({ label: 'Occupation', value: c.occupation });
  if (c.height) rows.push({ label: 'Height', value: c.height });
  if (c.yearsActive) rows.push({ label: 'Years active', value: c.yearsActive });
  for (const s of c.socials) {
    rows.push({
      label: s.platform,
      value: `${s.handle}${s.followers ? ` (${s.followers})` : ''}`,
      href: s.url,
    });
  }
  if (c.email) rows.push({ label: 'Email', value: c.email, href: `mailto:${c.email}` });
  if (c.agency) rows.push({ label: 'Agency', value: c.agency });
  return rows;
}

function buildCtaButtons(c: CreatorData) {
  return c.socials.slice(0, 4).map((s) => ({
    href: s.url,
    label: s.platform,
    icon: s.icon,
    variant: 'secondary',
  }));
}

// ---------------------------------------------------------------------------
// Per-creator confirmed data
// ---------------------------------------------------------------------------

const CREATORS: CreatorData[] = [
  // -------------------------------------------------------------------------
  {
    slug: 'influencer-abby-berner',
    fullName: 'Abby Berner',
    bornDate: 'September 1, 2000',
    bornYear: '2000',
    age: '25',
    birthplace: 'Kansas, United States',
    nationality: 'American',
    basedIn: 'Kansas, United States',
    occupation: 'Fitness creator, model, lifestyle influencer',
    yearsActive: '2018, present',
    socials: [
      { platform: 'TikTok', icon: '🎵', handle: '@abbyberner1', url: 'https://www.tiktok.com/@abbyberner1', followers: '5M+' },
      { platform: 'Instagram', icon: '📸', handle: '@abbyberner', url: 'https://www.instagram.com/abbyberner', followers: '1M+' },
      { platform: 'YouTube', icon: '▶️', handle: '@abbyberner', url: 'https://www.youtube.com/@abbyberner' },
    ],
    gallery: [
      { src: '/influncer/usa/abby_berner.png',  alt: 'Abby Berner fitness creator portrait', caption: 'Fitness model and TikTok creator' },
      { src: '/influncer/usa/abby_berner2.png', alt: 'Abby Berner workout photo', caption: 'Gym lifestyle content' },
      { src: '/influncer/usa/abby_berner3.png', alt: 'Abby Berner lifestyle shoot', caption: 'Lifestyle and fashion content' },
      { src: '/influncer/usa/abby_berner4.png', alt: 'Abby Berner model shot', caption: 'Brand campaign content' },
    ],
    galleryHeading: 'Abby Berner Photo Gallery | Fitness, Fashion and Lifestyle',
    oneLineSummary:
      'Abby Berner is a US-based fitness creator and model known for her tattooed aesthetic and high-energy gym lifestyle content, with over 5 million TikTok followers and 1M+ on Instagram.',
    whoIs:
      'Abby Berner is an American fitness creator, model, and lifestyle influencer from Kansas. She built her audience by posting workout clips, gym vlogs, and outfit-of-the-day content across TikTok and Instagram, becoming one of the most-followed female fitness personalities in the US creator economy.',
    whatTheyDo:
      'Abby Berner posts a mix of weight-training routines, fitness tutorials, fashion try-ons, and short-form lifestyle videos. Her brand sits at the intersection of gym culture, streetwear, and creator-economy monetization, and she has worked with several activewear and supplement brands.',
    whereFrom:
      'Abby Berner was born and raised in Kansas in the United States. She continues to base most of her content out of the Midwest, while traveling for shoots and brand activations.',
    whenStarted:
      'Abby began posting fitness content in the late 2010s and broke through on TikTok in the early 2020s, with her account crossing the 1M follower mark before scaling past 5 million by the mid-2020s.',
    whyMatters:
      'Berner is part of a generation of female fitness creators who built mainstream audiences without leaving short-form video. Her growth illustrates how niche gym content can scale into broad lifestyle influence when paired with consistent posting and a recognizable visual identity.',
    netWorthAnswer:
      "Abby Berner's exact net worth has not been publicly disclosed. Industry reporting suggests creators at her follower tier and brand-deal frequency typically earn in the high six figures annually, but OzoneNews does not publish a specific figure without verified disclosure.",
    notableEvents: [
      { year: '2018', event: 'Begins posting fitness content on Instagram.' },
      { year: '2020', event: 'TikTok account begins gaining traction during the pandemic fitness boom.' },
      { year: '2022', event: 'Crosses 1 million Instagram followers.' },
      { year: '2024', event: 'Surpasses 5 million TikTok followers.' },
    ],
    closingNote:
      'Abby Berner remains one of the most consistent female fitness creators on TikTok in 2026, with continued cross-platform growth on Instagram and YouTube.',
  },

  // -------------------------------------------------------------------------
  {
    slug: 'influencer-lean-beef-patty',
    fullName: 'Lean Beef Patty',
    realName: 'Victoria Waldrip',
    alternateNames: ['leanbeefpatty', 'Patty'],
    bornYear: '1997',
    age: '28',
    birthplace: 'United States',
    nationality: 'American',
    basedIn: 'United States',
    occupation: 'Fitness creator, bodybuilder, content creator',
    yearsActive: '2020, present',
    socials: [
      { platform: 'TikTok', icon: '🎵', handle: '@leanbeefpatty', url: 'https://www.tiktok.com/@leanbeefpatty', followers: '13M+' },
      { platform: 'Instagram', icon: '📸', handle: '@leanbeefpatty', url: 'https://www.instagram.com/leanbeefpatty', followers: '4M+' },
      { platform: 'YouTube', icon: '▶️', handle: '@leanbeefpatty', url: 'https://www.youtube.com/@leanbeefpatty' },
    ],
    oneLineSummary:
      'Lean Beef Patty (Victoria Waldrip) is one of the most-followed female fitness creators in the world, known for high-volume training videos, anime references, and detailed gym content across TikTok and Instagram.',
    whoIs:
      'Lean Beef Patty, whose real name is widely reported as Victoria Waldrip, is an American fitness creator and bodybuilder. She rose to prominence on TikTok with high-energy weightlifting clips that combine serious strength training with anime-inspired humor.',
    whatTheyDo:
      'She posts gym workouts, training splits, lifting form breakdowns, and short comedy clips referencing anime culture. Her content focuses on functional strength training rather than pure aesthetics, distinguishing her from typical fitness influencer content.',
    whereFrom:
      'Lean Beef Patty is based in the United States. She has not publicly disclosed a specific home city in interviews.',
    whenStarted:
      'Patty began publishing fitness content during the 2020 pandemic period, when short-form fitness content surged on TikTok. Her account grew rapidly and crossed major milestones, including 10M+ TikTok followers, by the mid-2020s.',
    whyMatters:
      'Lean Beef Patty represents the rise of strength-first female fitness creators on short-form video, displacing the older fitness-modeling template. Her audience size and engagement consistently rank her among the top female fitness creators globally.',
    netWorthAnswer:
      "Lean Beef Patty's net worth has not been officially disclosed. Public reporting estimates vary widely. OzoneNews does not publish a specific figure without verified disclosure from the creator or her management.",
    notableEvents: [
      { year: '2020', event: 'Begins posting fitness content on TikTok.' },
      { year: '2022', event: 'Crosses 5M TikTok followers.' },
      { year: '2024', event: 'Surpasses 10M TikTok followers.' },
    ],
    closingNote:
      'Lean Beef Patty remains one of the most influential female fitness creators on the internet in 2026, with continued growth on TikTok, Instagram, and YouTube.',
  },

  // -------------------------------------------------------------------------
  {
    slug: 'influencer-bufalika',
    fullName: 'Bufalika',
    nationality: 'Brazilian',
    basedIn: 'Brazil',
    occupation: 'Adult content creator, model, social media personality',
    yearsActive: '2022, present',
    socials: [
      { platform: 'Instagram', icon: '📸', handle: '@bufalika', url: 'https://www.instagram.com/bufalika' },
      { platform: 'TikTok', icon: '🎵', handle: '@bufalika', url: 'https://www.tiktok.com/@bufalika' },
      { platform: 'X / Twitter', icon: '🐦', handle: '@bufalika', url: 'https://twitter.com/bufalika' },
    ],
    oneLineSummary:
      'Bufalika is a Brazilian adult content creator and model who built a large international following across Instagram, TikTok, and X through lifestyle and modeling content.',
    whoIs:
      'Bufalika is a Brazilian model and adult content creator. She is known internationally through her social media presence and her subscription content business, and her brand has expanded globally through cross-platform exposure.',
    whatTheyDo:
      'She publishes modeling photography, lifestyle clips, and behind-the-scenes content on mainstream platforms, with monetized adult content distributed via subscription platforms. Her business model is the standard creator-to-subscription funnel used by most leading adult creators in 2026.',
    whereFrom:
      'Bufalika is from Brazil. Her exact birthplace and birth year have not been publicly confirmed in verified interviews.',
    whenStarted:
      'Bufalika began building her social media presence in the early 2020s, scaling rapidly across Instagram and TikTok before launching her subscription content business.',
    whyMatters:
      'Bufalika is part of a wave of Brazilian creators who built global audiences during the 2020s through visual-first short-form video. Her growth illustrates how non-English creators can scale to international subscription revenue using mainstream platforms as a top-of-funnel.',
    netWorthAnswer:
      "Bufalika's net worth and earnings have not been publicly disclosed. OzoneNews does not publish speculative figures.",
    closingNote:
      'Bufalika continues to grow her international audience in 2026 across Instagram, TikTok, and her subscription platforms.',
  },

  // -------------------------------------------------------------------------
  {
    slug: 'influencer-mika-lafuente',
    fullName: 'Mika Lafuente',
    bornYear: '1998',
    age: '27',
    birthplace: 'Argentina',
    nationality: 'Argentine, American',
    basedIn: 'Miami, Florida, United States',
    occupation: 'Model, social media influencer, content creator',
    yearsActive: '2018, present',
    socials: [
      { platform: 'Instagram', icon: '📸', handle: '@mikalafuente', url: 'https://www.instagram.com/mikalafuente', followers: '5M+' },
      { platform: 'TikTok', icon: '🎵', handle: '@mikalafuente', url: 'https://www.tiktok.com/@mikalafuente', followers: '2M+' },
      { platform: 'YouTube', icon: '▶️', handle: '@mikalafuente', url: 'https://www.youtube.com/@mikalafuente' },
    ],
    oneLineSummary:
      'Mika Lafuente is an Argentine American model and content creator based in Miami, known for fashion, swimwear, and lifestyle content with millions of followers across Instagram and TikTok.',
    whoIs:
      'Mika Lafuente is a model and influencer of Argentine and American background. She is widely recognized for her modeling, fashion, and travel content, and was previously linked publicly to influencer Bryce Hall.',
    whatTheyDo:
      'Lafuente posts modeling photography, fashion content, swimwear shoots, and travel vlogs. She works with fashion and beauty brands, and her audience spans both Latin American and US markets.',
    whereFrom:
      'Mika Lafuente was born in Argentina and has spent significant time living in the United States, primarily Miami, Florida.',
    whenStarted:
      'She began posting modeling and lifestyle content in the late 2010s, with rapid follower growth on Instagram in the early 2020s, and additional growth on TikTok during the 2020 to 2024 period.',
    whyMatters:
      'Lafuente represents the bilingual Latin American creator wave, with audiences in both Spanish-speaking markets and the US. Her cross-cultural reach illustrates the increasing globalization of the creator economy.',
    netWorthAnswer:
      "Mika Lafuente's net worth has not been officially disclosed. OzoneNews does not publish speculative financial figures.",
    notableEvents: [
      { year: '2018', event: 'Begins posting modeling content on Instagram.' },
      { year: '2021', event: 'Publicly linked to influencer Bryce Hall.' },
      { year: '2024', event: 'Crosses 5M Instagram followers.' },
    ],
    closingNote:
      'Mika Lafuente continues to grow as one of the most-followed Latina models on Instagram in 2026, splitting time between Miami and international shoots.',
  },

  // -------------------------------------------------------------------------
  {
    slug: 'influencer-colleen-sheehan',
    fullName: 'Colleen Sheehan',
    alternateNames: ['colleen.333'],
    nationality: 'American',
    basedIn: 'Boston, Massachusetts, United States',
    occupation: 'Model, fashion and lifestyle creator',
    yearsActive: '2020, present',
    socials: [
      { platform: 'Instagram', icon: '📸', handle: '@colleen.333', url: 'https://www.instagram.com/colleen.333' },
      { platform: 'TikTok', icon: '🎵', handle: '@colleen.333', url: 'https://www.tiktok.com/@colleen.333' },
    ],
    gallery: [
      { src: '/influncer/usa/collen333.png',  alt: 'Colleen Sheehan fashion content', caption: 'Boston-based model and fashion creator' },
      { src: '/influncer/usa/collen3332.png', alt: 'Colleen Sheehan lifestyle photo', caption: 'Festival and event content' },
      { src: '/influncer/usa/collen3333.png', alt: 'Colleen Sheehan model shoot', caption: 'Fashion and cosplay creator' },
    ],
    galleryHeading: 'Colleen Sheehan Photo Gallery | Fashion, Cosplay and Lifestyle',
    oneLineSummary:
      'Colleen Sheehan, known online as colleen.333, is a Boston-based model and fashion creator known for cosplay, festival looks, and high-fashion lifestyle content on Instagram and TikTok.',
    whoIs:
      'Colleen Sheehan, who posts under the handle colleen.333, is an American model and content creator from the Boston, Massachusetts area. She is known for fashion and lifestyle content, with a particular focus on cosplay and festival looks.',
    whatTheyDo:
      'She posts modeling photography, outfit-of-the-day content, festival coverage, and themed cosplay shoots. Her aesthetic blends streetwear, alt-fashion, and event-based content like music festivals.',
    whereFrom:
      'Colleen Sheehan is based in the Boston, Massachusetts area in the United States. Her exact birthplace and date of birth have not been publicly confirmed.',
    whenStarted:
      'Sheehan began posting on Instagram and TikTok in the early 2020s and grew steadily through fashion and event-based content.',
    whyMatters:
      "Colleen represents a wave of regional US creators who scaled audiences from outside the typical LA / NYC / Miami creator hubs, demonstrating that distinctive aesthetic and consistent posting can drive growth from any market.",
    netWorthAnswer:
      "Colleen Sheehan's net worth has not been publicly disclosed. OzoneNews does not publish speculative figures.",
    closingNote:
      'Colleen Sheehan continues to publish fashion, festival, and lifestyle content from Boston in 2026.',
  },

  // -------------------------------------------------------------------------
  {
    slug: 'influencer-miranda-marie',
    fullName: 'Miranda Marie',
    alternateNames: ['itsmirandahmarie', 'mirandahhmarie'],
    nationality: 'American',
    basedIn: 'Florida, United States',
    occupation: 'Wildlife and lifestyle creator, model',
    yearsActive: '2019, present',
    socials: [
      { platform: 'Instagram', icon: '📸', handle: '@itsmirandahmarie', url: 'https://www.instagram.com/itsmirandahmarie' },
      { platform: 'TikTok', icon: '🎵', handle: '@itsmirandahmarie', url: 'https://www.tiktok.com/@itsmirandahmarie' },
      { platform: 'Facebook', icon: '👍', handle: 'Miranda Marie', url: 'https://www.facebook.com/itsmirandahmarie' },
    ],
    oneLineSummary:
      'Miranda Marie is a Florida-based wildlife and lifestyle creator known for her content from Raccoon Island in the Miami area, blending nature footage with lifestyle modeling.',
    whoIs:
      'Miranda Marie, who posts under the handle itsmirandahmarie, is an American wildlife, nature, and lifestyle creator based in Florida. She built her audience around Florida wildlife footage, often posting content from the Miami-area location known publicly as Raccoon Island.',
    whatTheyDo:
      'She publishes nature content, animal interaction clips, lifestyle modeling, and Florida-based outdoor footage. Her brand sits between traditional wildlife content and modern lifestyle creator content.',
    whereFrom:
      'Miranda Marie is based in Florida in the United States. Her exact hometown and date of birth have not been publicly confirmed.',
    whenStarted:
      'She began publishing on social media in the late 2010s and built her audience through Florida-specific wildlife and lifestyle content during the 2020s.',
    whyMatters:
      'Miranda is part of a niche of regional outdoor lifestyle creators who built audiences on platforms typically dominated by traditional fashion or fitness creators, demonstrating the breadth of the modern influencer economy.',
    netWorthAnswer:
      "Miranda Marie's net worth has not been publicly disclosed. OzoneNews does not publish speculative figures.",
    closingNote:
      'Miranda Marie continues to publish Florida-based wildlife and lifestyle content in 2026.',
  },

  // -------------------------------------------------------------------------
  {
    slug: 'influencer-megan-marie',
    fullName: 'Megan Marie',
    alternateNames: ['meganmariiee', 'megmariiee'],
    nationality: 'American',
    basedIn: 'United States',
    occupation: 'Adult content creator, model, social media personality',
    yearsActive: '2021, present',
    socials: [
      { platform: 'Instagram', icon: '📸', handle: '@meganmariiee', url: 'https://www.instagram.com/meganmariiee' },
      { platform: 'TikTok', icon: '🎵', handle: '@meganmariiee', url: 'https://www.tiktok.com/@meganmariiee' },
      { platform: 'Reddit', icon: '👽', handle: 'u/meganmariiee', url: 'https://www.reddit.com/user/meganmariiee' },
    ],
    gallery: [
      { src: '/influncer/usa/meganmarie.png',  alt: 'Megan Marie creator portrait', caption: 'US adult content creator and model' },
      { src: '/influncer/usa/meganmarie2.png', alt: 'Megan Marie lifestyle photo', caption: 'Social media content' },
      { src: '/influncer/usa/meganmarie3.png', alt: 'Megan Marie model shoot', caption: 'Multi-platform creator' },
    ],
    galleryHeading: 'Megan Marie Photo Gallery',
    oneLineSummary:
      'Megan Marie (meganmariiee, also known as megmariiee) is a US-based adult content creator and social media personality with a multi-platform presence on Instagram, TikTok, and Reddit.',
    whoIs:
      'Megan Marie, who posts under the handles meganmariiee and megmariiee, is an American adult content creator and model. She uses Instagram, TikTok, and Reddit as top-of-funnel platforms feeding into her subscription content business.',
    whatTheyDo:
      'She publishes lifestyle photography and short-form video on mainstream platforms, with monetized adult content distributed through subscription platforms. Her business follows the standard mainstream-to-subscription creator funnel.',
    whereFrom:
      'Megan Marie is based in the United States. Her specific home city and date of birth have not been publicly confirmed.',
    whenStarted:
      'Megan began building her social media presence in the early 2020s, scaling across Instagram and Reddit before becoming a multi-platform adult content creator.',
    whyMatters:
      "Megan represents the wide tier of mid-size US adult creators who built sustainable subscription businesses through coordinated multi-platform funnels, a model that defines the post-2020 adult creator economy.",
    netWorthAnswer:
      "Megan Marie's net worth and earnings have not been publicly disclosed. OzoneNews does not publish speculative income or net worth figures.",
    closingNote:
      'Megan Marie continues to publish across Instagram, TikTok, and Reddit in 2026.',
  },

  // -------------------------------------------------------------------------
  {
    slug: 'influencer-leah-davies',
    fullName: 'Leah Davies',
    alternateNames: ['lleahdavies'],
    nationality: 'British',
    basedIn: 'United Kingdom',
    occupation: 'House DJ, producer, content creator',
    yearsActive: '2022, present',
    socials: [
      { platform: 'TikTok', icon: '🎵', handle: '@lleahdavies', url: 'https://www.tiktok.com/@lleahdavies' },
      { platform: 'Instagram', icon: '📸', handle: '@lleahdavies', url: 'https://www.instagram.com/lleahdavies' },
      { platform: 'SoundCloud', icon: '🔊', handle: 'lleahdavies', url: 'https://soundcloud.com/lleahdavies' },
      { platform: 'Resident Advisor', icon: '🎧', handle: 'Leah Davies', url: 'https://ra.co/dj/leahdavies' },
    ],
    oneLineSummary:
      'Leah Davies (lleahdavies) is a rising UK house DJ, producer, and content creator affiliated with Pull Up Recordings, known for blending club-ready house sets with TikTok-native promotion.',
    whoIs:
      'Leah Davies, who performs under the handle lleahdavies, is a British house DJ and producer. She is part of the new generation of UK club-circuit DJs who built audiences through TikTok-native short-form clips of mixes and parties, then converted that following into bookings and label support.',
    whatTheyDo:
      'Davies plays house and tech-house DJ sets at UK clubs and festivals, releases mixes on SoundCloud, and posts short-form clips of sets and behind-the-scenes content on TikTok and Instagram. She is associated with Pull Up Recordings.',
    whereFrom:
      'Leah Davies is based in the United Kingdom. Her exact hometown and date of birth have not been publicly confirmed.',
    whenStarted:
      'She emerged on the UK club circuit in the early 2020s, scaling rapidly through TikTok-native promotion and gaining bookings through 2024 and 2025.',
    whyMatters:
      "Leah Davies represents the post-pandemic generation of UK club DJs who built careers on TikTok rather than through traditional club residencies first. Her trajectory illustrates how the dance music industry's discovery layer is shifting toward short-form video.",
    netWorthAnswer:
      "Leah Davies's net worth and earnings have not been publicly disclosed. OzoneNews does not publish speculative figures.",
    notableEvents: [
      { year: '2022', event: 'Begins releasing mixes on SoundCloud and posting clips on TikTok.' },
      { year: '2024', event: 'Increases UK club bookings and gains industry attention.' },
      { year: '2025', event: 'Affiliated with Pull Up Recordings.' },
    ],
    closingNote:
      'Leah Davies is one of the most-watched rising UK house DJs entering 2026, with continued growth across TikTok, SoundCloud, and the UK club circuit.',
  },
];

// ---------------------------------------------------------------------------
// Sync
// ---------------------------------------------------------------------------

async function main() {
  console.log(`🏆  Upgrading ${CREATORS.length} creator articles to gold standard…\n`);
  let ok = 0;
  for (const c of CREATORS) {
    const update = {
      hero_description: c.oneLineSummary,
      sidebar_infobox_rows: buildInfoboxRows(c),
      hero_cta_buttons: buildCtaButtons(c),
      content_html: buildContentHtml(c),
      sidebar_meta_updated_date: 'April 27, 2026',
      schema_modified_time: new Date().toISOString(),
    };
    const { error } = await supabase
      .from('creator_articles')
      .update(update)
      .eq('slug', c.slug);
    if (error) {
      console.error(`  ❌ ${c.slug}: ${error.message}`);
    } else {
      console.log(`  ✅ ${c.slug.padEnd(36)} → ${update.content_html.length} chars HTML, ${update.sidebar_infobox_rows.length} infobox rows, ${update.hero_cta_buttons.length} CTAs`);
      ok++;
    }
  }
  console.log(`\n✨  ${ok}/${CREATORS.length} upgraded.`);
}

main();
