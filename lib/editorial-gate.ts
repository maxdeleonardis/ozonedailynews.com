/**
 * Editorial gate — validates article content before a GitHub commit is made.
 * All OStandard rules are enforced here so bad content never reaches the repo.
 */

export interface GateResult {
  ok: boolean;
  errors: string[];
  warnings: string[];
}

// ── Constants ───────────────────────────────────────────────────────────────

const BANNED_PHRASES = [
  'In conclusion',
  'It is important to note',
  'It is important to remember',
  'Furthermore, it is crucial',
  "In today's fast-paced world",
  'In the ever-evolving landscape',
  'It is worth noting that',
  'Moreover, it should be noted',
  'Navigating the complex',
  'Delve into',
  'In summary',
] as const;

const VALID_CATEGORIES = [
  'News',
  'Tech',
  'Finance',
  'Entertainment',
  'World',
  'Politics',
  'Science',
  'Sports',
  'Culture',
  'Crypto',
  'Gaming',
] as const;

/** Authors without an external sameAs profile — must use house byline instead */
const UNFOOTPRINTED_AUTHORS = ['jack-sterling', 'alfasa-chillingsworth', 'jack-brennan'];

// ── Helpers ──────────────────────────────────────────────────────────────────

function containsEmDash(text: string): boolean {
  // \u2014 = em dash, \u2013 = en dash
  return /[\u2013\u2014]/.test(text);
}

function findBannedPhrases(text: string): string[] {
  return BANNED_PHRASES.filter((phrase) =>
    text.toLowerCase().includes(phrase.toLowerCase())
  );
}

function isValidIso8601(value: unknown): boolean {
  if (typeof value !== 'string') return false;
  // Must include both date and time parts (no date-only)
  return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(value);
}

function isValidSlug(slug: unknown): boolean {
  if (typeof slug !== 'string') return false;
  // lowercase, hyphens only, no leading slash, no stop-word check (too expensive)
  return /^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug);
}

// ── Main export ───────────────────────────────────────────────────────────────

/**
 * Run all OStandard editorial checks against an article content object.
 * @param content  Parsed article JSON (any article type)
 */
export function runEditorialGate(content: Record<string, unknown>): GateResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Serialise entire content once for phrase scanning
  const fullText = JSON.stringify(content);

  // ── Required fields ──────────────────────────────────────────────────────
  const requiredFields: string[] = ['title', 'slug', 'category', 'published_at'];
  for (const field of requiredFields) {
    if (!content[field]) {
      errors.push(`Missing required field: "${field}"`);
    }
  }

  // ── Em dash / en dash (zero tolerance) ────────────────────────────────────
  if (containsEmDash(fullText)) {
    errors.push(
      'Em dash (\u2014) or en dash (\u2013) detected. Replace with | in headings or , in prose.'
    );
  }

  // ── Banned LLM phrases ────────────────────────────────────────────────────
  const found = findBannedPhrases(fullText);
  for (const phrase of found) {
    errors.push(`Banned phrase detected: "${phrase}"`);
  }

  // ── Category validation ───────────────────────────────────────────────────
  if (content.category && !VALID_CATEGORIES.includes(content.category as never)) {
    errors.push(
      `Invalid category "${content.category}". Must be one of: ${VALID_CATEGORIES.join(', ')}`
    );
  }

  // ── ISO-8601 timestamp ────────────────────────────────────────────────────
  if (content.published_at && !isValidIso8601(content.published_at)) {
    errors.push(
      `"published_at" must be a full ISO-8601 timestamp (e.g. 2026-05-18T18:00:00-05:00). Got: ${content.published_at}`
    );
  }

  // ── Slug format ───────────────────────────────────────────────────────────
  if (content.slug && !isValidSlug(content.slug)) {
    errors.push(
      `Slug "${content.slug}" is invalid. Must be lowercase, hyphens only, no leading slash.`
    );
  }

  // ── Tags count (4–8 required) ─────────────────────────────────────────────
  if (Array.isArray(content.tags)) {
    if (content.tags.length < 4) {
      errors.push(`Tags array has ${content.tags.length} item(s). Minimum is 4.`);
    } else if (content.tags.length > 8) {
      warnings.push(`Tags array has ${content.tags.length} items. Maximum recommended is 8.`);
    }
  }

  // ── Title length ──────────────────────────────────────────────────────────
  if (typeof content.title === 'string' && content.title.length > 100) {
    warnings.push(`Title is ${content.title.length} chars. Consider keeping it under 100.`);
  }

  // ── Author footprint warning ──────────────────────────────────────────────
  if (
    typeof content.author_slug === 'string' &&
    UNFOOTPRINTED_AUTHORS.includes(content.author_slug)
  ) {
    warnings.push(
      `Author "${content.author_slug}" has no external sameAs profile. ` +
        'Use "OzoneNews Editorial Team" byline until a real profile exists.'
    );
  }

  return {
    ok: errors.length === 0,
    errors,
    warnings,
  };
}
