import { CHANGE_LANGUAGE } from "../actions/actionsType";
import languages from "../../constatns/language";

const initialState = {
  language: languages[0]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      const { languageCode } = action.payload;
      return {
        ...state,
        language: languages.find(
          language => language.languageCode === languageCode
        )
      };
    }
    default:
      return state;
  }
}
