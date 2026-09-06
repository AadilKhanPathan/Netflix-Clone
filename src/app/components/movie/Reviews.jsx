import Image from "next/image";
import { Star } from "lucide-react";
export default function Reviews({ reviews }) {
  if (!reviews || reviews.length === 0) return null;

  const reviewer = reviews.filter((r) => r.author_details.avatar_path);

  console.log(reviews);

  return (
    <div className="max-w-6xl mx-auto px-4 pb-20">
      <h1 className="text-2xl font-bold mb-3">Reviews</h1>
      <div className="flex flex-col gap-6">
        {reviewer.map((r) => (
          <div className="flex gap-3 border border-zinc-700 rounded-3xl p-3" key={r.id}>
            <Image
              src={`https://image.tmdb.org/t/p/w200${r.author_details.avatar_path}`}
              width={100}
              height={100}
              className="w-12 h-12 shrink-0 object-cover rounded-full border-2"
              alt={r.author}
            />
            <div>
              <div className="flex justify-between ">
            <span className="font-bold">{r.author}</span>
            <span className="flex border items-center gap-0.5 px-1.5 p-0.5 rounded-2xl"><Star/>{r.author_details.rating}/10</span></div>

            <p className="text-shadow-amber-500 font-mono whitespace-pre-wrap text-zinc-400 mt-3">{r.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
