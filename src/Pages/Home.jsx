import { useState } from "react";
import AddMovie from "../Components/AddMovie";
import MoviesList from "../Components/MoviesList";
import FilterMovie from "../Components/FilterMovie";

const Home = ({ movies, handleAddMovie }) => {
  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState("");

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());

    const matchesRate =
      rateFilter === "" ||
      (movie.rating !== "" &&
        movie.rating != null &&
        Number(movie.rating) >= Number(rateFilter));

    return matchesTitle && matchesRate;
  });

  return (
    <div>
      <AddMovie handleAddMovie={handleAddMovie} />
      <FilterMovie
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        rateFilter={rateFilter}
        setRateFilter={setRateFilter}
      />
      <MoviesList movies={filteredMovies} handleAddMovie={handleAddMovie} />
    </div>
  );
};

export default Home;
