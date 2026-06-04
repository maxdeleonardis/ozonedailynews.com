'use client';

// app/admin/media/page.tsx
// Media Library — shows all uploaded thumbnails from Supabase Storage.
// Editors can copy URLs directly to use in article fields.

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface MediaItem {
  name: string;
  path: string;
  url: string;
  size: number;
  createdAt: string;
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '—';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function MediaLibraryPage() {
  const [items, setItems]       = useState<MediaItem[]>([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState<string | null>(null);
  const [copied, setCopied]     = useState<string | null>(null);
  const [search, setSearch]     = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadMsg, setUploadMsg] = useState<{ type: 'ok' | 'err'; text: string } | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // List root thumbnails folder then each slug subfolder
      const res = await fetch('/api/cms/media?prefix=thumbnails&limit=500');
      const json = await res.json() as { items?: MediaItem[]; error?: string };
      if (!res.ok) { setError(json.error ?? 'Failed to load media'); return; }
      setItems(json.items ?? []);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { void load(); }, [load]);

  async function copyUrl(url: string) {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(url);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
    }
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setUploadMsg(null);
    try {
      const form = new FormData();
      form.append('file', file);
      form.append('slug', 'library');
      const res  = await fetch('/api/cms/media', { method: 'POST', body: form });
      const json = await res.json() as { url?: string; error?: string };
      if (res.ok && json.url) {
        setUploadMsg({ type: 'ok', text: `Uploaded: ${json.url}` });
        void load();
      } else {
        setUploadMsg({ type: 'err', text: json.error ?? 'Upload failed.' });
      }
    } finally {
      setUploading(false);
    }
  }

  const q = search.toLowerCase().trim();
  const filtered = items.filter((i) => !q || i.name.toLowerCase().includes(q) || i.path.toLowerCase().includes(q));

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-xl font-bold text-gray-900">Media Library</h1>
        <label className={`cursor-pointer bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md ${uploading ? 'opacity-50 pointer-events-none' : ''}`}>
          {uploading ? 'Uploading…' : '+ Upload Image'}
          <input type="file" accept="image/*" className="sr-only" onChange={handleUpload} disabled={uploading} />
        </label>
      </div>

      {uploadMsg && (
        <div className={`mb-4 px-4 py-3 rounded text-sm border ${
          uploadMsg.type === 'ok'
            ? 'bg-green-50 text-green-800 border-green-200'
            : 'bg-red-50 text-red-800 border-red-200'
        }`}>
          {uploadMsg.text}
        </div>
      )}

      {/* Search */}
      <div className="relative max-w-xs mb-5">
        <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by filename…"
          className="w-full pl-8 pr-3 py-1.5 text-xs border border-gray-300 rounded bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {loading && (
        <div className="text-sm text-gray-400 py-12 text-center">Loading media…</div>
      )}
      {error && (
        <div className="text-sm text-red-600 py-4">{error}</div>
      )}

      {!loading && !error && filtered.length === 0 && (
        <div className="text-sm text-gray-400 py-12 text-center">
          {search ? 'No files match your search.' : 'No media uploaded yet.'}
        </div>
      )}

      {/* Grid */}
      {!loading && filtered.length > 0 && (
        <>
          <p className="text-xs text-gray-400 mb-3">{filtered.length} file{filtered.length !== 1 ? 's' : ''}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {filtered.map((item) => (
              <div key={item.path} className="group border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-blue-400 transition-colors">
                {/* Thumbnail */}
                <div className="relative w-full bg-gray-100" style={{ aspectRatio: '16/9' }}>
                  <Image
                    src={item.url}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="200px"
                    unoptimized
                  />
                </div>
                {/* Info */}
                <div className="p-2">
                  <p className="text-xs text-gray-700 font-medium truncate" title={item.name}>{item.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{formatBytes(item.size)}</p>
                  <button
                    onClick={() => copyUrl(item.url)}
                    className={`mt-2 w-full text-xs py-1 rounded font-medium transition-colors ${
                      copied === item.url
                        ? 'bg-green-100 text-green-700 border border-green-300'
                        : 'bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-600 border border-gray-200 hover:border-blue-600'
                    }`}
                  >
                    {copied === item.url ? '✓ Copied!' : 'Copy URL'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
