import { useState } from "react";
import AddMovieModal from "./AddMovieModal";

const AddMovie = ({handleAddMovie}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onClose = () => {
    setModalIsOpen(false);
  };

  return (
    <div >
      <button
        onClick={() => setModalIsOpen(true)}
        className="mx-4 mt-4 border-2 border-slate-200 w-35 text-center p-1 rounded-md text-white bg-cyan-600  cursor-pointer hover:opacity-75"
      >
        Add Movie
      </button>
      {modalIsOpen && (
        <AddMovieModal onClose={onClose} handleAddMovie={handleAddMovie} />
      )}
    </div>
  );
};

export default AddMovie;
