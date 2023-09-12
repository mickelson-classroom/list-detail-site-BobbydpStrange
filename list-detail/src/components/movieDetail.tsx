import React,{ useState } from "react";

interface MovieDetailProps {
  movie: {
    id: number;
    title: string;
    description: string;
    year: string;
    runTime: string;
    rating: string;
    genre: string[];
  };
  onAddGenre: (movieId: number, genre: string) => void;
  onDeleteGenre: (movieId: number, index: number) => void;
}

export const MovieDetail: React.FC<MovieDetailProps> = ({ movie, onAddGenre, onDeleteGenre }) => {
  const [newGenre, setNewGenre] = useState<string>("");

  const handleAddGenre = () => {
    console.log("Add Genre: "+ newGenre)
    if (newGenre.trim() !== ""){
      onAddGenre(movie.id, newGenre);
      setNewGenre("");
    }
  };

  const handleDeleteGenre = (index: number) => {
    onDeleteGenre(movie.id, index);
  };

  return (
    <div className="container text-center border rounded-5 p-3 bg-secondary-subtle border-secondary">
      <div className="row  ">
        <div className="col col-md-6">
          <h2>Title</h2>
          <p>{movie.title}</p>
        </div>
        <div className="col col-md-6">
          <h2>Description</h2>
          <p>{movie.description}</p>
        </div>
      </div>
      <hr/>
      <div className="row  ">
        <div className="col col-md-4">
          <h4>Year</h4>
          <p>{movie.year}</p>
        </div>
        <div className="col col-md-4">
          <h4>RunTime</h4>
          <p>{movie.runTime}</p>
        </div>
        <div className="col col-md-4">
          <h4>Rating</h4>
          <p>{movie.rating}</p>
        </div>
      </div>
      <hr/>
      <div className="row mt-3">
        <div className="col-12">
          <div className="col">
            <h3>Genre:</h3>
            <div className="row">
              <label 
                className="form-label">Genre Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Genre (reload page to see new items)"
                value={newGenre}
                onChange={(e) => setNewGenre(e.target.value)}
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
