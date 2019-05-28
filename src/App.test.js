import React from "react";
import App from "./App";
import Enzyme, { shallow } from "enzyme/build";
import EnzymeAdapter from "enzyme-adapter-react-16/build";
Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<App {...props} />);
};
test("renders without errors", () => {
  const wrapper = setup();
  expect(wrapper).toBeTruthy();
});
