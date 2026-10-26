import { useNavigate, useParams } from "react-router-dom";

const TrailerPage = ({ movies }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === Number(id));

  if (!movie) {
    return <p className="text-center py-35 text-4xl">Movie not found.</p>;
  }

  return (
    <div className="flex justify-center p-6 flex-col gap-y-8">
      <button
        onClick={() => navigate(-1)}
        className="border border-blue-500 w-20 py-1 px-2 rounded-md text-blue-500 cursor-pointer"
      >
        Go Back
      </button>
      <iframe
        src={movie.trailer}
        title={`${movie.title} trailer`}
        className="aspect-video w-full max-w-4xl mx-auto"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default TrailerPage;
