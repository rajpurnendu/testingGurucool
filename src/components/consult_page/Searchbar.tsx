"use client";
import { useState, useEffect } from "react";
import useFilterStore from "@/store/filterStore";
import { FaSearch } from "react-icons/fa";
import { TESTING_URL } from "@/lib/apilinks";

const Searchbar = ({ data }: { data: any }) => {
  const { name, setName, consultAstroData, setConsultAstroData } =
    useFilterStore();

  const [debounceName, setDebounceName] = useState(name);

  useEffect(() => {
    // Set a timeout to update debounceName after a delay
    const handler = setTimeout(() => {
      setDebounceName(name);
    }, 500); // 500ms delay

    // Clear the timeout if name changes
    return () => clearTimeout(handler);
  }, [name]);

  useEffect(() => {
    // Define a function to fetch data from the API
    const fetchData = async () => {
      try {
        if (debounceName === "") {
          // Call the first API when name is empty
          // const firstApiUrl = `${TESTING_URL}guru/astrologersDetails?perPage=300`;
          //         const response = await fetch(firstApiUrl);
          //         if (!response.ok) {
          //           throw new Error("Network response was not ok");
          //         }
          //         const jsonData = await response.json();
          //         console.log(jsonData);

          setConsultAstroData(data);
        } else {
          // Call the second API when name is not empty
          const secondApiUrl = `${TESTING_URL}guru/homePageSearchBar?Name=${debounceName}&allowedPlatform=web`;
          const response = await fetch(secondApiUrl);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const jsonData = await response.json();
          setConsultAstroData(jsonData?.guru?.docs);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData(); // Initial API call when component mounts

    // Call fetchData whenever name changes
    if (debounceName !== "") {
      fetchData();
    }
  }, [debounceName]);

  console.log(">>>>>>>>>>>>>", consultAstroData);

  return (
    <div className="relative mx-auto max-w-lg">
      <input
        type="text"
        placeholder="Search Your Favourite Astro..."
        className="block w-full py-3 pl-10 pr-4 leading-tight text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-violet-600 focus:transition duration-100 delay-100"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FaSearch className="text-gray-500" />
      </div>
    </div>
  );
};

export default Searchbar;
