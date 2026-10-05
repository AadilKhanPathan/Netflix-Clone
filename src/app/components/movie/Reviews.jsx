import Image from "next/image";
import { Star } from "lucide-react";

export default function Reviews({ reviews }) {
  if (!reviews || reviews.length === 0) return null;

  // Filter reviews that have an avatar path
  const reviewers = reviews.filter((r) => r.author_details?.avatar_path);

  if (reviewers.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 pb-20">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-white">Reviews</h2>
        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700/50">
          {reviewers.length}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {reviewers.map((r) => {
          const avatarUrl = r.author_details.avatar_path.startsWith("http")
            ? r.author_details.avatar_path.slice(1)
            : `https://image.tmdb.org/t/p/w185${r.author_details.avatar_path}`;

          return (
            <article
              key={r.id}
              className="group flex flex-col sm:flex-row gap-4 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900"
            >
              {/* Avatar */}
              <div className="relative shrink-0">
                <Image
                  src={avatarUrl}
                  unoptimized
                  width={56}
                  height={56}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-full border border-zinc-700/60 bg-zinc-800 shadow-inner"
                  alt={r.author || "Reviewer Avatar"}
                />
              </div>

              {/* Body */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-semibold text-zinc-100 text-base leading-snug">
                      {r.author}
                    </h3>
                    {r.created_at && (
                      <p className="text-xs text-zinc-500">
                        {new Date(r.created_at).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    )}
                  </div>

                  {/* Rating Badge */}
                  {r.author_details.rating && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                      <span>{r.author_details.rating}</span>
                      <span className="text-amber-500/60 font-normal">/ 10</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <p className="text-sm leading-relaxed text-zinc-300 whitespace-pre-wrap break-words mt-3 font-normal">
                  {r.content}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}