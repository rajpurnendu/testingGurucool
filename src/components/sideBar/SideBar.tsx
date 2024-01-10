"use client";
import { ImCross } from "react-icons/im";
import react, { useState, useEffect } from "react";
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

const special = [
  { id: 1, name: "vedic Astrology" },
  { id: 2, name: "Tarot Card reading" },
  { id: 3, name: "Kundli" },
  { id: 4, name: "Numerlogy" },
  { id: 5, name: "Face Reading" },
  { id: 6, name: "Lal Kitab" },
  { id: 7, name: "Vastu" },
  { id: 8, name: "Motivational Therapy" },
  { id: 9, name: "Prashna" },
  { id: 10, name: "KP Astrology" },
  { id: 11, name: "Nadi Astrology" },
  { id: 12, name: "Pendulum dowsing" },
  { id: 13, name: "Karmkand" },
  { id: 14, name: "Pooja" },
];

const language = [
  { id: 1, name: "hindi" },
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

  useEffect(() => {
    console.log(mainData);
  }, [mainData]);
  const handleApplyFunction = () => {
    // Create an object with selected filters
    const updatedData = {
      skill: datas, // Selected skills
      spec: spec, // Selected specialization
      language: langData, // Selected languages
      price: price, // Selected price range
      gender: checked, // Selected gender
    };

    // Update the mainData state with the new object
    setMainData(updatedData);
    onClose();
  };

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
  return (
    <div
      className={`fixed top-0 right-0 transition-all duration-500 ease-in-out animate__animated animate__bounce ${
        isOpen ? "flex" : "hidden"
      } w-full h-full bg-[rgba(0,0,0,0.7)]  z-20`}
    >
      <div
        className={`xl:h-screen xl:w-[40%] w-full h-[60%] md:h-screen md:w-[50%] bg-white  ${
          isOpen
            ? "xl:translate-x-0 xl:translate-y-0 md:translate-x-0 md:translate-y-0 translate-x-0 translate-y-0"
            : "xl:translate-x-full xl:translate-y-0 md:translate-y-0 md:translate-x-full translate-x-0 translate-y-full"
        }
          fixed xl:top-0 xl:right-0 bottom-0 md:right-0 z-20 transition-transform ease-in-out duration-500`}
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
            }`}
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
            }`}
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
            }`}
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
            }`}
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
            }`}
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
            } hover:rounded-md p-2 font-semibold text-[#965EFB] `}
          >
            Select All
          </button>
          <button
            className="hover:bg-gray-100 hover:rounded-md p-2 font-semibold text-[#965EFB]"
            onClick={handleClear}
          >
            Clear All
          </button>
        </div>

        <div
          className={`xl:p-3 p-2 ${
            index == 1 ? "flex" : "hidden"
          } flex-wrap gap-4 w-full h-[160px] md:h-[300px] xl:h-[250px] overflow-y-scroll`}
        >
          {special.map((data, index) => (
            <div
              key={data.id}
              className={`p-2 border w-fit h-fit  border-[#8d8c8c] rounded-[5px] hover:border-[#965EFB] ${
                datas.includes(data.name)
                  ? "border-[#965EFB]"
                  : "border-[#8d8c8c]"
              }`}
              onClick={() => handleClick(data.name)}
            >
              <p
                className={`m-0 hover:text-[#965EFB] ${
                  datas.includes(data.name) ? "text-[#965EFB]" : ""
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
            onClick={() => setSpec("love")}
          >
            <Love fill={spec === "love"} />
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
            onClick={() => setSpec("marriage")}
          >
            <Marriage fill={spec === "marriage"} />
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
            onClick={() => setSpec("job")}
          >
            <Job fill={spec === "job"} />
            <p
              className={`my-2 hover:text-[#965EFB] ${
                spec == "job" ? "text-[#965EFB]" : "text-black"
              }  text-[14px] leading-2`}
            >
              Job
            </p>
          </div>
          <div
            className={`p-1 border w-fit h-9 gap-4 items-center flex justify-between  ${
              spec == "career" ? "border-[#965EFB]" : "border-[#8d8c8c]"
            } rounded-[5px] hover:border-[#965EFB]`}
            onClick={() => setSpec("career")}
          >
            <Career fill={spec === "career"} />
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
            onClick={() => setSpec("family")}
          >
            <Family fill={spec === "family"} />
            <p
              className={`my-2 hover:text-[#965EFB] ${
                spec == "family" ? "text-[#965EFB]" : "text-black"
              }  text-[14px] leading-2`}
            >
              Family
            </p>
          </div>
          <div
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
          </div>
          <div
            className={`p-1 border w-fit h-9 gap-4 items-center flex justify-between  ${
              spec == "tarot" ? "border-[#965EFB]" : "border-[#8d8c8c]"
            } rounded-[5px] hover:border-[#965EFB]`}
            onClick={() => setSpec("tarot")}
          >
            <Tarot fill={spec === "tarot"} />
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
                langData.includes(data.name)
                  ? "border-[#965EFB]"
                  : "border-[#8d8c8c]"
              } rounded-[5px] hover:border-[#965EFB]`}
              onClick={() => handleLanguage(data.name)}
            >
              <p
                className={`m-0 hover:text-[#965EFB] text-[14px]  ${
                  langData.includes(data.name) ? "text-[#965EFB]" : ""
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
              <input
                type="radio"
                readOnly
                value="Below ₹30.0"
                checked={isPrice("Below ₹30.0")}
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300   dcus:ring-2"
              />
              <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Below ₹30.0
              </label>
            </div>
            <div
              className="flex items-center mb-4"
              onClick={() => {
                setPrice("Low to High");
              }}
            >
              <input
                type="radio"
                readOnly
                value="Low to High"
                checked={isPrice("Low to High")}
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300   dcus:ring-2"
              />
              <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Low to High
              </label>
            </div>
            <div
              className="flex items-center"
              onClick={() => {
                setPrice("High to Low");
              }}
            >
              <input
                type="radio"
                readOnly
                checked={isPrice("High to Low")}
                value="High to Low"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-500"
              />
              <label className="ms-2 text-sm font-medium text-gray-900">
                High to Low
              </label>
            </div>
          </div>
        </div>

        <div
          className={`p-3 ${index == 5 ? "flex" : "hidden"} flex-wrap gap-3`}
        >
          <div>
            <div
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
            </div>
            <div
              className="flex items-center mb-4"
              onClick={() => {
                setChecked("female Astrologers");
              }}
            >
              <input
                readOnly
                id="default-radio-1"
                type="radio"
                name="default-radio"
                value="female Astrologers"
                checked={isChecked("female Astrologers")}
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300   dcus:ring-2"
              />
              <label
                htmlFor="default-radio-1"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Female Astrologers
              </label>
            </div>
            <div
              className="flex items-center"
              onClick={() => {
                setChecked("Male Astrologers");
              }}
            >
              <input
                id="default-radio-2"
                readOnly
                type="radio"
                value="Male Astrologers"
                checked={isChecked("Male Astrologers")}
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300"
              />
              <label
                htmlFor="default-radio-2"
                className="ms-2 text-sm font-medium text-gray-900"
              >
                Male Astrologers
              </label>
            </div>
          </div>
        </div>

        <div className="p-3">
          <button
            onClick={handleApplyFunction}
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
