import React, { useState } from "react";

interface MovieAddProps {
  onAddMovie: (title: string, description: string) => void;
}

export const MovieAdd: React.FC<MovieAddProps> = ({ onAddMovie }) => {
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputDesc, setInputDesc] = useState<string>("");

  const handleClick = () => {
    if (inputTitle.trim() === "" && inputDesc.trim() === "") {
      return;
    }
    onAddMovie(inputTitle, inputDesc);
    
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add movie title"
        onChange={(e) => setInputTitle(e.currentTarget.value)}
        value={inputTitle}
      />
      <input
        type="text"
        placeholder="Add movie description"
        onChange={(e) => setInputDesc(e.currentTarget.value)}
        value={inputDesc}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default MovieAdd;
