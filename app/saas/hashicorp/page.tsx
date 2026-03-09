import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "HashiCorp Vault - Identity-Based Secrets Management | ObjectWire",
  description: "Comprehensive guide to HashiCorp Vault, the leading open-source identity-based secrets management system. Learn how Vault securely stores API keys, passwords, certificates, and encryption keys using zero-trust principles.",
  keywords: ["HashiCorp Vault", "secrets management", "identity-based security", "zero trust", "AppRole", "dynamic secrets", "encryption", "API keys", "certificate management", "cybersecurity"],
  alternates: {
    canonical: 'https://www.objectwire.org/hashicorp',
  },
};

export default function HashiCorpVaultPage() {
  return <WikiArticle slug="saas-hashicorp" />;
}
