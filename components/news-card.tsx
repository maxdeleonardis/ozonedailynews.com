'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface NewsCardProps {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  image?: string;
  author?: { name: string };
  readingTime?: number;
  categoryColor?: string;
}

const getCategoryGradient = (category: string): string => {
  const gradients: Record<string, string> = {
    'supply-chain': 'from-blue-500 to-blue-600',
    'technology': 'from-green-500 to-green-600',
    'regulation': 'from-orange-500 to-orange-600',
    'geopolitics': 'from-red-500 to-red-600',
    'economics': 'from-purple-500 to-purple-600',
    'default': 'from-gray-700 to-gray-800'
  };
  
  const key = category.toLowerCase().replace(/\s+/g, '-');
  return gradients[key] || gradients.default;
};

export default function NewsCard({
  slug,
  title,
  excerpt,
  category,
  publishedAt,
  image,
  author,
  readingTime,
}: NewsCardProps) {
  const gradient = getCategoryGradient(category);
  
  return (
    <Link href={`/blog/${slug}`}>
      <motion.article
        className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col"
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {/* Image Container with Fixed Aspect Ratio */}
        <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
              <span className="text-white text-4xl font-bold opacity-20">
                {category.substring(0, 1).toUpperCase()}
              </span>
            </div>
          )}
          
          {/* Category Badge Overlay */}
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-widest rounded">
              {category}
            </span>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-gray-700 transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1 line-clamp-3">
            {excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-4">
            <div className="flex items-center gap-2">
              <span className="font-medium">{author?.name || 'ObjectWire'}</span>
              {readingTime && (
                <>
                  <span>•</span>
                  <span>{readingTime} min read</span>
                </>
              )}
            </div>
            <time dateTime={publishedAt}>
              {new Date(publishedAt).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
          </div>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-black/10 rounded-lg pointer-events-none transition-colors duration-300" />
      </motion.article>
    </Link>
  );
}
