import React, { useState } from "react";
import MovieDetail from "./movieDetail";
import MovieFilter from "./movieFilter";
import MovieAddModal from "./movieAddModal";
import {Item} from "./movieItem";
import {Movie} from "../models/movie"


export const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>();
  const [filterText, setFilterText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("Opening modal");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const handleDelete = (deletingMovie: Movie) => {
    const newMovies = movies.filter((movie) => movie.id !== deletingMovie.id);
    setMovies(newMovies);

    if (selectedMovie && selectedMovie.id === deletingMovie.id) {
      setSelectedMovie(undefined);
    }
  };

  const handleAddGenre = (movieId: number, genre:string) => {
    console.log("Add Genre"+ movieId+ "genre: " + genre)

    setMovies((prevMovies) => 
       prevMovies.map((movie) =>
        movie.id === movieId ? { ...movie, genre: [...movie.genre, genre]} : movie
      )
    );
        console.log("movie should be added")
  };

  const handleDeleteGenre = (movieId: number, deletingGenre : string) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === movieId
          ? {...movie, genre: movie.genre.filter((g) => g !== deletingGenre)}
          :movie
      )
    );
  };

  return (
    <div>
      <div className="container text-center">
        <div className="col">
          
          <div className="row">
            <div className="col-md-6">
              <MovieFilter filterText={filterText} setFilterText={setFilterText} />
            </div>
            <div className="col-md-6">
              <button 
                className="btn btn-primary"
                onClick={openModal}
                data-bs-toggle="modal"
                data-bs-target="#movieAddModal">+ Add Movie</button>
              <MovieAddModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onAddMovie={(title, description) =>{
                  const newMovie = {
                    id: Date.now(),
                    title: title,
                    description: description,
                    genre: []
                  };
                  setMovies([...movies, newMovie]);
                  closeModal();
                }}/>
              <br></br>
            </div>
            <hr/>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col col-4 col-lg-4 col-sm">
            <ul className="list-group">
              {movies
                .filter((movie) =>
                  movie.title.toLowerCase().includes(filterText.toLowerCase())
                )
                .map((movie) => (
                  <Item onClick={(m) => setSelectedMovie(m)} 
                    onDelete={handleDelete}
                    key={movie.id} 
                    item={movie} 
                    isSelected={movie.id === selectedMovie?.id}/>
                ))}
            </ul>
          </div>
          <div className="col col-8 col-md ">
            <div className="row-md-6">
                {selectedMovie && movies.some((movie) => movie.id === selectedMovie.id) &&(
                  <MovieDetail 
                    movie={selectedMovie}
                    onAddGenre={(movieId,genre) => selectedMovie?.id && handleAddGenre(selectedMovie.id, genre)}
                    onDeleteGenre={(movieId, index) => selectedMovie?.genre && handleDeleteGenre(selectedMovie.id, selectedMovie.genre[index])} 
                  />
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;

