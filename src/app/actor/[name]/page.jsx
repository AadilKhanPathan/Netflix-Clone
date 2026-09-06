import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getphotos } from "../../../lib/tmdb";
import Photos from "../../../app/components/movie/Photos";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
  },
};

async function getActor(name) {
  const searchRes = await fetch(
    `https://api.themoviedb.org/3/search/person?query=${encodeURIComponent(
      name,
    )}&include_adult=false&language=en-US&page=1`,
    options,
  );
  const searchData = await searchRes.json();
  const match = searchData.results?.[0];
  if (!match) return null;

  const detailRes = await fetch(
    `https://api.themoviedb.org/3/person/${match.id}?language=en-US&append_to_response=movie_credits,external_ids`,
    options,
  );
  const data = await detailRes.json();
  console.log(data);

  return data;
}

function calculateAge(birthday, deathday) {
  if (!birthday) return null;
  const end = deathday ? new Date(deathday) : new Date();
  const start = new Date(birthday);
  let age = end.getFullYear() - start.getFullYear();
  const m = end.getMonth() - start.getMonth();
  if (m < 0 || (m === 0 && end.getDate() < start.getDate())) age--;
  return age;
}

const GENDER_LABELS = { 1: "Female", 2: "Male", 3: "Non-binary" };

export default async function ActorDetailsPage({ params }) {
  const { name } = await params;
  const actor = await getActor(name);
  const profile = await getphotos(actor.id, "person");
  console.log(profile);

  if (!actor) notFound();

  const age = calculateAge(actor.birthday, actor.deathday);

  const knownFor = (actor.movie_credits?.cast || [])
    .filter((m) => m.poster_path)
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 12);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex flex-col sm:flex-row gap-8">
          {/* Photo */}
          <div className="flex-shrink-0 flex justify-center sm:block">
            {actor.profile_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                width={220}
                height={220}
                className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-2xl shadow-lg border border-border"
              />
            ) : (
              <div className="w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center rounded-2xl bg-muted text-sm text-muted-foreground">
                No Image
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl font-bold text-foreground">{actor.name}</h1>

            <div className="mt-2 flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 text-sm text-muted-foreground">
              {actor.birthday && (
                <span>
                  Born{" "}
                  {new Date(actor.birthday).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  {age !== null && !actor.deathday && ` (age ${age})`}
                </span>
              )}
              {actor.deathday && (
                <span>
                  Died{" "}
                  {new Date(actor.deathday).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  {age !== null && ` (aged ${age})`}
                </span>
              )}
              {actor.place_of_birth && <span>{actor.place_of_birth}</span>}
            </div>

            <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2">
              {actor.known_for_department && (
                <span className="px-2 py-0.5 rounded-full bg-gray-500 text-xs font-medium">
                  {actor.known_for_department}
                </span>
              )}
              {actor.gender !== undefined && GENDER_LABELS[actor.gender] && (
                <span className="px-2 py-0.5 rounded-full bg-gray-500 text-xs font-medium">
                  {GENDER_LABELS[actor.gender]}
                </span>
              )}
              {typeof actor.popularity === "number" && (
                <span className="px-2 py-0.5 rounded-full bg-gray-500 text-xs font-medium">
                  Popularity {actor.popularity.toFixed(1)}
                </span>
              )}
            </div>

            {/* External links */}
            <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-3 text-sm">
              {actor.homepage && (
                <Link
                  href={actor.homepage}
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Official Site
                </Link>
              )}
              {actor.external_ids?.imdb_id && (
                <Link
                  href={`https://www.imdb.com/name/${actor.external_ids.imdb_id}`}
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  IMDb
                </Link>
              )}
              {actor.external_ids?.instagram_id && (
                <Link
                  href={`https://instagram.com/${actor.external_ids.instagram_id}`}
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Instagram
                </Link>
              )}
              {actor.external_ids?.twitter_id && (
                <Link
                  href={`https://twitter.com/${actor.external_ids.twitter_id}`}
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  Twitter/X
                </Link>
              )}
            </div>

            {/* Also known as */}
            {actor.also_known_as?.length > 0 && (
              <p className="mt-4 text-xs text-muted-foreground">
                Also known as: {actor.also_known_as.slice(0, 4).join(", ")}
              </p>
            )}

            {/* Biography */}
            <div className="mt-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                Biography
              </h2>
              {actor.biography ? (
                <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">
                  {actor.biography}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground italic">
                  No biography available.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* photos */}
        <Photos photos={profile}/>

        {/* Known For */}
        {knownFor.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Known For
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {knownFor.map((movie) => (
                <Link
                  href={`/details/${movie.id}`}
                  key={movie.id}
                  className="group"
                >
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-sm border border-border">
                    <Image
                      src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                      alt={movie.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-2 text-xs font-medium text-foreground line-clamp-1">
                    {movie.title}
                  </p>
                  {movie.character && (
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      as {movie.character}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
