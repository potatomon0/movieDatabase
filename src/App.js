import "./App.css";
import { useState, useEffect } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

function App() {
  const apiKey = "7c7dee79"
  // --------------------------{APIKEY DATA}
  const [movie, setMovie] = useState("")

  // --------------------------{STATE}
  const getMovie = async(searchTerm) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
    //-------- ^go to the Site and Search for Title^ ----------
    const data = await response.json()
    //----- ^Turn Info into Json format^ ----------
    setMovie(data)
  }
  //-------------------------[ Function that uses async-await to fetch movie data]

  useEffect(()=>{
    getMovie("Clueless")
  },[])


  return (
    <div className="App">
      <Form moviesearch={getMovie}/>
      {/* ^pass down getMovie to pass down searchTerm^ */}
      <MovieDisplay movie={movie}/>
    </div>
  );
}




export default App;