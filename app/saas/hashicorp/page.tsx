import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HashiCorp Vault - Identity-Based Secrets Management | ObjectWire",
  description: "Comprehensive guide to HashiCorp Vault, the leading open-source identity-based secrets management system. Learn how Vault securely stores API keys, passwords, certificates, and encryption keys using zero-trust principles.",
  keywords: ["HashiCorp Vault", "secrets management", "identity-based security", "zero trust", "AppRole", "dynamic secrets", "encryption", "API keys", "certificate management", "cybersecurity"],
  alternates: {
    canonical: 'https://www.objectwire.org/hashicorp',
  },
};

export default function HashiCorpVaultPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 via-blue-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Main Info */}
            <div className="md:col-span-2">
              <p className="text-blue-200 text-sm font-mono tracking-wider mb-4">CYBERSECURITY • SECRETS MANAGEMENT</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                HashiCorp Vault
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                A leading open-source tool for <strong className="text-white">identity-based secrets management</strong>, 
                enabling organizations to securely store, access, and control sensitive data like API keys, passwords, 
                certificates, and encryption keys using <strong className="text-white">zero-trust principles</strong>.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">2015</p>
                  <p className="text-sm text-gray-100">Initial Release</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">20K+</p>
                  <p className="text-sm text-gray-100">GitHub Stars</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">Fortune 500</p>
                  <p className="text-sm text-gray-100">Wide Adoption</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">AES-256</p>
                  <p className="text-sm text-gray-100">Encryption Standard</p>
                </div>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-lg mb-4 text-white">Technical Details</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-300">Developer</dt>
                  <dd className="font-semibold text-white">HashiCorp</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Written In</dt>
                  <dd className="font-semibold text-white">Go</dd>
                </div>
                <div>
                  <dt className="text-gray-300">License</dt>
                  <dd className="font-semibold text-white">Business Source License</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Security Model</dt>
                  <dd className="font-semibold text-white">Zero-Trust, Identity-First</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Default Port</dt>
                  <dd className="font-semibold text-white">8200</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Encryption</dt>
                  <dd className="font-semibold text-white">AES-256-GCM</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview Section */}
            <section className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Core Definition and Purpose
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  HashiCorp Vault operates as an <strong>identity-based secrets and encryption management system</strong>, 
                  where a "secret" includes any data requiring tight access control—API encryption keys, passwords, 
                  certificates, and more. It centralizes these elements in one secure location, handling encryption, 
                  leasing, renewal, and revocation automatically.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  This approach eliminates <strong>secret sprawl</strong> by replacing long-lived credentials with 
                  short-lived, dynamically generated ones that expire automatically. Rather than relying on static 
                  credentials or network locations, Vault enforces access based on verified identities, aligning with 
                  zero-trust principles in modern infrastructure.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Vault programmatically stores, accesses, and distributes secrets while using identity to authenticate 
                  and authorize every request. This centralized approach provides a single source of truth for secret 
                  management across hybrid and multi-cloud environments.
                </p>
              </div>
            </section>

            {/* Identity-Based Access Section */}
            <section className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How Identity-Based Access Works
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-indigo-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Authentication Methods
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Vault's security model starts with identity-first authentication. Clients (humans or machines) 
                    authenticate via supported methods including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Kubernetes service accounts</strong> for container workloads</li>
                    <li><strong>Cloud IAM roles</strong> (AWS, Azure, GCP) for cloud-native applications</li>
                    <li><strong>LDAP and Active Directory</strong> for enterprise user authentication</li>
                    <li><strong>OIDC</strong> for single sign-on (SSO) human access</li>
                    <li><strong>AppRole</strong> for machine-to-machine authentication</li>
                    <li><strong>GitHub, JWT, and more</strong> for flexible integration</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Identity Engine
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Once verified, Vault maps the identity to an <strong>entity</strong> in its built-in Identity secrets 
                    engine—a default, always-mounted component that cannot be disabled. This entity consolidates multiple 
                    authentication aliases (e.g., one user with LDAP and GitHub logins) into a single Vault identity.
                  </p>
                </div>

                <div className="border-l-4 border-cyan-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Policy Enforcement
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Policies attach to entities, defining granular permissions—what paths can be read, written, or listed. 
                    Access decisions rely solely on the verified identity and attached policies, enforcing least privilege 
                    without depending on IP addresses or static tokens.
                  </p>
                </div>
              </div>
            </section>

            {/* Key Features Section */}
            <section className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Key Features Supporting Identity-Based Controls
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    🔄 Dynamic Secrets Generation
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Engines like database, AWS, or Azure generate credentials on-demand with short leases (e.g., minutes 
                    to hours), revoking them automatically upon expiry or revocation request. This reduces exposure 
                    compared to static credentials.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    ⏱️ Secrets Leasing and Renewal
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every secret comes with a lease duration; clients renew if needed, but Vault revokes on lease end 
                    or explicit request, supporting single secrets or entire "trees" grouped by user/application.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    📝 Audit Logging
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every authenticated action logs the entity identifier, creating traceable trails for compliance and 
                    forensics. All requests and responses are logged with timestamp, identity, and action details.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    🔐 Encryption as a Service
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Protects data in transit and at rest using AES-256-GCM, with transit engine for encryption operations 
                    without exposing keys. Applications can encrypt/decrypt data without handling raw keys.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    📜 Certificate Management
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    PKI secrets engine issues, rotates, and revokes certificates on demand, tied to identity policies. 
                    Automates certificate lifecycle management without manual intervention.
                  </p>
                </div>
              </div>
            </section>

            {/* AppRole Authentication Section */}
            <section className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                AppRole Authentication for Blockchain and Applications
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  AppRole is one of Vault's most popular authentication methods for machine-to-machine scenarios, 
                  particularly in blockchain projects, CI/CD pipelines, and microservices architectures. It solves 
                  the "secret zero" problem by providing a secure bootstrap mechanism.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Environment Variables Setup</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A typical AppRole configuration uses three environment variables:
                  </p>
                  <div className="bg-gray-900 text-green-400 font-mono text-sm p-4 rounded-lg mb-4 overflow-x-auto">
                    <pre>VAULT_ADDR=https://vault.yourdomain.com:8200{'\n'}VAULT_ROLE_ID=your-role-id-here{'\n'}VAULT_SECRET_ID=your-secret-id-here</pre>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>VAULT_ADDR</strong>: Points to your running Vault server instance (default port 8200)</li>
                    <li><strong>VAULT_ROLE_ID</strong>: Static identifier for a specific AppRole (like a "username")</li>
                    <li><strong>VAULT_SECRET_ID</strong>: Dynamic "password" for that AppRole, generated on demand</li>
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">Authentication Flow</h3>
                <ol className="list-decimal list-inside text-gray-700 space-y-3 ml-4 mb-6">
                  <li>Application reads the three environment variables at startup</li>
                  <li>Constructs HTTP POST to <code className="bg-gray-100 px-2 py-1 rounded">/v1/auth/approle/login</code></li>
                  <li>Sends role_id and secret_id in the payload</li>
                  <li>Vault verifies the credentials and any constraints (IP restrictions, use count)</li>
                  <li>Issues a short-lived client token (typically minutes to hours)</li>
                  <li>Application uses this token for all subsequent Vault operations</li>
                  <li>Token renewal or re-authentication when expired</li>
                </ol>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Why This Fits Blockchain Projects</h4>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Blockchain applications frequently handle highly sensitive material—private keys for signing 
                    transactions, mnemonic seeds, RPC API keys, or cross-chain bridge credentials. AppRole provides:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Role ID can be baked into immutable container images (low risk alone)</li>
                    <li>Secret ID injected at runtime via secure channels (Kubernetes secrets, CI/CD)</li>
                    <li>Short-lived secrets minimize exposure if a node is compromised</li>
                    <li>Native integration with blockchain tools and frameworks</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Use Cases Section */}
            <section className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Real-World Use Cases and Zero-Trust Alignment
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">🌐 Multi-Cloud Centralization</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Centralize secrets across hybrid and multi-cloud environments, providing consistent access control 
                    regardless of infrastructure location.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">⚡ Just-In-Time Access</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Implement just-in-time access for applications and services, generating credentials only when needed 
                    with automatic expiration.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">🔄 Automated Rotation</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Automate credential rotation for databases and cloud services, eliminating manual password changes 
                    and reducing security gaps.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">🛡️ Zero-Trust Security</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Enforce zero-trust by verifying every request based on identity, not network location, with 
                    workload identity patterns for non-human actors.
                  </p>
                </div>
              </div>
            </section>

            {/* Market Context Section */}
            <section className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Adoption and Market Context (2025-2026)
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Vault remains a benchmark in secrets management, with widespread use in enterprise settings. 
                  HashiCorp's <strong>2025 Cloud Complexity Report</strong> (surveying 1,100 decision makers) notes 
                  increasing automation in infrastructure (56% average provisioning automated), where tools like Vault 
                  support secure secrets handling amid growing complexity.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-indigo-50 rounded-lg p-6">
                    <p className="text-3xl font-bold text-indigo-600 mb-2">$20.8B</p>
                    <p className="text-sm text-gray-700">Projected security market segment by end-2026</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <p className="text-3xl font-bold text-blue-600 mb-2">Fortune 500</p>
                    <p className="text-sm text-gray-700">Heavy adoption as security practice standard</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Recent 2026 updates focus on <strong>non-human identity (NHI) management</strong>, workload identities, 
                  and automated cryptographic workflows in Vault Enterprise. These features address the growing challenge 
                  of managing machine identities at scale in cloud-native environments.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  The secrets management market continues expanding as organizations recognize that credential sprawl and 
                  static secrets pose significant security risks. Vault addresses these challenges with its identity-first 
                  approach and automation capabilities.
                </p>
              </div>
            </section>

            {/* Getting Started Section */}
            <section className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Getting Started with Vault
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-indigo-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Open Source vs. Enterprise</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Beginners can start with the <strong>open-source version</strong> (available on GitHub: hashicorp/vault) 
                    or <strong>HashiCorp Cloud Platform (HCP) Vault</strong> for managed deployment.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Enterprise editions add features like namespaces, replication, and advanced governance reporting for 
                    secrets inventory and adoption tracking.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Basic Setup Steps</h3>
                  <ol className="list-decimal list-inside text-gray-700 space-y-3 ml-4">
                    <li><strong>Initialize and unseal Vault</strong> - First-time setup creates encryption keys</li>
                    <li><strong>Enable authentication methods</strong> - Configure userpass, JWT, AppRole, etc.</li>
                    <li><strong>Create policies</strong> - Define who can access what resources</li>
                    <li><strong>Map identities to entities</strong> - Use the Identity engine for unified access</li>
                    <li><strong>Enable secrets engines</strong> - Activate database, AWS, PKI, or other engines</li>
                    <li><strong>Configure audit devices</strong> - Enable logging for compliance</li>
                    <li><strong>Integrate with IdPs</strong> - Connect to existing identity providers</li>
                  </ol>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Security Best Practices</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Never commit .env files with Vault credentials to version control</li>
                    <li>Inject VAULT_SECRET_ID via CI/CD secrets managers or orchestration tools</li>
                    <li>Rotate Secret IDs frequently—daily or per-deployment</li>
                    <li>Use batch tokens (default for AppRole) to prevent escalation</li>
                    <li>Enable audit logging to track every login and secret access</li>
                    <li>Apply secret_id_bound_cidrs and token_ttl constraints in production</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Integration Section */}
            <section className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Integration with External Identity Providers
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Vault authenticates against trusted sources without duplicating identity data, leveraging existing 
                  identity infrastructure while applying its own authorization layer:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-indigo-200 bg-indigo-50 rounded-lg p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">☁️ Cloud Providers</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      AWS IAM roles, GCP service accounts, Azure managed identities for workload authentication
                    </p>
                  </div>

                  <div className="border border-blue-200 bg-blue-50 rounded-lg p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">🏢 Enterprise Systems</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Active Directory, LDAP for centralized user authentication and group management
                    </p>
                  </div>

                  <div className="border border-cyan-200 bg-cyan-50 rounded-lg p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">🔐 Single Sign-On</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      OIDC integration for SSO human access with providers like Okta, Auth0, Azure AD
                    </p>
                  </div>

                  <div className="border border-teal-200 bg-teal-50 rounded-lg p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">⚙️ CI/CD Pipelines</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      AppRole for service accounts, GitHub authentication for repository-based access
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Table of Contents */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Contents</h3>
              <nav className="space-y-2 text-sm">
                <a href="#definition" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  Core Definition
                </a>
                <a href="#identity-access" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  Identity-Based Access
                </a>
                <a href="#features" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  Key Features
                </a>
                <a href="#approle" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  AppRole Authentication
                </a>
                <a href="#use-cases" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  Use Cases
                </a>
                <a href="#market" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  Market Context
                </a>
                <a href="#getting-started" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  Getting Started
                </a>
                <a href="#integration" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  Integration
                </a>
              </nav>
            </div>

            {/* Related Topics */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-100 p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Related Topics</h3>
              <div className="space-y-3 text-sm">
                <Link href="/cybersecurity" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  → Cybersecurity Overview
                </Link>
                <Link href="/zero-trust" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  → Zero-Trust Architecture
                </Link>
                <Link href="/blockchain-security" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  → Blockchain Security
                </Link>
                <Link href="/api-security" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  → API Security Best Practices
                </Link>
                <Link href="/cloud-security" className="block text-blue-600 hover:text-blue-800 hover:underline">
                  → Cloud Security
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Official Resources</h3>
              <div className="space-y-3 text-sm">
                <a 
                  href="https://www.vaultproject.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-800 hover:underline"
                >
                  🌐 Official Website
                </a>
                <a 
                  href="https://github.com/hashicorp/vault" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-800 hover:underline"
                >
                  💻 GitHub Repository
                </a>
                <a 
                  href="https://developer.hashicorp.com/vault" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-800 hover:underline"
                >
                  📚 Developer Documentation
                </a>
                <a 
                  href="https://www.hashicorp.com/products/vault" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-800 hover:underline"
                >
                  🏢 Enterprise Features
                </a>
                <a 
                  href="https://learn.hashicorp.com/vault" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-800 hover:underline"
                >
                  🎓 Tutorials & Training
                </a>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl border border-cyan-100 p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">By The Numbers</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-2xl font-bold text-cyan-700">56%</p>
                  <p className="text-xs text-gray-600">Infrastructure provisioning automated (2025)</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-700">1,100+</p>
                  <p className="text-xs text-gray-600">Decision makers surveyed in Cloud Report</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-teal-700">8200</p>
                  <p className="text-xs text-gray-600">Default Vault API port</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-indigo-700">256-bit</p>
                  <p className="text-xs text-gray-600">AES-GCM encryption strength</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-indigo-900 via-blue-900 to-cyan-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Secure Your Infrastructure with Vault
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            HashiCorp Vault's identity-based approach provides a structured, auditable way to manage secrets at 
            scale—centralized yet flexible, secure yet automated—making it a go-to choice where credential sprawl 
            meets modern infrastructure demands.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.vaultproject.io/downloads" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Download Vault
            </a>
            <a 
              href="https://developer.hashicorp.com/vault/tutorials" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors border-2 border-white"
            >
              View Tutorials
            </a>
          </div>
        </div>
      </div>

    </main>
  );
}
