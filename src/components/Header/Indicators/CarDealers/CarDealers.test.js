import React from "react";
import { mount } from "enzyme";
import { CarDealers } from "./CarDealers";

const carDealers = [
  { dealerId: 1654241051, name: "Doug's Doozies" },
  { dealerId: 1026755274, name: "Bob's Cars" },
  { dealerId: 1893924360, name: "House of Wheels" },
];

describe("Car Dealers", () => {
  it("car dealers accepts props", () => {
    const wrapper = mount(<CarDealers carDealers={carDealers} />);
    expect(wrapper.props().carDealers).toEqual(carDealers);
  });
});
