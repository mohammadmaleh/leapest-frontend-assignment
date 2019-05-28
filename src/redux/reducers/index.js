import { combineReducers } from "redux";
import language from "./language";
import instructors from "./instructors";
import instructorsFilter from "./instructorsFilter";

export default combineReducers({
  language,
  instructors,
  instructorsFilter
});
