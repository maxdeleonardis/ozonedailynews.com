'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { uploadImage } from '@/lib/storage-service';

interface ImageUploaderProps {
  onUploadComplete: (url: string) => void;
  currentUrl?: string;
}

export function ImageUploader({ onUploadComplete, currentUrl }: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(currentUrl);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Show preview immediately
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
    setError(null);
    setIsUploading(true);

    try {
      const { url, error } = await uploadImage(file);

      if (error || !url) {
        setError(error?.message || 'Upload failed');
        setPreviewUrl(currentUrl);
        return;
      }

      // Clean up object URL
      URL.revokeObjectURL(objectUrl);
      setPreviewUrl(url);
      onUploadComplete(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
      setPreviewUrl(currentUrl);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-3">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml"
        onChange={handleFileSelect}
        className="hidden"
      />
      
      <div className="flex gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className="flex-1"
        >
          {isUploading ? 'Uploading...' : previewUrl ? 'Change Image' : 'Upload Image'}
        </Button>
        
        {previewUrl && (
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setPreviewUrl(undefined);
              onUploadComplete('');
              if (fileInputRef.current) {
                fileInputRef.current.value = '';
              }
            }}
            disabled={isUploading}
          >
            Remove
          </Button>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      {previewUrl && (
        <div className="relative rounded border overflow-hidden">
          <img
            src={previewUrl}
            alt="Preview"
            className="w-full h-auto max-h-64 object-contain bg-gray-50"
          />
        </div>
      )}
    </div>
  );
}
