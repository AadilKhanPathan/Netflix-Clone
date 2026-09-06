import Link from "next/link"
import Image from "next/image"

export default function Cast({cast}) {

  return (
   <div className="mt-12">
        <h2 className="max-w-6xl mx-auto text-2xl font-bold px-4">Cast</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 max-w-6xl mx-auto">
          {cast.map((actor) => (
            <Link
              href={`/actor/${actor.name}`}
              key={actor.id}
              className="group flex flex-col items-center text-center bg-card rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border"
            >
              {actor.profile_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                  width={100}
                  height={100}
                  className="w-24 h-24 object-cover rounded-full ring-2 ring-transparent group-hover:ring-primary transition-all duration-300 transform group-hover:scale-105"
                />
              ) : (
                <div className="w-24 h-24 flex items-center justify-center rounded-full bg-muted text-sm text-muted-foreground">
                  No Image
                </div>
              )}

              <div className="mt-3 space-y-1">
                <h3 className="font-semibold text-sm text-foreground line-clamp-1">
                  {actor.name}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-1">
                  {actor.character}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
  )
}
