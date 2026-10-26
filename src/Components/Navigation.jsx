import { Popcorn } from "lucide-react";

const Navigation = () => {
  return (
    <div className="flex justify-between p-2 items-center border-b-2 border-slate-50 shadow-md">
      <div className="flex text-3xl mx-2 text-blue-500  justify-center items-center">
        <Popcorn size={30}/>
        <h1>Movify</h1>
      </div>
      <div className="flex gap-6 mx-4 text-1xl text-cyan-900">
        <p className=" cursor-pointer hover:text-cyan-300">Home</p>
        <p className=" cursor-pointer hover:text-cyan-300">Favorites</p>
        <p className=" cursor-pointer hover:text-cyan-300">Blog</p>
      </div>
    </div>
  );
};

export default Navigation;
