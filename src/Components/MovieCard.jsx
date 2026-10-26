import { Link } from "react-router-dom";
import Favorite from "./Favorite";
import Rating from "./Rating";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/DescriptionPage/${movie.id}`} className="block">
      <div className="flex h-130 w-full flex-col overflow-hidden rounded-lg shadow-md text-slate-900">
        <img
          className="h-72 w-full shrink-0 object-cover object-center"
          src={movie.posterUrl}
          alt={`${movie.title} poster`}
        />

        <h2 className="line-clamp-1 p-4 text-xl font-semibold">
          {movie.title}
        </h2>

        <p className="mx-2 min-h-20 overflow-hidden px-4 pb-5">
          {movie.description}
        </p>
        <div className="mt-auto flex shrink-0 items-center justify-between p-4">
          <Favorite />
          <Rating rating={movie.rate} />
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
