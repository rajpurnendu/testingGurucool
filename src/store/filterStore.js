import { create } from "zustand";

const useFilterStore = create((set) => ({
  //   selectedSpecialities: [],
  //   selectedLanguages: [],

  //   // Function to toggle the selection of a speciality
  //   toggleSpeciality: (speciality) =>
  //     set((state) => ({
  //       selectedSpecialities: state.selectedSpecialities.includes(speciality)
  //         ? state.selectedSpecialities.filter((selected) => selected !== speciality)
  //         : [...state.selectedSpecialities, speciality],
  //     })),

  //   // Function to toggle the selection of a language
  //   toggleLanguage: (language) =>
  //     set((state) => ({
  //       selectedLanguages: state.selectedLanguages.includes(language)
  //         ? state.selectedLanguages.filter((selected) => selected !== language)
  //         : [...state.selectedLanguages, language],
  //     })),

  //   // Function to clear all selected specialities
  //   clearSpecialitySelection: () => set({ selectedSpecialities: [] }),

  //   // Function to clear all selected languages
  //   clearLanguageSelection: () => set({ selectedLanguages: [] }),

  //   // Function to check if a speciality is selected
  //   isSelectedSpeciality: (speciality) => selectedSpecialities.includes(speciality),

  //   // Function to check if a language is selected
  //   isSelectedLanguage: (language) => selectedLanguages.includes(language),

  // //   Function to generate the params for the API call
  // // getApiParams: () => {
  // //     const selectedSpecialityFilters = selectedSpecialityFilters.join(',');
  // //     const selectedLanguageFilters = selectedLanguages.join(',');

  // //     return {
  // //       specialities: selectedSpecialityFilters,
  // //       languages: selectedLanguageFilters,
  // //     };
  // //   },
  // // Function to apply filters and fetch data
  pageNumber: 1,
  perPage: 15,
  skills: [],
  specialization: "",
  sortOrder: "",
  languages: [],
  gender: "",
  responseData: null, // Initial response data is null
  astroDetails: null, // Initial astroDetails data is null
  minimumCallDuration: null, // Initial astroDetails data is null
  callPurchasedId: "", // Initial callPurchasedId is empty string
  callAvailability: "",

  // Function to update the response data
  setResponseData: (data) => {
    set({ responseData: data });
  },
  setAstroDetails: (data) => {
    set({ astroDetails: data });
  },
  setMinCallDuration: (data) => {
    set({ minimumCallDuration: data });
  },
  setCallPurchasedId: (data) => {
    set({ callPurchasedId: data });
  },
  setCallAvailability: (data) => {
    set({ callAvailability: data });
  },

  // Function to update a specific filter parameter
  updateFilterParam: (paramName, paramValue) => {
    set((state) => {
      if (paramName === "skills" || paramName === "languages") {
        // If paramName is skills or languages, toggle the value
        const updatedArray = state[paramName].includes(paramValue)
          ? state[paramName].filter((item) => item !== paramValue)
          : [...state[paramName], paramValue];

        return {
          ...state,
          [paramName]: updatedArray,
        };
      } else {
        return {
          ...state,
          [paramName]: paramValue,
        };
      }
    });
  },

  // Function to clear all filter parameters
  clearFilters: () => {
    set({
      pageNumber: 1,
      perPage: 12,
      skills: [],
      specialization: "",
      sortOrder: "",
      languages: [],
      gender: "",
    });
  },
}));

export default useFilterStore;
