import React from "react";

interface MovieFilterProps {
  filterText: string;
  setFilterText: (text: string) => void;
}

export const MovieFilter: React.FC<MovieFilterProps> = ({ filterText, setFilterText }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Filter movie titles"
        value={filterText}
        onChange={(e) => setFilterText(e.currentTarget.value)}
      />
      <br />
    </div>
  );
};

export default MovieFilter;
