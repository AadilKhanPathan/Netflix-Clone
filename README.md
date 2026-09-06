# Netflix Clone

A Netflix UI clone built with **Next.js 16** and **React 19** — browse movies and TV shows in Netflix-style rows, hover to preview, open a details page with trailer, cast, and production info, and sign in with authentication.


![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?logo=shadcnui&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)



<h2>Demo</h2>
<a href="https://netflix-clone-3g80ozjqt-aadil-khan1.vercel.app/">
  <img src="https://img.shields.io/badge/LIVE_DEMO-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</a>

## home page
<img width="1899" height="839" alt="image" src="https://github.com/user-attachments/assets/733263da-8114-4273-a731-10a4e0ec6051" />
<img width="1900" height="939" alt="image" src="https://github.com/user-attachments/assets/010b0a80-160d-41cd-9a34-91d1252d2fb1" />
<img width="1899" height="950" alt="image" src="https://github.com/user-attachments/assets/ad2c0444-7d1a-40d9-a997-900b1d793782" />

## details page
<img width="1901" height="922" alt="image" src="https://github.com/user-attachments/assets/6b6a9cf4-f80d-4295-b113-f33053dfe79c" />
<img width="1899" height="1026" alt="image" src="https://github.com/user-attachments/assets/1ef70015-8edd-4203-ade3-4803f706fc56" />
<img width="1905" height="898" alt="image" src="https://github.com/user-attachments/assets/3d8974d6-22d2-4b4a-b875-dfe485c284d6" />
<img width="1896" height="940" alt="image" src="https://github.com/user-attachments/assets/19bdc9dd-13cd-4210-9188-36c7fd31c565" />







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
├── app/
│   ├── api/              # Server-side API routes
│   ├── movies/           # Movie pages/routes
│   ├── tv/               # TV show pages/routes
│   ├── search/           # Search page
│   ├── components/       # Page-specific components
│   ├── layout.js/tsx     # Root layout
│   └── page.js/tsx       # Home page
│
├── components/
│   └── ui/               # shadcn/ui components
│
├── lib/                  # Utility functions / API helpers
├── public/               # Static assets
├── auth.js/ts            # Auth.js configuration
├── next.config.*         # Next.js configuration
├── package.json
└── README.md
```

## Deployment

This project is set up to deploy easily on [Vercel](https://vercel.com/new), the platform built by the creators of Next.js. Push to your connected GitHub repo and Vercel will build and deploy automatically — just make sure your environment variables are added in the Vercel project settings.

## Disclaimer

This is a fan-made clone built for learning purposes. It uses the Netflix name/branding for educational/demo purposes only and is not affiliated with, endorsed by, or connected to Netflix, Inc. All movie/TV data and artwork belong to their respective owners.

## License

No license specified yet — consider adding one (e.g. MIT) if you plan to open this up for contributions.
