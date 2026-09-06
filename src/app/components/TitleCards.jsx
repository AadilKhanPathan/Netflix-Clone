import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";
import Image from "next/image";
import Link from "next/link";
import netflix_logo from "../assets/netflix_logo.png";

async function getData(category, type) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
    },
  };

  const res = await fetch(
    `https://api.themoviedb.org/3/${type}/${category}?language=en-US&page=1`,
    options,
  );

  const data = await res.json();
  return data.results;
  // .then((res) => res.json())
  // .then((res) => setDetails(res.results))
  // .catch((err) => console.error(err));

  // setIsLoading(false);
}

export default async function TitleCards({
  Title = "popular on netflix",
  category = "now_playing",
  type = "movie",
}) {
  const Details = await getData(category, type);

  return (
  <div className="px-4 md:px-10 mb-10">
    <h2 className="text-lg md:text-xl font-semibold text-white mb-4 hover:text-white/80 transition-colors cursor-default">
      {Title}
    </h2>

    <ScrollArea className="rounded-md whitespace-nowrap">
      <div className="flex space-x-3 md:space-x-4 py-2">
        {Details.map((movie) => (
          <figure key={movie.id} className="shrink-0 group">
            <Link
              href={`/details/${movie.id}?type=${type}`}
              className="relative overflow-hidden block rounded-md ring-1 ring-white/10 transition-transform duration-300 ease-out group-hover:scale-105 group-hover:ring-white/30 group-hover:shadow-xl group-hover:shadow-black/50"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={type==="movie" ? movie.title : movie.name}
                className="object-cover cursor-pointer bg-white/5"
                width={180}
                height={260}
                priority
              />

              {/* Bottom gradient for logo legibility */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

              <Image
                src={netflix_logo}
                alt="Netflix"
                width={26}
                height={14}
                className="absolute top-2 left-2 z-10 drop-shadow-md"
              />
            </Link>

            <figcaption className="pt-2 text-xs text-white/70 group-hover:text-white transition-colors truncate w-[180px]">
              {type=="movie" ? movie.title : movie.name}
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="opacity-0" />
    </ScrollArea>
  </div>
);
}



// "use client";
// import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";
// import { Skeleton } from "../../components/ui/skeleton";
// import Image from "next/image";
// import Link from "next/link";
// import netflix_logo from "../assets/netflix_logo.png"
// import { useEffect, useState } from "react";

// export default function TitleCards({
//   Title = "popular on netflix",
//   category = "now_playing",
//   type = "movie" ,
// }) {
//   const [Details, setDetails] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   async function getData(category) {

//     setIsLoading(true);

//     const options = {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization:
//           `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
//       },
//     };

 
//     const res = await fetch(
//       `https://api.themoviedb.org/3/${type}/${category}?language=en-US&page=1`,
//       options,
//     )
    
//       .then((res) => res.json())
//       .then((res) => setDetails(res.results))
//       .catch((err) => console.error(err));

//       setIsLoading(false);
//   }

//   useEffect(() => {
//     getData(category);
//   }, [category]);

//   return (
//   <div className="px-4 md:px-10 mb-10">
//     <h2 className="text-lg md:text-xl font-semibold text-white mb-4 hover:text-white/80 transition-colors cursor-default">
//       {Title}
//     </h2>

//     <ScrollArea className="rounded-md whitespace-nowrap">
//       <div className="flex space-x-3 md:space-x-4 py-2">
//         {Details.map((movie) => (
//           <figure key={movie.id} className="shrink-0 group">
//             <Link
//               href={`/details/${movie.id}?type=${type}`}
//               className="relative overflow-hidden block rounded-md ring-1 ring-white/10 transition-transform duration-300 ease-out group-hover:scale-105 group-hover:ring-white/30 group-hover:shadow-xl group-hover:shadow-black/50"
//             >{isLoading ? <Skeleton className="aspect-video h-180 w-7xl"/> :
//               <Image
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={type==="movie" ? movie.title : movie.name}
//                 className="object-cover cursor-pointer bg-white/5"
//                 width={180}
//                 height={260}
//                 priority
//               />}

//               {/* Bottom gradient for logo legibility */}
//               <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

//               <Image
//                 src={netflix_logo}
//                 alt="Netflix"
//                 width={26}
//                 height={14}
//                 className="absolute top-2 left-2 z-10 drop-shadow-md"
//               />
//             </Link>

//             <figcaption className="pt-2 text-xs text-white/70 group-hover:text-white transition-colors truncate w-[180px]">
//               {type=="movie" ? movie.title : movie.name}
//             </figcaption>
//           </figure>
//         ))}
//       </div>
//       <ScrollBar orientation="horizontal" className="opacity-0" />
//     </ScrollArea>
//   </div>
// );
// }