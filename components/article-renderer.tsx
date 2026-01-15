'use client';

import { useEffect, useState, useRef } from 'react';
import { ArticleBlock } from '@/lib/articles-context';

interface ArticleRendererProps {
  blocks: ArticleBlock[];
}

// Parse markdown-style bold (**text**) to spans with key-term class
function parseText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <span key={i} className="key-term">
          {part.slice(2, -2)}
        </span>
      );
    }
    return <span key={i} className="highlight-text">{part}</span>;
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
            const HeadingTag = `h${block.level || 2}` as keyof JSX.IntrinsicElements;
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
                  {block.content.split('\n').filter(Boolean).map((item, i) => (
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
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <div className="my-8">
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    {block.content ? (
                      <iframe
                        src={block.content.replace('watch?v=', 'embed/')}
                        className="w-full h-full rounded-lg"
                        allowFullScreen
                      />
                    ) : (
                      <span className="text-gray-400">Video URL required</span>
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
                  {block.items?.map((item, i) => (
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
                        {block.content?.split('|').map((header, i) => (
                          <th key={i} className="p-4 text-left font-semibold">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.items?.map((row, i) => (
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
                    {block.items?.map((item, i) => (
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
                    {block.stats?.map((stat, idx) => (
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
                  {block.sources?.map((source, i) => (
                    <li key={i} className="flex items-start gap-3 hover:text-gray-700 transition-colors duration-200">
                      <span className="text-red-400">•</span>
                      <span>{source}</span>
                    </li>
                  ))}
                </ul>
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
