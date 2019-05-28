import React from "react";
import Header from "./Header";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr } from "../../common/test/testUtils";
import languages from "../../constatns/language";
Enzyme.configure({ adapter: new EnzymeAdapter() });
const setup = (props = {}) => {
  return shallow(<Header {...props} />);
};
test("renders without errors", () => {
  const wrapper = setup({ languages: languages });
  expect(wrapper).toBeTruthy();
});
test("to have change language button", () => {
  const wrapper = setup({
    languages: languages,
    language: languages[0],
    handleChangeLanguage: () => {}
  });
  const changeLanguageButton = findByTestAttr(
    wrapper,
    "change-language-button"
  );
  console.log(changeLanguageButton);
  expect(changeLanguageButton).toBeTruthy();
});
