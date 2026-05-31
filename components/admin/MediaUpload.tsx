'use client';

// components/admin/MediaUpload.tsx
// Uploads an image via /api/cms/media (server-side, uses service role key).
// The browser never touches Supabase Storage directly — avoids RLS violations.

import { useRef, useState } from 'react';

interface MediaUploadProps {
  /** Article slug — used to namespace files in storage: thumbnails/{slug}/ */
  articleSlug: string;
  /** Current thumbnail URL (if any) — shown as preview */
  currentUrl?: string;
  /** Called with the new public CDN URL after a successful upload */
  onUpload: (url: string) => void;
}

const MAX_BYTES = 10 * 1024 * 1024; // 10 MB
const ACCEPTED = 'image/jpeg,image/png,image/webp,image/gif';

export default function MediaUpload({ articleSlug, currentUrl, onUpload }: MediaUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview]   = useState<string>(currentUrl ?? '');
  const [error, setError]       = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setProgress(0);

    // Client-side validation before the network round-trip
    if (file.size > MAX_BYTES) {
      setError(`File too large (${(file.size / 1024 / 1024).toFixed(1)} MB). Max is 10 MB.`);
      return;
    }
    if (!file.type.startsWith('image/')) {
      setError('Only image files are accepted (JPEG, PNG, WebP, GIF).');
      return;
    }

    // Show a local preview immediately
    const localUrl = URL.createObjectURL(file);
    setPreview(localUrl);
    setUploading(true);

    // Fake progress bar — the fetch API doesn't expose upload progress
    const progressInterval = setInterval(() => {
      setProgress((p) => Math.min(p + 12, 85));
    }, 150);

    try {
      const form = new FormData();
      form.append('file', file);
      form.append('slug', articleSlug || 'unslugged');

      const res = await fetch('/api/cms/media', { method: 'POST', body: form });
      clearInterval(progressInterval);

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(`Upload failed: ${json.error ?? res.statusText}`);
        setPreview(currentUrl ?? '');
        return;
      }

      setProgress(100);
      setPreview(json.url);
      onUpload(json.url);
    } catch (err) {
      clearInterval(progressInterval);
      setError(err instanceof Error ? err.message : 'Unknown upload error.');
      setPreview(currentUrl ?? '');
    } finally {
      setUploading(false);
      setProgress(0);
      if (inputRef.current) inputRef.current.value = '';
    }
  }

  return (
    <div className="space-y-3">
      {/* Preview */}
      {preview && (
        <div className="relative w-full aspect-video rounded overflow-hidden bg-gray-100 border border-gray-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={preview}
            alt="Thumbnail preview"
            className="w-full h-full object-cover"
          />
          {uploading && (
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-2">
              <div className="w-48 h-1.5 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-white text-xs font-medium">Uploading…</span>
            </div>
          )}
        </div>
      )}

      {/* Upload controls */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="px-4 py-2 text-sm font-medium bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {uploading ? 'Uploading…' : preview ? 'Replace image' : 'Upload image'}
        </button>
        <span className="text-xs text-gray-400">JPEG, PNG, WebP, GIF — max 10 MB</span>
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPTED}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
          {error}
        </p>
      )}
    </div>
  );
}
