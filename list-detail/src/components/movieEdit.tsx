import React, { useEffect, useState } from "react";
import {Movie} from "../models/movie";

interface MovieEditProps {
    movie: Movie;
    onEditMovie: (editedMovie: Movie) => void;
}

export const MovieEdit: React.FC<MovieEditProps> = ({ 
  movie, onEditMovie
}) => {
  const [editedTitle, setEditedTitle] = useState(movie.title);
  const [editedDesc, setEditedDesc] = useState(movie.description);
  const [editedRunTime, setEditedRunTime] = useState(movie.runTime);
  const [editedRating, setEditedRating] = useState(movie.rating);
  const [editedYear, setEditedYear] = useState(movie.year);

  const minCharactrCount = 2;

  const isTitleValid = editedTitle.length >= minCharactrCount;
  const isDescValid = editedDesc.length >= minCharactrCount;
  const isRunTimeValid = editedRunTime.length > 0;
  const isRatingValid = editedRating !== "";
  const isYearValid = editedYear !== "" && editedYear.length <= 4;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const editedMovie: Movie = {
      ...movie, 
      title: editedTitle, 
      description: editedDesc, 
      runTime: editedRunTime, 
      rating: editedRating, 
      year: editedYear, 
    };
    onEditMovie(editedMovie);
  }


  return (
    <form className="container needs-validation" >
      <div className="row">
        <label className="form-label" htmlFor="title">Title:* </label>
        <div className="input-group has-validation">
          <input
            className={`form-control ${isTitleValid ? "is-valid": "is-invalid"}`}
            type="text"
            name="title"
            id="title"
            placeholder="Add movie title"
            onChange={(e) => setEditedTitle(e.currentTarget.value)}
            value={editedTitle}
            aria-describedby="titlevalidation"
            required
          />
          <div id="titlevalidation" className="valid-feedback">Great Movie</div>
          <div id="titlevalidation" className="invalid-feedback">Needs to be greater than 3 characters</div>
        </div>
      </div>
      <div className="row">
        <label className="form-label" htmlFor="runtime">Runtime:*</label>
        <div className="input-group has-validation">
          <input
            type="text"
            className={`form-control ${isRunTimeValid ? "is-valid": "is-invalid"}`}
            required
            placeholder="Add length of movie"
            id="runtime"
            name="runtime"
            aria-describedby="runtimevalidation"
            onChange={(e) => setEditedRunTime(e.currentTarget.value)}
            value={editedRunTime}
            />
          <div id="runtimevalidation"className="valid-feedback">Great Time</div>
          <div id="runtimevalidation"className="invalid-feedback">Needs to be greater than 0</div>
        </div>
      </div>
      <div className="row">
        <div className="col col-md-6">
          <label className="form-label" htmlFor="year">Year:*</label>
          <div className="input-group has-validation">
            <input
              required
              type="text"
              name="year"
              id="year"
              aria-describedby="yearvalidation"
              className={`form-control ${isYearValid ? "is-valid": "is-invalid"}`}
              placeholder="Add the year of the movie"
              onChange={(e) => setEditedYear(e.currentTarget.value)}
              value={editedYear}
            />
            <div id="yearvalidation" className="valid-feedback">Great Year</div>
            <div id="yearvalidation" className="invalid-feedback">Must put a year</div>
          </div>
        </div>
        <div className="col col-md-6">
          <label className="form-label">Rating:*</label>
          <div className="input-group has-validation">
            <select 
              className={`form-control ${isRatingValid ? "is-valid": "is-invalid"}`}
              id="rating"
              required
              aria-describedby="ratingvalidation"
              onChange={(e) => setEditedRating(e.currentTarget.value)}
              value={editedRating}
              >
              <option selected disabled value="">Choose...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <div id="ratingvalidation" className="valid-feedback">Great rating</div>
            <div id="ratingvalidation" className="invalid-feedback">Need a rating</div>
          </div>
        </div>
      </div>
      <div className="row">
        <label className="form-label">Description:* </label>
        <div className="input-group has-validation">
          <input
            type="text"
            id="description"
            aria-describedby="descriptionvalidation"
            className={`form-control ${isDescValid ? "is-valid": "is-invalid"}`}
            placeholder="Add movie description"
            onChange={(e) => setEditedDesc(e.currentTarget.value)}
            value={editedDesc}
            required
          />
          <div id="descriptionvalidation" className="valid-feedback">Great Year</div>
            <div id="descriptionvalidation" className="invalid-feedback">Missing input</div>
        </div>
      </div>
      <br></br>
      <button className="btn btn-primary" type="submit" onClick={handleSave}>Save</button>
    </form>
  );
};

export default MovieEdit;
