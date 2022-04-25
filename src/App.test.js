import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import { Header } from "./components/Header/Title/Header";
import { DealersView } from "./components/Dealers/DealersView";

it("renders without crashing", () => {
  shallow(<App />);
});

const answer = {
  success: true,
  message: "Congratulations.",
  totalMilliseconds: 10000,
};

const dataSet = "3pQPeWAl2gg";
const retreivedIds = true;
const carDealers = [
  { dealerId: 1654241051, name: "Doug's Doozies" },
  { dealerId: 1026755274, name: "Bob's Cars" },
  { dealerId: 1893924360, name: "House of Wheels" },
];
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

describe("Header Tests", () => {
  it("Header Receives and renders all props correctly", () => {
    const wrapper = mount(
      <Header
        dataSet={dataSet}
        retrievedIds={retreivedIds}
        answer={answer}
        carDealers={carDealers}
        finalRequest={finalRequest}
      />
    );
    expect(wrapper.props().dataSet).toEqual(dataSet);
    expect(wrapper.props().retrievedIds).toEqual(retreivedIds);
    expect(wrapper.props().answer.success).toEqual(answer.success);
    expect(wrapper.props().carDealers).toEqual(carDealers);
    expect(wrapper.props().finalRequest).toEqual(finalRequest);
  });
});

describe("Dealers View Tests", () => {
  it("Receives props and renders properly", () => {
    const wrapper = mount(<DealersView dealers={finalRequest} />);
    expect(wrapper.props().dealers).toEqual(finalRequest);
  });
});
