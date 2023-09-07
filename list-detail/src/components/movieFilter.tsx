import React from "react";

interface MovieFilterProps {
  filterText: string;
  setFilterText: (text: string) => void;
}

export const MovieFilter: React.FC<MovieFilterProps> = ({ filterText, setFilterText }) => {
  return (
    <div className="container">
      <div className="row">
      <label className="form-label">Filter: </label>
      <input
        type="text"
        className="form-control"
        placeholder="Filter movie titles"
        value={filterText}
        onChange={(e) => setFilterText(e.currentTarget.value)}
      />
      </div>
    </div>
  );
};

export default MovieFilter;
