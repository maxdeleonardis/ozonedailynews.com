'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';
import Link from 'next/link';

/* ─── Types ─────────────────────────────────────────────────────────── */

interface ArticleData {
  table: string;
  row: Record<string, unknown>;
}

const CATEGORIES = [
  'News', 'Tech', 'Finance', 'Entertainment', 'World',
  'Politics', 'Science', 'Sports', 'Culture',
];

/* ─── Helpers ───────────────────────────────────────────────────────── */

function fieldLabel(key: string): string {
  return key
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/** Fields that get a textarea instead of a text input */
const BIG_FIELDS = new Set([
  'content_html', 'subtitle', 'description', 'meta_description',
  'summary', 'excerpt', 'author_bio',
]);

/** Fields we never show (internal / auto) */
const HIDDEN_FIELDS = new Set(['id', 'created_at', 'updated_at']);

/** Key fields to show at the top, in order */
const TOP_FIELDS = [
  'title', 'subtitle', 'slug', 'category', 'status',
  'meta_title', 'meta_description',
  'hero_image_src', 'hero_image_alt', 'hero_image_credit', 'hero_image_caption',
  'thumbnail_src', 'thumbnail_alt', 'thumbnail_url',
  'author_name', 'author_slug', 'author_role',
  'publish_date', 'published_at', 'read_time',
  'tags',
];

/* ─── Component ─────────────────────────────────────────────────────── */

export default function ArticleEditor() {
  const router = useRouter();
  const [authed, setAuthed] = useState(false);
  const [slugInput, setSlugInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<ArticleData | null>(null);
  const [edits, setEdits] = useState<Record<string, unknown>>({});
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/admin');
    } else {
      setAuthed(true);
    }
  }, [router]);

  /* ── Load article ──────────────────────────────────────────────── */

  async function handleLoad() {
    if (!slugInput.trim()) return;
    setLoading(true);
    setError('');
    setData(null);
    setEdits({});
    setSaved(false);

    // Normalise: strip leading slash, trim
    const slug = slugInput.trim().replace(/^\//, '').replace(/\//g, '-');

    try {
      const res = await fetch(`/api/admin/article?slug=${encodeURIComponent(slug)}`);
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Not found (${res.status})`);
      }
      const json: ArticleData = await res.json();
      setData(json);
      setEdits({ ...json.row });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to load');
    } finally {
      setLoading(false);
    }
  }

  /* ── Save article ──────────────────────────────────────────────── */

  async function handleSave() {
    if (!data) return;
    setSaving(true);
    setError('');
    setSaved(false);

    // Build changed fields only
    const changed: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(edits)) {
      if (HIDDEN_FIELDS.has(k)) continue;
      if (JSON.stringify(v) !== JSON.stringify(data.row[k])) {
        changed[k] = v;
      }
    }

    if (Object.keys(changed).length === 0) {
      setSaved(true);
      setSaving(false);
      return;
    }

    try {
      const res = await fetch('/api/admin/article', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: data.row.slug,
          table: data.table,
          fields: changed,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Save failed (${res.status})`);
      }

      const json = await res.json();
      // Update local data with saved row
      setData({ table: data.table, row: json.row });
      setEdits({ ...json.row });
      setSaved(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to save');
    } finally {
      setSaving(false);
    }
  }

  /* ── Field change handler ──────────────────────────────────────── */

  function setField(key: string, value: unknown) {
    setEdits((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  }

  /* ── Render ────────────────────────────────────────────────────── */

  if (!authed) return null;

  // Sort fields: top fields first, then everything else alphabetically
  const allKeys = data ? Object.keys(edits).filter((k) => !HIDDEN_FIELDS.has(k)) : [];
  const orderedKeys: string[] = [];
  for (const k of TOP_FIELDS) {
    if (allKeys.includes(k)) orderedKeys.push(k);
  }
  for (const k of allKeys.sort()) {
    if (!orderedKeys.includes(k)) orderedKeys.push(k);
  }

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      {/* Top bar */}
      <div className="border-b border-gray-300 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/admin/dashboard" className="text-xs font-mono text-gray-500 hover:text-black">
              ← Dashboard
            </Link>
            <span className="text-sm font-black tracking-wider">ARTICLE EDITOR</span>
            {data && (
              <span className="text-[10px] font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-500">
                {data.table}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            {data && (
              <>
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="text-xs font-mono px-3 py-1.5 border border-gray-300 rounded hover:bg-gray-50"
                >
                  {showPreview ? 'Hide Preview' : 'Show Preview'}
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="text-xs font-black uppercase tracking-wider px-4 py-1.5 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50"
                >
                  {saving ? 'Saving...' : saved ? '✓ Saved' : 'Save Changes'}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Slug input */}
        {!data && (
          <div className="max-w-2xl mx-auto mt-20">
            <h1 className="text-2xl font-black mb-2">Edit Article</h1>
            <p className="text-sm text-gray-500 mb-6">
              Paste the full URL slug (e.g. <code className="bg-gray-100 px-1 rounded text-xs">crypto-white-house-block-and-find-out-coinbase-clarity-act-2026</code>)
              or the URL path (e.g. <code className="bg-gray-100 px-1 rounded text-xs">/crypto/white-house-block-and-find-out-coinbase-clarity-act-2026</code>).
              The editor will find it in articles, jack_articles, or article_pages automatically.
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                value={slugInput}
                onChange={(e) => setSlugInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLoad()}
                placeholder="Paste slug or URL path..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded text-sm font-mono focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                onClick={handleLoad}
                disabled={loading || !slugInput.trim()}
                className="px-6 py-3 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 disabled:opacity-50"
              >
                {loading ? 'Loading...' : 'Load'}
              </button>
            </div>
            {error && (
              <p className="text-sm text-red-600 mt-3 bg-red-50 border border-red-200 rounded px-3 py-2">
                {error}
              </p>
            )}
          </div>
        )}

        {/* Editor */}
        {data && (
          <div className="flex gap-6 items-start">
            {/* Fields column */}
            <div className={showPreview ? 'w-1/2' : 'w-full'}>
              {/* Reload bar */}
              <div className="flex items-center gap-3 mb-4">
                <input
                  type="text"
                  value={slugInput}
                  onChange={(e) => setSlugInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleLoad()}
                  className="flex-1 px-3 py-2 border border-gray-200 rounded text-xs font-mono focus:outline-none focus:ring-1 focus:ring-black"
                />
                <button
                  onClick={handleLoad}
                  disabled={loading}
                  className="px-4 py-2 text-xs font-bold border border-gray-300 rounded hover:bg-gray-50"
                >
                  {loading ? '...' : 'Reload'}
                </button>
                <button
                  onClick={() => { setData(null); setEdits({}); setSlugInput(''); setSaved(false); setError(''); }}
                  className="px-4 py-2 text-xs font-bold text-red-600 border border-red-200 rounded hover:bg-red-50"
                >
                  Close
                </button>
              </div>

              {error && (
                <p className="text-sm text-red-600 mb-4 bg-red-50 border border-red-200 rounded px-3 py-2">
                  {error}
                </p>
              )}

              {saved && (
                <p className="text-sm text-green-700 mb-4 bg-green-50 border border-green-200 rounded px-3 py-2">
                  ✓ Changes saved to Supabase. The live page will show updates on next load.
                </p>
              )}

              <div className="space-y-4">
                {orderedKeys.map((key) => {
                  const val = edits[key];

                  // Category dropdown
                  if (key === 'category') {
                    return (
                      <div key={key}>
                        <label className="block text-[10px] font-black uppercase tracking-wider text-gray-400 mb-1">
                          {fieldLabel(key)}
                        </label>
                        <select
                          value={String(val ?? '')}
                          onChange={(e) => setField(key, e.target.value)}
                          className="w-full px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-black bg-white"
                        >
                          <option value="">—</option>
                          {CATEGORIES.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    );
                  }

                  // Tags (array)
                  if (key === 'tags' && Array.isArray(val)) {
                    return (
                      <div key={key}>
                        <label className="block text-[10px] font-black uppercase tracking-wider text-gray-400 mb-1">
                          Tags (comma separated)
                        </label>
                        <input
                          type="text"
                          value={(val as string[]).join(', ')}
                          onChange={(e) => setField(key, e.target.value.split(',').map((t) => t.trim()).filter(Boolean))}
                          className="w-full px-3 py-2 border border-gray-200 rounded text-sm font-mono focus:outline-none focus:ring-1 focus:ring-black"
                        />
                      </div>
                    );
                  }

                  // Boolean
                  if (typeof val === 'boolean') {
                    return (
                      <div key={key} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={val}
                          onChange={(e) => setField(key, e.target.checked)}
                          className="w-4 h-4 rounded border-gray-300"
                        />
                        <label className="text-[10px] font-black uppercase tracking-wider text-gray-400">
                          {fieldLabel(key)}
                        </label>
                      </div>
                    );
                  }

                  // JSON objects (author in jack_articles, hero_image, etc.)
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    return (
                      <div key={key}>
                        <label className="block text-[10px] font-black uppercase tracking-wider text-gray-400 mb-1">
                          {fieldLabel(key)} (JSON)
                        </label>
                        <textarea
                          value={JSON.stringify(val, null, 2)}
                          onChange={(e) => {
                            try { setField(key, JSON.parse(e.target.value)); } catch { /* ignore parse errors while typing */ }
                          }}
                          rows={Math.min(12, JSON.stringify(val, null, 2).split('\n').length + 1)}
                          className="w-full px-3 py-2 border border-gray-200 rounded text-xs font-mono focus:outline-none focus:ring-1 focus:ring-black"
                        />
                      </div>
                    );
                  }

                  // Big text / HTML
                  if (BIG_FIELDS.has(key) || (typeof val === 'string' && val.length > 200)) {
                    return (
                      <div key={key}>
                        <label className="block text-[10px] font-black uppercase tracking-wider text-gray-400 mb-1">
                          {fieldLabel(key)}
                          {typeof val === 'string' && (
                            <span className="ml-2 font-normal normal-case text-gray-300">
                              ({val.length} chars)
                            </span>
                          )}
                        </label>
                        <textarea
                          value={String(val ?? '')}
                          onChange={(e) => setField(key, e.target.value)}
                          rows={key === 'content_html' ? 20 : 4}
                          className="w-full px-3 py-2 border border-gray-200 rounded text-xs font-mono focus:outline-none focus:ring-1 focus:ring-black leading-relaxed"
                        />
                      </div>
                    );
                  }

                  // Image preview
                  if (key.includes('image_src') || key === 'thumbnail_src' || key === 'thumbnail_url') {
                    const imgVal = typeof val === 'string' ? val : '';
                    return (
                      <div key={key}>
                        <label className="block text-[10px] font-black uppercase tracking-wider text-gray-400 mb-1">
                          {fieldLabel(key)}
                        </label>
                        <input
                          type="text"
                          value={imgVal}
                          onChange={(e) => setField(key, e.target.value)}
                          className="w-full px-3 py-2 border border-gray-200 rounded text-xs font-mono focus:outline-none focus:ring-1 focus:ring-black mb-2"
                        />
                        {imgVal && (
                          <img
                            src={imgVal}
                            alt="preview"
                            className="w-full max-h-48 object-cover rounded border border-gray-200"
                          />
                        )}
                      </div>
                    );
                  }

                  // Default text input
                  return (
                    <div key={key}>
                      <label className="block text-[10px] font-black uppercase tracking-wider text-gray-400 mb-1">
                        {fieldLabel(key)}
                      </label>
                      <input
                        type="text"
                        value={val === null || val === undefined ? '' : String(val)}
                        onChange={(e) => setField(key, e.target.value || null)}
                        className="w-full px-3 py-2 border border-gray-200 rounded text-sm font-mono focus:outline-none focus:ring-1 focus:ring-black"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Preview column */}
            {showPreview && (
              <div className="w-1/2 sticky top-16">
                <div className="border border-gray-200 rounded bg-white overflow-hidden">
                  <div className="bg-gray-50 border-b border-gray-200 px-4 py-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-gray-400">
                      Content Preview
                    </span>
                  </div>
                  <div className="p-6 max-h-[80vh] overflow-y-auto">
                    {(() => {
                      const heroSrc = typeof edits.hero_image_src === 'string'
                        ? edits.hero_image_src
                        : (edits.hero_image && typeof edits.hero_image === 'object' && 'src' in (edits.hero_image as Record<string, unknown>))
                          ? String((edits.hero_image as Record<string, unknown>).src)
                          : '';
                      const titleStr = String(edits.title ?? '');
                      const subtitleStr = edits.subtitle ? String(edits.subtitle) : '';
                      const htmlStr = String(edits.content_html ?? '');
                      return (
                        <>
                          {heroSrc && <img src={heroSrc} alt="Hero" className="w-full aspect-video object-cover rounded mb-4" />}
                          <h1 className="text-2xl font-black mb-2">{titleStr}</h1>
                          {subtitleStr && <p className="text-base text-gray-600 mb-4">{subtitleStr}</p>}
                          <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: htmlStr }} />
                        </>
                      );
                    })()}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
