"use client";

import Cards_data from "../assets/cards/Cards_data";
import Link from "next/link";
import Image from "next/image";
import { PlayIcon, PlusIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { Skeleton } from "../../components/ui/skeleton";
import { useEffect, useState } from "react";

function Hero() {
  const [data, setData] = useState([]);


  async function getData() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
      },
    };

    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options,
    )
      .then((res) => res.json())
      .then((res) => setData(res.results))
      .catch((err) => console.error(err));
  }

  // IF USING API
  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {Cards_data.map((movie) => (
            <CarouselItem key={movie.name}>
              <div className="relative w-full h-[85vh] min-h-[500px]">
                {/* Background image */}
                <Link href={`/details/${movie.id}?type=${movie.type}`}>
                <Image src={movie.image} alt={movie.name} fill priority className="object-cover" />

                {/* Gradient overlays for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-24 left-8 md:left-16 z-10 max-w-xl">
                  <p className="text-sm font-semibold tracking-wide text-gray-200 mb-2">
                    ORIGINAL NETFLIX
                  </p>
                  <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                    {movie.name}
                  </h1>

                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-2 rounded hover:bg-white/80 transition">
                      <PlayIcon className="w-5 h-5" />
                      Trailer
                    </button>
                    <button className="flex items-center gap-2 bg-gray-500/40 text-white font-semibold px-6 py-2 rounded hover:bg-gray-500/60 transition">
                      <PlusIcon className="w-5 h-5" />
                      Add to list
                    </button>
                  </div>
                </div>
              </Link></div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4 h-12 w-12 bg-black/30 hover:bg-black/60 border-none text-white opacity-70 hover:opacity-100 transition-all duration-200 [&_svg]:h-7 [&_svg]:w-7" />
<CarouselNext className="right-4 h-12 w-12 bg-black/30 hover:bg-black/60 border-none text-white opacity-70 hover:opacity-100 transition-all duration-200 [&_svg]:h-7 [&_svg]:w-7" />
      </Carousel>
    </div>
  );
}

export default Hero;

