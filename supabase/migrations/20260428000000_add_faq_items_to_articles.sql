-- =============================================================================
-- Add faq_items JSONB column to articles table
--
-- Stores an array of { question: string, answer: string } objects.
-- Rendered by NewsArticle as a FAQAccordion with FAQPage JSON-LD schema,
-- eligible for Google FAQ rich results in Search.
--
-- Shape: [{ "question": "...", "answer": "..." }, ...]
-- =============================================================================

ALTER TABLE articles
  ADD COLUMN IF NOT EXISTS faq_items JSONB NOT NULL DEFAULT '[]'::jsonb;

COMMENT ON COLUMN articles.faq_items IS
  'Array of FAQ items [{question, answer}] rendered as FAQAccordion with FAQPage JSON-LD schema.';
