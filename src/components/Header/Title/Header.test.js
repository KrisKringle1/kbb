import React from "react";
import { shallow } from "enzyme";
import { Header } from "./Header";
import { Title } from "../../styled-components";

it("renders Header Title", () => {
  const wrapper = shallow(<Header />);
  const header = <Title>Kelly Blue Book</Title>;
  expect(wrapper.contains(header)).toEqual(true);
});
