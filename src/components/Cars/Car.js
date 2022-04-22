import React from "react";
import { CarContainer, FadeIn } from "../../styled-components";

export const Car = ({ car }) => {
  return (
    <FadeIn>
      <CarContainer>
        <strong>
          {car.year} {car.make} {car.model}
        </strong>
        <p>
          <strong>Vehicle ID: </strong>
          {car.vehicleId}
        </p>
      </CarContainer>
    </FadeIn>
  );
};
