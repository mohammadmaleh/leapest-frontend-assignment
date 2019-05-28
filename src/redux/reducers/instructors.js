import {
  ADD_INSTRUCTORS,
  LIKE_INSTRUCTORS,
  SELECT_INSTRUCTOR
} from "../actions/actionsType";

const initialState = {
  instructors: [],
  selectedInstructor: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_INSTRUCTORS: {
      const instructors = action.payload;

      return {
        ...state,
        instructors: instructors
      };
    }
    case LIKE_INSTRUCTORS: {
      const id = action.payload;
      let instructors = state.instructors.map(instructor => {
        if (instructor.id === id) {
          instructor.liked = !instructor.liked;
        }
        return instructor;
      });
      return {
        ...state,
        instructors
      };
    }
    case SELECT_INSTRUCTOR: {
      console.log(state.instructors);
      let selectedInstructor = action.payload;
      return {
        ...state,
        selectedInstructor
      };
    }
    default:
      return state;
  }
}
