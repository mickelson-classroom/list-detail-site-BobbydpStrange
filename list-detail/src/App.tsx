import { useEffect, useState } from "react";
import "./App.css";
import { MovieList } from "./components/movieList";

const App = () => {
  

  return (
    <div className="App">
      <header className="App-header">
       <div className="container text-center">
       <h1>Movies</h1>
       <MovieList/>
       </div>
      </header>
    </div>
  );
};

export default App;

