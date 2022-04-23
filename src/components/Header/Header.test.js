import React from "react";
import { shallow, mount } from "enzyme";
import { Header } from "./Header";
import { Title } from "../../styled-components";

it("renders Header Title", () => {
  const wrapper = shallow(<Header />);
  const header = <Title>Kelly Blue Book</Title>;
  expect(wrapper.contains(header)).toEqual(true);
});

const dataSet = "3pQPeWAl2gg";
const carDealers = [
  { dealerId: 1654241051, name: "Doug's Doozies" },
  { dealerId: 1026755274, name: "Bob's Cars" },
  { dealerId: 1893924360, name: "House of Wheels" },
];
const answer = {
  success: true,
  message: "Congratulations.",
  totalMilliseconds: 10000,
};
const retrievedIds = true;
