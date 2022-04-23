import React from "react";
import { ListItem, FlexContainer } from "../../../styled-components";
import { BsFillCheckCircleFill } from "react-icons/bs";
import PuffLoader from "react-spinners/PuffLoader";

export const Answer = ({ answer, loading, override, color }) => (
  <FlexContainer>
    <ListItem className={answer.success ? "bold" : ""}>
      {answer.success ? (
        <BsFillCheckCircleFill style={{ marginRight: "3px", color: "green" }} />
      ) : (
        <PuffLoader color={color} loading={loading} css={override} size={15} />
      )}
      Answer Posted Correctly
    </ListItem>
  </FlexContainer>
);
