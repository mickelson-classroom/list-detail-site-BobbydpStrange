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
      <div className="container text-center">
        <div className="col">
          <div className="row-md-6">
            {selectedMovie && movies.some((movie) => movie.id === selectedMovie.id) &&(
              <MovieDetail movie={selectedMovie} />
            )}
          </div>
          <div className="row">
            <div className="col-md-6">
              <MovieFilter filterText={filterText} setFilterText={setFilterText} />
            </div>
            <div className="col-md-6">
              <MovieAdd onAddMovie={handleAddMovie} />
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="col-5">
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
                  <div className="row">
                    <div className="col">
                      {movie.title}
                    </div>
                    <div className="col">
                      <button className="btn btn-danger"  onClick={() => handleDelete(movie)}>Delete</button>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieList;

