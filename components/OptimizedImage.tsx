'use client';

import Image, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';

// =============================================================================
// OPTIMIZED IMAGE COMPONENT
// Handles: sizing, lazy loading, placeholders, error states, layout stability
// =============================================================================

interface OptimizedImageProps extends Omit<ImageProps, 'onError' | 'onLoad'> {
  /** Fallback image if primary fails */
  fallbackSrc?: string;
  /** Show shimmer placeholder while loading */
  showPlaceholder?: boolean;
  /** Aspect ratio for layout stability (e.g., "16/9", "4/3", "1/1") */
  aspectRatio?: string;
  /** Optional caption */
  caption?: string;
  /** Credit/attribution */
  credit?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fallbackSrc = '/images/placeholder.png',
  showPlaceholder = true,
  aspectRatio,
  caption,
  credit,
  className = '',
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);

  // Reset state when src changes
  useEffect(() => {
    setImageSrc(src);
    setError(false);
    setIsLoading(true);
  }, [src]);

  const handleError = () => {
    if (!error && fallbackSrc) {
      setError(true);
      setImageSrc(fallbackSrc);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // Calculate aspect ratio style
  const aspectStyle = aspectRatio ? { aspectRatio } : undefined;

  return (
    <figure className="relative">
      {/* Container with aspect ratio for layout stability */}
      <div 
        className={`relative overflow-hidden ${aspectRatio ? '' : ''}`}
        style={aspectStyle}
      >
        {/* Shimmer placeholder */}
        {showPlaceholder && isLoading && (
          <div 
            className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse"
            style={aspectStyle}
          />
        )}

        <Image
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          onError={handleError}
          onLoad={handleLoad}
          className={`
            transition-opacity duration-300
            ${isLoading ? 'opacity-0' : 'opacity-100'}
            ${className}
          `}
          sizes={props.sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"}
          {...props}
        />
      </div>

      {/* Caption and credit */}
      {(caption || credit) && (
        <figcaption className="mt-2 text-sm text-gray-600">
          {caption && <span>{caption}</span>}
          {caption && credit && <span> — </span>}
          {credit && <span className="text-gray-500">{credit}</span>}
        </figcaption>
      )}
    </figure>
  );
}

// =============================================================================
// HERO IMAGE - Full-width, above the fold
// =============================================================================

interface HeroImageProps {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  overlay?: boolean;
  children?: React.ReactNode;
}

export function HeroImage({
  src,
  alt,
  caption,
  credit,
  overlay = false,
  children,
}: HeroImageProps) {
  return (
    <div className="relative w-full h-[50vh] min-h-[400px] max-h-[600px]">
      <Image
        src={src}
        alt={alt}
        fill
        priority // Hero images should load immediately
        className="object-cover"
        sizes="100vw"
      />
      
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      )}
      
      {children && (
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-8 text-white">
            {children}
          </div>
        </div>
      )}
      
      {(caption || credit) && (
        <div className="absolute bottom-0 right-0 bg-black/50 px-3 py-1 text-xs text-white">
          {caption && <span>{caption}</span>}
          {credit && <span className="opacity-75"> | {credit}</span>}
        </div>
      )}
    </div>
  );
}

// =============================================================================
// ARTICLE IMAGE - Standard inline image with caption
// =============================================================================

interface ArticleImageProps {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  size?: 'small' | 'medium' | 'large' | 'full';
  float?: 'left' | 'right' | 'none';
}

export function ArticleImage({
  src,
  alt,
  caption,
  credit,
  size = 'large',
  float = 'none',
}: ArticleImageProps) {
  const sizeClasses = {
    small: 'max-w-sm',
    medium: 'max-w-md',
    large: 'max-w-2xl',
    full: 'w-full',
  };

  const floatClasses = {
    left: 'float-left mr-6 mb-4',
    right: 'float-right ml-6 mb-4',
    none: 'mx-auto my-8',
  };

  return (
    <figure className={`${sizeClasses[size]} ${floatClasses[float]}`}>
      <OptimizedImage
        src={src}
        alt={alt}
        width={800}
        height={450}
        aspectRatio="16/9"
        className="rounded-lg"
        showPlaceholder
      />
      {(caption || credit) && (
        <figcaption className="mt-2 text-sm text-gray-600 text-center">
          {caption}
          {credit && <span className="text-gray-400"> — {credit}</span>}
        </figcaption>
      )}
    </figure>
  );
}

// =============================================================================
// THUMBNAIL - Small preview images
// =============================================================================

interface ThumbnailProps {
  src: string;
  alt: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  rounded?: boolean;
}

export function Thumbnail({
  src,
  alt,
  size = 'md',
  rounded = false,
}: ThumbnailProps) {
  const sizes = {
    xs: { width: 40, height: 40 },
    sm: { width: 64, height: 64 },
    md: { width: 96, height: 96 },
    lg: { width: 128, height: 128 },
  };

  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={sizes[size].width}
      height={sizes[size].height}
      className={`object-cover ${rounded ? 'rounded-full' : 'rounded-md'}`}
      aspectRatio="1/1"
    />
  );
}

// =============================================================================
// AVATAR - Profile images
// =============================================================================

interface AvatarProps {
  src?: string;
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export function Avatar({ src, name, size = 'md' }: AvatarProps) {
  const sizes = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 56,
    xl: 80,
  };

  const dimension = sizes[size];
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  if (!src) {
    return (
      <div 
        className="flex items-center justify-center bg-gray-200 text-gray-600 font-medium rounded-full"
        style={{ width: dimension, height: dimension, fontSize: dimension / 2.5 }}
      >
        {initials}
      </div>
    );
  }

  return (
    <OptimizedImage
      src={src}
      alt={name}
      width={dimension}
      height={dimension}
      className="rounded-full object-cover"
      aspectRatio="1/1"
      showPlaceholder={false}
    />
  );
}

// =============================================================================
// CARD IMAGE - For article cards
// =============================================================================

interface CardImageProps {
  src: string;
  alt: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/2';
}

export function CardImage({
  src,
  alt,
  aspectRatio = '16/9',
}: CardImageProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-t-lg" style={{ aspectRatio }}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  );
}

export default OptimizedImage;
