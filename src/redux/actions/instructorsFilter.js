import { UPDATE_SORT_TYPE, UPDATE_FILTER_TEXT } from "./actionsType";

export const updateSortType = sortType => {
  return {
    type: UPDATE_SORT_TYPE,
    payload: sortType
  };
};
export const updateFilterText = filterText => {
  return {
    type: UPDATE_FILTER_TEXT,
    payload: filterText
  };
};
