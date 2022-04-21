import React from "react";
import { CarContainer } from "../styled-components";
import { FadeIn } from "../styled-components";

export const Car = ({ car }) => {
  console.log("car ", car);
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
