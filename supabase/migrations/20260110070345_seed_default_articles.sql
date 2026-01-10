-- Seed data for default articles
-- This migration adds initial blog posts to the articles table

INSERT INTO articles (
  slug,
  title,
  excerpt,
  content,
  category,
  author,
  featured,
  published_at,
  image_url
) VALUES
(
  'introducing-bitchat-jack-dorsey',
  'Introducing BitChat - Jack Dorsey',
  'Jack Dorsey unveils a new decentralized messaging platform built on Bitcoin.',
  '[{"id":"1","type":"heading","content":"Introduction to BitChat"},{"id":"2","type":"paragraph","content":"Jack Dorsey has announced BitChat, a revolutionary decentralized messaging platform built on Bitcoin''s Lightning Network. This new platform promises to deliver secure, censorship-resistant communication."},{"id":"3","type":"heading","content":"Key Features"},{"id":"4","type":"paragraph","content":"BitChat leverages the Lightning Network for instant, low-cost message delivery while maintaining the security and decentralization that Bitcoin provides."}]'::jsonb,
  'Technology',
  'ObjectWire Editorial',
  true,
  NOW(),
  '/images/bitchat.jpg'
),
(
  'blitzy-ai-powered-autonomous-software-development',
  'Blitzy - AI-Powered Autonomous Software Development',
  'Discover how Blitzy is revolutionizing software development with autonomous AI agents.',
  '[{"id":"1","type":"heading","content":"The Future of Software Development"},{"id":"2","type":"paragraph","content":"Blitzy represents a paradigm shift in how software is created. Using advanced AI agents, it can autonomously design, code, and deploy applications with minimal human intervention."},{"id":"3","type":"heading","content":"How It Works"},{"id":"4","type":"paragraph","content":"The platform uses multiple specialized AI agents that collaborate to understand requirements, architect solutions, write code, and perform testing automatically."}]'::jsonb,
  'AI',
  'ObjectWire Editorial',
  true,
  NOW(),
  '/images/blitzy.jpg'
),
(
  'chatgpt-staffers-to-offer-secondary-sale-at-500b-valuation',
  'ChatGPT Staffers to Offer Secondary Sale at $500B Valuation',
  'OpenAI employees get opportunity to sell shares at historic $500 billion valuation.',
  '[{"id":"1","type":"heading","content":"Historic Valuation Milestone"},{"id":"2","type":"paragraph","content":"OpenAI is offering employees the chance to sell shares in a secondary offering that values the company at an unprecedented $500 billion, making it one of the most valuable private companies in history."},{"id":"3","type":"paragraph","content":"This valuation reflects the massive impact ChatGPT has had on the AI industry and investor confidence in OpenAI''s future prospects."}]'::jsonb,
  'Business',
  'ObjectWire Editorial',
  false,
  NOW(),
  '/images/openai.jpg'
),
(
  'github-universe-october-28th-and-29th-san-francisco',
  'GitHub Universe - October 28th and 29th, San Francisco',
  'Join developers worldwide at GitHub''s flagship conference for the latest in software development.',
  '[{"id":"1","type":"heading","content":"Annual Developer Conference"},{"id":"2","type":"paragraph","content":"GitHub Universe returns to San Francisco on October 28-29, bringing together developers, open source contributors, and industry leaders to explore the future of software development."},{"id":"3","type":"heading","content":"What to Expect"},{"id":"4","type":"paragraph","content":"Attendees can expect keynotes from GitHub leadership, hands-on workshops, and announcements of new features and tools for the developer community."}]'::jsonb,
  'Events',
  'ObjectWire Editorial',
  false,
  NOW(),
  '/images/github-universe.jpg'
),
(
  'neurophos-ai-hardware-startup',
  'NeuroPhos - AI Hardware Startup',
  'New startup NeuroPhos aims to revolutionize AI computing with photonic processors.',
  '[{"id":"1","type":"heading","content":"Next-Gen AI Hardware"},{"id":"2","type":"paragraph","content":"NeuroPhos is developing photonic processors specifically designed for AI workloads, promising 100x energy efficiency improvements over traditional GPUs."},{"id":"3","type":"heading","content":"The Technology"},{"id":"4","type":"paragraph","content":"By using light instead of electricity for computations, NeuroPhos chips can perform matrix operations at unprecedented speeds while consuming minimal power."}]'::jsonb,
  'Hardware',
  'ObjectWire Editorial',
  true,
  NOW(),
  '/images/neurophos.jpg'
);

-- Add view counts to make data more realistic
UPDATE articles SET view_count = floor(random() * 10000 + 100)::int WHERE slug IN (
  'introducing-bitchat-jack-dorsey',
  'blitzy-ai-powered-autonomous-software-development',
  'chatgpt-staffers-to-offer-secondary-sale-at-500b-valuation',
  'github-universe-october-28th-and-29th-san-francisco',
  'neurophos-ai-hardware-startup'
);
