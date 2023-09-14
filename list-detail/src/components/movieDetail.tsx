import React,{ useState } from "react";
import MovieEdit from "./movieEdit";
import TextInput from "./textInput";
import {Movie} from "../models/movie";

interface MovieDetailProps {
  movie: Movie;
  onAddGenre: (movieId: number, genre: string) => void;
  onDeleteGenre: (movieId: number, index: number) => void;
  onEditMovie: (editedMovie: Movie) => void;
}

export const MovieDetail: React.FC<MovieDetailProps> = ({ movie, onAddGenre, onDeleteGenre, onEditMovie }) => {
  const [newGenre, setNewGenre] = useState<string>("");
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [editedMovie, setEditedMovie] = useState<Movie>(movie);

  const toggleEditForm =() => {
    setIsEditFormOpen(!isEditFormOpen);
  }

  const handleEditMovie = (editedMovie: Movie) => {
    setEditedMovie(editedMovie);
    onEditMovie(editedMovie);
  };

  const handleAddGenre = () => {
    if (newGenre.trim() !== ""){
      const updatedMovie = {...editedMovie};
      updatedMovie.genre.push(newGenre);
      setEditedMovie(updatedMovie);
      onAddGenre(movie.id, newGenre);
      setNewGenre("");
    }
  };

  const handleDeleteGenre = (index: number) => {
    const updatedMovie = {...editedMovie};
    updatedMovie.genre.splice(index, 1);
    setEditedMovie(updatedMovie);
    onDeleteGenre(movie.id, index);
  };

  return (
    <div className="container text-center border rounded-5 p-3 bg-secondary-subtle border-secondary">
      <div className="row">
        <div className="col col-md-2">
          <button 
            type="button" 
            className="btn active m-2" 
            data-bs-toggle="button collapse"
            data-bs-target="#collapseEdit"
            aria-expanded={isEditFormOpen ? "true" : "false"}
            onClick={toggleEditForm}>Edit</button>
        </div>
      </div>
      {isEditFormOpen && (
      <div className={`collapse ${isEditFormOpen ? "show": ""}`} id="collapseEdit">
        <MovieEdit
          movie={movie}
          onEditMovie= {handleEditMovie}/>
      </div>)}
      <div className="row  ">
        <div className="col col-lg-6 col-md-12 col-sm-12 col-12">
          <h2>Title</h2>
          <p>{editedMovie.title}</p>
        </div>
        <div className="col col-lg-6 col-md-12 col-sm-12 col-12">
          <h2>Description</h2>
          <p>{editedMovie.description}</p>
        </div>
      </div>
      <hr/>
      <div className="row  ">
        <div className="col col-md-4">
          <h4>Year</h4>
          <p>{editedMovie.year}</p>
        </div>
        <div className="col col-md-4">
          <h4>RunTime</h4>
          <p>{editedMovie.runTime}</p>
        </div>
        <div className="col col-md-4">
          <h4>Rating</h4>
          <p>{editedMovie.rating}</p>
        </div>
      </div>
      <hr/>
      <div className="row mt-3">
        <div className="col-12">
          <div className="col">
            <h3>Genre:</h3>
            <div className="row">
              <TextInput
                label= "Genre Name:*"
                value={newGenre}
                onChange={setNewGenre}
                placeholderText="Add new Genre"
                validationRules={(value) => value.length >= 2}
                feedbackMessage="Must be at least 2 characters."
              />
              
              <button className="btn btn-secondary"
                onClick={handleAddGenre}>+
              </button>
            </div>
          </div>
          <div className="d-flex p-2 flex-wrap justify-content-center">
            {movie.genre.map((genre, index) => (
              <div className="col col-6 col-md-8 ">
                <div className="card " key={index}>
                    <div className="card-body">
                      <h5 className="card-title">{genre}</h5>
                      <button 
                        className="btn btn-danger"
                        onClick={() => handleDeleteGenre(index)}>-</button>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
