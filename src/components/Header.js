import React, { useState } from "react";
import { HeaderContainer, Title, Heading } from "../styled-components";
import { DataContainer } from "../styled-components";
import { Button } from "../styled-components";
import { ButtonSpan } from "../styled-components";
import { FlexContainer } from "../styled-components";
import { ListItem } from "../styled-components";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: inline-block;
  margin-right: 3px;
  border-color: red;
`;

export const Header = ({
  getAllData,
  answer,
  dataSet,
  loading,
  retrievedIds,
  finalRequest,
  carDealers,
}) => {
  let [color, setColor] = useState("#ffffff");
  console.log("final request ", loading);

  return (
    <Heading>
      <HeaderContainer>
        <div>
          <Title>Kelly Blue Book</Title>
          <DataContainer>
            <ul style={{ marginBottom: "30px" }}>
              <FlexContainer>
                {dataSet ? (
                  <BsFillCheckCircleFill
                    style={{ marginRight: "3px", color: "green" }}
                  />
                ) : (
                  <PuffLoader
                    color={color}
                    loading={loading}
                    css={override}
                    size={15}
                  />
                )}
                <ListItem className={dataSet ? "bold" : ""}>
                  Retreived Dataset ID
                </ListItem>
              </FlexContainer>
              <FlexContainer>
                {retrievedIds ? (
                  <BsFillCheckCircleFill
                    style={{ marginRight: "3px", color: "green" }}
                  />
                ) : (
                  <PuffLoader
                    color={color}
                    loading={loading}
                    css={override}
                    size={15}
                  />
                )}
                <ListItem className={retrievedIds ? "bold" : ""}>
                  Retrieved Vehicle IDs
                </ListItem>
              </FlexContainer>
              <FlexContainer>
                {carDealers.length ? (
                  <BsFillCheckCircleFill
                    style={{ marginRight: "3px", color: "green" }}
                  />
                ) : (
                  <PuffLoader
                    color={color}
                    loading={loading}
                    css={override}
                    size={15}
                  />
                )}
                <ListItem className={carDealers.length ? "bold" : ""}>
                  Retreived Dealer Names
                </ListItem>
              </FlexContainer>
              <ListItem className={finalRequest.length ? "bold" : ""}>
                {finalRequest.length ? (
                  <BsFillCheckCircleFill
                    style={{ marginRight: "3px", color: "green" }}
                  />
                ) : (
                  <PuffLoader
                    color={color}
                    loading={loading}
                    css={override}
                    size={15}
                  />
                )}
                Data Constructed
              </ListItem>
              <ListItem className={answer.success ? "bold" : ""}>
                {answer.success ? (
                  <BsFillCheckCircleFill
                    style={{ marginRight: "3px", color: "green" }}
                  />
                ) : (
                  <PuffLoader
                    color={color}
                    loading={loading}
                    css={override}
                    size={15}
                  />
                )}
                Answer Posted Correctly
              </ListItem>
              <ListItem className={answer.totalMilliseconds ? "bold" : ""}>
                {answer.totalMilliseconds ? (
                  <BsFillCheckCircleFill
                    style={{ marginRight: "3px", color: "green" }}
                  />
                ) : (
                  <PuffLoader
                    color={color}
                    loading={loading}
                    css={override}
                    size={15}
                  />
                )}
                Answer Time:
                {answer.totalMilliseconds
                  ? " " + answer.totalMilliseconds / 1000 + " seconds"
                  : " 0.000 seconds"}
              </ListItem>
            </ul>
            <Button onClick={getAllData} disabled={loading}>
              <ButtonSpan>
                <strong>Fetch Me</strong>
              </ButtonSpan>
            </Button>
          </DataContainer>
        </div>
      </HeaderContainer>
    </Heading>
  );
};
