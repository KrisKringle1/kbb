import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";

it("renders without crashing", () => {
  shallow(<App />);
});

const answer = {
  success: true,
  message: "Congratulations.",
  totalMilliseconds: 10000,
};

describe("Answer Spinner", () => {
  it("App Receives and renders all props correctly", () => {
    const wrapper = mount(<App answer={answer} />);
    expect(wrapper.props().answer.message).toEqual(answer.message);
    expect(wrapper.props().answer.success).toEqual(answer.success);
  });
});
