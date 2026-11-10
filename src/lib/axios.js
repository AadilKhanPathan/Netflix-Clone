import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
  },
  params: {
    language: "en-US",
  },
});