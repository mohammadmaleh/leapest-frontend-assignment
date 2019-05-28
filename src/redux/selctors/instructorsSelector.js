import { createSelector } from "reselect";
//sorting functions
const sortAlphabeticalAscending = (a, b) => {
  if (a.instructorName < b.instructorName) return -1;

  if (a.instructorName > b.instructorName) return 1;

  return 0;
};
const sortAlphabeticalDescending = (a, b) => {
  if (a.instructorName > b.instructorName) return -1;

  if (a.instructorName < b.instructorName) return 1;

  return 0;
};
const sortStartRateAscending = (a, b) => b.startRate - a.startRate;
const sortStartRateDescending = (a, b) => a.startRate - b.startRate;
const sortRateAscending = (a, b) => b.rating - a.rating;
const sortRateDescending = (a, b) => a.rating - b.rating;
// selector functions
const instructorsSelector = state => state.instructors;
const instructorsFilterSelector = state => state.instructorsFilter;
const getFilteredInstructors = (instructorsReducer, instructorFilter) => {
  let { instructorNameFilter, activeSort } = instructorFilter;
  let instructors = instructorsReducer.instructors;
  let sortFunction;

  if (activeSort.type === "alphabetical") {
    if (activeSort.ascending) sortFunction = sortAlphabeticalAscending;
    else sortFunction = sortAlphabeticalDescending;
  }
  if (activeSort.type === "startRate") {
    if (activeSort.ascending) sortFunction = sortStartRateAscending;
    else sortFunction = sortStartRateDescending;
  }
  if (activeSort.type === "rate") {
    if (activeSort.ascending) sortFunction = sortRateAscending;
    else sortFunction = sortRateDescending;
  }

  return instructors
    .filter(instructor =>
      instructor.instructorName
        .toLowerCase()
        .includes(instructorNameFilter.toLowerCase())
    )
    .sort(sortFunction);
};

export default createSelector(
  instructorsSelector,
  instructorsFilterSelector,
  getFilteredInstructors
);
