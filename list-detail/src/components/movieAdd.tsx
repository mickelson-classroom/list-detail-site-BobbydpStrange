import React, { useEffect, useState } from "react";
import {Movie} from "../models/movie";
import TextInput from "./textInput";

interface MovieAddProps {
  onAddMovie: (movie: Movie) => void;
  onTitleChange: (title: string) => void;
  onDescriptionChange: (description: string) => void;
  onYearChange: (year: string) => void;
  onRunTimeChange: (runTime: string) => void;
  onRatingChange: (rating: string) => void;
}

export const MovieAdd: React.FC<MovieAddProps> = ({ 
  onAddMovie, 
  onTitleChange, 
  onDescriptionChange,
  onYearChange,
  onRunTimeChange,
  onRatingChange
}) => {
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputDesc, setInputDesc] = useState<string>("");
  const [inputRunTime, setInputRunTime] = useState<string>("");
  const [inputRating, setInputRating] = useState<string>("");
  const [inputYear, setInputYear] = useState<string>("");

  const minCharactrCount = 3;

  const isTitleValid = inputTitle.length >= minCharactrCount;
  const isDescValid = inputDesc.length >= minCharactrCount;
  const isRunTimeValid = inputRunTime.length > 0;
  const isRatingValid = inputRating !== "";
  const isYearValid = inputYear !== "" && inputYear.length <= 4;

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
    setInputRating(value);
    onRatingChange(value);
  };

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
      });
    setInputTitle("");
    setInputDesc("");
    setInputYear("");
    setInputRunTime("");
    setInputRating("");
    }
  };

  return (
    <form className="container needs-validation" >
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
        <div className="col col-md-6">
          <TextInput
            label= "Year:*"
            value={inputYear}
            onChange={handleYearChange}
            placeholderText="Add the year of movie"
            validationRules={(value) => value.length <= 4}
            feedbackMessage="Must be no more than 4 characters."
          />
        </div>
        <div className="col col-md-6">
          <label className="form-label">Rating:*</label>
          <div className="input-group has-validation">
            <select 
              className={`form-control ${isRatingValid ? "is-valid": "is-invalid"}`}
              id="rating"
              required
              aria-describedby="ratingvalidation"
              onChange={(e) => handleRatingChange(e.currentTarget.value)}
              value={inputRating}
              >
              <option selected disabled value="">Choose...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <div id="ratingvalidation" className="invalid-feedback">Need a rating</div>
          </div>
        </div>
      </div>
      <div className="row">
        <TextInput
            label= "Description:"
            value={inputDesc}
            onChange={handleDescChange}
            placeholderText="Add movie description"
            validationRules={(value) => value.length >= 2}
            feedbackMessage="Must be at least 2 characters."
          />
      </div>
      <br></br>
      <button className="btn btn-primary" type="submit" onClick={handleClick}>Add</button>
    </form>
  );
};

export default MovieAdd;
