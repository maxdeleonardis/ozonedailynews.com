'use client';

import { useState, useRef } from 'react';

// =============================================================================
// TYPES
// =============================================================================

type PerplexityModel = 'sonar' | 'sonar-pro' | 'sonar-reasoning' | 'sonar-reasoning-pro';

interface ResearchResult {
  content: string;
  citations: string[];
  model: string;
  tokensUsed: number;
  query: string;
  timestamp: string;
}

interface HistoryItem extends ResearchResult {
  id: string;
}

// =============================================================================
// QUICK PROMPT TEMPLATES
// =============================================================================

const QUICK_PROMPTS = [
  {
    label: '🏅 Athlete Profile',
    template:
      'Research [ATHLETE NAME]: full biography, birthdate, hometown, sport, career timeline, major achievements, records, Olympic/World Championship results, current team/status, and any recent news as of February 2026.',
  },
  {
    label: '📰 Breaking News',
    template:
      'Research the latest news and developments about [TOPIC] as of February 2026. Provide a detailed summary with key facts, timeline, and context.',
  },
  {
    label: '🏆 Olympic Event',
    template:
      'Research [EVENT/SPORT] at the 2026 Milano Cortina Winter Olympics: results, medal winners, key performances, records broken, and notable storylines.',
  },
  {
    label: '🌍 Topic Deep-Dive',
    template:
      'Provide a comprehensive deep-dive on [TOPIC]. Cover history, current state, key figures, statistics, controversies if any, and recent developments.',
  },
  {
    label: '📊 Stats & Records',
    template:
      'Compile all career statistics, records, and milestones for [ATHLETE/TEAM] in [SPORT]. Include historical context and how these compare to all-time bests.',
  },
];

const MODEL_OPTIONS: { value: PerplexityModel; label: string; description: string }[] = [
  { value: 'sonar', label: 'Sonar', description: 'Fast, efficient — good for quick facts' },
  { value: 'sonar-pro', label: 'Sonar Pro', description: 'Deep research with citations (recommended)' },
  { value: 'sonar-reasoning', label: 'Sonar Reasoning', description: 'Step-by-step reasoning & analysis' },
  { value: 'sonar-reasoning-pro', label: 'Sonar Reasoning Pro', description: 'Most thorough — complex topics' },
];

// =============================================================================
// MARKDOWN RENDERER (lightweight — no external dep needed)
// =============================================================================

function renderMarkdown(text: string): string {
  return text
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold mt-6 mb-2 text-gray-900">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-8 mb-3 text-gray-900 border-b pb-2">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-black mt-8 mb-4 text-gray-900">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="italic">$1</em>')
    .replace(/`(.+?)`/g, '<code class="bg-gray-100 text-red-700 px-1 py-0.5 rounded text-sm font-mono">$1</code>')
    .replace(/^\- (.+)$/gm, '<li class="ml-4 list-disc text-gray-700">$1</li>')
    .replace(/^\d+\. (.+)$/gm, '<li class="ml-4 list-decimal text-gray-700">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, (match) => `<ul class="my-3 space-y-1">${match}</ul>`)
    .replace(/\n\n/g, '</p><p class="mb-3 text-gray-700 leading-relaxed">')
    .replace(/^(?!<[h|u|l|p])(.+)$/gm, '<p class="mb-3 text-gray-700 leading-relaxed">$1</p>');
}

// =============================================================================
// MAIN PAGE
// =============================================================================

export default function ResearchPage() {
  const [query, setQuery] = useState('');
  const [model, setModel] = useState<PerplexityModel>('sonar-pro');
  const [result, setResult] = useState<ResearchResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'rendered' | 'raw'>('rendered');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // ── Submit ──────────────────────────────────────────────────────────────────
  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim() || loading) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch('/api/research', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query.trim(), model }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? 'Research request failed.');
      }

      setResult(data);
      setHistory((prev) => [
        { ...data, id: crypto.randomUUID() },
        ...prev.slice(0, 19), // keep last 20
      ]);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  // ── Copy to clipboard ───────────────────────────────────────────────────────
  const handleCopy = async () => {
    if (!result) return;
    let text = result.content;
    if (result.citations.length > 0) {
      text += '\n\nSources:\n' + result.citations.map((c, i) => `${i + 1}. ${c}`).join('\n');
    }
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // ── Export as .txt ──────────────────────────────────────────────────────────
  const handleExport = () => {
    if (!result) return;
    let text = `OBJECTWIRE RESEARCH EXPORT\n`;
    text += `Query: ${result.query}\n`;
    text += `Model: ${result.model}\n`;
    text += `Date: ${new Date(result.timestamp).toLocaleString()}\n`;
    text += `Tokens: ${result.tokensUsed}\n`;
    text += `${'─'.repeat(60)}\n\n`;
    text += result.content;
    if (result.citations.length > 0) {
      text += `\n\n${'─'.repeat(60)}\nSOURCES\n${'─'.repeat(60)}\n`;
      result.citations.forEach((c, i) => {
        text += `${i + 1}. ${c}\n`;
      });
    }
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `research-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // ── Apply quick prompt ──────────────────────────────────────────────────────
  const applyTemplate = (template: string) => {
    setQuery(template);
    textareaRef.current?.focus();
  };

  // ── Load from history ───────────────────────────────────────────────────────
  const loadHistory = (item: HistoryItem) => {
    setResult(item);
    setQuery(item.query);
    setError(null);
  };

  // ── Keyboard shortcut Cmd/Ctrl + Enter ──────────────────────────────────────
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* ── Header ── */}
      <header className="border-b border-gray-800 bg-gray-900 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white flex items-center justify-center rounded">
              <span className="text-black font-black text-sm">OW</span>
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tight">ObjectWire Research</h1>
              <p className="text-xs text-gray-400">Powered by Perplexity Sonar AI</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse" />
            Live Search Active
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">

        {/* ── LEFT SIDEBAR ── */}
        <aside className="space-y-6">

          {/* Search Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">New Research Query</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-gray-400 mb-1.5 block">
                  Research Query
                </label>
                <textarea
                  ref={textareaRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Who is Darryl Payne Jr.? Research his full athletic career..."
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
                <p className="text-xs text-gray-600 mt-1">⌘ + Enter to submit</p>
              </div>

              {/* Model Selector */}
              <div>
                <label className="text-xs font-semibold text-gray-400 mb-1.5 block">Model</label>
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value as PerplexityModel)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {MODEL_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label} — {opt.description}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={loading || !query.trim()}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:text-gray-500 text-white font-bold py-2.5 px-4 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Researching...
                  </>
                ) : (
                  <>🔍 Run Research</>
                )}
              </button>
            </form>
          </div>

          {/* Quick Prompts */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">Quick Templates</h2>
            <div className="space-y-2">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt.label}
                  onClick={() => applyTemplate(prompt.template)}
                  className="w-full text-left text-xs bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-lg px-3 py-2.5 transition-colors text-gray-300 hover:text-white"
                >
                  {prompt.label}
                </button>
              ))}
            </div>
          </div>

          {/* History */}
          {history.length > 0 && (
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">
                Recent Queries ({history.length})
              </h2>
              <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                {history.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => loadHistory(item)}
                    className="w-full text-left text-xs bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg px-3 py-2.5 transition-colors"
                  >
                    <p className="text-gray-300 truncate font-medium">{item.query}</p>
                    <p className="text-gray-600 mt-0.5">
                      {new Date(item.timestamp).toLocaleTimeString()} · {item.model} · {item.tokensUsed} tokens
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className="min-h-[600px]">

          {/* Error state */}
          {error && (
            <div className="bg-red-950 border border-red-800 rounded-xl p-5 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-300 mb-1">Research Failed</h3>
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Loading state */}
          {loading && (
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 flex flex-col items-center justify-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-gray-700 border-t-blue-500 animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
              </div>
              <div className="text-center">
                <p className="font-bold text-white">Researching with Perplexity {model}...</p>
                <p className="text-sm text-gray-400 mt-1">Searching the web and synthesizing results</p>
              </div>
              <div className="flex gap-1.5 mt-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Result */}
          {result && !loading && (
            <div className="space-y-4">

              {/* Result Meta Bar */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl px-5 py-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="bg-green-900 text-green-300 border border-green-700 px-2.5 py-1 rounded-full font-semibold">
                    ✓ Research Complete
                  </span>
                  <span className="text-gray-500">Model: <span className="text-gray-300 font-medium">{result.model}</span></span>
                  <span className="text-gray-500">Tokens: <span className="text-gray-300 font-medium">{result.tokensUsed.toLocaleString()}</span></span>
                  <span className="text-gray-500">
                    {new Date(result.timestamp).toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-xs bg-gray-800 hover:bg-gray-700 border border-gray-700 px-3 py-1.5 rounded-lg transition-colors text-gray-300 hover:text-white"
                  >
                    {copied ? '✓ Copied!' : '📋 Copy'}
                  </button>
                  <button
                    onClick={handleExport}
                    className="flex items-center gap-1.5 text-xs bg-gray-800 hover:bg-gray-700 border border-gray-700 px-3 py-1.5 rounded-lg transition-colors text-gray-300 hover:text-white"
                  >
                    ⬇️ Export .txt
                  </button>
                </div>
              </div>

              {/* Query display */}
              <div className="bg-blue-950 border border-blue-800 rounded-xl px-5 py-3">
                <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-1">Query</p>
                <p className="text-blue-100 text-sm">{result.query}</p>
              </div>

              {/* Content Tabs */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                {/* Tab Bar */}
                <div className="flex border-b border-gray-800">
                  <button
                    onClick={() => setActiveTab('rendered')}
                    className={`px-5 py-3 text-sm font-semibold transition-colors ${
                      activeTab === 'rendered'
                        ? 'text-white border-b-2 border-blue-500 bg-gray-800'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    📄 Rendered
                  </button>
                  <button
                    onClick={() => setActiveTab('raw')}
                    className={`px-5 py-3 text-sm font-semibold transition-colors ${
                      activeTab === 'raw'
                        ? 'text-white border-b-2 border-blue-500 bg-gray-800'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    📝 Raw Markdown
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 max-h-[70vh] overflow-y-auto">
                  {activeTab === 'rendered' ? (
                    <div
                      className="text-gray-200 text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: renderMarkdown(result.content) }}
                    />
                  ) : (
                    <pre className="text-gray-300 text-xs font-mono whitespace-pre-wrap leading-relaxed">
                      {result.content}
                    </pre>
                  )}
                </div>
              </div>

              {/* Citations */}
              {result.citations.length > 0 && (
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Sources &amp; Citations ({result.citations.length})
                  </h3>
                  <ol className="space-y-2">
                    {result.citations.map((citation, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs">
                        <span className="text-gray-600 font-mono shrink-0 mt-0.5">{i + 1}.</span>
                        <a
                          href={citation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 hover:underline break-all"
                        >
                          {citation}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          )}

          {/* Empty state */}
          {!result && !loading && !error && (
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-16 flex flex-col items-center justify-center text-center gap-4">
              <div className="text-6xl">🔬</div>
              <div>
                <h2 className="text-xl font-black text-white mb-2">ObjectWire Research Tool</h2>
                <p className="text-gray-400 text-sm max-w-md">
                  Enter a query in the sidebar to start researching. Use quick templates to get started fast, or write your own detailed research prompt.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4 text-left w-full max-w-lg">
                {[
                  { icon: '🏅', label: 'Athlete Profiles', desc: 'Full bios, stats, career timelines' },
                  { icon: '📰', label: 'Breaking News', desc: 'Latest developments on any topic' },
                  { icon: '🏆', label: 'Olympic Events', desc: 'Results, records, key moments' },
                  { icon: '📊', label: 'Deep Research', desc: 'Multi-source synthesized analysis' },
                ].map((item) => (
                  <div key={item.label} className="bg-gray-800 border border-gray-700 rounded-lg p-3">
                    <p className="text-base mb-1">{item.icon}</p>
                    <p className="text-white text-xs font-bold">{item.label}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
