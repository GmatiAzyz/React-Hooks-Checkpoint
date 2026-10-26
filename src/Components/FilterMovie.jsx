

const FilterMovie = ({  titleFilter,
  setTitleFilter,
  rateFilter,
  setRateFilter,}) => {

 

  return (
    <div className=" flex flex-col mx-4 gap-y-2 text-slate-900 w-100">
      <label className="block mt-4 ">Search Movie Title</label>
      <input
        type="text"
        placeholder="Search movies..."
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
        className="border w-100 border-slate-400 rounded-2xl p-1.5 px-2 "
      />
      <label className="block">Minimum rating</label>
      <input
        type="number"
        min="0"
        max="5"
        step="0.5"
        value={rateFilter}
        onChange={(e) => setRateFilter(e.target.value)}
        placeholder="0-5"
        className="border w-100 border-slate-400 rounded-2xl py-1.5 px-2"
      />
    </div>
  );
}

export default FilterMovie