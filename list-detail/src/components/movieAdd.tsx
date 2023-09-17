import React, { useEffect, useState } from "react";
import {Movie} from "../models/movie";
import TextInput from "./textInput";
import SelectInput from "./selectInput";
import RadioInput from "./radioInput";

interface MovieAddProps {
  onAddMovie: (movie: Movie) => void;
  onTitleChange: (title: string) => void;
  onDescriptionChange: (description: string) => void;
  onYearChange: (year: string) => void;
  onRunTimeChange: (runTime: string) => void;
  onRatingChange: (rating: string) => void;
  onWatchedChange: (watched: boolean) => void;
}

export const MovieAdd: React.FC<MovieAddProps> = ({ 
  onAddMovie, 
  onTitleChange, 
  onDescriptionChange,
  onYearChange,
  onRunTimeChange,
  onRatingChange,
  onWatchedChange
}) => {
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputDesc, setInputDesc] = useState<string>("");
  const [inputRunTime, setInputRunTime] = useState<string>("");
  const [inputRating, setInputRating] = useState<string>("");
  const [inputYear, setInputYear] = useState<string>("");
  const [inputWatched, setInputWatched] = useState<boolean>(false);

  const minCharactrCount = 3;
  const movieRatings = ["1","2","3","4","5"];

  const isTitleValid = inputTitle.length >= minCharactrCount;
  const isDescValid = inputDesc.length >= minCharactrCount;
  const isRunTimeValid = inputRunTime.length > 0;
  const isRatingValid = inputRating !== "";
  const isYearValid = inputYear !== "" && inputYear.length <= 4;

  const handleSubmit =(event: React.FormEvent) => {
    event.preventDefault();
    handleClick();
  }
  const handleTitleChange = (value: string) => {
    setInputTitle(value);
    onTitleChange(value);
  };
  const handleDescChange = (value: string) => {
    setInputDesc(value);
    onDescriptionChange(value);
  };
  const handleRunTimeChange = (value: string) => {
    setInputRunTime(value);
    onRunTimeChange(value);
  };
  const handleYearChange = (value: string) => {
    setInputYear(value);
    onYearChange(value);
  };
  const handleRatingChange = (value: string) => {
    console.log("handle rating" + value)
    setInputRating(value);
    onRatingChange(value);
  };
  const handleWatchedChange = (value: boolean) => {
    setInputWatched(value);
    onWatchedChange(value);
  }

  const handleClick = () => {
    if (isTitleValid && isDescValid && isRatingValid && isRunTimeValid && isYearValid) {
      onAddMovie({
        id: Date.now(),
        title: inputTitle,
        description: inputDesc,
        year: inputYear,
        runTime: inputRunTime,
        rating: inputRating,
        genre: [],
        watched: inputWatched, 
      });
    setInputRating("");
    console.log('set value:', inputRating);
    setInputTitle("");
    setInputDesc("");
    setInputYear("");
    setInputRunTime("");
    setInputWatched(false);
    }
  };

  return (
    <form className="container needs-validation" onSubmit={handleSubmit} >
      <div className="row">
        <TextInput
          label= "Title:*"
          value={inputTitle}
          onChange={handleTitleChange}
          placeholderText="Add title of movie"
          validationRules={(value) => value.length >= 2}
          feedbackMessage="Must be at least 2 characters."
        />
      </div>
      <div className="row">
      <TextInput
          label= "Runtime:*"
          value={inputRunTime}
          onChange={handleRunTimeChange}
          placeholderText="Add length of movie"
          validationRules={(value) => value.length >= 2}
          feedbackMessage="Must be at least 2 characters."
        />
      </div>
      <div className="row">
        <div className="col col-md-6 col-sm-6 col-12">
          <TextInput
            label= "Year:*"
            value={inputYear}
            onChange={handleYearChange}
            placeholderText="Add the year of movie"
            validationRules={(value) => value.length <= 4}
            feedbackMessage="Must be no more than 4 characters."
          />
        </div>
        <div className="col col-md-6 col-sm-6 col-12">
          <SelectInput
            label="Rating:*"
            value={inputRating}
            options={movieRatings}
            onChange={handleRatingChange}
          />
        </div>
      </div>
      <div className="row">
        <TextInput
            label= "Description:*"
            value={inputDesc}
            onChange={handleDescChange}
            placeholderText="Add movie description"
            validationRules={(value) => value.length >= 2}
            feedbackMessage="Must be at least 2 characters."
          />
      </div>
      <div className="row">
        <RadioInput
          label= "Watched?"
          value={inputWatched}
          onChange={handleWatchedChange}
        />
      </div>
      <br></br>
      <button className="btn btn-primary" type="submit" onClick={handleClick}>Add</button>
    </form>
  );
};

export default MovieAdd;
