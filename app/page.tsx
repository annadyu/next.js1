
import React from "react";
import { truncate } from "@/utils/truncate";
import {formatDate} from "@/utils/formatDate";
import { Card, Row, Col } from "antd";
import MovieList from "./components/MovieList";

const MoviesPage = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=return&api_key=${process.env.MOVIE_API_KEY}`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  const movies: Movie[] = data.results || [];

  
interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path?: string;
}

  return (
  <MovieList movies={movies} />
  );
};

export default MoviesPage;
