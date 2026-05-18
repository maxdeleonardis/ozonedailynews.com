// =============================================================================
// /account — Your Digital Vault
//
// A comprehensive dashboard of the user's interests, engagement, and identity.
// Backed by Supabase auth. Tabs: Overview | Liked | Saved | History | Profile
// =============================================================================

import type { Metadata } from 'next';
import VaultDashboard     from './VaultDashboard';

export const metadata: Metadata = {
  title:       'Your Vault | OzoneNews',
  description: 'Your digital vault of interests, saved articles, reading history, and engagement on OzoneNews.',
  robots:      { index: false, follow: false },
  openGraph: {
    title: "Your Vault | OzoneNews",
    description: "Your digital vault of interests, saved articles, reading history, and engagement on OzoneNews.",
    type: 'article',
    url: 'https://www.ozonenetwork.news',
    siteName: 'OzoneNews',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Your Vault | OzoneNews",
    description: "Your digital vault of interests, saved articles, reading history, and engagement on OzoneNews.",
  },
};

export default function AccountPage() {
  return <VaultDashboard />;
}
