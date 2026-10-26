import { useNavigate, useParams } from "react-router-dom";

const DescriptionPage = ({ movies }) => {
  const navigate = useNavigate();

  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === Number(id));

  if (!movie) {
    return <p className="text-center py-35 text-4xl">Movie not found.</p>;
  }

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="border border-blue-500 w-20 py-1 px-2 rounded-md text-blue-500 cursor-pointer m-4"
      >
        Go Back
      </button>
      <div className="flex h-[calc(100vh-80px)]  items-center gap-6 px-6 m-10">
        <div className="flex h-full w-1/2 ">
          <img
            src={movie.posterUrl}
            alt={`${movie.title} poster`}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex h-full w-1/2 flex-col  border border-gray-200 text-center shadow-md">
          <h1 className="border-b border-gray-200 p-6 text-3xl font-bold">
            {movie.title}
          </h1>

          <div className="border-b border-gray-200 p-6">
            <h2 className="mb-2 font-semibold">Description</h2>
            <p>{movie.description}</p>
          </div>

          <div className="border-b border-gray-200 p-6">
            <h2 className="mb-2 font-semibold">Rating</h2>
            <p>{movie.rate}/5</p>
          </div>

          <div className="mt-auto p-6">
            <button
              onClick={() => navigate(`/TrailerPage/${movie.id}`)}
              className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white hover:bg-blue-700 cursor-pointer"
            >
              Watch trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
