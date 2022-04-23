import React from "react";
import { FlexContainer, ListItem } from "../../styled-components";
import { BsFillCheckCircleFill } from "react-icons/bs";
import PuffLoader from "react-spinners/PuffLoader";

export const AnswerTime = ({ answer, loading, override, color }) => (
  <FlexContainer>
    <ListItem className={answer.totalMilliseconds ? "bold" : ""}>
      {answer.totalMilliseconds ? (
        <BsFillCheckCircleFill style={{ marginRight: "3px", color: "green" }} />
      ) : (
        <PuffLoader color={color} loading={loading} css={override} size={15} />
      )}
      Answer Time:
      {answer.totalMilliseconds
        ? " " + answer.totalMilliseconds / 1000 + " seconds"
        : " 0.000 seconds"}
    </ListItem>
  </FlexContainer>
);
