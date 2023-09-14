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

  const handleEditMovie = (editedMovie: Movie) => {
    const updatedMovies = [...movies];
    const index = updatedMovies.findIndex((movie) => movie.id === editedMovie.id);
    if (index !== -1) {
      updatedMovies[index] = editedMovie;
    }
    setMovies(updatedMovies);
  };

  const openModal = () => {
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
      <div className="container text-center ">
        <div className="col col-lg-10 col-md-10 col-sm-10 col-12 mx-auto">
          
          <div className="row">
            <div className="col col-md-6 col-sm-12 col-12" >
              <MovieFilter filterText={filterText} setFilterText={setFilterText} />
            </div>
            <div className="col col-md-6 col-sm-12 col-12">
              <button 
                className="btn btn-primary"
                onClick={openModal}
                data-bs-toggle="modal"
                data-bs-target="#movieAddModal">+ Add Movie</button>
              <MovieAddModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onAddMovie={(movie) =>{
                  setMovies([...movies, movie]);
                  closeModal();
                }}/>
              <br></br>
              <button 
                className="btn btn-secondary m-2" 
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseList"
                aria-expanded="true">Show List</button>
            </div>
            <hr/>
          </div>
        </div>
      </div>
      <div className="container text-center col col-lg-10 col-md-10 col-sm-10 col-12 mx-auto">
        <div className="row">
          <div className="col col-4 col-lg-4 col-sm col-12 collapse collapse show" id="collapseList">
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
          <div className="col col-8 col-md col-sm-12 col-12 ">
            <div className="row-md-6">
                {selectedMovie && movies.some((movie) => movie.id === selectedMovie.id) &&(
                  <MovieDetail 
                    key={selectedMovie.id}
                    movie={selectedMovie}
                    onAddGenre={(movieId,genre) => selectedMovie?.id && handleAddGenre(selectedMovie.id, genre)}
                    onDeleteGenre={(movieId, index) => selectedMovie?.genre && handleDeleteGenre(selectedMovie.id, selectedMovie.genre[index])} 
                    onEditMovie={handleEditMovie}                      
                    
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

