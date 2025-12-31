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
            return (
              <section
                key={block.id}
                id={block.id}
                data-animate
                className={sectionClass(block.id)}
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-gray-900 text-white text-sm flex items-center justify-center font-mono">
                    {String(sectionNumber).padStart(2, '0')}
                  </span>
                  {block.content}
                </h2>
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
