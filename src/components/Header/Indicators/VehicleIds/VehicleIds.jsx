import React from "react";
import { FlexContainer, ListItem } from "../../../../styled-components";
import { BsFillCheckCircleFill } from "react-icons/bs";
import PuffLoader from "react-spinners/PuffLoader";

export const VehicleIds = ({ retrievedIds, loading, override, color }) => (
  <FlexContainer>
    {retrievedIds ? (
      <BsFillCheckCircleFill style={{ marginRight: "3px", color: "green" }} />
    ) : (
      <PuffLoader color={color} loading={loading} css={override} size={15} />
    )}
    <ListItem className={retrievedIds ? "bold" : ""}>
      Retrieved Vehicle IDs
    </ListItem>
  </FlexContainer>
);
