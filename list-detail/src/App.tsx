import { useEffect, useState } from "react";
import "./App.css";
import { MovieList } from "./components/movieList";

const App = () => {
  

  return (
    <div className="App">
      <header className="App-header">
       <MovieList/>
      </header>
    </div>
  );
};

export default App;

