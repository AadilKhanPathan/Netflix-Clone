const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
  },
};

export async function getMovie(id, type) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}?language=en-US`,
    options,
  );

  const data = await res.json();
  console.log(data);
  return data;
}

export async function watchProvider(id, type) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}/watch/providers`,
    options,
  );

  const data = await res.json();
  const country = data.results?.IN;
  const flatrate = country?.flatrate || [];

  return flatrate;
}

export async function getCast(id, type) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}/credits?language=en-US`,
    options,
  );

  const data = await res.json();

  console.log(data.cast.slice(0, 10));

  return data.cast.slice(0, 12);
}

export async function getreviews(id, type) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}/reviews?language=en-US&page=1`,
    options,
  );
  const data = await res.json();

  return data.results;
}

export async function getphotos(id, type) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}/images`,
    options,
  );

  if (!res.ok) {
    console.log("failed to fetch the data");
  }

  const data = await res.json();

  if (type === "movie") {
    return data.posters.filter((p) => p.iso_639_1 == "en").slice(1, 11);
  } else if (type === "tv") {
    return data.posters.filter((p) => p.iso_639_1 == "en").slice(1, 11);
  } else {
    return data.profiles.slice(1, 11);
  }
}

export async function getTrailer(id, type) {
  const res = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`,
    options,
  );

  const data = await res.json();
  const videos = data.results || [];

  const OfficialTrailer = videos.find(
    (v) => v.type === "Trailer" && v.official,
  );
  console.log(data.results);

  return OfficialTrailer;
}
