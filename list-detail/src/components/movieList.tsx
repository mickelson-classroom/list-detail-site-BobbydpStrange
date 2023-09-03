import React, { useState } from "react";
import MovieDetail from "./movieDetail";
import MovieFilter from "./movieFilter";
import MovieAdd from "./movieAdd";

interface Movie {
  id: number;
  title: string;
  description: string;
}

export const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>();
  const [filterText, setFilterText] = useState("");

  const handleAddMovie = (title: string, description: string) => {
    const newMovie: Movie = { id: Date.now(), title, description };
    setMovies([...movies, newMovie]);
  };

  const handleDelete = (deletingMovie: Movie) => {
    const newMovies = movies.filter((movie) => movie.id !== deletingMovie.id);
    setMovies(newMovies);

    if (selectedMovie && selectedMovie.id === deletingMovie.id) {
      setSelectedMovie(undefined);
    }
  };

  return (
    <div>
      {selectedMovie && movies.some((movie) => movie.id === selectedMovie.id) &&(
        <MovieDetail movie={selectedMovie} />
      )}
      <h1>Movies</h1>
      <MovieFilter filterText={filterText} setFilterText={setFilterText} />
      <MovieAdd onAddMovie={handleAddMovie} />
      <ul>
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().includes(filterText.toLowerCase())
          )
          .map((movie) => (
            <li
              onClick={() => setSelectedMovie(movie)}
              key={movie.id}
            >
              {movie.title}
              <button onClick={() => handleDelete(movie)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MovieList;

