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
          label= "Title"
          value={inputTitle}
          onChange={handleTitleChange}
          placeholderText="Add title of movie"
          validationRules={(value) => value.length >= 2}
          feedbackMessage="Must be at least 2 characters."
        />
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
            onChange={(e) => {setInputRunTime(e.currentTarget.value);
              onRunTimeChange(e.currentTarget.value);}}
            value={inputRunTime}
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
              onChange={(e) => {setInputYear(e.currentTarget.value);
                onYearChange(e.currentTarget.value);}}
              value={inputYear}
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
            onChange={(e) => {setInputDesc(e.currentTarget.value);
              onDescriptionChange(e.currentTarget.value);}}
            value={inputDesc}
            required
          />
          <div id="descriptionvalidation" className="valid-feedback">Great Year</div>
            <div id="descriptionvalidation" className="invalid-feedback">Missing input</div>
        </div>
      </div>
      <br></br>
      <button className="btn btn-primary" type="submit" onClick={handleClick}>Add</button>
    </form>
  );
};

export default MovieAdd;
