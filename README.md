# ObjectWire

**Objective.Wire** — Detective Reporting Austin. Real-time intelligence and structured analysis for business, tech, and policy decisions.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

## 🎯 Overview

ObjectWire is a precision intelligence publisher built with Next.js 15, delivering event-driven analysis with strategic relevance and verifiable sources. Every publication is structured for immediate comprehension and professional application.

## ✨ Features

- **📰 News Grid** — Card-based layout with responsive 3-column design
- **📝 Blog System** — Full article pages with hero images and related content
- **💬 Comments** — Discord integration with blockchain-ready architecture
- **🔗 Smart Links** — Markdown link parsing for clickable references
- **📱 Responsive** — Mobile-first design with tablet and desktop optimization
- **🎨 Clean UI** — Tailwind CSS with Framer Motion animations
- **📄 Static Pages** — Privacy policy, terms of service, and about pages

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/objectwire-next.git
cd objectwire-next

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

## 📂 Project Structure

```
objectwire-next/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/[slug]/       # Dynamic blog post pages
│   ├── news/              # News feed grid
│   ├── privacy-policy/    # Privacy policy
│   ├── terms-of-service/  # Terms of service
│   ├── layout.tsx         # Root layout (nav + footer)
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   └── news-card.tsx      # Article card component
├── lib/                   # Core utilities
│   ├── blog-data.ts       # Blog post data and helpers
│   └── types.ts           # TypeScript definitions
├── libs/                  # API integrations
│   └── api-client.ts      # Fetch utilities
└── public/                # Static assets
```

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with App Router |
| **TypeScript** | Type safety and developer experience |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Smooth animations |
| **React 19** | UI library |

## 📝 Development

### Available Scripts

```bash
npm run dev      # Start development server (Turbopack)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Key Files

- **`app/layout.tsx`** — Global navigation and footer
- **`app/page.tsx`** — Homepage with hero and featured articles
- **`lib/blog-data.ts`** — Blog post data and utility functions
- **`components/news-card.tsx`** — Reusable article card

## 🎨 Styling

All styling uses **Tailwind CSS 4** with custom configuration in `app/globals.css`:

- Clean scrollbar styling
- Smooth scroll behavior
- Custom color schemes
- Responsive breakpoints

## 📄 Static Pages

- **Privacy Policy** — `/privacy-policy`
- **Terms of Service** — `/terms-of-service`
- **About** — `/about`

## 🔮 Roadmap

- [ ] Backend API for article management
- [ ] Newsletter subscription functionality
- [ ] Editorial standards page
- [ ] Article submission form
- [ ] Blockchain-based commenting system
- [ ] Analytics and tracking
- [ ] Search functionality
- [ ] RSS feed generation

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📧 Contact

- **Email:** jack@objectwire.org
- **Phone:** (575) 495-0323
- **Location:** Austin, TX 78702

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ in Austin, Texas**
