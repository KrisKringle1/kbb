import React from "react";
import { DealerContainer } from "../styled-components";
import { Car } from "./Car";
import { FadeIn } from "../styled-components";
export const Dealer = ({ dealer }) => {
  const cars = dealer.vehicles.map((car) => (
    <FadeIn key={car.vehicleId}>
      <Car car={car} key={car.vehicleId} />
    </FadeIn>
  ));
  return (
    <FadeIn>
      <DealerContainer>
        <h2>{dealer.name}</h2>
        <p>
          <strong>Dealer ID: </strong>
          {dealer.dealerId}
        </p>
        {cars}
      </DealerContainer>
    </FadeIn>
  );
};
