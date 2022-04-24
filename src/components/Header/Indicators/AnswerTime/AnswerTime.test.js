import React from "react";
import { mount } from "enzyme";
import { AnswerTime } from "./AnswerTime";

const answer = {
  success: true,
  message: "Congratulations.",
};

describe("Answer Spinner", () => {
  it("Received Congratulations message", () => {
    const wrapper = mount(<AnswerTime answer={answer} />);
    expect(wrapper.props().answer.message).toEqual(answer.message);
  });
  it("Received success message", () => {
    const wrapper = mount(<AnswerTime answer={answer} />);
    expect(wrapper.props().answer.success).toEqual(answer.success);
  });
});
