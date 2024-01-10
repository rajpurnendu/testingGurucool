import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className="relative mx-auto max-w-lg">
      <input
        type="text"
        placeholder="Search Your Favourite Astro..."
        className="block w-full py-3 pl-10 pr-4 leading-tight text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-violet-600 focus:transition duration-100 delay-100"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FaSearch className="text-gray-500" />
      </div>
    </div>
  );
};

export default Searchbar;
