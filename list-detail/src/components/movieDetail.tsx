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
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieDetail;
