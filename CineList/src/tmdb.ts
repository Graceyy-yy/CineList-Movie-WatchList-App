import { type Movie } from "./types/Movie";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

console.log(import.meta.env.VITE_TMDB_API_KEY)
console.log(import.meta.env.VITE_TMDB_BASE_URL)

type TMDBSearchResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export async function searchMovies(movieTitle:string):Promise<Movie[]> {
    if (!movieTitle.trim()) {
        return[];
    }

    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieTitle)}`)


    console.log("here it is"+res);
    const data:TMDBSearchResponse = await res.json();

    console.log(data.results);
    return data.results

}