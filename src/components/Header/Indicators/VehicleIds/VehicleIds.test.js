import React from "react";
import { mount } from "enzyme";
import { VehicleIds } from "./VehicleIds";

const retrievedIds = true;

describe("Inherits Props", () => {
  it("retrieves vehicle ids", () => {
    const wrapper = mount(<VehicleIds retrievedIds={retrievedIds} />);
    expect(wrapper.props().retrievedIds).toEqual(retrievedIds);
  });
});
