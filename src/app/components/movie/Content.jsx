import Image from "next/image";
import { ScrollArea, ScrollBar } from "../../../components/ui/scroll-area";

export default function Content({ content, type, available }) {
  if (!content) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <p className="text-lg text-muted-foreground">Movie not found.</p>
      </div>
    );
  }

  const hours = Math.floor(content.runtime / 60);
  const minutes = content.runtime % 60;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative w-full h-[60vh] md:h-[75vh]">
        <Image
          src={`https://image.tmdb.org/t/p/original${content.backdrop_path}`}
          alt={type == "movie" ? content.title : content.name}
          fill
          priority
          className="object-cover"
        />
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 -mt-40 md:-mt-56 relative z-10 pb-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          <div className="shrink-0 mx-auto md:mx-0">
            <Image
              src={`https://image.tmdb.org/t/p/w342${content.poster_path}`}
              alt={type === "movie" ? content.title : content.name}
              width={220}
              height={330}
              className="rounded-lg border-2 shadow-2xl shadow-black/60 ring-1 ring-white/10"
            />
          </div>

          {/* Info */}
          <div className="flex-1 pt-2">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
              {type === "movie" ? content.title : content.name}
            </h1>

            {content.tagline && (
              <p className="text-sm md:text-base text-white/50 italic mb-4">
                {content.tagline}
              </p>
            )}

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/80 mb-5">
              <span className="flex items-center gap-1 text-green-400 font-semibold">
                ★ {content.vote_average?.toFixed(1)}
              </span>
              <span>{content.release_date?.slice(0, 4)}</span>
              {content.runtime > 0 && (
                <span>
                  {hours}h {minutes}m
                </span>
              )}
              <span className="px-2 py-0.5 border border-white/30 rounded text-xs">
                HD
              </span>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 mb-6">
              {content.genres?.map((g) => (
                <span
                  key={g.id}
                  className="text-xs font-medium bg-white/10 hover:bg-white/20 transition-colors px-3 py-1 rounded-full"
                >
                  {g.name}
                </span>
              ))}
            </div>

            {/* Overview */}
            <p className="paragragh text-sm md:text-base leading-relaxed text-white/90 max-w-2xl mb-8">
              {content.overview}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-2.5 rounded hover:bg-white/90 transition-colors">
                ▶ Trailer
              </button>
              <button className="flex items-center gap-2 bg-white/20 text-white font-semibold px-6 py-2.5 rounded hover:bg-white/30 transition-colors backdrop-blur-sm">
                + Add To My List
              </button>
            </div>

            {/* Available on */}
            {available && available.length > 0 && (
              <div className="mt-5">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Available On
                </h2>

                <div className="flex gap-2">
                  {available.map((a) => (
                    <div className="bg-white rounded" key={a.provider_id}>
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${a.logo_path}`}
                        alt={a.provider_name}
                        className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105 p-1 "
                        width={40}
                        height={100}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Production companies */}
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-white mb-4">
                Produced By
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {content.production_companies.map((company) => (
                  <div
                    key={company.id}
                    className="group flex items-center justify-center w-full h-[100px] rounded-md p-1"
                  >
                    {company.logo_path ? (
                      <div className="flex items-center justify-center w-full h-full bg-white rounded-md p-3">
                        <Image
                          src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                          alt={company.name}
                          className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105 p-2"
                          width={180}
                          height={100}
                        />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-full h-full bg-white/5 rounded-md p-3 text-center border">
                        <span className="text-xs text-muted-foreground line-clamp-2">
                          {company.name}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Extra details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10 text-sm">
          <div className="flex items-center flex-col">
            <p className="text-white/40 mb-1">Status</p>
            <p className="text-white/90">{content.status}</p>
          </div>
          <div className="flex items-center flex-col">
            <p className="text-white/40 mb-1">Original Language</p>
            <p className="text-white/90 uppercase">
              {content.original_language}
            </p>
          </div>
          <div className="flex items-center flex-col">
            <p className="text-white/40 mb-1">Budget</p>
            <p className="text-white/90">
              {content.budget ? `$${content.budget.toLocaleString()}` : "N/A"}
            </p>
          </div>
          <div className="flex items-center flex-col">
            <p className="text-white/40 mb-1">Revenue</p>
            <p className="text-white/90">
              {content.revenue ? `$${content.revenue.toLocaleString()}` : "N/A"}
            </p>
          </div>
        </div>

        {/* Seasons */}
        {type === "tv" && (
          <div className="mt-10">
            <h1 className="text-xl font-semibold mb-4">Seasons</h1>

            <ScrollArea className="w-full max-w-full rounded-md  whitespace-nowrap">
              <div className="flex w-max space-x-4 p-4">
                {content.seasons?.map((season) => (
                  <figure key={season.id} className="shrink-0 w-[180px] group">
                    <div className="overflow-hidden rounded-md bg-white/5">
                      {season.poster_path ? (
                        <Image
                          src={`https://image.tmdb.org/t/p/w500${season.poster_path}`}
                          alt={season.name}
                          className="h-[260px] w-[180px] object-cover transition-transform duration-300 group-hover:scale-105"
                          width={180}
                          height={260}
                        />
                      ) : (
                        <div className="flex h-[260px] w-[180px] items-center justify-center text-xs text-muted-foreground">
                          No image
                        </div>
                      )}
                    </div>
                    <figcaption className="pt-2 text-xs space-y-0.5">
                      <p className="font-semibold  line-clamp-1">
                        {season.name}
                      </p>
                      <p className="">
                        {season.episode_count} episode
                        {season.episode_count !== 1 && "s"}
                        {season.air_date && ` · ${season.air_date.slice(0, 4)}`}
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="opacity-0" />
            </ScrollArea>
          </div>
        )}
      </div>
    </div>
  );
}
