import React, { useEffect, useState} from "react";
import TextInput from "./textInput";
import SelectInput from "./selectInput";
import RadioInput from "./radioInput";
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
  const [editedWatched, setEditedWatched] = useState<boolean>(false);

  const minCharactrCount = 2;

  const isTitleValid = editedTitle.length >= minCharactrCount;
  const isDescValid = editedDesc.length >= minCharactrCount;
  const isRunTimeValid = editedRunTime.length > 0;
  const isRatingValid = editedRating !== "";
  const isYearValid = editedYear !== "" && editedYear.length <= 4;
  const movieRatings = ["1","2","3","4","5"];


  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const editedMovie: Movie = {
      ...movie, 
      title: editedTitle, 
      description: editedDesc, 
      runTime: editedRunTime, 
      rating: editedRating, 
      year: editedYear
    };
    onEditMovie(editedMovie);
  }


  return (
    <form className="container needs-validation" >
      <div className="row ">
        <TextInput
          label= "Title:*"
          value={editedTitle}
          onChange={setEditedTitle}
          placeholderText="Add movie title"
          validationRules={(value) => value.length >= 2}
          feedbackMessage="Must be at least 2 characters."
        />
      </div>
      <div className="row">
        <TextInput
          label= "RunTime:*"
          value={editedRunTime}
          onChange={setEditedRunTime}
          placeholderText="Add length of movie"
          validationRules={(value) => value.length >= 2}
          feedbackMessage="Must be at least 2 characters."
        />
      </div>
      <div className="row">
        <div className="col col-md-6 col-sm-6 col-12 ">
          <TextInput
            label= "Year:*"
            value={editedYear}
            onChange={setEditedYear}
            placeholderText="Add movie year"
            validationRules={(value) => value.length <= 4}
            feedbackMessage="Must be no more than 4 characters."
          />
        </div>
        <div className="col col-md-6 col-sm-6 col-12">
          <SelectInput
            label="Rating:*"
            value={editedRating}
            options={movieRatings}
            onChange={setEditedRating}
          />
        </div>
      </div>
      <div className="row">
        <TextInput
          label= "Description:*"
          value={editedDesc}
          onChange={setEditedDesc}
          placeholderText="Add movie description"
          validationRules={(value) => value.length >= 2}
          feedbackMessage="Must be at least 2 characters."
        />
      </div>
      <div className="row">
        <RadioInput
            label= "Watched?"
            value={editedWatched}
            onChange={setEditedWatched}
          />
      </div>
      <br></br>
      <button className="btn btn-primary" type="submit" onClick={handleSave}>Save</button>
    </form>
  );
};

export default MovieEdit;
