import MovieCard from "./MovieCard"


const MoviesList = ({ movies, handleAddMovie }) => {
  return (
    <div className="grid grid-cols-1 gap-6 p-10 sm:grid-cols-2 lg:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          handleAddMovie={handleAddMovie}
        />
      ))}
    </div>
  );
};

export default MoviesList