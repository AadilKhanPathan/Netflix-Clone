"use client";

import { useEffect, useState } from "react";
import { Search, X, Loader2 } from "lucide-react";
import searchicon from "../assets/search_icon.svg";
import Link from "next/link.js";
import Image from "next/image.js";
import { getSearch } from "../../lib/tmdb";

export default function SearchBar({ open, setOpen }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) return;

    const timeout = setTimeout(async () => {
      try {
        setLoading(true);

        const data = await getSearch(query);

        setResults(data.results);
        console.log(data)
      } catch (error) {
        console.error(error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="relative">
      {open ? (
        <div className="flex items-center gap-3 rounded-lg border border-gray-600 bg-black px-4 py-3 w-xs">
          <Search className="text-gray-400" />

          <input
            type="text"
            placeholder="Search movies and TV shows..."
            value={query}
            autoFocus
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white outline-none"
          />

          {loading && <Loader2 className="animate-spin text-gray-400" />}

          {query && (
            <button onClick={() => setQuery("")}>
              <X className="text-gray-400 cursor-pointer" />
            </button>
          )}
        </div>
      ) : (
        <Image
          src={searchicon}
          width={20}
          height={20}
          alt="Search"
          className="cursor-pointer"
          onClick={() => setOpen(true)}
        />
      )}

      {/* Search Results */}
      {query.trim() && (
        <div className="absolute top-full z-50 mt-2 max-h-96 w-full overflow-y-auto rounded-lg border border-gray-700 bg-[#141414] p-3 shadow-xl no-scrollbar ">
          {!loading && results.length === 0 && (
            <p className="py-5 text-center text-gray-400">No results found</p>
          )}

          {results.map((movie) => (
            <Link
              key={`${movie.media_type}-${movie.id}`}
              href={`/details/${movie.id}?type=${movie.media_type}`}
              
              className="flex cursor-pointer items-center gap-3 rounded-md p-2 hover:bg-white/10"
            >
              {movie.poster_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                  alt={movie.title || movie.name}
                  unoptimized
                  width={50}
                  height={50}
                  className="h-16 w-12 rounded object-cover "
                />
              ) : (
                <div className="flex h-16 w-12 items-center justify-center text-xs text-muted-foreground border rounded-sm p-1">
                  No image
                </div>
              )}

              <div>
                <h3 className="text-sm font-medium text-white">
                  {movie.title || movie.name}
                </h3>

                <p className="text-xs text-gray-400">
                  {movie.media_type === "movie" ? "Movie" : "TV Show"}
                  {" • "}
                  {(movie.release_date || movie.first_air_date || "").slice(
                    0,
                    4,
                  )}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
