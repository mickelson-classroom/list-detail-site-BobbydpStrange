import { useEffect, useState } from "react";
import "./App.css";
//import { Item } from "./item";
import { MovieList } from "./movies";
//import { FilterInput } from "./filterInput";

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






// import { useEffect, useState } from "react";
// import "./App.css";
// import { Item } from "./item";
// import { Movie } from "./models/movies";
// import { FilterInput } from "./filterInput";

// const App = () => {
//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [title, setTitle] = useState("");
//   //const [loading, setLoading] = useState(false);
//   //const [userClickCount, setUserClickCount] = useState(1);
//   const [newFilterValue, setNewFilterValue] = useState("");
//   const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>();
//   const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setMovies( currentMovies => [...currentMovies, title]);
//     setTitle('');
//   }
//   // useEffect(() => {
//   //   //setLoading(true);
//   //   generateMovieList(20_000)
//   //     .then((data) => setBooks(data))
//   //     .then(() => setLoading(false));
//   // }, [userClickCount]);

//   useEffect(() => {
//     setFilteredMovies(
//       movies.filter((m) =>
//         m.title.toLowerCase().includes(newFilterValue.toLowerCase())
//       )
//     );
//   }, [movies, newFilterValue]);

//   return (
//     <div className="App">
//       <header className="App-header">
       


//         {selectedMovie && (
//           <div>
//             <div>{selectedMovie.title}</div>
//           </div>
//         )}

//         <FilterInput
//           onChange={(newFilterValue) => setNewFilterValue(newFilterValue)}
//         />
//         <ul>
//           {
//             filteredMovies.map((i) => (
//             <Item onClick={(m) => setSelectedMovie(m)} key={i.id} item={i} />
//           ))}
//         </ul>
//       </header>
//     </div>
//   );
// };

// export default App;