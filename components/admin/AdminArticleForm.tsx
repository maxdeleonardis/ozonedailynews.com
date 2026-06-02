'use client';

// components/admin/AdminArticleForm.tsx
// Full article editor form. Used by both /admin/articles/new and /admin/articles/edit/[slug].
// Saves draft to Supabase. Publish button calls the Git bridge API.

import { useState, useEffect, useMemo } from 'react';
import MediaUpload from '@/components/admin/MediaUpload';

// ─── Constants ────────────────────────────────────────────────────────────────

const CATEGORIES = [
  'News', 'Tech', 'Finance', 'Entertainment', 'World',
  'Politics', 'Science', 'Sports', 'Culture', 'Crypto', 'Gaming',
];

// Brand is locked to whichever site the admin panel is deployed on.
// NEXT_PUBLIC_BRAND_SLUG is set per-deployment (e.g. "ozone", "basil").
// Editors on ozonedailynews.com cannot publish to another brand's content.
const SITE_BRAND_SLUG  = process.env.NEXT_PUBLIC_BRAND_SLUG  ?? 'ozone';
const SITE_BRAND_LABEL = process.env.NEXT_PUBLIC_SITE_NAME   ?? 'OzoneDaily';

const KNOWN_AUTHORS = [
  { name: 'Max DeLeonardis',         slug: 'max-deleonardis' },
  { name: 'Simon Alfred Minter',            slug: 'simon-minter' },
  { name: 'OzoneNews Editorial Team', slug: 'ozonedailynews-editorial-team' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function isoNow(): string {
  const now = new Date();
  const offset = -now.getTimezoneOffset();
  const sign   = offset >= 0 ? '+' : '-';
  const pad    = (n: number) => String(Math.abs(n)).padStart(2, '0');
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}:00${sign}${pad(Math.floor(Math.abs(offset) / 60))}:${pad(Math.abs(offset) % 60)}`;
}

function displayDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  } catch {
    return '';
  }
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface InitialData {
  slug?:         string;
  title?:        string;
  subtitle?:     string;
  category?:     string;
  brand_slug?:   string;
  article_type?: string;
  author_name?:  string;
  author_slug?:  string;
  content_html?: string;
  tags?:         string[];
  thumbnail_src?: string;
  thumbnail_alt?: string;
  breaking?:     boolean;
  trending?:     boolean;
  published_at?: string;
  metadata?: {
    title?:       string;
    description?: string;
    keywords?:    string[];
    alternates?:  { canonical?: string };
  };
}

interface Props {
  initialData?: InitialData;
  isEdit?: boolean;
}

// ─── QA Debug Panel ───────────────────────────────────────────────────────────

const AI_PHRASES = [
  'in conclusion', 'it is important to note', 'it is important to remember',
  'furthermore, it is crucial', "in today's fast-paced world",
  'in the ever-evolving landscape', 'it is worth noting that',
  'moreover, it should be noted', 'navigating the complex', 'delve into', 'in summary',
];

type CheckResult = { label: string; detail: string; tone: 'ok' | 'warn' | 'err' };

function runChecks(fields: {
  title: string; contentHtml: string; metaTitle: string;
  metaDesc: string; metaCanonical: string; publishedAt: string; authorSlug: string;
}): CheckResult[] {
  const { title, contentHtml, metaTitle, metaDesc, metaCanonical, publishedAt, authorSlug } = fields;
  const checks: CheckResult[] = [];
  const plainText = contentHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const words     = plainText.split(' ').filter(Boolean);
  const lower     = contentHtml.toLowerCase();

  // ── Word count ──────────────────────────────────────────────────────────────
  checks.push(words.length >= 300
    ? { label: 'Word count', detail: `${words.length} words`, tone: 'ok' }
    : { label: 'Word count', detail: `${words.length} / 300 minimum`, tone: words.length >= 200 ? 'warn' : 'err' });

  // ── H2 tag ───────────────────────────────────────────────────────────────────
  checks.push(/<h2[\s>]/i.test(contentHtml)
    ? { label: 'H2 present', detail: 'At least one <h2> found', tone: 'ok' }
    : { label: 'H2 missing', detail: 'Add at least one <h2> section heading', tone: 'err' });

  // ── Em / en dash in title ────────────────────────────────────────────────────
  const titleDash = /[—–]/.exec(title);
  checks.push(titleDash
    ? { label: 'Title em dash', detail: `"${title.slice(Math.max(0, titleDash.index - 12), titleDash.index + 13)}" — replace with | or comma`, tone: 'warn' }
    : { label: 'Title clean', detail: 'No em/en dashes in title', tone: 'ok' });

  // ── Em / en dash in content ─────────────────────────────────────────────────
  const contentDash = /[—–]/.exec(contentHtml);
  if (contentDash) {
    const before = contentHtml.slice(0, contentDash.index);
    const lineNum = (before.match(/\n/g) ?? []).length + 1;
    const snippet = contentHtml.slice(Math.max(0, contentDash.index - 20), contentDash.index + 21)
      .replace(/<[^>]+>/g, '').trim();
    checks.push({ label: 'Em dash in content', detail: `Near line ${lineNum}: "…${snippet}…"`, tone: 'warn' });
  } else {
    checks.push({ label: 'Content dashes', detail: 'No em/en dashes found', tone: 'ok' });
  }

  // ── AI boilerplate ───────────────────────────────────────────────────────────
  const foundPhrases = AI_PHRASES.filter((p) => lower.includes(p));
  if (foundPhrases.length > 0) {
    checks.push({ label: 'AI phrases', detail: foundPhrases.map((p) => `"${p}"`).join(', '), tone: 'warn' });
  } else {
    checks.push({ label: 'AI phrases', detail: 'None detected', tone: 'ok' });
  }

  // ── Meta description ─────────────────────────────────────────────────────────
  const dl = metaDesc.length;
  if (dl === 0) {
    checks.push({ label: 'Meta description', detail: 'Empty — required', tone: 'err' });
  } else if (dl < 130) {
    checks.push({ label: 'Meta description', detail: `${dl} chars — need ${130 - dl} more (130-155)`, tone: 'warn' });
  } else if (dl > 155) {
    checks.push({ label: 'Meta description', detail: `${dl} chars — ${dl - 155} over limit (130-155)`, tone: 'warn' });
  } else {
    checks.push({ label: 'Meta description', detail: `${dl} chars — good`, tone: 'ok' });
  }

  // ── Meta title ───────────────────────────────────────────────────────────────
  const mtl = metaTitle.length;
  if (mtl === 0) {
    checks.push({ label: 'Meta title', detail: 'Empty — will fall back to article title', tone: 'warn' });
  } else if (mtl > 60) {
    checks.push({ label: 'Meta title', detail: `${mtl} chars — ${mtl - 60} over 60-char limit`, tone: 'warn' });
  } else {
    checks.push({ label: 'Meta title', detail: `${mtl} / 60 chars`, tone: 'ok' });
  }

  // ── Canonical URL ────────────────────────────────────────────────────────────
  checks.push(metaCanonical.startsWith('https://')
    ? { label: 'Canonical URL', detail: metaCanonical, tone: 'ok' }
    : { label: 'Canonical URL', detail: metaCanonical ? 'Must start with https://' : 'Missing', tone: 'err' });

  // ── Publish date ─────────────────────────────────────────────────────────────
  const isoTz = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}/;
  checks.push(isoTz.test(publishedAt)
    ? { label: 'Publish date', detail: publishedAt, tone: 'ok' }
    : { label: 'Publish date', detail: 'Must be ISO-8601 with TZ offset, e.g. 2026-05-26T14:00:00-05:00', tone: 'err' });

  // ── Author ────────────────────────────────────────────────────────────────────
  const knownSlugs = KNOWN_AUTHORS.map((a) => a.slug);
  checks.push(knownSlugs.includes(authorSlug)
    ? { label: 'Author', detail: authorSlug, tone: 'ok' }
    : { label: 'Author', detail: `"${authorSlug}" not in known authors list`, tone: 'err' });

  return checks;
}

function QAPanel(props: {
  title: string; contentHtml: string; metaTitle: string;
  metaDesc: string; metaCanonical: string; publishedAt: string; authorSlug: string;
}) {
  const checks = useMemo(() => runChecks(props), [
    props.title, props.contentHtml, props.metaTitle,
    props.metaDesc, props.metaCanonical, props.publishedAt, props.authorSlug,
  ]);

  const counts = { ok: 0, warn: 0, err: 0 };
  for (const c of checks) counts[c.tone]++;

  return (
    <div className="w-72 shrink-0">
      <div className="sticky top-6 space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Article QA</h2>
          <div className="flex items-center gap-1.5 text-xs">
            {counts.err > 0   && <span className="bg-red-100    text-red-700    px-1.5 py-0.5 rounded-full font-medium">{counts.err} ✗</span>}
            {counts.warn > 0  && <span className="bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded-full font-medium">{counts.warn} !</span>}
            {counts.ok > 0    && <span className="bg-green-100  text-green-700  px-1.5 py-0.5 rounded-full font-medium">{counts.ok} ✓</span>}
          </div>
        </div>

        {/* Checks */}
        <div className="border border-gray-200 rounded-lg overflow-hidden divide-y divide-gray-100">
          {checks.map((c) => (
            <div key={c.label} className={`px-3 py-2.5 text-xs ${
              c.tone === 'err'  ? 'bg-red-50'    :
              c.tone === 'warn' ? 'bg-yellow-50' : 'bg-white'
            }`}>
              <div className="flex items-center gap-1.5 font-medium">
                <span className={
                  c.tone === 'err'  ? 'text-red-500'    :
                  c.tone === 'warn' ? 'text-yellow-600' : 'text-green-600'
                }>
                  {c.tone === 'err' ? '✗' : c.tone === 'warn' ? '!' : '✓'}
                </span>
                <span className={
                  c.tone === 'err'  ? 'text-red-800'    :
                  c.tone === 'warn' ? 'text-yellow-800' : 'text-gray-700'
                }>{c.label}</span>
              </div>
              <p className={`mt-0.5 leading-snug pl-4 ${
                c.tone === 'err'  ? 'text-red-600'    :
                c.tone === 'warn' ? 'text-yellow-700' : 'text-gray-400'
              }`}>{c.detail}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 leading-relaxed">
          Updates live as you type. All checks are suggestions — publish is never blocked.
        </p>
      </div>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AdminArticleForm({ initialData, isEdit = false }: Props) {
  const [title,           setTitle]         = useState(initialData?.title ?? '');
  const [subtitle,        setSubtitle]      = useState(initialData?.subtitle ?? '');
  const [slug,            setSlug]          = useState(initialData?.slug ?? '');
  const [category,        setCategory]      = useState(initialData?.category ?? 'News');
  const [brandSlug,       setBrandSlug]     = useState(initialData?.brand_slug ?? SITE_BRAND_SLUG); // eslint-disable-line @typescript-eslint/no-unused-vars
  const [articleType,     setArticleType]   = useState(initialData?.article_type ?? 'news_article');
  const [authorName,      setAuthorName]    = useState(initialData?.author_name ?? KNOWN_AUTHORS[0].name);
  const [authorSlug,      setAuthorSlug]    = useState(initialData?.author_slug ?? KNOWN_AUTHORS[0].slug);
  const [contentHtml,     setContentHtml]   = useState(initialData?.content_html ?? '');
  const [tags,            setTags]          = useState((initialData?.tags ?? []).join(', '));
  const [thumbnailSrc,    setThumbnailSrc]  = useState(initialData?.thumbnail_src ?? '');
  const [thumbnailAlt,    setThumbnailAlt]  = useState(initialData?.thumbnail_alt ?? '');
  const [breaking,        setBreaking]      = useState(initialData?.breaking ?? false);
  const [trending,        setTrending]      = useState(initialData?.trending ?? false);
  const [publishedAt,     setPublishedAt]   = useState(initialData?.published_at ?? isoNow());
  const [metaTitle,       setMetaTitle]     = useState(initialData?.metadata?.title ?? '');
  const [metaDesc,        setMetaDesc]      = useState(initialData?.metadata?.description ?? '');
  const [metaCanonical,   setMetaCanonical] = useState(initialData?.metadata?.alternates?.canonical ?? '');
  const [metaKeywords,    setMetaKeywords]  = useState((initialData?.metadata?.keywords ?? []).join(', '));

  const [saving,          setSaving]        = useState(false);
  const [publishing,      setPublishing]    = useState(false);
  const [message, setMessage] = useState<{
    type: 'ok' | 'err';
    text: string;
    details?: string[];
    detailsLabel?: string;
    detailsTone?: 'warn';
  } | null>(null);

  // Auto-generate slug from title (only if not editing and slug hasn't been manually set)
  const [slugLocked, setSlugLocked] = useState(isEdit);

  useEffect(() => {
    if (!slugLocked && title) {
      setSlug(titleToSlug(title));
    }
  }, [title, slugLocked]);

  // Auto-set canonical from slug
  useEffect(() => {
    if (slug && !isEdit) {
      setMetaCanonical(`https://www.ozonedailynews.com/${slug}`);
    }
  }, [slug, isEdit]);

  function buildPayload() {
    return {
      slug,
      title,
      subtitle,
      category,
      brand_slug:   brandSlug,
      article_type: articleType,
      author_name:  authorName,
      author_slug: authorSlug,
      content_html: contentHtml,
      tags:         tags.split(',').map((t) => t.trim()).filter(Boolean),
      thumbnail_src: thumbnailSrc,
      thumbnail_alt: thumbnailAlt,
      breaking,
      trending,
      published_at:  publishedAt,
      publish_date:  displayDate(publishedAt),
      url:           metaCanonical,
      metadata: {
        title:       metaTitle || title,
        description: metaDesc,
        keywords:    metaKeywords.split(',').map((k) => k.trim()).filter(Boolean),
        alternates:  { canonical: metaCanonical },
        openGraph: {
          title:       metaTitle || title,
          description: metaDesc,
          images:      thumbnailSrc ? [{ url: thumbnailSrc, width: 1200, height: 675, alt: thumbnailAlt }] : [],
        },
      },
    };
  }

  async function handleSaveDraft(): Promise<boolean> {
    if (!slug) { setMessage({ type: 'err', text: 'Slug is required.' }); return false; }
    setSaving(true);
    setMessage(null);
    try {
      const method = isEdit ? 'PUT' : 'POST';
      const url    = isEdit
        ? `/api/cms/articles/${slug}`
        : '/api/cms/articles';

      const res  = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildPayload()),
      });
      const json = await res.json() as { ok?: boolean; slug?: string; error?: string };

      if (res.ok) {
        setMessage({ type: 'ok', text: `Draft saved. Slug: ${json.slug ?? slug}` });
        if (!isEdit) {
          window.location.href = `/admin/articles/edit/${json.slug ?? slug}`;
        }
        return true;
      } else {
        setMessage({ type: 'err', text: json.error ?? 'Save failed.' });
        return false;
      }
    } catch (err) {
      setMessage({ type: 'err', text: `Save error: ${err instanceof Error ? err.message : String(err)}` });
      return false;
    } finally {
      setSaving(false);
    }
  }

  async function handlePublish() {
    if (!slug) return setMessage({ type: 'err', text: 'Save the draft first.' });
    if (!confirm(`Publish "${title}" to GitHub? This will commit the article and trigger a site rebuild.`)) return;

    setPublishing(true);
    setMessage(null);

    // Save latest changes first — abort if save fails so we don't publish stale content
    const saved = await handleSaveDraft();
    if (!saved) {
      setPublishing(false);
      return;
    }

    try {
      const res  = await fetch('/api/cms/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      });
      const json = await res.json() as {
        ok?: boolean;
        error?: string;
        details?: string[];
        warnings?: string[];
        url?: string;
        message?: string;
      };

      if (json.ok) {
        setMessage({
          type: 'ok',
          text: `Published to GitHub. ${json.message ?? ''} Live URL: ${json.url ?? ''}`,
          details: json.warnings,
          detailsLabel: json.warnings?.length ? 'SEO suggestions (article is live — fix when convenient):' : undefined,
          detailsTone: 'warn',
        });
      } else {
        setMessage({
          type: 'err',
          text: json.error ?? 'Publish failed.',
          details: json.details,
        });
      }
    } finally {
      setPublishing(false);
    }
  }

  function selectAuthor(authorSlugVal: string) {
    const found = KNOWN_AUTHORS.find((a) => a.slug === authorSlugVal);
    if (found) {
      setAuthorName(found.name);
      setAuthorSlug(found.slug);
    }
  }

  const descLen = metaDesc.length;
  const descOk  = descLen >= 130 && descLen <= 155;

  return (
    <div className="flex gap-8 items-start">
      {/* ── Left: form ──────────────────────────────────────────────────── */}
      <div className="flex-1 min-w-0">
      {/* Feedback */}
      {message && (
        <div className={`mb-6 px-4 py-3 rounded text-sm ${
          message.type === 'ok'
            ? 'bg-green-50 text-green-800 border border-green-200'
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          <p className="font-medium">{message.text}</p>
          {message.details && message.details.length > 0 && (
            <div className={`mt-3 rounded p-3 ${
              message.detailsTone === 'warn'
                ? 'bg-yellow-50 border border-yellow-200 text-yellow-800'
                : 'text-inherit'
            }`}>
              {message.detailsLabel && (
                <p className="font-medium mb-1.5">{message.detailsLabel}</p>
              )}
              <ul className="space-y-1 list-none">
                {message.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0">
                      {message.detailsTone === 'warn' ? '○' : '✗'}
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="space-y-6">

        {/* Section: Identity */}
        <section className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
          <h2 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Identity</h2>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Title *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Article title (no em dashes)"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Subtitle</label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="Optional subtitle"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Slug *
                {!isEdit && (
                  <button
                    type="button"
                    onClick={() => setSlugLocked(!slugLocked)}
                    className="ml-2 text-blue-600 underline font-normal"
                  >
                    {slugLocked ? 'auto' : 'lock'}
                  </button>
                )}
              </label>
              <input
                type="text"
                value={slug}
                onChange={(e) => { setSlugLocked(true); setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '')); }}
                disabled={isEdit}
                placeholder="auto-generated-from-title"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm font-mono focus:outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500"
              />
              {isEdit && (
                <p className="mt-1 text-xs text-gray-400">
                  Locked — changing the slug of a published article breaks existing URLs and search rankings.
                </p>
              )}
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Brand</label>
              {/* Locked to this deployment's brand — editors cannot publish to another site */}
              <input
                type="text"
                value={`${SITE_BRAND_LABEL} (${SITE_BRAND_SLUG})`}
                disabled
                className="w-full border border-gray-200 rounded px-3 py-2 text-sm bg-gray-50 text-gray-500 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Content Type</label>
              {isEdit ? (
                /* Locked on edit — changing this would swap the page renderer and break the design */
                <div className="flex items-center gap-2">
                  <div className="flex-1 flex items-center gap-2 border border-amber-300 bg-amber-50 rounded px-3 py-2 text-sm">
                    <span className="inline-block w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                    <span className="font-medium text-amber-900">
                      {articleType === 'jack_article'    ? 'Jack Article (Long-form / Investigation)'  :
                       articleType === 'article_page'    ? 'Article Page (Evergreen Guide)'            :
                       articleType === 'creator_article' ? 'Creator Article (Influencer Profile)'      :
                       articleType === 'wiki_article'    ? 'Wiki Article (Glossary / Definition)'      :
                                                           'News Article (Standard)'}
                    </span>
                  </div>
                  <span className="text-xs text-amber-700 shrink-0">Locked</span>
                </div>
              ) : (
                <select
                  value={articleType}
                  onChange={(e) => setArticleType(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="news_article">News Article (Standard)</option>
                  <option value="jack_article">Jack Article (Long-form / Investigation)</option>
                  <option value="article_page">Article Page (Evergreen Guide)</option>
                  <option value="creator_article">Creator Article (Influencer Profile)</option>
                  <option value="wiki_article">Wiki Article (Glossary / Definition)</option>
                </select>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              >
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Author</label>
              <select
                value={authorSlug}
                onChange={(e) => selectAuthor(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              >
                {KNOWN_AUTHORS.map((a) => (
                  <option key={a.slug} value={a.slug}>{a.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Publish Date (ISO-8601 with TZ) *</label>
              <input
                type="text"
                value={publishedAt}
                onChange={(e) => setPublishedAt(e.target.value)}
                placeholder="2026-05-26T14:00:00-05:00"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm font-mono focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex items-end gap-4 pb-1">
              {[
                { label: 'Breaking', val: breaking, set: setBreaking },
                { label: 'Trending', val: trending, set: setTrending },
              ].map(({ label, val, set }) => (
                <label key={label} className="flex items-center gap-1.5 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={val}
                    onChange={(e) => set(e.target.checked)}
                    className="rounded"
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Media */}
        <section className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
          <h2 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Thumbnail</h2>

          {/* Upload widget — uploads to Supabase Storage media/thumbnails/{slug}/ */}
          <MediaUpload
            articleSlug={slug || 'draft'}
            currentUrl={thumbnailSrc}
            onUpload={(url) => {
              setThumbnailSrc(url);
              // Auto-fill alt text from slug if empty
              if (!thumbnailAlt && slug) {
                setThumbnailAlt(slug.replace(/-/g, ' '));
              }
            }}
          />

          {/* Manual URL override (Unsplash, external CDN, etc.) */}
          <details className="group">
            <summary className="text-xs text-gray-400 cursor-pointer select-none hover:text-gray-600 list-none flex items-center gap-1">
              <span className="group-open:rotate-90 transition-transform inline-block">▶</span>
              Or paste a URL manually
            </summary>
            <div className="mt-3 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Thumbnail URL</label>
                <input
                  type="url"
                  value={thumbnailSrc}
                  onChange={(e) => setThumbnailSrc(e.target.value)}
                  placeholder="https://...supabase.../storage/v1/object/public/media/thumbnails/..."
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Alt text</label>
                <input
                  type="text"
                  value={thumbnailAlt}
                  onChange={(e) => setThumbnailAlt(e.target.value)}
                  placeholder="Descriptive alt text for the image"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </details>

          {/* Alt text (always visible when a thumbnail is set) */}
          {thumbnailSrc && (
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Alt text *</label>
              <input
                type="text"
                value={thumbnailAlt}
                onChange={(e) => setThumbnailAlt(e.target.value)}
                placeholder="Descriptive alt text for the image"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
          )}
        </section>

        {/* Section: Content */}
        <section className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
          <h2 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">
            Content HTML
            <span className="ml-2 font-normal text-gray-400 normal-case">
              {contentHtml.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean).length} words
            </span>
          </h2>
          <p className="text-xs text-gray-500">
            Paste HTML with GEO components. Required: 300+ words, at least one &lt;h2&gt;,
            blue underlined links, no em dashes.
          </p>
          <textarea
            value={contentHtml}
            onChange={(e) => setContentHtml(e.target.value)}
            rows={28}
            spellCheck
            className="w-full border border-gray-300 rounded px-3 py-2 text-xs font-mono focus:outline-none focus:border-blue-500 resize-y"
            placeholder={'<h2>Section Heading | Specific Detail</h2>\n<p>Body copy here...</p>'}
          />
        </section>

        {/* Section: Tags */}
        <section className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
          <h2 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Tags</h2>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Tags (comma-separated, 4-8 proper nouns)</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="NASA, James Webb Space Telescope, Hubble, SpaceX"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </section>

        {/* Section: SEO Metadata */}
        <section className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
          <h2 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">SEO Metadata</h2>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              metadata.title
              <span className={`ml-2 ${metaTitle.length > 60 ? 'text-red-500' : 'text-gray-400'}`}>
                {metaTitle.length}/60
              </span>
            </label>
            <input
              type="text"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              placeholder="Primary Keyword | Specific Detail (max 60 chars, no brand suffix)"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              metadata.description
              <span className={`ml-2 font-medium ${
                descOk
                  ? 'text-green-600'
                  : descLen < 130
                  ? 'text-yellow-600'
                  : 'text-red-500'
              }`}>
                {descLen} chars
                {descLen < 130 && ` (need ${130 - descLen} more)`}
                {descLen > 155 && ` (${descLen - 155} over limit)`}
                {descOk && ' ✓'}
              </span>
            </label>
            <textarea
              value={metaDesc}
              onChange={(e) => setMetaDesc(e.target.value)}
              rows={3}
              placeholder="Primary keyword in first 60 chars. 130-155 chars total. No AI boilerplate."
              className={`w-full border rounded px-3 py-2 text-sm focus:outline-none resize-none ${
                descOk ? 'border-green-400 focus:border-green-500' : 'border-gray-300 focus:border-blue-500'
              }`}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Canonical URL</label>
            <input
              type="url"
              value={metaCanonical}
              onChange={(e) => setMetaCanonical(e.target.value)}
              placeholder="https://www.ozonedailynews.com/category/slug"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm font-mono focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Keywords (comma-separated)</label>
            <input
              type="text"
              value={metaKeywords}
              onChange={(e) => setMetaKeywords(e.target.value)}
              placeholder="nasa news, james webb telescope, space exploration"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </section>

        {/* Action buttons */}
        <div className="flex items-center gap-4 pb-12">
          <button
            onClick={handleSaveDraft}
            disabled={saving || publishing}
            className="px-5 py-2.5 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-md disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save Draft'}
          </button>

          <button
            onClick={handlePublish}
            disabled={saving || publishing}
            className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md disabled:opacity-50"
          >
            {publishing ? 'Publishing to GitHub...' : 'Publish to GitHub'}
          </button>

          <a
            href="/admin/articles"
            className="text-sm text-gray-500 hover:text-gray-700 underline"
          >
            Cancel
          </a>
        </div>
      </div>
      </div>{/* flex-1 left column */}

      {/* ── Right: QA panel ─────────────────────────────────────────────── */}
      <QAPanel
        title={title}
        contentHtml={contentHtml}
        metaTitle={metaTitle}
        metaDesc={metaDesc}
        metaCanonical={metaCanonical}
        publishedAt={publishedAt}
        authorSlug={authorSlug}
      />
    </div>
  );
}
