import React from "react";

interface MovieDetailProps {
  movie: {
    id: number;
    title: string;
    description: string;
  };
}

export const MovieDetail: React.FC<MovieDetailProps> = ({ movie }) => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-6">
          <h2>Title</h2>
          <p>{movie.title}</p>
        </div>
        <div className="col-md-6">
          <h2>Description</h2>
          <p>{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
