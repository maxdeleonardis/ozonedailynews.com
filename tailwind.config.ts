import type { Config } from 'tailwindcss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const config: Config & { safelist?: any[] } = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Georgia', 'Garamond', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
  safelist: [
    // Safelist for classes used in wiki page HTML stored in Supabase.
    // After static pages are replaced with thin loaders, Tailwind can no longer
    // scan their full JSX content — these patterns ensure the classes are retained.
    { pattern: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl)$/ },
    { pattern: /^font-(normal|medium|semibold|bold|black|serif|sans|mono)$/ },
    { pattern: /^(m|p)(x|y|t|b|l|r)?-(0|1|2|3|4|5|6|7|8|9|10|12|14|16|20|24)$/ },
    { pattern: /^(text|bg|border)-(gray|blue|red|green|orange|yellow|white|black)-(50|100|200|300|400|500|600|700|800|900)$/ },
    { pattern: /^leading-(none|tight|snug|normal|relaxed|loose)$/ },
    { pattern: /^space-(x|y)-(1|2|3|4|5|6|8|10)$/ },
    { pattern: /^(gap|col-span|row-span)-(1|2|3|4|5|6|7|8|9|10|11|12)$/ },
    { pattern: /^(list|list-inside|list-outside|list-disc|list-decimal)$/ },
    { pattern: /^(rounded|rounded-(sm|md|lg|xl|full))$/ },
    { pattern: /^(border|border-(t|b|l|r|x|y))$/ },
    { pattern: /^(overflow|overflow-(x|y))-(hidden|auto|scroll|visible)$/ },
    { pattern: /^(flex|inline-flex|grid|inline-grid|block|inline-block|hidden)$/ },
    { pattern: /^(items|justify|content|self)-(start|end|center|between|around|stretch)$/ },
    { pattern: /^(flex)-(col|row|wrap|nowrap|1|auto|none|shrink|grow)$/ },
    { pattern: /^(w|h|min-w|min-h|max-w|max-h)-(full|screen|auto|fit|max|min|px|0|1|2|4|6|8|10|12|16|20|24|32|48|64)$/ },
    { pattern: /^(sticky|relative|absolute|fixed)$/ },
    { pattern: /^(top|bottom|left|right)-(0|1|2|4|6|8)$/ },
    { pattern: /^(lg|md|sm):(col-span|block|flex|grid|hidden|grid-cols|order)-/ },
    { pattern: /^(opacity)-(0|25|50|75|100)$/ },
    { pattern: /^(italic|underline|line-through|no-underline|uppercase|lowercase|capitalize)$/ },
    { pattern: /^(tracking|tracking)-(tight|normal|wide|wider|widest)$/ },
    { pattern: /^(divide|divide-y|divide-x|divide-(gray|blue|red)-(100|200|300))$/ },
    { pattern: /^(shadow|shadow-(sm|md|lg|xl|2xl|none))$/ },
    // Specific classes commonly used in wiki page content
    'hover:underline',
    'hover:text-blue-600',
    'hover:text-gray-900',
    'text-blue-600',
    'font-serif',
    'border-b',
    'border-t',
    'shrink-0',
    'order-1',
    'order-2',
    'lg:order-1',
    'lg:order-2',
    'lg:col-span-4',
    'lg:col-span-8',
    'lg:col-span-12',
    'grid-cols-1',
    'lg:grid-cols-12',
    'min-h-screen',
    'dark:bg-[#121212]',
    'dark:text-gray-100',
  ],
};

export default config;
