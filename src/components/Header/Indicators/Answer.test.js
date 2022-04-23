import React from "react";
import { shallow, mount } from "enzyme";
import { Answer } from "./Answer";

const answer = {
  success: true,
  message: "Congratulations.",
  totalMilliseconds: 10000,
};

describe("Answer Spinner", () => {
  it("Received Congratulations message", () => {
    const wrapper = mount(<Answer answer={answer} />);
    expect(wrapper.props().answer.message).toEqual(answer.message);
  });
  it("Received success message", () => {
    const wrapper = mount(<Answer answer={answer} />);
    expect(wrapper.props().answer.success).toEqual(answer.success);
  });
});
