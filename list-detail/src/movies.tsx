import React, {useState} from "react";
import MovieDetail from "./movieDetail";

interface movie {
    id: number;
    title: string;
    description: string;
}
export const MovieList: React.FC = () => {
    const [movies, setMovies] = useState<movie[]>([])
    const [selectedMovie, setSelectedMovie] = useState<movie | undefined>();
    const[inputTitle, setInputTitle] = useState<string>("");
    const[inputDesc, setInputDesc] = useState<string>("");

    const handleClick = () => {
        if (inputTitle.trim() === "" && inputDesc.trim() === ""){
            return;
        }
        const newMovie: movie = {id: Date.now(),title:inputTitle,description:inputDesc}
        setMovies([...movies,newMovie]);
    }
    const handleDelete = (deletingMovie: movie) => {
        const newMovies = movies.filter((movie) => movie.id !== deletingMovie.id);
        setMovies(newMovies);

        if(selectedMovie && selectedMovie.id === deletingMovie.id) {
            setSelectedMovie(undefined);
        }
    }
    const [filterText,setFilterText] = useState("");
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <div>
            {selectedMovie && movies.some((movie) => movie.id === selectedMovie.id) && <MovieDetail movie={selectedMovie}/>}
            <h1>Movies</h1>
            <input type="text" placeholder="Filter movie titles" value={filterText}
                onChange={(e) => setFilterText(e.currentTarget.value)}/>
                <br></br><br></br>
        <input  type="text" placeholder="Add movie title"
            onChange={(e)=> setInputTitle(e.currentTarget.value)}/>
        <input type="text" placeholder="Add movie description"
            onChange={(e)=> setInputDesc(e.currentTarget.value)}/>
        <button onClick={handleClick}>Add</button>
            <ul>
                {filteredMovies.map((movie) => (
                //{movies.map((movie) => (
                    <li  onClick={(m) => setSelectedMovie(movie)} key={movie.id}>{movie.title}
                    <button onClick={()=> handleDelete(movie)}>Delete</button></li>
                ))}
                
            </ul>
        </div>
    )
};

