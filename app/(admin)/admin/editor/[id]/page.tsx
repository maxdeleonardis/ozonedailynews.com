'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';
import { getBlogPostById, updateBlogPost } from '@/lib/blog-service';

const CATEGORIES = [
  'News', 'Technology', 'Politics', 'Finance', 'Sports', 'Gaming', 'Entertainment',
  'Science', 'YouTube', 'Business', 'Investigations', 'Research', 'Social Media',
  'World Affairs', 'Automotive', 'Lifestyle', 'Legal', 'Reference', 'Media',
  'Events', 'Education', 'General',
];

const CATEGORY_COLORS = ['blue', 'red', 'green', 'yellow', 'orange', 'purple', 'black'];

const BLOCK_SNIPPETS = [
  { label: 'paragraph', snippet: '{"id":"X","type":"paragraph","content":""}' },
  { label: 'heading', snippet: '{"id":"X","type":"heading","content":""}' },
  { label: 'quote', snippet: '{"id":"X","type":"quote","content":"","author":""}' },
  { label: 'list', snippet: '{"id":"X","type":"list","items":["item 1","item 2"]}' },
  { label: 'image', snippet: '{"id":"X","type":"image","url":"","alt":"","caption":""}' },
  { label: 'divider', snippet: '{"id":"X","type":"divider"}' },
  { label: 'callout', snippet: '{"id":"X","type":"callout","content":"","variant":"info"}' },
  { label: 'stat-grid', snippet: '{"id":"X","type":"stat-grid","stats":[{"label":"","value":""}]}' },
  { label: 'timeline', snippet: '{"id":"X","type":"timeline","events":[{"date":"","title":"","description":""}]}' },
  { label: 'table', snippet: '{"id":"X","type":"table","headers":["Col1","Col2"],"rows":[["a","b"]]}' },
  { label: 'embed', snippet: '{"id":"X","type":"embed","url":""}' },
  { label: 'sources', snippet: '{"id":"X","type":"sources","sources":["Source 1"]}' },
];

export default function EditArticlePage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorSlug, setAuthorSlug] = useState('');
  const [category, setCategory] = useState('News');
  const [categoryColor, setCategoryColor] = useState('blue');
  const [topicTag, setTopicTag] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [tags, setTags] = useState('');
  const [featured, setFeatured] = useState(false);
  const [trending, setTrending] = useState(false);
  const [breaking, setBreaking] = useState(false);
  const [exclusive, setExclusive] = useState(false);
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const [contentJson, setContentJson] = useState('[]');

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/admin');
      return;
    }
    loadArticle();
  }, [id]);

  const loadArticle = async () => {
    setLoading(true);
    setError(null);
    try {
      const post = await getBlogPostById(id);
      if (!post) { setError('Article not found'); return; }
      setTitle(post.title || '');
      setSlug(post.slug || '');
      setSubtitle((post as any).subtitle || '');
      setExcerpt(post.excerpt || '');
      setAuthorName(post.author_name || post.author || '');
      setAuthorSlug(post.author_slug || '');
      setCategory(post.category || 'News');
      setCategoryColor(post.category_color || 'blue');
      setTopicTag(post.topic_tag || '');
      setImageUrl(post.image_url || '');
      setImageAlt(post.image_alt || '');
      setTags((post.tags || []).join(', '));
      setFeatured(post.featured || false);
      setTrending(post.trending || false);
      setBreaking(post.breaking || false);
      setExclusive(post.exclusive || false);
      setStatus((post.status as any) || 'draft');
      setContentJson(JSON.stringify(post.content || [], null, 2));
    } catch (err: any) {
      setError(err.message || 'Failed to load article');
    } finally {
      setLoading(false);
    }
  };

  const validateJson = useCallback((value: string) => {
    try { JSON.parse(value); setJsonError(null); return true; }
    catch (e: any) { setJsonError(e.message); return false; }
  }, []);

  const handleSave = async (newStatus: 'draft' | 'published') => {
    if (!validateJson(contentJson)) return;
    setSaving(true); setSaved(false);
    try {
      await updateBlogPost(id, {
        title, slug, subtitle, excerpt,
        author: authorName, author_name: authorName,
        author_slug: authorSlug || undefined,
        category, category_color: categoryColor,
        topic_tag: topicTag || undefined,
        image_url: imageUrl || undefined,
        image_alt: imageAlt || undefined,
        tags: tags.split(',').map(t => t.trim()).filter(Boolean),
        featured, trending, breaking, exclusive,
        status: newStatus,
        content: JSON.parse(contentJson),
        blocks: JSON.parse(contentJson),
      });
      setStatus(newStatus);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err: any) {
      setError(err.message || 'Save failed');
    } finally {
      setSaving(false);
    }
  };

  const appendBlock = (snippet: string) => {
    try {
      const blocks = JSON.parse(contentJson);
      const newBlock = JSON.parse(snippet.replace('"X"', `"${Date.now()}"`));
      setContentJson(JSON.stringify([...blocks, newBlock], null, 2));
      setJsonError(null);
    } catch {}
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="text-gray-400">Loading article...</div>
    </div>
  );

  if (error && !title) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="text-center">
        <div className="text-red-400 mb-4">{error}</div>
        <button onClick={() => router.push('/admin/dashboard')} className="text-gray-400 underline text-sm">
          Back to dashboard
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Top bar */}
      <div className="sticky top-0 z-20 bg-gray-900 border-b border-gray-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => router.push('/admin/dashboard')} className="text-gray-400 hover:text-white text-sm">
            ← Dashboard
          </button>
          <span className="text-gray-700">|</span>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
            status === 'published' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'
          }`}>
            {status.toUpperCase()}
          </span>
          {saved && <span className="text-green-400 text-sm">✓ Saved</span>}
          {error && <span className="text-red-400 text-sm">{error}</span>}
        </div>
        <div className="flex items-center gap-2">
          {status === 'published' && (
            <button onClick={() => handleSave('draft')} disabled={saving} className="px-3 py-1.5 text-sm bg-gray-700 hover:bg-gray-600 rounded disabled:opacity-50">
              Unpublish
            </button>
          )}
          <button onClick={() => handleSave('draft')} disabled={saving || !!jsonError} className="px-3 py-1.5 text-sm bg-gray-700 hover:bg-gray-600 rounded disabled:opacity-50">
            {saving ? 'Saving…' : 'Save Draft'}
          </button>
          <button onClick={() => handleSave('published')} disabled={saving || !!jsonError} className="px-4 py-1.5 text-sm bg-white text-black font-semibold rounded hover:bg-gray-200 disabled:opacity-50">
            {saving ? 'Publishing…' : status === 'published' ? 'Update' : 'Publish'}
          </button>
          {status === 'published' && (
            <a href={`/blog/${slug}`} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 text-sm border border-gray-600 rounded hover:border-gray-400">
              View Live ↗
            </a>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-3 gap-8">
        {/* Left: content */}
        <div className="col-span-2 flex flex-col gap-4">
          <input
            type="text" value={title} onChange={e => setTitle(e.target.value)}
            placeholder="Article title"
            className="w-full bg-transparent text-3xl font-bold text-white placeholder-gray-600 outline-none border-b border-gray-800 pb-3 focus:border-gray-500"
          />
          <input
            type="text" value={subtitle} onChange={e => setSubtitle(e.target.value)}
            placeholder="Subtitle (optional)"
            className="w-full bg-transparent text-lg text-gray-400 placeholder-gray-700 outline-none border-b border-gray-800 pb-2 focus:border-gray-500"
          />
          <textarea
            value={excerpt} onChange={e => setExcerpt(e.target.value)}
            placeholder="Excerpt / meta description (max 160 chars)" rows={2} maxLength={300}
            className="w-full bg-gray-900 border border-gray-800 rounded p-3 text-sm text-gray-300 placeholder-gray-600 outline-none focus:border-gray-600 resize-none"
          />

          {/* Block snippets */}
          <div>
            <p className="text-xs text-gray-600 mb-2 uppercase tracking-wider font-semibold">Append block</p>
            <div className="flex flex-wrap gap-1">
              {BLOCK_SNIPPETS.map(({ label, snippet }) => (
                <button key={label} onClick={() => appendBlock(snippet)}
                  className="text-xs px-2 py-1 bg-gray-800 hover:bg-gray-700 rounded text-gray-400 hover:text-white transition-colors">
                  + {label}
                </button>
              ))}
            </div>
          </div>

          {/* JSON editor */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Content Blocks (JSON)</label>
              {jsonError && <span className="text-xs text-red-400">{jsonError}</span>}
            </div>
            <textarea
              value={contentJson}
              onChange={e => { setContentJson(e.target.value); validateJson(e.target.value); }}
              spellCheck={false}
              className={`w-full bg-gray-900 border rounded p-4 text-sm font-mono text-gray-300 outline-none focus:border-gray-600 resize-y min-h-[540px] ${jsonError ? 'border-red-700' : 'border-gray-800'}`}
            />
            <p className="text-xs text-gray-600 mt-1">
              Array of blocks. Each needs <code className="text-gray-500">id</code>, <code className="text-gray-500">type</code>.
              Types: paragraph, heading, quote, list, image, code, divider, callout, stat-grid, timeline, table, embed, sources, summary.
            </p>
          </div>
        </div>

        {/* Right: metadata */}
        <div className="col-span-1 flex flex-col gap-5">
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">Slug</label>
            <div className="flex items-center gap-1 text-sm">
              <span className="text-gray-600">/blog/</span>
              <input type="text" value={slug} onChange={e => setSlug(e.target.value)}
                className="flex-1 bg-gray-900 border border-gray-800 rounded px-2 py-1.5 text-gray-300 outline-none focus:border-gray-600 text-sm" />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">Author Name</label>
            <input type="text" value={authorName} onChange={e => setAuthorName(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-1.5 text-sm text-gray-300 outline-none focus:border-gray-600" />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">Author Slug</label>
            <input type="text" value={authorSlug} onChange={e => setAuthorSlug(e.target.value)}
              placeholder="e.g. jack-wang"
              className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-1.5 text-sm text-gray-300 outline-none focus:border-gray-600" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">Category</label>
              <select value={category} onChange={e => setCategory(e.target.value)}
                className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-1.5 text-sm text-gray-300 outline-none focus:border-gray-600">
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">Color</label>
              <select value={categoryColor} onChange={e => setCategoryColor(e.target.value)}
                className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-1.5 text-sm text-gray-300 outline-none focus:border-gray-600">
                {CATEGORY_COLORS.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">Topic Tag</label>
            <input type="text" value={topicTag} onChange={e => setTopicTag(e.target.value)} placeholder="optional"
              className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-1.5 text-sm text-gray-300 outline-none focus:border-gray-600" />
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">Hero Image URL</label>
            <input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="https://..."
              className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-1.5 text-sm text-gray-300 outline-none focus:border-gray-600" />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">Image Alt Text</label>
            <input type="text" value={imageAlt} onChange={e => setImageAlt(e.target.value)} placeholder="Describe the image"
              className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-1.5 text-sm text-gray-300 outline-none focus:border-gray-600" />
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">Tags <span className="text-gray-700 normal-case font-normal">(comma separated)</span></label>
            <textarea value={tags} onChange={e => setTags(e.target.value)} rows={2} placeholder="XRP, Crypto, Ripple"
              className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-1.5 text-sm text-gray-300 outline-none focus:border-gray-600 resize-none" />
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Flags</label>
            <div className="grid grid-cols-2 gap-2">
              {([['Featured', featured, setFeatured], ['Trending', trending, setTrending], ['Breaking', breaking, setBreaking], ['Exclusive', exclusive, setExclusive]] as const).map(([label, value, set]) => (
                <label key={label as string} className="flex items-center gap-2 cursor-pointer select-none">
                  <input type="checkbox" checked={value as boolean} onChange={e => (set as any)(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-600 bg-gray-900" />
                  <span className="text-sm text-gray-400">{label as string}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Article info */}
          <div className="pt-4 border-t border-gray-800 text-xs text-gray-600 space-y-1">
            <div>ID: <span className="text-gray-500 font-mono">{id}</span></div>
            <div>
              <a href={`/blog/${slug}`} target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-300 underline break-all">
                /blog/{slug}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}