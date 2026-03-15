import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/JackArticleDB';

const SLUG = '/claude/news/federal-agencies-replace-claude-gpt-41-trump-executive-directive';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    'Federal Agencies Evict Claude, Replace It With GPT-4.1 After Trump Executive Directive | ObjectWire',
  description:
    "The U.S. State Department's StateChat has swapped Claude Sonnet 4.5 for OpenAI GPT-4.1, the Senate has approved Microsoft Copilot, Google Gemini, and ChatGPT Enterprise for official use — while excluding Anthropic entirely. Anthropic has filed two lawsuits in response.",
  keywords: [
    'federal government replaces Claude GPT-4.1 2026',
    'Trump executive directive Anthropic supply chain risk',
    'State Department StateChat Claude GPT-4.1 switch',
    'Senate approved AI tools Copilot Gemini ChatGPT',
    'Anthropic federal ban Pete Hegseth Department of War',
    'Anthropic evicted federal agencies March 2026',
    'Anthropic supply chain risk designation lawsuit',
    'Dario Amodei federal government AI contract',
    'StateChat GPT-4.1 training cutoff regression',
    'Senate Sergeant at Arms AI memo March 2026',
    'Anthropic autonomous weapons refusal federal ban',
    'Claude federal government banned OpenAI replacement',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Federal Agencies Evict Claude, Replace With GPT-4.1 After Trump Directive',
    description:
      "The State Department's StateChat has silently swapped Claude Sonnet 4.5 for GPT-4.1. The Senate has approved Microsoft, Google, and OpenAI — but not Anthropic. Anthropic CEO Dario Amodei says the move threatens 'billions in contracts.'",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-12T00:00:00Z',
    modifiedTime: '2026-03-12T00:00:00Z',
    section: 'Technology',
    tags: ['Anthropic', 'Claude', 'OpenAI', 'GPT-4.1', 'Federal Government', 'AI Policy', 'Trump'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude is Out of the U.S. Federal Government. GPT-4.1 Is In.',
    description:
      "State Department's StateChat: Claude → GPT-4.1. Senate approves Copilot, Gemini, ChatGPT — zero mention of Anthropic. Anthropic suing the government. Full breakdown.",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const keyFacts = [
  { label: 'Executive Directive',    value: 'February 27, 2026 — President Trump' },
  { label: 'Anthropic Designation',  value: '"Supply chain risk" — Secretary Pete Hegseth' },
  { label: 'State Dept. Platform',   value: 'StateChat — backbone swapped Claude Sonnet 4.5 → GPT-4.1' },
  { label: 'Compliance Deadline',    value: 'March 6, 2026 — all custom Anthropic configurations' },
  { label: 'Training Cutoff Shift',  value: 'June 2025 (Claude) → May 2024 (GPT-4.1) — 13-month regression' },
  { label: 'Senate Memo Date',       value: 'March 9, 2026 — Sergeant at Arms' },
  { label: 'Senate-Approved Tools',  value: 'Microsoft Copilot Chat · Google Gemini · OpenAI ChatGPT Enterprise' },
  { label: 'Anthropic Status',       value: '"Under evaluation" — effectively excluded from all executive branch use' },
  { label: 'Lawsuits Filed',         value: '2 — Anthropic vs. federal government, filed March 9, 2026' },
];

const divideStats = [
  { value: '3', label: 'Senate-approved AI tools (Copilot, Gemini, ChatGPT)' },
  { value: '0', label: 'Anthropic products on the Senate approved list' },
  { value: '13 mo', label: 'Training data regression: Claude (Jun 2025) → GPT-4.1 (May 2024)' },
  { value: '2', label: 'Lawsuits Anthropic filed vs. the federal government (Mar 9, 2026)' },
];

const safetyDivide = [
  { label: 'Autonomous Warfare',      value: 'Anthropic prohibits Claude for lethal autonomous weapons. Government: called it a "handcuff" on innovation.' },
  { label: 'Domestic Surveillance',   value: 'Anthropic refused mass surveillance of U.S. citizens. Government: designated as "supply chain risk."' },
  { label: 'Control Model',           value: 'Anthropic: industry-led guardrails. Government: the state must decide AI deployment for national defense.' },
];

const senateApproved = [
  { label: 'Microsoft Copilot Chat',      value: 'Integrated into Microsoft 365 — approved for official Senate use' },
  { label: 'Google Workspace + Gemini',  value: 'Gemini Chat within Google Workspace — approved' },
  { label: 'OpenAI ChatGPT Enterprise',  value: 'Enterprise tier — approved' },
  { label: "Elon Musk's Grok",          value: 'Absent from approved list — not approved' },
  { label: 'Anthropic Claude',           value: '"Under evaluation" — excluded from executive branch; not on Senate list' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FederalAgenciesEvictClaudePage() {
  return <JackArticleDB slug="claude-news-federal-agencies-replace-claude-gpt-41-trump-executive-directive" />;
}