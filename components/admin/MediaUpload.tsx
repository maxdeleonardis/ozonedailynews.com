'use client';

// components/admin/MediaUpload.tsx
// Uploads an image to Supabase Storage `media` bucket and returns the CDN URL.
// Used in AdminArticleForm for the article thumbnail field.
//
// Storage path: thumbnails/{slug}/{filename}.webp  (or original ext if not webp)
// Public CDN URL: {SUPABASE_URL}/storage/v1/object/public/media/thumbnails/{slug}/{filename}

import { useRef, useState } from 'react';
import { createBrowserClient } from '@/lib/supabase/client';

interface MediaUploadProps {
  /** Article slug — used to namespace files in storage: thumbnails/{slug}/ */
  articleSlug: string;
  /** Current thumbnail URL (if any) — shown as preview */
  currentUrl?: string;
  /** Called with the new public CDN URL after a successful upload */
  onUpload: (url: string) => void;
}

const BUCKET = 'media';
const MAX_BYTES = 10 * 1024 * 1024; // 10 MB (bucket limit)
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

    // Client-side validation
    if (file.size > MAX_BYTES) {
      setError(`File too large (${(file.size / 1024 / 1024).toFixed(1)} MB). Max is 10 MB.`);
      return;
    }
    if (!file.type.startsWith('image/')) {
      setError('Only image files are accepted (JPEG, PNG, WebP, GIF).');
      return;
    }

    // Optimistic local preview
    const localUrl = URL.createObjectURL(file);
    setPreview(localUrl);
    setUploading(true);

    try {
      const sb = createBrowserClient();

      // Build storage path: thumbnails/{slug}/{timestamp}-{sanitised-name}
      const ext        = file.name.split('.').pop() ?? 'jpg';
      const safeName   = file.name.replace(/[^a-z0-9.-]/gi, '-').toLowerCase();
      const storagePath = `thumbnails/${articleSlug || 'unslugged'}/${Date.now()}-${safeName}`;

      // Simulate progress (Supabase JS SDK doesn't expose upload progress natively)
      const progressInterval = setInterval(() => {
        setProgress((p) => Math.min(p + 15, 85));
      }, 150);

      const { error: uploadError } = await sb.storage
        .from(BUCKET)
        .upload(storagePath, file, {
          contentType: file.type,
          upsert: true,
        });

      clearInterval(progressInterval);

      if (uploadError) {
        setError(`Upload failed: ${uploadError.message}`);
        setPreview(currentUrl ?? '');
        setUploading(false);
        return;
      }

      setProgress(100);

      // Get the public CDN URL
      const { data: urlData } = sb.storage
        .from(BUCKET)
        .getPublicUrl(storagePath);

      const publicUrl = urlData.publicUrl;
      setPreview(publicUrl);
      onUpload(publicUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown upload error.');
      setPreview(currentUrl ?? '');
    } finally {
      setUploading(false);
      setProgress(0);
      // Reset input so the same file can be re-selected
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
