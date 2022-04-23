import React from "react";
import { shallow, mount } from "enzyme";
import { DataSet } from "./DataSet";

const dataSet = "3pQPeWAl2gg";

describe("Inherits Props", () => {
  it("accepts Data Set", () => {
    const wrapper = mount(<DataSet dataSet={dataSet} />);
    expect(wrapper.props().dataSet).toEqual(dataSet);
  });
});
