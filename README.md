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
<img width="1763" height="3139" alt="Screenshot_7-9-2026_12267_netflix-clone-lyart-pi-52 vercel app" src="https://github.com/user-attachments/assets/a77d731b-6681-4d1d-9d97-5dc3e5c162b3" />


## details page
<img width="1763" height="3516" alt="image" src="https://github.com/user-attachments/assets/06547f48-03ff-4c00-bb30-3b8f6c854cea" />

## actor details
<img width="1763" height="2157" alt="image" src="https://github.com/user-attachments/assets/73101ca0-3c25-4faa-bfd1-76f00881d56a" />









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
│   ├── actor/
│   │      └── [name]/
│   │            └── page.jsx        # Actor detail page
│   ├── api/
│   |    └── auth/
│   |         └── [...nextauth]/
│   |                    └── route.js    # NextAuth route
│   ├── components/
|   |    ├── Footer
|   |    ├── Hero
│   │    ├── Navbar
|   |    ├── TitleCards
|   |    └── movie
|   |          ├── Cast
|   |          ├── Content
|   |          ├── Trailer
|   |          ├── Photos
|   |          └── Reviews
|   |
│   ├── details/
│   │       └── [id]/
│   │             └── page.jsx
|   | 
│   | 
│   ├── layout.jsx        # Root layout
│   └── page.jsx          # Home page
│
├── components/
|      ├── tmdb.js        # all api calls
│      └── ui/            # shadcn/ui components
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
