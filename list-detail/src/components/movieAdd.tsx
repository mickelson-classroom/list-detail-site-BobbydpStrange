import React, { useEffect, useState } from "react";

interface MovieAddProps {
  onAddMovie: (title: string, description: string) => void;
  onTitleChange: (title: string) => void;
  onDescriptionChange: (description: string) => void;
}

export const MovieAdd: React.FC<MovieAddProps> = ({ onAddMovie, onTitleChange, onDescriptionChange }) => {
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputDesc, setInputDesc] = useState<string>("");

  const handleClick = () => {
    if (inputTitle.trim() === "" && inputDesc.trim() === "") {
      return;
    }
    onAddMovie(inputTitle, inputDesc);
    setInputTitle("");
    setInputDesc("");
  };

  return (
    <div className="container">
      <div className="row">
      <label className="form-label">Title: </label>
      <input
        type="text"
        className="form-control"
        placeholder="Add movie title"
        onChange={(e) => {setInputTitle(e.currentTarget.value);
          onTitleChange(e.currentTarget.value);}}
        value={inputTitle}
      />
      </div>
      <div className="row">
      <label className="form-label">Description: </label>
      <input
        type="text"
        className="form-control"
        placeholder="Add movie description"
        onChange={(e) => {setInputDesc(e.currentTarget.value);
          onDescriptionChange(e.currentTarget.value);}}
        value={inputDesc}
      /></div>
      <br></br>
      <button className="btn btn-primary" onClick={handleClick}>Add</button>
    </div>
  );
};

export default MovieAdd;
