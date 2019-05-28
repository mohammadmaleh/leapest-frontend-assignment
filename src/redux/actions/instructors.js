import {
  ADD_INSTRUCTORS,
  LIKE_INSTRUCTORS,
  SELECT_INSTRUCTOR
} from "./actionsType";
import { message } from "antd";
import { fetchInstructorsAPI } from "../../API";
const addInstructors = instructors => {
  return {
    type: ADD_INSTRUCTORS,
    payload: instructors
  };
};

export const likeInstructor = id => {
  return {
    type: LIKE_INSTRUCTORS,
    payload: id
  };
};
export const selectInstructor = id => {
  return {
    type: SELECT_INSTRUCTOR,
    payload: id
  };
};

export const fetchInstructors = () => {
  return dispatch => {
    fetchInstructorsAPI
      .then(instructors => dispatch(addInstructors(instructors)))
      .catch(() =>
        message.error("ops!!, something went wrong, try again later :)")
      );
  };
};
export const fetchInstructor = id => {
  return dispatch => {
    fetchInstructorsAPI
      .then(instructors => {
        let selectedInstructor = instructors.find(
          instructor => instructor.id === Number(id)
        );
        dispatch(selectInstructor(selectedInstructor));
      })
      .catch(() =>
        message.error("ops!!, something went wrong, try again later :)")
      );
  };
};
