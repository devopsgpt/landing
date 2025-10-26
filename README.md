# Hobs.ai Landing Page

A beautiful, responsive landing page for Hobs.ai - AI-powered DevOps solutions. Built with Next.js 15, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🚀 **Next.js 15** - Modern React framework with App Router
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🌓 **Dark/Light Theme** - Toggle between themes
- ✨ **Framer Motion** - Smooth animations and transitions
- 📱 **Fully Responsive** - Mobile-first design
- ♿ **Accessible** - WCAG compliant
- 🔍 **SEO Optimized** - Sitemap and robots.txt included

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── tos/               # Terms of Service page
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Sitemap generator
│   └── robots.ts          # Robots.txt generator
├── components/            # React components
│   ├── home/              # Home page components
│   │   ├── header.tsx
│   │   ├── services.tsx
│   │   ├── visual-tour.tsx
│   │   ├── about-us.tsx
│   │   ├── customer-feedback.tsx
│   │   └── contact-us.tsx
│   ├── footer.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
└── lib/                   # Utility functions
    └── utils.ts
```

## Key Technologies

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **next-themes** - Theme management
- **Lucide React** - Icons

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

Or use any other hosting platform that supports Next.js.

## License

MIT
