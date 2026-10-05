import {
getphotos,
  watchProvider,
  getreviews,
  getMovie,
  getCast,
  getTrailer,
  getRecommendations,
} from "../../../lib/tmdb";
import TitleCards from "../../../app/components/TitleCards";
import Content from "../../../app/components/movie/Content";
import Cast from "../../../app/components/movie/Cast";
import Reviews from "../../../app/components/movie/Reviews";
import Photos from "../../../app/components/movie/Photos";
import Trailer from "../../../app/components/movie/Trailer";
import Recommendations from "../../../app/components/movie/Recommendations";

export default async function MovieDetailsPage({ params, searchParams }) {
  const { id } = await params;
  const { type = "movie" } = await searchParams;

  const [content, availableOn, trailers, reviews, photos, cast, recommendations] =
    await Promise.all([
      getMovie(id, type),
      watchProvider(id, type),
      getTrailer(id, type),
      getreviews(id, type),
      getphotos(id, type),
      getCast(id, type),
      getRecommendations(id, type),
    ]);

  if (!content) notFound(); 

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Details */}
      <Content content={content} type={type} available={availableOn} />

      {/* Photo */}
      {/* <Photos photos={photos} /> */}
      <Recommendations data={recommendations}/>

      {/* CAST */}
      <Cast cast={cast} />

      {/* TRAILER */}
      <Trailer trailers={trailers} />

      {/* Reviews */}
      <Reviews reviews={reviews} />
    </div>
  );
}
