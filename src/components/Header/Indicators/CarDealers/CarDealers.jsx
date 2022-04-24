import React from "react";
import { FlexContainer, ListItem } from "../../../../styled-components";
import { BsFillCheckCircleFill } from "react-icons/bs";
import PuffLoader from "react-spinners/PuffLoader";

export const CarDealers = ({ carDealers, loading, override, color }) => (
  <FlexContainer>
    {carDealers.length ? (
      <BsFillCheckCircleFill style={{ marginRight: "3px", color: "green" }} />
    ) : (
      <PuffLoader color={color} loading={loading} css={override} size={15} />
    )}
    <ListItem className={carDealers.length ? "bold" : ""}>
      Retreived Dealer Names
    </ListItem>
  </FlexContainer>
);
