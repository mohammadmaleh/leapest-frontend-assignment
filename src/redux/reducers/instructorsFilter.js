import { UPDATE_FILTER_TEXT, UPDATE_SORT_TYPE } from "../actions/actionsType";

const initialState = {
  instructorNameFilter: "",
  activeSort: {
    type: "alphabetical",
    ascending: true
  }
};
export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SORT_TYPE: {
      const sort = action.payload;

      return {
        ...state,
        activeSort: sort
      };
    }
    case UPDATE_FILTER_TEXT: {
      const instructorNameFilter = action.payload;

      return {
        ...state,
        instructorNameFilter
      };
    }

    default:
      return state;
  }
}
