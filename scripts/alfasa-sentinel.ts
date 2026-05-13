/**
 * alfasa-sentinel.ts
 *
 * The Alfasa Sentinel â€” E-E-A-T quality gate for the wiki:publish pipeline.
 *
 * Runs BEFORE any Supabase write. If a hard block is triggered, publish is
 * aborted with a detailed report. Warnings are printed but do not block.
 *
 * Checks performed:
 *   HARD BLOCKS (abort publish)
 *     [H1] No author_name or author_slug
 *     [H2] No published_at timestamp
 *     [H3] content_html under MIN_WORD_COUNT words
 *     [H4] Em dash detected in title, subtitle, or content
 *     [H5] No metadata.description or under 130 chars
 *     [H6] No canonical URL in metadata.alternates
 *     [H7] content_html has no <h2> headings (body has no structure)
 *     [H8] Banned AI boilerplate phrases detected in content
 *
 *   WARNINGS (printed, do not block)
 *     [W1] Word count under IDEAL_WORD_COUNT (600)
 *     [W2] No internal links found in content_html
 *     [W3] metadata.description over 155 chars (gets truncated by Google)
 *     [W4] No tags array or under 4 tags
 *     [W5] thumbnail_src missing (no image = no Top Stories eligibility)
 *     [W6] No <h2> count under 2 (thin structure)
 *     [W7] title over 60 chars (gets truncated in SERPs)
 *     [W8] No external source links (YMYL content needs citations)
 *     [W9] author_slug not found in known authors list
 *
 *   E-E-A-T SCORE
 *     Printed after every publish attempt. 0-100 score based on signals present.
 *     Does not block publish but provides a record of content quality over time.
 *
 * Usage (called internally by wiki-publish.ts):
 *   import { runSentinel } from './alfasa-sentinel';
 *   const result = runSentinel(parsedArticle, sourceFile);
 *   if (!result.pass) process.exit(1);
 *
 * Can also be run standalone:
 *   npm run sentinel -- --file app/your/path/page.tsx
 */

import * as fs from 'fs';
import * as path from 'path';

// â”€â”€ Configuration â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const MIN_WORD_COUNT = 300;   // Hard block below this
const IDEAL_WORD_COUNT = 600; // Warning below this
const MIN_DESC_LENGTH = 130;
const MAX_DESC_LENGTH = 155;
const MAX_TITLE_LENGTH = 60;
const MIN_TAGS = 4;

// Known author slugs â€” add new authors here when their /authors/[slug] page is created
const KNOWN_AUTHORS: string[] = [
  'michael-cripe',
  'jack-sterling',
  'objectwire-investigative-desk',
  'objectwire-influencer-desk',
  'objectwire-editorial',
  'alysa-rose',
];

// Banned AI boilerplate phrases â€” content containing these is flagged
// These are the most common signals Google's HCU classifier penalizes
const BANNED_PHRASES: string[] = [
  'it is worth noting',
  'it is important to note',
  'it is important to understand',
  'in conclusion',
  'in summary',
  'to summarize',
  'as an ai',
  'i cannot',
  'as we can see',
  'it goes without saying',
  'needless to say',
  'at the end of the day',
  'this is a comprehensive',
  'this article will explore',
  'in this article',
  'dive deep into',
  'delve into',
  'the world of',
  'game-changing',
  'revolutionize',
  'groundbreaking research',
  'it\'s worth mentioning',
  'it should be noted',
  'leverage',         // only flagged in non-finance contexts â€” soft check
];

// YMYL categories â€” these trigger stricter W8 (source citation) warnings
const YMYL_CATEGORIES = [
  'News', 'Politics', 'Finance', 'Crypto', 'Science', 'World', 'Copyright',
];

// â”€â”€ Types â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export interface SentinelInput {
  // Core article fields (from wiki-publish parsed payload)
  title?: string;
  subtitle?: string;
  author_name?: string;
  author_slug?: string;
  published_at?: string;
  content_html?: string;
  tags?: string[];
  thumbnail_src?: string;
  category?: string;
  url?: string;
  // From metadata block
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  // Source file path for line references
  filePath?: string;
}

export interface SentinelIssue {
  code: string;
  level: 'BLOCK' | 'WARN';
  message: string;
  fix: string;
}

export interface SentinelResult {
  pass: boolean;          // false = publish aborted
  score: number;          // 0-100 E-E-A-T score
  grade: string;          // A / B / C / D / F
  blocks: SentinelIssue[];
  warnings: SentinelIssue[];
  wordCount: number;
  h2Count: number;
  internalLinkCount: number;
  externalLinkCount: number;
}

// â”€â”€ ANSI helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const c = {
  red:    (s: string) => `\x1b[31m${s}\x1b[0m`,
  yellow: (s: string) => `\x1b[33m${s}\x1b[0m`,
  green:  (s: string) => `\x1b[32m${s}\x1b[0m`,
  cyan:   (s: string) => `\x1b[36m${s}\x1b[0m`,
  bold:   (s: string) => `\x1b[1m${s}\x1b[0m`,
  gray:   (s: string) => `\x1b[90m${s}\x1b[0m`,
  blue:   (s: string) => `\x1b[34m${s}\x1b[0m`,
};

// â”€â”€ Utilities â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function countWords(html: string): number {
  return stripHtml(html).split(/\s+/).filter(Boolean).length;
}

function countH2(html: string): number {
  return (html.match(/<h2[\s>]/gi) || []).length;
}

function countInternalLinks(html: string): number {
  const matches = html.match(/href=["']\/[^"']+["']/g) || [];
  return matches.length;
}

function countExternalLinks(html: string): number {
  const matches = html.match(/href=["']https?:\/\/(?!www\.objectwire\.org)[^"']+["']/g) || [];
  return matches.length;
}

function detectEmDash(text: string): boolean {
  return /â€”|â€“/.test(text);
}

function detectBannedPhrases(html: string): string[] {
  const plain = stripHtml(html).toLowerCase();
  return BANNED_PHRASES.filter(p => plain.includes(p.toLowerCase()));
}

function gradeScore(score: number): string {
  if (score >= 85) return 'A';
  if (score >= 70) return 'B';
  if (score >= 55) return 'C';
  if (score >= 40) return 'D';
  return 'F';
}

function scoreColor(grade: string): (s: string) => string {
  if (grade === 'A') return c.green;
  if (grade === 'B') return c.cyan;
  if (grade === 'C') return c.yellow;
  return c.red;
}

// â”€â”€ E-E-A-T Score Calculator â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Max 100 points. Each signal adds points.

function calcEEATScore(input: SentinelInput, stats: {
  wordCount: number;
  h2Count: number;
  internalLinks: number;
  externalLinks: number;
  bannedPhrases: string[];
}): number {
  let score = 0;

  // Experience signals (max 20)
  if (input.author_name) score += 8;
  if (input.author_slug && KNOWN_AUTHORS.includes(input.author_slug)) score += 7;
  if (stats.externalLinks >= 1) score += 5; // cited a source = experience

  // Expertise signals (max 20)
  if (stats.wordCount >= 800) score += 10;
  else if (stats.wordCount >= 600) score += 7;
  else if (stats.wordCount >= 400) score += 4;
  if (stats.h2Count >= 3) score += 5;
  else if (stats.h2Count >= 2) score += 3;
  if (stats.bannedPhrases.length === 0) score += 5; // no AI boilerplate

  // Authoritativeness signals (max 30)
  if (input.tags && input.tags.length >= 4) score += 5;
  if (input.thumbnail_src) score += 5;
  if (stats.internalLinks >= 4) score += 10;
  else if (stats.internalLinks >= 2) score += 6;
  else if (stats.internalLinks >= 1) score += 3;
  if (stats.externalLinks >= 2) score += 5;
  else if (stats.externalLinks >= 1) score += 3;
  if (input.category && YMYL_CATEGORIES.includes(input.category) && stats.externalLinks >= 1) score += 5;

  // Trustworthiness signals (max 30)
  if (input.published_at) score += 5;
  if (input.canonicalUrl) score += 5;
  if (input.metaDescription &&
      input.metaDescription.length >= MIN_DESC_LENGTH &&
      input.metaDescription.length <= MAX_DESC_LENGTH) score += 8;
  if (input.metaTitle && input.metaTitle.length <= MAX_TITLE_LENGTH) score += 5;
  if (input.subtitle) score += 4;
  if (input.url) score += 3;

  return Math.min(100, score);
}

// â”€â”€ Main Sentinel Function â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export function runSentinel(input: SentinelInput): SentinelResult {
  const blocks: SentinelIssue[] = [];
  const warnings: SentinelIssue[] = [];

  const html = input.content_html || '';
  const wordCount = countWords(html);
  const h2Count = countH2(html);
  const internalLinkCount = countInternalLinks(html);
  const externalLinkCount = countExternalLinks(html);
  const bannedFound = detectBannedPhrases(html);

  // â”€â”€ HARD BLOCKS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  if (!input.author_name || !input.author_slug) {
    blocks.push({
      code: 'H1',
      level: 'BLOCK',
      message: 'No author_name or author_slug. Every article must have a named author.',
      fix: 'Add author_name and author_slug fields. Create /authors/[slug] page if it does not exist.',
    });
  }

  if (!input.published_at) {
    blocks.push({
      code: 'H2',
      level: 'BLOCK',
      message: 'No published_at timestamp. Google requires a publish date on all news articles.',
      fix: 'Add published_at as ISO-8601: "2026-05-05T12:00:00Z"',
    });
  }

  if (wordCount < MIN_WORD_COUNT) {
    blocks.push({
      code: 'H3',
      level: 'BLOCK',
      message: `content_html is ${wordCount} words. Minimum is ${MIN_WORD_COUNT} words.`,
      fix: `Expand the article to at least ${MIN_WORD_COUNT} words. Target ${IDEAL_WORD_COUNT}+ for competitive queries.`,
    });
  }

  const titleForEmDash = [input.title, input.subtitle, input.metaTitle].filter(Boolean).join(' ');
  if (detectEmDash(titleForEmDash)) {
    blocks.push({
      code: 'H4',
      level: 'BLOCK',
      message: 'Em dash (â€”) or en dash (â€“) detected in title, subtitle, or metadata title.',
      fix: 'Replace â€” with | in headings, or rewrite the phrase. See OStandard em dash substitution table.',
    });
  }

  if (!input.metaDescription || input.metaDescription.length < MIN_DESC_LENGTH) {
    blocks.push({
      code: 'H5',
      level: 'BLOCK',
      message: `metadata.description is ${input.metaDescription?.length ?? 0} chars. Minimum is ${MIN_DESC_LENGTH}.`,
      fix: `Write a description of ${MIN_DESC_LENGTH}-${MAX_DESC_LENGTH} chars with the primary keyword in the first 60 chars.`,
    });
  }

  if (!input.canonicalUrl) {
    blocks.push({
      code: 'H6',
      level: 'BLOCK',
      message: 'No canonical URL found in metadata.alternates.canonical.',
      fix: 'Add alternates: { canonical: "https://www.objectwire.org/your/path" } to the metadata export.',
    });
  }

  if (html.length > 200 && h2Count === 0) {
    blocks.push({
      code: 'H7',
      level: 'BLOCK',
      message: 'No <h2> headings found in content_html. Articles must have structural headings.',
      fix: 'Add at least 2 <h2> headings to divide the article into sections. Use keyword-rich, specific headings.',
    });
  }

  if (bannedFound.length > 0) {
    blocks.push({
      code: 'H8',
      level: 'BLOCK',
      message: `AI boilerplate phrases detected: "${bannedFound.slice(0, 3).join('", "')}"${bannedFound.length > 3 ? ` (+${bannedFound.length - 3} more)` : ''}.`,
      fix: 'Remove or rewrite these phrases. They are HCU classifier signals. Rewrite to be direct and specific.',
    });
  }

  // â”€â”€ WARNINGS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  if (wordCount < IDEAL_WORD_COUNT && wordCount >= MIN_WORD_COUNT) {
    warnings.push({
      code: 'W1',
      level: 'WARN',
      message: `Word count is ${wordCount}. Target is ${IDEAL_WORD_COUNT}+ for competitive queries.`,
      fix: 'Consider expanding with additional sections, data points, or context.',
    });
  }

  if (internalLinkCount === 0) {
    warnings.push({
      code: 'W2',
      level: 'WARN',
      message: 'No internal links found in content_html.',
      fix: 'Add at least 4 internal links: hub backlink, 2 cluster siblings, author page link.',
    });
  } else if (internalLinkCount < 4) {
    warnings.push({
      code: 'W2',
      level: 'WARN',
      message: `Only ${internalLinkCount} internal link(s) found. Minimum recommended is 4.`,
      fix: 'Add hub backlink, cluster sibling links, and author page link.',
    });
  }

  if (input.metaDescription && input.metaDescription.length > MAX_DESC_LENGTH) {
    warnings.push({
      code: 'W3',
      level: 'WARN',
      message: `metadata.description is ${input.metaDescription.length} chars. Google truncates at ${MAX_DESC_LENGTH}.`,
      fix: `Shorten to ${MIN_DESC_LENGTH}-${MAX_DESC_LENGTH} chars.`,
    });
  }

  if (!input.tags || input.tags.length < MIN_TAGS) {
    warnings.push({
      code: 'W4',
      level: 'WARN',
      message: `Only ${input.tags?.length ?? 0} tag(s). Minimum is ${MIN_TAGS} proper noun tags.`,
      fix: 'Add 4-8 tags as proper nouns (no generic terms like "news" or "update").',
    });
  }

  if (!input.thumbnail_src) {
    warnings.push({
      code: 'W5',
      level: 'WARN',
      message: 'No thumbnail_src. Articles without images are ineligible for Google Top Stories.',
      fix: 'Add a thumbnail_src URL (hosted image, min 1200x675px) or a thumbnail_src path.',
    });
  }

  if (h2Count < 2 && h2Count > 0) {
    warnings.push({
      code: 'W6',
      level: 'WARN',
      message: `Only ${h2Count} <h2> heading(s). Target is 3+ for well-structured articles.`,
      fix: 'Add more <h2> sections to improve structure. Use specific, keyword-rich headings.',
    });
  }

  if (input.metaTitle && input.metaTitle.length > MAX_TITLE_LENGTH) {
    warnings.push({
      code: 'W7',
      level: 'WARN',
      message: `metadata.title is ${input.metaTitle.length} chars. Google truncates at ${MAX_TITLE_LENGTH}.`,
      fix: `Shorten to ${MAX_TITLE_LENGTH} chars or under. Format: Primary Keyword | Specific Detail`,
    });
  }

  const isYMYL = input.category && YMYL_CATEGORIES.includes(input.category);
  if (externalLinkCount === 0) {
    warnings.push({
      code: 'W8',
      level: 'WARN',
      message: isYMYL
        ? `No external source links. YMYL category "${input.category}" requires citations.`
        : 'No external source links. Adding primary source citations strengthens E-E-A-T.',
      fix: 'Add at least 1-2 external source links with target="_blank" rel="noopener noreferrer".',
    });
  }

  if (input.author_slug && !KNOWN_AUTHORS.includes(input.author_slug)) {
    warnings.push({
      code: 'W9',
      level: 'WARN',
      message: `author_slug "${input.author_slug}" is not in the known authors list.`,
      fix: `Create /authors/${input.author_slug}/page.tsx and add "${input.author_slug}" to KNOWN_AUTHORS in alfasa-sentinel.ts.`,
    });
  }

  // â”€â”€ GEO WARNINGS (Generative Engine Optimization) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // These do not block publish but lower the chance of being cited by
  // ChatGPT, Perplexity, Copilot, and Claude.

  const hasDirectAnswer = html.includes('DirectAnswer') || html.includes('direct-answer') ||
    html.includes('Quick Answer') || html.includes('data-speakable');
  if (!hasDirectAnswer && wordCount > 200) {
    warnings.push({
      code: 'GEO1',
      level: 'WARN',
      message: 'No DirectAnswer block detected. AI systems prefer articles that answer the core question in the first 2-3 sentences.',
      fix: 'Add <DirectAnswer answer="..." /> as the first element in the article body.',
    });
  }

  const hasKeyTakeaways = html.includes('KeyTakeaways') || html.includes('key-takeaways') ||
    html.includes('Key Takeaways') || html.includes('TLDR') || html.includes('TL;DR');
  if (!hasKeyTakeaways && wordCount > 400) {
    warnings.push({
      code: 'GEO2',
      level: 'WARN',
      message: 'No KeyTakeaways block detected. Bullet-point summaries are the most commonly extracted element by AI citation systems.',
      fix: 'Add <KeyTakeaways items={["...", "...", "..."]} /> after the opening paragraph.',
    });
  }

  const hasCitationBlock = html.includes('CitationBlock') || html.includes('citation-block') ||
    html.includes('FAQAccordion') || html.includes('FAQSchema');
  if (!hasCitationBlock && wordCount > 600) {
    warnings.push({
      code: 'GEO3',
      level: 'WARN',
      message: 'No CitationBlock or FAQAccordion detected. Structured answer units dramatically increase AI citation frequency.',
      fix: 'Add at least one <CitationBlock> for a key claim, or a <FAQAccordion> at the end of the article.',
    });
  }

  // â”€â”€ E-E-A-T SCORE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  const score = calcEEATScore(input, {
    wordCount,
    h2Count,
    internalLinks: internalLinkCount,
    externalLinks: externalLinkCount,
    bannedPhrases: bannedFound,
  });

  const grade = gradeScore(score);
  const pass = blocks.length === 0;

  return {
    pass,
    score,
    grade,
    blocks,
    warnings,
    wordCount,
    h2Count,
    internalLinkCount,
    externalLinkCount,
  };
}

// â”€â”€ Print Report â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export function printSentinelReport(result: SentinelResult, articleTitle?: string): void {
  const gradeStr = result.grade;
  const gradeColorFn = scoreColor(gradeStr);

  console.log('');
  console.log(c.bold('â”â”â” ALFASA SENTINEL â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”'));
  if (articleTitle) {
    console.log(c.gray(`    Article: ${articleTitle}`));
  }
  console.log('');

  // Stats line
  console.log(
    `    ${c.cyan('Words:')} ${result.wordCount}  ` +
    `${c.cyan('H2s:')} ${result.h2Count}  ` +
    `${c.cyan('Internal links:')} ${result.internalLinkCount}  ` +
    `${c.cyan('External links:')} ${result.externalLinkCount}`
  );
  console.log('');

  // E-E-A-T Score
  const bar = 'â–ˆ'.repeat(Math.round(result.score / 5)) + 'â–‘'.repeat(20 - Math.round(result.score / 5));
  console.log(`    E-E-A-T Score: ${gradeColorFn(c.bold(`${result.score}/100  [${gradeStr}]`))}  ${gradeColorFn(bar)}`);
  console.log('');

  // Blocks
  if (result.blocks.length > 0) {
    console.log(c.red(c.bold(`    âœ— ${result.blocks.length} HARD BLOCK${result.blocks.length > 1 ? 'S' : ''} â€” publish aborted`)));
    result.blocks.forEach(b => {
      console.log('');
      console.log(c.red(`      [${b.code}] ${b.message}`));
      console.log(c.gray(`             Fix: ${b.fix}`));
    });
    console.log('');
  }

  // Warnings
  if (result.warnings.length > 0) {
    console.log(c.yellow(c.bold(`    âš   ${result.warnings.length} WARNING${result.warnings.length > 1 ? 'S' : ''}`)));
    result.warnings.forEach(w => {
      console.log('');
      console.log(c.yellow(`      [${w.code}] ${w.message}`));
      console.log(c.gray(`             Fix: ${w.fix}`));
    });
    console.log('');
  }

  if (result.blocks.length === 0 && result.warnings.length === 0) {
    console.log(c.green(c.bold('    âœ“ All checks passed. Article meets E-E-A-T standards.')));
    console.log('');
  }

  if (result.pass) {
    console.log(c.green(`    âœ“ SENTINEL PASSED â€” proceeding to Supabase`));
  } else {
    console.log(c.red(`    âœ— SENTINEL BLOCKED â€” fix the issues above and re-run wiki:publish`));
  }

  console.log(c.bold('â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”â”'));
  console.log('');
}

// â”€â”€ Standalone CLI mode â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

if (require.main === module) {
  const args = process.argv.slice(2);
  const fileArg = (() => {
    const i = args.indexOf('--file');
    return i !== -1 ? args[i + 1] : null;
  })();

  if (!fileArg) {
    console.error('Usage: npm run sentinel -- --file app/your/path/page.tsx');
    process.exit(1);
  }

  const filePath = path.resolve(process.cwd(), fileArg);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  const source = fs.readFileSync(filePath, 'utf-8');

  // Minimal extraction for standalone mode
  const input: SentinelInput = {
    filePath,
    content_html: (() => {
      const m = source.match(/content_html['":\s]+`([\s\S]*?)`/);
      return m ? m[1] : source;
    })(),
    metaTitle: (() => {
      const m = source.match(/title:\s*['"]([^'"]{1,120})['"]/);
      return m ? m[1] : undefined;
    })(),
    metaDescription: (() => {
      const m = source.match(/description:\s*\n?\s*['"]([^'"]{1,300})['"]/);
      return m ? m[1] : undefined;
    })(),
    canonicalUrl: (() => {
      const m = source.match(/canonical:\s*['"`]([^'"`]+)['"`]/);
      return m ? m[1] : undefined;
    })(),
    author_slug: (() => {
      const m = source.match(/author_slug['":\s]+['"]([^'"]+)['"]/);
      return m ? m[1] : undefined;
    })(),
    author_name: (() => {
      const m = source.match(/author_name['":\s]+['"]([^'"]+)['"]/);
      return m ? m[1] : undefined;
    })(),
    published_at: (() => {
      const m = source.match(/published_at['":\s]+['"]([^'"]+)['"]/);
      return m ? m[1] : undefined;
    })(),
    thumbnail_src: (() => {
      const m = source.match(/thumbnail_src['":\s]+['"]([^'"]+)['"]/);
      return m ? m[1] : undefined;
    })(),
    tags: (() => {
      const m = source.match(/tags['":\s]+\[([^\]]+)\]/);
      if (!m) return undefined;
      return m[1].match(/['"]([^'"]+)['"]/g)?.map(s => s.replace(/['"]/g, ''));
    })(),
    category: (() => {
      const m = source.match(/category['":\s]+['"]([^'"]+)['"]/);
      return m ? m[1] : undefined;
    })(),
  };

  const result = runSentinel(input);
  printSentinelReport(result, input.metaTitle || fileArg);

  if (!result.pass) process.exit(1);
}
