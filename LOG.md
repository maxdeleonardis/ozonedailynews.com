# ObjectWire Development Log

## Project Overview
ObjectWire is a Next.js-based intelligence platform delivering structured news, analysis, and real-time reporting for business, tech, and policy decisions.

## Tech Stack
- **Framework:** Next.js 15.5.4 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Deployment:** Vercel-ready

## Current Features
- ✅ Homepage with hero section and featured articles
- ✅ News grid with responsive card layout
- ✅ Blog article pages with hero images
- ✅ Related articles widget (category-based)
- ✅ Comment section (Discord + blockchain placeholder)
- ✅ Newsletter subscription sections
- ✅ Static pages (Privacy, Terms, About)
- ✅ Mobile-responsive navigation and footer

## Project Structure
```
app/
├── about/              # About page
├── article/[slug]/     # Article template (future)
├── blog/[slug]/        # Blog post pages
├── news/               # News feed grid
├── privacy-policy/     # Privacy policy page
├── terms-of-service/   # Terms of service page
├── globals.css         # Global styles
├── layout.tsx          # Root layout with nav/footer
└── page.tsx            # Homepage

components/
└── news-card.tsx       # Reusable article card component

lib/
├── blog-data.ts        # Blog posts data and utilities
└── types.ts            # TypeScript type definitions

libs/
└── api-client.ts       # API integration utilities
```

## Recent Changes (December 2025)
- Integrated all pending article enhancements
- Added getRelatedBlogPosts() utility function
- Improved hero image overlay for better title visibility
- Implemented markdown link parsing for clickable links
- Added Discord comment section with blockchain roadmap
- Created static pages for Privacy and Terms
- Cleaned up directory structure for GitHub deployment

## Next Steps
- [ ] Implement backend API for article management
- [ ] Add newsletter subscription functionality
- [ ] Create editorial standards page
- [ ] Build submission/correction form
- [ ] Integrate blockchain-based commenting
- [ ] Add analytics tracking

## Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Contact
- Email: jack@objectwire.org
- Phone: (575) 495-0323
- Location: Austin, TX 78702
