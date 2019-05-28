import { CHANGE_LANGUAGE } from "./actionsType";

export const changeLanguage = languageCode => ({
  type: CHANGE_LANGUAGE,
  payload: {
    languageCode
  }
});
