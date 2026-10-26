import { useState } from "react";
import Navigation from "./Components/Navigation";
import { moviesData } from "./Data.js";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage.jsx";
import DescriptionPage from "./Pages/DescriptionPage.jsx";
import Home from "./Pages/Home.jsx";
import TrailerPage from "./Pages/TrailerPage.jsx";

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  

   const handleAddMovie = (newMovie) => {
     setMovies((prevMovies) => [...prevMovies, newMovie]);
   };


  return (
    <div>
      <Navigation />

      <Routes>
        <Route
          path="/"
          element={<Home movies={movies} handleAddMovie={handleAddMovie} />}
        />
        <Route path="/*" element={<ErrorPage />} />
        <Route
          path="/DescriptionPage/:id"
          element={<DescriptionPage movies={movies} />}
        />
        <Route
          path="/TrailerPage/:id"
          element={<TrailerPage movies={movies} />}
        />
      </Routes>
    </div>
  );
};

export default App;
