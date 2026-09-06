# Netflix Clone

A Netflix UI clone built with **Next.js 16** and **React 19** — browse movies and TV shows in Netflix-style rows, hover to preview, open a details page with trailer, cast, and production info, and sign in with authentication.

**Live demo:** https://netflix-clone-lyart-pi-52.vercel.app

![Next.js](https://img.shields.io/badge/Next.js-16-black) ![React](https://img.shields.io/badge/React-19-61DAFB) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8)

## Features

- 🏠 **Home page** with a hero banner and horizontally-scrolling rows (Popular, TV Shows, Only on Netflix, etc.)
- 🎬 **Details page** for each title — overview, trailer, cast, "Produced By" studios, status, original language, budget/revenue, and seasons (for TV shows)
- 🔐 **Authentication** via NextAuth
- 🎠 Smooth carousels powered by Embla Carousel
- 💅 Netflix-styled UI built with Tailwind CSS v4 and shadcn/ui components
- 📱 Responsive layout

## Tech Stack

| Category | Tech |
|---|---|
| Framework | [Next.js](https://nextjs.org) 16 (App Router, React Compiler) |
| UI Library | React 19 |
| Styling | Tailwind CSS v4, `tailwind-merge`, `tw-animate-css` |
| Components | shadcn/ui, Base UI (`@base-ui/react`) |
| Auth | NextAuth v5 (beta) |
| Carousel | Embla Carousel React |
| Icons | Lucide React, React Icons |
| Linting | ESLint 9 (`eslint-config-next`) |

> This project also relies on a movie/TV metadata API (e.g. TMDB) for posters, trailers, and details — check `lib/` or `.env.example` in the repo for the exact key required and update the section below to match.

## Getting Started

### Prerequisites

- Node.js 18.18+ (Next.js 16 requirement)
- npm, yarn, pnpm, or bun

### Installation

```bash
git clone https://github.com/AadilKhanPathan/Netflix-Clone.git
cd Netflix-Clone
npm install
```

### Environment Variables

Create a `.env.local` file in the project root. At minimum you'll need your NextAuth secret and any provider credentials, plus your movie-data API key:

```bash
# NextAuth
NEXTAUTH_SECRET=your-random-secret
NEXTAUTH_URL=http://localhost:3000

# Add OAuth provider credentials if using social login, e.g.:
# GOOGLE_CLIENT_ID=
# GOOGLE_CLIENT_SECRET=

# Movie/TV data API (e.g. TMDB)
# TMDB_API_KEY=your-api-key
```

> Adjust the variable names above to match what's actually referenced in the codebase (check `auth.js`/`auth.config.js` and any `lib/` API helper files).

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
Netflix-Clone/
├── public/          # Static assets
├── src/             # Application source (routes, components, lib)
├── components.json  # shadcn/ui configuration
├── next.config.mjs
├── tailwind.config.* / postcss.config.mjs
└── package.json
```

## Deployment

This project is set up to deploy easily on [Vercel](https://vercel.com/new), the platform built by the creators of Next.js. Push to your connected GitHub repo and Vercel will build and deploy automatically — just make sure your environment variables are added in the Vercel project settings.

## Disclaimer

This is a fan-made clone built for learning purposes. It uses the Netflix name/branding for educational/demo purposes only and is not affiliated with, endorsed by, or connected to Netflix, Inc. All movie/TV data and artwork belong to their respective owners.

## License

No license specified yet — consider adding one (e.g. MIT) if you plan to open this up for contributions.
