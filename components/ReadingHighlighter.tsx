'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

const HIGHLIGHT_COLORS = [
  { name: 'Green', value: 'rgba(134, 239, 172, 0.6)', class: 'bg-green-300' },
  { name: 'Yellow', value: 'rgba(255, 255, 0, 0.5)', class: 'bg-yellow-300' },
  { name: 'Blue', value: 'rgba(147, 197, 253, 0.6)', class: 'bg-blue-300' },
  { name: 'Pink', value: 'rgba(249, 168, 212, 0.6)', class: 'bg-pink-300' },
  { name: 'Orange', value: 'rgba(253, 186, 116, 0.6)', class: 'bg-orange-300' },
  { name: 'Purple', value: 'rgba(196, 181, 253, 0.6)', class: 'bg-purple-300' },
];

interface HighlightedWord {
  element: HTMLSpanElement;
  opacity: number;
  timestamp: number;
}

export function ReadingHighlighter() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [highlightColor, setHighlightColor] = useState(HIGHLIGHT_COLORS[0].value);
  const [showSettings, setShowSettings] = useState(false);
  const highlightedWordsRef = useRef<HighlightedWord[]>([]);
  const processedElementsRef = useRef<WeakSet<Element>>(new WeakSet());
  const animationFrameRef = useRef<number | null>(null);

  // Load preferences from localStorage
  useEffect(() => {
    const savedEnabled = localStorage.getItem('highlighter-enabled');
    const savedColor = localStorage.getItem('highlighter-color');
    
    if (savedEnabled !== null) {
      setIsEnabled(savedEnabled === 'true');
    }
    if (savedColor) {
      setHighlightColor(savedColor);
    }
  }, []);

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem('highlighter-enabled', String(isEnabled));
  }, [isEnabled]);

  useEffect(() => {
    localStorage.setItem('highlighter-color', highlightColor);
  }, [highlightColor]);

  // Wrap text nodes in word spans
  const wrapTextInSpans = useCallback((element: Element) => {
    if (processedElementsRef.current.has(element)) return;
    
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          if (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE') return NodeFilter.FILTER_REJECT;
          if (parent.classList.contains('reading-word')) return NodeFilter.FILTER_REJECT;
          if (parent.closest('nav, header, footer, button, input, .no-highlight')) return NodeFilter.FILTER_REJECT;
          if (node.textContent?.trim()) return NodeFilter.FILTER_ACCEPT;
          return NodeFilter.FILTER_REJECT;
        }
      }
    );

    const textNodes: Text[] = [];
    let node;
    while ((node = walker.nextNode())) {
      textNodes.push(node as Text);
    }

    textNodes.forEach((textNode) => {
      const text = textNode.textContent || '';
      const words = text.split(/(\s+)/);
      
      if (words.length <= 1 && !words[0]?.trim()) return;

      const fragment = document.createDocumentFragment();
      
      words.forEach((word) => {
        if (/^\s+$/.test(word)) {
          fragment.appendChild(document.createTextNode(word));
        } else if (word.trim()) {
          const span = document.createElement('span');
          span.className = 'reading-word';
          span.style.cssText = 'transition: background-color 0.1s ease-in, opacity 0.3s ease-out; border-radius: 2px; padding: 0 1px;';
          span.textContent = word;
          fragment.appendChild(span);
        }
      });

      textNode.parentNode?.replaceChild(fragment, textNode);
    });

    processedElementsRef.current.add(element);
  }, []);

  // Fade out trailing highlights
  const updateTrailingHighlights = useCallback(() => {
    const now = Date.now();
    const fadeOutDuration = 2500; // ms for trail to fade
    
    highlightedWordsRef.current = highlightedWordsRef.current.filter((item) => {
      const elapsed = now - item.timestamp;
      
      if (elapsed > fadeOutDuration) {
        item.element.style.backgroundColor = '';
        return false;
      }
      
      // Calculate fading opacity
      const progress = elapsed / fadeOutDuration;
      const newOpacity = 1 - progress;
      
      // Parse the current color and apply fading
      const colorMatch = highlightColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (colorMatch) {
        const [, r, g, b] = colorMatch;
        item.element.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${0.6 * newOpacity})`;
      }
      
      return true;
    });

    if (highlightedWordsRef.current.length > 0) {
      animationFrameRef.current = requestAnimationFrame(updateTrailingHighlights);
    }
  }, [highlightColor]);

  // Handle mouse movement
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isEnabled) return;

    const target = e.target as HTMLElement;
    
    // Skip interactive/navigation elements
    if (target.closest('nav, header, footer, button, input, select, textarea, .no-highlight')) return;

    // Check if we're in a content area
    const contentParent = target.closest('article, main, .prose, p, li, td, th, blockquote, h1, h2, h3, h4, h5, h6');
    if (!contentParent) return;

    // Wrap text in spans if not already done
    wrapTextInSpans(contentParent);

    // Find all word spans near the cursor
    const wordSpans = contentParent.querySelectorAll('.reading-word');
    const cursorX = e.clientX;
    const cursorY = e.clientY;
    
    const nearbyWords: { span: HTMLSpanElement; distance: number }[] = [];

    wordSpans.forEach((span) => {
      const rect = span.getBoundingClientRect();
      const spanCenterX = rect.left + rect.width / 2;
      const spanCenterY = rect.top + rect.height / 2;
      
      // Check if cursor is near this word (within ~100px horizontal, ~30px vertical)
      const distanceX = Math.abs(cursorX - spanCenterX);
      const distanceY = Math.abs(cursorY - spanCenterY);
      
      if (distanceY < 20 && distanceX < 150) {
        nearbyWords.push({
          span: span as HTMLSpanElement,
          distance: distanceX
        });
      }
    });

    // Sort by distance and take closest 3-4 words
    nearbyWords.sort((a, b) => a.distance - b.distance);
    const wordsToHighlight = nearbyWords.slice(0, 4);

    // Highlight the nearby words
    wordsToHighlight.forEach(({ span }) => {
      // Check if already in the highlighted list
      const existing = highlightedWordsRef.current.find(item => item.element === span);
      
      if (existing) {
        // Refresh timestamp to keep it bright
        existing.timestamp = Date.now();
        existing.opacity = 1;
      } else {
        // Add new highlight
        span.style.backgroundColor = highlightColor;
        highlightedWordsRef.current.push({
          element: span,
          opacity: 1,
          timestamp: Date.now()
        });
      }
    });

    // Start the fade animation if not already running
    if (animationFrameRef.current === null && highlightedWordsRef.current.length > 0) {
      animationFrameRef.current = requestAnimationFrame(updateTrailingHighlights);
    }
  }, [isEnabled, highlightColor, wrapTextInSpans, updateTrailingHighlights]);

  // Set up event listeners
  useEffect(() => {
    if (isEnabled) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      // Clean up any remaining highlights
      highlightedWordsRef.current.forEach(item => {
        item.element.style.backgroundColor = '';
      });
      highlightedWordsRef.current = [];
    };
  }, [isEnabled, handleMouseMove]);

  // Clean up when disabled
  useEffect(() => {
    if (!isEnabled) {
      highlightedWordsRef.current.forEach(item => {
        item.element.style.backgroundColor = '';
      });
      highlightedWordsRef.current = [];
    }
  }, [isEnabled]);

  return (
    <>
      {/* Floating Settings Button */}
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setShowSettings(!showSettings)}
          className={`w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 ${
            isEnabled ? 'bg-green-400 text-green-900' : 'bg-gray-300 text-gray-600'
          }`}
          title="Reading Highlighter Settings"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>

        {/* Settings Panel */}
        {showSettings && (
          <div className="absolute bottom-14 left-0 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-64">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-gray-900 text-sm">Reading Highlighter</h4>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            {/* Enable/Disable Toggle */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600">Enable Highlighter</span>
              <button
                onClick={() => setIsEnabled(!isEnabled)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  isEnabled ? 'bg-green-400' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                    isEnabled ? 'left-7' : 'left-1'
                  }`}
                />
              </button>
            </div>

            {/* Color Selection */}
            {isEnabled && (
              <div>
                <p className="text-xs text-gray-500 mb-2">Highlight Color</p>
                <div className="grid grid-cols-6 gap-2">
                  {HIGHLIGHT_COLORS.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setHighlightColor(color.value)}
                      className={`w-8 h-8 rounded-full ${color.class} transition-transform hover:scale-110 ${
                        highlightColor === color.value
                          ? 'ring-2 ring-offset-2 ring-gray-400'
                          : ''
                      }`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            <p className="text-xs text-gray-400 mt-3">
              Move cursor over text to highlight as you read
            </p>
          </div>
        )}
      </div>
    </>
  );
}
