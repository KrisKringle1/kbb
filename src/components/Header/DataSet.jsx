import React from "react";
import { FlexContainer, ListItem } from "../../styled-components";
import { BsFillCheckCircleFill } from "react-icons/bs";
import PuffLoader from "react-spinners/PuffLoader";

export const DataSet = ({ dataSet, override, loading, color }) => {
  return (
    <FlexContainer>
      {dataSet ? (
        <BsFillCheckCircleFill style={{ marginRight: "3px", color: "green" }} />
      ) : (
        <PuffLoader color={color} loading={loading} css={override} size={15} />
      )}
      <ListItem className={dataSet ? "bold" : ""}>
        Retreived Dataset ID
      </ListItem>
    </FlexContainer>
  );
};
