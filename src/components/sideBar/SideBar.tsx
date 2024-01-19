"use client";
import { ImCross } from "react-icons/im";
import react, { useState, useEffect, useRef } from "react";
import {
  All,
  Marriage,
  Career,
  Family,
  Job,
  Love,
  Money,
  Tarot,
} from "../../../public/assets/icons/icons";
// import useFilterStore from "@/store/filterStore";
import { GET_Spec_Astrologer } from "@/lib/data";
import { GET_HOMEPAGE_ASTROLOGERS } from "@/lib/apilinks";
import useFilterStore from "@/store/filterStore";

const special = [
  { id: 1, name: "Vedic astrology" },
  { id: 2, name: "Tarot card reading" },
  { id: 3, name: "Kundli" },
  { id: 4, name: "Numerology" },
  { id: 5, name: "Face Reading" },
  { id: 6, name: "Lal Kitab" },
  { id: 7, name: "Vastu" },
  { id: 8, name: "Motivational therapy" },
  { id: 9, name: "Prashna" },
  { id: 10, name: "KP Astrology" },
  { id: 11, name: "Nadi Astrology" },
  { id: 12, name: "Pendulum dowsing" },
  { id: 13, name: "Karmkand" },
  { id: 14, name: "Pooja" },
];

const language = [
  { id: 1, name: "Hindi" },
  { id: 2, name: "English" },
  { id: 3, name: "telugu" },
  { id: 4, name: "Marathi" },
  { id: 5, name: "Kannada" },
  { id: 6, name: "Malayalam" },
  { id: 7, name: "Tamil" },
  { id: 8, name: "Punjabi" },
  { id: 9, name: "Gujarati" },
  { id: 10, name: "Sanskrti" },
  { id: 11, name: "Rajasthani" },
];

const SideBar = ({
  isOpen,

  onClose,
}: {
  isOpen: boolean;

  onClose: any;
}) => {
  // const {
  //   selectedSpecialities,
  //   selectedLanguages,
  //   toggleSpeciality,
  //   toggleLanguage,
  //   clearSpecialitySelection,
  //   clearLanguageSelection,
  //   isSelectedSpeciality,
  //   isSelectedLanguage,
  //   getApiParams,
  //   // handleApplyFilter
  // } = useFilterStore();

  const {
    pageNumber,
    perPage,
    skills,
    specialization,
    sortOrder,
    languages,
    gender,
    updateFilterParam,
    clearFilters,
    responseData,
    setResponseData,
  } = useFilterStore();

  // const sideDrawerRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(1);
  const [checked, setChecked] = useState("Both");
  const [price, setPrice] = useState("Below ₹30.0");
  const [datas, setData] = useState<string[]>([]);
  const [spec, setSpec] = useState("");
  const [mainData, setMainData] = useState({});
  const [langData, setLangData] = useState<string[]>([]);

  const handleClick = (element: string) => {
    const updateData: string[] = [...datas, element];
    setData(updateData);
  };
  // const handleClickOutside = (event) => {
  //   if (
  //     sideDrawerRef.current &&
  //     !sideDrawerRef.current.contains(event.target)
  //   ) {
  //     closeDrawer();
  //   }
  // };

  // Effect to add/remove click outside event listener for the side drawer
  // useEffect(() => {
  //   if (drawerOpen) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [drawerOpen]);

  // useEffect(() => {}, [mainData]);
  // const handleApplyFunction = () => {
  //   // Create an object with selected filters
  //   const updatedData = {
  //     skill: datas, // Selected skills
  //     spec: spec, // Selected specialization
  //     language: langData, // Selected languages
  //     price: price, // Selected price range
  //     gender: checked, // Selected gender
  //   };

  //   // Update the mainData state with the new object
  //   setMainData(updatedData);
  //   onClose();
  // };
  // https://prod.gurucool.life/api/v1/guru/astrologersDetails
  // const handleApplyFilter = async () => {
  //   const params = getApiParams();
  //   const selectedSpecialityFilters = selectedSpecialities.join(',');
  //   const selectedLanguageFilters = selectedLanguages.join(',');
  //   console.log(selectedLanguageFilters, selectedSpecialityFilters);
  //   try {
  //     // Assuming GET_Spec_Astrologer is an async function
  //     const data = await GET_Spec_Astrologer("");
  //     // Handle the API response here
  //     console.log(data);
  //   } catch (error) {
  //     // Handle errors here
  //     console.error(error);
  //   }
  //   try {
  //     const response = await fetch(GET_HOMEPAGE_ASTROLOGERS(""), {
  //       next: { revalidate: 4 },
  //     });
  //     if (response.ok) {
  //       const data = await response.json();
  //       return data;
  //     } else {
  //       console.error(
  //         "Error fetching data:",
  //         response.status,
  //         response.statusText
  //       );
  //       return undefined;
  //     }
  //   } catch (error) {
  //     throw new Error("Failed to fetch Single blog data.");
  //   }
  // };

  const isChecked = (value: string) => value === checked;
  const isPrice = (value: string) => value === price;
  const isSpec = (value: string) => value === spec;

  const handleFunction = (index: number) => {
    setIndex(index);
  };

  const handleLanguage = (element: string) => {
    const updateData: string[] = [...langData, element];
    setLangData(updateData);
  };

  const handleClear = () => {
    if (index == 1) {
      setData([]);
    } else if (index == 2) {
      setSpec("");
    } else if (index == 3) {
      setLangData([]);
    } else if (index == 4) {
      setPrice("Below ₹30.0");
    } else {
      setChecked("Both");
    }
  };

  const SelectFunction = () => {
    const updateData = [];
    if (index == 3) {
      for (let i of language) {
        updateData.push(i.name);
      }
      setLangData(updateData);
    }
    if (index == 1) {
      for (let i of special) {
        updateData.push(i.name);
      }
      setData(updateData);
    }
  };

  const handleFilterChange = (paramName: string, paramValue: string) => {
    updateFilterParam(paramName, paramValue);
  };
  // Function to handle specialization selection
  const handleSpecializationChange = (selectedSpecialization: string) => {
    if (specialization === selectedSpecialization) {
      // Deselect if the same specialization is clicked again
      updateFilterParam("specialization", "");
    } else {
      // Otherwise, select the new specialization
      updateFilterParam("specialization", selectedSpecialization);
    }
  };
  console.log("skills==>", skills);
  console.log("languages==>", languages);
  console.log("specialization==>", specialization);
  console.log("gender==>", gender);
  console.log("price==>", sortOrder);

  const fetchDataWithFilters = async () => {
    // Construct the filterParams object
    const filterParams = {
      pageNumber,
      perPage,
      skills: skills.join(", "),
      specialization,
      sortOrder,
      languages: languages.join(", "),
      ...(gender !== "" && { gender }),
    };

    // Construct the query string manually
    const queryString = Object.entries(filterParams)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");

    try {
      const apiUrl = `https://prod.gurucool.life/api/v1/guru/astrologersDetails?${queryString}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();

      // Set the response data in the global store
      console.log(responseData);

      setResponseData(responseData);
    } catch (error) {
      // Handle API call errors here
      console.error(error);
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 transition-all duration-500 ease-in-out  ${
        isOpen ? "visible" : "invisible"
      } w-full h-full bg-[rgba(0,0,0,0.7)]  z-20`}
      // ref={sideDrawerRef}
    >
      <div
        className={`xl:h-screen xl:w-[40%] w-full h-[60%] md:h-screen md:w-[50%] bg-white  ${
          isOpen
            ? "md:translate-x-0 translate-y-0 md:translate-y-0"
            : "md:translate-x-full translate-y-full md:translate-y-0"
        }
          fixed xl:top-0 xl:right-0 bottom-0 md:right-0 z-20  ease-in-out duration-300`}
      >
        <div className="w-full p-3 flex justify-between">
          <p className="xl:text-[20px] text-[18px] font-[300] xl:font-[400]">
            Filter
          </p>
          <div
            className="text-base h-fit pt-1 font-bold w-fit  cursor-pointer"
            onClick={onClose}
          >
            <ImCross />
          </div>
        </div>
        <div className="bg-black border"></div>

        <div className="flex xl:gap-4  gap-1 items-center justify-center xl:mt-4 mt-2">
          <div
            className={`${
              index == 1
                ? "border-b-[5px] border-[#965EFB]"
                : "border-b-[5px] border-white "
            } cursor-pointer`}
            onClick={() => handleFunction(1)}
          >
            <p
              className={`xl:font-[500] text-[15px]  xl:text-[1rem] text-[rgb(123,123,123)] hover:text-[#965EFB]`}
            >
              Skills
            </p>
          </div>

          <h6
            className={`xl:font-[500] text-[15px]  xl:text-[1rem] text-[rgb(123,123,123)] hover:text-[#965EFB]`}
          >
            |
          </h6>
          <div
            className={`${
              index == 2
                ? "border-b-[5px] border-[#965EFB]"
                : "border-b-[5px] border-white "
            } cursor-pointer`}
            onClick={() => handleFunction(2)}
          >
            <p
              className={`xl:font-[500] text-[15px]  xl:text-[1rem] text-[rgb(123,123,123)] hover:text-[#965EFB]`}
            >
              Specialities
            </p>
          </div>

          <h6
            className={`xl:font-[500] text-[15px]  xl:text-[1rem] text-[rgb(123,123,123)] hover:text-[#965EFB]`}
          >
            |
          </h6>

          <div
            className={`${
              index == 3
                ? "border-b-[5px] border-[#965EFB]"
                : "border-b-[5px] border-white "
            } cursor-pointer`}
            onClick={() => handleFunction(3)}
          >
            <p
              className={`xl:font-[500] text-[15px]  xl:text-[1rem] text-[rgb(123,123,123)] hover:text-[#965EFB]`}
            >
              Language
            </p>
          </div>

          <h6
            className={`xl:font-[500] text-[15px]  xl:text-[1rem] text-[rgb(123,123,123)] hover:text-[#965EFB]`}
          >
            |
          </h6>

          <div
            className={`${
              index == 4
                ? "border-b-[5px] border-[#965EFB]"
                : "border-b-[5px] border-white "
            } cursor-pointer`}
            onClick={() => handleFunction(4)}
          >
            <p
              className={`xl:font-[500] text-[15px]  xl:text-[1rem] text-[rgb(123,123,123)] hover:text-[#965EFB]`}
            >
              Price
            </p>
          </div>
          <h6
            className={`xl:font-[500] text-[15px]  xl:text-[1rem] text-[rgb(123,123,123)] hover:text-[#965EFB]`}
          >
            |
          </h6>
          <div
            className={`${
              index == 5
                ? "border-b-[5px] border-[#965EFB]"
                : "border-b-[5px] border-white "
            } cursor-pointer`}
            onClick={() => handleFunction(5)}
          >
            <p
              className={`xl:font-[500] text-[15px]  xl:text-[1rem] text-[rgb(123,123,123)] hover:text-[#965EFB]`}
            >
              Gender
            </p>
          </div>
        </div>

        <div
          className={`pr-8 ${
            index == 4 || index == 5 ? "hidden" : "flex"
          }  gap-5 my-3  flex-row items-center justify-end`}
        >
          <button
            onClick={() => SelectFunction()}
            className={`hover:bg-gray-100 ${
              index == 2 ? "hidden" : "block"
            } hover:rounded-md p-2 font-semibold text-[#965EFB] cursor-pointer`}
          >
            Select All
          </button>
          <button
            className="hover:bg-gray-100 hover:rounded-md p-2 font-semibold text-[#965EFB] cursor-pointer"
            onClick={clearFilters}
          >
            Clear All
          </button>
        </div>

        <div
          className={`xl:p-3 p-2 ${
            index == 1 ? "flex" : "hidden"
          } flex-wrap gap-4 w-full h-[160px] md:h-[300px] xl:h-fit xl:no-scrollbar overflow-y-scroll`}
        >
          {special.map((data, index) => (
            <div
              key={data.id}
              className={`p-2 border w-fit h-fit  border-[#8d8c8c] rounded-[5px] cursor-pointer hover:border-[#965EFB] ${
                skills.includes(data.name)
                  ? "border-[#965EFB]"
                  : "border-[#8d8c8c]"
              }`}
              // onClick={() => handleClick(data.name)}
              onClick={() => handleFilterChange("skills", data.name)}
            >
              <p
                className={`m-0 hover:text-[#965EFB] ${
                  skills.includes(data.name) ? "text-[#965EFB]" : ""
                } text-[14px]`}
              >
                {data.name}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`p-3 ${index == 2 ? "flex" : "hidden"} flex-wrap gap-3`}
        >
          <div
            className={`p-1 border w-fit h-9 gap-4 items-center flex justify-between  ${
              spec == "love" ? "border-[#965EFB]" : "border-[#8d8c8c]"
            } rounded-[5px] hover:border-[#965EFB]`}
            onClick={() => handleSpecializationChange("Love")}
          >
            <Love fill={specialization === "Love"} />
            <p
              className={`my-2 hover:text-[#965EFB] ${
                spec == "love" ? "text-[#965EFB]" : "text-black"
              }  text-[14px] leading-2`}
            >
              Love
            </p>
          </div>
          <div
            className={`p-1 border w-fit h-9 gap-4 items-center flex justify-between  ${
              spec == "marriage" ? "border-[#965EFB]" : "border-[#8d8c8c]"
            } rounded-[5px] hover:border-[#965EFB]`}
            onClick={() => handleSpecializationChange("Marriage")}
          >
            <Marriage fill={specialization === "Marriage"} />
            <p
              className={`my-2 hover:text-[#965EFB] ${
                spec == "marriage" ? "text-[#965EFB]" : "text-black"
              }  text-[14px] leading-2`}
            >
              Marriage
            </p>
          </div>
          <div
            className={`p-1 border w-fit h-9 gap-4 items-center flex justify-between  ${
              spec == "job" ? "border-[#965EFB]" : "border-[#8d8c8c]"
            } rounded-[5px] hover:border-[#965EFB]`}
            onClick={() => handleSpecializationChange("Business")}
          >
            <Job fill={specialization === "Business"} />
            <p
              className={`my-2 hover:text-[#965EFB] ${
                spec == "job" ? "text-[#965EFB]" : "text-black"
              }  text-[14px] leading-2`}
            >
              Business
            </p>
          </div>
          <div
            className={`p-1 border w-fit h-9 gap-4 items-center flex justify-between  ${
              spec == "career" ? "border-[#965EFB]" : "border-[#8d8c8c]"
            } rounded-[5px] hover:border-[#965EFB]`}
            onClick={() => handleSpecializationChange("Career")}
          >
            <Career fill={specialization === "Career"} />
            <p
              className={`my-2 hover:text-[#965EFB] ${
                spec == "career" ? "text-[#965EFB]" : "text-black"
              }  text-[14px] leading-2`}
            >
              Career
            </p>
          </div>
          <div
            className={`p-1 border w-fit h-9 gap-4 items-center flex justify-between  ${
              spec == "family" ? "border-[#965EFB]" : "border-[#8d8c8c]"
            } rounded-[5px] hover:border-[#965EFB]`}
            onClick={() => handleSpecializationChange("Life")}
          >
            <Family fill={specialization === "Life"} />
            <p
              className={`my-2 hover:text-[#965EFB] ${
                spec == "family" ? "text-[#965EFB]" : "text-black"
              }  text-[14px] leading-2`}
            >
              Life
            </p>
          </div>
          {/* <div
            className={`p-1 border w-fit h-9 gap-4 items-center flex justify-between  ${
              spec == "money" ? "border-[#965EFB]" : "border-[#8d8c8c]"
            } rounded-[5px] hover:border-[#965EFB]`}
            onClick={() => setSpec("money")}
          >
            <Money fill={spec === "money"} />
            <p
              className={`my-2 hover:text-[#965EFB] ${
                spec == "money" ? "text-[#965EFB]" : "text-black"
              }  text-[14px] leading-2`}
            >
              Money
            </p>
          </div> */}
          <div
            className={`p-1 border w-fit h-9 gap-4 items-center flex justify-between  ${
              spec == "tarot" ? "border-[#965EFB]" : "border-[#8d8c8c]"
            } rounded-[5px] hover:border-[#965EFB]`}
            onClick={() => handleSpecializationChange("Tarot")}
          >
            <Tarot fill={specialization === "Tarot"} />
            <p
              className={`my-2 hover:text-[#965EFB] ${
                spec == "tarot" ? "text-[#965EFB]" : "text-black"
              }  text-[14px] leading-2`}
            >
              Tarot
            </p>
          </div>
        </div>

        <div
          className={`p-3 ${index == 3 ? "flex" : "hidden"} flex-wrap gap-4`}
        >
          {language.map((data, index) => (
            <div
              key={index}
              className={`p-2 border w-fit h-fit  ${
                languages.includes(data.name)
                  ? "border-[#965EFB]"
                  : "border-[#8d8c8c]"
              } rounded-[5px] hover:border-[#965EFB] cursor-pointer`}
              // onClick={() => handleLanguage(data.name)}
              onClick={() => handleFilterChange("languages", data.name)}
            >
              <p
                className={`m-0 hover:text-[#965EFB] text-[14px]  ${
                  languages.includes(data.name) ? "text-[#965EFB]" : ""
                }`}
              >
                {data.name}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`p-3 ${index == 4 ? "flex" : "hidden"} flex-wrap gap-3`}
        >
          <div>
            <div
              className="flex items-center mb-4"
              onClick={() => {
                setPrice("Below ₹30.0");
              }}
            >
              <label>
                <input
                  type="radio"
                  name="sortOrder"
                  value="below 30"
                  checked={sortOrder === "below 30"}
                  onChange={() => handleFilterChange("sortOrder", "below 30")}
                />
                Below 30
              </label>
            </div>
            <div
              className="flex items-center mb-4"
              onClick={() => {
                setPrice("Low to High");
              }}
            >
              <label>
                <input
                  type="radio"
                  name="sortOrder"
                  value="lowToHigh"
                  checked={sortOrder === "lowToHigh"}
                  onChange={() => handleFilterChange("sortOrder", "lowToHigh")}
                />
                Low to High
              </label>
            </div>
            <div
              className="flex items-center"
              onClick={() => {
                setPrice("High to Low");
              }}
            >
               <label>
                <input
                  type="radio"
                  name="sortOrder"
                  value="highToLow"
                  checked={sortOrder === "highToLow"}
                  onChange={() => handleFilterChange("sortOrder", "highToLow")}
                />
                High to Low
              </label>
            </div>
          </div>
        </div>

        <div
          className={`p-3 ${index == 5 ? "flex" : "hidden"} flex-wrap gap-3`}
        >
          <div>
            {/* <div
              className="flex items-center mb-4"
              onClick={() => {
                setChecked("Both");
              }}
            >
              <input
                id="default-radio-1"
                type="radio"
                readOnly
                value="Both"
                checked={isChecked("Both")}
                name="default-radio"
                className="w-4 h-4  bg-gray-100 border-gray-300   dcus:ring-2"
              />
              <label
                htmlFor="default-radio-1"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Both
              </label>
            </div> */}
            <div
              className="flex items-center mb-4"
              onClick={() => {
                setChecked("female Astrologers");
              }}
            >
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={() => handleFilterChange("gender", "Female")}
                />
                Female
              </label>
            </div>
            <div
              className="flex items-center"
              onClick={() => {
                setChecked("Male Astrologers");
              }}
            >
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={() => handleFilterChange("gender", "Male")}
                />
                Male
              </label>
            </div>
          </div>
        </div>

        <div className="p-3">
          <button
            onClick={fetchDataWithFilters}
            className="bg-[#965EFB] w-full text-white font-semibold py-2 rounded-md"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
