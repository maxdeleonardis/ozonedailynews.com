'use client';

import { useState } from 'react';
import { createBrowserClient } from '@/lib/supabase/client';

interface ImageUploaderProps {
  currentUrl?: string;
  onUploadComplete: (url: string) => void;
}

export function ImageUploader({ currentUrl, onUploadComplete }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [urlInput, setUrlInput] = useState(currentUrl ?? '');
  const [error, setError] = useState<string | null>(null);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    try {
      const supabase = createBrowserClient();
      const ext = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const bucket = 'article-images';

      const { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(fileName, file, { upsert: true });

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);
      onUploadComplete(data.publicUrl);
      setUrlInput(data.publicUrl);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Upload failed';
      setError(message);
    } finally {
      setUploading(false);
    }
  }

  function handleUrlSubmit() {
    if (urlInput.trim()) {
      onUploadComplete(urlInput.trim());
    }
  }

  return (
    <div className="space-y-3">
      {currentUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={currentUrl} alt="Current upload" className="w-full max-h-48 object-cover rounded border" />
      )}
      <div className="flex gap-2">
        <input
          type="text"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          placeholder="Paste image URL..."
          className="flex-1 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={handleUrlSubmit}
          className="px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Use URL
        </button>
      </div>
      <div>
        <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 hover:text-gray-900">
          <span className="px-3 py-2 border rounded-md hover:bg-gray-50">
            {uploading ? 'Uploading…' : 'Upload file'}
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
            className="hidden"
          />
        </label>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
