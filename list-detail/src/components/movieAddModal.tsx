import React, { useState } from "react";
import {Movie} from "../models/movie";
import MovieAdd from "./movieAdd";

interface MovieAddModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddMovie: (movie: Movie) => void;
}

export const MovieAddModal: React.FC<MovieAddModalProps> = ({ isOpen, onClose, onAddMovie }) => {

  const [newMovie, setNewMovie] = useState<Movie>({id: Date.now(), title: "", description: "",year: "", runTime: "", rating: "", genre: []});

  const handleAddMovie = () => {
    const { title, description, year, runTime, rating } = newMovie;
    if (title && description && year && runTime && rating) {
      onAddMovie(newMovie); 
      onClose();
      setNewMovie({
        id: Date.now(), title: "", description: "", year: "", runTime: "", rating: "", genre: [],
      });
    }
  };
  
  return (
    <div className="modal fade" id="movieAddModal"  >
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <MovieAdd 
                  onAddMovie={handleAddMovie} 
                  onTitleChange={(title) => setNewMovie({...newMovie, title})}
                  onDescriptionChange={(description) => setNewMovie({...newMovie, description})}
                  onYearChange={(year) => setNewMovie({ ...newMovie, year })}
                  onRunTimeChange={(runTime) => setNewMovie({ ...newMovie, runTime })}
                  onRatingChange={(rating) => setNewMovie({ ...newMovie, rating })}
                />
            </div>
            <div className="modal-footer">
                <button onClick={onClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>
  );
};

export default MovieAddModal;
