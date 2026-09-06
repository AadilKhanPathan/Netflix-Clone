/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images : {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "www.tallengestore.com",
      },
      {
        protocol: "https",
        hostname: "www.themoviedb.org",
      },
      {
        protocol: "https",
        hostname: "api.themoviedb.org",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "dnm.nflximg.net",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
