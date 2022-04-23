import React from "react";
import { FlexContainer, ListItem } from "../../styled-components";
import { BsFillCheckCircleFill } from "react-icons/bs";
import PuffLoader from "react-spinners/PuffLoader";

export const DataConstructed = ({ finalRequest, loading, override, color }) => (
  <FlexContainer>
    <ListItem className={finalRequest.length ? "bold" : ""}>
      {finalRequest.length ? (
        <BsFillCheckCircleFill style={{ marginRight: "3px", color: "green" }} />
      ) : (
        <PuffLoader color={color} loading={loading} css={override} size={15} />
      )}
      Data Constructed
    </ListItem>
  </FlexContainer>
);
