import Image from "next/image";

export default function Recommendations({ data }) {
  return (
    <section className="mx-auto max-w-5xl px-3 py-8">
      <h2 className="mb-5 text-2xl font-bold text-white">
        You May Also Like
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {data.map((p) => (
          <div
            key={p.poster_path}
            className="group relative overflow-hidden rounded-xl bg-zinc-900 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <Image
              src={`https://image.tmdb.org/t/p/w342${p.poster_path}`}
              unoptimized
              width={342}
              height={513}
              alt={p.title || "Movie poster"}
              className="aspect-[2/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Movie title */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="line-clamp-2 text-sm font-semibold text-white">
                {p.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}