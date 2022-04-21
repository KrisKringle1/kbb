import React, { useState } from "react";
import { HeaderContainer, Title, Heading } from "../styled-components";
import { DataContainer } from "../styled-components";
import { Button } from "../styled-components";
import { ButtonSpan } from "../styled-components";
import { FlexContainer } from "../styled-components";
import { ListItem } from "../styled-components";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: inline-block;
  margin: 7px;
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
                <ListItem className={dataSet ? "bold" : ""}>
                  Retreived Dataset ID:
                  {dataSet ? (
                    " " + dataSet
                  ) : (
                    <PacmanLoader
                      color={color}
                      loading={true}
                      css={override}
                      size={12}
                    />
                  )}
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
        </div>
      </HeaderContainer>
    </Heading>
  );
};
