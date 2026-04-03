'use client';

import React, { useEffect, useState, useRef } from 'react';
import { ArticleBlock } from '@/lib/article-types';
import Link from 'next/link';

interface ArticleRendererProps {
  blocks: ArticleBlock[];
}

// Color mapping for {color:name}text{/color} syntax
const COLOR_MAP: Record<string, string> = {
  red: 'text-red-600',
  blue: 'text-blue-600',
  green: 'text-green-600',
  orange: 'text-orange-600',
  purple: 'text-purple-600',
  yellow: 'text-yellow-600',
  gray: 'text-gray-600',
};

// Parse markdown-style formatting: **bold**, *italic*, __underline__, [text](url), {color:name}text{/color}
function parseText(text: string): React.ReactNode[] {
  // First, handle colors {color:name}text{/color}
  const colorRegex = /\{color:(\w+)\}([^{]+)\{\/color\}/g;
  let colorProcessedText = text;
  const colorMatches: { original: string; color: string; text: string }[] = [];
  let colorMatch;
  
  while ((colorMatch = colorRegex.exec(text)) !== null) {
    colorMatches.push({
      original: colorMatch[0],
      color: colorMatch[1],
      text: colorMatch[2]
    });
  }
  
  // Replace color syntax with placeholder and process later
  colorMatches.forEach((cm, idx) => {
    colorProcessedText = colorProcessedText.replace(cm.original, `%%COLOR_${idx}%%`);
  });

  // Handle links [text](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];

  const processedText = colorProcessedText;
  const linkMatches: { start: number; end: number; text: string; url: string }[] = [];
  
  // Collect all link matches first
  let match;
  while ((match = linkRegex.exec(processedText)) !== null) {
    linkMatches.push({
      start: match.index,
      end: match.index + match[0].length,
      text: match[1],
      url: match[2]
    });
  }

  // Process text with links
  let currentIndex = 0;
  linkMatches.forEach((linkMatch, linkIndex) => {
    // Add text before link
    if (linkMatch.start > currentIndex) {
      const beforeText = processedText.substring(currentIndex, linkMatch.start);
      parts.push(...parseFormattedText(beforeText, `pre-${linkIndex}`, colorMatches));
    }
    
    // Add the link
    const isExternal = linkMatch.url.startsWith('http');
    if (isExternal) {
      parts.push(
        <a 
          key={`link-${linkIndex}`}
          href={linkMatch.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {linkMatch.text}
        </a>
      );
    } else {
      parts.push(
        <Link 
          key={`link-${linkIndex}`}
          href={linkMatch.url}
          className="text-blue-600 hover:underline"
        >
          {linkMatch.text}
        </Link>
      );
    }
    
    currentIndex = linkMatch.end;
  });

  // Add remaining text after last link
  if (currentIndex < processedText.length) {
    parts.push(...parseFormattedText(processedText.substring(currentIndex), 'post', colorMatches));
  }

  // If no links found, just parse formatting
  if (linkMatches.length === 0) {
    return parseFormattedText(colorProcessedText, 'main', colorMatches);
  }

  return parts;
}

// Parse bold, italic, and underline formatting
function parseFormattedText(text: string, keyPrefix: string, colorMatches: { original: string; color: string; text: string }[] = []): React.ReactNode[] {
  // Handle bold (**text**), italic (*text*), and underline (__text__)
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|__[^_]+__|%%COLOR_\d+%%)/g);
  return parts.map((part, i) => {
    // Check for color placeholder
    const colorPlaceholderMatch = part.match(/%%COLOR_(\d+)%%/);
    if (colorPlaceholderMatch) {
      const colorIdx = parseInt(colorPlaceholderMatch[1]);
      const colorData = colorMatches[colorIdx];
      if (colorData) {
        const colorClass = COLOR_MAP[colorData.color] || 'text-gray-900';
        return (
          <span key={`${keyPrefix}-${i}`} className={colorClass}>
            {colorData.text}
          </span>
        );
      }
    }
    
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <span key={`${keyPrefix}-${i}`} className="key-term font-semibold">
          {part.slice(2, -2)}
        </span>
      );
    }
    if (part.startsWith('__') && part.endsWith('__')) {
      return (
        <span key={`${keyPrefix}-${i}`} className="underline">
          {part.slice(2, -2)}
        </span>
      );
    }
    if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
      return (
        <em key={`${keyPrefix}-${i}`} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }
    return <span key={`${keyPrefix}-${i}`} className="highlight-text">{part}</span>;
  });
}

export function ArticleRenderer({ blocks }: ArticleRendererProps) {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [animatedStats, setAnimatedStats] = useState<Record<string, boolean>>({});
  const [statValues, setStatValues] = useState<Record<string, Record<string, number>>>({});

  // Intersection observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [blocks]);

  const sectionClass = (id: string) =>
    `transition-all duration-700 ease-out ${
      visibleSections.has(id)
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8'
    }`;

  // Animate stats when they become visible
  const animateStats = (blockId: string, stats: { value: string; label: string }[]) => {
    if (animatedStats[blockId]) return;
    
    setAnimatedStats(prev => ({ ...prev, [blockId]: true }));
    
    const numericStats: Record<string, { target: number; isNumeric: boolean }> = {};
    stats.forEach((stat, idx) => {
      const numMatch = stat.value.match(/\$?(\d+)/);
      if (numMatch) {
        numericStats[idx.toString()] = { target: parseInt(numMatch[1]), isNumeric: true };
      }
    });

    const duration = 2000;
    const steps = 60;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const newValues: Record<string, number> = {};
      Object.entries(numericStats).forEach(([idx, { target }]) => {
        newValues[idx] = Math.min(Math.round((target / steps) * step), target);
      });
      setStatValues(prev => ({ ...prev, [blockId]: newValues }));
      if (step >= steps) clearInterval(interval);
    }, duration / steps);
  };

  const getStatDisplay = (blockId: string, idx: number, originalValue: string) => {
    const values = statValues[blockId];
    if (!values || values[idx.toString()] === undefined) return originalValue;
    
    const prefix = originalValue.startsWith('$') ? '$' : '';
    const suffix = originalValue.includes('M') ? 'M' : '';
    return `${prefix}${values[idx.toString()]}${suffix}`;
  };

  let sectionNumber = 0;

  return (
    <div className="space-y-12">
      {blocks.map((block) => {
        switch (block.type) {
          case 'summary':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 border-l-4 border-gray-900 p-6 md:p-8 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <p className="text-xs font-mono text-gray-400 mb-3 tracking-widest">EXECUTIVE SUMMARY</p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {parseText(block.content)}
                  </p>
                </div>
              </section>
            );

          case 'heading':
            sectionNumber++;
            const HeadingTag = `h${block.level || 2}` as keyof React.JSX.IntrinsicElements;
            const headingSizes: Record<number, string> = {
              1: 'text-4xl',
              2: 'text-2xl',
              3: 'text-xl',
              4: 'text-lg',
              5: 'text-base',
              6: 'text-sm'
            };
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <HeadingTag className={`${headingSizes[block.level || 2]} font-bold mb-6 flex items-center gap-3`}>
                  <span className="w-8 h-8 bg-gray-900 text-white text-sm flex items-center justify-center font-mono">
                    {String(sectionNumber).padStart(2, '0')}
                  </span>
                  {block.content}
                </HeadingTag>
              </section>
            );

          case 'paragraph':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <p className="text-gray-600 leading-relaxed">
                  {parseText(block.content)}
                </p>
              </section>
            );

          case 'callout':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <div className="bg-red-50 border border-red-100 p-6 rounded-lg">
                  <p className="text-gray-700">
                    {parseText(block.content)}
                  </p>
                </div>
              </section>
            );

          case 'quote':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <blockquote className="border-l-4 border-gray-900 pl-6 py-2 italic text-xl text-gray-700">
                  {parseText(block.content)}
                </blockquote>
              </section>
            );

          case 'list':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <ul className="space-y-2 text-gray-600">
                  {block.content.split('\n').filter(Boolean).map((item: any, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{parseText(item.replace(/^[•\-]\s*/, ''))}</span>
                    </li>
                  ))}
                </ul>
              </section>
            );

          case 'image':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <figure className="my-8">
                  <img 
                    src={block.content} 
                    alt={block.caption || ''} 
                    className="w-full rounded-lg border border-gray-200"
                  />
                  {(block.caption || block.credit) && (
                    <figcaption className="mt-3 text-sm text-gray-500 text-center">
                      {block.caption && <span>{block.caption}</span>}
                      {block.credit && <span className="block text-xs mt-1">{block.credit}</span>}
                    </figcaption>
                  )}
                </figure>
              </section>
            );

          case 'video':
            // Convert various video URLs to embed format
            const getEmbedUrl = (url: string): string | null => {
              if (!url) return null;
              
              // YouTube formats:
              // https://www.youtube.com/watch?v=VIDEO_ID
              // https://youtu.be/VIDEO_ID
              // https://www.youtube.com/embed/VIDEO_ID
              // https://www.youtube.com/shorts/VIDEO_ID
              const youtubeMatch = url.match(
                /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
              );
              if (youtubeMatch) {
                return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
              }
              
              // Vimeo formats:
              // https://vimeo.com/VIDEO_ID
              // https://player.vimeo.com/video/VIDEO_ID
              const vimeoMatch = url.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/);
              if (vimeoMatch) {
                return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
              }
              
              // If it's already an embed URL or iframe-ready URL, return as-is
              if (url.includes('/embed/') || url.includes('player.vimeo.com')) {
                return url;
              }
              
              return null;
            };
            
            const embedUrl = getEmbedUrl(block.content);
            
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <div className="my-8">
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                    {embedUrl ? (
                      <iframe
                        src={embedUrl}
                        className="w-full h-full rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div className="text-center p-4">
                        <span className="text-gray-400 block">Invalid video URL</span>
                        {block.content && (
                          <span className="text-xs text-gray-300 mt-1 block break-all">{block.content}</span>
                        )}
                      </div>
                    )}
                  </div>
                  {block.caption && (
                    <p className="mt-3 text-sm text-gray-500 text-center">{block.caption}</p>
                  )}
                </div>
              </section>
            );

          case 'timeline':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <div className="space-y-6 border-l-2 border-gray-300 pl-6 my-8">
                  {block.items?.map((item: any, i: number) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[29px] w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
                      <div className="font-mono text-sm text-red-500 mb-1">{item.num}</div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      {item.desc && <div className="text-gray-600 text-sm mt-1">{item.desc}</div>}
                    </div>
                  ))}
                </div>
              </section>
            );

          case 'comparison':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <div className="my-8 overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-900 text-white">
                        {block.content?.split('|').map((header: any, i: number) => (
                          <th key={i} className="p-4 text-left font-semibold">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.items?.map((row: any, i: number) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="p-4 border-b border-gray-200">{row.title}</td>
                          <td className="p-4 border-b border-gray-200">{row.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            );

          case 'key-mechanisms':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <div className="bg-gray-50 p-6 md:p-8 rounded-lg border border-gray-200">
                  <p className="text-xs font-mono text-red-500 mb-6 tracking-widest font-semibold">KEY MECHANISMS</p>
                  <div className="space-y-4">
                    {block.items?.map((item: any, i: number) => (
                      <div
                        key={i}
                        className="mechanism-item flex gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-white hover:pl-6 hover:border-l-4 hover:border-red-500"
                      >
                        <span className="text-red-500 font-mono font-bold text-sm">{item.num}</span>
                        <div>
                          <strong className="text-gray-900 block mb-1">{item.title}</strong>
                          <span className="text-gray-500 text-sm">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );

          case 'stat-grid':
            const StatSection = () => {
              const ref = useRef<HTMLDivElement>(null);
              
              useEffect(() => {
                const observer = new IntersectionObserver(
                  (entries) => {
                    if (entries[0].isIntersecting && block.stats) {
                      animateStats(block.id, block.stats);
                    }
                  },
                  { threshold: 0.5 }
                );
                if (ref.current) observer.observe(ref.current);
                return () => observer.disconnect();
              }, []);

              const getColor = (color: string) => {
                switch (color) {
                  case 'red': return 'from-red-500 to-red-600';
                  case 'orange': return 'from-orange-500 to-orange-600';
                  case 'blue': return 'from-blue-500 to-blue-600';
                  case 'green': return 'from-green-500 to-green-600';
                  default: return 'from-gray-800 to-gray-900';
                }
              };

              const getLabelColor = (color: string) => {
                switch (color) {
                  case 'red': return 'text-red-100';
                  case 'orange': return 'text-orange-100';
                  case 'blue': return 'text-blue-100';
                  case 'green': return 'text-green-100';
                  default: return 'text-gray-300';
                }
              };

              return (
                <section
                  ref={ref}
                  id={block.id}
                  data-animate
                  className={sectionClass(block.id)}
                >
                  <div className="grid md:grid-cols-3 gap-4 my-8">
                    {block.stats?.map((stat: any, idx: number) => (
                      <div
                        key={idx}
                        className={`stat-card bg-gradient-to-br ${getColor(stat.color)} p-6 text-center text-white rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                      >
                        <p className="text-4xl md:text-5xl font-bold">
                          {getStatDisplay(block.id, idx, stat.value)}
                        </p>
                        <p className={`${getLabelColor(stat.color)} text-sm mt-2 font-medium`}>
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              );
            };
            return <StatSection key={block.id} />;

          case 'sources':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={`${sectionClass(block.id)} mt-16 pt-8 border-t-2 border-gray-200`}
              >
                <p className="text-xs font-mono text-gray-400 mb-6 tracking-widest">SOURCES & CITATIONS</p>
                <ul className="space-y-3 text-sm text-gray-500">
                  {block.sources?.map((source: any, i: number) => (
                    <li key={i} className="flex items-start gap-3 hover:text-gray-700 transition-colors duration-200">
                      <span className="text-red-400">•</span>
                      <span>{source}</span>
                    </li>
                  ))}
                </ul>
              </section>
            );

          // ========== NEW BLOCKS ==========

          case 'numbered-list':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <ol className="list-decimal list-inside space-y-2 text-gray-600 leading-relaxed">
                  {block.content?.split('\n').filter(Boolean).map((item: any, i: number) => {
                    const text = item.replace(/^\d+\.\s*/, '');
                    return (
                      <li key={i} className="pl-2">
                        {parseText(text)}
                      </li>
                    );
                  })}
                </ol>
              </section>
            );

          case 'twitter':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <div className="my-8 flex justify-center">
                  <div className="max-w-lg w-full bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">𝕏</span>
                      </div>
                      <span className="font-semibold text-gray-900">Twitter/X Post</span>
                    </div>
                    <a 
                      href={block.content} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-sm break-all"
                    >
                      {block.content}
                    </a>
                    <p className="text-xs text-gray-400 mt-3">Click to view on Twitter/X</p>
                  </div>
                </div>
              </section>
            );

          case 'instagram':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <div className="my-8 flex justify-center">
                  <div className="max-w-lg w-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-[2px] rounded-xl">
                    <div className="bg-white rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xl">📸</span>
                        </div>
                        <span className="font-semibold text-gray-900">Instagram Post</span>
                      </div>
                      <a 
                        href={block.content} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-pink-500 hover:underline text-sm break-all"
                      >
                        {block.content}
                      </a>
                      <p className="text-xs text-gray-400 mt-3">Click to view on Instagram</p>
                    </div>
                  </div>
                </div>
              </section>
            );

          case 'tiktok':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <div className="my-8 flex justify-center">
                  <div className="max-w-lg w-full bg-black rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🎵</span>
                      </div>
                      <span className="font-semibold text-white">TikTok Video</span>
                    </div>
                    <a 
                      href={block.content} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline text-sm break-all"
                    >
                      {block.content}
                    </a>
                    <p className="text-xs text-gray-400 mt-3">Click to view on TikTok</p>
                  </div>
                </div>
              </section>
            );

          case 'audio':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <div className="my-8 bg-gray-100 rounded-lg p-6">
                  {block.caption && (
                    <p className="font-semibold text-gray-900 mb-3">{block.caption}</p>
                  )}
                  <audio controls className="w-full">
                    <source src={block.content} />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </section>
            );

          case 'map':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <div className="my-8">
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    {block.content ? (
                      <iframe
                        src={block.content}
                        className="w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        Map URL required
                      </div>
                    )}
                  </div>
                  {block.caption && (
                    <p className="mt-3 text-sm text-gray-500 text-center">{block.caption}</p>
                  )}
                </div>
              </section>
            );

          case 'gallery':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <div className="my-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                  {block.galleryImages?.map((img: any, i: number) => (
                    <figure key={i} className="relative group">
                      <img 
                        src={img.url} 
                        alt={img.caption || ''} 
                        className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                      />
                      {img.caption && (
                        <figcaption className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </section>
            );

          case 'code':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <div className="my-8 rounded-lg overflow-hidden">
                  <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                    <span className="text-gray-400 text-xs font-mono">{block.language || 'code'}</span>
                    <button 
                      onClick={() => navigator.clipboard.writeText(block.content)}
                      className="text-gray-400 hover:text-white text-xs"
                    >
                      Copy
                    </button>
                  </div>
                  <pre className="bg-gray-900 p-4 overflow-x-auto">
                    <code className="text-sm text-gray-100 font-mono whitespace-pre-wrap">
                      {block.content}
                    </code>
                  </pre>
                </div>
              </section>
            );

          case 'data-table':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <div className="my-8 overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-900 text-white">
                        {block.tableData?.headers?.map((header: any, i: number) => (
                          <th key={i} className="p-4 text-left font-semibold">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.tableData?.rows?.map((row: any, i: number) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          {row.map((cell: any, j: number) => (
                            <td key={j} className="p-4 border-b border-gray-200">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            );

          case 'chart':
            // Parse chart data from content
            const chartData = block.content?.split('\n').filter(Boolean).map(line => {
              const [label, value] = line.split(':');
              return { label: label?.trim() || '', value: parseFloat(value) || 0 };
            }) || [];
            const maxValue = Math.max(...chartData.map(d => d.value), 1);

            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <div className="my-8 bg-gray-50 rounded-lg p-6">
                  {block.caption && (
                    <h4 className="font-semibold text-gray-900 mb-4 text-center">{block.caption}</h4>
                  )}
                  {block.chartType === 'bar' && (
                    <div className="space-y-3">
                      {chartData.map((item: any, i: number) => (
                        <div key={i} className="flex items-center gap-4">
                          <span className="w-24 text-sm text-gray-600 truncate">{item.label}</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden">
                            <div 
                              className="bg-blue-500 h-full rounded-full transition-all duration-500"
                              style={{ width: `${(item.value / maxValue) * 100}%` }}
                            />
                          </div>
                          <span className="w-12 text-sm font-semibold text-gray-900">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {block.chartType === 'pie' && (
                    <div className="flex flex-wrap justify-center gap-4">
                      {chartData.map((item: any, i: number) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded-full`} style={{ backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'][i % 6] }} />
                          <span className="text-sm text-gray-600">{item.label}: {item.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {block.chartType === 'line' && (
                    <div className="text-center text-gray-500 text-sm">
                      Line chart visualization (data: {chartData.map(d => d.value).join(', ')})
                    </div>
                  )}
                </div>
              </section>
            );

          case 'poll':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <div className="my-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">{block.content}</h4>
                  <div className="space-y-2">
                    {block.pollOptions?.map((option: any, i: number) => (
                      <button 
                        key={i}
                        className="w-full text-left px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-4">Poll is for display purposes only</p>
                </div>
              </section>
            );

          case 'accordion':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <div className="my-8 space-y-2">
                  {block.items?.map((item: any, i: number) => (
                    <details key={i} className="bg-white border border-gray-200 rounded-lg group">
                      <summary className="px-4 py-3 font-semibold text-gray-900 cursor-pointer hover:bg-gray-50 list-none flex items-center justify-between">
                        {item.title}
                        <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <div className="px-4 py-3 border-t border-gray-100 text-gray-600">
                        {item.desc}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            );

          case 'divider':
            return (
              <section
                key={block.id}
                id={block.id}
                className="my-12"
              >
                {block.content === 'line' && <hr className="border-gray-300" />}
                {block.content === 'dots' && (
                  <div className="flex justify-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full" />
                  </div>
                )}
                {block.content === 'stars' && (
                  <div className="text-center text-gray-400 tracking-widest">✦ ✦ ✦</div>
                )}
                {block.content === 'space' && <div className="h-8" />}
                {!block.content && <hr className="border-gray-300" />}
              </section>
            );

          case 'author-bio':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <div className="my-8 bg-gray-50 rounded-lg p-6 flex gap-6 items-start">
                  {block.authorImage && (
                    <img 
                      src={block.authorImage} 
                      alt={block.authorName || 'Author'} 
                      className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                    />
                  )}
                  <div>
                    <p className="text-xs font-mono text-gray-400 mb-1 tracking-widest">ABOUT THE AUTHOR</p>
                    <h4 className="font-bold text-gray-900 text-lg">{block.authorName}</h4>
                    <p className="text-gray-600 mt-2">{block.authorBio}</p>
                  </div>
                </div>
              </section>
            );

          case 'related-articles':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <div className="my-8">
                  <p className="text-xs font-mono text-gray-400 mb-4 tracking-widest">RELATED ARTICLES</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {block.relatedLinks?.map((link: any, i: number) => (
                      <a 
                        key={i}
                        href={link.url}
                        className="flex gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-400 hover:shadow-md transition-all group"
                      >
                        {link.image && (
                          <img src={link.image} alt="" className="w-24 h-16 object-cover rounded flex-shrink-0" />
                        )}
                        <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {link.title}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </section>
            );

          case 'newsletter':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <div className="my-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg p-8 text-center">
                  <h4 className="text-2xl font-bold mb-2">{block.content || 'Subscribe to our newsletter'}</h4>
                  <p className="text-gray-300 mb-6">{block.caption || 'Get the latest updates delivered to your inbox.'}</p>
                  <div className="flex max-w-md mx-auto gap-2">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                    />
                    <button className="px-6 py-2 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </section>
            );

          case 'button':
            const buttonStyles = {
              primary: 'bg-gray-900 text-white hover:bg-gray-800',
              secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
              outline: 'border-2 border-gray-900 text-gray-900 hover:bg-gray-100',
            };
            const buttonStyle = (block.buttonStyle || 'primary') as 'primary' | 'secondary' | 'outline';
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <div className="my-8 flex justify-center">
                  <a 
                    href={block.buttonUrl || '#'}
                    className={`px-8 py-3 rounded-lg font-semibold transition-colors ${buttonStyles[buttonStyle]}`}
                  >
                    {block.content || 'Click Here'}
                  </a>
                </div>
              </section>
            );

          case 'file-download':
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <div className="my-8">
                  <a 
                    href={block.fileUrl || '#'}
                    download
                    className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 hover:border-gray-300 transition-all"
                  >
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📎</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{block.fileName || 'Download File'}</p>
                      {block.content && <p className="text-sm text-gray-500">{block.content}</p>}
                    </div>
                    <span className="text-gray-400">↓</span>
                  </a>
                </div>
              </section>
            );

          case 'pros-cons':
            const pros = block.items?.filter((item: any) => item.num === 'pro') || [];
            const cons = block.items?.filter((item: any) => item.num === 'con') || [];
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <div className="my-8">
                  {block.content && (
                    <h4 className="font-bold text-gray-900 text-lg mb-4">{block.content}</h4>
                  )}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h5 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                        <span>✓</span> Pros
                      </h5>
                      <ul className="space-y-2">
                        {pros.map((item: any, i: number) => (
                          <li key={i} className="text-green-700 flex items-start gap-2">
                            <span className="text-green-500 mt-1">•</span>
                            {item.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h5 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                        <span>✗</span> Cons
                      </h5>
                      <ul className="space-y-2">
                        {cons.map((item: any, i: number) => (
                          <li key={i} className="text-red-700 flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            {item.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            );

          default:
            return null;
        }
      })}

      {/* Corrections Notice */}
      <section className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
        <p className="text-sm text-gray-500">
          <strong className="text-gray-700">Corrections Policy:</strong>{' '}
          This article will be updated as new information becomes available.
          No corrections have been made since initial publication.
        </p>
      </section>
    </div>
  );
}
