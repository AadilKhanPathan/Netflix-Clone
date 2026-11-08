import axios from "axios";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
  },
  params: {
    language: "en-US",
  },
});

export async function getMovie(id, type) {
  const { data } = await tmdb.get(`/${type}/${id}`);
  return data;
}

export async function watchProvider(id, type) {
  const { data } = await tmdb.get(`/${type}/${id}/watch/providers`);

  const country = data.results?.IN;

  const flatrate = country?.flatrate || [];

  return flatrate;
}

export async function getCast(id, type) {
  const { data } = await tmdb.get(`/${type}/${id}/credits`);

  console.log(data.cast.slice(0, 12));

  return data.cast.slice(0, 12);
}

export async function getreviews(id, type) {
  const { data } = await tmdb.get(`/${type}/${id}/reviews`);

  return data.results;
}

export async function getphotos(id, type) {
  const { data } = await tmdb.get(`/${type}/${id}/images`);

  if (type === "movie") {
    return data.posters.filter((p) => p.iso_639_1 == "en").slice(1, 11);
  } else if (type === "tv") {
    return data.posters.filter((p) => p.iso_639_1 == "en").slice(1, 11);
  } else {
    return data.profiles.slice(1, 11);
  }
}

export async function getTrailer(id, type) {
  const { data } = await tmdb.get(`/${type}/${id}/videos`);

  const videos = data.results || [];

  const OfficialTrailer = videos.find(
    (v) => v.type === "Trailer" && v.official,
  );
  console.log(data.results);

  return OfficialTrailer;
}

export async function getRecommendations(id, type) {
  const { data } = await tmdb.get(`/${type}/${id}/recommendations`);

  console.log(data.results.slice(0, 10));
  return data.results.slice(0, 10);
}

export async function getSearch(query) {
  const { data } = await tmdb.get("/search/multi", {
    params: { query, include_adult: false },
  });

  console.log(data);

  return data;
}
