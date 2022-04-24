import React from "react";
import { mount } from "enzyme";
import { DataConstructed } from "./DataConstructed";

const finalRequest = [
  {
    dealerId: 1654241051,
    name: "Doug's Doozies",
    vehicles: [
      { vehicleId: 253718412, make: "Bentley", model: "Mulsanne", year: 2016 },
      {
        vehicleId: 1365861952,
        make: "Cheverolet",
        model: "Corvette",
        year: 1979,
      },
      { vehicleId: 2146982858, make: "Nissan", model: "Altima", year: 2012 },
    ],
  },
  {
    dealerId: 1026755274,
    name: "Bob's Cars",
    vehicles: [
      { vehicleId: 1829628657, make: "Honda", model: "Accord", year: 2016 },
      { vehicleId: 2081848578, make: "MINI", model: "Cooper", year: 2004 },
      { vehicleId: 1223954998, make: "Ford", model: "F150", year: 2014 },
    ],
  },
  {
    dealerId: 1893924360,
    name: "House of Wheels",
    vehicles: [
      { vehicleId: 1809895707, make: "Kia", model: "Soul", year: 2016 },
      { vehicleId: 1032962395, make: "Ford", model: "F150", year: 2009 },
      {
        vehicleId: 699215794,
        make: "Mitsubishi",
        model: "Gallant",
        year: 2013,
      },
    ],
  },
];

describe("Car Dealers", () => {
  it("car dealers accepts props", () => {
    const wrapper = mount(<DataConstructed finalRequest={finalRequest} />);
    expect(wrapper.props().finalRequest).toEqual(finalRequest);
  });
});
