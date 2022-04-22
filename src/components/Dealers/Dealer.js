import React from "react";
import { Car } from "../Cars/Car";
import { FadeIn, DealerContainer } from "../../styled-components";
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
