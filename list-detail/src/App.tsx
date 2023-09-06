import { useEffect, useState } from "react";
import "./App.css";
import { MovieList } from "./components/movieList";

const App = () => {
  

  return (
    <div className="App">
      <header className="App-header">
       <MovieList/>
       <button className="btn btn-primary">Button Example</button>
      </header>
    </div>
  );
};

export default App;

