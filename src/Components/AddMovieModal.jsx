import { useState } from "react";

const AddMovieModal = ({ onClose, handleAddMovie }) => {
  const [title, setTitle] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [trailer, setTrailer] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newMovie = {
      id: Math.random(),
      title: title.trim(),
      posterUrl: posterUrl.trim(),
      trailer: trailer.trim(),
      description: description.trim(),
      rate: rate.trim(),
    };

    handleAddMovie(newMovie);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center  justify-center bg-black/70 p-4 text-slate-900">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-2xl font-bold">Add New Movie</h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col m-3 justify-around gap-y-1 mb-4"
        >
          <label>Movie Name</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border w-80 mt-1 mb-1  border-slate-300 rounded-md px-2"
          />
          <label className="block">Poster URL</label>
          <input
            type="url"
            value={posterUrl}
            onChange={(e) => setPosterUrl(e.target.value)}
            className="border w-80 mb-1 border-slate-300 rounded-md px-2"
          />
          <label className="block">Trailer URL</label>
          <input
            type="url"
            value={trailer}
            onChange={(e) => setTrailer(e.target.value)}
            className="border w-80 mb-1  border-slate-300 rounded-md px-2"
          />
          <label className="block">Rate</label>
          <input
            max={5}
            min={0}
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="border w-80 mb-1  border-slate-300 rounded-md px-2"
          />
          <label className="block ">Movie Description</label>
          <textarea
            name="text-area"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border w-80  border-slate-300 rounded-md px-2"
          ></textarea>
          <div className="flex justify-end gap-3 mt-4">
            <button
              className="border px-2 py-1 rounded-md shadow-md border-slate-900 cursor-pointer hover:border-red-500 hover:text-red-500
          "
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              onClick={() => handleSubmit()}
              className="border px-2 py-1 rounded-md shadow-md border-slate-900 cursor-pointer hover:text-green-500 hover:border-green-500  "
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovieModal;
