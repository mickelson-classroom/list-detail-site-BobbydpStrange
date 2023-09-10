import React, { useState } from "react";
import {Movie} from "../models/movie";
import MovieAdd from "./movieAdd";

interface MovieAddModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddMovie: (title: string, description: string) => void;
}

export const MovieAddModal: React.FC<MovieAddModalProps> = ({ isOpen, onClose, onAddMovie }) => {

  const [newMovie, setNewMovie] = useState<Movie>({id: Date.now(), title: "", description: "", genre: []});

  const handleAddMovie = () => {
    const {title, description} = newMovie;
    onAddMovie(title, description);
    onClose();
    setNewMovie({id: Date.now(), title: "", description:"", genre: []});
    
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
                  onTitleChange={(title) => setNewMovie({...newMovie, title})}
                  onDescriptionChange={(description) =>
                    setNewMovie({...newMovie, description})}
                  onAddMovie={handleAddMovie} 
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
