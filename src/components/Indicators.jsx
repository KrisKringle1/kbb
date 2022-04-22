import React, { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";

import {
  FlexContainer,
  ListItem,
  DataContainer,
  Button,
  ButtonSpan,
} from "../styled-components";

export const Indicators = ({
  getAllData,
  answer,
  dataSet,
  loading,
  retrievedIds,
  finalRequest,
  carDealers,
}) => {
  console.log();
  let [color, setColor] = useState("#ffffff");

  const override = css`
    display: inline-block;
    margin: 7px;
    border-color: red;
  `;
  return (
    <DataContainer>
      <ul style={{ marginBottom: "30px" }}>
        <FlexContainer>
          <ListItem className={dataSet ? "bold" : ""}>
            {dataSet ? (
              <BsFillCheckCircleFill
                style={{ margin: "auto 20px", color: "green" }}
              />
            ) : (
              <PacmanLoader
                color={color}
                loading={true}
                css={override}
                size={12}
              />
            )}
            Retreived Dataset ID:
            {dataSet ? " " + dataSet : ""}
          </ListItem>
        </FlexContainer>
        <ListItem className={retrievedIds ? "bold" : ""}>
          Retrieved Vehicle IDs:
          {retrievedIds ? (
            <BsFillCheckCircleFill
              style={{ margin: "auto 20px", color: "green" }}
            />
          ) : (
            <PacmanLoader
              color={color}
              loading={true}
              css={override}
              size={12}
            />
          )}
        </ListItem>
        <ListItem className={carDealers.length ? "bold" : ""}>
          Retreived Dealer Names
          {carDealers.length ? (
            <BsFillCheckCircleFill
              style={{ margin: "auto 20px", color: "green" }}
            />
          ) : (
            <PacmanLoader
              color={color}
              loading={true}
              css={override}
              size={12}
            />
          )}
        </ListItem>
        <ListItem className={finalRequest.length ? "bold" : ""}>
          Data Constructed
          {finalRequest.length ? (
            <BsFillCheckCircleFill
              style={{ margin: "auto 20px", color: "green" }}
            />
          ) : (
            <PacmanLoader
              color={color}
              loading={true}
              css={override}
              size={12}
            />
          )}
        </ListItem>
        <ListItem className={answer.success ? "bold" : ""}>
          Answer Posted Correctly
          {answer.success ? (
            <BsFillCheckCircleFill
              style={{ margin: "auto 20px", color: "green" }}
            />
          ) : (
            <PacmanLoader
              color={color}
              loading={true}
              css={override}
              size={12}
            />
          )}
        </ListItem>
        <ListItem className={answer.totalMilliseconds ? "bold" : ""}>
          Answer Time:
          {answer.totalMilliseconds ? (
            " " + answer.totalMilliseconds / 1000 + " seconds"
          ) : (
            <PacmanLoader
              color={color}
              loading={true}
              css={override}
              size={12}
            />
          )}
        </ListItem>
      </ul>
      <Button onClick={getAllData} disabled={loading}>
        <ButtonSpan>Fetch Me</ButtonSpan>
      </Button>
    </DataContainer>
  );
};
